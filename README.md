# Lab Environment — research replay

A first-person lab for walking through recorded research. The Pages site replays the supplied `swarm-viewer/v1` archive; it does not launch experiments, submit Tinker calls, or generate new agent dialogue. Experiments are launched from this repository's research tools, and their recordings can be supplied through the same data boundary.

Backend team: start with the [integration guide](docs/backend-integration.md) for live directory publishing (`LAB_RECORDINGS_DIRS`), ZIP imports, runnable payload examples, and event mapping.

## Team

**Ig Nobel Prize Winning ASS (Artificial Scientist Swarms)**, built by Team caffeinated: Ariel Anders, Jialin Feng, Neeraj Shah and Masha Baidachna.

Our hypothesis is that existing AI scientist swarms get stuck because they are bored—trapped in repetitive, low-payoff loops. Artificial Scientist Swarms (ASS) fixes this by adding a deterministic boredom meter grounded in psychology. It tracks stagnation, novelty deficit, and overload to detect when the swarm is bored and trigger a seeking state—forcing a jump from routine exploitation to paradigm breakout. Validated on known benchmarks, we put the swarm on an Ig Nobel challenge: research that makes you laugh, then think. Agents search via Exa, share memory on past.dev, pre-register real-data tests, and get ranked by a two-judge committee and final IgJudge.

- Live demo: https://arii.github.io/caffeinated
- Repository: https://github.com/arii/caffeinated

## Project components

