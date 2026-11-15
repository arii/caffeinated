# Confirmatory results (Kimi K3.1 via Tinker, research off for BixBench)

## Summary (n = 3 seeds per comparison; descriptive only, not significance-tested)
- **S > B on held-out accuracy in the completed strict-guard bixbench_numeric set:** S 0.296 vs B 0.056
  (S better on 3/3 seeds). S also beats A (0.093) on 3/3 seeds. These are 3 paired seeds; the smallest
  attainable sign-flip p is 0.25, so no claim here is statistically significant.
- **Guarded vs unguarded held-out accuracy (mean over 3 seeds):**

  | set | A guarded / unguarded | B guarded / unguarded | S guarded / unguarded |
  |---|---|---|---|
  | strict guard, complete | 0.093 / 0.093 | 0.056 / 0.056 | 0.296 / 0.296 |
  | guard2, truncated | 0.111 / 0.222 | 0.259 / 0.259 | 0.241 / 0.352 |

- **Known false-positive classes in the gold-literal guard:**
  1. conventional statistical constants (0.8, 0.975, 1.0, 0.75) inside wide gold ranges, fixed in c31ab55;
  2. numerical tolerances (1e-10 inside 1.13e-12 to 1.13e-10), fixed in a0d4fcd;
  3. integer loop bounds (`range(50)` inside 48 to 50), not fixed, so the unguarded score is shown.
- **Runs truncated at the 01:45 PST HTTP 402 cutoff.** "Clean rounds" means the last checkpoint
  before the cutoff.
  - guard2 bixbench_numeric, clean rounds A/B/S (of 12/12/48): seed 3001: 6/8/24; seed 3002:
    9/5/26; seed 3003: 10/7/46. Compared at matched candidate budgets of 24, 20 and 28.
  - hadamard29, clean rounds A/B (of 16): seed 2001: 15/9; seed 2002: 13/10; seed 2003: 8/6.
    Compared at rounds 9, 10 and 6.
  - The strict-guard bixbench set ran all 12/12/48 rounds. Seed 3001 A and B each lost one worker
    slot to a 402 in round 5.

Status at 01:45 PST, 2026-11-15: both Tinker keys returned HTTP 402 and all live arms were stopped.
Only one set finished all its rounds: the **strict-guard bixbench_numeric A/B/S set, seeds 3001-3003**.
The fixed-guard rerun (`guard2`) and hadamard29 stopped partway. They are reported below at a
matched budget, using only rounds that completed before the cutoff. They are exploratory.
With 3 seed pairs, the smallest two-sided sign-flip p is 0.25, so none of these comparisons can be
significant. Every seed is shown.

Arms: **A** = 4 workers, fixed allocation (meter off). **B** = 4 workers, Boredom-Meter allocation,
gate and critic. **S** = single agent: 1 worker, no meter, no scouts, no critic, 48 rounds, so its
48 candidates match the 4 x 12 of A and B. All arms use the same model and the v2 sandbox, with Exa
and literature off.

## 1. bixbench_numeric, strict guard (pre-fix set, complete)
Held-out accuracy on 18 questions the agents never saw. The best kept candidate is graded once with
`final_eval.py` at a0d4fcd. The baseline `analysis.py` scores 0.074 dev / 0.000 held-out.

| seed | A held-out | B held-out | S held-out | A dev | B dev | S dev |
|---|---|---|---|---|---|---|
| 3001 | 0.167 | 0.056 | **0.333** | 0.407 | 0.185 | 0.407 |
| 3002 | 0.056 | 0.056 | **0.222** | 0.259 | 0.259 | 0.222 |
| 3003 | 0.056 | 0.056 | **0.333** | 0.222 | 0.222 | 0.407 |
| mean (sd) | 0.093 (0.064) | 0.056 (0.000) | **0.296 (0.064)** | 0.296 | 0.222 | 0.346 |

Paired held-out differences: S-A +0.204 and S-B +0.241. S is better on 3/3 seeds against both
(sign-flip p = 0.25; Holm-adjusted 1.0). B-A is -0.037 (B worse on 1 seed, tied on 2).
`heldout_unguarded` equals the guarded score for all 9 winners.

| arm | prompt tok | completion tok | LLM calls | Exa | candidates | gate rejects | answer_literal rejects | other crashes | keeps | wall (min) |
|---|---|---|---|---|---|---|---|---|---|---|
| A | 692k | 61k | 51 | 0 | 48 | 0 | 21 / 22 / 21 | 3 / 7 / 3 | 3.0 | 25 |
| B | 1,227k | 104k | 90 | 0 | 48 | 19.3 | 11 / 11 / 14 | 3 / 3 / 2 | 2.3 | 44 |
| S | 705k | 63k | 48 | 0 | 48 | 0 | 24 / 29 / 22 | 4 / 4 / 3 | 2.0 | 29 |

