import json, random, subprocess, sys
from concurrent.futures import ProcessPoolExecutor
from pathlib import Path
import tempfile
import unittest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))
import meter  # noqa: E402

BIO = ROOT / "profiles/biolab_growth.json"
HADAMARD = ROOT.parent / "testcases/hadamard19/boredom_profile.json"

HADAMARD_CELLS = [
    ("baseline", "none"),
    ("search", "restarts"),
    ("construction", "circulant"),
    ("objective", "log_det"),
]


def autoresearch_ledger(include_all=True):
    cells = HADAMARD_CELLS if include_all else HADAMARD_CELLS[:-1]
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
                "descriptor": {"mechanism": "search", "method": "restarts"},
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

    def test_reject_and_critic_events_leave_gate_and_suggestions_unchanged(self):
        near = stuck_ledger()[-1]["descriptor"]
        far = {"hypothesis": "co_limitation", "assay": "factorial_screen",
               "params": {"nutrient": 0.8, "oxygen": 0.8}}
        for regime, events, breakout in (
            ("EXPLOIT", [], 1.1),
            ("BOREDOM_SNAP", [dict(e, status="keep") for e in stuck_ledger()], 1.1),
            ("PARADIGM_BREAKOUT", stuck_ledger(), 0.0),
        ):
            self.p["thresholds"]["breakout"] = breakout
            self.assertEqual(meter.status(self.p, events)["regime"], regime)
            for audit in ({"status": "reject"}, {"status": "discard", "kind": "critic"}):
                appended = events + [
                    dict(audit, seq=len(events) + i + 1, descriptor=far, score=0.1)
                    for i in range(self.p["k"] + 1)
                ]
                with self.subTest(regime=regime, audit=audit):
                    for descriptor in (near, far):
                        before = meter.gate(self.p, events, descriptor)
                        after = meter.gate(self.p, appended, descriptor)
                        self.assertEqual(before["min_recent_distance"], after["min_recent_distance"])
                        self.assertNotEqual(before.pop("ledger_sha256"), after.pop("ledger_sha256"))
                        self.assertEqual(before, after)
                    self.assertEqual(meter.suggest(self.p, events), meter.suggest(self.p, appended))

    def test_gate_and_suggest_use_configured_attempt_statuses(self):
        self.p["attempt_statuses"] = ["keep"]
        events = stuck_ledger()
        attempts = [events[0]]
        descriptor = events[-1]["descriptor"]
        actual = meter.gate(self.p, events, descriptor)
        expected = meter.gate(self.p, attempts, descriptor)
        self.assertNotEqual(actual.pop("ledger_sha256"), expected.pop("ledger_sha256"))
        self.assertEqual(actual, expected)
        self.assertEqual(meter.suggest(self.p, events), meter.suggest(self.p, attempts))

    def test_exploit_role_skips_near_duplicate_but_not_failed_basin(self):
        self.p["thresholds"]["breakout"] = 1.1
        events = [dict(e, status="keep") for e in stuck_ledger()]
        descriptor = events[-1]["descriptor"]
        self.assertEqual(meter.status(self.p, events)["regime"], "BOREDOM_SNAP")
        self.assertFalse(meter.gate(self.p, events, descriptor)["pass"])
        self.assertTrue(meter.gate(self.p, events, descriptor, role="exploit")["pass"])
        events[-1]["status"] = "discard"
        result = meter.gate(self.p, events, descriptor, role="exploit")
        self.assertFalse(result["pass"])
        self.assertTrue(any("failed/discarded" in reason for reason in result["reasons"]))

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
        self.profile = meter.load_profile(HADAMARD)
        self.profile["patience"] = 5
        self.profile["_hash"] = meter.sha(
            {key: value for key, value in self.profile.items() if not key.startswith("_")}
        )

    def assert_audit_event_does_not_count(self, event):
        for events in ([], autoresearch_ledger()[:8]):
            with self.subTest(n=len(events)):
                before = meter.status(self.profile, events)
                after = meter.status(self.profile, events + [dict(event, seq=len(events) + 1)])
                for key in ("B", "regime", "novelty", "frontier_stall", "n_attempts"):
                    self.assertEqual(before[key], after[key], key)
                self.assertNotEqual(before["ledger_sha256"], after["ledger_sha256"])

    def test_reject_event_leaves_meter_unchanged(self):
        self.assert_audit_event_does_not_count({
            "status": "reject", "score": None,
            "descriptor": {"mechanism": "search", "method": "restarts"},
        })

    def test_critic_event_leaves_meter_unchanged(self):
        self.assert_audit_event_does_not_count({
            "kind": "critic", "status": "keep", "score": 0.5,
            "descriptor": {"mechanism": "search", "method": "restarts"},
        })

    def test_attempt_statuses_from_profile(self):
        self.profile["attempt_statuses"] = ["discard", "crash"]
        self.assertEqual(meter.fold(self.profile, autoresearch_ledger()), [])
        event = dict(autoresearch_ledger()[0], status="crash", score=None)
        self.assertEqual(meter.status(self.profile, [event])["n_attempts"], 1)

    def test_duplicate_profile_defaults_and_cpu_profiles(self):
        raw = json.loads(HADAMARD.read_text())
        raw.pop("attempt_statuses", None)
        raw.pop("trivial_statuses", None)
        with tempfile.TemporaryDirectory() as tmp:
            path = Path(tmp) / "profile.json"
            path.write_text(json.dumps(raw))
            defaults = meter.load_profile(path)
        self.assertIn("duplicate", defaults["attempt_statuses"])
        self.assertIn("duplicate", defaults["trivial_statuses"])
        for task in ("hadamard19", "bixbench_mini", "playworld_mini"):
            profile = meter.load_profile(
                ROOT.parent / "testcases" / task / "boredom_profile.json"
            )
            self.assertIn("duplicate", profile["attempt_statuses"])
            self.assertIn("duplicate", profile["trivial_statuses"])
            self.assertNotIn("duplicate", profile["frontier_statuses"])

    def test_repeated_duplicates_raise_boredom_and_leave_exploit(self):
        descriptor = {"mechanism": "search", "method": "restarts"}
        events = [
            {"seq": 1, "kind": "baseline", "agent": "baseline", "status": "keep",
             "score": 1.0, "descriptor": {"mechanism": "baseline", "method": "none"}},
        ]
        for seq in range(2, 7):
            events.append({
                "seq": seq, "kind": "candidate", "agent": "worker-1",
                "status": "duplicate", "score": 1.0, "duplicate_of": "first",
                "descriptor": descriptor,
            })
        state = meter.status(self.profile, events)
        self.assertEqual(state["n_attempts"], len(events))
        self.assertGreaterEqual(state["B"], self.profile["thresholds"]["snap"])
        self.assertGreater(state["trivial_rate"], 0)
        self.assertNotEqual(state["regime"], "EXPLOIT")

    def test_duplicate_better_score_does_not_become_best(self):
        events = [
            {"seq": 1, "kind": "baseline", "agent": "baseline", "status": "keep",
             "score": 1.0, "descriptor": {"mechanism": "baseline", "method": "none"}},
            {"seq": 2, "kind": "candidate", "agent": "worker-1", "status": "duplicate",
             "score": 0.1, "duplicate_of": "first",
             "descriptor": {"mechanism": "search", "method": "restarts"}},
        ]
        self.assertEqual(meter.status(self.profile, events)["best"], 1.0)

    def test_required_mechanisms_from_profile(self):
        self.profile["required_mechanisms"] = ["search"]
        self.assertEqual(
            meter.status(
                self.profile, autoresearch_ledger(include_all=False)
            )["regime"],
            "CONVERGED",
        )

    def test_required_mechanisms_default_to_all_vocab(self):
        import tempfile
        raw = json.loads(HADAMARD.read_text())
        raw.pop("required_mechanisms", None)
        with tempfile.TemporaryDirectory() as tmp:
            path = Path(tmp) / "profile.json"
            path.write_text(json.dumps(raw))
            profile = meter.load_profile(path)
        self.assertEqual(set(profile["required_mechanisms"]), set(profile["vocab"]))

    def test_discarded_better_score_does_not_become_best(self):
        descriptor = {"mechanism": "search", "method": "restarts"}
        events = [
            {"seq": 1, "kind": "baseline", "agent": "baseline", "status": "keep",
             "score": 1.0, "descriptor": {"mechanism": "baseline", "method": "none"}},
            {"seq": 2, "kind": "candidate", "agent": "worker-1", "status": "discard",
             "score": 0.1, "descriptor": descriptor},
        ]
        self.assertEqual(meter.status(self.profile, events)["best"], 1.0)

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
                "score": 0.98,
                "descriptor": {"mechanism": "search", "method": "restarts"},
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
            {"mechanism": "construction", "method": "circulant"},
        )
        self.assertTrue(allowed["pass"])
        self.assertFalse(rejected["pass"])
        self.assertEqual(
            rejected["reasons"], ["converged: confirmation runs only"]
        )


if __name__ == "__main__":
    unittest.main()
