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

See [`program.md`](program.md) for the human-edited experiment protocol and
[`testcases/README.md`](testcases/README.md) for task details and scoring.
