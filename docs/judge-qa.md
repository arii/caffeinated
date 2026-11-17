# Judge Q&A: artificial scientist swarm

Recording scope: the pre-committee replay counts and answers below refer to the older `out-ignobel` run, not the default ZIP run 3. Separate [IgJudge rankings for ZIP-run ideas](../data/igjudge/ignobel-real-runs/results-zip.md) are published; rankings are not a prize award.

Prepared answers to the hardest questions from two hostile-judge reviews. Every number links to a
committed artifact. Where the answer is unfavourable we say so.

## Results

**Does the swarm beat a single agent?**
No consistent winner is shown. Preregistered primary (guard2, stopped early, guarded): B 0.26 >
S 0.24 > A 0.11. Complete strict-guard set, picked after it finished: S 0.30 > A 0.09 > B 0.06.
The smallest observed sign-flip p (with 3 paired runs the smallest attainable is 0.25) is 0.25
(complete strict-guard set) and 0.5 (guard2 primary); 3 runs (orchestration seeds; Kimi sampling
is not seeded), neither ordering is significant.
B leads S on mean only because S scored 0 on run 3001, where the guard rejected its candidate for
the known integer-loop-bound false positive (unguarded 0.333); S beats B on the other two runs.
The strict-set ordering depends on a grader tolerance fix (`a0d4fcd`) made after the winners were
known; under the earlier grader the means were A 0.093, B 0.056, S 0.074. S also had no critic or
confirmation step. See
`experiments/confirmatory/RESULTS.md` and `experiments/confirmatory/results/heldout_by_grader.tsv`.

**Does the boredom meter help?**
B vs A is mixed: B is last in the complete strict-guard set (0.056 vs A 0.093) but ahead of A in
the preregistered primary (guarded 0.259 vs 0.111; unguarded 0.259 vs 0.222, with B > A on 1 run,
A > B on 1, tied on 1). B's best candidate gets 1/18 held-out on every run under the final grader.
hadamard29 is a 1–1–1 tie at the common completed round; B used about 1.75× the tokens on BixBench.

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
"Pre-committee run: loss 0 = passed preregistered gates". No prize has been awarded; the Lab shows
an empty pre-committee podium and explains how the committee will score studies.

**How many tests, and how many held up?**
21 registered, 13 run, 11 passed the preregistered gates, and 10 also pass the |ρ| ≥ 0.1 floor
added after the run. The ρ = 0.07 x/y coordinate study is the failure case; it also appears as a
second confirmed row because the critic re-ran it (a `study.replicated` event), not as a separate
test. These are gate-passing correlations on public teaching datasets (Cars93, cats, sleepstudy,
and others): known relationships, none novel. No multiplicity correction was applied; the largest
confirmed main-test p is approximately 3.4e-7 (3.39e-7 for shell distance).
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
It shapes prompts, and SNAP/BREAKOUT moves must cite an existing source id, but Exa had no measured
effect (no ablation). The same “Orca Vocalizations” paper appears as six Exa source cards (S51, S71,
S92, S116, S128, S146), so source-card counts overstate distinct sources. Exa source cards in the
Lab resolve `S<n>` to the logged query and result; study citations are mostly DOIs/URLs vetted
separately, not Exa ids.

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
Yes. Two clean builds and the committed `docs/` are byte-identical by `cmp`; the deterministic
`contentVersion` is recorded in the generated catalog at build time.

**What is novel versus AlphaEvolve, FunSearch, AI-Scientist, MAP-Elites?**
Islands, quality-diversity and novelty search are prior art. Our addition is a psychologically
motivated, deterministic boredom signal any agent can audit, plus a Lab that replays the full
agent trace. The descriptor space is hand-designed and LLM-self-labelled.

**One more day? (Hackathon-time answer, November 2026)**

This answer records the event-time plan. The current [roadmap](roadmap.md) uses Devin sessions only and does not resume paid model runs.

Restore Tinker credit; committee-score the Ig Nobel studies; give S the same acceptance rule as the
swarm; run 6+ paired seeds with an output-based guard; add a local embedding baseline to the memory
comparison.

## Ten hard questions

1. **Did the run discover anything new?** No. The 10 survivors are gate-passing correlations on
   public teaching datasets (Cars93, cats, sleepstudy, and others); these are known relationships,
   none novel.
2. **What is the preregistered Track-3 result?** Guard2 stopped early: guarded means B 0.259,
   S 0.241, A 0.111; run 3001 had S 0.000 vs B 0.278 after the guard rejected S for the known
   integer-loop-bound false positive (`bix-52-q3`, `heldout_status crash`; unguarded 0.333); S beats
   B on the other two runs and leads only unguarded (0.352). The complete strict-guard ordering is
   S 0.296, A 0.093, B 0.056, picked after that set finished. The smallest observed sign-flip p
   (with 3 paired runs the smallest attainable is 0.25) is 0.25 (complete strict-guard set) and
   0.5 (guard2 primary); 3 runs (orchestration seeds; Kimi sampling is not seeded), neither
   ordering is significant.
3. **Was the committee run on these studies?** No. The recording stopped before committee scoring;
   it contains no committee result or award event.
4. **Why did a weak correlation pass?** The x/y coordinate study had ρ = 0.07 and passed the
   preregistered gates; the |ρ| ≥ 0.1 floor was added after the run, so it fails that post-hoc floor.
   It also appears as a second confirmed row because the critic re-ran it (a `study.replicated`
   event), not as a separate test. The Pima `bmi~skin` hypothesis was rejected on Pima.tr
   (citations `10.1079/BJN19910073` and `10.1109/SCAMC.1988.117514`), then the same hypothesis
   was re-run on Pima.te, where it passed (citations `10.1002/bdm.414` and
   `10.1046/j.1360-0443.2002.00163.x`); that repeat is close to tautological.
5. **What is the contribution?** An instrumented, replayable research harness and explicit
   evaluation protocol—not evidence of superior scientific discovery.
6. **How strong is BixBench Mini?** One run, n = 7: baseline 1/7 and best 6/7, with overlapping
   Wilson intervals (0.026–0.513 and 0.487–0.974). The committed
   `experiments/real-runs/bixbench_mini-v2/held_out_test.json` predates the commit/grader
   fingerprint fields, so its grader version is established by commit history, not by that
   artifact. Its “17-question subset” proxy note refers to the whole mini set; 7 questions were
   held out.
7. **Is Playworld a real benchmark result?** No. It is a synthetic proxy with 200 held-out seeds,
   not PlayWorld or Genie 3.
8. **Are the three runs independent model samples?** No. They are 3 runs (orchestration seeds;
   Kimi sampling is not seeded).
9. **Is Pages byte-reproducible?** Yes. Two clean builds and committed `docs/` were byte-identical
   by `cmp`; `contentVersion` is recorded at build time.
10. **Did Exa improve outcomes?** No effect has been measured because there is no ablation. The
    same “Orca Vocalizations” paper appears as six Exa source cards (S51, S71, S92, S116, S128,
    S146), so source-card counts overstate distinct sources.
    Committee HTTP 402 and missing-key cases fail loudly rather than producing a score; see
    `test_committee_http_error_is_a_grader_error_with_the_status` and
    `test_missing_tinker_key_raises_instead_of_changing_the_objective` in
    `tests/test_testcases.py`.
