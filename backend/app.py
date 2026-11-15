"""Loopback-only run service for the Lab Environment."""
import asyncio
import gzip
import hashlib
from contextlib import asynccontextmanager
import importlib.util
import json
import os
from pathlib import Path
import signal
import shutil
import subprocess
import sys
import threading
import time
from urllib.parse import urlparse
import uuid

from fastapi import FastAPI, HTTPException, Request
from fastapi.responses import JSONResponse, StreamingResponse, Response
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.trustedhost import TrustedHostMiddleware
from pydantic import BaseModel, ConfigDict, Field
from typing import Literal

from runtime_env import load_local_env
from backend.store import Store, ACTIVE
from backend.ingest import ingest
from backend.replay import RecordingCatalog

ROOT = Path(__file__).resolve().parents[1]
load_local_env(ROOT/'.env')


class RunConfig(BaseModel):
    model_config = ConfigDict(extra='forbid')
    mode: Literal['tinker_modal'] = 'tinker_modal'
    arm: Literal['A','B'] = 'B'
    rounds: int = Field(default=1, ge=1, le=3)
    seed: int = Field(default=42, ge=0, le=2147483647)
    model: str | None = Field(default=None, max_length=180, pattern=r'^[A-Za-z0-9_./:\-]+$')


class Manager:
    def __init__(self, directory, runner=True):
        self.directory = Path(directory); self.directory.mkdir(parents=True, exist_ok=True); self.directory.chmod(0o700)
        self.store = Store(self.directory/'runs.sqlite3'); self.runner = runner
        self.processes = {}; self.threads = []; self.lock = threading.RLock(); self.closing = False
        self.secrets = [v for k,v in os.environ.items() if any(t in k.upper() for t in ['API_KEY','TOKEN','SECRET']) and len(v)>8]
        for s in self.store.list():
            if s['status'] in ACTIVE:
                self.out(s['runId']).mkdir(parents=True,exist_ok=True);(self.out(s['runId'])/'stop.requested').touch()
                self.store.append(s['runId'],'server:interrupted:'+str(time.time_ns()),'run.status',{'status':'interrupted','error':'Server restarted; start a new run to continue.'})
            else:
                ingest(self.store,s['runId'],self.out(s['runId']),self.redact)

    def out(self, run_id): return self.directory/run_id/'artifacts'

    def redact(self, text):
        for secret in self.secrets: text = text.replace(secret,'[REDACTED]')
        return text

    def capabilities(self):
        tinker=bool(importlib.util.find_spec('tinker') and importlib.util.find_spec('tml_renderers'))
        key=bool(os.environ.get('TINKER_API_KEY'));model=os.environ.get('TINKER_MODEL','')
        return {'connected':True,'tinkerInstalled':tinker,'tinkerConfigured':key,'model':model,
                'modes':[{'id':'tinker_modal','name':'Tinker · Modal training','available':tinker and key and bool(model) and shutil.which('modal') is not None,'description':'Real model calls and GPU training. Requires Modal authentication and prepared data. No default benchmark is selected.'}],
                'maxRounds':3,'maxModelCalls':int(os.environ.get('LAB_MAX_LLM_CALLS','32'))}

    def start(self, config):
        with self.lock:
            if any(s['status'] in ACTIVE for s in self.store.list()): raise HTTPException(409,'A run is already active. Stop it before starting another.')
            mode=next(m for m in self.capabilities()['modes'] if m['id']==config.mode)
            if not mode['available']: raise HTTPException(422,'Selected provider is not ready. Install/configure it before starting.')
            c=config.model_dump();c['model']=c['model'] or os.environ.get('TINKER_MODEL')
            commit=subprocess.check_output(['git','rev-parse','HEAD'],cwd=ROOT,text=True).strip()
            run_id=uuid.uuid4().hex;s=self.store.create(run_id,c,commit);self.out(run_id).mkdir(parents=True)
            if self.runner:
                t=threading.Thread(target=self.execute,args=(run_id,),daemon=True);self.threads.append(t);t.start()
            return s

    def execute(self, run_id):
        s=self.store.get(run_id);base=self.directory/run_id;out=self.out(run_id);workspace=base/'workspace'
        try:
            self.store.append(run_id,'server:starting','run.status',{'status':'starting'})
            subprocess.run(['git','clone','--quiet','--shared','--no-hardlinks',str(ROOT),str(workspace)],check=True,capture_output=True,timeout=60)
            subprocess.run(['git','checkout','--quiet','--detach',s['sourceCommit']],cwd=workspace,check=True,capture_output=True,timeout=15)
            for key,value in [('user.name','Lab Research'),('user.email','lab@localhost'),('core.hooksPath','/dev/null')]:
                subprocess.run(['git','config',key,value],cwd=workspace,check=True,capture_output=True)
            (base/'config.json').write_text(json.dumps(s['config']))
            if (out/'stop.requested').exists(): return
            env={k:v for k,v in os.environ.items() if k in {'PATH','HOME','TMPDIR','LANG','LC_ALL','SSL_CERT_FILE','SSL_CERT_DIR','TINKER_API_KEY','TINKER_MODEL','LAB_MAX_LLM_CALLS','LAB_RUN_TIMEOUT','MODAL_TOKEN_ID','MODAL_TOKEN_SECRET','DOCKER_HOST','DOCKER_CONTEXT','DOCKER_CONFIG'}}
            env.update({'PYTHONPATH':str(ROOT),'PYTHONUNBUFFERED':'1','EXA':'off','MEMORY_BACKEND':'local','MPLCONFIGDIR':str(base/'mpl')})
            with (out/'worker.log').open('w') as log:
                p=subprocess.Popen([sys.executable,str(ROOT/'backend'/'worker.py'),'--workspace',str(workspace),'--out',str(out),'--config',str(base/'config.json')],cwd=workspace,env=env,stdout=log,stderr=subprocess.STDOUT,start_new_session=True)
                with self.lock:self.processes[run_id]=p
                self.store.append(run_id,'server:running','run.status',{'status':'running'})
                end=time.monotonic()+int(os.environ.get('LAB_RUN_TIMEOUT','1200'))
                while p.poll() is None:
                    ingest(self.store,run_id,out,self.redact)
                    if self.closing or (out/'stop.requested').exists() or time.monotonic()>end:
                        self.terminate(p);break
                    time.sleep(.35)
                ingest(self.store,run_id,out,self.redact)
                stopped=(out/'stop.requested').exists() or self.closing
                status='stopped' if stopped else 'completed' if p.returncode==0 else 'failed'
                error=None if status=='completed' else 'Local orchestration stopped; already dispatched remote work may finish.' if stopped else f'Runner exited with code {p.returncode}. Inspect worker.log for details.'
                self.store.append(run_id,'server:terminal','run.status',{'status':status,'error':error})
        except Exception as error:
            self.store.append(run_id,'server:failed','run.status',{'status':'failed','error':f'Could not execute run ({type(error).__name__}). Check local runner setup.'})
        finally:
            with self.lock:self.processes.pop(run_id,None)
            current=self.store.get(run_id)
            if current and current['status'] in ACTIVE:
                self.store.append(run_id,'server:stopped-before-launch','run.status',{'status':'stopped','error':None})

    def terminate(self,p):
        if p.poll() is not None:return
        try:os.killpg(p.pid,signal.SIGTERM);p.wait(timeout=3)
        except subprocess.TimeoutExpired:os.killpg(p.pid,signal.SIGKILL);p.wait(timeout=3)
        except ProcessLookupError:pass

    def stop(self,run_id):
        s=self.store.get(run_id)
        if not s:raise HTTPException(404,'Run not found')
        if s['status'] in ACTIVE:
            (self.out(run_id)/'stop.requested').touch()
            self.store.append(run_id,'server:stop-requested','run.status',{'status':'stopping'})
        return self.store.get(run_id)

    def close(self):
        self.closing=True
        for run_id,p in list(self.processes.items()):
            (self.out(run_id)/'stop.requested').touch();self.terminate(p)
        for thread in self.threads:thread.join(timeout=5)

    def artifacts(self,run_id):
        out=self.out(run_id)
        if not out.is_dir():return []
        paths=[p for p in out.rglob('*') if p.is_file() and p.suffix in {'.json','.jsonl','.ndjson','.tsv','.log'}]
        return [{'id':str(p.relative_to(out)),'name':p.name,'bytes':p.stat().st_size} for p in sorted(paths)][:200]


