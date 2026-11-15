# BioLab · Little Sprout Lab

A playable first-person grow club with a warm, blocky world. Meet Pip and Milo, help Buddy the smiling sprout grow, and explore pastel research stations. The Boredom Meter redirects a synthetic research loop when local experiments stop improving.

## Run locally

Requires Node.js 20 or newer.

```sh
npm install
npm run dev
```

Open http://localhost:5173. If that port is occupied, use `PORT=5174 npm run dev`.

```sh
npm test
```

No API keys needed. Three.js is installed locally, and Google Fonts is optional. The lab requires a WebGL-capable browser.

## Controls

- **Let’s play** starts first-person exploration.
- **WASD** moves; **Shift** sprints.
- Mouse look captures the pointer after clicking the world. **Esc** releases it.
- Drag the scene or use the **arrow keys** to look without pointer capture.
- Approach a station and press **E**, or click its interaction prompt.
- **1–4** or the bottom station buttons turn toward the corresponding station.
- Touch devices get movement buttons and drag-to-look controls.
- The top **Notebook** button opens findings and export; **?** opens the field guide.

## Demo

1. Enter the grow club and find Buddy’s grow station. Use **1** to face it.
2. Walk close, press **E**, and choose **Start auto research**.
3. Close the terminal to explore while the loop runs. Culture scores and boredom update in the HUD and world.
4. Visit the Analyzer and Explorer. Repetition raises boredom; the Analyst logs a plateau and the Explorer uses it to change direction.
5. After 24 experiments, inspect the paired chart and shared notebook. Export both arms as JSON.

Runs can be advanced manually, paused, and reset from the terminals. In-memory progress is lost on reload; export before closing.

## Scientific scope

This is an educational, scripted policy simulation on a deterministic two-peak response surface, not a validated biological model or a Roblox platform game. Nutrient and oxygen are dimensionless coordinates; growth is a synthetic score. The 3D cultures and researchers illustrate the loop.

Both arms start with identical local search and equal experiment budgets. Boredom combines repeated nearby experiments (55%) and gains below 0.01 (45%), exponentially smoothed with a 0.52 weight on the current observation. A score of 65 triggers a one-time switch to a predefined alternate region after the Analyst records the plateau. The baseline continues local refinement.

The alternate region is favorable by construction. This demonstrates the mechanism on a chosen landscape and does not establish superiority over random restarts or real scientific discovery. There is no LLM, real biological dataset, external memory service, or sponsor integration.

## Source

- `src/world.js`: laboratory scene, props, animation, station locations, and collision bounds.
- `src/app.js`: first-person controls, interaction terminals, HUD, and paired simulation.
- `src/simulation.js`: deterministic model, policies, memory events, and export schema.
- `src/style.css`, `index.html`: game HUD and responsive overlays.
- `server.mjs`: local static server.
- `tests/simulation.test.js`: reproducibility, policy, bounds, budget, and export checks.
- `context/`: original brainstorming and hackathon notes.

A useful research extension would compare random restarts and other exploration policies on held-out landscapes across seeds, then integrate actual tool-using agents and a computational biology benchmark.

The floor uses one continuous textured surface, with separate raised route markers and no floor shadow mapping, to avoid overlapping-tile flicker and shadow banding.
