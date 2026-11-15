# Artificial Scientist Swarms: Ig Nobel event schema

The native `events.jsonl` log is written by `events.EventLog` and `world.World`.
It is distinct from the normalized viewer events described in the
[viewer contract](../docs/swarm-viewer-api.md).

One JSON object is emitted per logged action. The writer emits these eight keys:

| Key | Type | Meaning |
| --- | --- | --- |
| round | int | 0 for seeding/first proposals, then 1..N |
| arm | str | full, yoked_random, single, shared_memory or no_exchange |
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
- `idea`: {idea_id, kind:"propose"|"refine", title, text, hypothesis, method, source_urls,
  novelty, cross_field, partner, descriptor:{mechanism, method, params, partner}}. `novelty` is the
  Exa novelty of the idea text; `descriptor` validates against `boredom_meter/profiles/ignobel.json`.
- `prediction`: {idea_id, direction:"+"|"-", effect_size}, separate numeric prediction.
- `boredom`: {B, similarity, self_repeat, ext_familiar, unsurprise, stall, frustration,
  regime:"EXPLOIT"|"BOREDOM_SNAP"|"PARADIGM_BREAKOUT"|"FRUSTRATED"|"CONVERGED"|"YOKED_SNAP", action}.
  B excludes frustration.
  The meter is private; the action (REFINE, SNAP, RUN_STUDY, BREAKOUT, REVIEW, REPLICATE or
  HOLD) is selected by the arm's policy.
  Under random/never policies the logged B-derived regime need not describe the chosen action.
- `snap`: {partner: str|null, source:{title,url,snippet}, kind:"snap"|"breakout"}. Logged for every agent selected
  to explore, including random-policy snaps; partner is null when no partner is available.
- `talk`: {partner, turn, text}, one turn of a conversation (three turns by default).
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

Successful search-backed seed, snap, idea.novelty and study_result.novelty records carry source URLs.
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
