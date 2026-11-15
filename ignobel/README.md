# Artificial Scientist Swarms: Ig Nobel community

The supplied roster has three researchers with private datasets and a statistician who
requests measurements from other labs. They propose work intended to make people laugh,
then think. Each agent's private boredom meter and its arm's policy select exploration,
refinement or a study; memories, conversations and instrument budgets shape the work.
A separate committee scores study abstracts after the run. Control arms compare
boredom-timed exploration with randomly timed exploration.

## Quick start (no keys)

```bash
cd ignobel
python3 -m venv .venv && source .venv/bin/activate && pip install -r requirements.txt
MOCK=1 python run_arm.py --arm full --agents 4 --rounds 3 --seed 0   # -> runs/full-s0/events.jsonl
MOCK=1 python score.py                                               # -> runs/full-s0/scores.jsonl
MOCK=1 python validate.py                                            # judge check on data/winners.csv
MOCK=1 pytest -q
```

With the same inputs and configuration, repeating the mock command gives byte-identical
`events.jsonl`. A fresh run replaces the selected output directory; use `--out DIR` to
keep several runs. `--resume` continues from the last saved round, truncating events
from an incomplete round. `--rounds` is the target total round count.

`MOCK=1` swaps in a fake LLM, seeded embeddings and canned search results. Study code never
runs on the host: mock mode runs it in a local Docker container (no network, read-only, only the
study's files and permitted dataset or requested measurements), real mode in a Modal sandbox.
Docker must be running for
mock runs and tests that run studies; if no sandbox is available the run stops with
`lab.SandboxUnavailable`. Real runs read keys from the environment; see `.env.example`.

## Layout

| file | job |
|---|---|
| `events.py` | append one JSON line per action to `events.jsonl` ([schema](events.md)) |
| `llm.py` | JSON chat, embeddings, disk cache, token cap, prompt log, mock mode |
| `agents.yaml`, `agents.py` | agent definitions and the six one-call LLM methods |
| `memory.py` | private stores, shared store (control arm), past.dev backend, `share()` |
| `search.py`, `seed.py` | Exa search with cache and key rotation; library seeding |
| `boredom.py`, `policy.py` | the private meter and the three action policies |
| `lab.py`, `lab_runtime.py`, `stats.py` | sandboxed studies, instrument budget, replication check |
| `world.py`, `run_arm.py` | the round loop, state save/resume, arms |
| `committee.py`, `score.py`, `validate.py` | post-run judging, never called during a run |
| `teams.py` | stub behind `teams_enabled` |

## Arms

| arm | policy | memory | share step |
|---|---|---|---|
| full | boredom | private | yes |
| random_snap | random (fixed probability) | private | yes |
| single | never | private, one agent | no |
| shared_memory | boredom | one store for all | no |
| no_exchange | boredom | private | no |

The no_exchange arm disables item exchange, not conversations. All arms select from
the same roster and policy configuration; the single arm always uses one agent.
See the [datasets guide](data/README.md) for private instruments and committee fixtures.

## Meter and implementation notes

- `boredom_threshold` is 0.5 in `config.yaml`. B is the clipped value of
  0.5 × similarity + 0.5 × unsurprise − 0.5 × failure, rounded to four decimals.
  Similarity compares the latest idea with up to five prior embedded ideas; unsurprise
  uses the last five replicated studies, and failure the last five studies overall.
  The full arm snaps when B is at least the threshold.
- When an odd number of agents snap, the one left over talks to the farthest non-snapper
  if one exists. Pairing uses distance between memory centroids.
- `lab.py` real mode uses a Modal sandbox (120 s, no network, no secrets); the call is marked TODO
  until checked against the Modal docs. `memory.PastDevMemory` follows the request shapes in the
  team's existing past.dev client and is also marked TODO pending the docs.
- `data/winners.csv` and `data/controls.csv` hold placeholders; replace them with real abstracts.
- Mock mode never writes to `data/seed_cache/`. Real Exa results are cached there (or under
  EXA_CACHE_DIR); reuse a chosen cache snapshot to compare arms. The search client writes
  cache files but does not commit them.
