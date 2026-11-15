# Judge Q&A: artificial scientist swarm

Prepared answers to the hardest questions from two hostile-judge reviews. Every number links to a
committed artifact. Where the answer is unfavourable we say so.

## Results

**Does the swarm beat a single agent?**
No consistent winner is shown. Preregistered primary (guard2, stopped early, guarded): B 0.26,
S 0.24, A 0.11. Complete strict-guard set, headlined after seeing which set finished: S 0.30,
A 0.09, B 0.06. Minimum sign-flip p = 0.25 (complete strict-guard set) and 0.5 (guard2 primary);
3 runs (orchestration seeds; Kimi sampling is not seeded), neither ordering is significant.
Under guard2, B > S > A guarded; S leads only unguarded (0.352). The strict-set ordering depends
on a grader tolerance fix (`a0d4fcd`) made after the winners were known; under the earlier grader
the means were A 0.093, B 0.056,
S 0.074. S also had no critic or confirmation step. See
`experiments/confirmatory/RESULTS.md` and `experiments/confirmatory/results/heldout_by_grader.tsv`.

**Does the boredom meter help?**
No evidence that it does. B ≤ A on BixBench at about 1.75× S's tokens; B's best candidate gets 1/18
held-out on every seed under the final grader. hadamard29 is a 1–1–1 tie at the common completed round.

**Then what is the contribution?**
A deterministic, auditable boredom signal (stagnation + sparseness) that reproducibly changes role
allocation, a fair held-out protocol with a contamination guard, a full-trace replay UI, and an
honest negative result.

**Best positive result?**
BixBench mini, one real Kimi run: held-out baseline 1/7 → best candidate 6/7 (Wilson 95% CI
0.49–0.97), dev loss 0.10 (`experiments/real-runs/bixbench_mini-v2/held_out_test.json`). Tiny n.
Playworld mini (synthetic proxy, not official PlayWorld): held-out loss 0.872 → 0.253 on 200
disjoint seeds, close to dev 0.288. Hadamard19 reaches the known optimum (loss 0); that is a
ceiling, not a record.

**Held-out questions are in the prompt. In what sense are they held out?**
Agents see question text and the full public data; only grades are hidden. Candidate feedback is
dev-only and the final best is graded once on test. This measures transfer across questions within
the same capsules, not unseen data.

**What stops an agent printing the gold answer?**
BixBench forces Exa and literature off. An AST literal guard with constant folding rejects planted
or arithmetic-derived gold values without revealing them. Conventional statistical constants and
tolerance powers are exempt. Known remaining false positive: integer loop bounds such as
`range(50)` inside a held-out range; we report guarded and unguarded scores. It does not catch
answers parsed from strings. A scan of 23 earlier candidates flagged 0.

**Your preregistration has post-launch deviations.**
Yes, each timestamped by commit in `RESULTS.md`. Because the guard and grader changes followed
observed rejections and one of them moved S upward, the set is labelled exploratory.

## Ig Nobel

**Is the replay committee-scored?**
No. The published run stopped at round 13 of 15 when Tinker credit ran out, before committee
scoring existed in the loop. The Lab labels it "Stopped real run (13/15 rounds)" and
"Pre-committee run: loss 0 = passed preregistered gates". No prizes or podium are shown because no
committee output exists.

**How many tests, and how many held up?**
21 studies were registered and 13 run; 10 are held under today's rule. Eleven passed the
preregistered gates; 10 remain after the
post-hoc |ρ| ≥ 0.1 effect-size rule was added after the run. The failure case is the x/y coordinate
study (ρ = 0.07), registered twice. These are gate-passing correlations on public teaching datasets
(Cars93, cats, sleepstudy, and others): known relationships, not discoveries. No multiplicity
correction was applied; the largest confirmed main-test p is approximately 3.4e-7 (3.39e-7 for shell distance).
See `experiments/real-runs/ignobel/ignobel_studies.jsonl`.

**These findings are textbook results from R teaching datasets.**
Mostly, yes: true but unsurprising. That is why we added the committee: two independent non-Kimi
judges (gpt-oss-120b, Qwen3.5) score laugh and think on host-written abstracts with Exa prior-work
evidence; committee score is the lower judge's minimum; confirmed score = 0.25 + 0.75 × committee;
protected-group targeting scores 0. It is implemented and tested but has not run on real studies
because both Tinker keys return HTTP 402.

**Is "replication" a replication?**
No. It is split-half consistency on the same dataset and is named that way in the UI.

**What if the judges are unreachable?**
Scoring now fails loudly with `grader_error`. Gate-only scoring requires an explicit
`IGNOBEL_COMMITTEE=off`; it no longer silently awards full marks.

## Exa and past.dev

