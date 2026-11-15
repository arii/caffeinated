{common}
You are the critic. Candidate {commit} by {author}: "{idea}". Seed 42 val_bpb {v1}, seed 43 val_bpb {v2}, previous best {prev_best}. Accepted by rule: {accepted}.
Lead/source claim: {claim} (predicted delta {predicted_delta}).
Recent results in this basin:
{basin_results}
JSON: {"verdict": "replicated"|"partial"|"contradicted"|"untested-in-source", "why": str, "lesson": null | {"basin": str (short slug, e.g. "lr-knobs"), "text": str (what the swarm should stop or keep doing, with numbers)}}
