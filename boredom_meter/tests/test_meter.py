import json, random, subprocess, sys
from concurrent.futures import ProcessPoolExecutor
from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))
import meter  # noqa: E402

BIO = ROOT / "profiles/biolab_growth.json"
AUTORESEARCH = ROOT / "profiles/autoresearch_llm.json"

AUTORESEARCH_CELLS = [
    ("baseline", "none"),
    ("batch", "total_batch"),
    ("lr_schedule", "warmup"),
    ("optimizer", "matrix_lr"),
    ("architecture", "depth"),
    ("attention", "window"),
    ("data", "ordering"),
]


def autoresearch_ledger(include_all=True):
    cells = AUTORESEARCH_CELLS if include_all else AUTORESEARCH_CELLS[:-1]
    events = []
    for mechanism, method in cells:
        events.append(
            {
                "seq": len(events) + 1,
                "agent": "agent",
                "status": "keep",
                "score": 1.0,
                "descriptor": {"mechanism": mechanism, "method": method},
            }
        )
    while len(events) < 16:
        events.append(
            {
                "seq": len(events) + 1,
                "agent": "agent",
                "status": "keep",
                "score": 1.0,
                "descriptor": {"mechanism": "optimizer", "method": "matrix_lr"},
            }
        )
    return events


def ev(seq, hyp, n, o, score, status="discard", agent="a", assay="growth_curve"):
    return {"seq": seq, "agent": agent, "status": status, "score": score,
            "descriptor": {"hypothesis": hyp, "assay": assay, "params": {"nutrient": n, "oxygen": o}}}


def stuck_ledger():
    events = [ev(1, "toxicity", 0.28, 0.24, 0.60, "keep")]
    for i in range(2, 9):
        events.append(ev(i, "toxicity", 0.28 + 0.001 * i, 0.24, 0.59, agent="ab"[i % 2]))
    return events


def _submit(args):
    ledger, i = args
    profile = meter.load_profile(BIO)
    return meter.submit(profile, ledger, ev(None, "toxicity", 0.1 * (i % 10), 0.5, 0.5))["seq"]


