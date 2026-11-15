import gzip
import json
import tempfile
import unittest
import uuid
from pathlib import Path

import export_viewer

PROFILE_PATH = Path(__file__).resolve().parents[1] / "testcases/hadamard19/boredom_profile.json"


def write_jsonl(path, rows):
    path.write_text("".join(json.dumps(row) + "\n" for row in rows), encoding="utf-8")


def autoresearch_run(root):
    out = root / "run-a"
    out.mkdir()
    (out / "run_id").write_text("abc123\n")
    profile = export_viewer.meter.load_profile(PROFILE_PATH)
    profile_data = {key: value for key, value in profile.items() if not key.startswith("_")}
    (out / "boredom_profile.json").write_text(json.dumps(profile_data), encoding="utf-8")
    (out / "run.json").write_text(
        json.dumps(
            {
                "profile_path": "boredom_profile.json",
                "profile_sha256": profile["_hash"],
                "status": "finished",
                "critic_model": "critic-model",
            }
        ),
        encoding="utf-8",
    )
    write_jsonl(
        out / "assignments.jsonl",
        [
            {
                "type": "assignment",
                "ts": "2026-11-14T10:00:00Z",
                "round": 1,
                "swarm_B": 0.1,
                "regime": "EXPLOIT",
                "per_agent_B": {"worker-1": 0.2, "worker-2": 0.3},
                "profile_sha256": profile["_hash"],
                "roles": {"worker-1": "exploit", "worker-2": "divergent"},
                "scouts": ["worker-2"],
                "rationale": "r1",
            },
            {
                "type": "assignment",
                "ts": "2026-11-14T10:10:00Z",
                "round": 2,
                "swarm_B": 0.8,
                "regime": "BOREDOM_SNAP",
                "per_agent_B": {"worker-1": 0.7, "worker-2": 0.9},
                "profile_sha256": profile["_hash"],
                "roles": {"worker-1": "divergent", "worker-2": "divergent"},
                "scouts": ["worker-1"],
                "rationale": "r2",
            },
        ],
    )
    write_jsonl(
        out / "research_log.jsonl",
        [
            {
                "type": "query",
                "id": "Q1",
                "agent": "worker-2",
                "query": "faster solver",
                "purpose": "scout",
                "ts": "2026-11-14T10:01:00Z",
                "n_results": 1,
            },
            {
                "type": "source",
                "id": "S1",
                "query_id": "Q1",
                "title": "Tabu search",
                "url": "https://x.test",
                "ts": "2026-11-14T10:01:01Z",
            },
        ],
    )
    write_jsonl(
        out / "memory_log.jsonl",
        [
            {
                "type": "recall",
                "ts": "2026-11-14T10:02:00Z",
                "agent": "worker-1",
                "backend": "local",
                "query": "leads",
                "n_results": 1,
                "source_ids": ["m1"],
                "authors": ["worker-2"],
            },
        ],
    )
    write_jsonl(
        out / "memory.jsonl",
        [
            {
                "id": "m1",
                "author": "worker-2",
                "label": "lead",
                "content": "try tabu",
                "timestamp": "2026-11-14T10:01:30Z",
                "metadata": {"round": 1, "arm": "B"},
            },
            {
                "id": "m2",
                "author": "worker-1",
                "label": "claim by worker-1",
                "content": "tabu walks",
                "timestamp": "2026-11-14T10:03:00Z",
                "metadata": {
                    "type": "claim",
                    "round": 1,
                    "commit": "c1",
                    "rationale": "escape local optima",
                },
            },
        ],
    )
    write_jsonl(
        out / "llm_log.jsonl",
        [
            {
                "ts": "2026-11-14T10:02:30Z",
                "role": "WORKER_PROPOSE",
                "agent": "worker-1",
                "round": 1,
                "model": "m",
                "prompt_sha": "p",
                "prompt": "SECRET PROMPT BODY",
                "response": "{}",
                "latency_ms": 5,
                "usage": {"total_tokens": 42},
                "attempts": [{"reasoning": "thinking text"}],
            },
        ],
    )
    write_jsonl(
        out / "boredom_log.jsonl",
        [
            {
                "type": "gate",
                "ts": "2026-11-14T10:04:00Z",
                "agent": "worker-1",
                "candidate_commit": "c1",
                "pass": True,
            },
            {
                "type": "gate",
                "ts": "2026-11-14T10:04:01Z",
                "agent": "worker-2",
                "candidate_commit": "gone",
                "pass": False,
            },
            {
                "type": "status",
                "ts": "2026-11-14T10:05:00Z",
                "B": 0.8,
                "regime": "BOREDOM_SNAP",
                "frontier_stall": 2,
            },
        ],
    )
    write_jsonl(
        out / "ledger.jsonl",
        [
            {
                "seq": 1,
                "round": 0,
                "kind": "baseline",
                "agent": "baseline",
                "status": "keep",
                "score": 1.0,
                "descriptor": {"mechanism": "search", "method": "pair_flip"},
            },
            {
                "seq": 2,
                "round": 1,
                "kind": "candidate",
                "agent": "worker-1",
                "status": "keep",
                "score": 0.5,
                "commit": "c1",
                "description": "tabu",
                "sources": ["S1"],
                "descriptor": {"mechanism": "search", "method": "tabu"},
            },
            {
                "seq": 3,
                "round": 1,
                "kind": "critic",
                "agent": "critic",
                "status": "keep",
                "commit": "c1",
                "verdict": "confirmed",
                "accepted": True,
            },
        ],
    )
    return out


