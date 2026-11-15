# Boredom Meter

A deterministic exploration controller for autonomous research agents and agent swarms. Any agent in a domain can call it, and every agent that reads the same ledger gets the same answer.

> In psychology, boredom is not laziness. It is the signal that pushes an agent to stop a routine that has stopped paying off and to look for something new.

Autonomous research loops tend to get stuck making small tweaks to their last working state. Multi-agent swarms tend to converge on the same idea. The Boredom Meter measures this from the experiment ledger and returns a score **B ∈ [0, 1]** and a **regime** that tells agents whether to keep refining or to explore.

---

## 1. The psychology

Four findings from psychology each map to one quantity we can measure:

| Theory | What boredom is | What we measure |
| :-- | :-- | :-- |
| **Meaning & Attentional Components (MAC) model** (Westgate & Wilson, 2018) | Boredom comes from two mismatches: an *attentional* one ("can I focus?", too much or too little demand) and a *meaning* one ("do I want to?", the activity no longer serves a valued goal). | Meaning gap → **stagnation**; attentional mismatch → **overload** |
| **Optimal arousal / sensation seeking** (Berlyne; Zuckerman) | Organisms keep novelty and complexity within a preferred band. When variation drops too low, they are driven to seek novel states. | Routine intolerance → **novelty deficit** |
| **Cognitive-attentional failure** (Eastwood et al., 2012) | Boredom is failing to stay engaged because the environment no longer gives informative feedback. Both repetition and chaos cause it. | Under-stimulation (repeats) **and** over-stimulation (failures) feed one U-shaped term |
| **Functional / "seeking state" theory** (Bench & Lench, 2013; 2019) | Boredom is a distinct "push" emotion that ends low-yield exploitation and starts a search for new goals, even uncomfortable ones. | The **regime switch**: EXPLOIT → BOREDOM_SNAP → PARADIGM_BREAKOUT |

Some machine-learning results point the same way. Count-based and novelty-search exploration (Tang et al. 2017; Lehman & Stanley 2011) reward visiting rarely seen states. Learning-progress curiosity (Oudeyer & Kaplan; Schmidhuber) treats a stall in progress as the cue to move on. Recent work on autonomous research loops finds **algorithmic mode collapse**: edits keep touching different lines while the *kind* of change narrows (He et al., 2026, "Beneath the Diff"). LLM committees behave similarly, with role-prompted agents giving nearly identical outputs (arXiv 2604.03809). That last result shapes the design most: **novelty must be measured over what an attempt *means*, not how its text looks.**

---

## 2. The measurement

### Inputs

Scoring uses only two inputs:

1. **Ledger**: an append-only JSONL file with one *attempt* per line, which every agent in the swarm shares.
   ```json
   {"seq": 17, "agent": "explorer", "status": "discard", "score": 0.612,
    "descriptor": {"hypothesis": "co_limitation", "assay": "factorial_screen",
                   "params": {"nutrient": 0.74, "oxygen": 0.80}},
    "sources": ["S12"]}
   ```
2. **Domain profile**: a versioned JSON file that defines the domain:
   - the descriptor hierarchy (`levels`) and its closed vocabulary (`vocab`);
   - numeric parameter ranges or scales;
   - the objective direction and the noise floor `eps`;
   - window `k`, `patience`, weights, thresholds, and failure statuses.

The scoring path never uses wall-clock time, the network, an LLM, embeddings, or randomness. **B is a pure function of (ledger prefix, profile).** Every response includes `ledger_sha256` and `profile_sha256`, so any agent can recompute a score and check it.

### Descriptor distance

Each attempt declares where it sits in the domain's *mechanism space*, using the vocabulary the profile defines. The distance between two attempts is hierarchical:

```
d(a, b) = level_weight[i]                          at the first level i where a and b differ
        = params_weight · mean_normalized_|Δparam| if every categorical level matches
```

