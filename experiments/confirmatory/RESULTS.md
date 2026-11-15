# Confirmatory results (Kimi K3.1 via Tinker, research off for BixBench): exploratory after deviations

**Label: the whole confirmatory set is exploratory after deviations.** The primary set, the guard and
the held-out grader all changed after the preregistration (see "Deviations from preregistration and
their direction"). Nothing below is a confirmatory test.

## Summary (3 runs (orchestration seeds; Kimi sampling is not seeded))
- **Preregistered primary (guard2, stopped early, guarded):** B 0.26, S 0.24, A 0.11.
  **Complete strict-guard set, headlined after seeing which set finished:** S 0.30, A 0.09,
  B 0.06. The smallest observed sign-flip p (with 3 paired runs the smallest attainable is
  0.25) is 0.25 (complete strict-guard set) and 0.5 (guard2 primary); 3 runs (orchestration
  seeds; Kimi sampling is not seeded), neither ordering is significant.
- In the guard2 primary set, B > S > A on guarded accuracy; S leads only in the unguarded column
  (0.352). Guarded per-run accuracy (runs 3001/3002/3003): A 0/.167/.167, B .278/.333/.167,
  S 0/.444/.278. B leads S on mean only because S scored 0 on run 3001, where the guard rejected
  its candidate for the known integer-loop-bound false positive (`bix-52-q3`, `heldout_status
  crash`; unguarded 0.333); S beats B on the other two runs. No arm is consistently best.
- **The strict-set S lead depends on the 01:34 grader fix (a0d4fcd).** Under the grader before that fix
  (c31ab55), the same nine winners score A 0.093, B 0.056, S 0.074. S still beats B on the mean,
  but only on 1 of 3 runs (orchestration seeds; Kimi sampling is not seeded), and S is below A.
  See `results/heldout_by_grader.tsv`.
- **Confounds:** S has no critic or confirmation step, so S > B is confounded with acceptance rules.
  B's best is 1/18 held-out on every seed. Agents see the held-out question text and the full public
  data; held-out grading hides only the grade (see "Leakage and confound limits").
- **Guarded vs unguarded held-out accuracy (mean over 3 runs (orchestration seeds; Kimi
  sampling is not seeded)):**

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
Only one set finished all its rounds: the **strict-guard bixbench_numeric A/B/S set, runs 3001-3003**.
The fixed-guard rerun (`guard2`) and hadamard29 stopped partway. They are reported below at a
matched budget, using only rounds that completed before the cutoff. They are exploratory.
With 3 runs (orchestration seeds; Kimi sampling is not seeded), the smallest observed sign-flip p
(with 3 paired runs the smallest attainable is 0.25) is 0.25 (complete strict-guard set) and
0.5 (guard2 primary), so neither ordering is significant. Every run is shown.

Arms: **A** = 4 workers, fixed allocation (meter off). **B** = 4 workers, Boredom-Meter allocation,
gate and critic. **S** = single agent: 1 worker, no meter, no scouts, no critic, 48 rounds, so its
48 candidates match the 4 x 12 of A and B. All arms use the same model and the v2 sandbox, with Exa
and literature off.

## Deviations from preregistration and their direction
The preregistration is `PREREGISTRATION.md` (committed 00:46 PST, 2f7d634). Times below are commit
times in PST. The 01:50 and 02:05 times in the PREREGISTRATION.md deviation headings are wrong; the
commits are 01:21 (c31ab55) and 01:34 (a0d4fcd).

| # | Deviation | When | Direction of effect |
|---|---|---|---|
| 1 | Scope cut after the main key's 402 (~00:53): bixbench seeds 3001-3006 down to 3001-3003; hadamard29 seeds 2001-2008 down to 2001-2003; playworld_hard not run | 01:03 (f0fdd10) | Fewer pairs. The smallest attainable p rises from 0.031 (6 pairs) or 0.0078 (8 pairs) to 0.25, so no test can be significant. |
| 2 | Guard changed after inspecting rejection reasons: conventional stats constants exempted | 01:21 (c31ab55) | Accepts candidates the original guard rejected. The rejection rate had been about 45% in every arm, so it affects every arm's search. |
| 3 | Primary set switched. The preregistration addendum (40cd36c) declared the guard2 rerun primary. Guard2 was truncated at the 01:45 cutoff, so this file headlines the complete strict-guard set instead. | after 01:45 | Headline chosen after seeing which set finished. The strict set was searched under the original, over-strict guard. |
| 4 | Held-out grader fix: powers of ten (1e-4 to 1e-12) exempted, after seeing that a tolerance zeroed two S winners | 01:34 (a0d4fcd) | Raised S on seeds 3001 and 3003 from 0.000 to 0.333. A and B unchanged. This fix creates the S > A ordering and the 3/3 S > B ordering. |
| 5 | Third false-positive class (integer loop bounds, `range(50)`) found but not fixed; unguarded score reported alongside | after 01:45 | Lowers guard2 A and S on seed 3001; unguarded columns show the size. |
| 6 | Seed 3001 A and B each lost one worker slot (402) in round 5; 3002 A restarted fresh; 3002 S resumed after round 6 | 01:00-01:20 | Symmetric slot loss within the 3001 pair. Restarts reran from scratch or from clean checkpoints. |

Strict-guard held-out means of the same nine winners under each grader (per seed in
`results/heldout_by_grader.tsv`):

| grader | A | B | S | S vs B per seed | S vs A per seed |
|---|---|---|---|---|---|
| 7442255 (original guard, used during search) | 0.074 | 0.019 | 0.074 | 1 better, 1 worse, 1 tie | 1 better, 1 worse, 1 tie |
| c31ab55 (before the 01:34 fix) | 0.093 | 0.056 | 0.074 | 1 better, 2 worse | 1 better, 2 worse |
| a0d4fcd (final, headlined) | 0.093 | 0.056 | 0.296 | 3 better | 3 better |

## Arms as actually run
All live arms use Kimi K3.1 via Tinker and the local memory backend. Arms C and D exist in `swarm.py`
but were **not run** on any task.

| task | arm | Exa / literature | memory backend | rounds | seeds | status |
|---|---|---|---|---|---|---|
| bixbench_numeric (pre-guard launch, a6b2a67) | A, B, S | off / off | local | 12 / 12 / 48 | 3001-3002 | stopped about 15 min in when the guard landed; not scored |
| bixbench_numeric, strict guard (7442255) | A, B, S | off / off | local | 12 / 12 / 48 | 3001-3003 | completed (3001 A/B each lost 1 slot in round 5) |
| bixbench_numeric, strict guard | A, B, S | off / off | local | 12 / 12 / 48 | 3004-3006 | stopped at the 01:00 scope cut; not scored |
| bixbench_numeric, guard2 (c31ab55) | A, B, S | off / off | local | 12 / 12 / 48 | 3001 | truncated at round 6 / 8 / 24 |
| bixbench_numeric, guard2 | A, B, S | off / off | local | 12 / 12 / 48 | 3002 | truncated at round 9 / 5 / 26 |
| bixbench_numeric, guard2 | A, B, S | off / off | local | 12 / 12 / 48 | 3003 | truncated at round 10 / 7 / 46 |
| hadamard29 (a6b2a67) | A, B | on / default | local | 16 | 2001 | truncated at round 15 / 9 |
| hadamard29 | A, B | on / default | local | 16 | 2002 | truncated at round 13 / 10 |
| hadamard29 | A, B | on / default | local | 16 | 2003 (fresh restart) | truncated at round 8 / 6 |
| hadamard29 | A, B | on / default | local | 16 | 2004-2008 | stopped at the 01:00 scope cut; not scored |
| hadamard29 | S | - | - | - | - | not run |
| any task | C, D | - | - | - | - | not run |
| playworld_hard | A, B | - | - | - | - | not run |
| pilot: hadamard19, bixbench_mini, playworld_mini, ignobel (old rule) | A, B | on / default | local | 8 | 1001-1003 | completed (some arms reran after the first key ran out; section 4) |
| fake-LLM smoke tests (all tasks) | A, B | off | local | 3-5 | 101, 202 | completed; plumbing only, not evidence |

## Leakage and confound limits
- **Held-out leakage:** the agents see the held-out question text and the full public capsule data.
  Held-out grading hides only the grade. A candidate can still answer held-out questions directly from
  the data; the held-out split measures generalisation of the code without grade feedback, not
  unseen questions.
- **Gold-literal guard:** it checks source literals, not outputs. It has three known false-positive
  classes, and it would not catch an answer computed indirectly from a hard-coded value.
- **S vs B is confounded with acceptance rules:** S has no critic or confirmation step, so every
  improving candidate is kept at once. B needs critic confirmation and passes a gate. S > B may
  reflect these acceptance rules rather than single-agent versus swarm search.
- **B's ceiling:** B's best kept candidate scores 1/18 (0.056) held-out on every seed of the strict
  set under the final grader and c31ab55. Under 7442255 it is 0/18 on seeds 3002 and 3003.
- **Search under a broken guard:** all strict-set trajectories were shaped by the over-strict guard, so
  their absolute accuracies are not representative.

## 1. bixbench_numeric, strict guard (pre-fix set, complete)
Held-out accuracy on 18 questions whose grades the agents never saw (they did see the question
text and data). The best kept candidate is graded once with
`final_eval.py` at a0d4fcd. The baseline `analysis.py` scores 0.074 dev / 0.000 held-out.

| seed | A held-out | B held-out | S held-out | A dev | B dev | S dev |
|---|---|---|---|---|---|---|
| 3001 | 0.167 | 0.056 | **0.333** | 0.407 | 0.185 | 0.407 |
| 3002 | 0.056 | 0.056 | **0.222** | 0.259 | 0.259 | 0.222 |
| 3003 | 0.056 | 0.056 | **0.333** | 0.222 | 0.222 | 0.407 |
| mean (sd) | 0.093 (0.064) | 0.056 (0.000) | **0.296 (0.064)** | 0.296 | 0.222 | 0.346 |

Paired held-out differences: S-A +0.204 and S-B +0.241. S is better on 3/3 runs against both
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
means: A 0.222, B 0.259, S 0.352. S is highest or tied for highest on 3/3 runs (unguarded).

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
- bixbench_mini: A was better on 2 of 3 runs (orchestration seeds; Kimi sampling is not seeded).
  Web research was on and the v1 sandbox lacked
  statsmodels, so these results are possibly contaminated and confounded by crashes.
- playworld_mini: A was ahead by about 0.008 on 2 pairs, which is within noise.
- ignobel (old |rho| rule, pass/fail loss): all runs reached loss 0. A ran more studies (28/22/31 vs
  23/20/27) and confirmed more findings (21/12/17 vs 9/10/15). These runs are not pooled with the
  new committee-scored rule.

## Reading
- **Track 3 (single agent vs swarm):** the two orderings disagree. The preregistered primary
  guard2 set stopped early and ranks B 0.259 > S 0.241 > A 0.111 guarded; the complete strict-guard
  set, picked after it finished, ranks S 0.296 > A 0.093 > B 0.056. In the primary set S leads only
  in the unguarded column (0.352). B leads S on mean only because S scored 0 on run 3001 after the
  guard rejected its candidate for the known integer-loop-bound false positive (`bix-52-q3`,
  `heldout_status crash`; unguarded 0.333); S beats B on the other two runs. The smallest observed
  sign-flip p (with 3 paired runs the smallest attainable is 0.25) is 0.25 (complete strict-guard
  set) and 0.5 (guard2 primary); 3 runs (orchestration seeds; Kimi sampling is not seeded),
  neither ordering is significant.
  These are held-out scores on a numeric subset of 10 capsules, not the full-BixBench 0.523
  reference.
- **Boredom Meter (B vs A):** no significant evidence of benefit; results are mixed: ahead of A
  in the guard2 primary, behind A in the complete strict-guard set, tied on hadamard29, at about
  1.75x the token cost on BixBench.
- **Open issue:** the gold-literal guard's false positives (conventional constants, tolerances,
  integer loop bounds) confound BixBench searches. A guard that checks the values the candidate
  actually outputs, rather than source literals, would remove this class of error.

