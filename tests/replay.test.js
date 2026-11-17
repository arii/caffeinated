import {test} from 'node:test';
import assert from 'node:assert/strict';
import {initialRecordingId,DEFAULT_REPLAY_ID,sortedRecordings,recordingCopy,frameAt,advanceTick,eventsThrough,recordingChanged,playbackContinues} from '../src/engine/replay.ts';
test('recording preference uses live, completed swarm, then sample, newest first',()=>{
 const rows=[{id:'sample',sample:true},{id:'old',sample:false,time:{ts_start:'2025-01-01'}},{id:'new',sample:false,time:{ts_start:'2026-01-01'}},{id:'live',sample:false,live:true}];
 assert.deepEqual(sortedRecordings(rows).map(m=>m.id),['live','new','old','sample']);
 assert.deepEqual(sortedRecordings([]),[]);
 assert.deepEqual(sortedRecordings(rows.slice(0,3)).map(m=>m.id),['new','old','sample']);
});
test('live and completed swarm copy does not claim supplied recordings or no calls',()=>{
 for(const live of [true,false]){const copy=recordingCopy({sample:false,live});assert.doesNotMatch(JSON.stringify(copy),/temporary|no model calls|RECORDED REPLAY/);}
 assert.match(recordingCopy({sample:false,live:true}).callout,/Following a live swarm run/);
 assert.match(recordingCopy({sample:true}).callout,/temporary replay/);
 assert.equal(recordingCopy({sample:true}).kicker,'● RECORDED REPLAY');
});
test('live playback waits at the current end while finished recordings stop',()=>{
 assert.equal(playbackContinues({live:true,totalTicks:10},10),true);
 assert.equal(playbackContinues({live:true,totalTicks:0},0),true);
 assert.equal(playbackContinues({live:true,totalTicks:20},10),true);
 assert.equal(playbackContinues({live:false,totalTicks:10},10),false);
 assert.equal(playbackContinues({totalTicks:0},0),false);
 assert.equal(playbackContinues({live:false,totalTicks:20},10),true);
});
test('live recording refresh requires a changed version of the selected run',()=>{
 const current={id:'live-run',live:true,contentVersion:'one'};
 assert.equal(recordingChanged(current,{...current,contentVersion:'two'}),true);
 assert.equal(recordingChanged(current,{...current,live:false,contentVersion:'two'}),true);
 assert.equal(recordingChanged(current,current),false);
 assert.equal(recordingChanged(current),false);
 assert.equal(recordingChanged(current,{...current,id:'other',contentVersion:'two'}),false);
 assert.equal(recordingChanged({...current,live:false},{...current,contentVersion:'two'}),false);
});
test('seeking backwards discards future observations and accepts sparse frames',()=>{
 const frames=[{tick:-1,snapshot:{results:[]}},{tick:2,snapshot:{results:['baseline']}},{tick:8,snapshot:{results:['baseline','discovery']}}];
 assert.deepEqual(frameAt(frames,9).snapshot.results,['baseline','discovery']);
 assert.deepEqual(frameAt(frames,5).snapshot.results,['baseline']);
 assert.deepEqual(frameAt(frames,0).snapshot.results,[]);
 assert.equal(frameAt(frames,-2),undefined);
 assert.equal(frameAt([],10),undefined);
});
test('archived conversation excludes future statements at an exact boundary',()=>{
 const events=[{tick:0,type:'assigned',message:'first'},{tick:2,type:'observed',message:'result'},{tick:3,type:'diary',message:'later'}];
 assert.deepEqual(eventsThrough(events,2).map(e=>e.message),['first','result']);
 assert.deepEqual(eventsThrough(events,0).map(e=>e.message),['first']);
});
test('pace uses recording tick duration and stops exactly at the end',()=>{
 assert.equal(advanceTick(10,.7,1,100,700),11);
 assert.equal(advanceTick(10,.7,4,100,700),14);
 assert.equal(advanceTick(99,20,4,100,700),100);
 assert.equal(advanceTick(0,-20,1,100,700),0);
});
test('every recorded snapshot satisfies the frontend contract',async()=>{
 let response;try{response=await fetch('http://127.0.0.1:8765/api/recordings');}catch{return;}
 if(!response.ok)return;
 const {SnapshotSchema}=await import('../src/engine/contract.ts');
 for(const manifest of await response.json()){
  const data=await (await fetch(`http://127.0.0.1:8765/api/recordings/${manifest.id}`)).json();
  assert.ok(data.frames.length);
  for(const frame of data.frames)SnapshotSchema.parse(frame.snapshot);
  const end=frameAt(data.frames,manifest.totalTicks);
  assert.ok(end.tick<=manifest.totalTicks);
 }
});

