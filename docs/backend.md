# Backend reference: implementation map and formula sources

This reference locates the code, formulas and thresholds described in the
[backend entry point](../README.md#boredom-meter).
Line numbers refer to source baseline `add9002` unless a remote ref is stated.

## Implementation map

README explains the design; this map locates the code that defines behavior.
Line numbers below refer to source baseline `add9002`; the documentation was
rewritten from branch head `9dd0187`. Main and PR refs are separate implementations.

| Surface | Modules and symbols | Responsibility |
| --- | --- | --- |
| Human protocol and roles | `program.md`, `prompts/common.md`, `llm.render_prompt` | Human instructions and scout/worker/critic templates |
| Allocation | `swarm.py:163-258`, `allocate_roles` | Four slots, scout counts, per-agent priority |
| Orchestration | `swarm.py:1514-1958`, `_orchestrate` | Baseline, proposals, bounded repairs, evaluations, confirmation, artifacts |
| Model inference | `llm.py:344-445`, `_tinker_completion`, `_request_tinker` | Stateless sampling and parsing; no parameter updates |
| Grounding | `research.py`, `boredom.run_gate` | Exa query/source/extract records and citation audit |
| Memory | `memory.arm_run_scope`, `ensure_arm_audience`, `scoped_pastdev_response` | Local mirror, per-arm audience and run filtering |
| Candidate boundary | `testcases/sandbox.py`, each task's `evaluate.py` | Docker resource/isolation settings and trusted output grading |
| Run metadata | `swarm.py:1466-1560`, `redact_command`, `_write_run_artifact` | Redacted arguments, profile copy, starting revision, status |
| Round/final publish | `swarm.py:1495-1511,1942,1961-1984` | Nonfatal publish wrapper, round hook and finalization |
| Export and publish | `export_viewer.py:173-232,968-1071` | Profile reconstruction, prefix checks, artifact copies and atomic per-file updates |
| HTTP and SSE | `viewer/app.py:60-404`, `create_app`; `viewer/__main__.py` | Read-only routes, caching, path confinement and stream resume |
| Main study execution | `origin/main:ignobel/lab.py:103-111`, `_run_modal` | Modal sandbox specifies timeout/network blocking and no accelerator |
| Separate community | `origin/main:ignobel/run_arm.py:22-46` | Main arms, policy and memory selection |
| Unmerged community policy | `origin/pr7:ignobel/boredom.py`, `policy.py` | Private meter, frustration, cooldown and yoked exploration |
| Unmerged family population | `origin/pr8:ignobel/families.py`, `world.py` | Mothers, daughters, private data and spawning |

The default CPU profiles all minimize score. Eligible attempt statuses include
baseline/candidate keep, discard and crash, never critic rows; gate rejections
are audited separately. Worker windows are scoped but archive novelty and raw
frontier stall remain shared. An epsilon-significant improvement resets all
worker streaks. These distinctions matter when reproducing the formulas.

## Formula and threshold sources

| Formula / threshold | Exact source |
| --- | --- |
| CPU k/knn/patience, weights, regime thresholds, warmup, trivial and gate thresholds | `boredom_meter/meter.py:33-46` (`load_profile`) |
| Parameter scales / clamps / ratio formula | `boredom_meter/meter.py:91-112` (`param_distance`) |
| Hierarchical weights and rounding; nearest-neighbor novelty | `boredom_meter/meter.py:115-131` (`distance`, `sparseness`) |
| Strict improvement direction/margin | `boredom_meter/meter.py:134-142` (`is_better`, `score_ok`) |
| Diversity and eligible attempt statuses | `boredom_meter/meter.py:145-157` (`simpson`, `attempt_events`) |
| Archive, significant/raw best, streaks/stall, scoped windows, rates and B | `boredom_meter/meter.py:176-215` (`fold`) |
| Regime precedence / hysteresis / convergence | `boredom_meter/meter.py:216-233` (`fold`) |
| Six-decimal return rounding and empty defaults | `boredom_meter/meter.py:29-30,244-261` (`r`, `status`) |
| Gate distance restrictions | `boredom_meter/meter.py:300-340` (`gate`) |
| CPU eps, k/knn/patience, level/parameter weights, ratio 4 | `testcases/hadamard19/boredom_profile.json:6-20,44-48`; `testcases/bixbench_mini/boredom_profile.json:6-20,43-47`; `testcases/playworld_mini/boredom_profile.json:6-20,44-48` |
| Allocation cutoff and slot counts | `swarm.py:163-238` (`allocate_roles`) |
| Accept margin, provisional inequality, confirmation mean | `swarm.py:1122-1137` (`acceptance_margin`, `candidate_is_provisional`, `critic_accepts`) |
| Main Ig Nobel similarity/gap/unsurprise/failure/B and rounding | `origin/main:ignobel/boredom.py:15-58` |
| Main snap threshold override / policy default | `origin/main:ignobel/config.yaml:2`; `origin/main:ignobel/run_arm.py:37-40`; `origin/main:ignobel/policy.py:18-24` |
| #7 baseline, self_repeat, familiarity, gap, unsurprise, frustration | `origin/pr7:ignobel/boredom.py:27-97` |
| #7 progress, stall, weighted B, rounding | `origin/pr7:ignobel/boredom.py:110-144` |
| #7 weights and every private-policy threshold | `origin/pr7:boredom_meter/profiles/ignobel.json:24-37` |
| #7 jitter, convergence, cooldown, snap and window reset | `origin/pr7:ignobel/policy.py:39-105` |
| #8 family mean-B threshold, cooldown, cap and founding count | `origin/pr8:ignobel/config.yaml:8-11`; `origin/pr8:ignobel/world.py:301-311` |
