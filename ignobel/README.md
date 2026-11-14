# ignobel: a simulated research community

About ten LLM agents, each an expert in a different field with a private lab, try to
produce research worthy of an Ig Nobel prize: work that makes people laugh, then think.
The only thing steering an agent during a run is its own private boredom meter. A
committee scores every study after the run. Control arms test whether boredom-timed
exploration beats randomly timed exploration.

## Quick start (no keys)

```bash
cd ignobel
python3 -m venv .venv && .venv/bin/pip install -r requirements.txt
MOCK=1 .venv/bin/python run_arm.py --arm full --agents 4 --rounds 3 --seed 0 --out runs/mock
MOCK=1 .venv/bin/python score.py --events runs/mock/events.jsonl
MOCK=1 .venv/bin/pytest -q
```

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
