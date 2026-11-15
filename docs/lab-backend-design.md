# Lab Environment: backend and research agents

Implemented on `agent/masha/lab-style-options`: one selected Lab Environment, a local FastAPI service, SQLite run/event storage, filesystem artifacts, SSE snapshots, and a separate autoresearch worker process.

## Connections and ownership

```text
Browser (Three.js / TypeScript)
  HTTP: configure, start, select, stop, export
  SSE: validated snapshots with monotonic run sequence
         ↕
FastAPI → SQLite snapshots + ordered audit events
         ↕ normalized native JSONL
Per-run worker + pinned Git clone
         ↕
Ari’s swarm.py → boredom meter / local memory / critic gates
         ├─ llm.py → Tinker sampling (or explicit fake mode)
         └─ evaluator → Modal training (or explicit fake GPU mode)
```

Ari owns scheduling, novelty, hypotheses, and result acceptance. The integration wraps that implementation; it does not replace its research decisions. Tinker provides model sampling. It does not host the API, frontend, or GPU experiment runtime. API keys stay server-side; run IDs identify jobs and are not credentials.

## Lifecycle

1. The frontend can load without a backend and shows disconnection honestly.
2. Backend startup connects the frontend without launching paid work or fabricating agents.
3. The user opens run setup; only configured real execution profiles are enabled. No sample benchmark is selected.
4. Starting a bounded run creates a persisted ID and pins its input to the branch’s committed HEAD. A separate process invokes the runner in a per-run clone, using local memory, Exa off, and no pushes.
5. The actual six-agent roster appears in the room. Native assignments update roles/stations; native proposals, ledger records, critic results, and memory update the observatory.
6. Refresh or reconnect loads a persisted snapshot, then subscribes to SSE. Stable source identifiers prevent duplicate ingestion; stale snapshots cannot roll back the same run.
7. Stop terminates the local process group. Remote requests already dispatched may still finish. On server restart, unfinished runs become interrupted and are not relaunched.

## Data contract

Snapshots include run identity, source commit, config, status, last sequence, roster, assignments, progress, boredom/regime, metric name/unit/direction, results, findings, sources, error, and provider provenance. Audit events preserve stable native source references; original artifacts remain downloadable. Animation time does not represent scientific time.

Each agent’s JSON contains `boredom` (0–100) and `boredomSpectrum` with normalized `position`, hex `color`, and the meter’s `regime`. Native per-agent meter state is recomputed from complete ledger records using the pinned profile. Individual spectra are data, not repeated screen widgets. The UI shows one swarm spectrum; color has no effect on scheduling.

Fake profiles are retired. CPU mode reports measured task loss using the upstream Docker sandbox; Modal mode uses validation bits per byte. Imported archives are labeled recorded and do not dispatch model calls. The central table visualizes team activity and is not a biological simulation.

## API

All endpoints are prefixed `/api`.

| Method/path | Purpose |
| --- | --- |
| GET /health | Provider capabilities, configured public model, limits |
| GET /experiments | Supported autoresearch experiment |
| POST /runs | Validate config and start one bounded job |
| GET /runs | Persisted recent run history |
| GET /runs/{id} | Current snapshot |
| GET /runs/{id}/events | SSE snapshots; supports reconnect cursor |
| GET /runs/{id}/events.json | Ordered audit history |
| GET /runs/{id}/export | Full persisted snapshot and audit events |
| GET /runs/{id}/artifacts | Registered artifact list |
| GET /runs/{id}/artifacts/{path} | Allowlisted, redacted artifact download |
| POST /runs/{id}/stop | Stop local orchestration |

Vite proxies `/api` in development. A production build can be served by FastAPI on the same origin. Storage is `.lab_data/` or `LAB_DATA_DIR`. The local service uses loopback and origin/host checks; public multi-user deployment needs authentication and stronger isolation. Research clones protect the checkout but are not security sandboxes.

## Integration baseline and remaining adapters

Integrated `origin/autoresearch-cpu-tasks` at `c823634`, which includes the current autoresearch/Tinker implementation and Docker-sandboxed CPU mini tasks. Experimental result branches do not replace the integrated runner.

CPU tasks and the swarm-viewer/v1 recording importer are integrated. Ig Nobel and domain solvers remain separate adapters. Future integrations should normalize their native records through this API and preserve metric semantics, source identifiers, scientific time, and artifacts. Follow `program_swarm.md` for provider/training setup; renderer and training dependencies remain separate.

## Verification

Production frontend build, frontend contract/navigation checks, backend persistence/API/recovery tests, and an end-to-end offline swarm run passed. Upstream checks passed 70 tests plus 23 standalone meter tests. A bounded one-round live Tinker run completed with proposals, four candidate evaluations, critic confirmation, and shared memory. Its evaluator was explicitly fake; this does not establish real GPU training readiness.

## Recording import and real execution

`backend/import_recording.py` imports the three autoresearch runs from Ari’s supplied archive. It retains the manifest and native entities/events as private artifacts, folds events in tick order, preserves per-agent boredom, and distinguishes recorded provenance from execution on this computer. Supplied keyframes are retained for audit but not used as initial state: keyframe zero in this bundle already includes later state. The archive includes no executable candidates and cannot resume the original runs by itself.

`POST /runs` initially accepted `tinker_cpu` or `tinker_modal`; see the current experiment selection below for the subsequent removal of CPU choices. CPU configuration selects an allowlisted task, uses `--llm tinker --task <task>`, and scores real candidate code through the imported Docker sandbox. Upstream fake test fixtures remain for automated tests but no application run mode invokes them. Historical protocol runs return 410 and are excluded from the run list without deleting their audit data.

## Current experiment selection

The user rejected Hadamard, BixBench mini, and Playworld mini as the lab’s problems. Their recordings and the CPU test run are retired from the API and selector; direct access returns 410. The CPU test was stopped. No fake model or evaluation profile is accepted. `POST /runs` currently accepts only the real Tinker/Modal configuration, which requires separate training setup. No replacement problem is selected. Upstream CPU code and local archive data are retained for audit rather than removed from shared history.
