# Artificial Scientist Swarms: Ig Nobel event schema

The native `events.jsonl` log is written by `events.EventLog` and `world.World`.
It is distinct from the normalized viewer events described in the
[viewer contract](../docs/swarm-viewer-api.md).

One JSON object is emitted per logged action. The writer emits these eight keys:

| Key | Type | Meaning |
| --- | --- | --- |
| round | int | 0 for seeding/first proposals, then 1..N |
| arm | str | full, random_snap, single, shared_memory or no_exchange |
| seed | int | Run seed; identical mock inputs/configuration produce identical events |
| agent | str | Acting agent's name from agents.yaml; measurement requests use the instrument owner |
| type | str | One of the ten event types below |
| payload | object | Event-specific fields |
| tokens | int | Chat token usage charged to the action; zero for actions without a chat charge |
| latency_ms | int | Logged chat/search latency, zero in mock mode; not a complete action or sandbox duration |

There is no native timestamp or global tick. The reader validates event types but does
not enforce payload shapes; the fields below describe the producer's current writes.

## Types and payloads

- `seed`: {query, sources:[{title,url,snippet}]}, library seeding before first proposals.
- `idea`: {idea_id, kind:"propose"|"refine", title, text, hypothesis, method, source_urls}.
- `prediction`: {idea_id, direction:"+"|"-", effect_size}, separate numeric prediction.
- `boredom`: {B, similarity, unsurprise, failure, regime:"EXPLOIT"|"BOREDOM_SNAP", action}.
  The meter is private; the action is REFINE, SNAP or RUN_STUDY, selected by the arm's policy.
  Under random/never policies the logged B-derived regime need not describe the chosen action.
  A daughter lab's event instead carries {B, repetition, stall, unsurprise, known, engagement,
  frustration, similarity, failure, threshold_shift, trigger, regime, action}; `trigger` is
  null or one of stuck, stall, no_data, cooldown, satisfied.
- `snap`: {partner: str|null, source:{title,url,snippet}}. Logged for every agent selected
  to explore, including random-policy snaps; partner is null when no partner is available.
- `talk`: {partner, turn, text, overlap?}, one turn of a conversation: a chance meeting between two
  agents (`talk_turns` turns, three by default), or the mothers' round-0 meeting (agent =
  mother, partner = the other mothers). The first turn of a meeting carries `overlap`
  {idea_similarity?, datasets?:[title]} when the two daughters were told that their current ideas
  are near-identical or that they use the same dataset.
- `share`: {receiver, offered:[item_id], kept:[item_id]}, bounded by max_share_items
  (default three) in each conversation direction when exchange is enabled.
- `measurement_request`: {requester, instrument, args, n, budget_left} when successful.
  Failures instead carry {requester, instrument, error}. The owner is the event agent;
  requested data is passed to the study, not included in this event.
- `study_result`: {study_id, idea_id, title, ok, replicated, stats, prediction, abstract,
  plot_path, stderr, calls, code, measurements, novelty:{score,novel,sources}}.
  stats contains the replication verdict, effect_size, direction, p, alpha_eff, halves,
  n and reason. code is truncated to 4000 characters; measurements is a count, calls is
  the instrument-call charge, and plot_path is relative to the run directory or null.
  Novelty sources contain title, url and similarity. Logged tokens/latency combine
  study-code and abstract chat calls, not sandbox runtime.
- `lesson`: {text}, the rewritten private lesson note after each round.
- `spawn` {daughter, field, reason, field_B?, instruments:[name]} a mother (agent = mother name) started a daughter lab: `reason` is `founded` (round 0, after the mothers' meeting) or `bored` (its daughters' mean boredom reached `spawn_threshold`; `field_B` is that mean)
- `research` {tool, ...} one research step a daughter lab chose for itself. `tool` is `exa` / `openalex` / `arxiv` / `pubmed` {query, results:[{id (S id), title, url}]}, `read` {source, url, question, notes}, `datasets` {query, results:[{lead (D id), title, url, license, columns}]} or `load` {dataset:{name, id, title, url, license, rows, sha256, columns}}. A step that failed has `error` instead. Every S id is a record in the run's `research_log.jsonl` (autoresearch `research.py` format).
- `experiment_request` {id, idea_id, title, question, protocol, materials, design:"two_group"|"corr", measure,
  compare, n, refuted_if, prediction} an experiment a daughter lab says her idea needs because no public
  dataset can answer it. `line` is the id of the proposal that idea descends from. It is a proposal, not a finding.
- `experiment_result` {request_id, provenance, ...} what the bench (`bench.py`) did with a request. The bench
  only takes a request once its idea has survived `lab_after_rounds` rounds: the daughter is still on that line.
  `provenance: "simulated"` {supported: false, ok, detected, stats, n, needed_n, traceable, code, stderr}: a
  rehearsal of her analysis on placeholder measurements drawn from her own prediction; never evidence.
  `provenance: "returned"` {performed_by, performed_at, apparatus, notes, dataset:{name, id, title, url,
  license, rows, sha256, columns}}: real measurements somebody performed and returned, now a dataset of
  hers; or {error} if the return was not accepted.

For daughter labs, `study_result` also has `evidence` {datasets:[{name, id, title, url, license,
rows, sha256}], citations:[{id, title, url}], read:[name], traceable, trace:{array:{column, share}},
finding:[{dataset, column, sketch}], supported}. `read` lists the loaded datasets the code opened, `traceable` is the share of all
reported values found as cells of those datasets, and `trace` gives each reported array's best
column and share. `supported` means the result replicated, the code opened a loaded dataset, and
every reported array has more than `traceable_share` of its values in one column of it.
`finding` has one entry per traced array: the sha256 of the dataset file, the column, and a sketch
of the reported values (`lab.sketch`), which `score.py` uses to give a finding to the first
supported study that reported it (`preceded_by` on later rows of `scores.jsonl`).

Successful search-backed seed, snap and study_result.novelty records carry source URLs.
Mock results use example.org URLs. Budget or service failures can stop an action before
an event is emitted. Search seeding has no chat-token charge.

## Checkpoints and examples

The run writes state.json after round 0 and every completed round. Resume truncates
events.jsonl to that checkpoint's saved byte offset before continuing; consumers should
not treat lines from an interrupted, uncheckpointed round as permanent.

[Mock events](examples/mock_events.jsonl) and [committee scores](examples/mock_scores.jsonl)
are bundled examples. Recreate a current fixture with
`MOCK=1 python run_arm.py --arm full --agents 4 --rounds 3 --seed 0`.
Post-run scoring writes a separate scores.jsonl and does not append committee decisions
to native events or feed them back into agents.
