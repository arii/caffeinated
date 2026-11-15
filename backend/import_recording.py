"""Import swarm-viewer/v1 recordings, preserving native events and provenance.

Usage: python -m backend.import_recording /path/to/extracted/runs
"""
import argparse
from datetime import datetime
import hashlib
import json
from pathlib import Path
import re
import shutil

from backend.ingest import agent, number, spectrum_color
from backend.store import Store


def import_recording(store, source, data_dir):
    source=Path(source)
    manifest=json.loads((source/'manifest.json').read_text())
    if manifest.get('schema')!='swarm-viewer/v1':raise ValueError('Unsupported archive schema')
    if manifest.get('swarm')!='autoresearch':return None
    rid=manifest['run_id']
    if not re.fullmatch(r'[a-zA-Z0-9-]{1,80}',rid):raise ValueError('Invalid recording ID')
    if store.get(rid):return rid
    provenance=manifest.get('provenance',{})
    if 'fake' in json.dumps(provenance).lower():raise ValueError('Synthetic provider recording rejected')
    model=provenance.get('llm','Not supplied')
    title=manifest.get('title','Recorded autoresearch')
    config={'mode':'recorded','task':title.split(' · ')[-1],'arm':manifest.get('arm',{}).get('id','B'),'rounds':max(1,manifest.get('time',{}).get('rounds',1)),'seed':None,'model':model}
    store.create(rid,config,provenance.get('swarm_commit') or '')
    archive=Path(data_dir)/rid/'artifacts'/'archive';archive.mkdir(parents=True)
    # Retain supplied records, never execute archive content or follow symlinks.
    for path in source.rglob('*'):
        if path.is_file() and not path.is_symlink() and path.suffix in {'.json','.ndjson'}:
            dest=archive/path.relative_to(source);dest.parent.mkdir(parents=True,exist_ok=True);shutil.copyfile(path,dest)
    def emit(key,kind,payload):store.append(rid,'archive:'+key,kind,payload)
    metadata={'title':title,'metric':manifest['metric'],'provenance':{'llm':model,'gpu':provenance.get('gpu','unknown'),'exa':provenance.get('exa','unknown'),'memory':provenance.get('memory_backend','unknown'),'execution':'recorded'},'archive':{'schema':manifest['schema'],'manifestSha256':hashlib.sha256((source/'manifest.json').read_bytes()).hexdigest(),'originalProvenance':provenance,'live':False}}
    start=manifest.get('time',{}).get('ts_start')
    if start:metadata['createdAt']=datetime.fromisoformat(start.replace('Z','+00:00')).timestamp()
    emit('metadata','run.metadata',metadata)
    roster={}
    for native in manifest['agents']:
        a=agent(native['agent_id'],native.get('type','worker'))
        a.update({'name':native.get('label',native['agent_id']),'nativeId':native.get('native_id'),'boredom':None})
        roster[a['id']]=a;emit('agent:'+a['id'],'agent.updated',a)
    def entities(name):return {v['id']:v for v in json.loads((source/'entities'/f'{name}.json').read_text())}
    experiments=entities('experiments');memories=entities('memory');calls=entities('llm_calls')
    events=[json.loads(line) for line in (source/'events.ndjson').read_text().splitlines() if line.strip()]
    # Keyframe 0 in this bundle contains later state; fold ordered events instead.
    for event in sorted(events,key=lambda e:e['tick']):
        key=event['event_id'];kind=event['type'];p=event.get('payload',{});refs=event.get('refs',{});aid=event.get('agent_id');round_num=event.get('round',0)
        emit(key,'archive.event',event)
        if kind=='round.started':emit(key+':round','round.assigned',{'round':round_num,'boredom':store.get(rid)['boredom'],'regime':store.get(rid)['regime']})
        elif kind=='agent.assigned' and aid in roster:
            a={**roster[aid],'role':p.get('role') or roster[aid]['role'],'state':'working'}
            a['stationId']='explorer' if p.get('scout') or a['role']=='divergent' else 'culture'
            roster[aid]=a;emit(key+':agent','agent.updated',a)
        elif kind=='boredom.measured':
            b=number(p.get('B'))
            if b is not None:
                b=min(1,max(0,b));regime=p.get('regime','EXPLOIT')
                if aid in roster:emit(key+':boredom','agent.boredom',{'id':aid,'boredom':b*100,'boredomSpectrum':{'position':b,'color':spectrum_color(b),'regime':regime}})
                else:emit(key+':meter','meter.updated',{'boredom':b*100,'regime':regime})
        elif kind=='experiment.finished':
            experiment=experiments.get(refs.get('experiment_id'),{})
            emit(key+':result','experiment.result',{'agent':roster.get(aid,{}).get('name',aid or 'Unknown'),'round':round_num,'kind':experiment.get('kind','candidate'),'status':p.get('status','unknown'),'value':number(p.get('metric_value')),'commit':experiment.get('commit'),'description':experiment.get('description',''),'sources':experiment.get('source_ids',[])})
        elif kind in {'memory.written','verdict.issued','discovery.made','llm.called'}:
            message=p.get('why') or p.get('title') or p.get('excerpt')
            if kind=='memory.written':message=memories.get(refs.get('memory_id'),{}).get('text') or message
            if kind=='llm.called':
                response=calls.get(refs.get('llm_call_id'),{}).get('response',{})
                if isinstance(response,dict):message=response.get('idea') or response.get('why')
            if message:emit(key+':finding','finding.written',{'agent':roster.get(aid,{}).get('name',aid or ''),'role':kind.split('.')[0].title(),'message':str(message)[:3000],'round':round_num})
    for sid,record in entities('sources').items():emit('source:'+sid,'source.found',{k:record.get(k) for k in ['id','title','url','query_id']})
    terminal=manifest.get('status','completed')
    emit('terminal','run.status',{'status':terminal if terminal in {'completed','failed','stopped','interrupted'} else 'interrupted','error':None})
    return rid


def main():
    parser=argparse.ArgumentParser();parser.add_argument('runs',type=Path);parser.add_argument('--data-dir',type=Path,default=Path(__file__).resolve().parents[1]/'.lab_data');args=parser.parse_args()
    store=Store(args.data_dir/'runs.sqlite3')
    for path in sorted(args.runs.glob('*/manifest.json')):
        rid=import_recording(store,path.parent,args.data_dir)
        print('Imported '+rid if rid else 'Skipped non-autoresearch recording: '+path.parent.name)

if __name__=='__main__':main()
