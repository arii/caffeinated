# Lab Environment — research replay

A first-person lab for walking through recorded research. This branch plays the supplied `swarm-viewer/v1` archive; it does not launch experiments, submit Tinker calls, or generate new agent dialogue. The future research backend can supply new recordings, including Ig Nobel objectives, through the same data boundary.

Backend team: start with the [integration guide](docs/backend-integration.md) for live directory publishing (`LAB_RECORDINGS_DIRS`), ZIP imports, runnable payload examples, and event mapping.

## Project components

- **Lab viewer:** the first-person research replay described below.
- **Experiment producer:** [Ig Nobel backend](ignobel/README.md), [native event schema](ignobel/events.md), and [datasets](ignobel/data/README.md).
- **Backend-to-lab handoff:** [bundle and endpoint integration guide](docs/backend-integration.md).
- **Artificial Scientist Swarms backend:** [CPU research swarm guide](docs/autoresearch-backend.md): `swarm.py`, the boredom meter, the CPU mini benchmarks, the Docker sandbox, the A/B harness and the live `/api/v1` viewer server; [swarm protocol](program.md).
- **Viewer contract:** [swarm-viewer/v1 data model and API](docs/swarm-viewer-api.md), with implementation status.

## Run

Requires Node 22.18+, Python 3.12, Git, and uv.

```sh
npm ci
npm run setup
npm run dev
```

Open http://localhost:5175. The bundled ZIP is included in `data/replays/`, so no credentials or separate archive import are needed. Vite runs on 5175 and the local recording API on 8765. Separate terminals can use `npm run dev:frontend` and `npm run dev:backend`.

### Watch a swarm run

From the repo root, in two terminals:

```sh
# one-time: make setup && docker build -t caffeinated-testcases:py311-v1 -f testcases/Dockerfile testcases
# put TINKER_API_KEY, EXA_API_KEY, PAST_API_KEY in .env (see .env.example)
npm run dev                                                          # terminal 1: lab
python3 swarm.py --task hadamard19 --arm B --rounds 10 --llm tinker  # terminal 2: research
```

Open http://localhost:5175. The lab picks up the newest live swarm run automatically (then the newest finished swarm run, then a bundled sample). No `--out`, environment variables or worktree cleanup are needed: `swarm.py` reuses its own leftover worktrees, and missing keys or a missing sandbox image are reported before anything is created. Use `--llm fake --exa off --memory-backend local --no-push` for an offline dry run. Details: [quickstart](docs/autoresearch-backend.md#quickstart).

The backend scans this checkout's `.swarm_worktrees/*/conductor/experiments/*/viewer` and `experiments/*/viewer` folders on every refresh, including arms created after startup. The picker refreshes every four seconds; live recordings reload while preserving the playhead, and explicit URL or picker selections are kept. To follow another clone or a custom `--out`, add `LAB_RECORDINGS_DIRS=/path/to/out/viewer` (multiple roots separated by `:`). `LAB_RECORDINGS_ZIP=/path/to/archive.zip` still works alongside directories; replacing a ZIP requires a restart. `LAB_PYTHON` optionally selects the backend Python.

## Explore a recording

- Use **Archive** in the sidebar to choose any of the four supplied recordings. These are temporary replay inputs, not the selected future research problems.
- Press **Play**, drag the timeline, or change the playback pace. Drag to change the camera angle from your current viewpoint, use WASD to glide around, and Q/E to change height—even while playback runs. These controls adapt the camera rig from History in 3D. Research unfolds from an elevated camera inside the room.
- Pause and choose **Walk inside**. Use WASD, Shift, mouse/drag or arrow keys to explore the paused world. Approach a researcher and press E, or select them from **Team**.
- Agent conversations appear as speech popups above the selected character and quote recorded statements and results available at the current tick. Boredom appears only when interacting with that agent.
- Activity symbols show thinking/ideas (💡 with a short source-derived idea label), experiment work (🫧), and evaluation (📈). **Evidence** shows the recorded metric and results through the playhead.
- **Lab view** returns to the elevated indoor camera. Panels stay hidden until selected from the sidebar.

Happy cartoon androids use a deterministic set of head, face, antenna, and accessory variations, with cream shells and blue/orange accents. Characters use gender-neutral family numbers: B for Bio, C for Chem, P for Physics. Source identities remain stable internally. These recordings do not supply scientific families, so the current groups are deterministic display assignments; later backend records can provide the actual family.

The room’s movement is illustrative. Metric values, event order, agent identities, and statements come from source records. Pausing freezes the replay; walking and looking do not advance research. Rewinding discards later state. The Ig Nobel sample includes mock prior-art URLs and is labeled accordingly; its supplied provenance is not proof of live scientific validation.

## Data and future integration

The source bundle is `data/replays/swarm-viewer-sample-runs.zip`. It contains three autoresearch histories and one Ig Nobel sample, with manifests, ordered events, entities, and sparse keyframes. No candidate executables or plot images are included.

`backend/replay.py` folds native events into deterministic per-tick snapshots. It does not trust the supplied tick-zero keyframes, because they already contain later state. It preserves metric direction, unknown values, per-agent boredom, source provenance, and IDs. Confirmed best values change on critic acceptance; the Ig Nobel aggregate counts replicated findings. Agent details use the event prefix, rather than reading later fields from final entities.

| Read-only endpoint | Response |
| --- | --- |
| `GET /api/recordings` | Available recording manifests and playback metadata |
| `GET /api/recordings/{id}` | Manifest, ordered events, per-tick frames, and original entity collections |

Responses support gzip and ETags. The browser loads a recording once and handles play, pause, seek, camera mode, and pace locally. No server call is needed for each playback tick. Default run creation is disabled on this replay branch.

The normalized source contract is documented in [the swarm-viewer/v1 contract](docs/swarm-viewer-api.md). Our two recording endpoints are a small replay adapter over that format; they do not claim to implement every proposed `/api/v1` endpoint. See [the current integration design](docs/lab-backend-design.md) for the handoff boundary.

The timeline interaction follows the user’s [History in 3D](https://github.com/mashathepotato/history-in-3D) project: continuous scrubbing, play/pause, and a scene tied to a selected historical moment. Here, the timeline is research-event ticks rather than historical years.

## Implementation and checks

Three.js + TypeScript + Vite render the selected Lab Environment. Zod validates the snapshot boundary. FastAPI reads the bundled archive; SQLite and the older execution integration remain available in the source for future work but are not the replay clock or a live model connection.

```sh
npm test
npm run test:backend
npm run build
```

Checks cover deterministic seeking, backward-state isolation, paused poses, navigable stations, snapshot contracts, all four bundled recordings, ordered evidence, confirmed metrics, gzip/cache responses, and read-only behavior. The research swarm has its own checks (`make setup && make check`); see [the backend guide](docs/autoresearch-backend.md) and `testcases/README.md`.

The upstream research implementation remains in this branch. Its credentials, `.env`, local histories, and virtual environments stay ignored. Existing environment loading does not start research, and viewing the replay consumes no model credits.
