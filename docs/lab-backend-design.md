# Lab Environment: backend and research-agent design

Status: agreed design; backend and live avatar spawning are not implemented yet.
Frontend stack: Three.js, TypeScript, Vite, Zod. Selected style: Lab Environment (`?style=hybrid`).
Backend stack: Python/FastAPI, SQLite, filesystem artifacts, ordered Server-Sent Events, separate worker processes.

## User-visible lifecycle

1. The frontend can run independently, initially disconnected from the research backend.
2. Launching the backend makes the frontend connected. Connection alone does not start paid research or fabricate agents.
3. Starting a research run creates a run ID and invokes the configured research runner.
4. Actual agent roster and assignment events create corresponding characters in the room. Scheduling updates move them to appropriate stations.
5. Hypotheses, tool execution, boredom, findings, critic results, sources, and shared memory update station displays and character activity.
6. A snapshot restores an already-active run after refresh or reconnect, followed by ordered incremental events.
7. Replay uses the same state interface and explicitly labels recorded/mock/live provenance. Auto-start can be an explicit optional configuration.

Current frontend characters are fixed demo roles and its experiment uses a synthetic adapter. This lifecycle describes the implementation target, not the present behavior.

## Ownership and connections

The browser sends experiment IDs, configuration and run commands. Run IDs track jobs; they are not credentials. Credentials remain in server-side runner environments.

Ari's `swarm.py` owns conductor/scout/worker/critic scheduling, research decisions, code proposals, novelty gates, and result acceptance. `boredom.py` and `boredom_meter/` own boredom semantics. `llm.py` owns model-provider calls, including the newly merged Tinker adapter. The API should wrap this runner rather than duplicate those decisions.

Tinker supplies model sampling through Ari's adapter; experiment tools and evaluations execute via the runner's execution backend. Tinker does not host our FastAPI service or run the room. Model sampling and experimental GPU training are separate concerns with separate dependencies and budgets.

Exa and past.dev connect through the research runners. Preserve source URLs, memory authorship/reuse, configuration, model IDs and artifact references when normalizing their records.

## Existing and planned interfaces

Existing autoresearch artifacts include `ledger.jsonl`, `assignments.jsonl`, `boredom_log.jsonl`, `research_log.jsonl`, `memory.jsonl`, `memory_log.jsonl`, `llm_log.jsonl`, `critic.tsv`, `results.tsv`, and run logs/configuration. Normalize these through an AutoresearchAdapter.

The existing `caffeinated-trace/v1` exporter and replay engine live on the separate lab-integration branch. Reuse them as a TraceReplayAdapter. Generic CPU benchmark tasks live on the separate swarm-testcases branch. The Ig Nobel community and its `events.jsonl` schema are on main. These components are not implicitly included just by merging autoresearch.

The current frontend `ResearchAdapter`/Zod schema is the starting boundary. Extend it deliberately for:

- `backend.connected` / connection state;
- `run.snapshot` with actual agent roster, capabilities and current research state;
- `agent.created`, `agent.updated`, assignment changes, and optional removal;
- hypotheses, experiment lifecycle, boredom, strategy changes, findings, sources and artifacts;
- terminal run states: completed, failed, stopped.

Each event needs schema version, run ID, stable event ID, ordered sequence, source reference, and relevant agent/experiment IDs. Preserve native payloads for audit. Avoid inventing timestamps for records that have none; distinguish source order, source time, simulation time and animation time.

The frontend validates events and updates its reducer. Room factories consume the state. The UI must show metric name, unit and minimize/maximize direction instead of assuming growth scores. Backend agent IDs must remain stable and be independent of avatar appearance.

## Proposed API

| API | Purpose |
| --- | --- |
| GET /health | Readiness and runner/service capabilities; no secret values |
| GET /experiments | Allowlisted experiment definitions and requirements |
| POST /runs | Create a configured, budgeted run |
| GET /runs/{id} | Snapshot, roster, status, metric metadata, provenance |
| GET /runs/{id}/events | SSE stream with reconnect cursor |
| GET /runs/{id}/artifacts | Registered plots, logs, traces and datasets |
| POST /runs/{id}/stop | Supported stop request; initially stop at a safe boundary |

Vite proxies API requests in development. Production serves the frontend build alongside the API or through a same-origin proxy. Store research jobs outside the checkout and execute generated work in isolated workspaces with explicit time/resource budgets. API handlers remain responsive while workers run. Replay pause is immediate; live pause/stop must reflect capabilities actually implemented in the runner.

## Build order and acceptance

1. Import an existing recorded trace into Lab Environment. Match recorded metrics, findings, agent identities and provenance.
2. Add SQLite run/event storage and FastAPI snapshot/SSE endpoints. Reconnect and refresh must not duplicate agents or events.
3. Wrap Ari's runner in an isolated worker and exercise a bounded fake-LLM/fake-GPU run with Exa off/local memory/no pushes. Tail artifacts without changing their semantics.
4. Connect Tinker using Ari's existing provider adapter after testing its separate environment and budget controls. Never launch paid calls merely on backend startup.
5. Import generic CPU benchmark task support and then the Ig Nobel adapter, preserving domain-specific metrics.
6. Add scientific snapshot/artifact adapters as the domain team supplies models.

Tests should cover duplicate/out-of-order events, partial JSONL writes, process failures/timeouts, reconnect recovery, actual agent roster reconciliation, metric direction, artifact access, and agreement between replay/live ingestion. Run Ari's meter/swarm/Tinker adapter tests on the combined branch. Fake-provider tests validate protocol behavior, not scientific performance or live Tinker connectivity.

## Integration baseline

Ari branch fetched for this merge: `autoresearch` at `4d437ad` (includes Tinker merge `e910c31` and gate/meter fixes through `772cc01`). See `program_swarm.md` for authoritative runner/Tinker setup. Its Tinker orchestration environment is separate from the PyTorch training environment; do not solve their version difference by changing training dependencies indiscriminately.

## Merge verification

On the combined frontend/autoresearch branch: production frontend build succeeded; 11 frontend tests, 64 autoresearch tests (including mocked Tinker adapter tests), and 23 standalone meter tests passed. Python checks used a separate Python 3.12 environment with matplotlib; no training stack or live Tinker/Modal/Exa/past.dev calls were launched. These checks establish code/protocol compatibility, not live-service readiness.