def create_app(data_dir=None,runner=True,execution_enabled=False):
    holder={}
    @asynccontextmanager
    async def lifespan(app):
        holder['recordings']=RecordingCatalog(ROOT/'data'/'replays'/'swarm-viewer-sample-runs.zip')
        holder['manager']=Manager(data_dir or os.environ.get('LAB_DATA_DIR',str(ROOT/'.lab_data')),runner)
        yield
        holder['manager'].close()
    app=FastAPI(title='Lab Environment',lifespan=lifespan)
    app.add_middleware(TrustedHostMiddleware,allowed_hosts=['127.0.0.1','localhost','testserver'])
    @app.middleware('http')
    async def local_origin(request,call_next):
        origin=request.headers.get('origin')
        if request.method in {'POST','PUT','DELETE','PATCH'} and origin and urlparse(origin).hostname not in {'127.0.0.1','localhost'}:
            return JSONResponse({'detail':'Local origins only'},status_code=403)
        return await call_next(request)
    def manager():return holder['manager']
    def get(run_id):
        if not (s:=manager().store.get(run_id)):raise HTTPException(404,'Run not found')
        if s['config']['mode']!='tinker_modal':raise HTTPException(410,'This experiment has been removed from the Lab Environment.')
        return s
    @app.get('/api/health')
    def health():return {**manager().capabilities(),'viewerMode':'recorded','executionEnabled':execution_enabled,'modes':manager().capabilities()['modes'] if execution_enabled else []}
    @app.get('/api/recordings')
    def recordings():return holder['recordings'].list()
    @app.get('/api/recordings/{run_id}')
    def recording(run_id:str,request:Request):
        try:bundle=holder['recordings'].get(run_id)
        except KeyError:raise HTTPException(404,'Recording not found')
        raw=json.dumps(bundle,separators=(',',':')).encode()
        etag='"'+hashlib.sha256(raw).hexdigest()+'"'
        headers={'ETag':etag,'Cache-Control':'no-cache','Vary':'Accept-Encoding'}
        if request.headers.get('if-none-match')==etag:return Response(status_code=304,headers=headers)
        if 'gzip' in request.headers.get('accept-encoding',''):
            headers['Content-Encoding']='gzip';raw=gzip.compress(raw,compresslevel=5,mtime=0)
        return Response(raw,media_type='application/json',headers=headers)
    @app.get('/api/experiments')
    def experiments():return [{'id':'autoresearch','title':'Autoresearch swarm','description':'Conductor, four workers, and a critic. Ari’s boredom-controlled search over train.py.'}]
    @app.get('/api/runs')
    def runs():return [s for s in manager().store.list() if s['config']['mode']=='tinker_modal']
    @app.post('/api/runs',status_code=201)
    def start(config:RunConfig):
        if not execution_enabled:raise HTTPException(409,'This branch is a read-only recording viewer. Live research is supplied by the backend team.')
        return manager().start(config)
    @app.get('/api/runs/{run_id}')
    def snapshot(run_id:str):return get(run_id)
    @app.post('/api/runs/{run_id}/stop')
    def stop(run_id:str):get(run_id);return manager().stop(run_id)
    @app.get('/api/runs/{run_id}/events')
    async def events(run_id:str,request:Request,after:int=0):
        get(run_id)
        try:cursor=max(after,int(request.headers.get('last-event-id','0')))
        except ValueError:raise HTTPException(422,'Invalid event cursor')
        async def stream():
            nonlocal cursor
            heartbeat=0;initial=True
            while not await request.is_disconnected():
                s=get(run_id)
                if s['lastSequence']>cursor or initial:
                    initial=False;cursor=s['lastSequence'];yield 'id: '+str(cursor)+'\nevent: snapshot\ndata: '+json.dumps(s)+'\n\n'
                else:
                    heartbeat+=1
                    if heartbeat%20==0:yield ': heartbeat\n\n'
                await asyncio.sleep(.5)
        return StreamingResponse(stream(),media_type='text/event-stream',headers={'Cache-Control':'no-cache','X-Accel-Buffering':'no'})
    @app.get('/api/runs/{run_id}/events.json')
    def history(run_id:str,after:int=0):get(run_id);return manager().store.events(run_id,after)
    @app.get('/api/runs/{run_id}/export')
    def export(run_id:str):return {'schema':'lab-run/v1','snapshot':get(run_id),'events':manager().store.events(run_id)}
    @app.get('/api/runs/{run_id}/artifacts')
    def artifacts(run_id:str):get(run_id);return manager().artifacts(run_id)
    @app.get('/api/runs/{run_id}/artifacts/{artifact_id:path}')
    def artifact(run_id:str,artifact_id:str):
        get(run_id);m=manager()
        if artifact_id not in {a['id'] for a in m.artifacts(run_id)}:raise HTTPException(404,'Artifact not found')
        root=m.out(run_id).resolve();path=(root/artifact_id).resolve()
        if not path.is_relative_to(root) or path.is_symlink():raise HTTPException(404,'Artifact not found')
        return Response(m.redact(path.read_text(errors='replace')),media_type='text/plain',headers={'Content-Disposition':f'attachment; filename="{path.name}"'})
    if (ROOT/'dist').is_dir():app.mount('/',StaticFiles(directory=ROOT/'dist',html=True),name='frontend')
    return app