class TaskTitleTests(unittest.TestCase):
    def test_task_title_names_the_task(self):
        self.assertEqual(export_viewer.task_title("ignobel"), "Ig Nobel Prize hunt")
        self.assertEqual(export_viewer.task_title("hadamard19"), "autoresearch · hadamard19")
        self.assertEqual(export_viewer.task_title(None), "autoresearch")

    def test_ignobel_agents_are_named_labs(self):
        agents = export_viewer.task_config("ignobel")["agents"]
        self.assertEqual(agents["worker-1"]["label"], "Kitchen Physics Lab")
        self.assertEqual(export_viewer.task_config("no-such-task"), {})


class ExportViewerTests(unittest.TestCase):
    def export(self, out, dest):
        run_dir = export_viewer.export(out, dest)
        events = [json.loads(line) for line in (run_dir / "events.ndjson").read_text().splitlines()]
        manifest = json.loads((run_dir / "manifest.json").read_text())
        timeline = json.loads((run_dir / "timeline.json").read_text())
        entities = {
            path.stem: {e["id"]: e for e in json.loads(path.read_text())}
            for path in (run_dir / "entities").glob("*.json")
        }
        return run_dir, events, manifest, timeline, entities

    def test_critic_veto_is_exposed_in_verdict_event(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            out = autoresearch_run(root)
            ledger_path = out / "ledger.jsonl"
            ledger = [json.loads(line) for line in ledger_path.read_text().splitlines()]
            ledger[1]["status"] = "discard"
            ledger[1].pop("accepted", None)
            ledger[1].pop("verdict", None)
            ledger.append(
                {
                    "seq": 3,
                    "round": 1,
                    "kind": "critic",
                    "agent": "critic",
                    "status": "discard",
                    "score": 0.5,
                    "commit": "c1",
                    "accepted": False,
                    "vetoed": True,
                    "verdict": "contradicted",
                }
            )
            write_jsonl(ledger_path, ledger)

            _, events, _, _, _ = self.export(out, root / "dest")

        verdict = next(
            event
            for event in events
            if event["type"] == "verdict.issued" and event["payload"].get("vetoed")
        )
        self.assertFalse(verdict["payload"]["accepted"])
        self.assertTrue(verdict["payload"]["vetoed"])

    def test_autoresearch_export_matches_schema(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            out = autoresearch_run(root)
            run_dir, events, manifest, timeline, entities = self.export(out, root / "dest")

            self.assertEqual(manifest["schema"], "swarm-viewer/v1")
            expected_profile = export_viewer.meter.load_profile(PROFILE_PATH)
            self.assertEqual(manifest["boredom"]["thresholds"]["eps"], expected_profile["eps"])
            self.assertEqual(
                manifest["boredom"]["thresholds"]["accept_margin"],
                expected_profile.get("accept_margin", 0.0),
            )
            uuid.UUID(manifest["run_id"])
            workers = {a["native_id"]: a for a in manifest["agents"]}
            self.assertEqual(
                workers["worker-1"]["agent_id"],
                str(uuid.uuid5(uuid.UUID(manifest["run_id"]), "worker-1")),
            )
            self.assertEqual(workers["critic"]["type"], "critic")
            self.assertEqual([e["tick"] for e in events], list(range(len(events))))
            self.assertEqual(len({e["event_id"] for e in events}), len(events))
            self.assertEqual(
                set(manifest["provenance"]),
                {
                    "llm",
                    "critic_model",
                    "llm_mode",
                    "exa",
                    "research",
                    "native_run_id",
                    "memory_backend",
                    "swarm_commit",
                    "command",
                    "artifacts",
                },
            )
            self.assertEqual(manifest["provenance"]["critic_model"], "critic-model")

            ids = {key for table in entities.values() for key in table}
            for event in events:
                for name, ref in event["refs"].items():
                    if name != "to_agent_id":
                        self.assertIn(ref, ids, (event["type"], name))

            ledger_events = [e for e in events if e["source"]["file"] == "ledger.jsonl"]
            baseline = next(e for e in ledger_events if e["type"] == "experiment.started")
            self.assertIsNone(baseline["ts"])  # no invented timestamps
            started_by_agent = next(
                e for e in ledger_events if e["type"] == "experiment.started" and e["agent_id"]
            )
            world = export_viewer.world_at(events, manifest, entities, started_by_agent["tick"])
            agent_state = next(
                agent
                for agent in world["agents"]
                if agent["agent_id"] == started_by_agent["agent_id"]
            )
            self.assertEqual(agent_state["activity"], "training")
            self.assertEqual(agent_state["station"], "culture")
            started = next(
                e for e in ledger_events if e["refs"].get("experiment_id") == "experiment:c1"
            )
            self.assertEqual(started["ts"], "2026-11-14T10:04:00Z")  # borrowed from the gate record

            self.assertNotIn("SECRET PROMPT BODY", (run_dir / "events.ndjson").read_text())
            call = entities["llm_calls"]["llm_call:1"]
            self.assertEqual(call["prompt"], "SECRET PROMPT BODY")
            self.assertEqual(call["reasoning"], "thinking text")

            recall = next(
                e
                for e in events
                if e["type"] == "question.asked" and e["payload"]["kind"] == "recall"
            )
            self.assertEqual(recall["agent_id"], workers["worker-1"]["agent_id"])
            self.assertEqual(len(entities["discoveries"]), 1)
            self.assertEqual(
                entities["experiments"]["experiment:c1"]["hypothesis_id"], "hypothesis:c1"
            )
            self.assertIn("regime_change", {m["kind"] for m in timeline["markers"]})

            final = json.loads(
                (run_dir / "keyframes" / f"{timeline['keyframes'][-1]}.json").read_text()
            )
            agent = next(
                a for a in final["agents"] if a["agent_id"] == workers["worker-1"]["agent_id"]
            )
            self.assertEqual(agent["role"], "divergent")
            profile = export_viewer.meter.load_profile(PROFILE_PATH)
            expected_b = export_viewer.meter.status(
                profile, export_viewer.meter.read_ledger(out / "ledger.jsonl"), agent="worker-1"
            )["B"]
            self.assertEqual(agent["boredom"]["B"], expected_b)
            self.assertEqual(agent["last_reward"]["value"], 50.0)
            self.assertEqual(final["swarm"]["best"]["metric_value"], 0.5)

    def test_ignobel_export_preserves_committee_details(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            out = root / "ignobel"
            out.mkdir()
            committee = {
                "available": True,
                "score": 0.6,
                "rejected": False,
                "judges": {
                    "a": {"laugh": 8, "think": 6, "reason": "Odd and plausible."},
                    "b": {"laugh": 7, "think": 6, "reason": "Not textbook."},
                },
                "prior_work": [
                    {
                        "title": "Related work",
                        "url": "https://example.org/paper",
                        "snippet": "A prior-work snippet.",
                    }
                ],
                "prior_work_available": True,
            }
            write_jsonl(
                out / "ignobel_studies.jsonl",
                [
                    {
                        "ts": "2026-11-14T10:00:00Z",
                        "commit": "abc",
                        "prereg": {
                            "field": "everyday_physics",
                            "study_type": "untested_prediction",
                            "question": "Does X go with Y?",
                            "hypothesis": "X and Y are related.",
                            "dataset": {"url": "https://example.org/data.csv", "x": "X", "y": "Y"},
                        },
                        "result": {
                            "confirmed": True,
                            "headline": "X goes with Y",
                            "dataset_id": "dataset:1",
                            "rho": 0.3,
                            "p": 0.001,
                            "n": 200,
                            "citations": [],
                            "committee": committee,
                        },
                    }
                ],
            )
            write_jsonl(
                out / "scores.jsonl",
                [
                    {
                        "commit": "abc",
                        "field": "everyday_physics",
                        "headline": "X goes with Y",
                        "dataset": "https://example.org/data.csv",
                        "committee": 0.6,
                        "available": True,
                        "rejected": False,
                        "verdicts": {},
                        "judges": committee["judges"],
                        "prior_work": committee["prior_work"],
                        "prior_work_available": True,
                    }
                ],
            )

            class FakeRun:
                def __init__(self):
                    self.entities = {
                        "experiments": {
                            "experiment:abc": {
                                "agent_id": "agent-worker-1",
                                "round": 1,
                            }
                        },
                        "studies": {},
                    }
                    self.agents = {"worker-1": {"agent_id": "agent-worker-1"}}
                    self.events = []

                def put(self, table, key, entity):
                    self.entities[table][key] = entity
                    return key

                def emit(self, event_type, **event):
                    self.events.append({"type": event_type, **event})

            run = FakeRun()
            export_viewer.export_studies(run, out, {}, {"abc": "experiment:abc"}, 1, [])

            study = next(iter(run.entities["studies"].values()))
            self.assertEqual(study["committee"]["score"], 0.6)
            self.assertEqual(study["committee"]["judges"]["a"]["think"], 6)
            self.assertEqual(
                study["committee"]["prior_work"][0]["url"], "https://example.org/paper"
            )
            result_event = next(event for event in run.events if event["type"] == "study.result")
            self.assertEqual(result_event["payload"]["committee"]["score"], 0.6)
            award_event = next(event for event in run.events if event["type"] == "award.issued")
            self.assertEqual(award_event["payload"]["prior_work"][0]["title"], "Related work")

    def test_arm_branch_checkout_with_gzipped_logs_exports_the_same_events(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            out = autoresearch_run(root)
            events = self.export(out, root / "dest-raw")[1]
            for name in ("llm_log.jsonl", "research_log.jsonl"):
                path = out / name
                with gzip.open(out / f"{name}.gz", "wb") as archive:
                    archive.write(path.read_bytes())
                path.unlink()
            archived = self.export(out, root / "dest-archived")[1]
            self.assertEqual(len(archived), len(events))
            self.assertEqual(
                [event["type"] for event in archived], [event["type"] for event in events]
            )
            for name in ("llm_log.jsonl", "research_log.jsonl"):
                (out / f"{name}.gz").unlink()
            self.assertLess(len(self.export(out, root / "dest-without-logs")[1]), len(events))

    def test_duplicate_experiment_maps_to_discard_with_reason(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            out = autoresearch_run(root)
            reason = "duplicate: blob already scored as c1"
            ledger = [json.loads(line) for line in (out / "ledger.jsonl").read_text().splitlines()]
            ledger.append(
                {
                    "seq": 4,
                    "round": 2,
                    "kind": "candidate",
                    "agent": "worker-2",
                    "status": "duplicate",
                    "score": 0.5,
                    "commit": "c2",
                    "duplicate_of": "c1",
                    "gate_reasons": [reason],
                    "descriptor": {"mechanism": "search", "method": "tabu"},
                }
            )
            write_jsonl(out / "ledger.jsonl", ledger)

            _, events, _, _, entities = self.export(out, root / "dest")
            experiment = entities["experiments"]["experiment:c2"]
            self.assertEqual(experiment["status"], "discard")
            self.assertIn(reason, experiment["gate"]["reasons"])
            self.assertEqual(entities["rewards"]["reward:4"]["status"], "discard")
            finished = next(
                event
                for event in events
                if event["type"] == "experiment.finished"
                and event["refs"].get("experiment_id") == "experiment:c2"
            )
            self.assertEqual(finished["payload"]["status"], "discard")

    def test_export_is_deterministic_and_seek_matches_keyframes(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            out = autoresearch_run(root)
            first = self.export(out, root / "a")
            second = self.export(out, root / "b")
            self.assertEqual(first[1], second[1])
            self.assertEqual(first[2], second[2])
            run_dir, events, manifest, timeline, entities = first
            entities = dict(entities)
            keyframes = {
                tick: json.loads((run_dir / "keyframes" / f"{tick}.json").read_text())
                for tick in timeline["keyframes"]
            }
            tick = timeline["keyframes"][-1]
            replayed = export_viewer.world_at(events, manifest, entities, tick)
            self.assertEqual(replayed["agents"], keyframes[tick]["agents"])
            seeked = export_viewer.world_at(events, manifest, entities, tick, keyframes)
            self.assertEqual(seeked["agents"], keyframes[tick]["agents"])
            worker = next(a["agent_id"] for a in manifest["agents"] if a["native_id"] == "worker-1")
            roles = [
                next(a["role"] for a in frame["agents"] if a["agent_id"] == worker)
                for frame in keyframes.values()
            ]
            self.assertIn("exploit", roles)  # earlier keyframes keep historical state

    def test_profile_sha_mismatch_fails_export(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            out = autoresearch_run(root)
            run_artifact = json.loads((out / "run.json").read_text())
            run_artifact["profile_sha256"] = "0" * 64
            (out / "run.json").write_text(json.dumps(run_artifact), encoding="utf-8")
            with self.assertRaisesRegex(ValueError, "profile"):
                export_viewer.export(out, root / "dest")

    def test_logged_per_agent_boredom_must_match_recomputation(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            out = autoresearch_run(root)
            assignments = [
                json.loads(line) for line in (out / "assignments.jsonl").read_text().splitlines()
            ]
            assignments[0]["per_agent_boredom"] = {"worker-1": {"B": 0.99}}
            write_jsonl(out / "assignments.jsonl", assignments)
            with self.assertRaisesRegex(ValueError, "per_agent_boredom mismatch"):
                export_viewer.export(out, root / "dest")

    def test_publish_conflict_leaves_all_published_files_untouched(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            out = autoresearch_run(root)
            dest = root / "dest"
            run_dir = export_viewer.publish(out, dest, final=False, status="running")
            events = run_dir / "events.ndjson"
            data = events.read_bytes()
            events.write_bytes(b"tampered" + data[8:])
            before = {
                path.relative_to(dest): path.read_bytes()
                for path in dest.rglob("*")
                if path.is_file()
            }
            with self.assertRaises(export_viewer.PublishConflict):
                export_viewer.publish(out, dest, final=False, status="running")
            after = {
                path.relative_to(dest): path.read_bytes()
                for path in dest.rglob("*")
                if path.is_file()
            }
            self.assertEqual(after, before)


if __name__ == "__main__":
    unittest.main()
