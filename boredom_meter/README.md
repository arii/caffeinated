# Artificial Scientist Swarms: descriptor meter

The descriptor meter reads an ordered experiment ledger and a domain profile, then
reports boredom B, component metrics and a search regime. The [project README](../README.md#why-boredom)
explains the psychology analogy and verified references. B is an engineering
operationalization, not a psychologically validated measure of affect.

See [Boredom meter](../README.md#boredom-meter) for the complete LaTeX definitions and
the [backend reference](../docs/backend.md#formula-and-threshold-sources) for code locations.

## Inputs and scoring

The ledger is append-only JSONL. Eligible attempts have configured attempt statuses:
keep, discard, crash and duplicate by default. CPU baseline and candidate rows enter the archive;
critic rows and ordinary gate rejections do not enter B. Deterministic blob duplicates
are recorded with duplicate status and do enter B, even when detected by a failed gate.
Their cached scores cannot improve the frontier. Ordinary rejections remain auditable.

A profile defines descriptor levels and vocabulary, numeric parameter scales, objective
direction, epsilon, windows, thresholds and failure statuses. Scoring is a pure function
of ledger prefix and effective profile. Status and gate responses include their SHA-256
hashes. Hashes support recomputation, not authentication or honest-input guarantees.

### Distance and novelty

Distance is the weight of the first differing categorical level. If all categorical
levels agree, it is the residual parameter weight times mean parameter distance, rounded
to nine decimals. Missing parameters contribute one; empty parameter maps give zero.
Parameters support linear, log and ratio scales. Ratio scales compare clamped absolute
values through a logarithmic ratio; log scales clamp inputs before taking base-10 logs.

CPU profiles use mechanism/method weights 1 and 0.5, residual weight 0.25 and ratio 4.
Each attempt's novelty is its mean distance to the knn nearest descriptors in the
**preceding shared archive**, before adding the current descriptor. An empty archive
gives novelty one. N averages these values over the last k eligible attempts in scope.

### Components

| Quantity | Definition |
| --- | --- |
| Stagnation S | min(streak/patience, 1); a first frontier-eligible score or improvement strictly exceeding epsilon relative to the last significant best resets the streak |
| Failure rate | Fraction of the last k scoped attempts with a configured fail status; CPU profiles use crash |
| Trivial rate | Fraction with nearest preceding distance below trivial_distance (default 0.05) OR a configured trivial status (default duplicate) |
| Overload O | max(failure rate, trivial rate), an engineering proxy rather than cognitive load |
| Diversity | One minus the sum of squared top-level mechanism proportions over the scoped window; zero for an empty window |
| Frontier stall | Attempts since any strict valid raw-best improvement, independently of epsilon |

Only statuses in frontier_statuses can update significant/raw best: the default and all
three CPU profiles use keep. Discards and duplicates may carry finite scores but still
increment stagnation and frontier stall. Duplicate descriptors join the archive, participate
in future novelty calculations and always count as trivial, independently of their distance.
Fail status remains a separate test; CPU duplicates are not failures.

Default weights give:

`B = round(clip(0.45*(1-N) + 0.45*S + 0.10*O, 0, 1), 9)`.

Diversity is diagnostic, not a fourth B term. Status metrics are normally returned to six
decimals; regime comparisons use nine-decimal B. Empty status gives B=0, N=1 and EXPLOIT.

Worker windows contain only that worker's attempts, but novelty compares against the
shared archive. A global significant improvement resets every worker's streak; otherwise
only the acting worker's streak increments. Frontier stall and archive size remain global;
coverage is scoped. Global regime drives allocation. CPU worker slots execute sequentially.

## Regimes and gate

The fold evaluates these conditions in order:

1. A significant improvement selects EXPLOIT, even after convergence.
2. Existing CONVERGED persists otherwise.
3. Frontier stall at least three times patience and complete required top-level mechanism
   coverage selects CONVERGED.
4. Fewer than min_attempts eligible attempts selects EXPLOIT (default 3).
5. B at least 0.85 and frontier stall at least patience selects PARADIGM_BREAKOUT;
   an existing breakout also persists while B is at least 0.55.
6. B at least 0.70 selects BOREDOM_SNAP; an existing snap also persists while B
   is at least 0.55.
7. Otherwise select EXPLOIT.

There is no timed cooldown. Required mechanisms default to all top-level vocabulary
entries, including baseline. Convergence does not explicitly require an existing scored
best and is not proof of an optimum. The conductor stops at the next round boundary,
writes converged.json and publishes the terminal state; the pure meter/gate can still
be called separately.

Outside EXPLOIT/CONVERGED, the default gate requires distance at least 0.35 from the
last k shared attempts (except exploit-role workers), and at least 0.25 from all failed
or discarded attempts. Empty comparison sets impose no restriction. BREAKOUT also
requires a top-level mechanism absent from recent attempts. CONVERGED allows only
distance zero from an existing best descriptor. Profiles can override gate distances.
The root wrapper adds citation checks; arm A disables meter gating, and Exa-off removes
prior-art requirements. The legacy token/Jaccard helper is a separate scoring path.

## CLI

Run from the repository root with a fresh ledger. This complete example uses the
synthetic growth profile, which maximizes growth rather than minimizing CPU task score.

```sh
M="python3 boredom_meter/meter.py --profile boredom_meter/profiles/biolab_growth.json --ledger /tmp/meter-example.jsonl"
$M submit --event '{"agent":"explorer","status":"keep","score":0.61,"descriptor":{"hypothesis":"co_limitation","assay":"factorial_screen","params":{"nutrient":0.74,"oxygen":0.80}},"sources":[]}'
$M status
$M status --agent explorer
$M status --at 1
$M suggest --n 5
$M gate --descriptor '{"hypothesis":"co_limitation","assay":"growth_curve","params":{"nutrient":0.8,"oxygen":0.8}}'
$M trace --agent explorer
```

Submit accepts JSON on stdin or via --event, validates the descriptor, locks the ledger
and assigns the next sequence number. Concurrent writes are serialized by the lock;
replay follows assigned seq values. Commands return canonical JSON, but submitted values
are not universally rounded. A rejected gate returns exit code 1; invalid inputs return 2.
The gate CLI does not expose the Python API's role argument.

Exa and memory retrieval sit around the CPU scoring path, supplying sources and records
when requested by policy. Neither participates in computing descriptor B.

## Profiles and integration

| Profile | Levels | Objective |
| --- | --- | --- |
| [biolab_growth](profiles/biolab_growth.json) | hypothesis → assay; nutrient and oxygen | Synthetic growth, maximize |
| [compbio_pipeline](profiles/compbio_pipeline.json) | stage → method; resolution, fdr, n_hvg, mito_pct | Example validator score, maximize |
| [hadamard19](../testcases/hadamard19/boredom_profile.json) | mechanism → method; ratio-scaled value | Benchmark score, minimize |
| [bixbench_mini](../testcases/bixbench_mini/boredom_profile.json) | mechanism → method; ratio-scaled value | Benchmark score, minimize |
| [playworld_mini](../testcases/playworld_mini/boredom_profile.json) | mechanism → method; ratio-scaled value | Benchmark score, minimize |

CPU profiles use k=5, knn=3 and patience=5. Epsilon is 0.005 for Hadamard and
Playworld and 0.03 for BixBench. It is a configured significant-improvement threshold,
not necessarily an empirically estimated noise floor.

A new descriptor domain can use a new profile without changing meter scoring code.
A runnable task still needs an evaluator, candidate interface, sandbox inputs and
orchestrator integration; a profile alone does not implement an experiment.
Closed vocabularies make comparisons reproducible, but inaccurate descriptors can
misrepresent the work. There is no active free-text fallback.

## Verification and limits

```sh
.venv/bin/python -m unittest discover -s boredom_meter/tests
```

Tests cover determinism, prefix replay, worker scope, gating, descriptor validation,
concurrent submit and the CLI. The synthetic growth simulator is a scripted toy, not
evidence of real scientific performance. Historical replay claims dependent on removed
fixtures do not establish current CPU backend performance.

The separate Ig Nobel private meter has different inputs and policies; see the
[README comparison](../README.md#ig-nobel-a-different-private-meter).
