# ignobel: a simulated research community

About ten LLM agents, each an expert in a different field with a private lab, try to
produce research worthy of an Ig Nobel prize: work that makes people laugh, then think.
The only thing steering an agent during a run is its own private boredom meter. A
committee scores every study after the run. Control arms test whether boredom-timed
exploration beats randomly timed exploration.

## Quick start (no keys)

```bash
cd ignobel
python3 -m venv .venv && source .venv/bin/activate && pip install -r requirements.txt
MOCK=1 python run_arm.py --arm full --agents 4 --rounds 3 --seed 0   # -> runs/full-s0/events.jsonl
MOCK=1 python score.py                                               # -> runs/full-s0/scores.jsonl
MOCK=1 python validate.py                                            # judge check on data/winners.csv
MOCK=1 pytest -q
```

Running the same command twice gives a byte-identical `events.jsonl`. Add `--out DIR` to keep
several runs, and `--resume` to continue a crashed run from its last saved round.

`MOCK=1` swaps in a fake LLM, seeded embeddings, canned search results and a local
subprocess sandbox. Real runs read keys from the environment; see `.env.example`.

## Layout

| file | job |
|---|---|
| `events.py` | append one JSON line per action to `events.jsonl` (schema in `events.md`) |
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

## Notes for whoever wires in real services

- `boredom_threshold` is 0.5 in `config.yaml`: an agent whose newest idea repeats its last ones
  and whose studies are not failing is bored. Tune it after a small real run.
- When an odd number of agents snap, the one left over talks to the farthest non-snapping agent.
- `lab.py` real mode uses a Modal sandbox (120 s, no network, no secrets); the call is marked TODO
  until checked against the Modal docs. `memory.PastDevMemory` follows the request shapes in the
  team's existing past.dev client and is also marked TODO pending the docs.
- `data/winners.csv` and `data/controls.csv` hold placeholders; replace them with real abstracts.
- Mock mode never writes to `data/seed_cache/`; real Exa results are cached there and committed so
  every arm starts from the same libraries.
