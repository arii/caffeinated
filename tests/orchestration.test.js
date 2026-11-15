import {test} from 'node:test';
import assert from 'node:assert/strict';
import {compactMarks,lanes,roundX,turns} from '../src/engine/orchestration.ts';
const recording={manifest:{id:'r',title:'run',totalTicks:9,agents:[{agent_id:'a',display_name:'A'},{agent_id:'b',display_name:'B'}]},events:[
 {tick:1,type:'round.started',round:1,payload:{round:1}},
 {tick:2,type:'agent.assigned',round:1,agentId:'a'},
 {tick:3,type:'llm.called',round:1,agentId:'a'},
 {tick:4,type:'agent.assigned',round:1,agentId:'b'},
 {tick:5,type:'verdict.issued',round:1,agentId:'critic',payload:{vetoed:true,why:'Contradicted improvement'}},
 {tick:7,type:'experiment.finished',round:1,agentId:'a',payload:{status:'keep'}}
]};
test('swimlanes include reached marks, vetoes and round close',()=>{
 const view=lanes(recording,6);
 assert.ok(view.lanes.find(l=>l.id==='critic')?.marks.some(m=>m.kind==='veto'));
 assert.equal(view.lanes.find(l=>l.id==='a')?.marks.length,1);
 assert.deepEqual(view.roundCloses,[]);
 assert.deepEqual(lanes(recording,7).roundCloses,[{round:1,tick:7}]);
 assert.equal(lanes(recording,4).lanes.find(l=>l.id==='critic'),undefined);
});
test('swimlane mark groups cap each round and retain the first hidden event',()=>{
 const marks=Array.from({length:8},(_,i)=>({tick:i+1,round:2,kind:'idea',label:`Idea ${i+1}`,why:'',eventId:`e${i+1}`})).concat([{tick:20,round:1,kind:'keep',label:'New best',why:'',eventId:'keep'}]);
 const groups=compactMarks(marks);
 assert.deepEqual(groups.map(group=>[group.round,group.visible.length,group.hidden.length]),[[1,1,0],[2,6,2]]);
 assert.equal(groups[1].hidden[0].tick,7);
 assert.equal(compactMarks(marks,4)[1].hidden.length,4);
});
test('gate checks use either recorded pass field',()=>{
 const gates={manifest:{id:'g',title:'g',totalTicks:3,agents:[{agent_id:'a',display_name:'A'}]},events:[
  {tick:1,type:'round.started',round:1},
  {tick:2,type:'gate.checked',round:1,agentId:'a',payload:{pass:false}}
 ]};
 assert.equal(lanes(gates,2).lanes[0].marks[0].kind,'gate');
});
test('round coordinates keep each playhead and close inside its own cell',()=>{
 const spans=[{round:1,startTick:10,endTick:20},{round:2,startTick:21,endTick:41}];
 assert.ok(roundX(spans,31)>1&&roundX(spans,31)<2);
 assert.equal(roundX(spans,41,2),2);
});
test('turn-taking distinguishes active, waiting and round-complete workers',()=>{
 assert.deepEqual(turns(recording,0),{a:'idle',b:'idle'});
 assert.deepEqual(turns(recording,3),{a:'active',b:'idle'});
 assert.deepEqual(turns(recording,4),{a:'done',b:'waiting'});
 assert.deepEqual(turns(recording,7),{a:'done',b:'waiting'});
});
test('terminal runs leave every agent idle',()=>{
 const stopped={...recording,manifest:{...recording.manifest,totalTicks:9,status:'stopped'},events:[...recording.events,{tick:8,type:'run.stopped'}]};
 assert.deepEqual(turns(stopped,7),{a:'done',b:'waiting'});
 assert.deepEqual(turns(stopped,8),{a:'idle',b:'idle'});
 assert.deepEqual(turns({...recording,manifest:{...recording.manifest,status:'finished'}},9),{a:'idle',b:'idle'});
});
