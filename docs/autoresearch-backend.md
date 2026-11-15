# Caffeinated CPU Research Swarm

Caffeinated is an autonomous research swarm with a deterministic Boredom Meter.
It explores small CPU benchmark proxies, runs candidate code in a Docker
sandbox, and keeps or discards experiments by their measured loss.

The three tasks are honest local proxies: Hadamard-19 is exact with a known
optimum; BixBench Mini is a 17-question subset, not full BixBench; Playworld
Mini is a synthetic proxy, not PlayWorld, using an 8-frame-memory reference.

## Quickstart

From a fresh clone (Python 3.10+, Docker; Python 3.12 recommended):

```sh
make setup                     # creates .venv with uv (or venv+pip) from requirements-dev.txt
. .venv/bin/activate
cp .env.example .env           # fill in TINKER_API_KEY, EXA_API_KEY, PAST_API_KEY
docker build -t caffeinated-testcases:py311-v1 -f testcases/Dockerfile testcases
python3 swarm.py --task hadamard19 --arm B --rounds 10 --llm tinker
```

Without make or uv, a plain venv works too: `python3 -m venv .venv && .venv/bin/pip install -r requirements.txt`
(add `-r requirements-dev.txt` instead for the lint, viewer and test tools).
Note `pip install -r requirements.txt`, not `pip install requirements`.

