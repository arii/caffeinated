# Backend reference: implementation map and formula sources

This reference locates the code, formulas and thresholds described in the
[backend entry point](../README.md#boredom-meter).
Line numbers refer to source baseline `1cc62b0` unless a remote ref is stated.

## Implementation map

README explains the design; this map locates the code that defines behavior.
Line numbers below refer to source baseline `1cc62b0`; the documentation was
audited after merging that baseline into `8caf33d`. Ig Nobel citations use pinned main revision
`be658b6`; PR refs describe separate implementations.

| Surface | Modules and symbols | Responsibility |
| --- | --- | --- |
| Human protocol and roles | `program.md`, `prompts/common.md`, `llm.render_prompt` | Human instructions and scout/worker/critic templates |
| Allocation | `swarm.py:158-247`, `allocate_roles` | Four slots, scout counts, per-agent priority |
| Orchestration | `swarm.py:1634-2104`, `_orchestrate` | Baseline, proposals, bounded repairs, evaluations, confirmation, artifacts |
| Deterministic scoring | `swarm.py:742-853,1339-1374` | Blob gate/cache, same-round deduplication, reused critic score and duplicate ledger metadata |
| Convergence stop | `swarm.py:1746-1767` | Stop before assignments, write converged.json and mark run metadata |
| Replay compatibility | `export_viewer.py:476-523,853-859,935-951`; `viewer/app.py:34-43,140-177,395-445` | Duplicate normalization, activity wire token, conditional baseline fallback, UTC selectors and incremental SSE |
| Model inference | `llm.py:331-433`, `_tinker_completion`, `_request_tinker` | Stateless sampling and parsing |
| Grounding | `research.py`, `boredom.run_gate` | Exa query/source/extract records and citation audit |
| Memory | `memory.arm_run_scope`, `ensure_arm_audience`, `scoped_pastdev_response` | Local mirror, per-arm audience and run filtering |
| Candidate boundary | `testcases/sandbox.py`, each task's `evaluate.py` | Docker resource/isolation settings and trusted output grading |
| Run metadata | `swarm.py:1586-1631,1671-1680`, `redact_command`, `_write_run_artifact` | Redacted arguments, profile copy, starting revision, status |
| Round/final publish | `swarm.py:1615-1631,2088,2107-2128` | Nonfatal publish wrapper, round hook and finalization |
| Export and publish | `export_viewer.py:173-232,982-1086` | Profile reconstruction, prefix checks, artifact copies and atomic per-file updates |
| HTTP and SSE | `viewer/app.py:73-447`, `create_app`; `viewer/__main__.py` | Read-only routes, caching, path confinement and stream resume |
| Main study execution | `be658b6:ignobel/lab.py:103-111`, `_run_modal` | Modal CPU study sandbox with timeout and network blocking |
| Separate community | `be658b6:ignobel/run_arm.py:22-46` | Main arms, policy and memory selection |
| Unmerged community policy | `origin/pr7:ignobel/boredom.py`, `policy.py` | Private meter, frustration, cooldown and yoked exploration |
| Unmerged family population | `origin/pr8:ignobel/families.py`, `world.py` | Mothers, daughters, private data and spawning |

The default CPU profiles all minimize score. Eligible attempt statuses include
baseline/candidate keep, discard, crash and duplicate, never critic rows. Ordinary gate
rejections are audit-only; deterministic blob duplicates enter B even when the gate rejects
the blob. Only keep scores update significant/raw best. Duplicates count as trivial regardless
of descriptor distance, increment streak/stall and cannot move the frontier. Worker windows
are scoped but archive novelty and raw frontier stall remain shared. An epsilon-significant improvement resets all
worker streaks. These distinctions matter when reproducing the formulas.

Replay fallback reads optional manifest.baseline, but build does not emit that field
(`export_viewer.py:875-886,935-951`). Normal exported keyframes retain the baseline;
seeking without them can return null. The API regression fixture explicitly supplies
the otherwise absent field (`tests/test_viewer_api.py:122-130`).

## Formula and threshold sources

| Formula / threshold | Exact source |
| --- | --- |
| CPU k/knn/patience, weights, regime thresholds, warmup, trivial and gate thresholds | `boredom_meter/meter.py:33-49` (`load_profile`) |
| Parameter scales / clamps / ratio formula | `boredom_meter/meter.py:93-114` (`param_distance`) |
| Hierarchical weights and rounding; nearest-neighbor novelty | `boredom_meter/meter.py:117-133` (`distance`, `sparseness`) |
| Strict improvement direction/margin | `boredom_meter/meter.py:136-148` (`is_better`, `score_ok`) |
| Diversity and eligible attempt statuses | `boredom_meter/meter.py:151-163` (`simpson`, `attempt_events`) |
| Archive, significant/raw best, streaks/stall, scoped windows, rates and B | `boredom_meter/meter.py:181-224` (`fold`) |
| Regime precedence / hysteresis / convergence | `boredom_meter/meter.py:225-242` (`fold`) |
| Six-decimal return rounding and empty defaults | `boredom_meter/meter.py:29-30,253-268` (`r`, `status`) |
| Gate distance restrictions | `boredom_meter/meter.py:303-339` (`gate`) |
| CPU eps, k/knn/patience, level/parameter weights, ratio 4 | `testcases/hadamard19/boredom_profile.json:6-20,44-48`; `testcases/bixbench_mini/boredom_profile.json:6-20,43-47`; `testcases/playworld_mini/boredom_profile.json:6-20,44-48` |
| Allocation cutoff and slot counts | `swarm.py:158-247` (`allocate_roles`) |
| Accept margin, provisional inequality, confirmation mean | `swarm.py:1233-1247` (`acceptance_margin`, `candidate_is_provisional`, `critic_accepts`) |
| Duplicate triviality OR nearest-distance rule | `boredom_meter/meter.py:207-222`; `testcases/hadamard19/boredom_profile.json:50-64`; `testcases/bixbench_mini/boredom_profile.json:49-63`; `testcases/playworld_mini/boredom_profile.json:50-64` |
| Deterministic task flag / unchanged eps and fallback acceptance margin | All three `testcases/*/task.json:3`; `swarm.py:1233-1247,1339-1348` |
| Four-column result table | `swarm.py:38-43,254-271`; `testcases/run_task.py`; `memory.RESULT_COLUMNS` |
| Main Ig Nobel similarity/gap/unsurprise/failure/B and rounding | `be658b6:ignobel/boredom.py:15-58` |
| Main snap threshold override / policy default | `be658b6:ignobel/config.yaml:2`; `be658b6:ignobel/run_arm.py:37-40`; `be658b6:ignobel/policy.py:18-24` |
| #7 baseline, self_repeat, familiarity, gap, unsurprise, frustration | `origin/pr7:ignobel/boredom.py:27-97` |
| #7 progress, stall, weighted B, rounding | `origin/pr7:ignobel/boredom.py:110-144` |
| #7 weights and every private-policy threshold | `origin/pr7:boredom_meter/profiles/ignobel.json:24-37` |
| #7 jitter, convergence, cooldown, snap and window reset | `origin/pr7:ignobel/policy.py:39-105` |
| #8 family mean-B threshold, cooldown, cap and founding count | `origin/pr8:ignobel/config.yaml:8-11`; `origin/pr8:ignobel/world.py:301-311` |
