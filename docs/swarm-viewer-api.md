# Swarm viewer API and data model (`swarm-viewer/v1`)

Status: design contract with an implementation on the autoresearch branch.
This document describes the Artificial Scientist Swarms viewer. The status below
distinguishes implemented behavior from the design shapes retained in §§1–7.

## Implementation status

The autoresearch branch implements the static
[exporter](https://github.com/arii/caffeinated/blob/autoresearch/export_viewer.py),
incremental round-end/final publishing (commit 91e6e26) and a read-only FastAPI
[server](https://github.com/arii/caffeinated/tree/autoresearch/viewer)
(commit add9002). These modules are on that branch, not this main checkout.
The details below were checked against autoresearch at 34f1821.

From an autoresearch checkout, install dependencies and serve an export root:

```sh
python -m pip install -r viewer/requirements.txt
python -m viewer --data /path/to/export-root --port 8000
```

The export root contains index.json and UUID-named run directories. The CLI binds
to 127.0.0.1. Static export supports both source formats:

```sh
python export_viewer.py /path/to/run --swarm autoresearch --dest /path/to/export-root
python export_viewer.py /path/to/ignobel-run --swarm ignobel --dest /path/to/export-root
```

### Implemented HTTP routes

All paths below are GET routes under /api/v1.

| Path | Implemented behavior |
| --- | --- |
| /runs | Summaries from index.json |
| /runs/{run_id} | Manifest |
| /runs/{run_id}/timeline | Timeline and keyframe ticks |
| /runs/{run_id}/world | WorldSnapshot; at=tick=T, at=round=R, at=ts=ISO or a bare tick; latest by default |
| /runs/{run_id}/events | Paged events/next_after; after, until, agent_id, type, limit; NDJSON is a bounded page |
| /runs/{run_id}/agents/{agent_id} | Identity/state/entities/history; native ID or UUID; same at selectors |
| /runs/{run_id}/agents/{agent_id}/{collection} | questions, observations, hypotheses, experiments, rewards, diary, memory or llm_calls; until, before, limit |
| /runs/{run_id}/ledger | Experiment entities; until, agent_id, status |
| /runs/{run_id}/discoveries | Discoveries; until |
| /runs/{run_id}/entities/{kind}/{entity_id} | Full entity; native is null unless a raw record was attached |
| /runs/{run_id}/artifacts/{path} | Files confined to the exported artifacts directory |
| /runs/{run_id}/stream | SSE with after/Last-Event-ID resume and run.status messages |

Event pages default to 500 and cap at 5000; collection pages default to 100 and cap
at 1000. Unknown runs/agents/entities return 404; invalid world selectors return 416.
SSE polls complete exported event lines every 0.1 seconds, emits status heartbeats
every 15 seconds and closes at terminal status.

The conductor publishes after each round and on exit, by default to <out>/viewer.
Use --viewer-dest PATH or --no-viewer to change or disable it. Publishing appends
only an event suffix, preserves keyframes and refuses non-prefix histories.
Files are replaced atomically one at a time, not as a directory transaction.
Publish errors are logged without stopping research. Terminal publication adds
run.finished and sets live=false. Visibility is round-level rather than worker-log tailing.

### Contract differences and access boundary

The schemas and endpoint table below remain design targets. Implementation differences:

- Terminal status is finished/stopped, rather than the completed/failed vocabulary.
- Run summaries lack compare_group/best and top-level ticks/rounds. Artifact hashes in
  provenance.artifacts remain empty; current CPU provenance omits the legacy gpu field.
- Entity files contain arrays, not ID-keyed maps. Raw native source records are not
  guaranteed. Full prompt/response records live in llm_calls entities.
- The CPU phase is evaluate. Snapshot activity training is a legacy wire token for CPU
  candidate evaluation; the activity/station names below are retained for compatibility.
- NDJSON is a bounded page, not a continuing stream; SSE supplies live updates.
- Artifact paths are directory-confined, but the contract's extension allowlist is not
  enforced. Authentication and automatic credential scrubbing are absent.
- Exported accept_margin defaults to zero if omitted; conductor acceptance falls back to eps.
- The frontend/Python shared fixture proposed in §5 is not supplied on these branches.

Handlers read exported files only, with no run-control, inference or memory-write routes.
Launch the server without swarm credentials; process-environment isolation is the
operator's responsibility. CORS permits HTTP localhost/127.0.0.1 GET origins, not
general access control. Running responses use weak ETags/no-cache; finished/stopped
responses use content hashes/immutable caching. The run index is always revalidated.
Matching ETags return 304.

## Design contract

The lab frontend gets **read-only** access to a swarm run. A viewer scrubs a timeline, pauses
the world at any time step, walks between agents, and opens one to see its role, boredom, the
questions it asked, what it observed, its diary, its last reward and the reasoning behind its
proposals. The timeline shows how the run reached each discovery.

The design has three parts:

1. A normalized, **append-only event log** for each run. Every event has a global integer `tick`.
2. A **reducer** that folds events up to tick `T` into a `WorldSnapshot`: the world paused at `T`.
3. A small set of **GET endpoints** (with an optional SSE stream for live runs), plus a static-file
   layout that uses the same shapes, so replay works without a server.

Producers adapt the artifacts the swarms write. The CPU conductor now also writes run metadata
and publishes exports; [log coverage](#gaps-in-current-logs) describes available and missing inputs.

| swarm | code | native artifacts |
|---|---|---|
| autoresearch | `swarm.py` on `autoresearch` | `ledger.jsonl`, `assignments.jsonl`, `boredom_log.jsonl`, `research_log.jsonl`, `memory.jsonl`, `memory_log.jsonl`, `llm_log.jsonl`, `critic.tsv`, `results.tsv`, `run_id`, `run.json`, `boredom_profile.json`, optional `viewer_publish_log.jsonl`, `runs/`, default `viewer/` |
| ignobel | `ignobel/world.py` on `main` | `events.jsonl` (schema in `ignobel/events.md`), `scores.jsonl`, `state.json`, `prompts.jsonl`, `plots/` |

This replaces the per-experiment `caffeinated-trace/v1` (`export_trace.py`, closed PR #4), which
has no per-agent state between experiments. It also extends the `ResearchEvent` envelope in
`src/engine/contract.ts` on `agent/masha/lab-style-options`: `tick` is that envelope's `sequence`,
and `version`/`runId`/`eventId` map one-to-one.

---

## 1. Time model

| field | type | meaning |
|---|---|---|
| `tick` | int ≥ 0 | **Primary index.** One per normalized event, strictly increasing, gap-free within a run. "Pause at T" means "every event with `tick ≤ T` has happened". |
| `round` | int ≥ 0 | The swarm's natural step: an autoresearch round or an ignobel round. 0 is setup (baseline, seeding). |
| `phase` | enum | Position within a round, e.g. `assign → research → propose → gate → evaluate → critic → status` (autoresearch) or `boredom → talk → share → snap → propose → study → diary` (ignobel). Used for ordering and for the scrubber's sub-ticks. |
| `ts` | ISO-8601 or `null` | Source wall-clock time **only if the source record had one**. It is never invented. Ig Nobel events have no timestamps; current CPU ledger rows carry `ts`. |

The frontend owns animation time. It interpolates between ticks and never treats it as data.

**Ordering rule (exporter).** autoresearch writes several files, so events are merged by
`(round, phase rank, ts, file, line)`. Current CPU ledger timestamps are used for both experiment
events; older rows without `ts` borrow the matching gate timestamp for `experiment.started`
and a following status timestamp for `experiment.finished` when available. Ig Nobel uses file order. Running the exporter
twice on the same artifacts must produce byte-identical output.

**Keyframes.** The server or exporter stores a full `WorldSnapshot` at the end of every round (and
every 250 ticks at most). Seeking to `T` loads the nearest keyframe at or before `T` and replays the
remaining events. This keeps pause and seek instant on long runs.

---

## 2. Identity

- `run_id`: UUIDv5(`NS_CAFFEINATED`, `"{swarm}:{arm}:{branch or out_dir}:{first ts or seed}"`).
  One run is one arm. Arms that are compared share a `compare_group`.
- `agent_id`: UUIDv5(`run_id`, `native_id`), for example `native_id = "worker-2"` or `"quill"`.
  It is deterministic, so a re-export keeps the same IDs. It does not depend on avatar appearance.
- `event_id`: UUIDv5(`run_id`, `"{file}:{line}:{sub}"`). This deduplicates events on reconnect.
- Entity IDs keep native IDs where they exist: `S25` (source), `Q13` (query), `lead-B-3-worker-1`
  (memory item), ledger `seq`, ignobel `study_id`/`idea_id`. Each is prefixed with its kind
  (`source:S25`) so it is unique within the run.

`NS_CAFFEINATED = 6f1c3d2e-5b7a-4c1e-9a43-0c0ffee00001` (fixed and committed with the exporter).

---

## 3. Data model

TypeScript below is the canonical shape. The Python exporter emits the same JSON (snake_case
keys). Optional fields are absent, never `null`, unless the type says `| null`.

### 3.1 Run manifest

```ts
type Swarm = 'autoresearch' | 'ignobel';
type RunStatus = 'running' | 'completed' | 'failed' | 'stopped';

interface RunManifest {
  schema: 'swarm-viewer/v1';
  run_id: string;
  swarm: Swarm;
  title: string;
  status: RunStatus;
  live: boolean;                       // true while the producer is still appending
  arm: { id: string; label: string; boredom_enabled: boolean; policy: string };
  compare_group?: string;              // runs whose arms are compared share this
  metric: { name: string; unit: string; direction: 'minimize' | 'maximize' };
  boredom: { scale: [0, 1]; thresholds: Record<string, number>; regimes: string[] };
  time: { ticks: number; rounds: number; ts_start: string | null; ts_end: string | null };
  agents: AgentIdentity[];
  provenance: {
    llm: string; gpu: string; exa: string; memory_backend: string; // gpu is a legacy contract field
    command: string; swarm_commit: string;
    artifacts: Record<string, string>; // file -> sha256[:16]
  };
}
```

### 3.2 Agents

`type` is what the agent **is** for the whole run. `role` is what it was **assigned** this round.

```ts
type AgentType =
  | 'conductor' | 'worker' | 'critic' | 'baseline'   // autoresearch
  | 'researcher' | 'statistician'                    // ignobel (statistician = no dataset)
  | 'world';                                         // system / environment pseudo-agent

interface AgentIdentity {
  agent_id: string;           // uuid
  native_id: string;          // "worker-2", "quill"
  display_name: string;
  type: AgentType;
  field?: string;             // ignobel: "behavioral economics"
  instruments?: string[];     // ignobel lab instruments
}

type Activity =
  | 'idle' | 'assigned' | 'researching' | 'recalling' | 'proposing' | 'gated'
  | 'training' | 'reviewing' | 'talking' | 'sharing' | 'snapping' | 'writing_diary';

interface AgentState {                 // one agent at tick T
  agent_id: string;
  type: AgentType;
  role: string | null;                 // autoresearch: exploit|divergent|critic; ignobel: REFINE|SNAP|RUN_STUDY
  scout: boolean;                      // autoresearch: assigned a research-scout slot this round
  activity: Activity;
  station: string;                     // frontend hint: culture|analyzer|explorer|notebook|...
  since_tick: number;                  // tick when activity last changed
  boredom: Boredom;
  focus: {                             // what it's working on right now
    question_id?: string; hypothesis_id?: string; experiment_id?: string;
    partner_agent_id?: string;         // ignobel talk/share partner
  };
  last_observation_id: string | null;
  last_question_id: string | null;
  last_reward: Reward | null;          // most recent reward with tick ≤ T ("previous reward")
  diary_head: { diary_id: string; excerpt: string } | null;
  counters: { experiments: number; keeps: number; questions: number;
              observations: number; memory_writes: number; tokens: number };
}

interface Boredom {
  B: number;                           // 0..1 (the trace-v1 B×100 is a display choice only)
  regime: string;                      // EXPLOIT | BOREDOM_SNAP | PARADIGM_BREAKOUT | CONVERGED | FRUSTRATED | YOKED_SNAP
  components: Record<string, number>;  // autoresearch: novelty, stagnation, overload, fail_rate, trivial_rate, diversity
                                       // ignobel: similarity, self_repeat, ext_familiar, unsurprise, stall, frustration
  shadow: boolean;                     // true when the meter is disabled (arm A): what B would have been
  measured_tick: number;               // tick of the boredom.measured event this came from
}
```

### 3.3 Things agents produce and receive

Each of these is an entity with its own ID and a `tick`. `AgentState` points at the latest one,
and the detail endpoints list them in time order.

```ts
interface Question {        // something the agent asked: a search, a recall, an extract, a talk opener
  question_id: string; agent_id: string; tick: number; round: number;
  kind: 'search' | 'prior_art' | 'scout' | 'extract' | 'recall' | 'novelty' | 'talk';
  text: string;
  answered_by: string[];    // observation_ids
}

interface Observation {     // something the agent saw
  observation_id: string; agent_id: string; tick: number; round: number;
  kind: 'sources' | 'memories' | 'result' | 'verdict' | 'gate' | 'message' | 'shared_items'
      | 'assignment' | 'measurement';
  summary: string;          // one line for the HUD
  refs: string[];           // source:S25, memory:lead-B-3-worker-1, experiment:12, ...
  question_id?: string;
  from_agent_id?: string;   // memory author, talk speaker, sharer
}

interface Hypothesis {      // a proposal plus its reasoning
  hypothesis_id: string; agent_id: string; tick: number; round: number;
  text: string;             // autoresearch claim.idea; ignobel idea.title / text
  rationale: string;        // autoresearch claim.rationale; ignobel idea.hypothesis + method
  descriptor?: Record<string, unknown>;
  prediction?: { delta?: number; direction?: '+' | '-'; effect_size?: number };
  lead_id?: string; source_ids: string[];
  llm_call_id?: string;     // full prompt / response
}

interface Experiment {      // one ledger row (autoresearch) or study (ignobel)
  experiment_id: string; agent_id: string; round: number;
  tick_started: number; tick_finished: number | null;
  kind: 'baseline' | 'candidate' | 'critic' | 'study';
  hypothesis_id?: string;
  commit?: string; descriptor?: Record<string, unknown>;
  gate?: { pass: boolean; reasons: string[]; attempts: number };
  metric_value: number | null;            // val_bpb, effect size, ...
  status: 'keep' | 'discard' | 'crash' | 'reject' | 'replicated' | 'not_replicated' | 'failed';
  verdict?: { by_agent_id: string; verdict: string; why: string };
  reward: Reward | null;
  artifacts: string[];                    // diff, plot_path, run log
}

interface Reward {
  experiment_id: string; tick: number;
  value: number;            // direction-normalized, higher = better (see §3.5)
  metric_value: number | null;
  reference: number | null; // best before this experiment (autoresearch) / predicted effect (ignobel)
  delta: number | null;     // metric_value - reference, in metric units
  accepted: boolean;        // kept / replicated
  outcome: Experiment['status'];
}

interface DiaryEntry {      // the agent's own running notes
  diary_id: string; agent_id: string; tick: number; round: number;
  kind: 'lesson' | 'rationale' | 'critic_lesson' | 'round_summary' | 'talk';
  text: string;
  replaces?: string;        // ignobel lessons are rewritten each round; keep the chain
  refs: string[];
}

interface MemoryItem {      // shared or private memory (past.dev mirror / ignobel stores)
  memory_id: string; author_agent_id: string; tick: number; round: number;
  type: string;             // lead|claim|result|verdict|lesson|assignment|idea|prediction|failure
  text: string; source_ids: string[];
  scope: 'shared' | 'private';
  recalled_by: { agent_id: string; tick: number; inferred: boolean }[];
}

interface Source { source_id: string; title: string; url: string; published?: string;
                   query_id?: string; agent_id: string; tick: number; highlight?: string;
                   extract?: string; cited_by: string[] }

interface LlmCall { llm_call_id: string; agent_id: string; tick: number; role: string;
                    model: string; prompt_sha: string; tokens: { input: number; output: number };
                    latency_ms: number;
                    prompt?: string; response?: string; parsed?: unknown;  // only from the entity endpoint
                    reasoning?: string }                                    // only if logged (see Gaps)

interface Discovery {       // the timeline markers the viewer works backwards from
  discovery_id: string; tick: number; round: number; agent_id: string; experiment_id: string;
  kind: 'new_best' | 'replicated_study' | 'committee_pick';
  metric_value: number; improvement: number;   // vs previous best or baseline, direction-normalized
  lineage: { ref: string; agent_id: string; tick: number;
             relation: 'lead' | 'source' | 'recalled_memory' | 'parent_commit'
                     | 'conversation' | 'shared_item' | 'hypothesis' }[];
}
```

### 3.4 Events

```ts
interface SwarmEvent<T extends EventType = EventType, P = unknown> {
  schema: 'swarm-viewer/v1';
  run_id: string;
  event_id: string;          // uuid, stable across re-exports
  tick: number;
  round: number;
  phase: string;
  ts: string | null;
  type: T;
  agent_id: string | null;   // actor; null for run-level events
  refs: Record<string, string>;  // experiment_id, question_id, hypothesis_id, memory_id, ...
  source: { file: string; line: number; native_type: string };
  payload: P;
}
```

| `type` | payload (summary) | autoresearch source | ignobel source |
|---|---|---|---|
| `run.started` | manifest subset | `run.json` | first line / `run_arm.py` args |
| `run.finished` | `{status, best}` | last `status` | last `lesson` of last round |
| `round.started` | `{regime, swarm_B, rationale}` | `assignments.jsonl` | first `boredom` of round |
| `agent.assigned` | `{role, scout, rationale}` | `assignment.roles/scouts` (one per worker) | `boredom.action` |
| `boredom.measured` | `Boredom` | `assignment.per_agent_B` + recomputed components†, `status` (swarm) | `boredom` |
| `question.asked` | `Question` | `research_log` `query`/`extract`; `memory_log` `recall` | `seed.query`, `snap`, `study_result.novelty` |
| `observation.received` | `Observation` | `research_log` `source`; `memory_log` `recall` results; gate/critic outcomes | `seed.sources`, `snap.source`, `talk` (partner), `share.kept`, `measurement_request` |
| `hypothesis.proposed` | `Hypothesis` | `memory.jsonl` `claim` + `llm_log` WORKER_PROPOSE | `idea` + `prediction` |
| `gate.checked` | `{experiment_id, pass, reasons}` | `boredom_log` `gate` | — |
| `experiment.started` | `Experiment` (partial) | ledger row (status pending) | `measurement_request` / study start |
| `experiment.finished` | `Experiment` with `reward` | ledger row, `critic.tsv` | `study_result` |
| `verdict.issued` | `{experiment_id, verdict, why}` | `critic.tsv`, `verdict` memory | — (committee is post-run) |
| `memory.written` | `MemoryItem` | `memory.jsonl` / `memory_log` `write` | private store writes (idea, prediction, result) |
| `message.sent` | `{to_agent_id, turn, text}` | — | `talk` |
| `items.shared` | `{to_agent_id, offered, kept}` | — | `share` |
| `diary.written` | `DiaryEntry` | `claim.rationale`, critic `lesson`, round summary | `lesson` |
| `discovery.made` | `Discovery` | critic `keep` that improves the best by more than `eps` | `study_result.replicated` (+ `scores.jsonl` picks at the end) |
| `llm.called` | `LlmCall` (no prompt body) | `llm_log.jsonl` | prompt log |

† Current assignments record full per_agent_boredom as well as per_agent_B and ledger/profile
hashes. The exporter recomputes components against each assignment's logged ledger prefix,
checks hashes and verifies logged B/components. Older assignments may contain only B.

Unknown `type` values are ignored by the reducer, so new types do not require a version bump.
Renaming or removing a field does.

### 3.5 Derived values (one definition, used by both swarms)

- **Previous reward**: `AgentState.last_reward` is the newest `Reward` for that agent with
  `tick ≤ T`. It is the reward the agent knew about when it made its next decision.
- `Reward.value` (autoresearch): `(reference - metric_value) / reference × 100` for `minimize`
  (positive = better than the best before it); `crash`/`reject` = `0`, `accepted = false`.
  This uses the same sign convention as trace-v1 `score`.
- `Reward.value` (ignobel): `replicated ? 1 - gap(prediction, actual) : 0`, from `ignobel/boredom.py`.
  Committee scores arrive at the end as `discovery.made` (`committee_pick`). They are never shown to
  agents during the run.
- **Swarm best** is the confirmed (critic-accepted) best, as in trace v1, not the raw provisional
  minimum.

### 3.6 World snapshot (the paused world)

```ts
interface WorldSnapshot {
  run_id: string; tick: number; round: number; phase: string; ts: string | null;
  swarm: {
    B: number; regime: string; frontier_stall: number;
    best: { metric_value: number; experiment_id: string; agent_id: string; tick: number } | null;
    baseline: number | null;
  };
  agents: AgentState[];                         // every agent in the manifest, always
  in_flight: { experiment_ids: string[]; conversations: [string, string][] };
  totals: { experiments: number; discoveries: number; questions: number;
            sources: number; memory_items: number; tokens: number };
  discovery_ids: string[];                      // discoveries with tick ≤ T
  recent_events: SwarmEvent[];                  // last 20, for the HUD ticker
}
```

The snapshot is deliberately small (about 5–20 KB). Ledger, memory, sources and diary history are
fetched separately and filtered by `until=T`.

---

## 4. HTTP API

Base path `/api/v1`. **GET only.** JSON, plus NDJSON where noted. No auth in development. The
server reads artifacts only and should be launched without swarm credentials. Completed runs are immutable,
so their responses carry `ETag` and `Cache-Control: immutable`.

Time selectors, accepted wherever `at` appears: `tick=T` | `round=R` (end of round R) |
`ts=ISO` (last tick with `ts ≤` value). The default is the last tick.

| method & path | returns | used for |
|---|---|---|
| `GET /runs` | `RunSummary[]` (`run_id, swarm, title, arm, status, live, compare_group, ticks, rounds, best`) | run picker |
| `GET /runs/{run_id}` | `RunManifest` | load once: roster, metric, thresholds |
| `GET /runs/{run_id}/timeline` | `Timeline` (below) | scrubber, sparklines, markers |
| `GET /runs/{run_id}/world?at` | `WorldSnapshot` | pause / seek |
| `GET /runs/{run_id}/events?after=&until=&agent_id=&type=&limit=500` | `{events: SwarmEvent[], next_after: number \| null}`. `Accept: application/x-ndjson` streams them instead. | play forward from a snapshot, filtered logs |
| `GET /runs/{run_id}/agents/{agent_id}?at` | `AgentDetail` (below) | click an agent |
| `GET /runs/{run_id}/agents/{agent_id}/{collection}?until=&limit=&before=` where collection ∈ `questions, observations, hypotheses, experiments, rewards, diary, memory, llm_calls` | paged list, newest first | agent panel tabs |
| `GET /runs/{run_id}/ledger?until=&agent_id=&status=` | `Experiment[]` | ledger wall / results board |
| `GET /runs/{run_id}/discoveries?until=` | `Discovery[]` with lineage | "how we got here" |
| `GET /runs/{run_id}/entities/{kind}/{id}` | full entity + `native` (raw source record). `llm_call` includes `prompt`, `response`, `parsed`. | drill-down, reasoning |
| `GET /runs/{run_id}/artifacts/{path}` | file (allowlisted: diffs, plots, run logs) | code diff, plot |
| `GET /runs/{run_id}/stream?after=T` | SSE: `event: swarm-event`, `id: <tick>`, `data: SwarmEvent`, plus `event: run.status` heartbeats every 15 s | optional live mode |

```ts
interface Timeline {
  ticks: number;
  rounds: { round: number; tick_start: number; tick_end: number; regime: string;
            swarm_B: number; best: number | null }[];
  markers: { tick: number; kind: 'discovery' | 'regime_change' | 'pivot' | 'crash' | 'verdict';
             agent_id: string | null; label: string; ref: string }[];
  series: {                                    // [tick, value] pairs, one per change
    swarm_B: [number, number][];
    best: [number, number][];
    agent_B: Record<string, [number, number][]>;
  };
  keyframes: number[];                         // ticks that have a stored snapshot
}

interface AgentDetail {
  identity: AgentIdentity;
  state: AgentState;                           // at the requested tick
  current: { question?: Question; observation?: Observation; hypothesis?: Hypothesis;
             experiment?: Experiment; diary?: DiaryEntry };
  recent: { questions: Question[]; observations: Observation[]; diary: DiaryEntry[];
            rewards: Reward[] };               // 5 each, tick ≤ T
  history: { B: [number, number][]; reward: [number, number][]; roles: [number, string][] };
}
```

Errors: `404 {error: "unknown_run" | "unknown_agent" | "unknown_entity"}`,
`416 {error: "tick_out_of_range", ticks}`. Requests for a tick beyond a live run's last tick return
`416`, so the client never sees state that does not exist yet.

### 4.1 Static export (no server)

Replay does not need a backend. `export_viewer.py <out_dir> --swarm autoresearch|ignobel` writes
files whose JSON matches the endpoints, so the frontend can switch base URLs:

```
lab/data/runs/index.json                      = GET /runs
lab/data/runs/{run_id}/manifest.json          = GET /runs/{id}
lab/data/runs/{run_id}/timeline.json          = GET /runs/{id}/timeline
lab/data/runs/{run_id}/events.ndjson          = all events (offline_swarm_B ≈ 470 events)
lab/data/runs/{run_id}/keyframes/{tick}.json  = GET /runs/{id}/world?tick=…
lab/data/runs/{run_id}/entities/{kind}.json   = id -> entity map (prompts in llm_call.json, lazy-loaded)
```

The current runs are small: tens of rounds and hundreds of events. For these, the frontend loads
`events.ndjson` once and runs the reducer locally, so play, pause, seek and step are all instant
and offline. The server endpoints and keyframes exist for long or live runs.

### 4.2 Live mode (optional)

The CPU conductor publishes after each round and on exit. The server reads those published
files and tails complete events.ndjson lines for SSE. It does not watch raw worker logs
or assign new ticks itself. Resume uses Last-Event-ID or after, with lifecycle status messages.

Candidates execute on CPU in Docker. Round duration depends on task, proposal, research and
inference settings. Pausing freezes only the client's view; the swarm continues and the client
can buffer events. Offline fake-inference runs are convenient replay fixtures.

---

## 5. Frontend reducer contract

```ts
function reduce(world: WorldSnapshot, e: SwarmEvent): WorldSnapshot  // pure, total, idempotent by tick
// seek(T) = keyframe(≤T) then reduce(events (k, T])
// step()  = seek(tick + 1);  stepRound() = seek(timeline.rounds[r+1].tick_start)
```

- Ignore an event if `e.tick ≤ world.tick` (deduplication) or if its `type` is unknown.
- `activity`/`station` change only on that agent's own events. The mapping is in §6.
- The Python exporter and the TS reducer must produce identical snapshots at every keyframe. A
  shared cross-language fixture is a design requirement, not a currently supplied test.

## 6. Activity → station (default room mapping)

| event | activity | station |
|---|---|---|
| `agent.assigned` | assigned | notebook |
| `question.asked` (search/scout/extract/prior_art) | researching | explorer |
| `question.asked` (recall) | recalling | notebook |
| `hypothesis.proposed` | proposing | notebook |
| `gate.checked` | gated | analyzer |
| `experiment.started` | training | culture |
| `experiment.finished` / `verdict.issued` | reviewing | analyzer |
| `message.sent` / `items.shared` | talking / sharing | partner's station |
| `diary.written` | writing_diary | notebook |
| `round.started` | idle | home |

The room factory can override this mapping. Backend IDs and states do not depend on it.

---

## 7. Example: `GET /runs/{id}/agents/{worker-2}?round=3`

```json
{
  "identity": { "agent_id": "8a0c…", "native_id": "worker-2", "display_name": "Worker 2", "type": "worker" },
  "state": {
    "agent_id": "8a0c…", "type": "worker", "role": "divergent", "scout": false,
    "activity": "reviewing", "station": "analyzer", "since_tick": 311,
    "boredom": { "B": 0.29, "regime": "BOREDOM_SNAP", "shadow": false, "measured_tick": 280,
                 "components": { "novelty": 0.61, "stagnation": 0.5, "overload": 0.0 } },
    "focus": { "experiment_id": "experiment:12", "hypothesis_id": "hypothesis:claim-B-r3-worker-2-a1" },
    "last_observation_id": "observation:302", "last_question_id": "question:Q13",
    "last_reward": { "experiment_id": "experiment:12", "tick": 311, "value": -0.58,
                     "metric_value": 0.983283, "reference": 0.977569, "delta": 0.005714,
                     "accepted": false, "outcome": "discard" },
    "diary_head": { "diary_id": "diary:claim-B-r3-worker-2-a1", "excerpt": "Scout lead S25 reports…" },
    "counters": { "experiments": 3, "keeps": 1, "questions": 7, "observations": 19, "memory_writes": 6, "tokens": 0 }
  },
  "current": { "hypothesis": { "text": "[SNAP] …", "rationale": "…", "lead_id": "lead-B-3-worker-1",
                               "source_ids": ["S34", "S25"], "prediction": { "delta": -0.002 } } },
  "recent": { "questions": [], "observations": [], "diary": [], "rewards": [] },
  "history": { "B": [[40, 0.0], [160, 0.12], [280, 0.29]], "reward": [[95, 0.0], [210, 1.83], [311, -0.58]],
               "roles": [[12, "exploit"], [140, "exploit"], [262, "divergent"]] }
}
```

(Numbers are illustrative. The real fixture is generated from `experiments/offline_swarm_B` on
`agent/devin/lab-integration`.)

---

## Gaps in current logs

Current CPU runs have closed several gaps from the original proposal:

1. **Recall attribution.** The conductor passes worker identities into recall logging.
   Older generic identities still require inference.
2. **Ledger timestamps.** Current baseline, candidate and critic records carry ts; older
   inputs use the gate/status fallback in §1. Unavailable timestamps remain null.
3. **Per-agent components.** Assignments include full per_agent_boredom, B and hashes.
   The exporter recomputes against the logged prefix to verify them.
4. **Run provenance.** run.json records the starting commit, redacted command and lifecycle;
   boredom_profile.json preserves the effective profile. Exported artifact hashes remain empty.
5. **Model text.** llm_log.jsonl stores prompts, parsed responses and provider-returned
   attempt content/reasoning when available. A proposal's rationale and recorded response
   provide the available explanations; additional internal reasoning is not guaranteed.
6. **Ig Nobel timestamps.** events.jsonl intentionally omits wall-clock timestamps;
   file order and ticks supply replay time.

## Out of scope

- Any write path: starting or stopping runs, or "talking to" agents. The frontend is read-only.
  Asking an agent a question would need a separate, budgeted, server-side endpoint and is not part
  of v1.
- Cross-run diffing beyond `compare_group`. The frontend can load two runs and align them by
  `round`.
