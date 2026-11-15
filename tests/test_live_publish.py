import json
import tempfile
import threading
import time
import unittest
from pathlib import Path
from unittest.mock import patch

from test_export_viewer import autoresearch_run

import export_viewer
import live_publish
import swarm


class LiveExportTests(unittest.TestCase):
    @patch.object(export_viewer, "KEYFRAME_EVERY", 4)
    def test_incremental_parallel_records_are_a_final_prefix(self):
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
            append("research_log.jsonl", rows["research_log.jsonl"][1])
            append("memory_log.jsonl", rows["memory_log.jsonl"][0])
            append("memory.jsonl", rows["memory.jsonl"][0])
            swarm.viewer_frontier(out, 1, "research")
            researched = publish()
            self.assertGreater(researched, assigned)
            swarm.viewer_frontier(out, 1, "propose")
            self.assertGreater(publish(), researched)
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
