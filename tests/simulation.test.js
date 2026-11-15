import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createRun, step, complete, response, exportExperiment } from '../src/simulation.js';
test('matched arms follow identical experiments until the intervention', () => {
  const a = complete(), b = complete({boredom:false});
  const pivot = a.experiments.findIndex(e=>e.pivot);
  assert.ok(pivot > 0);
  assert.deepEqual(a.experiments.slice(0,pivot),b.experiments.slice(0,pivot));
  assert.ok(a.best > b.best + .3); assert.equal(b.pivoted,false);
  assert.equal(a.experiments.filter(e=>e.pivot).length,1);
});
test('runs are deterministic, bounded, budgeted, and stop when complete', () => {
  for (const seed of [1,42,256,99999]) for (const threshold of [40,65,90]) {
    const a = complete({seed,threshold,budget:36});
    assert.deepEqual(a,complete({seed,threshold,budget:36})); assert.equal(a.experiments.length,36);
    assert.equal(step(a).experiments.length,36); assert.ok(a.pivoted);
    assert.ok(a.memory.find(m=>m.type==='plateau').experiment < a.memory.find(m=>m.role==='Explorer').experiment);
    a.experiments.forEach(e=>assert.ok(e.value>=0 && e.value<=1 && e.boredom>=0 && e.boredom<=100));
  }
});
test('shared finding precedes the explorer consuming it',()=>{
  const a=complete(); const finding=a.memory.find(m=>m.role==='Analyst'), pivot=a.memory.find(m=>m.role==='Explorer');
  assert.ok(finding.experiment < pivot.experiment);
});
test('empty runs and exports retain reproducibility metadata',()=>{
  assert.equal(createRun().experiments.length,0);
  const out=JSON.parse(JSON.stringify(exportExperiment(complete(),complete({boredom:false}))));
  assert.equal(out.config.seed,42); assert.equal(out.baseline.boredom,false); assert.equal(out.model,'synthetic-two-basin-v1');
  assert.ok(response(.76,.81)>response(.28,.24));
});