**Is past.dev better than local memory?**
Measured once on the same 419 real memories with 40 hand-written probes: right memory first 65%
vs 30% for local TF-IDF (hit@8 95% vs 82.5%), median latency 562 ms vs 15 ms. past.dev's API
returns no price. Caveats: one run, hand-written probes favour semantic retrieval, no local
embedding baseline. See `experiments/memory-comparison/README.md`.

**Are recall queries meaningful?**
Not yet. Memory recall queries are fixed templates (`swarm.py` near line 1363), not the agent's
current idea. The Exa prior-art search does use the proposal's idea as its query (near line 1516).

**Does Exa change decisions?**
It shapes prompts, and SNAP/BREAKOUT moves must cite an existing source id. The effect on outcomes
is not measured. Exa source cards in the Lab resolve `S<n>` to the logged query and result; study
citations are mostly DOIs/URLs vetted separately, not Exa ids.

**What did a run cost?**
Ig Nobel run: 116 Kimi calls (498k prompt, 138k completion tokens), 119 Exa calls costing $0.761
(p50 414 ms), 157 past.dev recalls (p50 577 ms) and 123 writes; past.dev cost not reported by the
API. See `experiments/real-runs/ignobel/cost.json`.

## System

**Is the critic Kimi reviewing Kimi?**
In the published runs, yes (`critic_model` was not set). `--critic-model` now lets a different
model act as critic, and a "contradicted" verdict vetoes keeping a result.

**Is it autonomous? Is it self-improving?**
Autonomous within a fixed protocol: a deterministic host loop runs rounds, assigns roles from the
boredom meter, evaluates, keeps and resumes with no human. Cross-run lessons exist in code but were
not active in the reported runs, so we do not claim self-improvement.

**Can I reproduce the Pages replay?**
Functionally, yes; byte-for-byte, not yet. A build changed only the generated recording
`manifest.contentVersion` (`0a11e20ac256d6a4-v4` to `d8be0c94977fb5c8-v4`); regenerating the run
itself needs Tinker credit.

**What is novel versus AlphaEvolve, FunSearch, AI-Scientist, MAP-Elites?**
Islands, quality-diversity and novelty search are prior art. Our addition is a psychologically
motivated, deterministic boredom signal any agent can audit, plus a Lab that replays the full
agent trace. The descriptor space is hand-designed and LLM-self-labelled.

**One more day?**
Restore Tinker credit; committee-score the Ig Nobel studies; give S the same acceptance rule as the
swarm; run 6+ paired seeds with an output-based guard; add a local embedding baseline to the memory
comparison.

## Ten hard questions

1. **Did the run discover anything new?** No. The 10 current survivors are gate-passing
   correlations on public teaching datasets (Cars93, cats, sleepstudy, and others); these are known
   relationships, not discoveries.
2. **What is the preregistered Track-3 result?** Guard2 stopped early: guarded means B 0.259,
   S 0.241, A 0.111; seed 3001 had S 0.000 vs B 0.278. S leads only unguarded (0.352). The
   completed strict-guard ordering is S 0.296, A 0.093, B 0.056, but was headlined after that set
   finished. Minimum sign-flip p = 0.25 (complete strict-guard set) and 0.5 (guard2 primary);
   3 runs (orchestration seeds; Kimi sampling is not seeded), neither ordering is significant.
3. **Was the committee run on these studies?** No. The manifest's committee-scored string is
   false for this run: it stopped before committee scoring, and the records have no committee result.
4. **Why did a weak correlation pass?** The x/y coordinate study had ρ = 0.07, passed the old
   gates, and was registered twice. The |ρ| ≥ 0.1 threshold was added after the run; it is the
   failure case under today's rule.
5. **What is the contribution?** An instrumented, replayable research harness and explicit
   evaluation protocol—not evidence of superior scientific discovery.
6. **How strong is BixBench Mini?** One run, n = 7: baseline 1/7 and best 6/7, with overlapping
   Wilson intervals (0.026–0.513 and 0.487–0.974).
7. **Is Playworld a real benchmark result?** No. It is a synthetic proxy with 200 held-out seeds,
   not PlayWorld or Genie 3.
8. **Are the three runs independent model samples?** No. They are orchestration seeds; Kimi
   sampling is not seeded.
9. **Is Pages byte-reproducible?** No. It is functionally reproducible, but the generated
   `contentVersion` changed on rebuild as noted above.
10. **Did Exa improve outcomes?** No effect has been measured because there is no ablation.
    Committee HTTP 402 and missing-key cases fail loudly rather than producing a score; see
    `test_committee_http_error_is_a_grader_error_with_the_status` and
    `test_missing_tinker_key_raises_instead_of_changing_the_objective` in
    `tests/test_testcases.py`.
