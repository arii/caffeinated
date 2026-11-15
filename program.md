# CPU-task swarm protocol

This file is the human-edited protocol read by every agent. Change this file
when the research rules change; task-specific contracts live in
`testcases/<task>/task.json` and `boredom_profile.json`.

## The loop

1. Read the task brief, current best loss, recent ledger, and Boredom Meter
   regime before proposing an experiment.
2. Edit only the task's declared editable file. Keep each proposal focused,
   reproducible, and attributable to one descriptor cell. Do not change the
   grader, task data, sandbox, or dependencies.
3. Submit a valid `Descriptor: mechanism/method` trailer in every commit
   message. Include `Source:` and `Prior-art:` trailers when required by the
   gate; SNAP/BREAKOUT ideas must identify a source.
4. The evaluator runs the candidate in a disposable, network-disabled Docker
   container. The trusted host grader reads only bounded output and computes
   the loss. Lower loss is better.
5. A round assigns four worker slots, with one candidate per slot. The
   conductor may make one repair attempt for a rejected proposal; failed
   candidates are recorded and count toward the meter.
6. Keep a candidate only when its measured result satisfies the task's
   acceptance rule and the change is worth its complexity. Otherwise discard
   it and start the next experiment from the best kept commit.

## Regimes

- **EXPLOIT:** refine the best result with a small, testable change.
- **BOREDOM_SNAP:** stop repeating nearby ideas; choose an under-visited cell,
  check memory and prior art, and propose a meaningful alternative.
- **PARADIGM_BREAKOUT:** change the top-level mechanism and cite the source that
  motivates the change.
- **CONVERGED:** only the conductor's designated confirmation work proceeds.

Arms A and B share the same task evaluator and budget. A disables meter-driven
allocation; B uses the Boredom Meter. An Exa-enabled round includes a scout.
The ledger records proposals, gate decisions, measured losses, and critic
replications; rejected and crashed attempts are not silently removed.
