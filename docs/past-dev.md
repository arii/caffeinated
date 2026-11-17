# past.dev memory design and challenge results

Historical scope: the live comparisons below were recorded during the November 2026 hackathon work. They are not a current service benchmark. For the separate same-data retrieval experiment, see [memory comparison](../experiments/memory-comparison/README.md).


past.dev holds the facts that change during a run (hypotheses and their test results), what
agents share with each other, and lessons kept across runs. Each agent reads it with its own
identity, and past.dev's audiences decide what that read returns.

### Agents

**Research swarm** (`swarm.py --memory-backend pastdev`; code in `memory.py`)

| Agent | Writes | Reads | Identity | Audiences |
| --- | --- | --- | --- | --- |
| conductor | `assignment` (who tests what) | — | author `conductor` | `run-<arm>-<run>` |
| worker-1…4 | `lead`, `claim`, `result`, one stable `hypothesis` per idea | other workers' claims, results and hypothesis statuses before proposing | reader `reader-<arm>-<run>` (traits `arm`, `run`, `task`) | `run-<arm>-<run>` for this run's notes; `lab-<arm>-<task>` for hypotheses, lessons, verdicts and failed results that later runs reuse |
| spawned workers | `lead`, `claim`, `result`, one stable `hypothesis` per idea | only notes written by that worker | identity `solo-<arm>-<run>-<agent>` (traits `arm`, `run: <run>.<agent>`) | audience `solo-<arm>-<run>-<agent>`; the team reader can also read these notes |
| critic | `verdict`, `lesson` | — | author `critic` | `lab-<arm>-<task>` |

Both audiences are rule audiences over identity traits, so an arm's reader never sees
another arm's or another task's memories.

### Layers

- **Working:** the prompt. The current assignment, dataset and code stay in each agent's
  prompt and are not shared.
- **Episodic:** past.dev data points. Every claim, result, assignment, share and lesson is
  written with its author identity, timestamp and audience.
- **Semantic:** past.dev memories. Each idea is written under one stable source id
  (`hyp-<arm>-<sha1(idea)>`): "being tested" first, then "confirmed", "refuted" or "crashed"
  with the score. Facts that are updated in place show which version is current
  (`supersededAt`), so a read answers "what is true now", not "what looks similar".
- **Procedural:** `program.md` and the prompts in git.
- **Not in past.dev:** literature and datasets (Exa and OpenAlex, cached per run) and the score
  ledger (`ledger.jsonl`, the source of truth for scores).

Expected result before the run: with native audiences, past.dev would return fewer
out-of-scope records. We also expected recalls to depend less on the local mirror, and stable
ids to stop a refuted idea from being re-proposed.

### Results

What changed, in `memory.py` and `swarm.py`:

| Before | Now |
| --- | --- |
| One shared reader; out-of-scope records filtered on our side by metadata | Per-run reader identity and rule audiences; past.dev enforces scope |
| A claim and its result both stay "current" | One stable `hypothesis` id per idea, updated with each status |
| Abandoned rounds hidden by a clock check on resume | `rollback_memories` deletes them (`POST /data-points/delete`) and restores a stable record's earlier version |
| Time cutoff applied on our side | `queryTimestamp`, `occurredFrom`, `occurredTo` and `sort` passed to recall; source excerpts printed |

Short live comparison: ignobel task, gpt-5-mini, Exa on, seed 7. Both runs were in progress when
these numbers were taken.

| | Earlier implementation | Audience-aware implementation |
| --- | --- | --- |
| recalls | 61 | 69 |
| past.dev results dropped by our scope filter | 267 | 40 (all from records written before audiences existed) |
| results filled from the local mirror | 153 of 191 | 81 of 300 |
| recalls with at least one result written by another worker | — | 69 of 69 (expected: all workers share one run audience) |
| recall latency, p50 | — | 587 ms |

Example cross-agent read from the audience-aware run: worker-2 asks "current status of hypotheses
already tested". It gets 5 stable hypothesis records written by worker-1, worker-3 and
worker-4. The meter measures and regulates exploration; workers propose ideas, and evaluators and
critics decide outcomes recorded in the ledger. past.dev changes only what each worker reads before proposing, and these numbers do
not show that the reads changed which ideas were proposed.

Update benchmark (`experiments/memory-updates/updates.py`): 11 hypotheses from the overnight
run, each written as "being tested" and then its final status.

| Store | Current status returned now | "being tested" returned at a time between the two writes |
| --- | --- | --- |
| local append-only | 100% | 100% |
| past.dev append-only (two ids) | 73% (27% returned the stale status) | 100% |
| past.dev stable id | did not finish (an update to an existing id was still ingesting after 180 s) | — |

### Caveats

- **No Kimi run.** Tinker was out of credit, so the live comparison uses gpt-5-mini with the Ig
  Nobel committee off. It is not comparable with the overnight Kimi run, and it is short and
  single-seed.
- **The benchmark is too easy for local memory.** Both versions share the query's words, and
  the local store breaks ties by recency, so it scores 100%. It does not show past.dev beating
  a local store.
- **Stable-id updates were slow.** Ingesting a new version of an existing id sometimes took
  over 180 s. The stable-id benchmark arm did not finish for that reason.
- **`supersededAt` not observed.** We did not see `supersededAt` in our earlier probe
  responses; the latest version was returned instead.
- **Daughter labs are not on `main`.** The mother/daughter-lab runtime is not on
  `main`. Its past.dev version (one identity, private audience and inbox per lab, sharing only
  through `share()`) is archived at the tag `archive/families-pastdev`.
- **The local mirror still exists.** It fills recalls while a write is still ingesting. The
  scope filter also still runs for records written before audiences existed.
