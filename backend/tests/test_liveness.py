import json
import os
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch

from fastapi.testclient import TestClient

from backend.app import create_app
from backend.replay import RecordingCatalog, liveness, parse_ts

NOW = parse_ts("2026-11-15T06:00:00Z")


def event(rid, tick, ts=None, kind="round.started"):
    row = {
        "run_id": rid,
        "event_id": f"event-{tick}",
        "tick": tick,
        "type": kind,
        "payload": {},
        "refs": {},
    }
    if ts:
        row["ts"] = ts
    return row


class LivenessTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.root = Path(self.temp.name)
        environment = patch.dict(
            os.environ, {"LAB_DISCOVER_REPO_RECORDINGS": "0", "LAB_RECORDINGS_DIRS": ""}
        )
        environment.start()
        self.addCleanup(environment.stop)

    def run_dir(self, relative="out/viewer/run-1", status="running", events=(), **fields):
        path = self.root / relative
        path.mkdir(parents=True, exist_ok=True)
        manifest = {
            "schema": "swarm-viewer/v1",
            "run_id": path.name,
            "title": path.name,
            "status": status,
            "live": status == "running",
            "agents": [],
            "metric": {"name": "loss", "unit": "", "direction": "minimize"},
            **fields,
        }
        (path / "manifest.json").write_text(json.dumps(manifest))
        (path / "events.ndjson").write_text("".join(json.dumps(e) + "\n" for e in events))
        return path

    def catalog(self, now=NOW, **kwargs):
        return RecordingCatalog(
            self.root / "none.zip", [self.root / "out" / "viewer"], clock=lambda: now, **kwargs
        )

    def test_running_manifest_with_old_heartbeat_is_reported_stale(self):
        self.run_dir(
            events=[event("run-1", 0, "2026-11-15T05:00:00Z")],
            heartbeat_ts="2026-11-15T05:58:30Z",
            heartbeat_interval_s=30,
        )
        manifest = self.catalog().list()[0]
        self.assertEqual(
            (manifest["live"], manifest["stale"], manifest["liveness"]), (True, False, "live")
        )
        self.assertEqual(manifest["lastUpdateTs"], "2026-11-15T05:58:30Z")
        self.assertEqual(manifest["staleAfterSeconds"], 90)
        stale = self.catalog(now=NOW + 100).get("run-1")
        self.assertEqual(
            (stale["manifest"]["live"], stale["manifest"]["stale"], stale["manifest"]["liveness"]),
            (False, True, "stale"),
        )
        self.assertIn("-stale", stale["manifest"]["contentVersion"])
        self.assertTrue(stale["manifest"]["description"].startswith("Stalled swarm run"))
        final = stale["frames"][-1]["snapshot"]
        self.assertEqual(final["status"], "stopped")
        self.assertLess(final["progress"], 1)
        self.assertTrue(final["error"])

    def test_newest_event_is_the_fallback_without_heartbeat(self):
        path = self.run_dir(
            events=[
                event("run-1", 0, "2026-11-15T05:50:00Z"),
                event("run-1", 1, "2026-11-15T05:56:00Z"),
            ]
        )
        info, stale = liveness(json.loads((path / "manifest.json").read_text()), path, NOW)
        self.assertEqual(info, {"lastUpdateTs": "2026-11-15T05:56:00Z", "staleAfterSeconds": 300})
        self.assertFalse(stale)
        self.assertTrue(liveness({"status": "running"}, path, NOW + 61)[1])
        self.assertFalse(liveness({"status": "finished", "live": False}, path, NOW + 9999)[1])
        self.assertTrue(self.catalog(now=NOW + 61).list()[0]["stale"])
        self.assertFalse(self.catalog(now=NOW + 61, stale_after=3600).list()[0]["stale"])

    def test_stale_run_without_events_and_finished_runs(self):
        path = self.run_dir()
        os.utime(path / "manifest.json", (NOW - 600, NOW - 600))
        os.utime(path / "events.ndjson", (NOW - 600, NOW - 600))
        recording = self.catalog().get("run-1")
        self.assertTrue(recording["manifest"]["stale"])
        self.assertEqual(recording["frames"][-1]["snapshot"]["status"], "stopped")
        self.run_dir(
            "out/viewer/run-2",
            status="finished",
            events=[event("run-2", 0, "2020-01-01T00:00:00Z", "run.finished")],
        )
        done = self.catalog().get("run-2")["manifest"]
        self.assertEqual((done["live"], done["stale"], done["liveness"]), (False, False, "ended"))
        # The final publish appended run.finished but the manifest still says running.
        self.run_dir(
            "out/viewer/run-3",
            events=[
                event("run-3", 0, "2020-01-01T00:00:00Z"),
                event("run-3", 1, "2020-01-01T00:00:01Z", "run.finished"),
            ],
        )
        ended = self.catalog().get("run-3")
        self.assertEqual(
            (ended["manifest"]["live"], ended["manifest"]["stale"], ended["manifest"]["liveness"]),
            (False, False, "ended"),
        )
        self.assertEqual(ended["frames"][-1]["snapshot"]["status"], "completed")
        stopped = event("run-4", 0, "2020-01-01T00:00:00Z", "run.finished")
        self.run_dir("out/viewer/run-4", events=[stopped | {"payload": {"status": "stopped"}}])
        self.assertEqual(self.catalog().get("run-4")["frames"][-1]["snapshot"]["status"], "stopped")

    def test_heartbeat_refresh_keeps_cached_recording(self):
        path = self.run_dir(
            events=[event("run-1", 0, "2026-11-15T05:59:00Z")],
            heartbeat_ts="2026-11-15T05:59:00Z",
            heartbeat_interval_s=30,
        )
        catalog = self.catalog()
        first = catalog.get("run-1")
        version = first["manifest"]["contentVersion"]
        manifest = json.loads((path / "manifest.json").read_text())
        manifest["heartbeat_ts"] = "2026-11-15T05:59:30Z"
        (path / "manifest.json").write_text(json.dumps(manifest))
        second = catalog.get("run-1")
        self.assertIs(first, second)
        self.assertEqual(second["manifest"]["contentVersion"], version)
        self.assertEqual(second["manifest"]["lastUpdateTs"], "2026-11-15T05:59:30Z")

    def test_publish_errors_from_manifest_or_publish_log(self):
        issue = {
            "ts": "2026-11-15T05:00:00Z",
            "kind": "RuntimeError",
            "final": False,
            "message": "disk full",
            "extra": 1,
        }
        self.run_dir(publish_errors=[issue, "plain text"])
        manifest = self.catalog().get("run-1")["manifest"]
        self.assertEqual(
            manifest["publish_errors"],
            [
                {k: issue[k] for k in ("ts", "kind", "final", "message")},
                {"ts": None, "kind": "error", "final": False, "message": "plain text"},
            ],
        )
        self.run_dir("out/viewer/run-2")
        catalog = self.catalog()
        self.assertEqual(catalog.get("run-2")["manifest"]["publish_errors"], [])
        log = self.root / "out" / "viewer_publish_log.jsonl"
        log.write_text(
            json.dumps(
                {
                    "ts": "t",
                    "status": "running",
                    "final": True,
                    "error": "OSError",
                    "message": "x" * 900,
                }
            )
            + "\n{"
        )
        errors = catalog.get("run-2")["manifest"]["publish_errors"]
        self.assertEqual(
            errors, [{"ts": "t", "kind": "OSError", "final": True, "message": "x" * 500}]
        )
        self.assertEqual(
            catalog.get("run-1")["manifest"]["publish_errors"][0]["kind"], "RuntimeError"
        )
        self.run_dir("out/custom-viewer/run-4")
        custom = RecordingCatalog(self.root / "none.zip", [self.root / "out" / "custom-viewer"])
        self.assertEqual(custom.get("run-4")["manifest"]["publish_errors"][0]["kind"], "OSError")

    def test_delta_appends_new_ticks_and_falls_back_to_full(self):
        path = self.run_dir(events=[event("run-1", 0, "2026-11-15T05:59:00Z")])
        (path / "entities").mkdir()
        (path / "entities" / "experiments.json").write_text(
            json.dumps([{"id": "e1", "status": "running"}])
        )
        catalog = self.catalog()
        base = catalog.get("run-1")["manifest"]["contentVersion"]
        self.assertEqual(catalog.delta("run-1", base)["kind"], "unchanged")
        with (path / "events.ndjson").open("a") as stream:
            for tick in (1, 2):
                stream.write(json.dumps(event("run-1", tick, "2026-11-15T05:59:30Z")) + "\n")
        (path / "entities" / "experiments.json").write_text(
            json.dumps([{"id": "e1", "status": "keep"}, {"id": "e2"}])
        )
        delta = catalog.delta("run-1", base)
        current = catalog.get("run-1")
        self.assertEqual(delta["kind"], "delta")
        self.assertEqual(delta["since"], 0)
        self.assertEqual([f["tick"] for f in delta["frames"]], [0, 1, 2])
        self.assertEqual([e["tick"] for e in delta["events"]], [1, 2])
        self.assertEqual(
            delta["entities"], {"experiments": [{"id": "e1", "status": "keep"}, {"id": "e2"}]}
        )
        self.assertEqual(delta["manifest"], current["manifest"])
        self.assertEqual(delta["frames"][-1], current["frames"][-1])
        self.assertEqual(catalog.delta("run-1", "unknown")["kind"], "full")
        self.assertEqual(catalog.delta("run-1", "")["frames"], current["frames"])
        newer = current["manifest"]["contentVersion"]
        (path / "events.ndjson").write_text(
            json.dumps(event("run-1", 0, "2026-11-15T05:59:40Z") | {"event_id": "rewritten"}) + "\n"
        )
        self.assertEqual(catalog.delta("run-1", newer)["kind"], "full")
        with self.assertRaises(KeyError):
            catalog.delta("missing", base)

    def apply(self, recording, delta):
        if delta["kind"] == "full":
            return {k: v for k, v in delta.items() if k != "kind"}
        patches = {p["tick"]: p["snapshot"] for p in delta["patches"]}
        scale = delta["progressScale"]
        kept = [
            {
                **f,
                "snapshot": {
                    **f["snapshot"],
                    "progress": max(0, f["tick"]) / scale,
                    **patches.get(f["tick"], {}),
                },
            }
            for f in recording["frames"]
            if f["tick"] < delta["since"]
        ]
        return {
            "frames": kept + delta["frames"],
            "events": [e for e in recording["events"] if e["tick"] <= delta["since"]]
            + delta["events"],
        }

    def test_delta_reproduces_full_recording_and_resyncs_after_rewrites(self):
        path = self.run_dir(events=[event("run-1", t, "2026-11-15T05:59:00Z") for t in range(4)])
        (path / "entities").mkdir()
        entities = path / "entities" / "experiments.json"
        entities.write_text(json.dumps([{"id": "e1"}, {"id": "e2"}]))
        catalog = self.catalog()
        first = catalog.get("run-1")
        base = first["manifest"]["contentVersion"]
        with (path / "events.ndjson").open("a") as stream:
            stream.write(json.dumps(event("run-1", 4, "2026-11-15T05:59:10Z")) + "\n")
        delta = catalog.delta("run-1", base)
        current = catalog.get("run-1")
        self.assertEqual(delta["kind"], "delta")
        self.assertEqual(delta["patches"], [])
        self.assertNotEqual(first["frames"][2], current["frames"][2])
        self.assertEqual(
            self.apply(first, delta),
            {"frames": current["frames"], "events": current["events"]},
        )

        def rewritten(events):
            version = catalog.get("run-1")["manifest"]["contentVersion"]
            (path / "events.ndjson").write_text("".join(json.dumps(e) + "\n" for e in events))
            return catalog.delta("run-1", version)["kind"]

        changed = event("run-1", 1, "2026-11-15T05:59:00Z") | {"payload": {"note": "edited"}}
        rows = [event("run-1", t, "2026-11-15T05:59:00Z") for t in range(5)]
        self.assertEqual(rewritten(rows[:1] + [changed] + rows[2:]), "full")
        # --resume cuts events.ndjson back to its checkpoint before publishing again.
        self.assertEqual(rewritten(rows[:2]), "full")
        regrown = rows[:2] + [r | {"event_id": f"resumed-{r['tick']}"} for r in rows[2:]]
        self.assertEqual(rewritten(regrown), "delta")
        self.assertEqual(rewritten(rows[:2] + regrown[2:] + [event("run-1", 5)]), "delta")
        version = catalog.get("run-1")["manifest"]["contentVersion"]
        entities.write_text(json.dumps([{"id": "e2"}]))
        self.assertEqual(catalog.delta("run-1", version)["kind"], "full")

    def test_delta_api_is_smaller_than_full_recording(self):
        path = self.run_dir(events=[event("run-1", t, "2026-11-15T05:59:00Z") for t in range(50)])
        env = {
            "LAB_RECORDINGS_ZIP": str(self.root / "none.zip"),
            "LAB_RECORDINGS_DIRS": str(self.root / "out" / "viewer"),
            "LAB_STALE_AFTER_SECONDS": "1e9",
        }
        with (
            patch.dict(os.environ, env),
            TestClient(create_app(self.root / "state", runner=False)) as client,
        ):
            full = client.get("/api/recordings/run-1")
            base = full.json()["manifest"]["contentVersion"]
            with (path / "events.ndjson").open("a") as stream:
                stream.write(json.dumps(event("run-1", 50, "2026-11-15T05:59:10Z")) + "\n")
            delta = client.get("/api/recordings/run-1/delta", params={"base": base})
            self.assertEqual(delta.status_code, 200)
            body = delta.json()
            self.assertEqual(
                (body["kind"], body["since"], [e["tick"] for e in body["events"]]),
                ("delta", 49, [50]),
            )
            self.assertLess(len(delta.content) * 10, len(full.content))
            self.assertEqual(
                client.get(
                    "/api/recordings/run-1/delta",
                    params={"base": body["manifest"]["contentVersion"]},
                ).json()["kind"],
                "unchanged",
            )
            self.assertEqual(client.get("/api/recordings/missing/delta").status_code, 404)

    def test_discovery_is_off_without_repo_root_and_keeps_killed_conductor_runs(self):
        stale = self.run_dir(
            ".swarm_worktrees/B/conductor.stale-20261115-010000/experiments/swarm_B/viewer/run-1",
            title="killed",
        )
        self.run_dir(
            ".swarm_worktrees/B/conductor.stale-20261115-010000/experiments/swarm_B/viewer/old-2"
        )
        self.assertEqual(RecordingCatalog(self.root / "none.zip").list(), [])
        catalog = RecordingCatalog(self.root / "none.zip", repo_root=self.root)
        self.assertEqual([m["id"] for m in catalog.list()], ["old-2", "run-1"])
        self.assertEqual(catalog.get("run-1")["manifest"]["title"], "killed")
        self.run_dir(
            ".swarm_worktrees/B/conductor/experiments/swarm_B/viewer/run-1", title="resumed"
        )
        self.assertEqual(catalog.get("run-1")["manifest"]["title"], "resumed")
        self.assertTrue(stale.is_dir())
        self.run_dir(
            ".swarm_worktrees/B/conductor/experiments/swarm_B.prev-20261115-020000/viewer/prev-3"
        )
        self.run_dir("experiments/swarm_A.prev-20261115-020000/viewer/prev-4")
        self.assertEqual([m["id"] for m in catalog.list()], ["old-2", "prev-3", "prev-4", "run-1"])
        with (
            patch("backend.app.ROOT", self.root),
            patch.dict(os.environ, {"LAB_RECORDINGS_ZIP": str(self.root / "none.zip")}),
            TestClient(create_app(self.root / "state", runner=False)) as client,
        ):
            self.assertEqual(client.get("/api/recordings").json(), [])
        with (
            patch("backend.app.ROOT", self.root),
            patch.dict(
                os.environ,
                {
                    "LAB_RECORDINGS_ZIP": str(self.root / "none.zip"),
                    "LAB_DISCOVER_REPO_RECORDINGS": "1",
                },
            ),
            TestClient(create_app(self.root / "state", runner=False)) as client,
        ):
            self.assertEqual(len(client.get("/api/recordings").json()), 4)


if __name__ == "__main__":
    unittest.main()
