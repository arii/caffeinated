import {test} from 'node:test';
import assert from 'node:assert/strict';
import {CINEMA_DURATION,cinemaPlan,cinemaTickAt,cinemaBoredom,boredomTone,replicatedAt,cinemaPhaseAt,cinemaStepSvg} from '../src/engine/cinema.ts';

const agents=[{id:'a',name:'Ada',bored:false},{id:'m',name:'Mason',bored:true}];
const events=[
 {tick:10,type:'boredom.measured',agentId:'a',round:1,payload:{B:.2,regime:'EXPLOIT'}},
 {tick:30,type:'experiment.finished',agentId:'a',payload:{status:'replicated'}},
 {tick:50,type:'boredom.measured',agentId:'a',round:2,payload:{B:.74,regime:'BOREDOM_SNAP'}},
 {tick:52,type:'agent.assigned',agentId:'m'},
 {tick:55,type:'observation.received',agentId:'m',payload:{kind:'sources',tool:'openalex'},message:'Paper one; Paper two'},
 {tick:80,type:'boredom.measured',agentId:'a',round:3,payload:{B:.3,regime:'EXPLOIT'}},
 {tick:90,type:'experiment.finished',agentId:'m',payload:{status:'replicated'}},
 {tick:91,type:'discovery.made',agentId:'m',payload:{reward:.9}},
 {tick:99,type:'verdict.issued',agentId:'w',payload:{verdict:'Ig Nobel candidate'}},
];

test('cinema plan needs a real snap followed by a discovery',()=>{
 assert.equal(cinemaPlan(events.filter(e=>e.type!=='discovery.made'),agents,100),null);
 const plan=cinemaPlan(events,agents,100);
 assert.equal(plan.snapTick,50);assert.equal(plan.breakthroughAgent,'m');assert.deepEqual(plan.boredAgents,['m']);
 assert.equal(plan.verdict.label,'Ig Nobel candidate');assert.equal(plan.papers[0].title,'Paper one');
});

test('cinema time maps monotonically onto recorded ticks and lands the beats',()=>{
 const plan=cinemaPlan(events,agents,100);let last=-1;
 for(let t=0;t<=CINEMA_DURATION;t+=.25){const tick=cinemaTickAt(plan,t);assert.ok(tick>=last);last=tick;}
 assert.equal(cinemaTickAt(plan,50),91);assert.equal(cinemaTickAt(plan,CINEMA_DURATION),99);
 assert.ok(cinemaTickAt(plan,25)>50);assert.ok(cinemaTickAt(plan,21)<50);
 assert.equal(cinemaPhaseAt(30).phase,'snap');assert.equal(cinemaPhaseAt(60).phase,'proof');
});

test('boredom telemetry follows measured values and tones',()=>{
 const plan=cinemaPlan(events,agents,100);
 assert.equal(cinemaBoredom(plan,60).value,.74);assert.equal(cinemaBoredom(plan,60).regime,'BOREDOM_SNAP');
 assert.equal(boredomTone(.2,'EXPLOIT'),'cool');assert.equal(boredomTone(.5,'EXPLOIT'),'amber');assert.equal(boredomTone(.6,'BOREDOM_SNAP'),'snap');
 assert.equal(replicatedAt(plan,89),1);assert.equal(replicatedAt(plan,90),2);
 assert.match(cinemaStepSvg(plan.replicated,0,100,95),/<path d="M8\.0/);
});