Values are means over seeds, except the reject and crash columns, which list seeds 3001/3002/3003.
B uses about 1.75x the tokens of A or S. B's gate rejects about 19 of its 48 proposals before
evaluation, so it evaluated fewer candidates and therefore had fewer literal rejects.

**Why this set is labelled pre-fix:** the search-time gold-literal guard rejected about 45% of the
candidates in every arm. All of those rejections were false positives: conventional constants such
as `power=0.8`, `ppf(0.975)` and `1.0` fall inside wide gold ranges (see PREREGISTRATION.md). The
handicap applied to all three arms, but it shaped every search trajectory. Absolute accuracies here
are therefore not representative.

## 2. bixbench_numeric, fixed guard (guard2, partial, exploratory)
Each arm is cut at the largest candidate budget that all three arms completed before the 402s:
A/B at round budget/4, S at round budget. Each arm's best kept candidate up to that point is graded
on held-out.

| seed | budget | A held-out (unguarded) | B held-out | S held-out (unguarded) |
|---|---|---|---|---|
| 3001 | 24 | 0.000* (0.333) | 0.278 | 0.000* (0.333) |
| 3002 | 20 | 0.167 | 0.333 | **0.444** |
| 3003 | 28 | 0.167 | 0.167 | **0.278** |

\* The held-out guard flagged bix-52-q3, whose gold range is 48 to 50, because the source contains
`range(50)`. This is a third false-positive class: integers above 10 used as loop bounds. Unguarded
means: A 0.222, B 0.259, S 0.352. S is highest or tied for highest on 3/3 seeds (unguarded).

## 3. hadamard29 vs the Barba bound (partial, exploratory)
Loss = log10(Barba bound) - log10|det|. The bound is unreachable at n=29. The table compares each
seed pair's best loss at the last round that both arms completed. Rounds where some workers failed
with 402 are counted as lost slots.

| seed | common round | A loss | B loss | det / Barba bound (best) |
|---|---|---|---|---|
| 2001 | 9 | 0.0998 | **0.0698** | 0.852 |
| 2002 | 10 | **0.0698** | 0.0998 | 0.852 |
| 2003 | 6 | 0.0998 | 0.0998 | 0.795 |

The baseline construction scores 0.349. Both arms land on the same two constructions, with losses
0.0998 and 0.0698. The result is 1-1-1, so there is no evidence either way. Lost slots inside the
compared rounds were 4/6, 2/1 and 0/0 (A/B). This is not compared against an EinsteinArena record:
no verified best determinant for n=29 is shipped with the task.

## 4. Earlier exploratory pilot (8 rounds, web research on; reported separately)
- hadamard19: both arms reached the known optimum on every seed. The task is saturated, so it was dropped.
- bixbench_mini: A was better on 2 of 3 seeds. Web research was on and the v1 sandbox lacked
  statsmodels, so these results are possibly contaminated and confounded by crashes.
- playworld_mini: A was ahead by about 0.008 on 2 pairs, which is within noise.
- ignobel (old |rho| rule, pass/fail loss): all runs reached loss 0. A ran more studies (28/22/31 vs
  23/20/27) and confirmed more findings (21/12/17 vs 9/10/15). These runs are not pooled with the
  new committee-scored rule.

## Reading
- **Track 3 (single agent vs swarm):** on this 45-question proxy, the single agent did as well as or
  better than both swarms on every seed. That holds in the complete strict-guard set (0.296 vs
  0.093/0.056 held-out) and in the partial fixed-guard set. With n=3 this is a consistent direction,
  not a significant result. These are held-out scores on a numeric subset of 10 capsules; they are
  not comparable to the full-BixBench 0.523 reference.
- **Boredom Meter (B vs A):** no evidence of benefit at matched candidate count on any task so far,
  at about 1.75x the token cost on BixBench.
- **Open issue:** the gold-literal guard's false positives (conventional constants, tolerances,
  integer loop bounds) confound BixBench searches. A guard that checks the values the candidate
  actually outputs, rather than source literals, would remove this class of error.

Artifacts: `results/` holds per-arm `results.tsv`, `run.json`, `heldout.json` and
`best_commit.txt`, plus `report_strict_guard.json` (from `report.py`) and
`truncated_partial_runs.json` (from `truncated.py`).
