# Results

## Results so far (honest)

These are summaries of the recorded artifacts, not broad benchmark claims.

- **BixBench Mini v2:** the finished `out-bixbench_mini-v2` held-out artifact has
  7 questions. Baseline accuracy is 1/7 (Wilson 95% CI 0.026–0.513); best
  accuracy is 6/7 (Wilson 95% CI 0.487–0.974, approximately 0.49–0.97). This
  is one run on a small split. The Wilson intervals are computed from the
  artifact's scores and `n_items` using `held_out.py`; accompany any accuracy
  number for this seven-question split with its interval.
- **Playworld Mini:** on 200 held-out synthetic episodes, the recorded loss
  moves from 0.87225 at baseline to 0.2535 for the best candidate. This is a
  synthetic proxy, not PlayWorld or Genie 3; `testcases/playworld_mini/task.json`
  says the reference model source is not in the repo and cannot be graded on
  test.
- **Hadamard19:** the `out-hadamard19` results include a best loss of 0. The
  task defines loss 0 as matching the known order-19 determinant optimum, so
  this run reaches the ceiling of that task.
- **Confirmatory A/B/S:** preregistered primary (guard2, stopped early, guarded):
  B 0.26, S 0.24, A 0.11. Complete strict-guard set, headlined after seeing which set
  finished: S 0.30, A 0.09, B 0.06. Minimum sign-flip p = 0.25 (complete strict-guard set)
  and 0.5 (guard2 primary); 3 runs (orchestration seeds; Kimi sampling is not seeded), neither
  ordering is significant. No arm is consistently best. See
  [`experiments/confirmatory/RESULTS.md`](../experiments/confirmatory/RESULTS.md)
  for the full per-seed results and limitations.
  Under the earlier grader, the means were A 0.093, B 0.056, S 0.074.
- **Ig Nobel (pre-committee):** 21 studies were registered and 13 run; 10 are held.
  Eleven passed preregistered gates, and 10 remain after the post-hoc |ρ| ≥ 0.1 threshold was added
  after the run. The x/y coordinate study (ρ = 0.07), registered twice, is the failure
  case. These are gate-passing correlations on public teaching datasets (Cars93, cats,
  sleepstudy, and others): known relationships, not discoveries. No committee result is
  present in these records, so committee scoring has not been run on them. The
  committee-scored rerun is blocked: both Tinker keys return HTTP 402.

- **past.dev vs local memory:** on the same 419 real swarm memories and 40 paraphrased probes,
  past.dev retrieves the target first 0.65 of the time versus 0.30 for local lexical TF-IDF
  (hit@8 0.95 vs 0.825), at 562 ms vs 15 ms median latency. Probes were hand-written (Kimi was
  blocked), which favours semantic retrieval; see
  [`experiments/memory-comparison/`](../experiments/memory-comparison/README.md).

Run artifacts (ledgers, results, held-out grades, study records, cost) are committed under
[`experiments/real-runs/`](../experiments/real-runs/README.md).
