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
  B 0.26 > S 0.24 > A 0.11. Complete strict-guard set, picked after it finished:
  S 0.30 > A 0.09 > B 0.06. The smallest observed sign-flip p (with 3 paired runs the
  smallest attainable is 0.25) is 0.25 (complete strict-guard set) and 0.5 (guard2 primary);
  3 runs (orchestration seeds; Kimi sampling is not seeded), neither ordering is significant.
  No arm is consistently best. B leads S on mean
  only because S scored 0 on run 3001, where the guard rejected its candidate for the known
  integer-loop-bound false positive (unguarded 0.333); S beats B on the other two runs. See
  [`experiments/confirmatory/RESULTS.md`](../experiments/confirmatory/RESULTS.md)
  for the full per-seed results and limitations.
  Under the earlier grader, the means were A 0.093, B 0.056, S 0.074.
- **Ig Nobel (pre-committee):** 21 registered, 13 run, 11 passed the preregistered gates,
  and 10 also pass the |ρ| ≥ 0.1 floor added after the run. The ρ = 0.07 x/y coordinate study
  is the failure case; it also appears as a second confirmed row because the critic re-ran it
  (a `study.replicated` event), not as a separate test. These are gate-passing correlations on
  public teaching datasets (Cars93, cats, sleepstudy, and others): known relationships, not
  discoveries. No committee result is
  present in these records, so committee scoring has not been run on them. The
  committee-scored rerun is blocked: both Tinker keys return HTTP 402.
  The Pima `bmi~skin` hypothesis was rejected on Pima.tr (citations:
  `10.1079/BJN19910073` and `10.1109/SCAMC.1988.117514`), then the same hypothesis was re-run
  on Pima.te, where it passed (citations: `10.1002/bdm.414` and `10.1046/j.1360-0443.2002.00163.x`);
  that repeat is close to tautological. The same “Orca Vocalizations” paper appears as six Exa
  source cards (S51, S71, S92, S116, S128, S146), so source-card counts overstate distinct sources.

- **past.dev vs local memory:** on the same 419 real swarm memories and 40 paraphrased probes,
  past.dev retrieves the target first 0.65 of the time versus 0.30 for local lexical TF-IDF
  (hit@8 0.95 vs 0.825), at 562 ms vs 15 ms median latency. Probes were hand-written (Kimi was
  blocked), which favours semantic retrieval; see
  [`experiments/memory-comparison/`](../experiments/memory-comparison/README.md).

Run artifacts (ledgers, results, held-out grades, study records, cost) are committed under
[`experiments/real-runs/`](../experiments/real-runs/README.md).
