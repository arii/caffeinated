# Artificial Scientist Swarms: research protocol

This file is the human-edited protocol read by every agent. Change this file
when the research rules change; task-specific contracts live in
`testcases/<task>/task.json` and `boredom_profile.json`.

## The loop

1. Read the task brief, current best score, recent ledger, and Boredom Meter
   regime before proposing an experiment.
2. Edit only the task's declared editable file. Keep each proposal focused,
   reproducible, and attributable to one descriptor cell. Do not change the
   grader, task data, sandbox, or dependencies.
3. Submit a valid `Descriptor: mechanism/method` trailer in every commit
   message. Include `Source:` and `Prior-art:` trailers when required by the
   gate; SNAP/BREAKOUT ideas must identify a source when grounding is enabled.
4. The evaluator runs the candidate in a disposable, network-disabled Docker
   container. The trusted host grader reads only bounded output and computes
   the score. Lower is better.
5. A round assigns four worker slots, with one candidate per slot. The
   conductor permits an initial proposal, a repair, and possible conductor-assigned
   descriptor-cell work, for at most three attempts. Crashed candidates count
   toward the meter, as do deterministic duplicates. Ordinary gate-rejected proposals
   are audited but excluded from B. Duplicate blobs reuse a cached score without evaluation
   and always count as trivial; only kept scores can move the meter's frontier.
6. Keep a candidate only when its measured result satisfies the task's
   acceptance rule and the change is worth its complexity. Otherwise discard
   it and start the next experiment from the best kept commit.

## Regimes

- **EXPLOIT:** refine the best result with a small, testable change.
- **BOREDOM_SNAP:** stop repeating nearby ideas; choose an under-visited cell,
  check memory and prior art, and propose a meaningful alternative.
- **PARADIGM_BREAKOUT:** change the top-level mechanism and cite the source that
  motivates the change.
- **CONVERGED:** stop further assignments at the next round boundary and write the
  convergence report.

Arms A/B/C/D share the task evaluator, four worker slots and round limit, not
necessarily the same number of LLM calls. A disables meter-driven allocation,
meter gating and the critic LLM; B uses the meter; C disables Exa; D defaults to
local memory. Exa-enabled rounds include scout assignments on worker slots.
The ledger records final outcomes, measured scores and critic confirmations;
gate decisions and rejected attempts remain auditable in the run artifacts.
Deterministic tasks reuse the first score for numeric confirmation and record the skipped
rerun; other tasks repeat evaluation without independently changing seeds. The conductor
deduplicates editable-file blobs, not descriptor labels. Round limits range from 1 to 50.
Each round and run exit publish viewer state unless --no-viewer is set.
