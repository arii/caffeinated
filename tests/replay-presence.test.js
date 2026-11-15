import {test} from 'node:test';
import assert from 'node:assert/strict';
import {buildReplayPresence,replayPeople,replayStation} from '../src/engine/replayPresence.ts';
import {buildReplayPoses} from '../src/engine/replayMotion.ts';
import {discussionGoal,stationGoal} from '../src/engine/labLayout.ts';
const agent=(id,extra={})=>({id,name:id,role:'researcher',type:'researcher',state:'idle',stationId:'notebook',boredom:null,...extra});
const bounds={minX:-12,maxX:12,minZ:-13,maxZ:13};
const recording=(frames,events=[])=>({manifest:{id:'test',title:'test',totalTicks:10,tickDurationMs:700},frames,events});
test('recorded addresses summon listeners, while future roster members remain absent on rewind',()=>{
 const agents=[agent('bio'),agent('chem'),agent('physics'),agent('future'),agent('world',{type:'world'})];
 const data=recording([-1,0,2,8].map(tick=>({tick,snapshot:{agents}})),[
  {tick:0,type:'message.sent',agentId:'bio',payload:{to_agent_ids:['chem']},refs:{to_agent_id:'physics'}},
  {tick:8,type:'agent.assigned',agentId:'future'}]);
 const presence=buildReplayPresence(data);
 assert.deepEqual(replayPeople(agents,-1,presence),[]);
 assert.deepEqual(replayPeople(agents,0,presence).map(a=>a.id),['bio','chem','physics']);
 assert.equal(replayPeople(agents,8,presence).length,4);
 assert.equal(replayPeople(agents,2,presence).length,3);
 const poses=buildReplayPoses(data,bounds,[]);
 assert.equal(poses[0].positions.size,0);assert.equal(poses[1].positions.has('future'),false);
 assert.deepEqual(poses.at(-1).positions.get('future'),discussionGoal(3));
 assert.deepEqual(buildReplayPoses(data,bounds,[]),poses);
});
test('snapshot-only activation occurs at its first activity, without creating a front queue',()=>{
 const idle=agent('B2');
 const data=recording([-1,0,1,2,3].map(tick=>({tick,snapshot:{agents:[tick>=2?{...idle,state:'thinking'}:idle]}})));
 const poses=buildReplayPoses(data,bounds,[]);
 for(const f of poses.filter(f=>f.tick<2))assert.equal(f.positions.has('B2'),false);
 assert.deepEqual(poses[3].positions.get('B2'),discussionGoal(0));
});
test('experiment robots route by recorded discipline; thinking and conversation meet left',()=>{
 for(const [family,station]of [['Physics','analyzer'],['Chem','explorer'],['Bio','notebook']]){
  const a=agent('worker',{family,state:'working',activity:'training',stationId:'culture'});
  assert.equal(replayStation(a),station);
  assert.equal(replayStation({...a,state:'thinking'}),'culture');
  assert.equal(replayStation({...a,activity:'talking'}),'culture');
 }
 assert.equal(replayStation(agent('worker',{name:'P3',state:'working'})),'analyzer');
});
test('new assignments never move a robot earlier than their causal frame',()=>{
 const idle=agent('C2',{family:'Chem',state:'thinking'});
 const frames=[0,1,2,3,4].map(tick=>({tick,snapshot:{agents:[tick>=2?{...idle,state:'working',activity:'training'}:idle]}}));
 const poses=buildReplayPoses(recording(frames),bounds,[]);
 for(const f of poses.filter(f=>f.tick<=2))assert.deepEqual(f.positions.get('C2'),discussionGoal(0));
 assert.notDeepEqual(poses[3].positions.get('C2'),discussionGoal(0));
 const p=poses[4].positions.get('C2'),goal=stationGoal('explorer',0);
 assert.ok(Math.hypot(p.x-goal.x,p.z-goal.z)<Math.hypot(discussionGoal(0).x-goal.x,discussionGoal(0).z-goal.z));
});
test('all twelve discussion seats and discipline work slots are clear and reachable in the actual lab',async()=>{
 const {createWorld}=await import('../src/variants/lab.ts');
 const {findPath}=await import('../src/engine/navigation.ts');
 globalThis.innerWidth=1280;globalThis.innerHeight=800;
 globalThis.document={createElement:()=>({width:0,height:0,getContext:()=>({fillRect(){},strokeRect(){},fillText(){},measureText(){return{width:10}},roundRect(){},beginPath(){},moveTo(){},lineTo(){},stroke(){},arc(){},ellipse(){},closePath(){},fill(){}})})};
 const world=createWorld(),start={x:0,z:9.5};
 assert.equal(new Set(Array.from({length:12},(_,i)=>JSON.stringify(discussionGoal(i)))).size,12);
 for(const [a,b] of [[0,1],[1,2],[2,0]]){const p=discussionGoal(a),q=discussionGoal(b);assert.ok(Math.abs(Math.hypot(p.x-q.x,p.z-q.z)-2.15*Math.sqrt(3))<1e-10,'the founding trio must sit 120 degrees apart');}
 for(const station of ['culture','analyzer','explorer','notebook'])for(let slot=0;slot<(station==='culture'?12:4);slot++){
  const goal=stationGoal(station,slot),label=`${station} slot ${slot}`;
  assert.ok(!world.colliders.some(c=>goal.x>c.minX-.2&&goal.x<c.maxX+.2&&goal.z>c.minZ-.2&&goal.z<c.maxZ+.2),`${label} must be clear of furniture`);
  const path=findPath(start,goal,world.bounds,world.colliders);
  assert.ok(path.length,`${label} must be reachable from the entrance`);
  const end=path.at(-1);assert.ok(Math.hypot(end.x-goal.x,end.z-goal.z)<.48,`${label} path must arrive at the work position`);
 }
 world.dispose?.();
});
