# Backend reference: implementation map and formula sources

This reference locates the code, formulas and thresholds described in the
[backend entry point](../README.md#boredom-meter).
Local line numbers refer to upstream source baseline `1ed1426`, merged in `8ab9677`.
Ig Nobel citations retain pinned main revision `be658b6`; PR refs describe separate
implementations, not the CPU backend.

## Implementation map

README explains the design; this map locates the code that defines behavior.

| Surface | Modules and symbols | Responsibility |
| --- | --- | --- |
| Human protocol and roles | `program.md`, `prompts/`, `llm.py:68-79` | Shared protocol and scout/worker/critic templates |
| Allocation and assignment data | `swarm.py:158-249,383-435` | Four slots, fixed A control, meter-driven B, frustration/stuck_cells, shadow-only recalled A assignments |
| Orchestration | `swarm.py:1923-2376` | Scored baseline, proposals, bounded repairs, evaluation, confirmation, known-optimum checks and artifacts |
| Deterministic scoring | `swarm.py:988-1034,1037-1082,1085-1098,1623-1631` | Blob cache, same-round deduplication, reused confirmation score, duplicate ledger metadata |
| Convergence stop | `swarm.py:683-685,688-713` | Known target plus 1e-9, reason and terminal run metadata; called before assignments and after each round, including final round |
| Worker cell search | `swarm.py:510-516,528-542,1109-1508` | Suggested/assigned directions, public task inputs, at most two searches and worker-cited sources only |
| Critic and novelty | `swarm.py:560-566,569-600,603-654` | Identical arm-independent critic in A/B; novelty audit never changes B or numeric acceptance |
| Vocabulary extensions | `swarm.py:657-666,669-680` | other/slug logging and prompt vocabulary without profile mutation |
| Replay compatibility | `export_viewer.py:234-592,854-859,936-952`; `viewer/app.py:34-43,140-177` | Duplicate normalization, activity wire token, frustration components, conditional baseline fallback and UTC selectors |
| Model inference | `llm.py:371-443,445-473` | Stateless sampling, keyed seeds and parsing |
| Grounding | `research.py`, `boredom.run_gate` | Exa query/source/extract records, prior-art and citation audit |
| Memory scope | `memory.py:158-169,784-808,811-838,854-1006` | Same-task/arm cross-run lessons/verdicts/failed results, filtered same-run mirror supplement before limit, localSameRun JSON |
| Candidate boundary | `testcases/sandbox.py`, each task's `evaluate.py` | Docker resource/isolation settings and trusted output grading |
| Run metadata and publication | `swarm.py:1875-1896,1899-1901,1904-1920,2379-2400` | Redacted arguments, round/final export and terminal status; run setup in _orchestrate |
| Export and publish | `export_viewer.py:173-193,196-231,983-995,1031-1086` | Profile reconstruction, prefix checks, artifact copies and atomic per-file updates |
| HTTP and SSE | `viewer/app.py:73-444`; `viewer/__main__.py` | Read-only routes, caching, path confinement, byte-offset stream resume and partial-line buffering |
| Paired A/B harness | `experiments/ab.py:70-155,204-295`; `experiments/analyze_ab.py:91-149` | Isolated clones/local memory, concurrent arms, accounting and per-task paired statistics |
| Locked setup | `Makefile:1-11`, `scripts/setup.sh:1-22`, `pyproject.toml`, `uv.lock` | Generated requirements, existing-venv reuse, uv or venv/pip setup |
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
(`export_viewer.py:864-933,936-952`). Normal keyframes retain baseline;
seeking without them can return null. The API regression fixture explicitly supplies the
otherwise absent field (`tests/test_viewer_api.py:122-130`).

## Formula and threshold sources

| Formula / threshold | Exact source |
| --- | --- |
| Defaults: patience unit, weights, thresholds, warmup, triviality, stuck validation | `boredom_meter/meter.py:33-57` |
| other/slug validation; parameter clamps/scales; hierarchical distance and sparseness | `boredom_meter/meter.py:74-81,84-109,112-133,136-143,146-152` |
| Improvement direction/margin and frontier eligibility | `boredom_meter/meter.py:155-158,161-167` |
| Diversity and eligible attempts | `boredom_meter/meter.py:170-177,180-182` |
| Patience round/seq keys; stuck predicate and suggestion sorting | `boredom_meter/meter.py:185-192,195-209,350-367` |
| Significant/raw best, round resets, scoped windows, rates, frustration, B and regime precedence | `boredom_meter/meter.py:212-312` |
| Six-decimal rounding, empty defaults and stuck_cells in status | `boredom_meter/meter.py:29-30,315-331` |
| Distance/coverage/convergence gates and unconditional stuck rejection | `boredom_meter/meter.py:370-411` |
| CPU version, eps, round patience, stuck, level weights, ratio and statuses | `testcases/hadamard19/boredom_profile.json:1-77`; `testcases/bixbench_mini/boredom_profile.json:1-76`; `testcases/playworld_mini/boredom_profile.json:1-77` |
| Allocation cutoff and slot counts | `swarm.py:158-249` |
| Accept margin, provisional inequality, confirmation mean | `swarm.py:1511-1512,1515-1516,1519-1525` |
| Determinism and Hadamard known optimum | All three `testcases/*/task.json:3`; `testcases/hadamard19/task.json:4`; `swarm.py:683-685,1623-1631` |
| Four-column results | `swarm.py:256-273`; `testcases/run_task.py`; `memory.RESULT_COLUMNS` |
| Main Ig Nobel similarity/gap/unsurprise/failure/B and rounding | `be658b6:ignobel/boredom.py:15-58` |
| Main snap threshold override / policy default | `be658b6:ignobel/config.yaml:2`; `be658b6:ignobel/run_arm.py:37-40`; `be658b6:ignobel/policy.py:18-24` |
| #7 baseline, self_repeat, familiarity, gap, unsurprise, frustration | `origin/pr7:ignobel/boredom.py:27-97` |
| #7 progress, stall, weighted B, rounding | `origin/pr7:ignobel/boredom.py:110-144` |
| #7 weights and every private-policy threshold | `origin/pr7:boredom_meter/profiles/ignobel.json:24-37` |
| #7 jitter, convergence, cooldown, snap and window reset | `origin/pr7:ignobel/policy.py:39-105` |
| #8 family mean-B threshold, cooldown, cap and founding count | `origin/pr8:ignobel/config.yaml:8-11`; `origin/pr8:ignobel/world.py:301-311` |
