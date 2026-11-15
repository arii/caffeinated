import json
import tempfile
import unittest
import uuid
from pathlib import Path

import export_viewer


def write_jsonl(path, rows):
    path.write_text("".join(json.dumps(row) + "\n" for row in rows), encoding="utf-8")


def autoresearch_run(root):
    out = root / "run-a"
    out.mkdir()
    (out / "run_id").write_text("abc123\n")
    write_jsonl(out / "assignments.jsonl", [
        {"type": "assignment", "ts": "2026-11-14T10:00:00Z", "round": 1, "swarm_B": 0.1, "regime": "EXPLOIT",
         "per_agent_B": {"worker-1": 0.2, "worker-2": 0.3},
         "per_agent_boredom": {"worker-1": {"B": 0.2, "regime": "EXPLOIT", "novelty": 0.5}},
         "roles": {"worker-1": "exploit", "worker-2": "divergent"}, "scouts": ["worker-2"], "rationale": "r1"},
        {"type": "assignment", "ts": "2026-11-14T10:10:00Z", "round": 2, "swarm_B": 0.8, "regime": "BOREDOM_SNAP",
         "per_agent_B": {"worker-1": 0.7, "worker-2": 0.9},
         "roles": {"worker-1": "divergent", "worker-2": "divergent"}, "scouts": ["worker-1"], "rationale": "r2"},
    ])
    write_jsonl(out / "research_log.jsonl", [
        {"type": "query", "id": "Q1", "agent": "worker-2", "query": "faster solver", "purpose": "scout",
         "ts": "2026-11-14T10:01:00Z", "n_results": 1},
        {"type": "source", "id": "S1", "query_id": "Q1", "title": "Tabu search", "url": "https://x.test",
         "ts": "2026-11-14T10:01:01Z"},
    ])
    write_jsonl(out / "memory_log.jsonl", [
        {"type": "recall", "ts": "2026-11-14T10:02:00Z", "agent": "worker-1", "backend": "local",
         "query": "leads", "n_results": 1, "source_ids": ["m1"], "authors": ["worker-2"]},
    ])
    write_jsonl(out / "memory.jsonl", [
        {"id": "m1", "author": "worker-2", "label": "lead", "content": "try tabu", "timestamp": "2026-11-14T10:01:30Z",
         "metadata": {"round": 1, "arm": "B"}},
        {"id": "m2", "author": "worker-1", "label": "claim by worker-1", "content": "tabu walks",
         "timestamp": "2026-11-14T10:03:00Z",
         "metadata": {"type": "claim", "round": 1, "commit": "c1", "rationale": "escape local optima"}},
    ])
    write_jsonl(out / "llm_log.jsonl", [
        {"ts": "2026-11-14T10:02:30Z", "role": "WORKER_PROPOSE", "agent": "worker-1", "round": 1, "model": "m",
         "prompt_sha": "p", "prompt": "SECRET PROMPT BODY", "response": "{}", "latency_ms": 5,
         "usage": {"total_tokens": 42}, "attempts": [{"reasoning": "thinking text"}]},
    ])
    write_jsonl(out / "boredom_log.jsonl", [
        {"type": "gate", "ts": "2026-11-14T10:04:00Z", "agent": "worker-1", "candidate_commit": "c1", "pass": True},
        {"type": "gate", "ts": "2026-11-14T10:04:01Z", "agent": "worker-2", "candidate_commit": "gone", "pass": False},
        {"type": "status", "ts": "2026-11-14T10:05:00Z", "B": 0.8, "regime": "BOREDOM_SNAP", "frontier_stall": 2},
    ])
    write_jsonl(out / "ledger.jsonl", [
        {"seq": 1, "round": 0, "kind": "baseline", "agent": "baseline", "status": "keep", "score": 1.0},
        {"seq": 2, "round": 1, "kind": "candidate", "agent": "worker-1", "status": "keep", "score": 0.5,
         "commit": "c1", "description": "tabu", "sources": ["S1"]},
        {"seq": 3, "round": 1, "kind": "critic", "agent": "critic", "status": "keep", "commit": "c1",
         "verdict": "confirmed", "accepted": True},
    ])
    return out


