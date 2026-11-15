import gzip
import json
import shutil
import tempfile
import unittest
from pathlib import Path

from scripts.export_pages import export


def write_recording(viewer, *, title="Test recording", task=None):
    run = viewer / "run-1"
    run.mkdir(parents=True)
    (run / "manifest.json").write_text(
        json.dumps(
            {
                "run_id": "run-1",
                "schema": "swarm-viewer/v1",
                "status": "finished",
                "title": title,
                "metric": {"name": "loss", "label": "loss", "direction": "minimize"},
                "provenance": {"command": ["swarm.py", "--task", task]} if task else {},
            }
        )
    )
    (run / "events.ndjson").write_text(
        json.dumps(
            {
                "event_id": "event-1",
                "run_id": "run-1",
                "tick": 1,
                "round": 1,
                "type": "run.finished",
                "payload": {"status": "finished"},
            }
        )
        + "\n"
    )


class ExportPagesTests(unittest.TestCase):
    def test_filesystem_noise_does_not_change_pages_output(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            source = root / "source"
            write_recording(source)

            noisy_viewer = root / "noisy" / "viewer"
            logged_viewer = root / "logged" / "viewer"
            noisy_viewer.parent.mkdir()
            logged_viewer.parent.mkdir()
            shutil.copytree(source, noisy_viewer)
            shutil.copytree(source, logged_viewer)
            (noisy_viewer / "run-1" / "junk.txt").write_text("not part of the recording")
            (logged_viewer.parent / "viewer_publish_log.jsonl").write_text("")

            noisy_out, logged_out = root / "noisy-out", root / "logged-out"
            noisy_items = export(noisy_viewer, noisy_out)
            logged_items = export(logged_viewer, logged_out)

            self.assertEqual(
                (noisy_out / "index.json").read_bytes(),
                (logged_out / "index.json").read_bytes(),
            )
            noisy_archive = noisy_out / "run-1.json.gz"
            logged_archive = logged_out / "run-1.json.gz"
            self.assertEqual(noisy_archive.read_bytes(), logged_archive.read_bytes())
            self.assertEqual(noisy_items[0]["contentVersion"], logged_items[0]["contentVersion"])
            shipped = json.loads(gzip.decompress(noisy_archive.read_bytes()))
            self.assertEqual(
                shipped["manifest"]["contentVersion"], noisy_items[0]["contentVersion"]
            )

    def test_recording_content_change_changes_content_version(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            viewer = root / "viewer"
            write_recording(viewer)
            first = export(viewer, root / "first-out")[0]["contentVersion"]

            event_path = viewer / "run-1" / "events.ndjson"
            event = json.loads(event_path.read_text())
            event["payload"]["status"] = "stopped"
            event_path.write_text(json.dumps(event) + "\n")
            changed = export(viewer, root / "changed-out")[0]["contentVersion"]

            self.assertNotEqual(first, changed)

    def test_precommittee_ignobel_export_uses_plain_proxy_note(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            viewer = root / "viewer"
            write_recording(viewer, title="Ig Nobel Prize hunt", task="ignobel")

            items = export(viewer, root / "out")
            archive = root / "out" / "run-1.json.gz"
            shipped = json.loads(gzip.decompress(archive.read_bytes()))
            expected = (
                "Pre-committee run: loss 0 = passed preregistered gates, 1 = failed; "
                "not committee-judged."
            )
            self.assertEqual(shipped["manifest"]["proxy_note"], expected)
            self.assertEqual(items[0]["proxy_note"], expected)


if __name__ == "__main__":
    unittest.main()
