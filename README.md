# Lab Environment + Autoresearch

The selected first-person Lab Environment is the only frontend. It connects to Ari’s autoresearch swarm through a local FastAPI service. The comparison rooms and scripted demonstration are removed.

## Run locally

Requires Node 22.18+, Python 3.12, Git, and uv.

```sh
npm ci
npm run setup
npm run dev
```

Open http://localhost:5175. This starts the API on 127.0.0.1:8765 and Vite on 127.0.0.1:5175. For separate terminals use `npm run dev:backend` and `npm run dev:frontend`. Refreshing automatically restores the selected or latest run; starting the server does not launch research.

Choose **New research run**, select an execution profile, and start. Actual agent identities and assignments create characters in the room. The observatory and stations show the native ledger, findings, shared memory, provenance, and downloadable logs. Completed runs stay available in the run selector.

| Profile | Model calls | Evaluation |
| --- | --- | --- |
| Offline protocol check | Fake provider | Deterministic fake GPU scores |
| Tinker protocol | Real Tinker sampling | Deterministic fake GPU scores |
| Tinker + Modal | Real Tinker sampling | Modal GPU training; requires separate setup |

Protocol scores validate orchestration, not scientific or training performance. The room and central table are visualizations, not a biological solver. The frontend does not calculate research scores or schedule the swarm.

## Tinker and training

```sh
npm run setup:tinker
```

Copy `.env.example` to `.env` and set `TINKER_API_KEY` and `TINKER_MODEL`. Python automatically loads the repository-root `.env`; existing process variables take precedence. Credentials stay on the server and must never use a `VITE_` prefix. Local `.env`, virtual environments, and research artifacts are ignored by Git.

The orchestration environment uses PyTorch 2.10 for the Kimi renderer. The training environment has separate pinned dependencies; follow [Ari’s swarm protocol](program_swarm.md) and [upstream training documentation](docs/autoresearch-upstream.md) for Modal authentication, prepared data, and training requirements. An installed Modal CLI is a prerequisite, not proof that GPU training is configured.

Runs allow 1–3 rounds, one active job, a default limit of 32 high-level LLM calls (each may retry once), and a 20-minute local deadline. `LAB_MAX_LLM_CALLS` and `LAB_RUN_TIMEOUT` can adjust these server limits. Stop terminates local orchestration; remote work already dispatched can still finish and consume credits. Exa is explicitly off, memory is local, and research workers never push Git changes.

## Integration

- Three.js + TypeScript + Vite render the sole room in `src/variants/lab.ts`.
- `backend/app.py` exposes `/api/health`, `/api/experiments`, run creation/snapshots/stop, SSE snapshots, ordered audit events, history exports, and registered artifacts.
- `backend/worker.py` invokes the upstream runner in a separate process and per-run Git clone, pinned to the branch’s committed HEAD. Commit source changes before testing them as research input.
- `backend/ingest.py` normalizes native JSONL artifacts and uses Ari’s own meter for per-agent boredom. `backend/store.py` persists snapshots and idempotent ordered events in SQLite.
- `src/engine/contract.ts` validates incoming snapshots; `api.ts` handles snapshot loading and SSE reconnect. The world consumes roster and assignment state.

Data lives in ignored `.lab_data/` (or `LAB_DATA_DIR`). A server restart marks unfinished jobs interrupted rather than silently rerunning them. The service binds to loopback for local use. Git clones separate research changes from the working branch; they are not a security sandbox for untrusted code.

Each agent’s API/export JSON includes `boredom` on a 0–100 scale and `boredomSpectrum: {position, color, regime}`. Position is 0–1, color is a continuous teal-to-rose mapping, and regime comes from the upstream meter. Individual spectra stay in JSON; the screen shows one swarm spectrum. Color does not replace the scheduler’s threshold, hysteresis, and convergence rules.

The API is the integration boundary for future domain adapters, including diffusion or cell simulations. Preserve their metric units, source records, and simulation timestamps. Ig Nobel, trace replay, and generic benchmark branches have not been folded into this frontend task. See [backend design](docs/lab-backend-design.md).

## Controls and checks

Step inside, use WASD to walk, Shift to sprint, mouse/drag/arrows to look, E to open a nearby station, and Escape to release the pointer. Keys 1–4 face stations. Agent list buttons face an agent’s assigned station.

```sh
npm test
npm run test:backend
npm run build
.venv/bin/python -m unittest discover -s tests -p 'test_*.py'
.venv/bin/python -m unittest discover -s boredom_meter/tests
```

Frontend checks cover snapshot validation/ordering and station access; backend checks cover durable ingestion, API validation, interruption recovery, and an actual offline swarm run. Upstream tests include mocked Tinker behavior. A bounded live Tinker/protocol run was also completed locally; Modal training remains separately configured.
