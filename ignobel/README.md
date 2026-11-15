# ignobel: a simulated research community

About ten LLM agents, each an expert in a different field with a private lab, try to
produce research worthy of an Ig Nobel prize: work that makes people laugh, then think.
The only thing steering an agent during a run is its own private boredom meter. A
committee scores every study after the run. Control arms test whether boredom-timed
exploration beats randomly timed exploration.

## Agents: mothers and daughters

Agents come in families (`families.yaml`, `families.py`). A **mother** is a department (biology,
chemistry, physics). It does no research. A run starts with only the mothers: in round 0 they talk
with no agenda (`mother_talk_rounds`), then each founds `initial_daughters` **daughter** labs in
subfields it picks itself, inspired by the conversation. Each daughter is an individual expert with
its own methods, search queries, private dataset (generated from a hidden recipe its mother invents)
and private boredom meter. `--agents N` caps how many daughters are founded.

- When a mother's daughters' mean boredom reaches `spawn_threshold`, the mother spawns a new
  daughter in a subfield none of them covers (one LLM call; at most `max_daughters`, one per
  `spawn_cooldown` rounds). The newborn seeds its library and proposes an idea that round, then acts
  like the others. Founding and later births are both `spawn` events (`reason` founded or bored).
- Meetings are chance encounters. Each round a daughter wanders with probability `wander_prob`
  (always, if she is bored) and bumps into a random free colleague from any department. Nothing
  matches them by field, and the conversation has no set topic.
- `roster: flat` in `config.yaml` (or `--roster flat`) uses the old flat list in `agents.yaml`.

`python trace.py <run_dir>` writes `<run_dir>/trace.html`: every event of a run on one page, filterable by agent and event type, with each study's stats, plot and code.

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

`MOCK=1` swaps in a fake LLM, seeded embeddings and canned search results. Study code never
runs on the host: mock mode runs it in a local Docker container (no network, read-only, only the
study's files and a copy of its dataset), real mode in a Modal sandbox (`IGNOBEL_SANDBOX=docker`
keeps real runs in Docker). Docker must be running for mock runs and tests that run studies; if no sandbox is available the run stops with
`lab.SandboxUnavailable`. Real runs read keys from the environment; see `.env.example`.

Any OpenAI-compatible chat provider works: set `OPENAI_BASE_URL`, `OPENAI_API_KEY` and the `MODEL_*`
names. If it has no embeddings model (e.g. Tinker), set `EMBED_BACKEND=local` to embed on CPU with
`fastembed` (`BAAI/bge-small-en-v1.5`, downloaded on first use). Reasoning models (e.g. Tinker's
`thinkingmachines/Inkling-2-Small`) think before answering, so set `REASONING_TOKENS=2000` or their
replies get cut off; cut-off replies are marked `_truncated` and not cached.

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
- `lab.py` real mode uses a Modal sandbox (120 s, no network, no secrets); the call matches the
  Modal 1.6 SDK but hasn't been run against Modal yet. `memory.PastDevMemory` follows the request shapes in the
  team's existing past.dev client and is also marked TODO pending the docs.
- `data/winners.csv` and `data/controls.csv` hold placeholders; replace them with real abstracts.
- Mock mode never writes to `data/seed_cache/`; real Exa results are cached there and committed so
  every arm starts from the same libraries.