class ExportViewerTests(unittest.TestCase):
    def export(self, out, dest):
        run_dir = export_viewer.export(out, dest)
        events = [json.loads(line) for line in (run_dir / "events.ndjson").read_text().splitlines()]
        manifest = json.loads((run_dir / "manifest.json").read_text())
        timeline = json.loads((run_dir / "timeline.json").read_text())
        entities = {path.stem: {e["id"]: e for e in json.loads(path.read_text())}
                    for path in (run_dir / "entities").glob("*.json")}
        return run_dir, events, manifest, timeline, entities

    def test_autoresearch_export_matches_schema(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            out = autoresearch_run(root)
            run_dir, events, manifest, timeline, entities = self.export(out, root / "dest")

            self.assertEqual(manifest["schema"], "swarm-viewer/v1")
            uuid.UUID(manifest["run_id"])
            workers = {a["native_id"]: a for a in manifest["agents"]}
            self.assertEqual(workers["worker-1"]["agent_id"],
                             str(uuid.uuid5(uuid.UUID(manifest["run_id"]), "worker-1")))
            self.assertEqual(workers["critic"]["type"], "critic")
            self.assertEqual([e["tick"] for e in events], list(range(len(events))))
            self.assertEqual(len({e["event_id"] for e in events}), len(events))
            self.assertEqual(manifest["provenance"]["gpu"], "none (CPU only)")

            ids = {key for table in entities.values() for key in table}
            for event in events:
                for name, ref in event["refs"].items():
                    if name != "to_agent_id":
                        self.assertIn(ref, ids, (event["type"], name))

            ledger_events = [e for e in events if e["source"]["file"] == "ledger.jsonl"]
            baseline = next(e for e in ledger_events if e["type"] == "experiment.started")
            self.assertIsNone(baseline["ts"])  # no invented timestamps
            started = next(e for e in ledger_events if e["refs"].get("experiment_id") == "experiment:c1")
            self.assertEqual(started["ts"], "2026-11-14T10:04:00Z")  # borrowed from the gate record

            self.assertNotIn("SECRET PROMPT BODY", (run_dir / "events.ndjson").read_text())
            call = entities["llm_calls"]["llm_call:1"]
            self.assertEqual(call["prompt"], "SECRET PROMPT BODY")
            self.assertEqual(call["reasoning"], "thinking text")

            recall = next(e for e in events if e["type"] == "question.asked" and e["payload"]["kind"] == "recall")
            self.assertEqual(recall["agent_id"], workers["worker-1"]["agent_id"])
            self.assertEqual(len(entities["discoveries"]), 1)
            self.assertEqual(entities["experiments"]["experiment:c1"]["hypothesis_id"], "hypothesis:c1")
            self.assertIn("regime_change", {m["kind"] for m in timeline["markers"]})

            final = json.loads((run_dir / "keyframes" / f"{timeline['keyframes'][-1]}.json").read_text())
            agent = next(a for a in final["agents"] if a["agent_id"] == workers["worker-1"]["agent_id"])
            self.assertEqual(agent["role"], "divergent")
            self.assertEqual(agent["boredom"]["B"], 0.7)
            self.assertEqual(agent["last_reward"]["value"], 50.0)
            self.assertEqual(final["swarm"]["best"]["metric_value"], 0.5)

    def test_export_is_deterministic_and_seek_matches_keyframes(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            out = autoresearch_run(root)
            first = self.export(out, root / "a")
            second = self.export(out, root / "b")
            self.assertEqual(first[1], second[1])
            self.assertEqual(first[2], second[2])
            run_dir, events, manifest, timeline, entities = first
            entities = {kind: table for kind, table in entities.items()}
            keyframes = {tick: json.loads((run_dir / "keyframes" / f"{tick}.json").read_text())
                         for tick in timeline["keyframes"]}
            tick = timeline["keyframes"][-1]
            replayed = export_viewer.world_at(events, manifest, entities, tick)
            self.assertEqual(replayed["agents"], keyframes[tick]["agents"])
            seeked = export_viewer.world_at(events, manifest, entities, tick, keyframes)
            self.assertEqual(seeked["agents"], keyframes[tick]["agents"])
            worker = next(a["agent_id"] for a in manifest["agents"] if a["native_id"] == "worker-1")
            roles = [next(a["role"] for a in frame["agents"] if a["agent_id"] == worker)
                     for frame in keyframes.values()]
            self.assertIn("exploit", roles)  # earlier keyframes keep historical state

    def test_ignobel_events_convert(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            out = root / "ig"
            out.mkdir()
            base = {"arm": "full", "seed": 0, "tokens": 0, "latency_ms": 0}
            write_jsonl(out / "events.jsonl", [
                {**base, "round": 1, "agent": "quill", "type": "idea",
                 "payload": {"idea_id": "q1", "text": "Do cats nap more on Mondays?", "source_urls": []}},
                {**base, "round": 1, "agent": "quill", "type": "prediction",
                 "payload": {"idea_id": "q1", "direction": "+", "effect_size": 0.2}},
                {**base, "round": 1, "agent": "quill", "type": "boredom",
                 "payload": {"B": 0.4, "regime": "EXPLOIT", "similarity": 0.1, "action": "RUN_STUDY"}},
                {**base, "round": 1, "agent": "quill", "type": "measurement_request",
                 "payload": {"requester": "volkov", "instrument": "t", "n": 10}},
                {**base, "round": 1, "agent": "quill", "type": "study_result",
                 "payload": {"study_id": "s1", "idea_id": "q1", "ok": True, "replicated": True,
                             "prediction": {"direction": "+", "effect_size": 0.2},
                             "stats": {"direction": "+", "effect_size": 0.2, "p": 0.01}}},
                {**base, "round": 1, "agent": "quill", "type": "talk",
                 "payload": {"partner": "volkov", "turn": 1, "text": "hi"}},
            ])
            run_dir, events, manifest, timeline, entities = self.export(out, root / "dest")
            types = {a["native_id"]: a["type"] for a in manifest["agents"]}
            self.assertEqual(types, {"quill": "researcher", "volkov": "statistician", "world": "world"})
            self.assertTrue(all(e["ts"] is None for e in events))
            self.assertEqual(entities["rewards"]["reward:s1"]["value"], 1.0)
            self.assertEqual(entities["hypotheses"]["hypothesis:q1"]["prediction"]["effect_size"], 0.2)
            talk = next(e for e in events if e["type"] == "message.sent")
            self.assertEqual(talk["refs"]["to_agent_id"], next(a["agent_id"] for a in manifest["agents"]
                                                               if a["native_id"] == "volkov"))
            index = json.loads((root / "dest" / "index.json").read_text())
            self.assertEqual(index["runs"][0]["run_id"], manifest["run_id"])


if __name__ == "__main__":
    unittest.main()
