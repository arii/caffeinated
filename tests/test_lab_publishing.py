import importlib
import io
import json
import sys
import tempfile
import unittest
from contextlib import redirect_stderr, redirect_stdout, suppress
from pathlib import Path
from unittest.mock import patch

from test_export_viewer import autoresearch_run, write_jsonl

import export_viewer
import live_publish
import llm
import swarm

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "testcases" / "ignobel"))
round_context = importlib.import_module("round_context")


def append_jsonl(path, row):
    with path.open("a", encoding="utf-8") as stream:
        stream.write(json.dumps(row) + "\n")


def read_bundle(run_dir):
    events = [json.loads(line) for line in (run_dir / "events.ndjson").read_text().splitlines()]
    manifest = json.loads((run_dir / "manifest.json").read_text())
    entities = {
        path.stem: {e["id"]: e for e in json.loads(path.read_text())}
        for path in (run_dir / "entities").glob("*.json")
    }
    return events, manifest, entities


def study(commit, role="candidate", confirmed=True):
    return {
        "ts": 1794650000.0,
        "commit": commit,
        "role": role,
        "prereg": {
            "field": "psychoacoustics",
            "question": "Do louder cafes sell more espresso?",
            "hypothesis": "noise raises espresso sales",
            "direction": "positive",
            "predicted_rho": 0.2,
            "dataset": {"url": "https://data.test/cafe.csv", "x": "noise_db", "y": "espressos"},
        },
        "result": {
            "headline": "Louder cafes sell more espresso",
            "rho": 0.31,
            "p": 0.0001,
            "n": 900,
            "halves": [{"rho": 0.3, "p": 0.01, "n": 450}, {"rho": 0.32, "p": 0.01, "n": 450}],
            "significant": True,
            "replicated": confirmed,
            "confirmed": confirmed,
            "predicted_rho": 0.2,
            "rejected": None,
            "sha256": "abc",
            "columns": ["noise_db", "espressos"],
        },
    }


