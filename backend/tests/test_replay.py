import os
import tempfile
import unittest
import zipfile
from copy import deepcopy
from pathlib import Path
from unittest.mock import patch

from fastapi.testclient import TestClient

from backend.app import create_app
from backend.replay import ARTIFACT_MAX_BYTES, RecordingCatalog, build_recording

ROOT = Path(__file__).resolve().parents[2]


class ReplayTests(unittest.TestCase):
    def setUp(self):
        environment = patch.dict(
            os.environ,
            {
                "LAB_RECORDINGS_ZIP": str(ROOT / "data/replays/swarm-viewer-sample-runs.zip"),
                "LAB_DISCOVER_REPO_RECORDINGS": "0",
                "LAB_RECORDINGS_DIRS": "",
            },
        )
        environment.start()
        self.addCleanup(environment.stop)

    def test_all_four_archive_recordings_and_no_lookahead(self):
        c = RecordingCatalog(ROOT / "data/replays/swarm-viewer-sample-runs.zip")
        self.assertEqual(len(c.list()), 4)
        for manifest in c.list():
            names = [
                a["display_name"]
                for a in manifest["agents"]
                if a["type"] not in {"baseline", "world"}
            ]
            self.assertEqual(len(names), len(set(names)))
            for a in manifest["agents"]:
                self.assertEqual(a["display_name"], a["original_display_name"])
            self.assertTrue(all(a.get("original_display_name") for a in manifest["agents"]))
        for m in c.list():
            b = c.get(m["id"])
            frames = b["frames"]
            initial = frames[0]["snapshot"]
            final = frames[-1]["snapshot"]
            self.assertEqual(initial["results"], [])
            self.assertEqual(initial["findings"], [])
            self.assertTrue(all(a["boredom"] is None for a in initial["agents"]))
            self.assertEqual(final["status"], "completed")
            self.assertEqual([f["tick"] for f in frames[1:]], [e["tick"] for e in b["events"]])
            for frame in frames:
                self.assertTrue(
                    all(r["tick"] <= frame["tick"] for r in frame["snapshot"]["results"])
                )
                for a in frame["snapshot"]["agents"]:
                    if "boredomDetail" in a:
                        self.assertLessEqual(a["boredomDetail"]["measured_tick"], frame["tick"])
            # Reconstruct an earlier prefix from scratch: must match a seek frame.
            count = min(32, len(b["events"]) - 1)
            prefix_manifest = deepcopy(c.manifests[m["id"]])
            prefix_manifest["status"] = "running"
            prefix = build_recording(prefix_manifest, b["events"][:count], b["entities"])["frames"][
                -1
            ]["snapshot"]
            expected = frames[count]["snapshot"]
            for key in ["results", "findings", "value", "reference", "boredom", "regime"]:
                self.assertEqual(prefix[key], expected[key], (m["title"], key))

    def test_confirmed_best_does_not_use_final_entity_verdict_early(self):
        m = {
            "schema": "swarm-viewer/v1",
            "run_id": "r",
            "title": "test",
            "metric": {"name": "loss", "unit": "", "direction": "minimize"},
            "swarm": "autoresearch",
            "agents": [{"agent_id": "worker", "label": "Worker", "type": "worker"}],
        }

        def event(tick, kind, payload, refs=None):
            return {
                "run_id": "r",
                "event_id": str(tick),
                "tick": tick,
                "round": 1,
                "type": kind,
                "payload": payload,
                "refs": refs or {},
                "agent_id": "worker",
            }

        events = [
            event(
                0,
                "experiment.finished",
                {"metric_value": 1, "status": "keep"},
                {"experiment_id": "base"},
            ),
            event(
                1,
                "experiment.finished",
                {"metric_value": 0.5, "status": "keep"},
                {"experiment_id": "candidate"},
            ),
            event(2, "verdict.issued", {"accepted": True}, {"experiment_id": "candidate"}),
        ]
        entities = {
            "experiments": [
                {"id": "base", "kind": "baseline"},
                {"id": "candidate", "kind": "candidate", "verdict": {"accepted": True}},
            ]
        }
        frames = build_recording(m, events, entities)["frames"]
        self.assertEqual(frames[2]["snapshot"]["value"], 1)
        self.assertEqual(frames[3]["snapshot"]["value"], 0.5)
        self.assertEqual(frames[1]["snapshot"]["results"][0]["value"], 1)

    def test_ignobel_sample_is_a_swarm_task_recording_with_real_sources(self):
        c = RecordingCatalog(ROOT / "data/replays/swarm-viewer-sample-runs.zip")
        self.assertEqual({m["swarm"] for m in c.list()}, {"autoresearch"})
        b = next(c.get(m["id"]) for m in c.list() if m["title"].startswith("Ig Nobel"))
        self.assertIn("ignobel", b["manifest"]["provenance"]["command"])
        self.assertEqual(b["frames"][-1]["snapshot"]["metric"]["direction"], "minimize")
        self.assertTrue(b["manifest"]["sample"])
        self.assertEqual(b["manifest"]["provenance"]["llm_mode"], "fake")
        self.assertEqual(
            b["manifest"]["description"], "Recorded offline run · fake LLM (scripted agents)"
        )
        self.assertEqual(
            {
                c.get(m["id"])["manifest"]["description"]
                for m in c.list()
                if not m["title"].startswith("Ig Nobel")
            },
            {"Recorded research · no live model calls"},
        )
        urls = [s["url"] for s in b["entities"]["sources"]]
        self.assertTrue(urls)
        self.assertTrue(all(u.startswith("https://") and "example.org" not in u for u in urls))

    def test_backend_team_can_select_a_bundle_without_replacing_sample_data(self):
        with tempfile.TemporaryDirectory() as d:
            archive = Path(d) / "backend-export.zip"
            archive.write_bytes((ROOT / "data/replays/swarm-viewer-sample-runs.zip").read_bytes())
            with (
                patch.dict(os.environ, {"LAB_RECORDINGS_ZIP": str(archive)}),
                TestClient(create_app(Path(d) / "state", runner=False)) as c,
            ):
                rows = c.get("/api/recordings").json()
                self.assertEqual(len(rows), 4)
                self.assertEqual(c.get("/api/recordings/" + rows[0]["id"]).status_code, 200)
                self.assertFalse(c.get("/api/health").json()["executionEnabled"])

    def test_zip_artifacts_are_served_confined_to_the_recording(self):
        sample = ROOT / "data/replays/swarm-viewer-sample-runs.zip"
        with zipfile.ZipFile(sample) as z:
            name = next(n for n in z.namelist() if n.endswith(".diff"))
            expected = z.read(name).decode()
        rid, relative = name.removeprefix("runs/").split("/artifacts/")
        with tempfile.TemporaryDirectory() as d:
            archive = Path(d) / "bundle.zip"
            archive.write_bytes(sample.read_bytes())
            with zipfile.ZipFile(archive, "a") as z:
                z.writestr(f"runs/{rid}/secret.txt", "secret")
                z.writestr(f"runs/{rid}/artifacts/big.log", "x" * (ARTIFACT_MAX_BYTES + 1))
            with (
                patch.dict(os.environ, {"LAB_RECORDINGS_ZIP": str(archive)}),
                TestClient(create_app(Path(d) / "state", runner=False)) as c,
            ):
                url = f"/api/recordings/{rid}/artifacts/"
                response = c.get(url + relative)
                self.assertEqual(response.status_code, 200)
                self.assertEqual(response.text, expected)
                self.assertTrue(response.headers["content-type"].startswith("text/plain"))
                self.assertEqual(response.headers["x-content-type-options"], "nosniff")
                for bad in (
                    "../secret.txt",
                    "..%2Fsecret.txt",
                    "runs/../../secret.txt",
                    "%2Fetc%2Fpasswd",
                    "runs%5C..%5C..%5Csecret.txt",
                    "runs/none.diff",
                    "runs",
                    "runs/x%00.diff",
                ):
                    self.assertEqual(c.get(url + bad).status_code, 404, bad)
                self.assertEqual(c.get(url + "big.log").status_code, 413)
                self.assertEqual(
                    c.get("/api/recordings/nope/artifacts/" + relative).status_code, 404
                )
        catalog = RecordingCatalog(sample)
        self.assertIsNone(catalog.artifact(rid, "/" + relative))
        self.assertIsNone(catalog.artifact(rid, "runs/../../manifest.json"))
        self.assertIsNotNone(catalog.artifact(rid, "runs/./" + relative.split("/", 1)[1]))

    def test_read_only_api_serves_recordings_with_cache_and_rejects_execution(self):
        with tempfile.TemporaryDirectory() as d, TestClient(create_app(d, runner=False)) as c:
            rows = c.get("/api/recordings").json()
            self.assertEqual(len(rows), 4)
            path = "/api/recordings/" + rows[0]["id"]
            r = c.get(path)
            self.assertEqual(r.status_code, 200)
            self.assertIn("frames", r.json())
            self.assertEqual(
                c.get(path, headers={"If-None-Match": r.headers["etag"]}).status_code, 304
            )
            self.assertEqual(c.get("/api/recordings/missing").status_code, 404)
            self.assertEqual(c.post("/api/runs", json={"mode": "tinker_modal"}).status_code, 409)
            self.assertFalse(c.get("/api/health").json()["executionEnabled"])


if __name__ == "__main__":
    unittest.main()


class TaskProxyNoteTest(unittest.TestCase):
    def test_proxy_note_comes_from_the_task_definition(self):
        from backend.replay import task_proxy_note

        note = task_proxy_note({"provenance": {"command": ["swarm.py", "--task", "hadamard19"]}})
        self.assertEqual(note, "exact; known optimum")
        self.assertIn("pre-registered", task_proxy_note({"title": "Ig Nobel Prize hunt · x"}))
        self.assertEqual(task_proxy_note({"provenance": {"command": "swarm.py --task ../etc"}}), "")
        self.assertEqual(task_proxy_note({}), "")
