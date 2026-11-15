import json
import tempfile
import unittest
from pathlib import Path

from backend.import_recording import import_recording
from backend.store import Store


class RecordingTests(unittest.TestCase):
    def test_recording_preserves_measurements_provenance_and_unknown_boredom(self):
        with tempfile.TemporaryDirectory() as d:
            root = Path(d)
            source = root / "source"
            (source / "entities").mkdir(parents=True)
            manifest = {
                "schema": "swarm-viewer/v1",
                "swarm": "autoresearch",
                "run_id": "recording-1",
                "title": "autoresearch · hadamard19",
                "agents": [
                    {
                        "agent_id": "worker-1",
                        "native_id": "worker-1",
                        "label": "Worker 1",
                        "type": "worker",
                    },
                    {"agent_id": "critic", "label": "Critic", "type": "critic"},
                ],
                "metric": {"name": "loss", "unit": "", "direction": "minimize"},
                "provenance": {
                    "llm": "actual-model",
                    "gpu": "none (CPU only)",
                    "exa": "live",
                    "memory_backend": "pastdev",
                },
                "time": {"rounds": 1},
                "status": "completed",
            }
            (source / "manifest.json").write_text(json.dumps(manifest))
            for name in ["memory", "sources", "llm_calls"]:
                (source / "entities" / f"{name}.json").write_text("[]")
            (source / "entities" / "experiments.json").write_text(
                json.dumps(
                    [
                        {
                            "id": "exp-1",
                            "kind": "candidate",
                            "description": "measured change",
                            "commit": "abc",
                            "source_ids": [],
                        }
                    ]
                )
            )
            events = [
                {
                    "event_id": "a",
                    "tick": 0,
                    "type": "boredom.measured",
                    "agent_id": "worker-1",
                    "payload": {"B": 0.75, "regime": "BOREDOM_SNAP"},
                },
                {
                    "event_id": "b",
                    "tick": 1,
                    "type": "experiment.finished",
                    "agent_id": "worker-1",
                    "round": 1,
                    "payload": {"metric_value": 0.125, "status": "keep"},
                    "refs": {"experiment_id": "exp-1"},
                },
            ]
            (source / "events.ndjson").write_text("\n".join(json.dumps(e) for e in events))
            store = Store(root / "data" / "db")
            rid = import_recording(store, source, root / "data")
            s = store.get(rid)
            self.assertEqual(s["value"], 0.125)
            self.assertEqual(s["sourceCommit"], "")
            self.assertEqual(s["config"]["seed"], None)
            self.assertEqual(s["provenance"]["execution"], "recorded")
            agents = {a["id"]: a for a in s["agents"]}
            self.assertEqual(agents["worker-1"]["boredom"], 75)
            self.assertIsNone(agents["critic"]["boredom"])
            before = s["lastSequence"]
            import_recording(store, source, root / "data")
            self.assertEqual(store.get(rid)["lastSequence"], before)
            self.assertEqual(len([e for e in store.events(rid) if e["type"] == "archive.event"]), 2)
