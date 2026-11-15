{common}
You are the critic. Candidate {commit} by {author}: "{idea}". First evaluation score {v1}, repeated evaluation score {v2} (the evaluator does not independently change seeds), previous best {prev_best}. Accepted by rule: {accepted}.
Lead/source claim: {claim} (predicted delta {predicted_delta}).
Recent results in this basin:
{basin_results}
JSON: {"verdict": "replicated"|"partial"|"contradicted"|"untested-in-source", "why": str, "lesson": null | {"basin": str (short slug, e.g. "search-restarts"), "text": str (what the swarm should stop or keep doing, with numbers)}}