class MeterTest(unittest.TestCase):
    def setUp(self):
        self.p = meter.load_profile(BIO)

    def test_empty_and_fresh(self):
        self.assertEqual(meter.status(self.p, [])["regime"], "EXPLOIT")

    def test_stuck_swarm_snaps(self):
        st = meter.status(self.p, stuck_ledger())
        self.assertGreaterEqual(st["B"], 0.70)
        self.assertNotEqual(st["regime"], "EXPLOIT")

    def test_improvement_resets(self):
        events = stuck_ledger() + [ev(9, "co_limitation", 0.76, 0.81, 0.93, "keep")]
        self.assertEqual(meter.status(self.p, events)["regime"], "EXPLOIT")

    def test_order_independent_and_reproducible(self):
        events = stuck_ledger()
        shuffled = events[:]
        random.Random(0).shuffle(shuffled)
        a = meter.status(self.p, sorted(events, key=lambda e: e["seq"]))
        b = meter.status(self.p, sorted(shuffled, key=lambda e: e["seq"]))
        self.assertEqual(meter.canonical(a), meter.canonical(b))

    def test_prefix_scoring(self):
        events = stuck_ledger()
        self.assertEqual(meter.status(self.p, events, at=3), meter.status(self.p, events[:3]))

    def test_agent_scope_counts_others_work_as_not_novel(self):
        events = stuck_ledger()
        events.append(ev(9, "toxicity", 0.289, 0.24, 0.58, agent="new"))
        st = meter.status(self.p, events, agent="new")
        self.assertLess(st["novelty"], 0.1)

    def test_gate_rejects_near_duplicate_when_bored(self):
        events = stuck_ledger()
        dup = {"hypothesis": "toxicity", "assay": "growth_curve", "params": {"nutrient": 0.29, "oxygen": 0.24}}
        far = {"hypothesis": "co_limitation", "assay": "factorial_screen", "params": {"nutrient": 0.8, "oxygen": 0.8}}
        self.assertFalse(meter.gate(self.p, events, dup)["pass"])
        self.assertTrue(meter.gate(self.p, events, far)["pass"])

    def test_vocab_enforced(self):
        bad = {"hypothesis": "magic", "assay": "growth_curve", "params": {}}
        with self.assertRaises(ValueError):
            meter.gate(self.p, [], bad)

    def test_suggest_is_deterministic_and_prefers_unvisited(self):
        s1 = meter.suggest(self.p, stuck_ledger(), n=3)
        s2 = meter.suggest(self.p, stuck_ledger(), n=3)
        self.assertEqual(s1, s2)
        self.assertTrue(all(c["visits"] == 0 for c in s1))
        self.assertNotIn("toxicity/growth_curve", [c["cell"] for c in s1])

    def test_concurrent_submit_assigns_unique_seqs(self):
        import tempfile
        with tempfile.TemporaryDirectory() as tmp:
            ledger = str(Path(tmp) / "ledger.jsonl")
            with ProcessPoolExecutor(4) as ex:
                seqs = list(ex.map(_submit, [(ledger, i) for i in range(40)]))
            self.assertEqual(sorted(seqs), list(range(1, 41)))
            self.assertEqual(len(meter.read_ledger(ledger)), 40)

    def test_cli_roundtrip(self):
        import tempfile
        with tempfile.TemporaryDirectory() as tmp:
            ledger = str(Path(tmp) / "l.jsonl")
            base = [sys.executable, str(ROOT / "meter.py"), "--profile", str(BIO), "--ledger", ledger]
            for e in stuck_ledger():
                e = {k: v for k, v in e.items() if k != "seq"}
                subprocess.run(base + ["submit", "--event", json.dumps(e)], check=True, capture_output=True)
            out1 = subprocess.run(base + ["status"], check=True, capture_output=True, text=True).stdout
            out2 = subprocess.run(base + ["status"], check=True, capture_output=True, text=True).stdout
            self.assertEqual(out1, out2)
            self.assertNotEqual(json.loads(out1)["regime"], "EXPLOIT")


class ConvergedTest(unittest.TestCase):
    def setUp(self):
        self.profile = meter.load_profile(AUTORESEARCH)

    def test_enters_after_stall_and_all_top_level_cells_visited(self):
        events = autoresearch_ledger()
        state = meter.status(self.profile, events)
        self.assertGreaterEqual(state["frontier_stall"], 3 * self.profile["patience"])
        self.assertEqual(state["regime"], "CONVERGED")

    def test_does_not_enter_when_a_top_level_cell_is_unvisited(self):
        events = autoresearch_ledger(include_all=False)
        state = meter.status(self.profile, events)
        self.assertGreaterEqual(state["frontier_stall"], 3 * self.profile["patience"])
        self.assertNotEqual(state["regime"], "CONVERGED")

    def test_significant_improvement_exits_converged(self):
        events = autoresearch_ledger()
        events.append(
            {
                "seq": 17,
                "agent": "agent",
                "status": "keep",
                "score": 0.995,
                "descriptor": {"mechanism": "optimizer", "method": "matrix_lr"},
            }
        )
        self.assertEqual(meter.status(self.profile, events)["regime"], "EXPLOIT")

    def test_converged_gate_only_allows_best_descriptor(self):
        events = autoresearch_ledger()
        best = {"mechanism": "baseline", "method": "none"}
        allowed = meter.gate(self.profile, events, best)
        rejected = meter.gate(
            self.profile,
            events,
            {"mechanism": "batch", "method": "total_batch"},
        )
        self.assertTrue(allowed["pass"])
        self.assertFalse(rejected["pass"])
        self.assertEqual(
            rejected["reasons"], ["converged: confirmation runs only"]
        )


if __name__ == "__main__":
    unittest.main()
