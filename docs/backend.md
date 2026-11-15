# Backend reference: formula sources

This table gives the sources for the formulas and thresholds described in the
[backend entry point](../README.md#boredom-meter-exact-cpu-implementation).
Line numbers refer to source baseline `3b50aaf` unless a remote ref is stated.

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
| Accept margin, provisional inequality, confirmation mean | `swarm.py:1120-1135` (`acceptance_margin`, `candidate_is_provisional`, `critic_accepts`) |
| Main Ig Nobel similarity/gap/unsurprise/failure/B and rounding | `origin/main:ignobel/boredom.py:15-58` |
| Main snap threshold override / policy default | `origin/main:ignobel/config.yaml:2`; `origin/main:ignobel/run_arm.py:37-40`; `origin/main:ignobel/policy.py:18-24` |
| #7 baseline, self_repeat, familiarity, gap, unsurprise, frustration | `origin/pr7:ignobel/boredom.py:27-97` |
| #7 progress, stall, weighted B, rounding | `origin/pr7:ignobel/boredom.py:110-144` |
| #7 weights and every private-policy threshold | `origin/pr7:boredom_meter/profiles/ignobel.json:24-37` |
| #7 jitter, convergence, cooldown, snap and window reset | `origin/pr7:ignobel/policy.py:39-105` |
| #8 family mean-B threshold, cooldown, cap and founding count | `origin/pr8:ignobel/config.yaml:8-11`; `origin/pr8:ignobel/world.py:301-311` |
