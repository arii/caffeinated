import {test} from 'node:test';
import assert from 'node:assert/strict';
import {provenanceBadge} from '../src/engine/provenanceBadge.ts';
import {recordingCopy,swarmConnectionLabel} from '../src/engine/replay.ts';
import {runStatus} from '../src/engine/runInfo.ts';

test('fake LLM provenance is identified even on a live manifest',()=>{
 const badge=provenanceBadge({id:'fake',title:'Fake',totalTicks:2,live:true,provenance:{llm:'fake',llm_mode:'fake',exa:'off',memory_backend:'local'}});
 assert.deepEqual(badge,{label:'Fake-LLM sample (plumbing demo, not research)',tone:'fake',chips:['Exa off','local memory']});
});

test('live model runs use a short model name and verified tool chips',()=>{
 const badge=provenanceBadge({id:'live',title:'Live',totalTicks:2,live:true,provenance:{llm:'moonshot/Kimi-K2',llm_mode:'tinker',exa:'live',memory_backend:'pastdev'}});
 assert.deepEqual(badge,{label:'Live Kimi run',tone:'live',chips:['Exa on','past.dev memory']});
 const other=provenanceBadge({id:'live',title:'Live',totalTicks:2,status:'running',provenance:{llm:'openai/gpt-4.1',llm_mode:'tinker'}});
 assert.equal(other.label,'Live gpt-4.1 run');
});

test('finished, stalled and unknown recordings have distinct provenance labels',()=>{
 assert.equal(provenanceBadge({id:'done',title:'Done',totalTicks:2,provenance:{llm:'openai/gpt-4.1'}}).label,'Finished real run');
 assert.equal(provenanceBadge({id:'stale',title:'Stale',totalTicks:2,live:true,stale:true,provenance:{llm:'openai/gpt-4.1'}}).label,'Stalled real run');
 assert.deepEqual(provenanceBadge({id:'unknown',title:'Unknown',totalTicks:0}),{label:'Unverified recording',tone:'unknown',chips:[]});
});

test('stopped real runs show actual/requested rounds without implying completion or credit failure',()=>{
 const manifest={id:'stopped',title:'Stopped',totalTicks:4,sample:false,status:'stopped',time:{rounds:13},provenance:{llm:'moonshot/Kimi-K2',command:['swarm.py','--rounds','15']}};
 const recording={events:[{tick:4,type:'run.finished',round:13,payload:{status:'stopped',text:'Run stopped; best replication loss 0'}}]};
 assert.equal(provenanceBadge(manifest,recording).label,'Stopped real run (13/15 rounds)');
 assert.equal(provenanceBadge(manifest,recording).tone,'stopped');
 assert.equal(recordingCopy(manifest).kicker,'● SWARM RUN · STOPPED');
 assert.equal(swarmConnectionLabel(manifest),'● SWARM RUN · STOPPED');
 assert.equal(runStatus(manifest).status,'stopped');
});

test('only explicit billing or credit errors append the Tinker credit notice',()=>{
 const manifest={id:'stopped',title:'Stopped',totalTicks:4,sample:false,status:'stopped',time:{rounds:13},provenance:{llm:'moonshot/Kimi-K2',command:'swarm.py --rounds 15'}};
 const credit={events:[{tick:4,type:'run.stopped',payload:{text:'Tinker credit exhausted after 402 payment required'}}]};
 assert.equal(provenanceBadge(manifest,credit).label,'Stopped real run (13/15 rounds) · Tinker credit ran out');
 assert.equal(provenanceBadge({...manifest,publish_errors:[{kind:'payment_required',message:'402'}]}).label,'Stopped real run (13/15 rounds) · Tinker credit ran out');
 const urlOnly={events:[{tick:4,type:'run.stopped',payload:{text:'Source https://example.test/path/402?hash=credit123'}}]};
 assert.equal(provenanceBadge(manifest,urlOnly).label,'Stopped real run (13/15 rounds)');
});
