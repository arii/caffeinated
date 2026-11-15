// Replays an exported autoresearch trace (schema caffeinated-trace/v1, see data/SCHEMA.md)
// as the same `run` shape the lab renders for the synthetic tutorial.
export const SCHEMA = 'caffeinated-trace/v1';

export function validateTrace(trace) {
  const problems = [];
  if (!trace || typeof trace !== 'object') return ['trace is not an object'];
  if (trace.schema !== SCHEMA) problems.push(`schema is ${JSON.stringify(trace.schema)}, expected ${SCHEMA}`);
  for (const key of ['metric', 'thresholds', 'agents', 'arms']) if (!(key in trace)) problems.push(`missing ${key}`);
  for (const arm of trace.arms || []) {
    const ids = (arm.experiments || []).map(e => e.id);
    if (ids.some((id, i) => id !== i + 1)) problems.push(`${arm.arm}: experiment ids are not 1..n`);
    if (arm.budget !== ids.length) problems.push(`${arm.arm}: budget does not match experiments`);
  }
  return problems;
}

export async function loadTrace(url, fetchImpl = globalThis.fetch) {
  const response = await fetchImpl(url, { cache: 'no-store' });
  if (!response.ok) throw new Error(`Could not load ${url} (${response.status})`);
  const trace = await response.json();
  const problems = validateTrace(trace);
  if (problems.length) throw new Error(problems.join('; '));
  return trace;
}

export function findArm(trace, name) {
  if (name !== undefined && name !== null) return trace.arms.find(a => a.arm === name) || null;
  return trace.arms.find(a => a.boredom_enabled) || trace.arms[0] || null;
}

export function controlArm(trace, primary) {
  return trace.arms.find(a => a !== primary && !a.boredom_enabled) || trace.arms.find(a => a !== primary) || null;
}

function roleFor(arm, round, agent) {
  const info = arm.rounds.find(r => r.round === round);
  if (!info) return agent === 'critic' ? 'critic' : 'worker';
  if (info.scouts?.includes(agent)) return 'scout';
  return info.roles?.[agent] || (agent === 'critic' ? 'critic' : 'worker');
}

export function createReplay(trace, armName) {
  const arm = findArm(trace, armName);
  if (!arm) throw new Error(`No arm ${armName} in trace`);
  const maxScore = Math.max(0.001, ...trace.arms.flatMap(a => a.experiments.map(e => e.score || 0)));
  const agents = {};
  for (const { id, role } of trace.agents) {
    if (id === 'conductor' || arm.agents.includes(id)) agents[id] = { id, kind: role, role: role.toLowerCase(), boredom: 0, last: null };
  }
  for (const id of arm.agents) agents[id] ??= { id, kind: 'Worker', role: 'worker', boredom: 0, last: null };
  return {
    mode: 'replay', trace, arm, armName: arm.arm, boredom: arm.boredom_enabled,
    budget: arm.budget, threshold: trace.thresholds.snap, breakout: trace.thresholds.breakout,
    maxScore, cursor: 0, experiments: [], memory: [], research: [], events: [],
    meter: 0, regime: 'EXPLOIT', round: null, roundInfo: null, pivoted: false, pivots: 0,
    best: 0, score: 0, bestValBpb: arm.summary.baseline_val_bpb, agents, finished: arm.budget === 0,
  };
}

// Advance one ledger event (a worker's run, a critic replication, or the baseline).
export function step(run) {
  if (run.finished) return run;
  const { arm } = run;
  const e = arm.experiments[run.cursor++];
  run.events = [];
  if (e.round !== run.round) {
    run.round = e.round;
    run.roundInfo = arm.rounds.find(r => r.round === e.round) || null;
    if (run.roundInfo) {
      for (const [id, b] of Object.entries(run.roundInfo.agent_boredom)) if (run.agents[id]) run.agents[id].boredom = b;
      for (const id of Object.keys(run.agents)) if (run.agents[id].kind === 'Worker') run.agents[id].role = roleFor(arm, e.round, id);
      run.agents.conductor && (run.agents.conductor.boredom = run.roundInfo.boredom, run.agents.conductor.role = run.roundInfo.regime.toLowerCase());
      for (const q of arm.research) if (q.round === e.round && q.purpose !== 'prior-art') run.research.push(q);
    }
    if (e.pivot) run.events.push({ type: 'pivot', experiment: e, round: run.roundInfo });
  }
  for (const q of arm.research) if (q.round === e.round && q.purpose === 'prior-art' && q.agent === e.agent && !run.research.includes(q)) { run.research.push(q); break; }
  if (!run.roundInfo && run.agents[e.agent]) run.agents[e.agent].boredom = e.agent_boredom ?? e.boredom;
  run.meter = e.boredom; run.regime = e.regime;
  if (e.pivot) { run.pivoted = true; run.pivots += 1; }
  run.bestValBpb = e.best_val_bpb; run.score = e.score; run.best = e.score;
  const shown = { ...e, value: (e.score || 0) / run.maxScore, best: e.score };
  run.experiments.push(shown);
  if (run.agents[e.agent]) run.agents[e.agent].last = shown;
  for (const m of arm.memory) if (m.experiment === e.id) {
    run.memory.push(m);
    if (m.type === 'lead') run.events.push({ type: 'lead', memory: m, source: arm.sources[m.source_ids[0]] });
  }
  if (e.lead?.author && e.lead.author !== e.agent && e.kind === 'candidate') run.events.push({ type: 'reuse', experiment: e, lead: e.lead });
  if (e.kind === 'critic') run.events.push({ type: 'critic', experiment: e });
  run.finished = run.cursor >= arm.experiments.length;
  return run;
}

export function replayToEnd(trace, armName) {
  const run = createReplay(trace, armName);
  while (!run.finished) step(run);
  return run;
}

// Swap in a re-exported trace (live mode) without restarting the replay.
export function refreshReplay(run, trace) {
  const arm = findArm(trace, run.armName);
  if (!arm) return run;
  run.trace = trace; run.arm = arm; run.budget = arm.budget;
  run.maxScore = Math.max(run.maxScore, ...trace.arms.flatMap(a => a.experiments.map(e => e.score || 0)));
  for (const id of arm.agents) run.agents[id] ??= { id, kind: id === 'critic' ? 'Critic' : 'Worker', role: 'worker', boredom: 0, last: null };
  run.finished = run.cursor >= arm.experiments.length;
  return run;
}

export function sourcesSeen(run) {
  const ids = [...new Set(run.research.flatMap(q => q.source_ids))];
  return ids.map(id => run.arm.sources[id]).filter(Boolean);
}

export function reuseLinks(run) {
  return run.memory.flatMap(m => m.reused_by
    .filter(r => r.experiment <= run.cursor)
    .map(r => ({ memory: m, reader: r.agent, experiment: r.experiment })));
}
