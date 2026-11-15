import json
from pathlib import Path
import tempfile
import unittest

import export_trace

ROOT = Path(__file__).resolve().parents[1]
FIXTURE = ROOT / "lab" / "data" / "fixtures" / "offline_swarm.trace.json"
ARMS = [("B", str(ROOT / "experiments" / "offline_swarm_B")),
        ("A", str(ROOT / "experiments" / "offline_swarm_A"))]


class ExportTraceTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.fixture = json.loads(FIXTURE.read_text(encoding="utf-8"))
        cls.trace = export_trace.build_trace(ARMS, cls.fixture["title"])

    def test_committed_fixture_is_regenerated_exactly(self):
        self.assertEqual(json.loads(json.dumps(self.trace)), self.fixture,
                         "re-run export_trace.py to refresh lab/data/fixtures/offline_swarm.trace.json")

    def test_trace_satisfies_schema(self):
        self.assertEqual(export_trace.validate_trace(self.trace), [])
        self.assertEqual(self.trace["schema"], "caffeinated-trace/v1")
        self.assertEqual([a["arm"] for a in self.trace["arms"]], ["B", "A"])

    def test_meter_arm_shows_pivots_exa_sources_and_memory_reuse(self):
        arm = self.trace["arms"][0]
        self.assertTrue(arm["boredom_enabled"])
        pivots = [e for e in arm["experiments"] if e["pivot"]]
        self.assertTrue(pivots)
        self.assertTrue(all(e["boredom"] >= self.trace["thresholds"]["snap"] for e in pivots))
        self.assertEqual(arm["provenance"]["exa"], "live")
        self.assertEqual(arm["provenance"]["gpu"], "fake")
        leads = [m for m in arm["memory"] if m["type"] == "lead"]
        self.assertTrue(leads)
        for lead in leads:
            for source_id in lead["source_ids"]:
                self.assertTrue(arm["sources"][source_id]["url"].startswith("http"))
        reused = [m for m in leads if m["reused_by"]]
        self.assertTrue(reused)
        experiments = {e["id"]: e for e in arm["experiments"]}
        for lead in reused:
            for reader in lead["reused_by"]:
                self.assertNotEqual(reader["agent"], lead["agent"])
                self.assertEqual(experiments[reader["experiment"]]["lead"]["id"], lead["id"])
                self.assertGreaterEqual(reader["experiment"], lead["experiment"])
        self.assertEqual(arm["summary"]["cross_agent_reuse"], sum(len(m["reused_by"]) for m in leads))

    def test_control_arm_never_pivots_but_records_shadow_meter(self):
        arm = self.trace["arms"][1]
        self.assertFalse(arm["boredom_enabled"])
        self.assertEqual(arm["summary"]["pivots"], 0)
        self.assertGreaterEqual(arm["summary"]["max_boredom"], self.trace["thresholds"]["snap"])
        self.assertTrue(all(e["regime"] == "EXPLOIT" for e in arm["experiments"]))

    def test_results_tsv_arm_and_cli_output(self):
        with tempfile.TemporaryDirectory() as tmp:
            arm_dir = Path(tmp) / "legacy"
            arm_dir.mkdir()
            (arm_dir / "results.tsv").write_text(
                "commit\tval_bpb\tmemory_gb\tstatus\tdescription\n"
                "aaaaaaa\t1.000000\t44\tkeep\tbaseline\n"
                "bbbbbbb\t0.990000\t44\tkeep\tlower lr\n"
                "ccccccc\t0.000000\t0\tcrash\tbroken\n"
                "ddddddd\t0.995000\t44\tdiscard\twider\n", encoding="utf-8")
            (arm_dir / "boredom_log.jsonl").write_text("".join(
                json.dumps({"type": "status", "B": b, "regime": r}) + "\n"
                for b, r in [(0, "EXPLOIT"), (0.2, "EXPLOIT"), (0.75, "BOREDOM_SNAP"), (0.9, "PARADIGM_BREAKOUT")]),
                encoding="utf-8")
            out = Path(tmp) / "trace.json"
            self.assertEqual(export_trace.main(["--arm", f"x={arm_dir}", "-o", str(out)]), 0)
            trace = json.loads(out.read_text(encoding="utf-8"))
        arm = trace["arms"][0]
        self.assertEqual([e["best_val_bpb"] for e in arm["experiments"]], [1.0, 0.99, 0.99, 0.99])
        self.assertIsNone(arm["experiments"][2]["val_bpb"])
        self.assertEqual([e["pivot"] for e in arm["experiments"]], [False, False, True, True])
        self.assertEqual(arm["summary"]["score"], 1.0)
        self.assertEqual(export_trace.validate_trace(trace), [])


if __name__ == "__main__":
    unittest.main()
