import json
from pathlib import Path

import world_model

episodes = json.loads(Path("/work/inputs.json").read_text(encoding="utf-8"))
predictions = []
for episode in episodes:
    try:
        prediction = world_model.predict(
            episode["context_frames"],
            episode["context_actions"],
            episode["future_actions"],
        )
    except Exception:
        prediction = []
    predictions.append(prediction)

Path("/out/predictions.json").write_text(
    json.dumps(predictions, separators=(",", ":")), encoding="utf-8"
)
