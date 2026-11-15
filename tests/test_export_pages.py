import gzip
import json
import shutil
import tempfile
import unittest
from pathlib import Path

from scripts.export_pages import (
    PRE_COMMITTEE_IGNOBEL_METRIC_DESCRIPTION,
    PRE_COMMITTEE_IGNOBEL_METRIC_LABEL,
    PRE_COMMITTEE_NOTE,
    export,
)


def write_recording(viewer, *, title="Test recording", task=None, events=None):
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
    if events is None:
        events = [
            {
                "event_id": "event-1",
                "run_id": "run-1",
                "tick": 1,
                "round": 1,
                "type": "run.finished",
                "payload": {"status": "finished"},
            }
        ]
    (run / "events.ndjson").write_text("".join(json.dumps(event) + "\n" for event in events))


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
            write_recording(
                viewer,
                title="Ig Nobel Prize hunt",
                task="ignobel",
                events=[
                    {
                        "event_id": "result-1",
                        "run_id": "run-1",
                        "tick": 1,
                        "round": 1,
                        "type": "study.result",
                        "refs": {"study_id": "study:1"},
                        "payload": {"rejected": "dataset unavailable: missing columns"},
                    }
                ],
            )
            manifest_path = viewer / "run-1" / "manifest.json"
            source_manifest = json.loads(manifest_path.read_text())
            source_manifest.update(
                proxy_note="committee-scored in-run",
                reference_note="committee-scored in-run",
                metric={
                    "name": "replicated_findings",
                    "label": "replication loss",
                    "direction": "minimize",
                    "description": "committee-scored in-run",
                },
            )
            source_manifest["held_out_test"] = {
                "proxy_note": "committee-scored in-run",
                "reference_note": "committee-scored in-run",
            }
            manifest_path.write_text(json.dumps(source_manifest))

            items = export(viewer, root / "out")
            archive = root / "out" / "run-1.json.gz"
            shipped = json.loads(gzip.decompress(archive.read_bytes()))
            index_bytes = (root / "out" / "index.json").read_bytes()
            index = json.loads(index_bytes)
            expected = PRE_COMMITTEE_NOTE
            self.assertEqual(shipped["manifest"]["proxy_note"], expected)
            self.assertEqual(items[0]["proxy_note"], expected)
            self.assertEqual(index[0]["proxy_note"], expected)
            self.assertIn(expected.encode(), gzip.decompress(archive.read_bytes()))
            self.assertIn(expected.encode(), index_bytes)
            self.assertEqual(shipped["manifest"]["reference_note"], expected)
            self.assertEqual(shipped["manifest"]["held_out_test"]["reference_note"], expected)
            metric = shipped["manifest"]["metric"]
            self.assertEqual(metric["label"], PRE_COMMITTEE_IGNOBEL_METRIC_LABEL)
            self.assertEqual(metric["description"], PRE_COMMITTEE_IGNOBEL_METRIC_DESCRIPTION)
            metric_text = " ".join((metric["label"], metric["description"])).casefold()
            self.assertNotIn("replication loss", metric_text)
            self.assertNotIn("replicated", metric_text)
            self.assertEqual(items[0]["metric"]["label"], PRE_COMMITTEE_IGNOBEL_METRIC_LABEL)
            self.assertEqual(
                items[0]["metric"]["description"], PRE_COMMITTEE_IGNOBEL_METRIC_DESCRIPTION
            )
            self.assertEqual(
                (gzip.decompress(archive.read_bytes()) + index_bytes).count(
                    b"committee-scored in-run"
                ),
                0,
            )

    def test_nested_committee_score_keeps_committee_task_note(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            viewer = root / "viewer"
            write_recording(
                viewer,
                title="Ig Nobel Prize hunt",
                task="ignobel",
                events=[
                    {
                        "event_id": "result-1",
                        "run_id": "run-1",
                        "tick": 1,
                        "round": 1,
                        "type": "study.result",
                        "refs": {"study_id": "study:1"},
                        "payload": {"committee": {"score": 0.8}},
                    }
                ],
            )
            manifest_path = viewer / "run-1" / "manifest.json"
            source_manifest = json.loads(manifest_path.read_text())
            source_manifest["proxy_note"] = "Committee scoring is applied after the run."
            manifest_path.write_text(json.dumps(source_manifest))

            items = export(viewer, root / "out")
            shipped = json.loads(gzip.decompress((root / "out" / "run-1.json.gz").read_bytes()))
            self.assertEqual(items[0]["proxy_note"], source_manifest["proxy_note"])
            self.assertEqual(shipped["manifest"]["proxy_note"], source_manifest["proxy_note"])

    def test_post_run_committee_keeps_gate_only_metric_and_names_the_judges(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            viewer = root / "viewer"
            write_recording(
                viewer,
                title="Ig Nobel Prize hunt",
                task="ignobel",
                events=[
                    {
                        "event_id": "result-1",
                        "run_id": "run-1",
                        "tick": 1,
                        "round": 1,
                        "type": "study.result",
                        "refs": {"study_id": "study:1"},
                        "payload": {
                            "committee": None,
                            "text": "Result keep: interesting-finding loss 0, reward +1.0%",
                        },
                    },
                    {
                        "event_id": "award-1",
                        "run_id": "run-1",
                        "tick": 2,
                        "round": 1,
                        "type": "award.issued",
                        "refs": {"study_id": "study:1"},
                        "payload": {
                            "award": "Ig Nobel committee",
                            "score": 0.2,
                            "judges": {"a": {"model": "judge/a"}, "b": {"model": "judge/b"}},
                        },
                    },
                ],
            )
            manifest_path = viewer / "run-1" / "manifest.json"
            source_manifest = json.loads(manifest_path.read_text())
            source_manifest["metric"] = {
                "name": "loss",
                "label": "interesting-finding loss",
                "direction": "minimize",
                "description": "1 - score from the committee",
            }
            manifest_path.write_text(json.dumps(source_manifest))

            items = export(viewer, root / "out")
            shipped = json.loads(gzip.decompress((root / "out" / "run-1.json.gz").read_bytes()))
            note = items[0]["proxy_note"]
            self.assertIn("preregistered-gate only", note)
            self.assertIn("(judge/a + judge/b) judged 1 confirmed finding(s); best score 0.2", note)
            self.assertEqual(
                shipped["manifest"]["metric"]["label"], PRE_COMMITTEE_IGNOBEL_METRIC_LABEL
            )
            texts = [event["payload"].get("text") for event in shipped["events"]]
            self.assertIn("Result keep: split-half consistency loss 0, reward +1.0%", texts)
            self.assertEqual(
                [event["type"] for event in shipped["events"]].count("award.issued"), 1
            )


if __name__ == "__main__":
    unittest.main()
