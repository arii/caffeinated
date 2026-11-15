"""Read-only adapter from swarm-viewer/v1 bundles to time-indexed lab snapshots.

The source's sparse keyframes are kept as source artifacts, never trusted as a
starting state. Every frame is folded from the native event prefix instead.
"""
from copy import deepcopy
from datetime import datetime
import hashlib
import json
import logging
import os
from pathlib import Path
import re
import zipfile

from backend.ingest import number, spectrum_color

COLLECTIONS=('experiments','llm_calls','memory','sources','questions','observations','discoveries','rewards','diary','hypotheses')
ACTIVITY={
    'agent.assigned':('assigned','working','notebook'),
    'hypothesis.proposed':('proposing','thinking','notebook'),
    'gate.checked':('gated','reviewing','analyzer'),
    'experiment.started':('training','working','culture'),
    'experiment.finished':('reviewing','reviewing','analyzer'),
    'verdict.issued':('reviewing','reviewing','analyzer'),
    'message.sent':('talking','working','notebook'),
    'items.shared':('sharing','working','notebook'),
    'diary.written':('writing_diary','working','notebook'),
    'memory.written':('writing_diary','working','notebook'),
    'llm.called':('thinking','thinking','notebook'),
}


def entity_map(rows):
    return {row.get('id') or next((row[k] for k in row if k.endswith('_id') and k!='agent_id'),None):row for row in rows}


def event_message(event):
    p=event.get('payload',{})
    return str(p.get('text') or p.get('summary') or p.get('title') or p.get('why') or p.get('rationale') or p.get('excerpt') or event['type'].replace('.',' · '))[:3000]


