import {test} from 'node:test';
import assert from 'node:assert/strict';
import {bubbleContent,pickNear,sparklinePath,tileMetrics} from '../src/engine/glance.ts';

test('pickNear holds the current candidate through its wider exit band',()=>{
 const candidates=[{id:'a',distance:3.4,facing:.25},{id:'b',distance:2,facing:.8}];
 assert.equal(pickNear(candidates,'a'),'a');
 assert.equal(pickNear([{id:'a',distance:3.7,facing:.8},{id:'b',distance:2,facing:.8}],'a'),'b');
 assert.equal(pickNear([{id:'a',distance:2,facing:.1}],'a'),'');
});

test('bubbleContent summarizes affect, current experiment and a newer blocking gate',()=>{
 const id='experiment:e',recording={events:[
  {tick:1,type:'hypothesis.proposed',agentId:'w',payload:{text:'A tiny hypothesis'},refs:{hypothesis_id:'h'}},
  {tick:2,type:'experiment.started',agentId:'w',payload:{description:'Test a tiny idea'},refs:{experiment_id:id,hypothesis_id:'h'}},
  {tick:3,type:'gate.checked',agentId:'w',payload:{pass:false,reasons:['too close to prior work']}}
 ],entities:{experiments:[{id,agent_id:'w'}],hypotheses:[{id:'h',text:'A tiny hypothesis',predicted_delta:.2}]}};
 const agent={id:'w',name:'Wren',role:'worker',family:'biology',activity:'training',boredom:82};
 const blocked=bubbleContent({agent,recording,tick:4,metric:{name:'score',direction:'maximize'}});
 assert.equal(blocked.name,'Wren');assert.equal(blocked.mood.label,'Drowsy');assert.equal(blocked.mood.boredomPct,82);
 assert.equal(blocked.idea,null);assert.match(blocked.activity,/too close to prior work/);
 const current=bubbleContent({agent,recording,tick:2,metric:{name:'score',direction:'maximize'}});
 assert.equal(current.idea,'A tiny hypothesis');assert.equal(current.predicted,.2);
});

test('tileMetrics handles minimum and maximum metrics, baselines, counts, IDs and names',()=>{
 const rows=[
  {agent:'Reference',kind:'baseline',status:'keep',tick:0,value:10},
  {agent:'w1',agentId:'id-1',kind:'candidate',status:'keep',tick:1,value:6},
  {agent:'Wren',kind:'candidate',status:'discard',tick:2,value:4},
  {agent:'other',kind:'candidate',status:'crash',tick:3,value:null},
  ...Array.from({length:13},(_,i)=>({agent:'id-1',kind:'candidate',status:i===12?'crash':'discard',tick:i+4,value:i+1}))
 ];
 const min=tileMetrics(rows,'id-1','Wren',{name:'loss',direction:'minimize'},1,10);
 assert.equal(min.best,1);assert.equal(min.progress,1);assert.equal(min.kept,1);assert.equal(min.discarded,13);assert.equal(min.crashed,1);assert.deepEqual(min.spark,Array.from({length:12},(_,i)=>i+2));
 const max=tileMetrics([{agent:'A',status:'keep',tick:1,value:2},{agent:'B',status:'keep',tick:2,value:10}], 'A','A',{name:'count',direction:'maximize'},10,null);
 assert.equal(max.best,2);assert.equal(max.progress,0);
 const baselineRelative=tileMetrics([{agent:'A',status:'keep',tick:1,value:15},{agent:'B',status:'keep',tick:2,value:20}],'A','A',{name:'score',direction:'maximize'},20,10);
 assert.equal(baselineRelative.progress,.5);
});

test('sparklinePath makes a compact SVG path and ignores undersized input',()=>{
 assert.equal(sparklinePath([2],40,10),'');
 assert.equal(sparklinePath([0,2,1],20,10),'M0.00 10.00L10.00 0.00L20.00 5.00');
});