The host needs only pandas and its openpyxl engine (`swarm.preview_file()` reads
BixBench XLSX inputs for worker prompts). `--llm tinker` calls Tinker's
[OpenAI-compatible endpoint](https://tinker-docs.thinkingmachines.ai/tinker/compatible-apis/openai/index.md)
over HTTP with the standard library, so no Tinker SDK, renderer, PyTorch, CUDA or
GPU is installed. `TINKER_MODEL` must be a sampleable name such as
`moonshotai/Kimi-K3.1-Pro:peft:262144` (the bare base name is rejected);
`TINKER_REASONING_EFFORT` (default `low`) and `TINKER_BASE_URL` are optional.
Candidate evaluation dependencies live separately in the Docker image.

Before creating any branch or worktree, `swarm.py` checks the Docker sandbox
image and the keys the chosen arm needs, and lists every missing piece with its
fix. Arm B uses Exa and past.dev memory by default; `--exa off` and
`--memory-backend local` run without those keys. Without Exa (`--exa off` or no
`EXA_API_KEY`) research falls back to keyless OpenAlex, arXiv and PubMed paper
search (`literature.py`, sources logged as `S<k>` like Exa's); `--llm fake` runs
stay offline unless `--literature keyless`, and `--literature off` disables it. `swarm.py` owns
`.swarm_worktrees/<arm>/`: it locks it against a concurrent run of the same arm,
prunes deleted worktrees, discards leftovers of earlier runs (moving an
uncommitted `experiments/swarm_<arm>/` aside to
`experiments/swarm_<arm>.prev-<time>/`, where the Lab still discovers its
recording, and marking a killed run `stopped`) and reuses an arm branch an
earlier run left without commits. Removing `.swarm_worktrees/` by hand is never
required. Agent attempts run in detached worktrees, so a run creates one branch
(the arm branch); candidate tags are namespaced per run as
`run/swarm_<arm>/<run_id[:8]>/<round>-<agent>`.

Per-round arm commits hold only the small, append-only research state
(ledger, results, critic, memory, assignments, boredom log, score cache).
The viewer export, `runs/`, `exa_cache/`, `llm_log.jsonl` and
`research_log.jsonl` stay out of them; when the run ends one final commit adds
`llm_log.jsonl.gz`, `research_log.jsonl.gz`, `runs.tar.gz` and
`exa_cache.tar.gz` (after any `post_run` scoring commit). Rebuild a viewer
export with `export_viewer.py <out>` from the out dir, or from the arm branch's
`experiments/swarm_<arm>/` checkout: the exporter reads `llm_log.jsonl.gz` and
`research_log.jsonl.gz` when the raw logs are absent (extract `runs.tar.gz`
there too to get experiment log tails and diffs).

Long runs (up to 50 rounds) survive crashes: after every committed round the
swarm writes `resume_checkpoint.json` (round, arm commit, log byte lengths,
published-event length). `swarm.py --resume <out>` continues a crashed or killed
run with the same run id, ledger, score cache, memory mirror, arm branch and
settings from `run.json`; it truncates a half-written round, cuts the published
recording back to its checkpointed prefix so later publishes still append, and
deletes that round's tags. past.dev memories from the abandoned round cannot be
deleted remotely, so each write carries `run_epoch` and `written_at`, and recall
drops same-run memories written after a checkpoint that a later resume rolled
back to (`AUTORESEARCH_RUN_ROLLBACKS`). Limits: the abandoned memories still
exist on past.dev and still count toward its storage and search ranking; memories
written before this change carry no `written_at` and are never filtered; and
past.dev's own write timestamps are not used, so the filter relies on the
swarm host's clock. `--rounds N` extends the run; conflicting `--task`,
`--arm`, `--seed`, `--llm`, `--model`, `--exa` or `--memory-backend` values are
rejected. A worker whose LLM call fails after retries records a `crash` row
for that attempt and the round goes on; if every worker fails, the run stops so
it can be resumed once the provider recovers. A critic review whose LLM
call fails is not turned into a crash row: it still stops the run, which can
then be resumed from the last checkpoint. A failed novelty-check call leaves the
round's candidates without a novelty score and the round goes on. A run killed during
`post_run` scoring has all its rounds checkpointed; `--resume` reruns the
scoring and finalization (and says so). SIGTERM stops a run cleanly
(status `stopped`).

`pyproject.toml` defines dependencies and `uv.lock` pins their resolved versions.
`requirements.txt` exports the host runtime; `requirements-dev.txt` also
includes all extras (including the viewer needed by its tests) and the dev
group. Both are generated by `uv export`; the exact commands are in their
headers. After changing dependencies, run `uv lock` and `make requirements`
(requires uv), and commit the refreshed lock and exports together. The targets
use `--locked` so a stale lock fails rather than drifting. For an install
directly from the lock, use `uv sync --locked --extra viewer`. Tests use the
standard-library `unittest` runner.

Build the isolated candidate image once:

```sh
docker build -t caffeinated-testcases:py311-v1 -f testcases/Dockerfile testcases
```

For the Tinker backend, set `TINKER_API_KEY` and
`TINKER_MODEL` (environment or `.env`), then run one task:

```sh
python3 swarm.py --task hadamard19 --arm B --rounds 10 --llm tinker
```

`--arm B` enables the meter; `--arm A` uses a fixed three-refine/one-scout
allocation with the meter disabled. The fake LLM supports offline plumbing
checks:

```sh
EXA=off MEMORY_BACKEND=local python3 swarm.py --task hadamard19 --arm B --rounds 1 --llm fake --no-push
```

Run both suites after building the image:

```sh
python -m unittest discover -s tests -v
python -m unittest discover -s boredom_meter/tests -v
```

BixBench public data downloads on first use; no API credentials
are needed for fake runs. See [`experiments/README.md`](../experiments/README.md)
for the isolated paired A/B harness, CSV definitions, and offline validation.

## Viewing a run in the lab frontend

`export_viewer.py` turns a finished run into the read-only `swarm-viewer/v1`
format from `docs/swarm-viewer-api.md`: deterministic UUIDs for the run,
agents and events, a gap-free `tick`, plus manifest, timeline, keyframes and
entity files. The frontend can replay these with no backend.

```sh
python3 export_viewer.py out/ --dest lab/data/runs  # swarm.py --out dir (any --task, including ignobel)
```

Prompts, responses and reasoning only appear in `entities/llm_calls.json`,
never in the timeline. Missing source timestamps stay `null`.

See [`program.md`](../program.md) for the human-edited experiment protocol and
[`testcases/README.md`](../testcases/README.md) for task details and scoring.
