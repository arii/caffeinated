# events.jsonl schema

One JSON object per line. Every line has exactly these keys:

| key | type | meaning |
|---|---|---|
| round | int | 0 = seeding and first proposals, then 1..N |
| arm | str | full, random_snap, single, shared_memory, no_exchange |
| seed | int | run seed; same seed and arm gives the same file in mock mode |
| agent | str | agent name from agents.yaml ("world" for nothing; every event has an agent) |
| type | str | one of the types below |
| payload | object | type-specific, see below |
| tokens | int | LLM tokens spent by this action (0 if none) |
| latency_ms | int | wall time of the LLM/search/sandbox call (0 in mock) |

## Types and payloads

- `seed` {query, sources:[{title,url,snippet}]} library seeding before round 0
- `idea` {idea_id, text, kind: "propose"|"refine", source_urls:[...]} a proposed or refined study
- `prediction` {idea_id, direction:"+"|"-", effect_size: float} numeric prediction for that idea
- `boredom` {B, similarity, unsurprise, failure, regime:"EXPLOIT"|"BOREDOM_SNAP", action} private meter, logged for analysis only
- `snap` {partner: str|null, source:{title,url,snippet}} boredom-driven exploration; partner null when unpaired
- `talk` {partner, turn:int, text} one turn of a 3-turn conversation
- `share` {receiver, offered:[item_id], kept:[item_id]} at most 3 items per conversation direction
- `measurement_request` {requester, instrument, args, n, budget_left} owner ran an instrument for another agent
- `study_result` {study_id, idea_id, ok, replicated, stats:{...}, prediction, abstract, plot_path, stderr, novelty:{score, sources:[...]}} one study
- `lesson` {text} the agent's rewritten private lessons note

Search-backed events (seed, snap, study_result.novelty) always carry source URLs in `payload`.
