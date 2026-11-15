import {test} from 'node:test';
import assert from 'node:assert/strict';
import {lanes,turns} from '../src/engine/orchestration.ts';
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
test('turn-taking distinguishes active, waiting and round-complete workers',()=>{
 assert.deepEqual(turns(recording,0),{a:'idle',b:'idle'});
 assert.deepEqual(turns(recording,3),{a:'active',b:'idle'});
 assert.deepEqual(turns(recording,4),{a:'done',b:'waiting'});
 assert.deepEqual(turns(recording,7),{a:'done',b:'waiting'});
});
