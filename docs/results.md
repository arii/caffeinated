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
- **Confirmatory A/B/S:** in the completed strict-guard `bixbench_numeric` set,
  single-agent arm S has mean held-out accuracy 0.296 versus 0.056 for boredom
  swarm B, and S is higher on all 3 paired seeds. The comparison is not
  statistically significant (smallest attainable sign-flip p = 0.25). See
  [`experiments/confirmatory/RESULTS.md`](../experiments/confirmatory/RESULTS.md)
  for the full per-seed results and limitations.
- **Ig Nobel (pre-committee):** the stopped `out-ignobel` artifact has 22 study
  registrations. 13 were evaluated (9 crashed or were rejected before a result),
  and 12 have `result.confirmed == true`. One confirmed study is a duplicate, so
  11 are unique. The confirmed findings are mostly true but unsurprising (for
  example, heavier cars have lower city MPG, ρ = −0.89). No committee result is
  present in these records, so committee scoring has not been run on them. The
  committee-scored rerun is blocked: both Tinker keys return HTTP 402.

Run artifacts (ledgers, results, held-out grades, study records, cost) are committed under
[`experiments/real-runs/`](../experiments/real-runs/README.md).
