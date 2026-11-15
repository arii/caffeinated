# Caffeinated CPU Research Swarm

Caffeinated is an autonomous research swarm with a deterministic Boredom Meter.
It explores small CPU benchmark proxies, runs candidate code in a Docker
sandbox, and keeps or discards experiments by their measured loss.

The three tasks are honest local proxies: Hadamard-19 is exact with a known
optimum; BixBench Mini is a 17-question subset, not full BixBench; Playworld
Mini is a synthetic proxy, not PlayWorld, using an 8-frame-memory reference.

## Quickstart

Create the host venv using the project lock (Python 3.12 recommended;
Tinker requires at least 3.11):

```sh
uv sync --locked --python 3.12 --extra tinker --extra viewer
. .venv/bin/activate
uv pip check
```

`pyproject.toml` defines dependencies and `uv.lock` pins their resolved versions.
The `tinker` extra installs the pinned SDKs; `viewer` supplies the existing
read-only API and its tests. Tests use the standard-library `unittest` runner.
The host needs pandas and its openpyxl engine because `swarm.preview_file()`
reads BixBench XLSX inputs to include spreadsheet previews in worker prompts.
Candidate evaluation dependencies live separately in the Docker image.
No CUDA or GPU setup is needed. Refresh `uv.lock` with `uv lock` after changing
dependencies.

Build the isolated candidate image once:

```sh
docker build -t caffeinated-testcases:py311-v1 -f testcases/Dockerfile testcases
```

For the Tinker backend, set `TINKER_API_KEY` and
`TINKER_MODEL`, then run one task:

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
are needed for fake runs. See [`experiments/README.md`](experiments/README.md)
for the isolated paired A/B harness, CSV definitions, and offline validation.

## Viewing a run in the lab frontend

`export_viewer.py` turns a finished run into the read-only `swarm-viewer/v1`
format from `docs/swarm-viewer-api.md`: deterministic UUIDs for the run,
agents and events, a gap-free `tick`, plus manifest, timeline, keyframes and
entity files. The frontend can replay these with no backend.

```sh
python3 export_viewer.py out/ --dest lab/data/runs                    # swarm.py --out dir
python3 export_viewer.py ../ignobel/runs/full-s0 --dest lab/data/runs  # ignobel events.jsonl
```

Prompts, responses and reasoning only appear in `entities/llm_calls.json`,
never in the timeline. Missing source timestamps stay `null`.

See [`program.md`](program.md) for the human-edited experiment protocol and
[`testcases/README.md`](testcases/README.md) for task details and scoring.
