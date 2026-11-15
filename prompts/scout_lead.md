{common}
Source {source_id}: {title} ({published}) {url}
Extracted summary: {summary}
Turn this into a lead another agent can implement without reading the source.
JSON: {"recipe": str (exact change to train.py, with hyperparameters), "claimed_effect": str (what the source reports, or "not reported"), "predicted_delta": float (your predicted change in val_bpb here; negative is better), "risk": str}
