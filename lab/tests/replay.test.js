import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createReplay, step, replayToEnd, validateTrace, findArm, controlArm, sourcesSeen, reuseLinks, refreshReplay, loadTrace } from '../src/replay.js';

const fixture = new URL('../data/fixtures/offline_swarm.trace.json', import.meta.url);
const trace = JSON.parse(await readFile(fixture, 'utf8'));

test('fixture satisfies the trace contract', () => {
  assert.deepEqual(validateTrace(trace), []);
  assert.equal(findArm(trace).boredom_enabled, true);
  assert.equal(controlArm(trace, findArm(trace)).boredom_enabled, false);
});

test('replaying every arm to the end reproduces the exporter summary', () => {
  for (const arm of trace.arms) {
    const run = replayToEnd(trace, arm.arm);
    assert.equal(run.experiments.length, arm.summary.experiments);
    assert.equal(run.bestValBpb, arm.summary.best_val_bpb);
    assert.equal(run.score, arm.summary.score);
    assert.equal(run.pivots, arm.summary.pivots);
    assert.equal(run.memory.length, arm.summary.memory_writes);
    assert.equal(reuseLinks(run).length, arm.summary.cross_agent_reuse);
    assert.equal(step(run).experiments.length, arm.summary.experiments);
    const bests = run.experiments.map(e => e.best_val_bpb);
    bests.forEach((b, i) => i && assert.ok(b <= bests[i - 1]));
    run.experiments.forEach(e => assert.ok(e.boredom >= 0 && e.boredom <= 100 && e.value >= 0 && e.value <= 1));
  }
});

test('the meter-on arm pivots, scouts with Exa, and reuses another agent\'s lead', () => {
  const run = createReplay(trace);
  const seen = new Set();
  while (!run.finished) { step(run); run.events.forEach(e => seen.add(e.type)); }
  assert.ok(run.pivots >= 1 && run.regime !== 'EXPLOIT');
  assert.ok(['pivot', 'lead', 'reuse', 'critic'].every(t => seen.has(t)), [...seen].join());
  const firstPivot = run.experiments.find(e => e.pivot);
  assert.ok(firstPivot.boredom >= trace.thresholds.snap);
  const lead = run.memory.find(m => m.type === 'lead' && m.reused_by.length);
  assert.ok(lead.source_ids.every(id => run.arm.sources[id]?.url));
  assert.ok(lead.reused_by.every(r => r.agent !== lead.agent));
  assert.ok(sourcesSeen(run).length > 0 && sourcesSeen(run).every(s => s.title && s.url));
  assert.ok(Object.values(run.agents).some(a => a.role === 'scout'));
});

test('the control arm keeps exploiting even when its shadow meter is high', () => {
  const run = replayToEnd(trace, controlArm(trace, findArm(trace)).arm);
  assert.equal(run.pivots, 0);
  assert.ok(run.experiments.every(e => e.regime === 'EXPLOIT'));
  assert.ok(run.experiments.some(e => e.boredom >= trace.thresholds.snap));
});

test('live refresh extends a running replay and loadTrace rejects bad schemas', async () => {
  const partial = structuredClone(trace);
  const arm = findArm(partial); arm.experiments = arm.experiments.slice(0, 5); arm.budget = 5;
  const run = replayToEnd(partial, arm.arm);
  assert.equal(run.finished, true);
  refreshReplay(run, trace);
  assert.equal(run.finished, false);
  while (!run.finished) step(run);
  assert.equal(run.bestValBpb, findArm(trace).summary.best_val_bpb);
  const ok = await loadTrace('x', async () => ({ ok: true, json: async () => trace }));
  assert.equal(ok.schema, trace.schema);
  await assert.rejects(loadTrace('x', async () => ({ ok: true, json: async () => ({ schema: 'nope' }) })));
});