class PublishRecoveryTests(unittest.TestCase):
    def test_tsless_source_appended_mid_run_does_not_conflict(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            out = autoresearch_run(root)
            dest = root / "dest"
            run_dir = export_viewer.publish(out, dest, final=False, status="running")
            before = (run_dir / "events.ndjson").read_bytes()
            # The pre-fix round_context.py record: no ts, no round, no query.
            append_jsonl(
                out / "research_log.jsonl",
                {"type": "source", "id": "D2_1", "url": "https://zenodo.test", "title": "late"},
            )
            run_dir = export_viewer.publish(out, dest, final=False, status="running")
            after = (run_dir / "events.ndjson").read_bytes()
            self.assertTrue(after.startswith(before))
            events, _, _ = read_bundle(run_dir)
            late = [e for e in events if e["refs"].get("source_id") == "source:D2_1"]
            self.assertEqual(len(late), 1)
            self.assertGreater(late[0]["round"], 0)
            self.assertIsNotNone(late[0]["ts"])
            export_viewer.publish(out, dest, final=True, status="finished")

    def test_prefix_mismatch_recovers_by_appending(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            out = autoresearch_run(root)
            dest = root / "dest"
            run_dir = export_viewer.publish(out, dest, final=False, status="running")
            before = (run_dir / "events.ndjson").read_bytes()
            # A record stamped in the past sorts into the published prefix.
            append_jsonl(
                out / "research_log.jsonl",
                {
                    "type": "query",
                    "id": "Q9",
                    "agent": "worker-1",
                    "query": "early",
                    "ts": "2026-11-14T10:00:30Z",
                },
            )
            run_dir = export_viewer.publish(out, dest, final=False, status="running")
            after = (run_dir / "events.ndjson").read_bytes()
            self.assertTrue(after.startswith(before))
            events, manifest, entities = read_bundle(run_dir)
            self.assertEqual([e["tick"] for e in events], list(range(len(events))))
            self.assertEqual(events[-1]["refs"].get("question_id"), "question:Q9")
            self.assertEqual(manifest["publish_errors"][-1]["kind"], "recovered")
            rounds = [e["round"] for e in events]
            self.assertEqual(rounds, sorted(rounds))
            question = entities["questions"]["question:Q9"]
            self.assertEqual(question["round"], events[-1]["round"])
            # Later publishes keep the pin and do not log the same recovery again.
            export_viewer.publish(out, dest, final=False, status="running")
            run_dir = export_viewer.publish(out, dest, final=False, status="running")
            _, manifest, _ = read_bundle(run_dir)
            kinds = [e["kind"] for e in manifest["publish_errors"]]
            self.assertEqual(kinds, ["recovered"])
            append_jsonl(
                out / "research_log.jsonl",
                {
                    "type": "query",
                    "id": "Q10",
                    "agent": "worker-1",
                    "query": "early too",
                    "ts": "2026-11-14T10:00:31Z",
                },
            )
            final_dir = export_viewer.publish(out, dest, final=True, status="finished")
            self.assertTrue((final_dir / "events.ndjson").read_bytes().startswith(after))
            _, manifest, _ = read_bundle(final_dir)
            kinds = [e["kind"] for e in manifest["publish_errors"]]
            self.assertEqual(kinds, ["recovered", "recovered"])

    def test_record_before_first_ts_after_recovery_does_not_reuse_pin(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            out = autoresearch_run(root)
            dest = root / "dest"
            export_viewer.publish(out, dest, final=False, status="running")
            query = {"type": "query", "agent": "worker-1", "query": "early"}
            append_jsonl(
                out / "research_log.jsonl", {**query, "id": "Q9", "ts": "2026-11-14T10:00:30Z"}
            )
            pinned = export_viewer.publish(out, dest, final=False, status="running")
            append_jsonl(
                out / "research_log.jsonl", {**query, "id": "Q0", "ts": "2020-01-01T00:00:00Z"}
            )
            run_dir = export_viewer.publish(out, dest, final=True, status="finished")
            self.assertNotEqual(run_dir.name, pinned.name)
            events, _, _ = read_bundle(run_dir)
            self.assertEqual({e["run_id"] for e in events}, {run_dir.name})

    def test_scoring_status_is_live(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            out = autoresearch_run(root)
            run_dir = export_viewer.publish(out, root / "dest", final=False, status="scoring")
            _, manifest, _ = read_bundle(run_dir)
            self.assertEqual((manifest["status"], manifest["live"]), ("scoring", True))
            run_dir = export_viewer.publish(out, root / "dest", final=True, status="stopped")
            _, manifest, _ = read_bundle(run_dir)
            self.assertEqual((manifest["status"], manifest["live"]), ("stopped", False))

    def test_round_context_sources_carry_ts_and_round(self):
        with tempfile.TemporaryDirectory() as tmp:
            hit = {"page": "https://z.test/1", "url": "https://z.test/1.csv", "title": "t"}
            round_context.log_source(tmp, "D3_1", hit, 3)
            record = json.loads((Path(tmp) / "research_log.jsonl").read_text())
            self.assertEqual(record["round"], 3)
            self.assertTrue(record["ts"].endswith("Z"))

    def test_inherited_ts_and_round_of_missing_ts(self):
        rows = [(1, {"ts": "a"}), (2, {}), (3, {"ts": "c"})]
        self.assertEqual(
            [ts for _, _, ts in export_viewer.with_inherited_ts(rows, "ts")], list("aac")
        )
        self.assertEqual(export_viewer.round_of_ts([("t1", 1), ("t2", 2)], None), 2)


class ReadableExportTests(unittest.TestCase):
    def run_with_extras(self, root):
        out = autoresearch_run(root)
        claim = {
            "idea": "[EXPLOIT] tabu walks",
            "rationale": "escape local optima",
            "predicted_delta": -0.1,
            "lead_id": "m1",
            "descriptor": {"mechanism": "search", "method": "tabu"},
        }
        memory = [json.loads(line) for line in (out / "memory.jsonl").read_text().splitlines()]
        memory[1] = {
            **memory[1],
            "content": json.dumps(claim),
            "metadata": {"type": "claim", "round": 1},
        }
        repeat = {**memory[1], "id": "m3", "timestamp": "2026-11-14T10:11:00Z"}
        repeat["metadata"] = {"type": "claim", "round": 2}
        write_jsonl(out / "memory.jsonl", [*memory, repeat])
        write_jsonl(out / "ignobel_studies.jsonl", [study("c1"), study("c1", role="critic")])
        write_jsonl(
            out / "scores.jsonl",
            [
                {
                    "commit": "c1",
                    "headline": "Louder cafes sell more espresso",
                    "dataset": "https://data.test/cafe.csv",
                    "committee": 7.5,
                    "rejected": None,
                    "verdicts": [{"judge": "laugh", "score": 8}],
                }
            ],
        )
        return out

    def test_claims_dialogue_studies_awards_and_text(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            out = self.run_with_extras(root)
            events, manifest, entities = read_bundle(export_viewer.export(out, root / "dest"))
            hypotheses = list(entities["hypotheses"].values())
            self.assertEqual(len(hypotheses), 1)
            self.assertEqual(hypotheses[0]["text"], "tabu walks")
            self.assertEqual(hypotheses[0]["rationale"], "escape local optima")
            self.assertFalse(any(m["text"].startswith("{") for m in entities["memory"].values()))
            self.assertTrue(entities["memory"]["memory:m3"]["text"].startswith("Re-proposes"))
            self.assertEqual(
                entities["memory"]["memory:m3"]["repeat_of"], hypotheses[0]["memory_id"]
            )
            self.assertIn(hypotheses[0]["memory_id"], entities["memory"])
            self.assertTrue(all(e["payload"].get("text") for e in events))

            messages = [e for e in events if e["type"] == "message.sent"]
            kinds = {e["payload"]["kind"] for e in messages}
            self.assertEqual(kinds, {"assignment", "verdict"})
            for event in messages:
                self.assertEqual(event["refs"]["to_agent_id"], event["payload"]["to_agent_id"])
            worker1 = next(a for a in manifest["agents"] if a["native_id"] == "worker-1")
            verdict = next(e for e in messages if e["payload"]["kind"] == "verdict")
            self.assertEqual(verdict["payload"]["to_agent_id"], worker1["agent_id"])
            shared = [e for e in events if e["type"] == "items.shared"]
            self.assertEqual(len(shared), 1)
            self.assertEqual(shared[0]["payload"]["to_agent_id"], worker1["agent_id"])

            studies = list(entities["studies"].values())
            self.assertEqual(len(studies), 1)
            self.assertEqual(studies[0]["experiment_id"], "experiment:c1")
            self.assertEqual(studies[0]["dataset"]["x"], "noise_db")
            self.assertEqual(len(studies[0]["replications"]), 1)
            self.assertEqual(studies[0]["committee"]["score"], 7.5)
            types = [e["type"] for e in events]
            for kind in ("study.registered", "study.result", "study.replicated", "award.issued"):
                self.assertEqual(types.count(kind), 1, kind)
            self.assertEqual(manifest["publish_errors"], [])

    def test_plain_text_claims_stay_distinct_hypotheses(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            out = autoresearch_run(root)
            memory = [json.loads(line) for line in (out / "memory.jsonl").read_text().splitlines()]
            other = {
                **memory[1],
                "id": "m4",
                "content": "simulated annealing",
                "timestamp": "2026-11-14T10:11:00Z",
                "metadata": {"type": "claim", "round": 2, "commit": "c2"},
            }
            write_jsonl(out / "memory.jsonl", [*memory, other])
            _, _, entities = read_bundle(export_viewer.export(out, root / "dest"))
            texts = sorted(h["text"] for h in entities["hypotheses"].values())
            self.assertEqual(texts, ["simulated annealing", "tabu walks"])
            self.assertFalse(any("repeat_of" in m for m in entities["memory"].values()))

    def test_committee_awards_after_final_publish_do_not_conflict(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            out = self.run_with_extras(root)
            scores = (out / "scores.jsonl").read_text()
            (out / "scores.jsonl").unlink()
            dest = root / "viewer"
            export_viewer.publish(out, dest, final=False, status="running")
            (out / "scores.jsonl").write_text(scores)
            run_dir = export_viewer.publish(out, dest, final=True, status="finished")
            events, _, _ = read_bundle(run_dir)
            self.assertEqual([e["type"] for e in events].count("award.issued"), 1)

    def test_tsless_study_inherits_previous_ts(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            out = autoresearch_run(root)
            late = {key: value for key, value in study("c1").items() if key != "ts"}
            write_jsonl(out / "ignobel_studies.jsonl", [study("c1"), {**late, "commit": None}])
            events, _, _ = read_bundle(export_viewer.export(out, root / "dest"))
            studies = [e for e in events if e["type"].startswith("study.")]
            self.assertEqual({e["ts"] for e in studies}, {studies[0]["ts"]})
            self.assertIsNotNone(studies[0]["ts"])

    def test_ignobel_metric_label_comes_from_task(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            out = autoresearch_run(root)
            run_json = json.loads((out / "run.json").read_text())
            (out / "run.json").write_text(json.dumps({**run_json, "task": "ignobel"}))
            _, manifest, _ = read_bundle(export_viewer.export(out, root / "dest"))
            self.assertEqual(manifest["metric"]["label"], "interesting-finding loss")
            self.assertEqual(manifest["metric"]["direction"], "minimize")

    def test_experiment_artifacts_include_diff_and_log_tail(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            out = autoresearch_run(root)
            (out / "runs").mkdir()
            (out / "runs" / "c1.log").write_text("x" * 5000 + "END")
            (out / "runs" / "c1.diff").write_text("diff --git a b")
            run_dir = export_viewer.export(out, root / "dest")
            _, _, entities = read_bundle(run_dir)
            experiment = entities["experiments"]["experiment:c1"]
            self.assertEqual(experiment["artifacts"]["diff"], "runs/c1.diff")
            self.assertTrue(experiment["log_tail"].endswith("END"))
            self.assertLessEqual(len(experiment["log_tail"]), export_viewer.LOG_TAIL_CHARS)
            self.assertTrue((run_dir / "artifacts" / "runs" / "c1.diff").is_file())

    def test_missing_log_is_omitted_from_artifacts(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            out = autoresearch_run(root)
            _, _, entities = read_bundle(export_viewer.export(out, root / "dest"))
            experiment = entities["experiments"]["experiment:c1"]
            self.assertNotIn("log", experiment["artifacts"])
            self.assertIsNone(experiment["log_tail"])


class PublisherErrorTests(unittest.TestCase):
    def test_publisher_logs_errors(self):
        def fail():
            raise RuntimeError("export failed")

        stderr = io.StringIO()
        with redirect_stderr(stderr):
            publisher = live_publish.Publisher(fail)
            publisher.flush()
            publisher.close()
        self.assertEqual(publisher.errors, ["RuntimeError: export failed"])
        self.assertIn("live publish failed", stderr.getvalue())

    def test_publish_errors_reach_manifest_and_final_failure_raises(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            out = autoresearch_run(root)
            dest = root / "dest"
            real_publish = export_viewer.publish
            with (
                patch("export_viewer.publish", side_effect=RuntimeError("disk full")),
                redirect_stderr(io.StringIO()),
            ):
                swarm.publish_viewer_state(out, dest, final=False)
                with self.assertRaises(RuntimeError):
                    swarm.publish_viewer_state(out, dest, final=True, status="finished")
            run_dir = real_publish(out, dest, final=True, status="finished")
            _, manifest, _ = read_bundle(run_dir)
            self.assertEqual(
                [e["message"] for e in manifest["publish_errors"]], ["disk full", "disk full"]
            )
            self.assertEqual(manifest["publish_errors"][-1]["kind"], "RuntimeError")


class SwarmOptionTests(unittest.TestCase):
    def test_fake_delay_sleeps_per_fake_call(self):
        args = swarm.build_parser().parse_args(["--task", "hadamard19", "--fake-delay", "0.5"])
        self.assertEqual(args.fake_delay, 0.5)
        with tempfile.TemporaryDirectory() as tmp:
            client = llm.LLMClient(mode="fake", log_path=Path(tmp) / "l.jsonl", fake_delay=0.5)
            self.assertEqual(client.fake_delay, 0.5)
            with (
                patch("llm.time.sleep") as sleep,
                patch("llm.render_prompt", return_value="prompt"),
                patch("llm.fake_response", return_value="{}"),
                suppress(Exception),
            ):
                client.call("WORKER_PROPOSE", agent="worker-1", round_num=1, values={})
            sleep.assert_any_call(0.5)

    def test_post_run_committee_skips_without_tinker_key(self):
        task = {"post_run": "score_run.py", "dir": Path("testcases/ignobel")}
        with (
            patch.object(swarm, "TASK", task),
            patch.dict("os.environ", {}, clear=True),
            patch("swarm.subprocess.run") as run,
            redirect_stdout(io.StringIO()) as stdout,
        ):
            self.assertFalse(swarm.run_post_run_hook("out", "tinker"))
        run.assert_not_called()
        self.assertIn("skipped", stdout.getvalue())

    def test_post_run_committee_reports_success(self):
        task = {"post_run": "score_run.py", "dir": Path("testcases/ignobel")}
        with (
            patch.object(swarm, "TASK", task),
            patch.dict("os.environ", {"TINKER_API_KEY": "x"}),
            patch("swarm.subprocess.run") as run,
            redirect_stdout(io.StringIO()),
        ):
            run.return_value.returncode = 0
            run.return_value.stdout = "scored 1"
            self.assertTrue(swarm.run_post_run_hook("out", "tinker"))
            run.return_value.returncode = 1
            self.assertFalse(swarm.run_post_run_hook("out", "tinker"))
            started = []
            run.reset_mock()
            self.assertFalse(swarm.run_post_run_hook("out", "tinker", replay=True))
            run.assert_not_called()
            run.return_value.returncode = 0
            swarm.run_post_run_hook("out", "tinker", on_start=lambda: started.append(1))
            self.assertEqual(started, [1])

    def test_interrupt_after_rounds_finishes_run(self):
        def interrupted_scoring(args, publish_state, cleanup):
            publish_state["completed"] = True
            raise KeyboardInterrupt

        def interrupted_rounds(args, publish_state, cleanup):
            raise KeyboardInterrupt

        for orchestrate, expected in (
            (interrupted_scoring, "finished"),
            (interrupted_rounds, "stopped"),
        ):
            with (
                patch.object(swarm, "_orchestrate", orchestrate),
                patch.object(swarm, "_finish_publish") as finish,
                self.assertRaises(KeyboardInterrupt),
            ):
                swarm.orchestrate(None)
            self.assertEqual(finish.call_args.args[1], expected)


if __name__ == "__main__":
    unittest.main()
