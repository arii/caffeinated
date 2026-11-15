# Artificial Scientist Swarms: Ig Nobel community

Biology, chemistry and physics departments found expert labs that do real research: they read
real papers, load real public datasets and analyse them, aiming for work that makes people
laugh, then think. Nobody directs them. Each lab chooses its own steps, its private boredom
meter and its arm's policy select exploration, refinement or a study, and labs meet by chance.
A separate committee scores study abstracts after the run. Control arms compare
boredom-timed exploration with randomly timed exploration.

## Agents: mothers and daughters

Agents come in families (`families.yaml`, `families.py`). A **mother** is a department (biology,
chemistry, physics). It does no research. A run starts with only the mothers: in round 0 they talk
with no agenda (`mother_talk_rounds`), then each founds `initial_daughters` **daughter** labs in
subfields it picks itself, inspired by the conversation. Each daughter is an individual expert with
its own methods, search queries and private boredom meter. `--agents N` caps how many are founded.

Daughters do real research only (`sources.py`). Nothing is planted: a mother never hands out data.
Each round a daughter chooses her own research steps (`research` events):

- **Papers:** `exa`, `openalex`, `arxiv`, `pubmed` searches, and `read` (one source, one question).
  Exa search and reading go through the team's autoresearch `research.py`, vendored unchanged as
  `autoresearch_research.py`. Every source gets an S id in `<run>/research_log.jsonl`; an idea or
  abstract can only cite S ids its author really holds, so a made-up citation is dropped.
- **Data:** `datasets` finds real public datasets (Zenodo CSV deposits with a DOI, Hugging Face CSV
  datasets) and `load` downloads one into `<run>/data/<agent>/`. A daughter cannot run a study
  until she has loaded one. Study code reads it in the sandbox (`lab_runtime.rows`, or pandas).
- **Evidence:** each `study_result` lists the datasets and sources it rests on, and
  `supported: true` only if the result replicated, the code opened a loaded dataset, and in each
  array it reported more than `traceable_share` (half) of the values are cells of one column of
  that data. The host does this check after the sandbox exits (`lab.trace_values`); `traceable`
  (the share over all reported values) and the column each array came from are in the event and
  the trace. Derived values (ratios, logs, group means) do not trace, so a study that reports a
  derived array is shown with its share but is not eligible. `score.py` ranks
  supported studies; the top one is the community's Ig Nobel candidate.

Real runs execute studies in the `caffeinated-testcases:py311-v1` image (numpy, pandas, scipy; the
same recipe as the autoresearch `testcases/Dockerfile`, copied to `sandbox/Dockerfile` and built on
first use). `--roster flat` and its CSVs in `data/` are a small synthetic fixture kept for offline tests.

- When a mother's daughters' mean boredom reaches `spawn_threshold`, the mother spawns a new
  daughter in a subfield none of them covers (one LLM call; at most `max_daughters`, one per
  `spawn_cooldown` rounds). The newborn seeds its library and proposes an idea that round, then acts
  like the others. Founding and later births are both `spawn` events (`reason` founded or bored).
- Daughters use their own boredom formula (`boredom.daughter_components`):
  `B = .35 repetition + .25 stall + .20 unsurprise + .20 known - .30 engagement`. Failure is not
  subtracted; it is reported as frustration. Each daughter's weights and threshold are shifted by up
  to 0.1 (her temperament). Triggers override B: `stuck` (repeating and failing), `stall` (3 rounds
  without progress) and `no_data` send her wandering; `cooldown` and `satisfied` keep her at the bench.
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

With the same inputs and configuration, repeating the mock command gives byte-identical
`events.jsonl`. A fresh run replaces the selected output directory; use `--out DIR` to
keep several runs. `--resume` continues from the last saved round, truncating events
from an incomplete round. `--rounds` is the target total round count.

`MOCK=1` swaps in a fake LLM, seeded embeddings and canned search results. Study code never
runs on the host: mock mode runs it in a local Docker container (no network, read-only, only the
study's files and permitted dataset or requested measurements), real mode in a Modal sandbox
(`IGNOBEL_SANDBOX=docker` keeps real runs in Docker). Docker must be running for
mock runs and tests that run studies; if no sandbox is available the run stops with
`lab.SandboxUnavailable`. Real runs read keys from the environment; see `.env.example`.

Any OpenAI-compatible chat provider works: set `OPENAI_BASE_URL`, `OPENAI_API_KEY` and the `MODEL_*`
names. If it has no embeddings model (e.g. Tinker), set `EMBED_BACKEND=local` to embed on CPU with
`fastembed` (`BAAI/bge-small-en-v1.5`, downloaded on first use). Reasoning models (e.g. Tinker's
`thinkingmachines/Inkling-2-Small`) think before answering, so set `REASONING_TOKENS=2000` or their
replies get cut off; cut-off replies are marked `_truncated` and not cached.

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

- `boredom_threshold` is 0.5 in `config.yaml`. For the flat roster, B is the clipped value of
  0.5 × similarity + 0.5 × unsurprise − 0.5 × failure, rounded to four decimals
  (daughters use the formula above).
  Similarity compares the latest idea with up to five prior embedded ideas; unsurprise
  uses the last five replicated studies, and failure the last five studies overall.
  The full arm snaps when B is at least the threshold.
- Nobody is paired by field or memory distance: an agent that snaps or wanders meets a
  random free colleague, and stays alone that round if none is free.
- `lab.py` real mode uses a Modal sandbox (120 s, no network, no secrets); the call matches the
  Modal 1.6 SDK but hasn't been run against Modal yet. `memory.PastDevMemory` follows the request shapes in the
  team's existing past.dev client and is also marked TODO pending the docs.
- `data/winners.csv` and `data/controls.csv` hold placeholders; replace them with real abstracts.
- Mock mode never writes to `data/seed_cache/`. Real Exa results are cached there (or under
  EXA_CACHE_DIR); reuse a chosen cache snapshot to compare arms. The search client writes
  cache files but does not commit them.