def build_recording(native_manifest, native_events, entities):
    """Pure deterministic fold. Entity lookups never import late verdicts/results."""
    manifest=deepcopy(native_manifest)
    if manifest.get('schema')!='swarm-viewer/v1':raise ValueError('Unsupported recording schema')
    events=[];seen_ids=set();seen_ticks=set()
    for event in sorted(native_events,key=lambda e:e['tick']):
        tick=event['tick']
        if not isinstance(tick,int) or tick<0:raise ValueError('Invalid recording tick')
        if event.get('run_id')!=manifest['run_id']:raise ValueError('Mixed recording IDs')
        if event['event_id'] in seen_ids:continue
        if tick in seen_ticks:raise ValueError('Duplicate recording tick')
        seen_ids.add(event['event_id']);seen_ticks.add(tick)
        events.append({**event,'agentId':event.get('agent_id'),'message':event_message(event)})
    last_tick=max((e['tick'] for e in events),default=0)
    live=manifest.get('status') in {'running','live'} or bool(manifest.get('live'))
    manifest.update({'id':manifest['run_id'],'totalTicks':last_tick,'tickDurationMs':700,'live':live})
    mock_sources='example.org/mock' in json.dumps(entities)
    manifest['description']='Recorded sample · mock prior-art sources' if mock_sources else 'Recorded research · no live model calls'
    manifest['sample']=mock_sources
    provenance=manifest.get('provenance',{})
    created=manifest.get('time',{}).get('ts_start')
    created_at=datetime.fromisoformat(created.replace('Z','+00:00')).timestamp() if created else 0
    agents=[]
    family_counts={'B':0,'C':0,'P':0};human_index=0
    for identity in manifest.get('agents',[]):
        original=identity.get('display_name') or identity.get('label') or identity.get('native_id',identity['agent_id'])
        identity['original_display_name']=original
        if identity.get('type') in {'baseline','world'}:
            identity['display_name']='Reference' if identity['type']=='baseline' else 'Environment'
        else:
            field=str(identity.get('family') or identity.get('field') or '').lower()
            prefix='B' if field in {'b','bio','biology'} else 'C' if field in {'c','chem','chemistry'} else 'P' if field in {'p','physics'} else ['B','C','P'][human_index%3]
            identity['familySource']='recorded' if field in {'b','bio','biology','c','chem','chemistry','p','physics'} else 'display assignment'
            identity['family']={'B':'Bio','C':'Chem','P':'Physics'}[prefix]
            family_counts[prefix]+=1;identity['display_name']=prefix+str(family_counts[prefix]);human_index+=1
        identity['label']=identity['display_name']
    for identity in manifest.get('agents',[]):
        kind=identity.get('type','worker')
        agents.append({'id':identity['agent_id'],'nativeId':identity.get('native_id',''),'name':identity.get('display_name') or identity.get('label') or identity.get('native_id',identity['agent_id']),
                       'family':identity.get('family'),'familySource':identity.get('familySource'),'type':kind,'role':kind,'state':'idle','activity':'idle','stationId':'notebook','sinceTick':-1,
                       'boredom':None,'focus':{},'counters':{'experiments':0,'keeps':0,'questions':0,'observations':0,'memory_writes':0,'tokens':0}})
    by_id={a['id']:a for a in agents}
    s={'runId':manifest['run_id'],'title':manifest.get('title','Research recording'),'lastSequence':0,'status':'running','createdAt':created_at,
       'config':{'mode':'recorded','task':manifest.get('swarm',''),'arm':manifest.get('arm',{}).get('id','unknown'),'rounds':manifest.get('time',{}).get('rounds',0),'seed':None,'model':provenance.get('llm') or None},
       'sourceCommit':provenance.get('swarm_commit') or '', 'progress':0,'round':0,'tick':-1,'phase':'setup','boredom':0,'regime':'EXPLOIT','value':None,'reference':None,
       'agents':agents,'findings':[],'results':[],'sources':[],'error':None,'metric':manifest['metric'],
       'provenance':{'llm':provenance.get('llm','unknown'),'gpu':provenance.get('gpu','unknown'),'exa':provenance.get('exa','unknown'),'memory':provenance.get('memory_backend','unknown'),'execution':'recorded'},'discoveries':[]}
    maps={name:entity_map(rows) for name,rows in entities.items()}
    result_by_id={};accepted=set();replications=set();frames=[{'tick':-1,'snapshot':deepcopy(s)}]
    def best(value):
        if value is None:return
        if s['value'] is None:s['value']=value
        else:s['value']=(min if s['metric']['direction']=='minimize' else max)(s['value'],value)
    for event in events:
        kind=event['type'];tick=event['tick'];p=event.get('payload',{});refs=event.get('refs',{});aid=event.get('agent_id');a=by_id.get(aid)
        s['tick']=tick;s['lastSequence']=tick+1;s['round']=event.get('round',s['round']);s['phase']=event.get('phase','');s['progress']=tick/max(1,last_tick+int(live))
        if a:
            if kind in ACTIVITY:
                a['sinceTick']=tick;a['activity'],a['state'],a['stationId']=ACTIVITY[kind]
            for key in ['question_id','hypothesis_id','experiment_id']:
                if key in refs:a['focus'][key]=refs[key]
        if kind=='round.started':
            for field,source in [('regime','regime'),('boredom','swarm_B')]:
                if source in p:s[field]=p[source]*100 if field=='boredom' else p[source]
        elif kind=='agent.assigned' and a:
            a['role']=p.get('role') or a['type'];a['scout']=bool(p.get('scout'))
        elif kind=='boredom.measured':
            value=number(p.get('B'))
            if value is not None:
                value=min(1,max(0,value));regime=p.get('regime','EXPLOIT')
                if a:
                    a['boredom']=value*100;a['boredomSpectrum']={'position':value,'color':spectrum_color(value),'regime':regime}
                    a['boredomDetail']={**p,'measured_tick':tick}
                else:s['boredom']=value*100;s['regime']=regime
        elif kind=='question.asked' and a:
            a['sinceTick']=tick
            a['activity']='recalling' if p.get('kind')=='recall' else 'researching';a['state']='thinking';a['stationId']='notebook' if p.get('kind')=='recall' else 'explorer'
            a['counters']['questions']+=1;a['lastQuestion']=event['message']
        elif kind=='observation.received':
            if a:a['counters']['observations']+=1;a['lastObservation']=event['message']
            sid=refs.get('source_id')
            if sid:
                source=maps.get('sources',{}).get(sid,{})
                s['sources']=(s['sources']+[{'id':sid,'title':p.get('summary') or source.get('title'),'url':p.get('url') or source.get('url'),'query_id':refs.get('question_id')}])[-8:]
        elif kind=='hypothesis.proposed' and a:a['lastIdea']=event['message']
        elif kind=='experiment.finished':
            eid=refs.get('experiment_id');entity=maps.get('experiments',{}).get(eid,{})
            # Only use outcome fields when this experiment actually finishes.
            value=number(p.get('metric_value'))
            if value is None:value=number(entity.get('metric_value'))
            row={'id':eid,'agent':a['name'] if a else aid or 'Unknown','agentId':aid,'round':event.get('round',0),'tick':tick,'kind':entity.get('kind','candidate'),'status':p.get('status','unknown'),'value':value,'commit':entity.get('commit'),'description':entity.get('description') or p.get('title') or '',
                 'sources':entity.get('source_ids',[]),'effectSize':number(p.get('effect_size')),'pValue':number(p.get('p')),'reward':number(p.get('reward'))}
            result_by_id[eid]=row;s['results'].append(row)
            if a:a['lastResult']=row;a['counters']['experiments']+=1;a['counters']['keeps']+=int(row['status'] in {'keep','replicated'})
            if row['kind']=='baseline':s['reference']=value;best(value)
            elif manifest.get('swarm')=='ignobel' and row['status']=='replicated':
                replications.add(eid)
                s['value']=len(replications) if s['metric']['name']=='replicated_findings' else value
            elif eid in accepted:best(value)
        elif kind=='verdict.issued' and p.get('accepted'):
            eid=refs.get('experiment_id');accepted.add(eid)
            if eid in result_by_id:best(result_by_id[eid]['value'])
        elif kind=='discovery.made':
            discovery={**p,'tick':tick,'agentId':aid,**refs};s['discoveries'].append(discovery)
            if manifest.get('swarm')!='ignobel':best(number(p.get('metric_value')))
        elif kind=='memory.written' and a:a['counters']['memory_writes']+=1
        elif kind in {'message.sent','items.shared'} and a:
            partner=p.get('to_agent_id')
            if partner:a['focus']['partner_agent_id']=partner
            if partner in by_id:a['stationId']=by_id[partner]['stationId']
            if p.get('text'):a['lastMessage']=str(p['text'])[:3000]
        elif kind=='llm.called' and a:
            call=maps.get('llm_calls',{}).get(refs.get('llm_call_id'),{})
            response=call.get('response',{})
            if isinstance(response,dict):
                idea=response.get('idea') or response.get('why')
                if idea:a['lastIdea']=str(idea)[:3000];a['lastMessage']=a['lastIdea']
                if response.get('rationale'):a['lastRationale']=str(response['rationale'])[:3000]
            tokens=p.get('tokens',0)
            a['counters']['tokens']+=int(tokens if isinstance(tokens,(int,float)) else sum(tokens.values()) if isinstance(tokens,dict) else 0)
        if kind in {'memory.written','diary.written','hypothesis.proposed','verdict.issued','discovery.made','question.asked','observation.received'}:
            message=event['message']
            if kind in {'memory.written','diary.written'}:
                collection='memory' if kind=='memory.written' else 'diary';key='memory_id' if kind=='memory.written' else 'diary_id'
                entity=maps.get(collection,{}).get(refs.get(key),{})
                # The item exists at this event. Later-mutated attribution is not copied.
                message=str(entity.get('text') or entity.get('content') or message)[:3000]
                if a:a['lastNote']=message
            if a:a['lastMessage']=message
            s['findings']=(s['findings']+[{'agent':a['id'] if a else aid or '', 'role':kind.split('.')[0].title(),'message':message,'round':event.get('round',0),'tick':tick,'type':kind}])[-8:]
        if kind=='run.finished' or (tick==last_tick and not live):
            status=manifest.get('status','completed')
            s['status']='completed' if status=='finished' else status;s['progress']=1
            for item in agents:item['state']='idle';item['activity']='idle'
        frames.append({'tick':tick,'snapshot':deepcopy(s)})
    return {'manifest':manifest,'frames':frames,'events':events,'entities':entities}


