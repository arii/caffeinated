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
| `ignobel_mini` | Pre-registered expert study on real public data, confirmed once, Ig Nobel-likeness judged | `prereg.json` | loss ≈ 0.628 (gamblers smoke more, steak-risk survey) | none: open-ended |

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
`evaluate.py` runs the registered Spearman test once on all rows (p < 0.005,
matching sign). Each dataset gets one registered test per run, so the swarm
cannot fish through a dataset's columns. Trivial pairs score 0. Loss =
1 − confirmed × min(1, |ρ|/0.2) × (0.5 + 0.5 × calibration) ×
Ig-Nobel-likeness, where calibration rewards predicting the effect size and
the frozen judge (`judge.json`, logistic regression on real Ig Nobel rationales
and winning-paper titles from Wikipedia revision 1385733309 vs OpenAlex
titles; rebuild with `python3 testcases/_reference/build_ignobel_judge.py`)
scores the dataset's own column wording, never the candidate's prose. The
judge is a proxy for the committee, not the committee. `task.json`'s `scout`
block points the swarm's Exa scouts at odd everyday phenomena and downloadable
datasets instead of small-GPT training.

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
