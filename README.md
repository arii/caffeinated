# Caffeinated CPU Research Swarm

Caffeinated is an autonomous research swarm with a deterministic Boredom Meter.
It explores small CPU benchmark proxies, runs candidate code in a Docker
sandbox, and keeps or discards experiments by their measured loss.

The three tasks are honest local proxies: Hadamard-19 is exact with a known
optimum; BixBench Mini is a 17-question subset, not full BixBench; Playworld
Mini is a synthetic proxy, not PlayWorld, using an 8-frame-memory reference.

## Quickstart

Create the host venv (Python 3.12 recommended; Tinker requires at least 3.11):

```sh
python3.12 -m venv .venv
. .venv/bin/activate
python -m pip install -r requirements-dev.txt
python -m pip check
```

`requirements.txt` installs the host runtime and pinned Tinker SDKs;
`requirements-dev.txt` adds the test runner and existing read-only viewer API
dependencies. `pyproject.toml` defines the same dependency groups, with
`uv.lock` for locked installs (`uv sync --locked --extra tinker --extra viewer
--extra dev`). Fake-only orchestration and paired statistics use the standard
library; pandas/openpyxl support spreadsheet previews for live BixBench
prompts. Candidate NumPy/pandas/SciPy dependencies live separately in the
Docker image and are not executed on the host. No CUDA or GPU setup is needed.

Both requirements files are exported from `uv.lock` with transitive versions
pinned. After changing `pyproject.toml`, run `uv lock` and the `uv export`
commands recorded at the top of each requirements file to refresh them.

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

Run tests with `python -m pytest -q tests boredom_meter/tests` after building
the image. BixBench public data downloads on first use; no API credentials
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
