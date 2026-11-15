# Judge Q&A: artificial scientist swarm

Prepared answers to the hardest questions from two hostile-judge reviews. Every number links to a
committed artifact. Where the answer is unfavourable we say so.

## Results

**Does the swarm beat a single agent?**
Not shown. On 18 held-out `bixbench_numeric` questions over 3 seeds, the single agent (arm S) scored
0.296, the swarm without the meter (A) 0.093 and the boredom swarm (B) 0.056 under the final grader.
That ordering depends on a grader tolerance fix (`a0d4fcd`) made after the winners were known; under
the earlier grader (`c31ab55`) it is A 0.093, B 0.056, S 0.074. n = 3 pairs, so the smallest
achievable two-sided sign-flip p is 0.25. S also had no critic or confirmation step. We call the
whole set exploratory after deviations. See `experiments/confirmatory/RESULTS.md` and
`experiments/confirmatory/results/heldout_by_grader.tsv`.

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
21 registered (the raw log has 22 lines because one study was registered twice), 13 run,
11 passed the preregistered gates (p < .005 plus split-half consistency), 10 still pass under
today's |ρ| ≥ 0.1 effect-size rule. No multiplicity correction was applied; Bonferroni at .005/21
would still pass most because n is large and effects are textbook-sized.

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
Partly. The proposal-time recall uses the agent's idea as the query (`swarm.py` near line 1516),
but per-round context recalls are templated strings (`swarm.py` near line 1363).

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
Yes: `npm run build:pages` rebuilds the static, replay-only site from the committed real recording.
Regenerating the run itself needs Tinker credit.

**What is novel versus AlphaEvolve, FunSearch, AI-Scientist, MAP-Elites?**
Islands, quality-diversity and novelty search are prior art. Our addition is a psychologically
motivated, deterministic boredom signal any agent can audit, plus a Lab that replays the full
agent trace. The descriptor space is hand-designed and LLM-self-labelled.

**One more day?**
Restore Tinker credit; committee-score the Ig Nobel studies; give S the same acceptance rule as the
swarm; run 6+ paired seeds with an output-based guard; add a local embedding baseline to the memory
comparison.
