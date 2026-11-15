import json
import tempfile
import threading
import time
import unittest
from pathlib import Path

from fastapi.testclient import TestClient

import export_viewer
from test_export_viewer import autoresearch_run
from viewer.app import _read_events, create_app


class ViewerApiTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        root = Path(self.temp.name)
        self.out = autoresearch_run(root)
        self.data = root / "data"
        self.run_dir = export_viewer.publish(self.out, self.data, final=False, status="running")
        self.run_id = self.run_dir.name
        self.client = TestClient(create_app(self.data, poll_interval=0.02, heartbeat_interval=0.05))

    def tearDown(self):
        self.temp.cleanup()

    def test_read_routes_and_errors(self):
        base = f"/api/v1/runs/{self.run_id}"
        runs = self.client.get("/api/v1/runs")
        self.assertEqual(runs.status_code, 200)
        self.assertEqual(runs.json()[0]["run_id"], self.run_id)
        self.assertEqual(self.client.get(base).json()["schema"], "swarm-viewer/v1")
        timeline = self.client.get(base + "/timeline").json()
        self.assertGreater(timeline["ticks"], 0)
        tick = timeline["keyframes"][-1]
        world = self.client.get(base + "/world", params={"at": f"tick={tick}"})
        self.assertEqual(world.status_code, 200)
        frame = json.loads((self.run_dir / "keyframes" / f"{tick}.json").read_text())
        self.assertEqual(world.json()["agents"], frame["agents"])
        self.assertEqual(self.client.get(base + "/world", params={"at": "round=1"}).status_code, 200)
        self.assertEqual(self.client.get(base + "/world", params={"at": "tick=99999"}).status_code, 416)

        events = self.client.get(base + "/events", params={"limit": 2}).json()
        self.assertEqual(len(events["events"]), 2)
        self.assertIsNotNone(events["next_after"])
        ndjson = self.client.get(base + "/events", headers={"Accept": "application/x-ndjson"})
        self.assertEqual(ndjson.status_code, 200)
        self.assertTrue(ndjson.text.endswith("\n"))

        manifest = self.client.get(base).json()
        worker = next(agent for agent in manifest["agents"] if agent["native_id"] == "worker-1")
        detail = self.client.get(base + "/agents/worker-1")
        self.assertEqual(detail.status_code, 200)
        self.assertEqual(detail.json()["identity"]["agent_id"], worker["agent_id"])
        for collection in (
            "questions", "observations", "hypotheses", "experiments", "rewards",
            "diary", "memory", "llm_calls",
        ):
            self.assertEqual(
                self.client.get(base + f"/agents/worker-1/{collection}").status_code, 200
            )
        self.assertEqual(self.client.get(base + "/ledger").status_code, 200)
        self.assertEqual(self.client.get(base + "/discoveries").status_code, 200)

        experiment_id = next(iter(json.loads(
            (self.run_dir / "entities" / "experiments.json").read_text()
        )))["id"]
        self.assertEqual(self.client.get(base + f"/entities/experiment/{experiment_id}").status_code, 200)
        self.assertEqual(self.client.get(base + "/entities/experiment/missing").status_code, 404)
        self.assertEqual(self.client.get("/api/v1/runs/missing").json(), {"error": "unknown_run"})
        self.assertEqual(self.client.get(base + "/agents/missing").json(), {"error": "unknown_agent"})

    def test_artifacts_etags_and_cors(self):
        base = f"/api/v1/runs/{self.run_id}"
        artifact_dir = self.run_dir / "artifacts"
        artifact_dir.mkdir()
        (artifact_dir / "run.log").write_text("safe artifact")
        response = self.client.get(base + "/artifacts/run.log")
        self.assertEqual(response.text, "safe artifact")
        self.assertTrue(response.headers["etag"].startswith("W/"))
        self.assertEqual(
            self.client.get(base + "/artifacts/%2e%2e%2fmanifest.json").status_code, 404
        )
        self.assertEqual(
            self.client.get(base, headers={"Origin": "http://localhost:5173"}).headers[
                "access-control-allow-origin"
            ],
            "http://localhost:5173",
        )

        finished_dir = export_viewer.publish(self.out, self.data, final=True, status="finished")
        finished = self.client.get(f"/api/v1/runs/{self.run_id}")
        self.assertEqual(finished.headers["cache-control"], "public, max-age=31536000, immutable")
        self.assertEqual(finished.status_code, 200)
        cached = self.client.get(
            f"/api/v1/runs/{self.run_id}", headers={"If-None-Match": finished.headers["etag"]}
        )
        self.assertEqual(cached.status_code, 304)
        self.assertEqual(finished_dir, self.run_dir)

    def test_world_timestamp_selector_compares_instants(self):
        events_path = self.run_dir / "events.ndjson"
        events = _read_events(events_path)
        events[0]["ts"] = "2025-01-02T03:04:05.123456Z"
        events[1]["ts"] = "2025-01-01T22:04:05.123456-05:00"
        events_path.write_text("".join(json.dumps(event) + "\n" for event in events))
        response = self.client.get(
            f"/api/v1/runs/{self.run_id}/world",
            params={"at": "ts=2025-01-01T22:04:05.123456-05:00"},
        )
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()["tick"], 1)
        self.assertEqual(
            self.client.get(
                f"/api/v1/runs/{self.run_id}/world",
                params={"at": "ts=not-a-date"},
            ).status_code,
            416,
        )

    def test_world_at_zero_without_keyframe_uses_manifest_baseline(self):
        manifest = json.loads((self.run_dir / "manifest.json").read_text())
        manifest["baseline"] = 0.058514
        events = _read_events(self.run_dir / "events.ndjson")
        world = export_viewer.world_at(
            events, manifest, {}, 0, keyframes={}
        )
        self.assertEqual(world["tick"], 0)
        self.assertEqual(world["swarm"]["baseline"], 0.058514)
        self.assertEqual(
            export_viewer.world_at(events, manifest, {}, 0, keyframes={0: world}),
            world,
        )

    def test_stream_appends_partial_line_and_resumes_without_duplicates(self):
        base = f"/api/v1/runs/{self.run_id}"
        events_path = self.run_dir / "events.ndjson"
        existing = _read_events(events_path)
        after = existing[-1]["tick"]
        appended = {**existing[-1], "tick": after + 1, "event_id": "test:next"}
        data = (json.dumps(appended, sort_keys=True) + "\n").encode()
        events_path.write_bytes(events_path.read_bytes() + data[:len(data) // 2])
        self.assertEqual(_read_events(events_path), existing)

        result = {}
        started = threading.Event()

        def consume():
            started.set()
            with self.client.stream("GET", base + "/stream", params={"after": after}) as response:
                result["status"] = response.status_code
                result["body"] = "".join(response.iter_text())

        thread = threading.Thread(target=consume)
        thread.start()
        self.assertTrue(started.wait(2))
        time.sleep(0.1)
        with events_path.open("ab") as stream:
            stream.write(data[len(data) // 2:])
        manifest_path = self.run_dir / "manifest.json"
        manifest = json.loads(manifest_path.read_text())
        manifest["time"]["ticks"] = after + 2
        manifest_path.write_text(json.dumps(manifest), encoding="utf-8")
        time.sleep(0.1)
        manifest["status"] = "finished"
        manifest["live"] = False
        manifest_path.write_text(json.dumps(manifest), encoding="utf-8")
        thread.join(3)
        self.assertFalse(thread.is_alive())
        self.assertEqual(result["status"], 200)
        self.assertEqual(result["body"].count("event: swarm-event"), 1)
        self.assertIn(f"id: {after + 1}", result["body"])
        self.assertIn('"status": "finished"', result["body"])

        resumed = self.client.get(
            base + "/stream", headers={"Last-Event-ID": str(after + 1)}
        )
        self.assertEqual(resumed.status_code, 200)
        self.assertNotIn("event: swarm-event", resumed.text)
        self.assertIn("event: run.status", resumed.text)


if __name__ == "__main__":
    unittest.main()
