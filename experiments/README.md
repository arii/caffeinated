# Paired meter A/B experiments

`ab.py` compares the fixed four-worker arm A against meter-driven arm B.
Neither arm pushes its generated commits.

## Control definition

Arm A is meter-free in its decisions: three refine workers and one divergent
worker, always worker-1, which scouts when Exa is on. It never uses
`suggest_cells`, meter-based gating, meter-driven repair, or meter scores to
choose the scout. Meter scores are logged only in shadow artifacts; B values
and cell suggestions are excluded from prompts and recalled assignments.
Ordinary results and research memory remain available in both arms.

Both arms run the same numeric acceptance checks and the same critic LLM,
including the prior-art novelty judgement; critic prompts carry no meter state.
B adds only meter-driven allocation, gating and cell suggestions, so the
comparison isolates the meter's effect on what the swarm tries.

## Offline validation

Build the sandbox image first (see `testcases/README.md`), then run from a
committed checkout:

```sh
EXA=off MEMORY_BACKEND=local python experiments/ab.py \
  --seeds 101 202 --rounds 5 --jobs 6 --llm fake --exa off \
  --memory-backend local --out results/ab-fake
python experiments/analyze_ab.py results/ab-fake/results.csv \
  --out results/ab-fake/analysis.json
python -m unittest discover -s tests -p test_ab.py -v
```

This runs 2 seeds × 3 tasks × 2 arms × 5 rounds in real Docker sandboxes.
Fake results validate the harness only: they cannot establish a meter benefit.
Fake sampling rotates the canned edits by seed and round; distinct seed labels
are not independent research policies. The three task labels are:

| Task | Scope |
| --- | --- |
| hadamard19 | Exact objective with a known optimum |
| bixbench_mini | 17-question subset, not full BixBench |
| playworld_mini | Synthetic proxy, not PlayWorld |

## Isolation and budgets

Each task/seed/arm starts in a fresh clone of the same source commit, with its
own worktrees, Exa cache, run ID, and local memory mirror. This deliberately
uses the allowed **local-memory fallback**: past.dev retrieval can return
content synthesized from multiple sources, so filtering source IDs alone
does not guarantee that A never sees B's memories. `PAST_API_KEY` is unused.
No changes to `memory.py` or `research.py` are required. Supporting past.dev
later requires an API-level isolated namespace/project per arm, including
retrieved content, not merely post-filtered citations.

Both arms use the same rounds, four workers, model, Exa switch and maximum
call count, memory backend, evaluator, and starting candidate. Candidate
rejections and different scout allocations can change actual call and
evaluation counts; the treatment includes allocation and gating. A converged
B run can stop early; its final loss is carried forward through the planned
round budget for AUC, and `rounds_completed` records its actual allocations.
Equal opportunity budgets do not imply identical realized dollar spend. The driver
clears inherited replay and ablation switches and sets `PYTHONHASHSEED`.
The manifest records settings and randomized within-pair execution order.
`--jobs N` bounds the number of arms in flight (default `1`, serial).
At higher concurrency, each arm still owns its clone, output directory,
environment, caches, and local memory. Only the coordinator writes the manifest
and CSV, atomically; CSV rows retain the planned order regardless of completion
order. The manifest lists the full plan and each arm's status. After an observed
failure, no more arms are submitted; already running arms finish and their
successful rows are saved before the driver exits with an error. Queued arms
are marked `not_started`. Parallel live runs share provider rate limits and
host resources, so concurrency need not yield a proportional speedup.

Tinker's OpenAI-compatible `/chat/completions` endpoint accepts the standard
`seed` field, so the swarm passes it with each Tinker request.

The swarm's `--seed` sets Tinker/OpenAI sampling seeds keyed by
seed/role/worker/round. Thus extra B calls do not shift later matching calls.
Evaluator datasets and candidate-internal seeds stay fixed. Remote sampling
may still be nondeterministic; the experiment estimates variability over
researcher seeds, not held-out dataset samples. The driver refuses duplicate
seeds, tracked edits, existing output directories, and incomplete runs.
After a failure, earlier completed rows remain available, but analysis rejects
unpaired rows. Start a new output directory for a clean rerun.

## CSV and analysis definitions

