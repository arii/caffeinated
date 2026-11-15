# Swarm protocol

Four workers propose one `train.py` change per round. The conductor records
assignments and candidates in a locked descriptor-meter ledger, applies the
gate before GPU runs, then confirms a provisional best with seed 43. Arms with
Exa enabled run at least one research scout every round, including EXPLOIT.
SNAP and BREAKOUT retain their meter-driven scout allocation; EXPLOIT uses one
divergent scout. Arm A always allocates three exploit workers and one divergent
slot, which scouts when Exa is enabled. Arms with Exa disabled have no scouts.
The result ledger generates
`results.tsv`; assignments, claims, research, memory, LLM calls, run logs, and
critic outcomes are saved alongside it.

Set `OPENAI_API_KEY` and `OPENAI_MODEL` (or pass `--model`) for the real LLM.
Arms A, B, and C use past.dev with one shared `PAST_API_KEY` by default, with
`PAST_API_KEY_<ARM>` overrides available; each arm has a separate audience.
Arm D uses a shared local memory mirror. Arm A is the meter-disabled comparison
and omits the critic LLM, while keeping the same prior-art and memory protocol
as the other arms. Exa and prior-art are enabled by default for A, B, and D; C
remains off.

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
push a branch or tag. Use `--llm queue` to write prompts under
`<out>/llm_queue`; `python3 swarm_queue.py list --queue-dir <out>/llm_queue`
shows pending calls, and `show`/`answer` inspect and respond to a call. Queue
mode needs no OpenAI API key; `--queue-timeout` defaults to 3600 seconds.

## Mini benchmarks

`python3 swarm.py --task {hadamard19,bixbench_mini,playworld_mini}` runs the same
loop on a small local task instead of `train.py` on Modal. See `testcases/README.md`.
