import json
import tempfile
import threading
import time
import unittest
from datetime import datetime, timezone
from pathlib import Path
from unittest.mock import patch

from test_export_viewer import autoresearch_run

import export_viewer
import live_publish
import llm
import memory
import research
import swarm


class LiveExportTests(unittest.TestCase):
    def test_live_export_without_frontier_preserves_all_nonfinal_events(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            out = autoresearch_run(root)
            artifact = json.loads((out / "run.json").read_text())
            artifact["status"] = "running"
            (out / "run.json").write_text(json.dumps(artifact))
            live = export_viewer.publish(out, root / "live", final=False)
            final = export_viewer.export(out, root / "final", final=True)
            live_events = (live / "events.ndjson").read_bytes()
            final_events = (final / "events.ndjson").read_bytes().splitlines(keepends=True)
            self.assertEqual(live_events, b"".join(final_events[:-1]))
            self.assertTrue(
                any(json.loads(line)["round"] == 2 for line in live_events.splitlines())
            )

    def test_artifact_copy_excludes_publisher_owned_viewer(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            out = root / "out"
            (out / "viewer" / "run").mkdir(parents=True)
            (out / "viewer" / "run" / ".temporary-manifest").write_text("in flight")
            (out / "ledger.jsonl").write_text("{}\n")
            conductor = root / "conductor"
            conductor.mkdir()
            target = swarm.copy_artifacts_to_arm_branch(out, conductor, "B")
            self.assertEqual((target / "ledger.jsonl").read_text(), "{}\n")
            self.assertFalse((target / "viewer").exists())

    def test_research_and_proposals_sort_together(self):
        run = export_viewer.Run(
            "autoresearch", export_viewer.uid(export_viewer.NS_CAFFEINATED, "ordering")
        )
        self.assertEqual(run.phase_rank["research"], run.phase_rank["propose"])
        for phase, ts in (("research", "03"), ("propose", "02"), ("research", "01")):
            run.emit(
                "llm.called",
                round_=1,
                phase=phase,
                ts=ts,
                agent=None,
                file="llm_log.jsonl",
                line=int(ts),
                native_type="test",
                payload={},
            )
        self.assertEqual([event["ts"] for event in run.finalize()], ["01", "02", "03"])

    def test_worker_logs_stamp_at_write_and_preserve_memory_occurrence(self):
        with tempfile.TemporaryDirectory() as tmp, patch("live_publish.datetime") as clock:
            clock.now.return_value = datetime(2026, 11, 14, 12, tzinfo=timezone.utc)
            root = Path(tmp)
            llm.append_log(root / "llm_log.jsonl", {"ts": "old"})
            research.append_records(root / "research_log.jsonl", [{"ts": "old"}])
            memory.append_recall_log(root / "memory_log.jsonl", {"ts": "old"})
            memory.append_jsonl(root / "memory.jsonl", {"timestamp": "original occurrence"})
            for name in ("llm_log.jsonl", "research_log.jsonl", "memory_log.jsonl"):
                self.assertEqual(
                    export_viewer.read_jsonl(root / name)[0][1]["ts"], "2026-11-14T12:00:00.000000Z"
                )
            item = export_viewer.read_jsonl(root / "memory.jsonl")[0][1]
            self.assertEqual(item["logged_at"], "2026-11-14T12:00:00.000000Z")
            self.assertEqual(item["timestamp"], "original occurrence")

    @patch("export_viewer.live_publish.watermark")
    @patch.object(export_viewer, "KEYFRAME_EVERY", 4)
    def test_incremental_parallel_records_are_a_final_prefix(self, watermark):
        watermark.return_value = "2026-11-14T10:00:02Z"
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            out = autoresearch_run(root)
            artifact = json.loads((out / "run.json").read_text())
            artifact["status"] = "running"
            (out / "run.json").write_text(json.dumps(artifact))
            names = (
                "assignments.jsonl",
                "research_log.jsonl",
                "memory_log.jsonl",
                "memory.jsonl",
                "llm_log.jsonl",
                "boredom_log.jsonl",
                "ledger.jsonl",
            )
            rows = {
                name: [row for _, row in export_viewer.read_jsonl(out / name)] for name in names
            }
            rows["research_log.jsonl"][0]["ts"] = "2026-11-14T10:00:03.8Z"
            rows["research_log.jsonl"][1]["ts"] = "2026-11-14T10:00:04.5Z"
            rows["llm_log.jsonl"][0]["ts"] = "2026-11-14T10:00:04.8Z"
            rows["memory.jsonl"][1]["timestamp"] = "2026-11-14T10:00:05.0Z"
            rows["memory_log.jsonl"][0]["ts"] = "2026-11-14T10:00:05.1Z"
            rows["memory.jsonl"][0]["timestamp"] = "2026-11-14T10:00:04.9Z"
            for name in names:
                (out / name).write_text("")
            previous = b""
            frames = {}

            def publish():
                nonlocal previous
                target = export_viewer.publish(out, root / "live", final=False)
                data = (target / "events.ndjson").read_bytes()
                self.assertTrue(data.startswith(previous))
                for path in (target / "keyframes").glob("*.json"):
                    if path.name in frames:
                        self.assertEqual(frames[path.name], path.read_bytes())
                    frames[path.name] = path.read_bytes()
                previous = data
                return len(data)

            def append(name, row):
                with (out / name).open("a") as stream:
                    stream.write(json.dumps(row) + "\n")
                return publish()

            (out / "ledger.jsonl").write_text(json.dumps(rows["ledger.jsonl"][0]) + "\n")
            append("assignments.jsonl", rows["assignments.jsonl"][0])
            swarm.viewer_frontier(out, 1, "assign")
            assigned = publish()
            append("research_log.jsonl", rows["research_log.jsonl"][0])
            # A worker finishes proposing before another finishes its research.
            append("llm_log.jsonl", rows["llm_log.jsonl"][0])
            append("memory.jsonl", rows["memory.jsonl"][1])
            append("boredom_log.jsonl", rows["boredom_log.jsonl"][0])
            watermark.return_value = "2026-11-14T10:00:03.7Z"
            append("research_log.jsonl", rows["research_log.jsonl"][1])
            watermark.return_value = "2026-11-14T10:00:04Z"
            append("memory_log.jsonl", rows["memory_log.jsonl"][0])
            append("memory.jsonl", rows["memory.jsonl"][0])
            append(
                "llm_log.jsonl",
                {**rows["llm_log.jsonl"][0], "agent": "worker-2", "ts": "2026-11-14T10:00:05.2Z"},
            )
            watermark.return_value = "2026-11-14T10:00:06Z"
            researched = publish()
            self.assertGreater(researched, assigned)
            self.assertEqual(
                json.loads((out / "viewer_frontier.json").read_text())["phase"], "assign"
            )
            live_events = [json.loads(line) for line in previous.splitlines()]
            self.assertTrue(
                {"llm.called", "question.asked", "hypothesis.proposed"}.issubset(
                    {event["type"] for event in live_events}
                )
            )
            swarm.viewer_frontier(out, 1, "research")
            publish()
            swarm.viewer_frontier(out, 1, "propose")
            publish()
            append("boredom_log.jsonl", rows["boredom_log.jsonl"][1])
            # Candidate/critic ledger rows arrive only after their final decisions.
            append("ledger.jsonl", rows["ledger.jsonl"][1])
            append("ledger.jsonl", rows["ledger.jsonl"][2])
            append("boredom_log.jsonl", rows["boredom_log.jsonl"][2])
            swarm.viewer_frontier(out, 1, "finish")
            publish()
            append("assignments.jsonl", rows["assignments.jsonl"][1])
            swarm.viewer_frontier(out, 2, "assign")
            publish()
            target = export_viewer.publish(out, root / "live", final=True)
            fresh = export_viewer.export(out, root / "fresh", final=True)
            self.assertTrue((target / "events.ndjson").read_bytes().startswith(previous))
            self.assertEqual(
                (target / "events.ndjson").read_bytes(), (fresh / "events.ndjson").read_bytes()
            )
            for path in (fresh / "keyframes").glob("*.json"):
                self.assertEqual(path.read_bytes(), (target / "keyframes" / path.name).read_bytes())

    def test_empty_live_export(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            out = autoresearch_run(root)
            for path in out.glob("*.jsonl"):
                path.write_text("")
            target = export_viewer.publish(out, root / "live", final=False)
            self.assertTrue((target / "events.ndjson").exists())


class PublisherTests(unittest.TestCase):
    def test_watermark_settling_schedules_a_second_export_without_more_logs(self):
        settled = threading.Event()
        calls = []

        def callback():
            calls.append(time.monotonic())
            if len(calls) == 2:
                settled.set()

        publisher = live_publish.Publisher(callback, interval=0.04, settle=0.02)
        try:
            publisher.request()
            self.assertTrue(settled.wait(2))
        finally:
            publisher.close()
        self.assertEqual(len(calls), 2)

    def test_parallel_requests_coalesce_and_trail_and_flush_serializes(self):
        entered = threading.Event()
        release = threading.Event()
        trailed = threading.Event()
        calls = []
        active = 0
        maximum = 0

        def callback(**kwargs):
            nonlocal active, maximum
            active += 1
            maximum = max(maximum, active)
            calls.append(kwargs)
            if len(calls) == 1:
                entered.set()
                release.wait(2)
            else:
                trailed.set()
            active -= 1

        publisher = live_publish.Publisher(callback, interval=0.05)
        try:
            publisher.request()
            self.assertTrue(entered.wait(2))
            threads = [threading.Thread(target=publisher.request) for _ in range(40)]
            for thread in threads:
                thread.start()
            for thread in threads:
                thread.join()
            release.set()
            self.assertTrue(trailed.wait(2))
            publisher.flush(final=True)
        finally:
            release.set()
            publisher.close()
        self.assertEqual(calls, [{}, {}, {"final": True}])
        self.assertEqual(maximum, 1)

    def test_errors_are_swallowed_and_empty_close_does_not_publish(self):
        with patch("live_publish.time.monotonic", wraps=time.monotonic):
            calls = []

            def fail(**kwargs):
                calls.append(kwargs)
                raise RuntimeError("export failed")

            publisher = live_publish.Publisher(fail)
            publisher.flush()
            publisher.flush(final=True)
            publisher.close()
            publisher.request()
            self.assertEqual(calls, [{}, {"final": True}])
            empty = live_publish.Publisher(fail)
            empty.close()
            self.assertEqual(len(calls), 2)

    def test_background_error_does_not_kill_trailing_publish(self):
        failed = threading.Event()
        recovered = threading.Event()

        def callback():
            if not failed.is_set():
                failed.set()
                raise RuntimeError("export failed")
            recovered.set()

        publisher = live_publish.Publisher(callback, interval=0.01)
        try:
            publisher.request()
            self.assertTrue(failed.wait(2))
            publisher.request()
            self.assertTrue(recovered.wait(2))
        finally:
            publisher.close()


if __name__ == "__main__":
    unittest.main()
