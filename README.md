# Caffeinated CPU Research Swarm

Caffeinated is an autonomous research swarm with a deterministic Boredom Meter.
It explores small CPU benchmark proxies, runs candidate code in a Docker
sandbox, and keeps or discards experiments by their measured loss.

The three tasks are honest local proxies: Hadamard-19 is exact with a known
optimum; BixBench Mini is a 17-question subset, not full BixBench; Playworld
Mini is a synthetic proxy, not PlayWorld, using an 8-frame-memory reference.

## Quickstart

Build the isolated candidate image once:

```sh
docker build -t caffeinated-testcases:py311-v1 -f testcases/Dockerfile testcases
```

For the Tinker backend, install its optional SDK and set `TINKER_API_KEY` and
`TINKER_MODEL`, then run one task:

```sh
python3 -m pip install 'tinker==0.39.0' 'tml-renderers==0.4.1'
python3 swarm.py --task hadamard19 --arm B --rounds 10 --llm tinker
```

`--arm B` enables the meter; `--arm A` uses a fixed three-refine/one-scout
allocation with the meter disabled. The fake LLM supports offline plumbing
checks:

```sh
EXA=off MEMORY_BACKEND=local python3 swarm.py --task hadamard19 --arm B --rounds 1 --llm fake --no-push
```

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

`viewer_api.py` serves the same exports over the read-only HTTP API from the
spec (`/api/v1/runs`, `/timeline`, `/world?tick=|round=|ts=`, `/events`,
`/agents/{id}`, `/ledger`, `/discoveries`, `/entities/{kind}/{id}`,
`/artifacts/...`, SSE `/stream`). It only reads files and holds no
credentials; `create_router(Store(dir))` can be mounted into another FastAPI app.

```sh
uv sync --extra api
python3 viewer_api.py --data lab/data/runs --export out/   # export, then serve on :8000
# docs: http://127.0.0.1:8000/api/v1/docs
```

See [`program.md`](program.md) for the human-edited experiment protocol and
[`testcases/README.md`](testcases/README.md) for task details and scoring.
