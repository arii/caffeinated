import {test} from 'node:test';import assert from 'node:assert/strict';
import {ResearchEventSchema} from '../src/engine/contract.ts';
import {initialState,reduceEvent} from '../src/engine/state.ts';
const manifest={id:'diffusion-test',title:'Diffusion validation',domain:'diffusion',metric:{name:'error',unit:'relative',direction:'minimize'},stationId:'analyzer'};
const event=(type,payload,sequence=0,runId='run-1')=>({version:1,runId,eventId:`e-${sequence}`,sequence,time:sequence,type,payload});
test('contract accepts domain-specific metrics and rejects invalid progress',()=>{
  assert.ok(ResearchEventSchema.safeParse(event('run.started',{experiment:manifest})).success);
  assert.equal(ResearchEventSchema.safeParse(event('experiment.progress',{progress:1.1,value:1,boredom:50})).success,false);
});
test('research state rejects duplicate, out-of-order, and wrong-run events',()=>{
  const a=reduceEvent(initialState(),event('run.started',{experiment:manifest}));
  const b=reduceEvent(a,event('experiment.progress',{progress:.5,value:.01,boredom:75},2));
  assert.equal(reduceEvent(b,event('experiment.progress',{progress:0,value:9,boredom:0},1)),b);
  assert.equal(reduceEvent(b,event('run.completed',{value:0},3,'other-run')),b);
  assert.equal(reduceEvent(b,event('experiment.progress',{progress:.5,value:.01,boredom:75},2)),b);
});
test('completion preserves measurements, findings, and original metric direction',()=>{
  let s=reduceEvent(initialState(),event('run.started',{experiment:manifest}));
  s=reduceEvent(s,event('finding.written',{role:'Analyst',message:'Error decreased',sourceRef:'artifact-1'},1));
  s=reduceEvent(s,event('run.completed',{value:.001},2));
  assert.equal(s.running,false);assert.equal(s.progress,1);assert.equal(s.value,.001);assert.equal(s.findings[0].sourceRef,'artifact-1');assert.equal(s.experiment.metric.direction,'minimize');
});
