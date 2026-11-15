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

    def test_all_three_archive_recordings_and_no_lookahead(self):
        c = RecordingCatalog(ROOT / "data/replays/swarm-viewer-sample-runs.zip")
        self.assertEqual(len(c.list()), 3)
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

    def test_default_bundle_contains_only_provenance_backed_real_model_runs(self):
        c = RecordingCatalog(ROOT / "data/replays/swarm-viewer-sample-runs.zip")
        self.assertEqual(len(c.list()), 3)
        self.assertEqual({m["swarm"] for m in c.list()}, {"autoresearch"})
        expected_calls = {
            "13b40061-3d64-520c-8b31-deb2aea4e475": 36,
            "7137b725-1954-5e6f-b87f-85c33fdb130e": 33,
            "9b212145-3ecf-5463-8024-b406c890cd37": 30,
        }
        self.assertEqual(set(c.manifests), set(expected_calls))
        for manifest in c.list():
            recording = c.get(manifest["id"])
            provenance = recording["manifest"]["provenance"]
            self.assertEqual(provenance["llm"], "moonshotai/Kimi-K3.1-Pro:peft:262144")
            self.assertEqual(provenance["exa"], "live")
            self.assertEqual(provenance["memory_backend"], "pastdev")
            self.assertTrue(provenance["native_run_id"])
            self.assertNotEqual(provenance.get("llm_mode"), "fake")
            calls = recording["entities"]["llm_calls"]
            self.assertEqual(len(calls), expected_calls[manifest["id"]])
            self.assertTrue(all(call["model"] == provenance["llm"] for call in calls))

    def test_backend_team_can_select_a_bundle_without_replacing_sample_data(self):
        with tempfile.TemporaryDirectory() as d:
            archive = Path(d) / "backend-export.zip"
            archive.write_bytes((ROOT / "data/replays/swarm-viewer-sample-runs.zip").read_bytes())
            with (
                patch.dict(os.environ, {"LAB_RECORDINGS_ZIP": str(archive)}),
                TestClient(create_app(Path(d) / "state", runner=False)) as c,
            ):
                rows = c.get("/api/recordings").json()
                self.assertEqual(len(rows), 3)
                self.assertEqual(c.get("/api/recordings/" + rows[0]["id"]).status_code, 200)
                self.assertFalse(c.get("/api/health").json()["executionEnabled"])

    def test_zip_artifacts_are_served_confined_to_the_recording(self):
        sample = ROOT / "data/replays/swarm-viewer-sample-runs.zip"
        with zipfile.ZipFile(sample) as z:
            manifest = next(
                name
                for name in z.namelist()
                if name.startswith("runs/") and name.endswith("/manifest.json")
            )
        rid = manifest.removeprefix("runs/").split("/", 1)[0]
        relative = "runs/audit-fixture.diff"
        expected = "diff fixture"
        with tempfile.TemporaryDirectory() as d:
            archive = Path(d) / "bundle.zip"
            archive.write_bytes(sample.read_bytes())
            with zipfile.ZipFile(archive, "a") as z:
                z.writestr(f"runs/{rid}/artifacts/{relative}", expected)
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
            catalog = RecordingCatalog(archive)
            self.assertIsNone(catalog.artifact(rid, "/" + relative))
            self.assertIsNone(catalog.artifact(rid, "runs/../../manifest.json"))
            self.assertIsNotNone(catalog.artifact(rid, "runs/./" + relative.split("/", 1)[1]))

    def test_read_only_api_serves_recordings_with_cache_and_rejects_execution(self):
        with tempfile.TemporaryDirectory() as d, TestClient(create_app(d, runner=False)) as c:
            rows = c.get("/api/recordings").json()
            self.assertEqual(len(rows), 3)
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

    def test_recording_keeps_its_proxy_note_and_metric(self):
        manifest = {
            "schema": "swarm-viewer/v1",
            "run_id": "recording-1",
            "title": "Ig Nobel Prize hunt",
            "status": "stopped",
            "agents": [],
            "metric": {
                "name": "loss",
                "direction": "minimize",
                "description": "Recorded metric description",
            },
            "proxy_note": "Recording-specific note",
            "provenance": {"command": ["swarm.py", "--task", "ignobel"]},
        }
        recording = build_recording(manifest, [], {}, sample=False)
        self.assertEqual(recording["manifest"]["proxy_note"], "Recording-specific note")
        self.assertEqual(
            recording["manifest"]["metric"]["description"], "Recorded metric description"
        )


class ContentVersionTest(unittest.TestCase):
    def test_directory_content_version_ignores_mtime_but_tracks_content(self):
        with tempfile.TemporaryDirectory() as directory:
            run = Path(directory) / "viewer" / "run-1"
            run.mkdir(parents=True)
            (run / "manifest.json").write_text('{"run_id":"run-1","status":"stopped","agents":[]}')
            events = run / "events.ndjson"
            events.write_text('{"tick":1}\n')
            catalog = RecordingCatalog(
                Path(directory) / "missing.zip", [run.parent], repo_root=None
            )
            version = catalog._inspect(run)[0]
            os.utime(events, (1, 1))
            self.assertEqual(catalog._inspect(run)[0], version)
            events.write_text('{"tick":2}\n')
            self.assertNotEqual(catalog._inspect(run)[0], version)