class RecordingCatalog:
    def __init__(self, archive, directories=()):
        self.archive=Path(archive);self.manifests={};self.cache={}
        self.directories=[Path(p).absolute() for p in directories]
        self.directory_runs={};self.directory_cache={}
        self.content_version=''
        if not self.archive.is_file():return
        self.content_version=hashlib.sha256(self.archive.read_bytes()).hexdigest()[:16]+'-v2'
        with zipfile.ZipFile(self.archive) as z:
            if sum(i.file_size for i in z.infolist())>50_000_000:raise ValueError('Recording archive too large')
            for name in z.namelist():
                if re.fullmatch(r'runs/[a-zA-Z0-9-]+/manifest.json',name):
                    m=json.loads(z.read(name));rid=m['run_id']
                    if name!=f'runs/{rid}/manifest.json':raise ValueError('Invalid manifest path')
                    self.manifests[rid]=m
    def _scan(self):
        runs={}
        for root in self.directories:
            if not root.is_dir():continue
            for parent, dirs, files in os.walk(root,followlinks=False):
                path=Path(parent)
                dirs[:]=sorted(d for d in dirs if not (path/d).is_symlink()) if len(path.relative_to(root).parts)<5 else []
                if 'manifest.json' not in files:continue
                rid=path.name
                if not re.fullmatch(r'[a-zA-Z0-9-]+',rid):continue
                try:
                    signature=[];size=0
                    for base, children, names in os.walk(path,followlinks=False):
                        if any((Path(base)/n).is_symlink() for n in children+names):raise ValueError('Symlink in recording')
                        for name in sorted(names):
                            file=Path(base)/name;stat=file.stat();size+=stat.st_size
                            if size>50_000_000:raise ValueError('Recording too large')
                            signature.append((file.relative_to(path).as_posix(),stat.st_size,stat.st_mtime_ns))
                    version=hashlib.sha256(json.dumps(sorted(signature)).encode()).hexdigest()[:16]+'-v3'
                    runs[rid]=(path,version)
                except (OSError,ValueError) as exc:logging.warning('Skipping recording %s: %s',path,exc)
        self.directory_runs=runs
        self.directory_cache={key:value for key,value in self.directory_cache.items() if key in {(rid,item[1]) for rid,item in runs.items()}}

    def _directory_get(self, rid):
        path,version=self.directory_runs[rid];key=(rid,version)
        if key not in self.directory_cache:
            manifest=json.loads((path/'manifest.json').read_text())
            if manifest['run_id']!=rid:raise ValueError('Invalid manifest path')
            events=[]
            event_path=path/'events.ndjson'
            for line in event_path.read_text().splitlines() if event_path.exists() else []:
                if not line.strip():continue
                try:events.append(json.loads(line))
                except ValueError:logging.warning('Skipping partial event in %s',path)
            entities={}
            for name in COLLECTIONS:
                file=path/'entities'/f'{name}.json'
                if file.exists():
                    try:entities[name]=json.loads(file.read_text())
                    except ValueError:logging.warning('Skipping partial entity file %s',file)
            recording=build_recording(manifest,events,entities)
            recording['manifest']['contentVersion']=version
            self.directory_cache[key]=recording
        return self.directory_cache[key]

    def get(self, rid):
        self._scan()
        return self._get(rid)

    def _get(self, rid):
        if rid in self.directory_runs:
            try:return self._directory_get(rid)
            except (OSError,ValueError,KeyError,TypeError,AttributeError,OverflowError) as exc:
                logging.warning('Skipping recording %s: %s',rid,exc)
                if rid not in self.manifests:raise KeyError(rid) from exc
        if rid not in self.manifests:raise KeyError(rid)
        if rid not in self.cache:
            with zipfile.ZipFile(self.archive) as z:
                prefix=f'runs/{rid}/'
                events=[json.loads(x) for x in z.read(prefix+'events.ndjson').decode().splitlines() if x.strip()]
                entities={k:json.loads(z.read(prefix+'entities/'+k+'.json')) for k in COLLECTIONS if prefix+'entities/'+k+'.json' in z.namelist()}
            self.cache[rid]=build_recording(self.manifests[rid],events,entities)
            self.cache[rid]['manifest']['contentVersion']=self.content_version
        return self.cache[rid]
    def list(self):
        self._scan();items=[]
        for rid in sorted(self.manifests.keys()|self.directory_runs.keys()):
            try:items.append(self._get(rid)['manifest'])
            except KeyError:continue
        return items