One row is emitted per task/seed/arm. `best_loss` is the confirmed kept
incumbent (mean of candidate and critic replication when present), including
the baseline. For deterministic tasks, critic confirmation reuses the score
rather than running a replication. `best_observed_loss` also includes
discarded scored candidates.
`loss_by_round` is a JSON array of incumbent loss at rounds 0 through R;
`rounds_to_best` is the first index attaining the final best (0 if unchanged).
`auc` is trapezoidal area under that curve in loss-rounds. Lower is better.

`keeps` and `evaluated` count candidate proposals only, excluding the baseline
and critic reruns. Evaluated includes crashed evaluations but excludes gate
rejections and cached/same-round duplicates. `candidate_attempts`, `duplicates`,
and `rejected` make this accounting explicit. `critic_confirmations` counts
critic decisions; `critic_evaluated` counts only actual reruns. `distinct_cells`
counts mechanism/method cells among non-rejected attempts, including duplicates;
`distinct_evaluated_cells` counts only evaluated cells. `regime_counts` counts
round allocations, and `converged` means an active allocation or status reached
CONVERGED; A's meter is shadow-only and cannot actively converge.

Exa charges are summed from query-log `cost` fields. LLM dollar costs use
logged charges if available; otherwise supply **both**
`--llm-input-usd-per-million` and `--llm-output-usd-per-million` to price logged
token usage. Retry tokens are already included in LLM usage. Such costs are
marked `token_rate_estimate`, not billed charges. Missing costs remain blank
with an `unknown_*` source; fake/disabled services cost zero. Call/token
counts remain available. Rates are recorded in the manifest. Exa/past.dev
subscription charges and infrastructure costs are outside these totals.

Analysis checks complete unique pairs, distinct memory scopes, matched
settings, identical baselines and monotone complete curves. Per task it
reports mean and sample SD of seed-wise B−A differences for best loss and AUC,
two-sided exact sign tests, exact Wilcoxon sign permutations with tied
midranks (up to 50 nonzero pairs), and a reproducible paired percentile
bootstrap 95% CI for the mean. Wilcoxon assumes symmetric differences.

Tests are against zero difference. A practical best-loss win requires a
strict gain greater than the task profile's `eps`; an AUC win uses `eps * R`
(equivalently a mean curve-loss gain greater than `eps`). CIs at n=2 are
unstable; fewer than six nonzero pairs cannot even attain two-sided p<0.05.
An all-tied or tiny sample is explicitly inconclusive. P-values are
exploratory and unadjusted across tasks and endpoints. No pooling of unlike
tasks, and no claim of evidence from fake runs.

## Proposed live design — do not run until approved

Wait for the three fix branches and the user's explicit go and named target
branch. The proposed pilot uses seeds **1001, 1002, 1003**, all three tasks,
both arms, **8 rounds**, and **`--jobs 6`**: 9 pairs, **18 runs**, 144 arm-rounds.
Use the same pinned Tinker model in both arms, Exa on, and local memory.
Best loss is primary; AUC and coverage are secondary. Report effects and CIs
per task. Three seeds per task are exploratory: even three nonzero differences
all pointing the same way cannot give a two-sided exact sign/Wilcoxon p below
0.25. The bootstrap is unstable at this size. This pilot cannot establish
conventional statistical significance; a confirmatory study would need more
seeds and predeclared correction across the three primary task tests.

Using the supplied estimate per three-round arm ($0.60–1.40 Tinker + $0.13
Exa, 6–13 minutes), linear scaling by `18 * 8 / 3` gives $28.80–67.20 Tinker +
$6.24 Exa = **$35.04–73.44**. A 25% retry/longer-prompt reserve gives
**$43.80–91.80** (budget roughly **$44–92**). Each eight-round arm would take
16–34.7 minutes; three waves of six give **48–104 minutes** before setup,
retries, provider throttling, or CPU/Docker contention (4.8–10.4 arm-hours
of work in total). These are extrapolations, not measured eight-round costs
or guaranteed runtimes. Early convergence and policy-dependent call counts
can also change actual spend.

Only after approval, from a clean checkout of the named branch:

```sh
EXA=on MEMORY_BACKEND=local python experiments/ab.py \
  --tasks hadamard19 bixbench_mini playworld_mini \
  --seeds 1001 1002 1003 --rounds 8 --jobs 6 \
  --llm tinker --model "$TINKER_MODEL" --live --exa on \
  --memory-backend local --out results/ab-live-pilot
```

Phase 1 starts no live runs. There are no GPU runs.
