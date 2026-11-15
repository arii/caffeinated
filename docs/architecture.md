# Architecture

Caffeinated runs **Artificial Scientist Swarms**: groups of LLM agents that
propose, test and verify research changes against a frozen evaluator, steered
by a deterministic Boredom Meter. Everything runs on CPU; no model is trained.

```mermaid
flowchart TB
  P["program.md + task.json + boredom_profile.json"] --> C
  subgraph Swarm["swarm.py — Artificial Scientist Swarm"]
    C["Conductor (code)<br/>Boredom Meter → regime → roles"]
    S["Scouts"]
    W["Workers ×4"]
    K["Critic"]
    G["Gate<br/>descriptor + prior art"]
    E["Evaluator<br/>Docker, no network"]
    L["Artifacts<br/>ledger · logs · git commits"]
  end
  T["Tinker (sampling only) / OpenAI / fake"]
  X["Exa"]
  M["past.dev / local memory"]
  V["export_viewer.py<br/>swarm-viewer/v1 files"]
  A["viewer/app.py<br/>FastAPI /api/v1 (read-only)"]
  F["Lab frontend"]
  C --> S & W & K
  S & W & K --> T
  S --> X
  W --> G --> E
  G --> X
  S & W & K <--> M
  K --> E
  E --> L --> C
  L --> V --> A --> F
  V -. static replay .-> F
```

## Layers

| Layer | Code | Responsibility |
|---|---|---|
| Protocol | `program.md`, `testcases/<task>/task.json`, `boredom_profile.json` | human-edited rules, editable file, vocabulary, thresholds |
| Orchestration | `swarm.py` | rounds, roles, proposals, commits, critic — see [orchestration](orchestration.md) |
| Boredom | `boredom_meter/meter.py`, `boredom.py` | B, components, regimes, gate, suggestions — see [boredom](boredom.md) |
| Research | `research.py` | Exa search/contents, prior-art checks, cache, budget |
| Memory | `memory.py` | past.dev or local store, writes and recalls with authorship |
| LLM | `llm.py`, `prompts/` | prompt rendering, Tinker/OpenAI/fake clients, call log |
| Evaluation | `testcases/sandbox.py`, `testcases/*/evaluate.py`, `held_out.py` | candidates run in a network-less container; the host grades dev feedback and the one-shot held-out test |
| Viewer data | `export_viewer.py` | normalized events, UUIDs, ticks, entities, keyframes, held-out result in the manifest |
| API | `viewer/app.py` | read-only `/api/v1` over the exports, SSE stream |

## Trust boundaries

- **Candidates are untrusted.** The host never imports candidate code. Only
  the editable file and public inputs enter the container; hidden answers and
  secrets stay on the host.
- **Held-out scores are not feedback.** BixBench and Playworld rounds use
  development splits; `held_out.py` grades baseline and best accepted commits
  once at run completion. BixBench also disables task research and rejects
  answer-valued source literals using the host-side gold key.
- **The meter cannot be gamed by a model.** B is recomputed from the ledger
  and profile; responses carry `ledger_sha256` / `profile_sha256`.
- **Claims are checked twice.** A new best must survive a second-seed critic
  run; SNAP/BREAKOUT ideas must cite a source.
- **Ig Nobel optimizes for interesting findings.** Confirmed studies are judged
  in-loop by two committee judges using only a host-written abstract and
  optional Exa prior-work evidence; an established or textbook result is
  capped at THINK 3, while targeting a group scores zero.
- **The viewer side is read-only.** The API reads exported files, holds no
  credentials and cannot start runs.

## Data model

Raw run files stay the source of truth. `export_viewer.py` derives the
`swarm-viewer/v1` model defined in `docs/swarm-viewer-api.md` (on `main`,
[PR #9](https://github.com/arii/caffeinated/pull/9)):

- deterministic UUIDv5 ids for the run, agents and events;
- a gap-free `tick` (ordered by round, phase, timestamp) for pause and scrub;
  missing source timestamps stay `null`;
- normalized events (`round.started`, `boredom.measured`, `hypothesis.proposed`,
  `gate.checked`, `experiment.finished`, `verdict.issued`, `discovery.made`, …);
- entities (questions, observations, hypotheses, experiments, rewards, diary,
  memory, sources, llm_calls, discoveries); prompts and reasoning live only in
  `llm_calls`;
- keyframes plus a pure reducer, so `world_at(tick)` is reproducible.

The static export layout mirrors the API, so the frontend can switch between
files and HTTP without code changes.

For held-out tasks, the run writes `held_out_test.json`; the parsed object is
exposed as `manifest.held_out_test`. It is manifest-only, so publishing it does
not alter the event stream.

## Vendors

| Vendor | Role | Notes |
|---|---|---|
| Tinker | LLM researcher (Kimi K3.1 Pro) | sampling only, no fine-tuning |
| Exa | scouting and prior-art checks | outside the meter's scoring path |
| past.dev | shared memory across agents and runs | `local` fallback for offline runs |
| Hugging Face | BixBench data (one-time `prepare.py`) | |
| OpenAI | optional LLM backend | |

## Domains

- **Benchmarks:** `hadamard19`, `bixbench_mini`, `playworld_mini`, which are small
  CPU-sized versions of the hackathon's records to beat (see
  [`testcases/README.md`](../testcases/README.md)).
- **Ig Nobel:** the swarm task `swarm.py --task ignobel`: expert labs
  pre-register one Spearman test per real public dataset, the host grades
  significance and split-half replication, then a two-judge LAUGH/THINK
  committee scores each confirmed study during evaluation. Its score contributes
  `0.25 + 0.75 * committee_score` to swarm reward (zero for targeting a group);
  `score_run.py` reports the cached verdicts after the run. It uses the same
  Boredom Meter with its own profile (`testcases/ignobel/boredom_profile.json`).
