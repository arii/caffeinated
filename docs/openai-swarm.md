# OpenAI supervised live runner

This branch replaces the local Ollama mode with OpenAI. One `gpt-6.1-sol`
supervisor plans each round at low reasoning effort. Eight `gpt-6-luna`
workers execute short assignments with reasoning effort `none`; critic roles
also use Luna. Worker calls are queued, with at most one execution and one
repair per worker per round. In Ig Nobel runs the PI can spawn up to two
workers per round when the team is bored or stuck, up to the configured worker
cap (8 by default in round mode, or `--max-workers` when specified). Round-mode
spawning defaults on for Ig Nobel and off for other tasks; `--spawn off`
disables it. Each spawned worker starts with private memory.
Existing recordings and their result citations are unchanged.

## Run

Set `OPENAI_API_KEY` in the backend environment or in `.env.openai.local`
(ignored by Git, use mode 0600). Never expose it through a frontend variable.
Install the existing Python requirements and build the sandbox image:

```sh
docker build -t caffeinated-testcases:py311-v2 -f testcases/Dockerfile testcases
scripts/run_openai_demo.sh
```

The launcher runs one real Hadamard21 benchmark round with eight workers,
1200 output tokens per worker call, 4096 tokens including reasoning per
supervisor call, and a $1 run ceiling. Docker evaluates the generated code.
It disables paid search, hosted memory, automatic Git pushes and the old
Tinker-funded prize committee. It does not claim to award an Ig Nobel prize.
The Runs panel also supports the live Ig Nobel launcher. Enable it with
`LAB_OPENAI_LAUNCH=1`, a backend `OPENAI_API_KEY`, and
`LAB_OPENAI_MAX_COST_USD=10` for a small test. The server caps the configurable
ceiling at $10. The button runs three rounds with eight Luna labs and Sol
supervision/committee judging. Model and committee requests share the run's
budget ledger. It is idle until explicitly started. The equivalent CLI is
`scripts/run_openai_ignobel.sh` (defaults to five rounds and a $10 cap).

The default replay is run 3 (`f8fa53cc-6afd-5e98-9596-0c7b8711e718`) from the
bundled `data/replays/ignobel-real-runs.zip`. Explicit `?recording=` links
still override the default, and other runs remain selectable. The Pages
export includes the ZIP recordings and their evidence artifacts. ZIP replay
makes no model calls. Standalone IgJudge now supports OpenAI; its published
scores belong to the overnight recording and are not attached to this ZIP run.

Artifacts are in `experiments/openai-demo`; use `OPENAI_RUN_OUT` to select a
fresh directory. Advanced runs use `swarm.py --llm openai --model gpt-6-luna
--supervisor-model gpt-6.1-sol --critic-model gpt-6-luna --workers 8
--max-cost-usd 1` with the other desired task/run flags. The budget applies
only to the supervised OpenAI path. It is per output directory, not an
account-wide credit limit; new runs have separate budgets.

Every request reserves a conservative maximum before sending, using UTF-8
bytes plus overhead for input and the full output allowance. Input reserves
include the 30-minute cache-write premium. The append-only, file-locked
`openai_budget.jsonl` persists across restarts. Failed requests retain their
reservation, and no automatic transport retry occurs. Unknown models,
nonstandard endpoints, oversized prompts and incomplete outputs are rejected.
The ledger is a conservative ceiling, not the invoice. Response usage and
estimated costs (including reported cache writes, ignoring cache discounts)
are in `llm_log.jsonl`. Do not delete the ledger when resuming a run.

## Verified trial, 2026-11-15

Recording `37d16cd0-1cc1-5a80-949d-7c3186925683`: one Sol call and eight Luna
calls, eight valid executable patches, no improvement over the 0.202360
baseline. Estimated cost approximately $0.0069 including the reported cache
write. All workers reported zero reasoning tokens. Sol was requested at
medium effort; this short response also reported zero reasoning tokens.
The successful transport and execution test does not establish research quality.

Checks: targeted Python provider/setup/research/export tests, 157 frontend
tests, Ruff, TypeScript and Vite production build. The provider tests use
mock responses and cover budget persistence, role routing, incomplete output,
usage retention, unknown models/endpoints and invalid budgets.

References: [Sol](https://developers.openai.com/api/docs/models/gpt-6.1-sol),
[Luna](https://developers.openai.com/api/docs/models/gpt-6-luna),
[pricing](https://developers.openai.com/api/docs/pricing).
