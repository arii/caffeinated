# Artificial Scientist Swarms: CPU benchmarks

These tasks evaluate candidate programs on CPU in Docker. Hadamard is an exact
known-optimum task; BixBench Mini is a subset; Playworld Mini is synthetic.

## Tasks and score conventions

The swarm minimizes an objective score. Evaluators also print a native metric named
score, for which higher is better; their loss field is the transformed lower-is-better
objective consumed by the swarm. The inherited results.tsv loss column stores that
objective. results.tsv has exactly commit, loss, status and description columns.

| Task | Scope and editable file | Baseline and reference | Minimized objective |
| --- | --- | --- | --- |
| hadamard19 | Exact order-19 ±1 determinant; construct.py | Baseline objective about 0.0585; known optimum determinant 2^18 × 3411968 gives objective zero | log10(optimum determinant) minus log10(abs(det)) for nonzero determinant |
| bixbench_mini | 17-question subset, not full BixBench; analysis.py | Baseline accuracy about 0.118; published reference accuracy 0.523 | 1 − answer accuracy |
| playworld_mini | Synthetic 9×9 environment, not PlayWorld; world_model.py | Baseline exact-frame fraction about 0.149; 8-frame-memory reference fraction 0.3598 | 1 − exact-frame fraction |

Playworld uses 10 context frames and predicts 20 future 5×5 frames across 200 held-out
episodes. Task contracts and scope notes are in each task.json. Malformed output,
failed startup or a candidate crash produces crash status rather than a retained result.

## Candidate boundary

The trusted host grader never imports candidate code. It passes only declared editable
source, public inputs and required task harness files to a disposable container, parses
bounded output and computes the result on the host.

Build the pinned image once from the repository root:

```sh
docker build -t caffeinated-testcases:py311-v1 -f testcases/Dockerfile testcases
```

The image pins Python 3.11.12 plus NumPy, pandas, openpyxl and SciPy. Candidate containers
have no network, a read-only root, dropped capabilities, no-new-privileges, a non-root
user and resource/output limits. Public files enter a read-only work mount and outputs
have a separate writable mount. Credentials, home directories, the repository, hidden
answers and reference implementations are not mounted. If Docker or the image is
unavailable, evaluation fails closed; there is no host candidate-execution fallback.

Hadamard returns a matrix for the host's exact integer determinant calculation.
BixBench preparation downloads public questions/data and keeps the answer key in the
host .cache directory; candidates receive only questions.json and declared data files.
Playworld's run_candidate.py imports world_model.py inside Docker. The host supplies
context frames/actions and future actions, while hidden future frames and the simulator
stay with the grader. Containers are an execution boundary, not proof against runtime
or kernel vulnerabilities; preparation and grading code remain trusted.

## Run an experiment

Run from the repository root with Git and Docker available. Use fresh output directories
and a checkout where local branches, worktrees, tags and artifact commits are appropriate.

```sh
EXA=off MEMORY_BACKEND=local python3 swarm.py --task hadamard19 --rounds 1 --llm fake --no-push --out /tmp/hadamard-demo
EXA=off MEMORY_BACKEND=local python3 swarm.py --task bixbench_mini --rounds 1 --llm fake --no-push --out /tmp/bixbench-demo
EXA=off MEMORY_BACKEND=local python3 swarm.py --task playworld_mini --rounds 1 --llm fake --no-push --out /tmp/playworld-demo
```

Fake inference, local memory and Exa-off avoid external inference/research/memory calls.
The first BixBench preparation still downloads public data if its cache is empty.
All three task.json files set deterministic=true. The conductor caches successful scores
by editable-file Git blob, including the baseline, and avoids reevaluating repeated blobs.
Same-round duplicates share the first blob's successful score. Duplicates still count in
the boredom ledger as trivial attempts; they cannot move the kept-score frontier.
Deterministic critic confirmation reuses the first score and logs the skipped rerun.
Unbuildable fake descriptor assignments return a rejection instead of another method.
The conductor edits only the task's declared candidate file in worker worktrees,
evaluates commits in Docker, loads the task's boredom profile and uses the common prompts.
No-push prevents remote pushes, not local Git writes.

Round-end and terminal viewer publication defaults to <out>/viewer. Use --viewer-dest
to choose another export root or --no-viewer to disable it. See the
[viewer and API documentation](../README.md#data-model-and-viewer) for server setup.

## Evaluate the current editable file

```sh
python3 testcases/run_task.py hadamard19 --results results.tsv --desc "current construction" --status auto
```

This evaluates the file as it currently exists; it does not implement the method named
in --desc. With --status auto it records keep only for a strict objective improvement
over the best kept row (or the first successful result), otherwise discard. It does not
perform the swarm's epsilon-margin/confirmation rule or its per-run blob deduplication.
For current deterministic tasks the swarm's confirmation reuses the first score; other
tasks are evaluated a second time.
Use a separate results file if preserving existing results.

The [_reference](_reference) directory contains trusted reference programs; it is not
mounted into candidates or included in their prompt context. Evaluators print native
score, lower-is-better loss, record and beats_reference, plus task-specific diagnostics.

## Tests

Follow the [root setup](../README.md#quickstart-and-tests), including viewer dependencies
and host pandas, then run:

```sh
EXA=off MEMORY_BACKEND=local .venv/bin/python -m unittest discover -s tests
```

Docker tests need the image above; BixBench integration can prepare public data.
Inspect skipped tests rather than treating them as sandbox verification.
