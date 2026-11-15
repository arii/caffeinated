# BioLab / Environment studies

Four distinct first-person laboratories on one shared engine. Pick a visual direction before expanding the scientific simulation adapters.

- **Daylight** (`?style=realistic`): contemporary lab, believable instruments, material detail, and human research agents.
- **Wonderworks** (`?style=cartoon`): cobalt/coral/yellow cartoon lab, rounded equipment, and expressive robot researchers.
- **Fieldwork** (`?style=foundation`): a modular ash/ivory/ink research commons with a spatial field table and flexible experiment bays. Recommended foundation for domain-neutral research.

- **Common Ground** (`?style=hybrid`): combines Daylight’s realistic instruments and human researchers with Fieldwork’s timber acoustic canopy, modular bays, shared field table, and dataset library.

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