For example, a different hypothesis gives 1.0, the same hypothesis with a different assay gives 0.5, and the same hypothesis and assay gives ≤ 0.25–0.5 depending on how far the parameters moved. Retuning the same knob is therefore never "novel", however different the text or diff looks.

### The four signals (rolling window of the last k attempts)

| Signal | Definition | Psychology |
| :-- | :-- | :-- |
| **Novelty** `N` | Mean over the window of each attempt's *sparseness*: its mean distance to its `knn` nearest neighbours in the **whole archive** (Lehman & Stanley). Using the whole archive means returning to an old basin, or to another agent's basin, counts as not novel. | Routine intolerance |
| **Stagnation** `S` | `min(1, attempts_since_significant_improvement / patience)`. An improvement counts only if it beats the best by more than `eps`, the noise floor (in a lab, set from replicate variance). | MAC meaning gap |
| **Overload** `O` | `max(fail_rate, trivial_rate)`. Failures are crashes, invalid results, QC failures, or contamination; trivial attempts are exact or near-exact repeats. | Eastwood U-shape |
| **Frontier stall** | Attempts since the best value changed at all. Used to gate PARADIGM_BREAKOUT. | Bench & Lench goal disengagement |

### Score and regimes

```
B = 0.45 · (1 − N) + 0.45 · S + 0.10 · O        (clamped to [0, 1])
```

| Regime | Condition | What agents must do |
| :-- | :-- | :-- |
| `EXPLOIT` | B < 0.70, during warm-up, or right after a significant improvement | Refine the current best locally. |
| `BOREDOM_SNAP` | B ≥ 0.70 (stays on until B < 0.55 or a significant improvement) | Micro-tweaks are rejected by the gate. Take an under-visited cell from `suggest`, check shared memory for prior failures, and ground the idea in literature. |
| `PARADIGM_BREAKOUT` | B ≥ 0.85 **and** frontier stall ≥ patience | Change the top-level mechanism (hypothesis family, pipeline stage, architecture family). Reusing a recent one is rejected. |

The regime is computed by folding over the ledger, so the hysteresis between regimes is deterministic too.

---

## 3. Use by a swarm

All commands print canonical JSON (sorted keys, floats rounded to 1e-6).

```bash
M="python3 boredom_meter/meter.py --profile boredom_meter/profiles/biolab_growth.json --ledger ledger.jsonl"
$M status                       # swarm-level B, regime, directive, hashes
$M status --agent explorer      # this agent's window, scored against the shared archive
$M status --at 42               # replay/verify: score the prefix up to seq 42
$M suggest --n 5                # least-visited (hypothesis/assay) cells, deterministic order
$M gate --descriptor '{"hypothesis":"co_limitation","assay":"growth_curve","params":{"nutrient":0.8,"oxygen":0.8}}'
echo '{"agent":"analyst","status":"keep","score":0.91,"descriptor":{...}}' | $M submit
```

- **One shared truth:** `submit` takes a file lock and assigns `seq`. Concurrent agents never collide, and the order is fixed by `seq` rather than arrival time.
- **Verifiable:** an agent that doubts another's claim ("we are in SNAP") can rerun `status --at <seq>` and compare hashes. A Byzantine agent cannot fake boredom.
- **Swarm vs. agent scope:** the swarm score drives global moves, such as the orchestrator launching a parallel divergent burst. The per-agent score catches one agent repeating work that others have already covered.
- **Exa and past.dev sit around the score, not inside it.** Exa search results and past.dev recall are ranked, time-varying retrieval, so they never feed into B. They are used *in response* to boredom: in SNAP or BREAKOUT an agent looks up literature with Exa (`sources` ids can be required by the gate) and recalls failed basins from past.dev before proposing. Attempts can also be mirrored to past.dev under a stable `id` so other agents and sessions can read them.

---

## 4. Domain profiles

A new domain needs only a profile, with no code changes:

