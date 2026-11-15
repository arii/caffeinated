import {test} from 'node:test';
import assert from 'node:assert/strict';
import {frameAt,advanceTick,eventsThrough} from '../src/engine/replay.ts';
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

test('idle researchers stay staged until their own first activity, without future movement',async()=>{
 const {buildReplayPoses}=await import('../src/engine/replayMotion.ts');
 const idle={id:'one',name:'B1',role:'researcher',type:'researcher',state:'idle',stationId:'notebook',boredom:null};
 const second={...idle,id:'two',name:'C1'};
 const frames=[-1,0,1,2,3].map(tick=>({tick,snapshot:{agents:[tick>=2?{...idle,state:'thinking',stationId:'explorer'}:idle,second]}}));
 const data={manifest:{id:'test',title:'test',totalTicks:3,tickDurationMs:700},frames,events:[]};
 const poses=buildReplayPoses(data,{minX:-12,maxX:12,minZ:-13,maxZ:13},[]);
 for(const frame of poses)assert.deepEqual(frame.positions.get('two'),poses[0].positions.get('two'));
 for(const frame of poses.filter(f=>f.tick<=2))assert.deepEqual(frame.positions.get('one'),poses[0].positions.get('one'));
 assert.notDeepEqual(poses.at(-1).positions.get('one'),poses[0].positions.get('one'));
 assert.deepEqual(buildReplayPoses(data,{minX:-12,maxX:12,minZ:-13,maxZ:13},[]),poses);
});
