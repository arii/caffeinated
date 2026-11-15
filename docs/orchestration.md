# Swarm orchestration

`swarm.py` is the conductor of an Artificial Scientist Swarm. The conductor
is plain, deterministic code; only scouts, workers and the critic call an LLM.
One run = one arm on one task for up to 10 rounds.

```sh
python3 swarm.py --task bixbench_mini --arm B --rounds 4 --llm tinker --out out/bix
```

## Agents

| Agent | Identity | Per round |
|---|---|---|
| conductor | code (`orchestrate`) | measures boredom, assigns roles, runs evaluations, keeps or discards |
| `worker-1`…`worker-4` | LLM | one role each: `exploit` (refine the best) or `divergent` (structurally different idea); some also scout |
| scout | a worker with the scout flag | Exa query → pick a source → write a lead to memory |
| critic | LLM + evaluator | re-scores the provisional best on a second seed, writes a verdict and a lesson |

The viewer keeps identity (`type`: worker, critic, …) separate from the
round's assignment (`role`: exploit, divergent, scout).

## A round

```
1. measure   meter.status(ledger) → swarm B, regime; per-agent B and components
2. assign    allocate_roles() → roles + scouts            → assignments.jsonl
3. scout     for each scout: recall lessons → query Exa → pick source → lead   → research_log, memory
4. propose   each worker: recall results/leads/claims → LLM JSON proposal
             {descriptor, idea, rationale, source_ids, predicted_delta, edits}
             invalid JSON or edit → one repair attempt
5. gate      boredom gate (regime rules) + prior-art check (Exa) → rejected proposals are logged
6. commit    one git commit per candidate with Descriptor/Source/Prior-art trailers
7. evaluate  task evaluator in a network-less Docker sandbox → dev loss
8. critic    if a candidate beats best − accept_margin: second-seed run;
             accept iff mean(run1, run2) < best − accept_margin → verdict + lesson
9. record    ledger.jsonl, results.tsv, critic.tsv, memory writes, round tags
```

Rejected, crashed and discarded attempts stay in the ledger; they are what
drives `fail_rate`, `trivial_rate` and the gate's "too close to a failure"
rule.

## Evaluation splits and research policy

For BixBench and Playworld, every round and critic evaluation uses the `dev`
split. BixBench still exposes all question text and public data, but grades 10
of 17 questions during the run; Playworld uses development seeds
100,000–100,199 and test seeds 300,000–300,199. At completion, `held_out.py`
grades the baseline and best accepted commit once on the separate test split and writes
`held_out_test.json`. The artifact compares baseline and best on test, includes
a task-specific `reference_note`, and sets `reference_test_loss` to null.
`export_viewer.py` adds this object to the viewer manifest as `held_out_test`,
without changing published events.

BixBench's `task.json` sets `"research": "off"`, which overrides `--exa` and
`--literature` and disables both Exa and keyless search. Its host evaluator
also rejects source code containing numeric literals matching gold answers
(for the current split, except small integers and numbers stated in public
questions); it reports the question ID, not the answer value.

## Role allocation

From `allocate_roles()` with 4 workers. Bored agents (`B ≥ 0.70`) are chosen
first for divergent and scout slots; ties break by name, so allocation is
reproducible.

| Regime | exploit | divergent | scouts (Exa on) |
|---|---|---|---|
| EXPLOIT | 3 | 1 (most bored, else least bored) | the divergent worker |
| BOREDOM_SNAP | 1 | 3 | `min(2, 1 + #bored)` |
| PARADIGM_BREAKOUT | 0 | 4 | 2 |
| CONVERGED | 4 (confirmation only) | 0 | 1 |
| arm A (any) | 3 | 1 | 1 |

## Arms

| Arm | Boredom Meter | Exa | Memory |
|---|---|---|---|
| A | off (fixed 3 exploit / 1 divergent, critic without LLM) | on | past.dev |
| B | on | on | past.dev |
| C | on | off | past.dev |
| D | on | on | local file |

All arms share the task evaluator and budget, so A vs B isolates the meter.

## Shared memory

Every agent reads and writes the same store (`--memory-backend pastdev|local|none`):
scout leads, worker claims ("who is testing what"), results, critic verdicts
and lessons. Each item carries `author` and `type`; recalls are logged per
worker in `memory_log.jsonl`, which is how the viewer shows who reused whose
lead.

## LLM backends

`--llm tinker` (base-model sampling only, no training), `--llm openai`, or
`--llm fake` (offline, deterministic plumbing checks). Every call is logged
in `llm_log.jsonl` with prompt hash, prompt, response and any returned
reasoning.

## Outputs of a run (`--out`)

| File | Contents |
|---|---|
| `ledger.jsonl` | the meter's source of truth |
| `results.tsv`, `critic.tsv` | human-readable results and critic verdicts |
| `assignments.jsonl`, `boredom_log.jsonl` | allocation and boredom per round |
| `research_log.jsonl` | Exa queries, sources, extracts, prior-art checks |
| `memory.jsonl`, `memory_log.jsonl` | memory writes and recalls |
| `llm_log.jsonl` | every LLM call |
| `runs/` | per-candidate evaluator logs |

`export_viewer.py` turns this directory into `swarm-viewer/v1`, and
`viewer/app.py` serves it (see [architecture](architecture.md)).
