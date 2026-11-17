# Confirmatory A/B/S evaluation of swarm.py (preregistered)

Historical scope: November 2026 preregistration and dated amendments, preserved as the experiment record; outcomes and deviations are in [RESULTS.md](RESULTS.md).

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

## Scope change (01:05 PST, before any result was inspected)
The main Tinker key hit a billing block (HTTP 402) at 08:53 UTC; all arms were stopped. On the last
(backup) key the scope is reduced to bixbench_numeric A/B/S seeds 3001-3003 (priority) and hadamard29
A/B seeds 2001-2003. Arms are resumed with `swarm.py --resume` from their last round checkpoint; rounds
that never completed are dropped. Arms where the 402 hit an early completed round were restarted fresh
(bixbench 3002 A in `conf-bixbench-numeric-guard-s3002A-fresh`; hadamard 2003 A/B in
`conf-hadamard29-r2-s2003-fresh`). Worker slots lost to 402s inside completed rounds are reported as
`llm_failed_slots` (bixbench 3001 A and B: one slot each in round 5). With 3 pairs the smallest
two-sided sign-flip p is 0.25, so the confirmatory tests cannot reach significance; results are
reported per seed with mean and spread only, and the Holm column is kept for completeness.

## Guard deviation (01:50 PST, after inspecting rejection reasons, not held-out scores of the rerun)
The gold-literal guard rejected 198 bixbench_numeric candidates (about 45% of attempts in every arm);
all were false positives from conventional constants (power 0.8, `ppf(0.975)`, `1.0`, quantile 0.75)
that fall inside wide gold ranges. bixbench_numeric's guard now ignores conventional statistical
constants (commit c31ab55); none of the 198 sources are flagged under it, while a planted gold literal
still is. The primary bixbench result is the rerun in `conf-bixbench-numeric-guard2` (seeds 3001-3003,
A/B/S, same rounds/model/settings). The strict-guard runs are reported separately as a pre-fix set.

## Held-out grading fix (02:05 PST)
Two strict-guard S winners were scored 0 on held-out only because a convergence tolerance (`1e-10`)
falls inside the held-out range of bix-54-q4 (1.13e-12 to 1.13e-10). Powers of ten 1e-4..1e-12 are
added to the guard's conventional constants (graders and final_eval only; in-flight guard2 searches
keep the c31ab55 dev guard). `final_eval.py` now also reports `heldout_unguarded` accuracy and any
held-out literal hits; agents never see held-out answers, so a hit there is a flag, not dev-feedback
leakage. All held-out scores in the report are recomputed with this final_eval.
