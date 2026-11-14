// Synthetic response surface, not a biological model or experimental protocol.
export function response(nutrient, oxygen, seed = 42) {
  const local = 0.49 * Math.exp(-((nutrient - 0.28) ** 2 / 0.055 + (oxygen - 0.24) ** 2 / 0.07));
  const global = 0.82 * Math.exp(-((nutrient - 0.76) ** 2 / 0.065 + (oxygen - 0.81) ** 2 / 0.06));
  const noise = Math.sin(nutrient * 71 + oxygen * 37 + seed * 13) * 0.006;
  return Math.max(0, Math.min(1, 0.12 + local + global + noise));
}
export function createRun({ seed = 42, threshold = 65, budget = 24, boredom = true } = {}) {
  return { seed, threshold, budget, boredom, experiments: [], best: 0, pivoted: false, meter: 0, memory: [], finished: false };
}
export function step(run) {
  if (run.finished) return run;
  const i = run.experiments.length;
  const previousBest = run.best;
  const pivot = run.boredom && !run.pivoted && run.meter >= run.threshold && run.memory.some(m => m.type === 'plateau');
  if (pivot) run.pivoted = true;
  // The same local optimizer is used in both arms. The intervention switches
  // its search basin after stagnation; this is a policy comparison, not an LLM.
  const center = run.pivoted ? [0.76, 0.81] : [0.28, 0.24];
  const offset = Math.max(0.005, 0.09 / (1 + (run.pivoted ? i % 6 : i) * 0.4));
  const n = Math.max(0, Math.min(1, center[0] + Math.sin(i * 2.4 + run.seed) * offset));
  const o = Math.max(0, Math.min(1, center[1] + Math.cos(i * 1.8 + run.seed) * offset));
  const value = response(n, o, run.seed);
  const gain = Math.max(0, value - previousBest);
  const recent = run.experiments.slice(-4);
  const repetition = recent.length ? recent.filter(e => Math.hypot(e.nutrient - n, e.oxygen - o) < 0.12).length / recent.length : 0;
  const stagnation = gain < 0.01 ? 1 : 0;
  run.meter = pivot ? 12 : Math.round(Math.min(100, run.meter * 0.48 + (repetition * 55 + stagnation * 45) * 0.52));
  run.best = Math.max(run.best, value);
  const e = { id: i + 1, nutrient: n, oxygen: o, value, best: run.best, gain, repetition, boredom: run.meter, pivot, basin: run.pivoted ? 'exploration' : 'local' };
  run.experiments.push(e);
  if (pivot) run.memory.push({ experiment: i + 1, role: 'Explorer', message: 'Read Analyst’s plateau finding. Test the unvisited high-resource region.', type: 'pivot' });
  if (i === 0) run.memory.push({ experiment: 1, role: 'Scientist', message: 'Initial hypothesis: a small local resource adjustment improves growth.', type: 'hypothesis' });
  if (!run.memory.some(m => m.type === 'plateau') && run.meter >= run.threshold) run.memory.push({ experiment: i + 1, role: 'Analyst', message: 'Recent experiments cluster in one basin with limited improvement. Broaden the search.', type: 'plateau' });
  if (gain > 0.15 && run.pivoted) run.memory.push({ experiment: i + 1, role: 'Analyst', message: 'A higher-yield region was found. Local refinement will test whether the improvement persists.', type: 'finding' });
  run.finished = run.experiments.length >= run.budget;
  return run;
}
export function complete(options) { const run = createRun(options); while (!run.finished) step(run); return run; }
export function exportExperiment(run, baseline) {
  return { model: 'synthetic-two-basin-v1', note: 'Synthetic educational simulation. Scripted policies, no LLM or biological validation.', config: { seed: run.seed, threshold: run.threshold, budget: run.budget }, intervention: run, baseline };
}
