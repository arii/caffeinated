# Mini benchmarks for the swarm

Three small tasks modelled on the hackathon dashboard records. Each one scores in
about a second on a CPU, so the full conductor → scout → worker → critic loop
(Boredom Meter, Exa, past.dev memory) can be checked end to end in minutes,
with no `train.py` and no Modal.

| task | modelled on | editable file | baseline | record to beat |
|---|---|---|---|---|
| `hadamard19` | EinsteinArena `hadamard-det-51` (same exact ±1 check and determinant score), order 19 | `construct.py` | loss ≈ 0.0585 | loss 0 = known order-19 optimum, det = 2^18·3411968 |
| `bixbench_mini` | BixBench: 17 real questions from capsules bix-18, bix-19, bix-51 (`futurehouse/BixBench`) | `analysis.py` | accuracy 0.118 | 0.523 (BixBench best) |
| `playworld_mini` | PlayWorld stand-in: 9×9 gridworld, predict 20 future 5×5 frames when revisiting places | `world_model.py` | score 0.149 (copy last frame, the Matrix-Game role) | 0.360 (8-frame-memory model, the Genie 3 role); full memory reaches ≈ 0.72 |

For every task, `evaluate.py` prints `score`, `loss`, `record` and `beats_record`.
Lower loss is better. An invalid or crashing submission prints `error:` and scores 0.
`playworld_mini` is a synthetic stand-in, not PlayWorld itself.

## Run the swarm on a task

```sh
# offline plumbing check (fake LLM, local memory, no Exa)
EXA=off MEMORY_BACKEND=local python3 swarm.py --task hadamard19 --rounds 3 --llm fake --no-push

# real check: LLM workers, Exa scouts, past.dev shared memory
python3 swarm.py --task playworld_mini --arm B --rounds 6 --memory-backend pastdev
```

`--task` edits `testcases/<task>/<editable>`, scores each commit with the task's
frozen `evaluate.py` on this machine (`--gpu local`), loads
`testcases/<task>/boredom_profile.json` and uses the generic prompts in
`testcases/prompts/`. The task's loss goes in the `val_bpb` column, so the
artifacts have the same format as a Modal run.

The fake LLM only nudges `RESTARTS`/`SEED` in `hadamard19`, so with it the
swarm should go from EXPLOIT to a boredom regime without improving. Use a real
LLM to see actual progress.

## Score by hand

```sh
python3 testcases/run_task.py hadamard19 --results results.tsv --desc "anneal" --status auto
```

`bixbench_mini/prepare.py` downloads its data from Hugging Face the first time the
evaluator runs. `_reference/` holds reference solutions that were used to set the
records. They are kept out of every editable file, so keep them out of agent prompts.
