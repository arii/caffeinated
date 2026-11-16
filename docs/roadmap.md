# After the hackathon

The hackathon submission is tagged `sf-ai-research-hack-2026`. This page lists what we can reuse
and where the project could go next.

## Constraints from here on

- No more paid model or compute credits: no Tinker, OpenAI or Modal keys. New work is done with
  Devin sessions only.
- The live-run paths stay in the code but are not run again: `swarm.py --llm tinker|openai`,
  `continuous_swarm.py`, `openai_live.py`, the Ig Nobel committee and IgJudge.
- Everything offline keeps working and stays in CI: `--llm fake` tests, `make check`,
  `scripts/verify_results.py` (level 1 of [REPRODUCE.md](../REPRODUCE.md)), sandbox regrades
  (level 2), and the Pages replay.
- Post-hackathon changes go to `main` after the tag. If a change alters a published number,
  `docs/results.md` must say so and give the date. Later milestones get their own tags (`v1.1.0`,
  `v2.0.0`), never a moved `sf-ai-research-hack-2026`.

## Reusable parts

| Part | Files | Why it is reusable | Dependencies |
| --- | --- | --- | --- |
| Boredom Meter | `boredom_meter/meter.py`, `boredom_meter/README.md`, `docs/boredom.md`, per-task `boredom_profile.json` | Deterministic exploration controller for any agent loop that writes an attempt ledger. CLI: `submit`, `status`, `gate`. | Python standard library only |
| Candidate sandbox | `testcases/sandbox.py`, `testcases/Dockerfile` | Runs untrusted generated code with `--network none`, read-only root, dropped capabilities, memory, PID and time limits. | Docker |
| CPU mini benchmarks | `testcases/hadamard19`, `bixbench_mini`, `bixbench_numeric`, `playworld_mini` | Cheap tasks with known baselines and references; no GPU. | Sandbox image |
| Recording format and replay | `docs/swarm-viewer-api.md`, `export_viewer.py`, `backend/replay.py` | `swarm-viewer/v1` turns any ordered agent event log into deterministic per-tick snapshots. | Python, FastAPI for the server |
| Lab viewer and Pages build | `src/`, `scripts/build_pages.sh`, `scripts/export_pages.py` | Three.js replay of any `swarm-viewer/v1` recording; byte-deterministic static build. | Node 22 |
| Knowledge graph | `scripts/knowledge_graph.py`, `docs/knowledge-graph.html` | Static graph of studies, sources and agents from one recording. | Python |
| Reproducibility kit | `Dockerfile`, `REPRODUCE.md`, `scripts/verify_results.py`, `scripts/export_hf_dataset.py`, `.github/workflows/release.yml` | Release pipeline that pins images by digest and recomputes every published number from committed artifacts. | Docker, GitHub Actions |
| Statistics helpers | `held_out.py`, `experiments/analyze_ab.py`, `scripts/run_cost.py` | Wilson intervals, paired sign-flip tests, per-run cost accounting. | Python |
| past.dev memory patterns | `memory.py` | Per-run reader identities, rule audiences, stable hypothesis ids, rollback on resume. Reusable only in projects that use past.dev. | past.dev key |
| Agent rules | `AGENTS.md`, `.agents/skills/caffeinated-workflow`, `.agents/skills/caffeinated-guardrails` | Rules learned from adversarial reviews of agent runs; apply to any agent-research repo. | None |
| Demo video pipeline | `video/` | Frame-exact capture of the Lab into an MP4. | Node, Chrome |

Less reusable as-is: `swarm.py` (about 5,400 lines, tied to the round runner and the LLM
providers in `llm.py`) and the continuous Sol/Luna runner. Their protocol (`program.md`,
`prompts/`) is the part worth keeping.

## Directions using Devin only

Listed by how much they test the original hypothesis per unit of effort.

### 1. Devin sessions as the swarm workers

Replace the model provider with Devin child sessions. Each worker is one session that receives
`program.md`, the task, the current Boredom Meter regime and the novelty gate, and returns one
commit with a `Descriptor:` trailer. The conductor stays deterministic: it appends to
`ledger.jsonl`, scores in the sandbox and calls `boredom_meter`. Orchestration can use a Devin
workflow (`run_workflow`) so each round is one fan-out.

- Code change: an `--llm devin` path that writes a worker brief and reads back a branch, or a
  thin driver outside `swarm.py` that reuses the sandbox, meter and ledger.
- Experiment: arm A (meter off) vs arm B (meter on) on `hadamard19` and `bixbench_numeric`,
  same rounds and session budget per arm.
- Statistics: the hackathon used 3 paired runs, where the smallest attainable two-sided
  sign-flip p is 0.25. Eight paired runs make p = 0.0078 attainable. Preregister the metric and
  guard before the first run (see `experiments/confirmatory/RESULTS.md`).

### 2. Boredom Meter as a Devin skill

Package the meter as a skill for long Devin tasks with many attempts (performance tuning,
flaky-test hunts, benchmark optimization). Devin logs each attempt with a descriptor and asks
`boredom_meter status` whether to keep refining or switch approach. Measure on real tasks:
attempts to success and repeated-approach rate, with and without the skill.

### 3. Replay Devin sessions in the Lab

Write a converter from Devin session events (child sessions, tool calls, commits, test results)
to `swarm-viewer/v1`. The Lab and Pages build then replay any multi-session Devin job without
new model calls. This also gives direction 1 a viewer for free.

Status: `scripts/devin_to_recording.py`, documented in `docs/devin-replay.md`.

### 4. Publish the reusable pieces

- `boredom_meter` as a standalone package with its own tests and a short README example.
- The sandbox and the CPU mini benchmarks as a small evaluation kit.
- A short technical report from `docs/results.md` and `docs/judge-qa.md`. It must keep the
  caveats: the confirmatory A/B/S comparison was not significant, and the Ig Nobel studies are
  known relationships in teaching datasets, not discoveries.

### 5. Maintenance

- Make the paid paths fail fast with one clear message, and keep CI green with no keys.
- Make the GHCR packages public (package settings; only Ariel can do this).
- Keep the Pages demo on the hackathon recording; add new recordings beside it, not in place
  of it.

## Suggested order

1. Maintenance and package cleanup (one session).
2. Session-to-recording converter (direction 3), because direction 1 needs it to be inspectable.
3. Devin workers pilot: one task, two arms, two runs each, to measure session cost per round
   before committing to eight paired runs.
4. Full preregistered A/B with Devin workers if the pilot cost fits the remaining budget.
5. Boredom Meter skill and the write-up.
