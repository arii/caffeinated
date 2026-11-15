---
name: caffeinated-guardrails
description: Scar-tissue rules from adversarial reviews of caffeinated swarm runs, run accounting, and the Lab viewer. Read before changing acceptance, LLM call logging, A/B analysis, or recording replay.
---

# Caffeinated guardrails

## Scar tissue

- Keep `best_val` and `best_metric_commit` as one pair, updated only through `swarm.improved_best`. Open-ended runs accept findings that do not beat the current best, so an accepted study is not a new best, and held-out evaluation and the checkpoint must not move to a worse commit. Treat any budget ceiling (`llm.WorkerCallBudgetError`) as a rejected attempt, not an LLM crash, so it never counts toward "every worker's LLM call failed".
- Never deduplicate log records by ID unless the ID is unique across every log that can mint it. Failed calls are written only to `llm_errors.jsonl`, so a resumed `LLMClient` must derive `call_counter` from both logs. When adding a dedupe, write the resume test first: fail a call, resume, and check that the failed attempts are still counted. Recordings get the same rule: skip a non-object line in `events.ndjson` (`[]`, `null`, `42`) instead of hiding the whole run.
- A descriptor label is not evidence of new behavior, and three paired seeds are not evidence of an arm effect. Before crediting novelty or an arm, check whether a "new" descriptor's score is bit-identical to its parent's (a no-op edit), and recompute the arm comparison under each grader revision and with the top and bottom seed dropped (`experiments/confirmatory/results/heldout_by_grader.tsv`). Report any result that flips as exploratory.
