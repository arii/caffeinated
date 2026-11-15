# Swarm protocol

Four workers propose one `train.py` change per round. The conductor records
assignments and candidates in a locked descriptor-meter ledger, applies the
gate before GPU runs, then confirms a provisional best with seed 43. Scouts
are allocated by the meter regime; in SNAP and BREAKOUT they use Exa research
to produce grounded implementation leads. The result ledger generates
`results.tsv`; assignments, claims, research, memory, LLM calls, run logs, and
critic outcomes are saved alongside it.

Set `OPENAI_API_KEY` and `OPENAI_MODEL` (or pass `--model`) for the real LLM.
Arms B and C use past.dev when their arm-specific key is available; arm D uses
a shared local memory mirror. Arm A is the meter-disabled comparison: four
exploit workers, no scouts, and no critic LLM, with the same prior-art and
shared-memory protocol as the other arms.

Run an arm from the repository root:

```sh
python3 swarm.py --arm A
python3 swarm.py --arm B
python3 swarm.py --arm C
python3 swarm.py --arm D
```

Each real run uses Modal H100 bursts and writes to
`experiments/swarm_<arm>/` on its `swarm-<arm>-<date>` branch. To exercise the
protocol offline, use `--llm fake --gpu fake --no-push` with
`MEMORY_BACKEND=local EXA=off`; fake GPU scores are deterministic and never
push a branch or tag.

## Mini benchmarks

`python3 swarm.py --task {hadamard19,bixbench_mini,playworld_mini}` runs the same
loop on a small local task instead of `train.py` on Modal. See `testcases/README.md`.
