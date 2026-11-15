# CPU mini-benchmark proxies

These are local, CPU-sized proxies, not full versions of the benchmarks named
below. The trusted host grader never imports or executes candidate code. It
passes only the editable file, declared public inputs, and any task harness to a
disposable Docker container, then parses bounded output and computes the score
on the host.

| task | scope | editable file | baseline | reference |
|---|---|---|---|---|
| `hadamard19` | Exact order-19 ±1 determinant task | `construct.py` | loss ≈ 0.0585 | loss 0 at the known optimum, det = 2^18·3411968 |
| `bixbench_mini` | 17-question subset using public data from `futurehouse/BixBench` | `analysis.py` | accuracy ≈ 0.118 | published BixBench accuracy 0.523 |
| `playworld_mini` | Synthetic 9×9 gridworld, predicting 20 future 5×5 frames | `world_model.py` | score ≈ 0.149 | 8-frame-memory model, score 0.3598 |
| `ignobel_mini` | Replicable, Ig Nobel-like association in 8 real FiveThirtyEight surveys | `study.py` | loss ≈ 0.509 (gravy ↔ bread stuffing) | discovery-half brute-force scan, loss 0.3119 |

The exact task notes are stored in each `task.json`: Hadamard is exact with a
known optimum; BixBench is a 17-question subset, not full BixBench; Playworld
is a synthetic proxy, not PlayWorld, and uses the 8-frame-memory reference.
Evaluators print `score`, `loss`, `record`, and `beats_reference`. Lower loss is
better. A malformed or crashing candidate is scored as a crash.

## Build the candidate image

Build the pinned image once before running an evaluator or task swarm:

```sh
docker build -t caffeinated-testcases:py311-v1 -f testcases/Dockerfile testcases
```

The image pins Python 3.11.12 and the CPU dependencies used by these tasks:
NumPy, pandas, openpyxl, and SciPy. Candidate containers have no network, a
read-only root filesystem, dropped Linux capabilities, no-new-privileges,
resource limits, and only the task's editable file/public inputs plus a
separate writable output mount. They receive no host environment secrets,
grader, hidden answers, simulator, reference implementations, repository, or
home directory. Docker being unavailable is a crash; candidates are never run
on the host as a fallback.

For BixBench, `prepare.py` downloads the public question/data files and keeps
the answer key under `.cache/` on the host. The candidate receives only
`questions.json` and the declared public `data/` files. For Playworld, the host
generates context frames/actions and future actions for evaluation; hidden
future frames stay in the trusted grader, while `run_candidate.py` supplies
only public inputs to `world_model.py`.

For Ig Nobel, `prepare.py` downloads 8 FiveThirtyEight surveys (CC BY 4.0) at a
pinned commit, drops respondent IDs and free text, and splits rows by a fixed
hash into a public discovery half (`data/`, `codebook.*`) and a hidden
replication half (`.cache/replication/`). `study.py` prints one claim
`{dataset, x, x_level, y, y_level, direction}`. The host rejects trivial pairs
(same question, near-identical wording, two demographics), re-tests the claim on
the replication half (Spearman, p < 0.01, matching sign), and scores the
codebook wording of x and y, not the candidate's text, with the frozen judge in
`judge.json`. Loss = 1 − min(1, |ρ_rep|/0.2) × Ig-Nobel-likeness. The judge is a
logistic regression trained on real Ig Nobel rationales and winning-paper titles
(Wikipedia revision 1385733309) against OpenAlex article titles. Rebuild it with
`python3 testcases/_reference/build_ignobel_judge.py`. Reproduce the record
with `python3 testcases/_reference/ignobel_reference.py`. The judge is a proxy
for the committee, not the committee.

## Run the swarm on a task

```sh
# offline plumbing check (fake LLM, local memory, no Exa)
EXA=off MEMORY_BACKEND=local python3 swarm.py --task hadamard19 --rounds 1 --llm fake --no-push
EXA=off MEMORY_BACKEND=local python3 swarm.py --task bixbench_mini --rounds 1 --llm fake --no-push
EXA=off MEMORY_BACKEND=local python3 swarm.py --task playworld_mini --rounds 1 --llm fake --no-push
EXA=off MEMORY_BACKEND=local python3 swarm.py --task ignobel_mini --rounds 1 --llm fake --no-push
```

`--task` edits `testcases/<task>/<editable>`, evaluates each commit in the
Docker sandbox, loads `testcases/<task>/boredom_profile.json`, and uses the
generic prompts in `prompts/`. The task loss goes in the `loss`
column, so the artifacts retain the autoresearch format.

## Score by hand

```sh
python3 testcases/run_task.py hadamard19 --results results.tsv --desc "anneal" --status auto
```

Build the Docker image before running this command. BixBench public inputs are
downloaded on the first evaluation. `_reference/` contains trusted reference
implementations and is never mounted into a candidate container or included in
candidate context.