| Profile | Levels | Objective |
| :-- | :-- | :-- |
| `profiles/biolab_growth.json` | hypothesis → assay, params `nutrient`, `oxygen` | growth (Little Sprout synthetic two-basin lab) |
| `profiles/compbio_pipeline.json` | pipeline stage → method, params `resolution`, `fdr`, `n_hvg`, `mito_pct` | deterministic in-loop validator (BixBench3-style reproduction) |
| `profiles/autoresearch_llm.json` | mechanism → method, param `value` (ratio scale) | val_bpb |

To build a good profile:
- Use a **closed vocabulary** so every agent describes the same idea the same way.
- Set `eps` to the measurement noise.
- Keep the objective deterministic and inside the loop. For hidden-ground-truth bio tasks, use a proxy validator and keep the audit metric separate.

---

## 5. Evidence so far

- **Replay of the Nov 14 autoresearch arms** (`replay_autoresearch.py`): The earlier token-diff meter scored novelty at 0.94–0.96 on routine knob changes and never went above B = 0.25. With mechanism descriptors and an `eps` noise floor, the control arm shows the expected plateau: B reaches the SNAP threshold at attempts 12–16 and again at 26. The control arm's "keep" runs at attempts 9 and 12 improved by at most 0.00013 bpb, below `eps` = 0.001, so the meter treats them as stagnation.
- **Synthetic bio-lab swarm** (`sim_biolab_swarm.py`, 3 scripted agents, 36 attempts, 20 seeds): the greedy swarm never left the local basin (mean best 0.611, global basin found 0/20). The swarm that followed the meter found the global basin in 20/20 seeds (median attempt 7, mean best 0.931). This is a scripted toy and the exploration targets are hand-placed; it shows the control loop works, not real biology.
- `python3 -m unittest discover -s boredom_meter/tests` covers determinism, order independence, prefix replay, per-agent scope, the gate, vocabulary checks, concurrent `submit`, and the CLI.

## 6. Open questions

- **Satiation:** after the best is found, the meter stays in SNAP (exploring) until the budget runs out. A "converged" state for when every cell has been visited and B stays high would save compute.
- **Free-text fallback:** for agents that cannot fill in a descriptor, use deterministic shingle/MinHash similarity over a normalized description. It is less faithful than descriptors, so keep it as a fallback only.
- **Calibration:** set `eps` from replicate runs, and `patience` and `k` from the cost of a single experiment.

## References

- Westgate & Wilson (2018). *Boring thoughts and bored minds: The MAC model of boredom and cognitive engagement.* Psychological Review. doi:10.1037/rev0000097
- Eastwood, Frischen, Fenske & Smilek (2012). *The unengaged mind: Defining boredom in terms of attention.* Perspectives on Psychological Science.
- Bench & Lench (2013). *On the function of boredom.* Behavioral Sciences. PMC4217586. Bench & Lench (2019). *Boredom as a seeking state.* Emotion. doi:10.1037/emo0000433
- Berlyne (1960). *Conflict, Arousal, and Curiosity.* Zuckerman (1979). *Sensation Seeking.*
- Lehman & Stanley (2011). *Abandoning objectives: Evolution through the search for novelty alone.*
- Tang et al. (2017). *#Exploration: A study of count-based exploration for deep RL.* NeurIPS.
- Oudeyer & Kaplan (2007). *What is intrinsic motivation?* Schmidhuber (2009). *Driven by compression progress.* arXiv:0812.4360
- Mouret & Clune (2015). *Illuminating search spaces by mapping elites* (MAP-Elites).
- He et al. (2026). *Beneath the Diff: Algorithmic mode collapse in code-level autonomous research loops.* arXiv:2609.00077
- Chen et al. (2025). *HypoSpace: Evaluating LLM creativity as set-valued hypothesis generators.* arXiv:2510.15614
- BixBench3 (Edison Scientific, 2026). arXiv:2608.25286, deterministic artifact grading.
