# BioLab / Environment studies

Four distinct first-person laboratories on one shared engine. Pick a visual direction before expanding the scientific simulation adapters.

- **Daylight** (`?style=realistic`): contemporary lab, believable instruments, material detail, and human research agents.
- **Wonderworks** (`?style=cartoon`): cobalt/coral/yellow cartoon lab, rounded equipment, and expressive robot researchers.
- **Fieldwork** (`?style=foundation`): a modular ash/ivory/ink research commons with a spatial field table and flexible experiment bays. An alternative foundation for domain-neutral research.

- **Lab Environment** (`?style=hybrid`): combines Daylight’s realistic instruments and human researchers with Fieldwork’s modular bays, shared field table, and dataset library, with a clear plaster ceiling. This is the selected default style.

## Locked stack

Three.js + TypeScript + Vite. Zod validates the research event boundary. The environment does not depend on a particular biological domain or scientific solver.

## Run

Node.js 22.18 or newer.

```sh
npm ci
npm run dev
```

Open http://localhost:5175. Production build: `npm run build`. Preview it: `npm run preview`.

```sh
npm test
```

## Controls and comparison

Choose any study from the bottom selector; switching preserves research state and resets the camera to that room's entry. Click **Step inside**, then use WASD to walk, Shift to sprint, mouse look, or drag/arrow-key look. Escape releases the mouse. Approach a station and press E. Keys 1–4 face the four stations. Touch devices have a movement pad.

**Run demonstration** starts a deterministic synthetic search. The Scientist works, the Analyst observes, and the Explorer changes strategy after a plateau. Pause stops the demo; restart starts a fresh run. The research console shows findings and exports the complete event log. Every room exposes the same four station IDs.

## Integration handoff

- `src/engine/types.ts`: `LabWorld`, station/collision contract, and shared visual agent state.
- `src/engine/contract.ts`: validated experiment manifest, research events, and `ResearchAdapter` interface.
- `src/engine/state.ts`: research-state reducer. Ignores duplicate, old-sequence, and wrong-run events.
- `src/engine/mock.ts`: replaceable synthetic demonstration adapter.
- `src/variants/*.ts`: independent room factories. They consume shared state; they do not own experiments or scheduling.
- `src/main.ts`: room selection, resource cleanup, navigation, station interaction, HUD, and adapter connection.

A live solver integration should implement `ResearchAdapter`, deliver the validated events, and extend the contract explicitly for scientific artifacts such as concentration fields, cell snapshots, and plots. Preserve physical units, simulation timestamps, model versions, and source references. Current visual update time is animation time, not scientific simulation time.

The current adapter is local and synthetic. NPC roles and experiment results are simulated; no real swarm, biological solver, external AI, or network backend is running. The synthetic search switches to a predefined favorable region, so the demo is not evidence of scientific discovery. Run history is in memory and is lost on reload; export before closing.

## Validation

`npm run build` checks TypeScript and builds static deployable assets. Eleven tests cover the synthetic paired experiment, event validation, ordering, metric direction, state completion, and navigable access to all stations in each room. Browser QA checks rendering and style switching. All floors use continuous surfaces rather than overlapping tile geometry; runtime shadow maps are disabled to avoid floor banding.

The three room variants were developed independently on `agent/lab-realistic`, `agent/lab-cartoon`, and `agent/lab-foundation`. The combined comparison app is on `agent/masha/lab-style-options`. The original lab remains on `agent/masha/little-sprout-lab`.

## Agreed backend plan (not implemented yet)

Continue on `agent/masha/lab-style-options`. Use Python/FastAPI for run APIs and adapters, SQLite for run state and ordered events, filesystem storage for original logs and artifacts, and Server-Sent Events for browser updates. Execute research in separate worker processes rather than inside API request handlers.

Inputs are the existing autoresearch/benchmark runner, the Ig Nobel community runner, and the existing `caffeinated-trace/v1` exporter for replay. Each gets an adapter that preserves its native records, metric units and direction, source references, and mock/live provenance. Domain solvers can later supply scientific artifacts through the same boundary.

The frontend connects through `ResearchAdapter`: HTTP commands start or stop supported jobs; an initial snapshot and ordered SSE events update the research-state reducer. World/agent animation and station displays consume that state. Raw metrics and scientific time remain separate from render time and visual effects. Replace fixed demo identities with the actual backend agent roster as part of integration.

First milestone: bring existing trace replay into the selected Lab Environment. Next: durable run/event APIs and reconnect. Then: a bounded live CPU benchmark, followed by the Ig Nobel adapter. Pause applies to replay initially; live stop/pause capabilities must reflect runner support.

Planned API surface: `GET /experiments`, `POST /runs`, `GET /runs/{id}`, `GET /runs/{id}/events`, `GET /runs/{id}/artifacts`, `POST /runs/{id}/stop`. Keep API keys server-side. Verify existing gate/meter review findings and sandbox execution before enabling expensive or generated-code runs.
