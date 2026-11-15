import {test} from 'node:test';
import assert from 'node:assert/strict';
import {bubbleContent,bubbleHtml,pickNear,sparklinePath,staffStripLabel,staffStripHelp,tileBestLabel,tileGateCounts,tileGateLabel,tileMetrics,gateCountExplanation} from '../src/engine/glance.ts';
import {regimeLabel} from '../src/engine/boredom.ts';

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

test('bubble controls have labels and predicted values are formatted',()=>{
 const html=bubbleHtml({name:'Wren',role:'Scientist',mood:{level:'engaged',label:'Engaged',boredomPct:20},activity:'testing',idea:'Try a variation',predicted:.014136217422224159},true,String);
 assert.match(html,/predicted Δ \+0\.01414/);
 assert.match(html,/<button class="bubble-close"[^>]*>×<\/button>/);
 assert.match(html,/<button class="bubble-more"[^>]*>More…<\/button>/);
});

test('tile score labels format long floating point values',()=>{
 assert.equal(tileBestLabel(.014136217422224159),'best 0.01414');
 assert.equal(tileBestLabel(null),'best —');
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

test('tileMetrics calculates baseline-free progress for either metric direction',()=>{
 const minRows=[{agent:'A',status:'keep',tick:1,value:.5},{agent:'B',status:'keep',tick:2,value:.75},{agent:'C',status:'keep',tick:3,value:1}];
 const minProgress=agent=>tileMetrics(minRows,agent,agent,{name:'loss',direction:'minimize'},.5,null).progress;
 assert.equal(minProgress('A'),1);assert.equal(minProgress('B'),.5);assert.equal(minProgress('C'),0);
 const maxRows=[{agent:'A',status:'keep',tick:1,value:1},{agent:'B',status:'keep',tick:2,value:.75},{agent:'C',status:'keep',tick:3,value:.5}];
 const maxProgress=agent=>tileMetrics(maxRows,agent,agent,{name:'score',direction:'maximize'},1,null).progress;
 assert.equal(maxProgress('A'),1);assert.equal(maxProgress('B'),.5);assert.equal(maxProgress('C'),0);
});

test('pre-committee tiles count only scored non-baseline rows with zero loss',()=>{
 const rows=[
  {agentId:'a',agent:'Kitchen Physics Lab',kind:'candidate',status:'keep',value:0},
  {agentId:'a',agent:'Kitchen Physics Lab',kind:'candidate',status:'discard',value:1},
  {agentId:'a',agent:'Kitchen Physics Lab',kind:'candidate',status:'crash',value:null},
  {agentId:'a',agent:'Kitchen Physics Lab',kind:'baseline',status:'keep',value:0}
 ];
 const counts=tileGateCounts(rows,'a','Kitchen Physics Lab');
 assert.deepEqual(counts,{confirmed:1,tested:2});
 assert.equal(tileGateLabel(counts),'1 gate-confirmed / 2 tested');
 assert.match(gateCountExplanation,/Zero loss passed the preregistered gates/);
});

test('staff strip labels follow reached rounds and critic reviews',()=>{
 const events=[
  {tick:8,type:'round.started',payload:{regime:'BOREDOM_SNAP'}},
  {tick:4,type:'verdict.issued'},
  {tick:2,type:'round.started',payload:{regime:'EXPLOIT'}},
  {tick:9,type:'verdict.issued'}
 ];
 assert.equal(staffStripLabel('conductor',events,5),'Conductor · Refining');
 assert.equal(staffStripLabel('conductor',events,10),'Conductor · Bored — trying new directions');
 assert.equal(staffStripHelp('conductor',events,5),'After a significant improvement or before min_attempts: most workers refine; one explores.');
 assert.equal(staffStripHelp('conductor',events,10),'B ≥ 0.70: one worker refines while the others explore; the novelty gate rejects near-duplicates.');
 assert.equal(staffStripLabel('critic',events,3),'Critic · 0 reviews');
 assert.equal(staffStripLabel('critic',events,5),'Critic · 1 review');
 assert.equal(staffStripLabel('critic',events,10),'Critic · 2 reviews');
 assert.equal(staffStripHelp('critic',events,10),'');
});

test('regime labels explain exploit and SNAP role assignments',()=>{
 assert.equal(regimeLabel('EXPLOIT').label,'Exploiting');
 assert.match(regimeLabel('BOREDOM_SNAP').description,/one worker refines while the others explore/);
});

test('sparklinePath makes a compact SVG path and ignores undersized input',()=>{
 assert.equal(sparklinePath([2],40,10),'');
 assert.equal(sparklinePath([0,2,1],20,10),'M0.00 10.00L10.00 0.00L20.00 5.00');
});
