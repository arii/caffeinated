import {test} from 'node:test';
import assert from 'node:assert/strict';
import {mergeRecordingDelta,loadRecording,swarmConnectionLabel,recordingPrefix,recordingCopy,publishErrorCount,recordingChanged} from '../src/engine/replay.ts';

const frame=(tick,status='running')=>({tick,snapshot:{tick,status}});
const base={manifest:{id:'r',live:true,contentVersion:'v1',title:'r',totalTicks:1},frames:[frame(-1),frame(0),frame(1)],events:[{tick:0,type:'a'},{tick:1,type:'b'}],entities:{experiments:[{id:'e1',status:'running'}],sources:[{source_id:'s1'}]}};

test('delta replaces frames from since, appends events and upserts entities',()=>{
 const manifest={...base.manifest,contentVersion:'v2',totalTicks:3};
 const merged=mergeRecordingDelta(base,{kind:'delta',since:1,manifest,frames:[frame(1,'stopped'),frame(2),frame(3)],events:[{tick:2,type:'c'},{tick:3,type:'d'}],entities:{experiments:[{id:'e1',status:'keep'},{id:'e2'}],memory:[{memory_id:'m'}]}});
 assert.deepEqual(merged.frames.map(f=>f.tick),[-1,0,1,2,3]);
 assert.equal(merged.frames[2].snapshot.status,'stopped');
 assert.deepEqual(merged.events.map(e=>e.type),['a','b','c','d']);
 assert.deepEqual(merged.entities.experiments,[{id:'e1',status:'keep'},{id:'e2'}]);
 assert.deepEqual(merged.entities.sources,[{source_id:'s1'}]);
 assert.deepEqual(merged.entities.memory,[{memory_id:'m'}]);
 assert.equal(merged.manifest,manifest);
});

test('delta rescales and patches earlier frames without mutating the client copy',()=>{
 const merged=mergeRecordingDelta(base,{kind:'delta',since:1,manifest:base.manifest,frames:[frame(1)],progressScale:4,patches:[{tick:0,snapshot:{status:'paused'}}],events:[]});
 assert.deepEqual(merged.frames[1].snapshot,{tick:0,status:'paused',progress:0});
 assert.equal(merged.frames[0].snapshot.progress,0);
 assert.equal(base.frames[1].snapshot.progress,undefined);
 assert.equal(mergeRecordingDelta(base,{kind:'delta',since:1,manifest:base.manifest,frames:[frame(1)],events:[]}).frames[1],base.frames[1]);
 assert.equal(base.frames.length,3);assert.equal(base.entities.experiments[0].status,'running');
});

test('full and unchanged responses',()=>{
 const full={kind:'full',...base,manifest:{...base.manifest,contentVersion:'v9'}};
 const merged=mergeRecordingDelta(base,full);
 assert.equal(merged.kind,undefined);assert.equal(merged.manifest.contentVersion,'v9');
 const same=mergeRecordingDelta(base,{kind:'unchanged',manifest:{...base.manifest,lastUpdateTs:'x'}});
 assert.equal(same.frames,base.frames);assert.equal(same.manifest.lastUpdateTs,'x');
});

test('loader asks for a delta only for the recording on screen, falling back to full',async()=>{
 const calls=[];
 const get=async path=>{calls.push(path);if(path.includes('/delta')){if(path.includes('broken'))throw new Error('500');return {kind:'delta',since:1,manifest:{...base.manifest,contentVersion:'v2'},frames:[frame(1),frame(2)],events:[{tick:2,type:'c'}]};}return {...base,manifest:{...base.manifest,contentVersion:'full'}};};
 const updated=await loadRecording(get,'r','v2',base);
 assert.deepEqual(calls,['/recordings/r/delta?base=v1']);
 assert.deepEqual(updated.frames.map(f=>f.tick),[-1,0,1,2]);
 calls.length=0;await loadRecording(get,'other','v1',base);
 assert.deepEqual(calls,['/recordings/other?v=v1']);
 calls.length=0;await loadRecording(get,'r','v1',base);await loadRecording(get,'r','v1',null);
 assert.deepEqual(calls,['/recordings/r?v=v1','/recordings/r?v=v1']);
 calls.length=0;const fallback=await loadRecording(get,'r','v3',{...base,manifest:{...base.manifest,contentVersion:'broken'}});
 assert.deepEqual(calls,['/recordings/r/delta?base=broken','/recordings/r?v=v3']);
 assert.equal(fallback.manifest.contentVersion,'full');
});

test('stalled runs and publish errors are labelled',()=>{
 const stale={id:'r',sample:false,live:false,stale:true,lastUpdateTs:'2026-11-15T05:00:00Z',title:'r',totalTicks:1};
 assert.match(swarmConnectionLabel(stale),/^LIVE RUN STALLED · NO UPDATES SINCE /);
 assert.equal(recordingPrefix(stale),'◌ STALLED · ');
 assert.equal(recordingCopy(stale).kicker,'◌ STALLED RUN');
 assert.match(recordingCopy(stale).callout,/stopped publishing/);
 assert.equal(swarmConnectionLabel({...stale,stale:false,live:true}),'FOLLOWING LIVE SWARM');
 assert.equal(recordingPrefix({...stale,stale:false,live:true}),'● LIVE · ');
 assert.equal(swarmConnectionLabel({...stale,stale:false}),'SWARM RUN · FINISHED');
 assert.equal(swarmConnectionLabel({...stale,stale:undefined,lastUpdateTs:undefined}),'SWARM RUN · FINISHED');
 const errors=[{kind:'RuntimeError',message:'x'},{kind:'recovered',message:'y'},{kind:'OSError',message:'z'}];
 assert.equal(publishErrorCount({publish_errors:errors}),2);assert.equal(publishErrorCount({}),0);
 assert.equal(swarmConnectionLabel({...stale,stale:false,live:true,publish_errors:errors.slice(0,2)}),'FOLLOWING LIVE SWARM · 1 PUBLISH ERROR');
 assert.equal(recordingChanged(stale,{...stale,contentVersion:'v2'}),true);
 assert.equal(recordingChanged({...stale,stale:false},{...stale,contentVersion:'v2'}),false);
});
