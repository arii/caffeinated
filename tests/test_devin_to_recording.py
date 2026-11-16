import json
import tempfile
import unittest
from collections import Counter
from pathlib import Path

from backend.replay import RecordingCatalog
from scripts.devin_to_recording import convert, main

FIXTURE = Path(__file__).parent / "fixtures" / "devin_session_export.json"


def load():
    return json.loads(FIXTURE.read_text())


def snapshot(path):
    return {
        str(p.relative_to(path)): p.read_bytes() for p in sorted(path.rglob("*")) if p.is_file()
    }


class DevinToRecordingTest(unittest.TestCase):
    def test_maps_session_events(self):
        manifest, timeline, events, entities = convert(load())
        self.assertEqual([e["tick"] for e in events], list(range(len(events))))
        types = Counter(e["type"] for e in events)
        self.assertEqual(types["run.started"], 1)
        self.assertEqual(types["run.finished"], 1)
        self.assertEqual(types["round.started"], 2)
        self.assertEqual(types["agent.assigned"], 1)
        self.assertNotIn("simple_activity_update", {e["source"]["native_type"] for e in events})
        self.assertEqual([a["type"] for a in manifest["agents"]], ["world", "conductor", "worker"])
        status = {row["description"]: row["status"] for row in entities["experiments"].values()}
        self.assertEqual(status, {"test": "keep", "lint": "crash"})
        self.assertEqual(manifest["time"]["rounds"], 2)
        self.assertEqual(timeline["rounds"][0]["tick_end"] + 1, timeline["rounds"][1]["tick_start"])
        child = manifest["agents"][2]["agent_id"]
        root = manifest["agents"][1]["agent_id"]
        assigned = next(e for e in events if e["type"] == "agent.assigned")
        self.assertEqual(assigned["agent_id"], child)
        reply = next(
            e
            for e in events
            if e["source"]["native_type"] == "devin_message" and e["agent_id"] == child
        )
        self.assertEqual(reply["refs"]["to_agent_id"], root)
        question = next(iter(entities["questions"].values()))
        self.assertEqual(len(question["answered_by"]), 1)
        observation = next(iter(entities["observations"].values()))
        self.assertEqual(observation["summary"], "exit 0: # caffeinated")

    def test_output_is_deterministic_and_replayable(self):
        with tempfile.TemporaryDirectory() as tmp:
            outputs = []
            for name in ("a", "b"):
                dest = Path(tmp) / name
                main([str(FIXTURE), "--dest", str(dest)])
                outputs.append(snapshot(dest))
            self.assertEqual(outputs[0], outputs[1])
            catalog = RecordingCatalog(Path(tmp) / "none.zip", [Path(tmp) / "a"], repo_root=None)
            [item] = catalog.list()
            recording = catalog.get(item["id"])
            self.assertEqual(len(recording["events"]), len(convert(load())[2]))
            self.assertFalse(recording["manifest"]["live"])

    def test_single_session_root_is_a_worker(self):
        export = load()
        export["sessions"] = export["sessions"][:1]
        manifest = convert(export)[0]
        self.assertEqual([a["type"] for a in manifest["agents"]], ["world", "worker"])

    def test_rejects_other_schemas(self):
        with self.assertRaises(ValueError):
            convert({**load(), "schema": "other"})


if __name__ == "__main__":
    unittest.main()