test('numbered display aliases replace whole names without changing source text',async()=>{
 const {anonymizeExcerpt}=await import('../src/engine/replay.ts');
 const original='Quill shared with worker-1. QUILL and quillback remain distinct.';
 const aliases=new Map([['Quill','B1'],['worker-1','C2']]);
 assert.equal(anonymizeExcerpt(original,aliases),'B1 shared with C2. B1 and quillback remain distinct.');
 assert.equal(original,'Quill shared with worker-1. QUILL and quillback remain distinct.');
 assert.equal(anonymizeExcerpt('A+B met AAB',new Map([['A+B','P1']])),'P1 met AAB');
});

test('robot appearance kit is stable by identity across roster reorder and replay',async()=>{
 const {robotAppearance,ROBOT_APPEARANCES}=await import('../src/engine/robots.ts');
 assert.equal(ROBOT_APPEARANCES.length,6);
 const ids=['agent-one','agent-two','agent-three'];
 const first=new Map(ids.map(id=>[id,robotAppearance(id)]));
 for(const id of ids.reverse())assert.deepEqual(robotAppearance(id),first.get(id));
 assert.equal(new Set(ROBOT_APPEARANCES.map(a=>JSON.stringify(a))).size,6);
});

test('lightbulb briefs are a couple of source words and never invented when unknown',async()=>{
 const {ideaBrief}=await import('../src/engine/ideaBrief.ts');
 assert.equal(ideaBrief('coffee consumption and workplace productivity field study'),'Coffee consumption');
 assert.equal(ideaBrief('[EXPLOIT] Raise Muon matrix learning rate from 0.04 to 0.05'),'Muon matrix');
 assert.equal(ideaBrief('Can food physics measurements explain the difference?'),'Food physics');
 assert.equal(ideaBrief(undefined),'');assert.equal(ideaBrief('and the 42'),'');
});

test('history-style lab camera looks around in place, then glides without touching replay time',async()=>{
 const THREE=await import('three');const {LabCameraRig}=await import('../src/engine/labCamera.ts');
 const camera=new THREE.PerspectiveCamera(),rig=new LabCameraRig(camera),position=camera.position.clone(),direction=new THREE.Vector3();
 camera.getWorldDirection(direction);rig.dragBy(100,30);rig.update(.016,new Set());
 assert.ok(camera.position.equals(position),'drag must look around rather than orbit around the room');
 assert.ok(camera.getWorldDirection(new THREE.Vector3()).distanceTo(direction)>.1);
 rig.update(.1,new Set(['KeyW']));assert.ok(camera.position.distanceTo(position)>0);
 for(let i=0;i<200;i++)rig.update(.1,new Set(['KeyE','KeyW']));
 assert.ok(camera.position.y<=4.4&&camera.position.z>=-12.3&&camera.position.x>=-10.9);
 rig.reset();assert.ok(camera.position.equals(position));assert.equal(rig.freeMode,false);
});

test('ZIP run 3 is the default, explicit links override it, missing archives fall back',()=>{
 const rows=[{id:'live',live:true},{id:DEFAULT_REPLAY_ID},{id:'other'}];
 assert.equal(initialRecordingId(rows,null),DEFAULT_REPLAY_ID);
 assert.equal(initialRecordingId(rows,'other'),'other');
 assert.equal(initialRecordingId(rows,'missing'),DEFAULT_REPLAY_ID);
 assert.equal(initialRecordingId([{id:'fallback'}],null),'fallback');
 assert.equal(initialRecordingId([],null),undefined);
});

test('shared recording links accept unique prefixes but not ambiguous or empty ones',()=>{
 const rows=[{id:DEFAULT_REPLAY_ID},{id:'abc-first'},{id:'abc-second'},{id:'xyz-only'},{id:'xyz-only-longer'}];
 assert.equal(initialRecordingId(rows,'abc-f'),'abc-first');
 assert.equal(initialRecordingId(rows,'xyz-only'),'xyz-only');
 assert.equal(initialRecordingId(rows,'f8fa53cc'),DEFAULT_REPLAY_ID);
 for(const requested of ['abc','xyz','',null,'missing'])assert.equal(initialRecordingId(rows,requested),DEFAULT_REPLAY_ID);
 assert.equal(initialRecordingId([], 'f8fa53cc'),undefined);
});
