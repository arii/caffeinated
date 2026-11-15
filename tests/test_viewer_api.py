import json
import tempfile
import unittest
from pathlib import Path

import export_viewer
from tests.test_export_viewer import autoresearch_run

try:
    from fastapi.testclient import TestClient
    import viewer_api
except ImportError:  # optional `api` extra
    TestClient = None


@unittest.skipIf(TestClient is None, "fastapi not installed")
class ViewerApiTests(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory()
        root = Path(self.tmp.name)
        out = autoresearch_run(root)
        (out / "runs").mkdir()
        (out / "runs" / "c1.log").write_text("loss=0.5\n")
        self.run_dir = export_viewer.export(out, root / "data")
        self.manifest = json.loads((self.run_dir / "manifest.json").read_text())
        self.events = [json.loads(line) for line in (self.run_dir / "events.ndjson").read_text().splitlines()]
        self.client = TestClient(viewer_api.create_app(root / "data"))
        self.base = f"/api/v1/runs/{self.manifest['run_id']}"
        self.worker = next(a["agent_id"] for a in self.manifest["agents"] if a["native_id"] == "worker-1")

    def tearDown(self):
        self.tmp.cleanup()

    def get(self, path, **params):
        response = self.client.get(self.base + path, params=params)
        self.assertEqual(response.status_code, 200, response.text)
        return response.json()

    def test_runs_manifest_and_timeline_match_static_export(self):
        runs = self.client.get("/api/v1/runs").json()
        self.assertEqual([r["run_id"] for r in runs], [self.manifest["run_id"]])
        self.assertEqual(runs[0]["ticks"], len(self.events))
        self.assertEqual(self.get(""), self.manifest)
        self.assertEqual(self.get("/timeline"), json.loads((self.run_dir / "timeline.json").read_text()))

    def test_world_seek_matches_replay_at_every_tick(self):
        entities = {p.stem: {e["id"]: e for e in json.loads(p.read_text())}
                    for p in (self.run_dir / "entities").glob("*.json")}
        for tick in range(len(self.events)):
            expected = export_viewer.world_at(self.events, self.manifest, entities, tick)
            self.assertEqual(self.get("/world", tick=tick), expected)
        self.assertEqual(self.get("/world", round=1)["round"], 1)
        self.assertEqual(self.get("/world")["tick"], len(self.events) - 1)

    def test_events_page_filter_and_ndjson(self):
        page = self.get("/events", after=0, limit=3)
        self.assertEqual([e["tick"] for e in page["events"]], [1, 2, 3])
        self.assertEqual(page["next_after"], 3)
        mine = self.get("/events", agent_id=self.worker)["events"]
        self.assertTrue(mine and all(e["agent_id"] == self.worker for e in mine))
        response = self.client.get(self.base + "/events", params={"limit": 2},
                                   headers={"Accept": "application/x-ndjson"})
        self.assertEqual(len(response.text.splitlines()), 2)

    def test_agent_detail_and_collections_respect_time(self):
        early = self.get(f"/agents/{self.worker}", round=1)
        late = self.get(f"/agents/{self.worker}")
        self.assertEqual(early["identity"]["native_id"], "worker-1")
        self.assertEqual(early["state"]["role"], "exploit")
        self.assertEqual(late["state"]["role"], "divergent")
        self.assertEqual([role for _, role in late["history"]["roles"]], ["exploit", "divergent"])
        calls = self.get(f"/agents/{self.worker}/llm_calls")
        self.assertEqual(len(calls), 1)
        self.assertNotIn("prompt", calls[0])
        full = self.get(f"/entities/llm_call/{calls[0]['id']}")
        self.assertEqual(full["reasoning"], "thinking text")
        questions = self.get(f"/agents/{self.worker}/questions", until=0)
        self.assertEqual(questions, [])

    def test_ledger_discoveries_artifacts(self):
        ledger = self.get("/ledger")
        self.assertIn("experiment:c1", {e["id"] for e in ledger})
        self.assertEqual(len(self.get("/discoveries")), 1)
        self.assertEqual(self.get("/discoveries", until=0), [])
        log = next(e for e in ledger if e["id"] == "experiment:c1")["artifacts"]["log"]
        self.assertEqual(self.client.get(f"{self.base}/artifacts/{log}").text, "loss=0.5\n")
        self.assertEqual(self.client.get(f"{self.base}/artifacts/..%2Fmanifest.json").status_code, 404)

    def test_errors_caching_read_only_and_stream(self):
        self.assertEqual(self.client.get("/api/v1/runs/nope").json(), {"error": "unknown_run"})
        self.assertEqual(self.client.get(self.base + "/agents/nope").status_code, 404)
        response = self.client.get(self.base + "/world", params={"tick": 10_000})
        self.assertEqual((response.status_code, response.json()["error"]), (416, "tick_out_of_range"))
        first = self.client.get(self.base)
        self.assertIn("immutable", first.headers["cache-control"])
        again = self.client.get(self.base, headers={"If-None-Match": first.headers["etag"]})
        self.assertEqual(again.status_code, 304)
        self.assertEqual(self.client.post("/api/v1/runs").status_code, 405)
        last = len(self.events) - 1
        stream = self.client.get(self.base + "/stream", params={"after": last - 2}).text
        self.assertEqual(stream.count("event: swarm-event"), 2)
        self.assertIn(f"id: {last}\n", stream)
        self.assertIn("event: run.status", stream)


if __name__ == "__main__":
    unittest.main()
