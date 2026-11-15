# Confirmatory A/B/S evaluation of swarm.py (preregistered)

Written 2026-11-15 ~01:00 PST, after launch and before any confirmatory result was inspected.
Exploratory pilot/rerun results (3 seeds, v1 sandbox, BixBench research on) are not pooled with these.

## Arms
- A: 4 workers, Boredom Meter off (fixed allocation), critic on.
- B: 4 workers, Boredom Meter drives allocation, gating, repair and cell suggestions, critic on.
- S: single-agent baseline: 1 worker, meter off, no scouts, no critic. Runs 4x the rounds of A/B so the
  number of candidate attempts is matched; token use is reported, not matched.

All arms: model `moonshotai/Kimi-K3.1-Pro:peft:262144` via Tinker, local memory, sandbox
`caffeinated-testcases:py311-v2`, paired seeds (same seed = same RNG stream across arms).

## Tasks and primary metrics
| Task | Arms | Seeds | Rounds | Research | Primary metric |
|---|---|---|---|---|---|
| hadamard29 | A, B | 2001-2008 | 16 | Exa on | best loss = log10(Barba bound) - log10|det| of the best kept matrix (lower is better) |
| bixbench_numeric | A, B, S | 3001-3006 | A/B 12, S 48 | off (`research: off`, `--exa off --literature off`) | held-out accuracy on the 18 held-out questions of each run's best dev candidate, graded once by `final_eval.py` |

Sources are rejected before execution if they contain a gold answer as a numeric literal
(`answer_literal_qids`); rejections are counted per arm.

## Tests
- Paired differences per seed; exact two-sided sign-flip permutation test on the mean paired difference.
- Primary family (Holm-corrected, alpha 0.05): hadamard29 B vs A; bixbench_numeric S vs A, S vs B, B vs A.
- Power note: with 6 pairs the smallest attainable two-sided p is 2/64 = 0.031, so after Holm over 4 tests no
  BixBench comparison can reach 0.05; BixBench results are reported as effect sizes with every seed shown.
  With 8 pairs (hadamard29) the smallest p is 2/256 = 0.0078.
- Arms that fail (e.g. Tinker 402) are excluded pairwise and reported.

## Secondary (descriptive only)
Dev loss, rounds to best, AUC, keeps/rejects/duplicates, crashes by reason (incl. answer_literal),
distinct evaluated cells, regime counts, prompt/completion tokens, Exa calls and cost, wall time,
loss per million tokens. LLM dollar cost is unknown (tokens only).
BixBench numbers are a 45-question proxy, not full BixBench; the 0.523 full-BixBench reference is context, not a like-for-like record.

## Scheduling note (00:50 PST, before any result was inspected)
Runs are LLM-latency bound (load < 1 on 8 CPUs), so to finish by the deadline the coordinators were
stopped and the not-yet-started arms relaunched with more parallel jobs in sibling output directories
(`conf-hadamard29-r2-s2003`, `-s2002B`, `conf-bixbench-numeric-guard-s3003`, `-s3002AS`). Arms already
running kept going and are summarized by `report.py` from their run directories. Arms, seeds, rounds,
model and source commits (hadamard29 a6b2a67, bixbench_numeric 7442255) are unchanged.
