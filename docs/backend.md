# Backend reference: implementation map and formula sources

This reference locates the code, formulas and thresholds described in the
[backend entry point](../README.md#boredom-meter).
Local line numbers refer to upstream source baseline `a3c21cc`, merged in `58ff460`.
Ig Nobel citations retain pinned main revision `be658b6`; PR refs describe separate
implementations, not the CPU backend.

## Implementation map

README explains the design; this map locates the code that defines behavior.

| Surface | Modules and symbols | Responsibility |
| --- | --- | --- |
| Human protocol and roles | `program.md`, `prompts/`, `llm.py:69-80` | Shared protocol and scout/worker/critic templates |
| Allocation and assignment data | `swarm.py:160-244,374-426` | Four slots, fixed A control, meter-driven B, frustration/stuck_cells, shadow-only recalled A assignments |
| Orchestration | `swarm.py:1980-2437` | Scored baseline, proposals, bounded repairs, evaluation, confirmation, known-optimum checks and artifacts |
| Deterministic scoring | `swarm.py:993-1045,1048-1095,1098-1115,1669-1677` | Blob cache, same-round deduplication, reused confirmation score, duplicate ledger metadata |
| Convergence stop | `swarm.py:691-693,696-722` | Known target plus 1e-9, reason and terminal run metadata; called before assignments and after each round, including final round |
| Worker cell search | `swarm.py:501-507,516-530,1126-1559` | Suggested/assigned directions, public task inputs, at most two searches and worker-cited sources only |
| Critic and novelty | `swarm.py:548-554,557-596,599-654` | Identical arm-independent critic in A/B; novelty audit never changes B or numeric acceptance |
| Vocabulary extensions | `swarm.py:657-668,671-688` | other/slug logging and prompt vocabulary without profile mutation |
| Replay compatibility | `export_viewer.py:276-1025,1536-1541,1667-1684`; `viewer/app.py:38-47,152-197` | Duplicate normalization, activity wire token, frustration components, conditional baseline fallback and UTC selectors |
| Model inference | `llm.py:366-441,443-473` | Stateless sampling, keyed seeds and parsing |
| Grounding | `research.py`, `boredom.run_gate` | Exa query/source/extract records, prior-art and citation audit |
| Memory scope | `memory.py:157-168,773-797,800-827,843-1006` | Same-task/arm cross-run lessons/verdicts/failed results, filtered same-run mirror supplement before limit, localSameRun JSON |
| Candidate boundary | `testcases/sandbox.py`, each task's `evaluate.py` | Docker resource/isolation settings and trusted output grading |
| Run metadata and publication | `swarm.py:1926-1947,1950-1952,1955-1977,2440-2461` | Redacted arguments, round/final export and terminal status; run setup in _orchestrate |
| Export and publish | `export_viewer.py:213-233,236-273,1725-1737,1775-1836` | Profile reconstruction, prefix checks, artifact copies and atomic per-file updates |
| HTTP and SSE | `viewer/app.py:79-590`; `viewer/__main__.py` | Read-only routes, caching, path confinement, byte-offset stream resume and partial-line buffering |
| Paired A/B harness | `experiments/ab.py:106-238,305-451`; `experiments/analyze_ab.py:123-196` | Isolated clones/local memory, concurrent arms, accounting and per-task paired statistics |
| Locked setup | `Makefile:1-33`, `scripts/setup.sh:1-22`, `pyproject.toml`, `uv.lock` | Generated requirements, existing-venv reuse, uv or venv/pip setup |
| Main study execution | `be658b6:ignobel/lab.py:103-111`, `_run_modal` | Modal CPU study sandbox with timeout and network blocking |
| Separate community | `be658b6:ignobel/run_arm.py:22-46` | Main arms, policy and memory selection |
| Unmerged community policy | `origin/pr7:ignobel/boredom.py`, `policy.py` | Private meter, frustration, cooldown and yoked exploration |
| Unmerged family population | `origin/pr8:ignobel/families.py`, `world.py` | Mothers, daughters, private data and spawning |

The default CPU profiles minimize score. Eligible baseline/candidate statuses are keep,
discard, crash and duplicate, never critic rows. Gate rejections are audit-only except
blob duplicates, which enter B even when rejected by the gate. Only keep scores update
significant/raw best. Duplicates always count as trivial and cannot move the frontier.

CPU patience is three distinct round keys since significant improvement, excluding that
improvement's own round. Sub-epsilon raw best updates do not reset round stall. Windows
remain five attempts. Worker stagnation keys are scoped; significant progress resets all
workers. Frustration is the shared failure fraction, not an added B term; failure still
enters overload. Stuckness is per-cell recent failure history, independent of B/regime.

Replay fallback reads optional manifest.baseline, but build does not emit that field
(`export_viewer.py:1547-1664,1667-1684`). Normal keyframes retain baseline;
seeking without them can return null. The API regression fixture explicitly supplies the
otherwise absent field (`tests/test_viewer_api.py:136-146`).

## Formula and threshold sources

| Formula / threshold | Exact source |
| --- | --- |
| Defaults: patience unit, weights, thresholds, warmup, triviality, stuck validation | `boredom_meter/meter.py:33-60` |
| other/slug validation; parameter clamps/scales; hierarchical distance and sparseness | `boredom_meter/meter.py:77-90,93-118,121-142,145-154,157-163` |
| Improvement direction/margin and frontier eligibility | `boredom_meter/meter.py:166-169,172-178` |
| Diversity and eligible attempts | `boredom_meter/meter.py:181-188,191-196` |
| Patience round/seq keys; stuck predicate and suggestion sorting | `boredom_meter/meter.py:199-206,209-223,394-419` |
| Significant/raw best, round resets, scoped windows, rates, frustration, B and regime precedence | `boredom_meter/meter.py:226-337` |
| Six-decimal rounding, empty defaults and stuck_cells in status | `boredom_meter/meter.py:29-30,340-374` |
| Distance/coverage/convergence gates and unconditional stuck rejection | `boredom_meter/meter.py:422-477` |
| CPU version, eps, round patience, stuck, level weights, ratio and statuses | `testcases/hadamard19/boredom_profile.json:1-77`; `testcases/bixbench_mini/boredom_profile.json:1-76`; `testcases/playworld_mini/boredom_profile.json:1-77` |
| Allocation cutoff and slot counts | `swarm.py:160-244` |
| Accept margin, provisional inequality, confirmation mean | `swarm.py:1562-1563,1566-1567,1570-1575` |
| Determinism and Hadamard known optimum | All three `testcases/*/task.json:3`; `testcases/hadamard19/task.json:4`; `swarm.py:691-693,1669-1677` |
| Four-column results | `swarm.py:251-268`; `testcases/run_task.py`; `memory.RESULT_COLUMNS` |
| Main Ig Nobel similarity/gap/unsurprise/failure/B and rounding | `be658b6:ignobel/boredom.py:15-58` |
| Main snap threshold override / policy default | `be658b6:ignobel/config.yaml:2`; `be658b6:ignobel/run_arm.py:37-40`; `be658b6:ignobel/policy.py:18-24` |
| #7 baseline, self_repeat, familiarity, gap, unsurprise, frustration | `origin/pr7:ignobel/boredom.py:27-97` |
| #7 progress, stall, weighted B, rounding | `origin/pr7:ignobel/boredom.py:110-144` |
| #7 weights and every private-policy threshold | `origin/pr7:boredom_meter/profiles/ignobel.json:24-37` |
| #7 jitter, convergence, cooldown, snap and window reset | `origin/pr7:ignobel/policy.py:39-105` |
| #8 family mean-B threshold, cooldown, cap and founding count | `origin/pr8:ignobel/config.yaml:8-11`; `origin/pr8:ignobel/world.py:301-311` |