## Artifacts
`results/` (committed, about 2 MB) holds, per set, seed and arm (`bixbench_strict/`,
`bixbench_guard2/`, `hadamard29/`): `results.tsv`, `run.json`, `ledger.jsonl`,
`resume_checkpoint.json`, `heldout.json` (completed bixbench arms), `best_commit.txt`, and the best
candidate's source (`best_final_analysis.py` / `best_final_construct.py`; for truncated runs also
`best_matched_budget_*` or `best_common_round_*`, the candidate scored in the tables). At the top
level: `report_strict_guard.json` (from `report.py`), `truncated_partial_runs.json` (from
`truncated.py`) and `heldout_by_grader.tsv`. Worktrees, caches and logs are not included.

## Commit references
Every SHA cited here is reachable from `agent/devin/eval-swarm` and `agent/devin/overnight`
(`git merge-base --is-ancestor <sha> origin/agent/devin/overnight` succeeds for a6b2a67, 7442255,
2f7d634, c31ab55, a0d4fcd, 09e0416 and 18dea09). Full SHAs: a6b2a67e9e9e1fed4fb84f6b364a90e615d8e753,
744225543f79f0fba97f34194a7b0b4e075ccbbb, c31ab553ebc1916550cbaf20bf63979f379b64b8,
a0d4fcdb14d1f1a368c6071e65fd323e0a09c65d.
