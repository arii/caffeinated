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
| `ignobel` | Pre-registered expert study on real public data, confirmed once, Ig Nobel-likeness judged | `prereg.json` | rare-steak eaters smoke more (steak-risk survey): not significant, loss 1 | none: open-ended |

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

For Ig Nobel, the editable file is a pre-registration (`prereg.json`), not
code; nothing the candidate writes is executed. An agent acting as an expert in
one field (`boredom_profile.json` vocab: field → study type) registers, before
seeing any data: question, hypothesis, mechanism, at least two citations (Exa
source ids or URLs from the run's research log `TASK_RESEARCH_LOG`, or vetted
entries in `sources.json`), a real public CSV/TSV URL with the two column
headers and levels, the direction, and the predicted |ρ|. `external.py`
downloads the dataset once (https, open-data hosts or URLs the run's Exa
research cites, ≤ 5 MB, frozen in `.cache/raw` with its sha256), and
`evaluate.py` runs the registered Spearman test: significant = p < 0.005 on
all rows with the registered sign; replicated = the same sign with p < 0.05 in
each of the two fixed hash halves. Each dataset gets one registered test per
run, so the swarm cannot fish through a dataset's columns, and a test's
predicted effect size is frozen at its first registration. Trivial pairs fail.
Loss = 1 − (replicated and significant). Every graded study (registration,
citations, dataset sha256, rho/p/n overall and per half) is appended to
`<run>/ignobel_studies.jsonl`; after the run,
`python3 testcases/ignobel/score_run.py --run <out>` sends the replicated
studies to a two-judge committee (`committee.py`, which holds both judge
prompts; nothing on the run side imports it; Tinker models `IGNOBEL_JUDGE_A_MODEL`,
`IGNOBEL_JUDGE_B_MODEL`, defaults Kimi K3.1 Pro and Qwen3.5-397B) and writes
`scores.jsonl`: laugh and think 1–10 on a grader-written abstract, each judge
counts min(laugh, think), the lower judge wins, and a joke at a group's expense
scores 0. The swarm is open-ended: `field` may be any snake_case field or subfield a lab
founds (logged as descriptor `other/<subfield>`), and each round `swarm.py` runs
the task's `round_context.py` (task.json `round_context`) and appends its output
to the task inputs: the lab notebook (every study registered so far this run
and its result, so labs build on each other) and real datasets found on Zenodo
and Hugging Face (`datasets.py`) for the
least-explored fields, with their columns. A registration can test a derived
rate (`x_per` / `y_per`: a numeric column divided by another numeric column);
the host computes it. When two labs report the same
finding (dataset and column pair), `score_run.py` keeps only the earliest.
`task.json`'s `scout`
block points the swarm's Exa scouts at odd everyday phenomena and downloadable
datasets instead of small-GPT training.

## Run the swarm on a task

```sh
# offline plumbing check (fake LLM, local memory, no Exa)
EXA=off MEMORY_BACKEND=local python3 swarm.py --task hadamard19 --rounds 1 --llm fake --no-push
EXA=off MEMORY_BACKEND=local python3 swarm.py --task bixbench_mini --rounds 1 --llm fake --no-push
EXA=off MEMORY_BACKEND=local python3 swarm.py --task playworld_mini --rounds 1 --llm fake --no-push
EXA=off MEMORY_BACKEND=local python3 swarm.py --task ignobel --rounds 1 --llm fake --no-push
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
