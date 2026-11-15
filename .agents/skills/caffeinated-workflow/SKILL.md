---
name: caffeinated-workflow
description: Repository rules for arii/caffeinated. Use when editing the swarm, Boredom Meter, memory/research clients, sandboxed testcases, the viewer exporter or Lab frontend, or when opening a pull request in this repository.
---

# caffeinated workflow rules

Each section applies when its trigger matches. `AGENTS.md` still governs branches, merges and
other contributors' work.

## Core architecture and Boredom Meter

Trigger: editing `swarm.py`, `boredom.py`, `boredom_meter/`, or ledger schemas.

- The deterministic Boredom Meter decides regimes. Do not replace or override it with LLM
  self-reflection. B is computed from the append-only `ledger.jsonl` and the task's
  `boredom_profile.json`, never from model opinion.
- Regimes are `EXPLOIT`, `BOREDOM_SNAP`, `PARADIGM_BREAKOUT` and `CONVERGED`
  (`boredom_meter/meter.py`). Default thresholds are snap 0.70, breakout 0.85, exit 0.55.
- Novelty is measured on structured descriptors (mechanism, method, ratio-scaled params), not raw
  text diffs. Rotating a scalar inside the same mechanism must land in the same basin so
  stagnation can trigger a snap.
- During `BOREDOM_SNAP` the novelty gate applies: distance at least 0.35 from recent attempts and
  at least 0.25 from failed basins (profile `gate` defaults).
- A provisional new best needs critic second-evaluation confirmation before it becomes the
  incumbent.
- Tune behaviour through the task's `boredom_profile.json` (weights, patience, thresholds). Do not
  hard-code task-specific numbers in `boredom_meter/meter.py`.

## A/B experiments, memory isolation and API hygiene

Trigger: editing `experiments/`, `memory.py`, `research.py`, or the LLM, Exa or past.dev clients.

- Arms never share past.dev namespaces, local JSONL memory mirrors, or git worktrees. A treatment
  run must not leak leads or lessons into a control run. Filter recall to the arm's own run
  sources.
- Preserve rate-limit backoff and deterministic seeding in API clients.
- Do not add external embedding APIs.
- Ig Nobel: the editable file is `prereg.json`, written before the host downloads the dataset.
  Candidate code is never executed. The host runs one registered Spearman test per dataset per
  run, with split-half consistency over fixed hash halves (`testcases/ignobel/evaluate.py`).

## Sandbox security and benchmark verification

Trigger: editing `testcases/`, `testcases/sandbox.py`, or evaluation runners.

- Candidate code never runs on the host. It runs in the disposable container named by
  `SANDBOX_IMAGE` in `testcases/sandbox.py`, with `--network none`, `--read-only`, `--cap-drop`,
  and memory, PID and timeout limits. Build the image locally before running sandbox tests (see
  `.github/workflows/check.yml`).
- Do not change benchmark scoring without explicit approval. Reference values are in
  `testcases/README.md`:
  - `hadamard19`: exact determinant task, baseline loss about 0.0585, loss 0 at the known optimum
    det = 2^18 * 3411968.
  - `bixbench_mini`: 17-question subset of `futurehouse/BixBench`. The published 0.523 is full
    BixBench accuracy, context only.
  - `playworld_mini`: synthetic 9x9 gridworld, baseline about 0.149, dev-only `RECORD` 0.3598.
- A new `testcases/<task>` must also be added to `TASK_TIMEOUTS` in `testcases/sandbox.py`.

## Viewer export and Lab frontend

Trigger: editing `export_viewer.py`, `live_publish.py`, `viewer/`, `backend/`, or `src/`.

- Keep the `swarm-viewer/v1` bundle compatible: `manifest.json`, `timeline.json`,
  `events.ndjson`, `keyframes/`, `entities/`. Published bundles are append-only.
- Keep live follow (`src/engine/liveFollow.ts`), the score chart (`src/engine/scoreChart.ts`) and
  per-agent boredom bars (`src/engine/boredom.ts`) working.
- Before marking a frontend change ready, check it on desktop and phone viewports with no console
  errors or layout overlaps.
- Pages, demos and screenshots use real runs only. Fake LLM runs belong in automated tests.

## Pull requests and style

Trigger: writing code, editing docs, or opening a pull request.

- Touch only the files the task needs. No unrelated refactors or reformatting.
- Write plain technical prose in docs, commits and PR bodies. No filler, badges or emojis.
- Keep PRs small where possible. Run `make check` and, for frontend changes, `npm test` and
  `npm run build`; state what was run in the PR description.
- Never merge to `main` without explicit human approval.

## Definition of done

Trigger: before reporting a task as finished or opening a pull request.

Paste proof of each item that applies, not a summary:

1. `make check` exits 0, and for frontend work `npm test` and `npm run build` exit 0.
2. Generated artifacts exist and are non-empty: `ledger.jsonl` parses line by line, and an
   exported run has a `swarm-viewer/v1` `manifest.json` plus `timeline.json`.
3. `git status --short` and `git diff --stat` list only intended files, with no `results/`,
   `.env` or `.jsonl` blobs.
4. For UI or server work: `curl -f` against `/api/v1/runs` succeeds, and there are desktop
   (1440x900) and mobile (390x844) screenshots with no console errors.

## Lessons from earlier runs

Measured results these rules come from:

- Swarm vs single agent: on the complete strict-guard confirmatory set the single agent scored
  0.296 vs 0.093 (A) and 0.056 (B); on the truncated guard2 primary set B led 0.259 vs 0.241 (S)
  and 0.111 (A). B used about 1.75x the tokens of A or S. Add agents only for genuinely
  different roles, and compare against a single-agent baseline at equal budget
  (`experiments/confirmatory/RESULTS.md`).
- Same-model critics rarely change outcomes. Prefer deterministic sandbox evaluation and tests as
  the gate.
- The BixBench gold-literal guard rejected about 45% of candidates in every arm, including
  tolerances and loop bounds. Check rejection reasons before trusting scores, and never change the
  primary metric or guard after seeing results without recording it
  (`experiments/confirmatory/RESULTS.md`).
- Memory: past.dev retrieved the target first 0.65 of the time vs 0.30 for local TF-IDF (hit@8
  0.95 vs 0.825), at 562 ms vs 15 ms median latency (`experiments/memory-comparison/README.md`,
  `docs/results.md`). Tag memory writes with run epochs so abandoned rounds can be rolled back
  on resume.
- Live telemetry: use the append-only `events.ndjson` stream rather than end-of-round batch
  exports, and do not let background exporters read files mid-commit.