- **Lab viewer:** the first-person research replay described below.
- **Experiment producer:** the Ig Nobel task (`swarm.py --task ignobel`) checks known relationships in public teaching datasets; it has not produced discoveries ([`testcases/README.md`](testcases/README.md), task files in `testcases/ignobel/`).
- **Backend-to-lab handoff:** [bundle and endpoint integration guide](docs/backend-integration.md).
- **Artificial Scientist Swarms backend:** [CPU research swarm guide](docs/autoresearch-backend.md): `swarm.py`, the boredom meter, the CPU mini benchmarks, the Docker sandbox, the A/B harness and the live `/api/v1` viewer server; [swarm protocol](program.md).
- **Backend architecture and results:** [how Exa and past.dev are used](docs/architecture.md#how-we-use-exa-and-pastdev) and [results so far (honest)](docs/results.md).
- **Viewer contract:** [swarm-viewer/v1 data model and API](docs/swarm-viewer-api.md), with implementation status.

## Results (with caveats)

Track 3 has two orderings: preregistered primary (guard2, stopped early, guarded), B 0.26 > S
0.24 > A 0.11; complete strict-guard set, picked after it finished, S 0.30 > A 0.09 > B 0.06.
The smallest observed sign-flip p (with 3 paired runs the smallest attainable is 0.25) is 0.25
(complete strict-guard set) and 0.5 (guard2 primary); 3 runs (orchestration seeds; Kimi sampling
is not seeded), neither ordering is significant.
B leads S on mean only because S scored 0 on run 3001, where the guard rejected its candidate
for the known integer-loop-bound false positive (unguarded 0.333); S beats B on the other two
runs. Under the earlier grader the means were A 0.093, B 0.056, S 0.074.
See [full results](docs/results.md) and
[judge Q&A](docs/judge-qa.md).

The Ig Nobel run tested gate-passing correlations on public teaching datasets (Cars93, cats,
sleepstudy, and others): known relationships, not discoveries. It had 21 registered studies,
13 run, 11 passed the preregistered gates, and 10 also pass the |ρ| ≥ 0.1 floor added after the
run. The ρ = 0.07 x/y coordinate study is the failure case; it also appears as a second confirmed
row because the critic re-ran it (a `study.replicated` event), not as a separate test. No committee
score was run on the published recording.

## Reproduce

[REPRODUCE.md](REPRODUCE.md) explains how to recompute every published number from the
committed artifacts, regrade the winning candidates in the sandbox, and rerun experiments.
Releases publish a pinned image to `ghcr.io/arii/caffeinated`. The run artifacts are on Hugging
Face at [onasafari/caffeinated-runs](https://huggingface.co/datasets/onasafari/caffeinated-runs). The quickest check needs only Docker:

```sh
docker build -t caffeinated-repro . && docker run --rm caffeinated-repro
```

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
# one-time: make setup && docker build -t caffeinated-testcases:py311-v2 -f testcases/Dockerfile testcases
# put TINKER_API_KEY, EXA_API_KEY, PAST_API_KEY in .env (see .env.example)
npm run dev                                                          # terminal 1: lab
python3 swarm.py --task hadamard19 --arm B --rounds 10 --llm tinker  # terminal 2: research
```

Open http://localhost:5175. The lab picks up the newest live swarm run automatically (then the newest finished swarm run, then a bundled sample). No `--out`, environment variables or worktree cleanup are needed: `swarm.py` reuses its own leftover worktrees, and missing keys or a missing sandbox image are reported before anything is created. Use `--llm fake --exa off --memory-backend local --no-push` for an offline dry run. Details: [quickstart](docs/autoresearch-backend.md#quickstart).

The backend scans this checkout's `.swarm_worktrees/*/conductor/experiments/*/viewer` and `experiments/*/viewer` folders on every refresh, including arms created after startup. The picker refreshes every four seconds; live recordings reload while preserving the playhead, and explicit URL or picker selections are kept. To follow another clone or a custom `--out`, add `LAB_RECORDINGS_DIRS=/path/to/out/viewer` (multiple roots separated by `:`). `LAB_RECORDINGS_ZIP=/path/to/archive.zip` still works alongside directories; replacing a ZIP requires a restart. `LAB_PYTHON` optionally selects the backend Python.

## Explore a recording

- Use **Archive** in the sidebar to choose a bundled local replay; the Pages site contains one real Kimi/Tinker Ig Nobel run with Exa and past.dev memory.
- Press **Play**, drag the timeline, or change the playback pace. Drag to change the camera angle from your current viewpoint, use WASD to glide around, and Q/E to change height—even while playback runs. These controls adapt the camera rig from History in 3D. Research unfolds from an elevated camera inside the room.
- Pause and choose **Walk inside**. Use WASD, Shift, mouse/drag or arrow keys to explore the paused world. Approach a researcher and press E, or select them from **Team**.
- Agent conversations appear as speech popups above the selected character and quote recorded statements and results available at the current tick. Boredom appears only when interacting with that agent.
- Activity symbols show thinking/ideas (💡 with a short source-derived idea label), experiment work (🫧), and evaluation (📈). **Evidence** shows the recorded metric and results through the playhead.
- **Lab view** returns to the elevated indoor camera. Panels stay hidden until selected from the sidebar.

Happy cartoon androids use a deterministic set of head, face, antenna, and accessory variations, with cream shells and blue/orange accents. Characters use gender-neutral family numbers: B for Bio, C for Chem, P for Physics. Source identities remain stable internally. These recordings do not supply scientific families, so the current groups are deterministic display assignments; later backend records can provide the actual family.

The room’s movement is illustrative. Metric values, event order, agent identities, and statements come from source records. Pausing freezes the replay; walking and looking do not advance research. Rewinding discards later state. The Pages recording’s supplied provenance is not proof of live scientific validation.

## Data and future integration

The source bundle is `data/replays/swarm-viewer-sample-runs.zip` for local replay; Pages exports one real Kimi/Tinker Ig Nobel run with Exa and past.dev memory. The bundle contains three provenance-backed Kimi/Exa/past.dev autoresearch histories, with manifests, ordered events, entities, and sparse keyframes. The fake Ig Nobel sample was removed from the default bundle. No candidate executables or plot images are included.

`backend/replay.py` folds native events into deterministic per-tick snapshots. It does not trust the supplied tick-zero keyframes, because they already contain later state. It preserves metric direction, unknown values, per-agent boredom, source provenance, and IDs. Confirmed best values change on critic acceptance; the Ig Nobel aggregate counts confirmed studies. Agent details use the event prefix, rather than reading later fields from final entities.

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


## Continuous Sol/Luna live runs

`scripts/run_openai_ignobel.sh` starts one continuous Ig Nobel session: eight Luna
worker identities initially, growing by two when an assigned queue is exhausted
and other workers are still active, up to twenty. Sol assigns up to eight concrete
tasks at a time. Four workers may have model calls in flight; shared research
files, Git mutations, and study confirmation are serialized. Each result is
confirmed and published as it arrives, without waiting for the other workers.
Luna uses no reasoning tokens; Sol uses low reasoning. Judges retain their
existing independent evaluation.

The default admission window is 30 minutes and the shared OpenAI reservation cap
is $10, including supervisor, workers, repairs, and judges. Set
`OPENAI_RUN_MINUTES` (1–30 through the UI) or `OPENAI_MAX_COST_USD` to lower these.
Admission stops slightly before the cap to leave room for confirmation; the
ledger still rejects any call that would exceed the cap. Current requests and
confirmation may finish after the time limit. The RUNS drawer's Stop button stops
new work and lets current work finish. Server shutdown terminates its run process
group. This cap covers OpenAI, not optional Exa searches.

The default ZIP replay is unchanged. Continuous recordings show one chronological
session; internal job IDs remain in their artifacts. Continuous runs currently
start fresh rather than resuming an interrupted queue. Other benchmark modes
retain the existing round runner.

## past.dev challenge

past.dev holds the facts that change during a run (hypotheses and their test results), what
agents share with each other, and lessons kept across runs. Each agent reads it with its own
identity, and past.dev's audiences decide what that read returns.

### Agents

**Research swarm** (`swarm.py --memory-backend pastdev`; code in `memory.py`)

| Agent | Writes | Reads | Identity | Audiences |
| --- | --- | --- | --- | --- |
| conductor | `assignment` (who tests what) | — | author `conductor` | `run-<arm>-<run>` |
| worker-1…4 | `lead`, `claim`, `result`, one stable `hypothesis` per idea | other workers' claims, results and hypothesis statuses before proposing | reader `reader-<arm>-<run>` (traits `arm`, `run`, `task`) | `run-<arm>-<run>` for this run's notes; `lab-<arm>-<task>` for hypotheses, lessons, verdicts and failed results that later runs reuse |
| spawned workers | `lead`, `claim`, `result`, one stable `hypothesis` per idea | only notes written by that worker | identity `solo-<arm>-<run>-<agent>` (traits `arm`, `run: <run>.<agent>`) | audience `solo-<arm>-<run>-<agent>`; the team reader can also read these notes |
| critic | `verdict`, `lesson` | — | author `critic` | `lab-<arm>-<task>` |

Both audiences are rule audiences over identity traits, so an arm's reader never sees
another arm's or another task's memories.

### Layers

- **Working:** the prompt. The current assignment, dataset and code stay in each agent's
  prompt and are not shared.
- **Episodic:** past.dev data points. Every claim, result, assignment, share and lesson is
  written with its author identity, timestamp and audience.
- **Semantic:** past.dev memories. Each idea is written under one stable source id
  (`hyp-<arm>-<sha1(idea)>`): "being tested" first, then "confirmed", "refuted" or "crashed"
  with the score. Facts that are updated in place show which version is current
  (`supersededAt`), so a read answers "what is true now", not "what looks similar".
- **Procedural:** `program.md` and the prompts in git.
- **Not in past.dev:** literature and datasets (Exa and OpenAlex, cached per run) and the score
  ledger (`ledger.jsonl`, the source of truth for scores).

Expected result before the run: with native audiences, past.dev would return fewer
out-of-scope records. We also expected recalls to depend less on the local mirror, and stable
ids to stop a refuted idea from being re-proposed.

### Results

What changed, in `memory.py` and `swarm.py`:

| Before | Now |
| --- | --- |
| One shared reader; out-of-scope records filtered on our side by metadata | Per-run reader identity and rule audiences; past.dev enforces scope |
| A claim and its result both stay "current" | One stable `hypothesis` id per idea, updated with each status |
| Abandoned rounds hidden by a clock check on resume | `rollback_memories` deletes them (`POST /data-points/delete`) and restores a stable record's earlier version |
| Time cutoff applied on our side | `queryTimestamp`, `occurredFrom`, `occurredTo` and `sort` passed to recall; source excerpts printed |

Short live comparison: ignobel task, gpt-5-mini, Exa on, seed 7. Both runs were in progress when
these numbers were taken.

| | `main` | this branch |
| --- | --- | --- |
| recalls | 61 | 69 |
| past.dev results dropped by our scope filter | 267 | 40 (all from records written before audiences existed) |
| results filled from the local mirror | 153 of 191 | 81 of 300 |
| recalls with at least one result written by another worker | — | 69 of 69 (expected: all workers share one run audience) |
| recall latency, p50 | — | 587 ms |

Example cross-agent read from this branch's run: worker-2 asks "current status of hypotheses
already tested". It gets 5 stable hypothesis records written by worker-1, worker-3 and
worker-4. Ideas are still chosen and judged by the boredom meter, the critic and the score
ledger. past.dev changes only what each worker reads before proposing, and these numbers do
not show that the reads changed which ideas were proposed.

Update benchmark (`experiments/memory-updates/updates.py`): 11 hypotheses from the overnight
run, each written as "being tested" and then its final status.

| Store | Current status returned now | "being tested" returned at a time between the two writes |
| --- | --- | --- |
| local append-only | 100% | 100% |
| past.dev append-only (two ids) | 73% (27% returned the stale status) | 100% |
| past.dev stable id | did not finish (an update to an existing id was still ingesting after 180 s) | — |

### Caveats

- **No Kimi run.** Tinker was out of credit, so the live comparison uses gpt-5-mini with the Ig
  Nobel committee off. It is not comparable with the overnight Kimi run, and it is short and
  single-seed.
- **The benchmark is too easy for local memory.** Both versions share the query's words, and
  the local store breaks ties by recency, so it scores 100%. It does not show past.dev beating
  a local store.
- **Stable-id updates were slow.** Ingesting a new version of an existing id sometimes took
  over 180 s. The stable-id benchmark arm did not finish for that reason.
- **`supersededAt` not observed.** We did not see `supersededAt` in our earlier probe
  responses; the latest version was returned instead.
- **Daughter labs are on a separate branch.** The mother/daughter-lab runtime is not on
  `main`. Its past.dev version (one identity, private audience and inbox per lab, sharing only
  through `share()`) is on `agent/devin/families-pastdev`.
- **The local mirror still exists.** It fills recalls while a write is still ingesting. The
  scope filter also still runs for records written before audiences existed.
