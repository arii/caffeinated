# Boredom: definition and representation

In psychology, boredom is not laziness. It is the signal that a routine has
stopped paying off and that it is time to look for something new (Westgate &
Wilson 2018; Eastwood et al. 2012; Bench & Lench 2013). Caffeinated turns that
signal into a measured quantity that steers an Artificial Scientist Swarm.

**Definition.** Boredom `B ∈ [0, 1]` is a deterministic function of
*(ledger prefix, domain profile)*. It is high when recent attempts mean the
same thing as earlier ones, when nothing has significantly improved for a while,
and when attempts keep failing or repeating. It is never an LLM opinion: no
clock, network, embedding, or randomness is read on the scoring path, so any
agent can recompute any other agent's B and check the hashes.

The background, citations and evidence are in
[`boredom_meter/README.md`](../boredom_meter/README.md). This page states
exactly what the code computes (`boredom_meter/meter.py`, `fold()`).

## 1. What is measured: the attempt descriptor

Every attempt is placed in the domain's *mechanism space* with a descriptor
from the profile's closed vocabulary:

```json
{"mechanism": "search", "method": "tabu", "params": {"value": 4000}}
```

Workers must declare one (`Descriptor:` commit trailer); the gate rejects
unknown vocabulary. Distance is hierarchical, so re-tuning a knob is never
novel, however different the diff looks:

```
d(a, b) = level_weights[i]                         first level i where a and b differ
        = params_weight · mean normalized |Δparam|  if every categorical level matches
```

For `hadamard19`: different mechanism = 1.0, same mechanism and different
method = 0.5, same cell = at most 0.25 depending on the parameter change.

## 2. Components

Computed over a rolling window of the last `k` attempts (scope = swarm, or
one agent's attempts scored against the shared archive):

| Component | Definition | Psychology |
|---|---|---|
| `novelty` N | mean sparseness: each attempt's mean distance to its `knn` nearest neighbours in the **whole archive**, all agents | routine intolerance (Berlyne, Zuckerman) |
| `stagnation` S | `min(1, units_since_significant_improvement / patience)`; a unit is an attempt or a ledger round (`patience_unit`; the three benchmarks use rounds); significant = beats the best by more than `eps` (noise floor) | MAC meaning gap |
| `frustration` | share of failed attempts (`fail_statuses`) in the last `k`; reported next to B, not part of it | D'Mello & Graesser: frustration is distinct from boredom |
| `fail_rate` | crashes / invalid in the window | over-stimulation |
| `trivial_rate` | attempts within `trivial_distance` of an earlier one | under-stimulation |
| `overload` O | `max(fail_rate, trivial_rate)` | Eastwood U-shape |
| `diversity` | Simpson index of top-level mechanisms in the window | reported only |
| `frontier_stall` | attempts since the best changed at all | goal disengagement |

```
B = w1·(1 − N) + w2·S + w3·O,   default weights (0.45, 0.45, 0.10), clamped to [0, 1]
```

## 3. Regimes (policy)

Measurement and policy are separate: the components above are measurements;
the regime is a hysteretic state machine folded over the ledger in `seq` order.
Default thresholds: snap 0.70, breakout 0.85, exit 0.55.

| Regime | Entered when (checked in this order) | Effect on the swarm |
|---|---|---|
| `EXPLOIT` | a significant improvement just happened, or fewer than `min_attempts` | 3 exploit + 1 divergent worker |
| `CONVERGED` | `frontier_stall ≥ 3·patience` **and** every required mechanism was tried; sticky until a significant improvement | gate allows only exact re-runs of the best (confirmation) |
| `PARADIGM_BREAKOUT` | `B ≥ 0.85` and `frontier_stall ≥ patience` (stays while `B ≥ 0.70`) | 4 divergent workers; gate requires a top-level mechanism unused in the last `k` attempts |
| `BOREDOM_SNAP` | `B ≥ 0.70` | 1 exploit + 3 divergent; gate rejects divergent ideas that near-duplicate recent attempts |
| (hold) | previous regime ≠ EXPLOIT and `B ≥ 0.55` | stay in the current regime |
| `EXPLOIT` | otherwise | |

In SNAP and BREAKOUT the gate also rejects ideas too close to a failed or
discarded attempt. In every non-EXPLOIT regime, when the profile sets
`require_sources`, it rejects ideas that cite no Exa source. `suggest` returns the least-visited cells (failures count
against a cell) so bored agents get concrete, deterministic targets.

Exa and past.dev sit *around* the score, never inside it: they are ranked,
time-varying retrieval, used **in response** to boredom (find a grounded new
direction, recall failed basins) rather than as inputs to B.

The Ig Nobel task (`swarm.py --task ignobel`) uses the same meter and regimes
with its own profile, `testcases/ignobel/boredom_profile.json` (field ×
study-type cells).

## 4. Representation

### In the ledger and logs

| File | Record |
|---|---|
| `ledger.jsonl` | one attempt per line: `seq`, `agent`, `status`, `score`, `descriptor`, `sources`, `ts` |
| `boredom_log.jsonl` | swarm status after each round: every component, regime, `ledger_sha256`, `profile_sha256` |
| `assignments.jsonl` | per round: `swarm_B`, `regime`, `per_agent_B`, `per_agent_boredom` (all components), roles, scouts, rationale |

Reproduce any value with
`python3 boredom_meter/meter.py --profile <p> --ledger ledger.jsonl status --at <seq> [--agent worker-2]`.

### In the viewer model (`swarm-viewer/v1`)

```ts
boredom: {
  B: number            // 0..1
  regime: string       // EXPLOIT | BOREDOM_SNAP | PARADIGM_BREAKOUT | CONVERGED | FRUSTRATED
  components: Record<string, number>   // novelty, stagnation, overload, fail_rate, ...
  shadow: boolean      // measured but not acted on (arm A)
  measured_tick: number
}
```

It appears on the swarm (`world.swarm.B`, `regime`, `frontier_stall`), on
every agent (`world.agents[].boredom`), as `boredom.measured` events, as
`series.swarm_B` / `series.agent_B` in the timeline, and as `regime_change`
markers. Older runs only logged per-agent B, so their `components` are partial.
