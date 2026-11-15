import json
import os
from pathlib import Path
import tempfile
from types import SimpleNamespace
import unittest
from unittest.mock import patch

import llm
import swarm
from boredom_meter import meter


ROOT = Path(__file__).resolve().parents[1]


def task_values(task):
    swarm.configure_task(SimpleNamespace(task=task))
    status = {"swarm_B": 0.0, "regime": "EXPLOIT"}
    values = swarm.common_values("worker-1", 1, "divergent", status, 0.0, "abc1234", 1.0, {})
    values.update({
        "assignment": "divergent", "recalled_results": "", "recalled_leads": "",
        "claims": "", "search_cell": "none", "worker_sources": "No search run.",
        "task_inputs": swarm.TASK["prompt_values"]["task_context"],
        "candidate_source": "", "vocab": "{}", "suggested_cells": "none",
        "reasons": "none", "assigned_cell": "none", "recalled": "",
        "target_cell": "data/filter",
    })
    return values


class TaskInputTests(unittest.TestCase):
    def test_worker_and_scout_prompts_render_task_inputs(self):
        values = task_values("bixbench_mini")
        questions = json.loads((ROOT / "testcases/bixbench_mini/questions.json").read_text())
        first_question = json.dumps(questions, ensure_ascii=False)[:40]
        prompt = llm.render_prompt("WORKER_PROPOSE", values)
        self.assertIn("Task inputs", prompt)
        self.assertIn("--- questions.json", prompt)
        self.assertIn("--- data/Swarm_1.csv", prompt)
        self.assertNotIn("{task_inputs}", prompt)
        self.assertLess(len(values["task_inputs"]), 20000)
        scout = llm.render_prompt("SCOUT_QUERY", values)
        self.assertIn("--- questions.json", scout)
        self.assertIn("Your target cell: data/filter", scout)
        self.assertNotIn("small-GPT", scout)
        self.assertTrue(first_question)

    def test_playworld_prompt_includes_train_preview(self):
        prompt = llm.render_prompt("WORKER_PROPOSE", task_values("playworld_mini"))
        self.assertIn("--- data/train.jsonl", prompt)


class WorkerSearchTests(unittest.TestCase):
    def setUp(self):
        swarm.configure_task(SimpleNamespace(task="hadamard19"))
        self.cells = [{"cell": "baseline/none"}, {"cell": "construction/circulant"},
                      {"cell": "objective/barrier"}]

    def test_search_cell_follows_role_regime_and_assignment(self):
        exploit = {"regime": "EXPLOIT", "suggested_cells": self.cells}
        self.assertIsNone(swarm.worker_search_cell("worker-1", "exploit", exploit))
        self.assertEqual(
            swarm.worker_search_cell("worker-1", "divergent", exploit), "construction/circulant"
        )
        self.assertEqual(
            swarm.worker_search_cell("worker-2", "divergent", exploit), "objective/barrier"
        )
        for regime in ("BOREDOM_SNAP", "PARADIGM_BREAKOUT"):
            self.assertEqual(
                swarm.worker_search_cell(
                    "worker-1", "exploit", {"regime": regime, "suggested_cells": self.cells}
                ),
                "construction/circulant",
            )
        self.assertEqual(
            swarm.worker_search_cell("worker-1", "exploit", exploit, "search/restarts"),
            "search/restarts",
        )

    def test_query_comes_from_cell_and_is_logged_with_agent_and_purpose(self):
        query = swarm.cell_search_query("construction/circulant")
        self.assertIn("circulant", query)
        self.assertIn("Hadamard", query)
        with tempfile.TemporaryDirectory() as tmp, patch.dict(os.environ, {"EXA": "off"}):
            swarm.worker_search(
                "worker-3", "construction/circulant", ["paper", "code"],
                status={"regime": "BOREDOM_SNAP"}, out_dir=tmp, replay=False,
            )
            records = [json.loads(line) for line in (Path(tmp) / "research_log.jsonl").read_text().splitlines()]
        self.assertEqual([record["purpose"] for record in records], ["worker-search"] * 2)
        self.assertEqual({record["agent"] for record in records}, {"worker-3"})
        self.assertEqual({record["query"] for record in records}, {query})

    def test_only_own_lead_is_attached(self):
        leads = {"worker-1": {"id": "lead-1"}}
        self.assertEqual(swarm.lead_for_agent("worker-1", leads, list(leads.values())), {"id": "lead-1"})
        self.assertIsNone(swarm.lead_for_agent("worker-2", leads, list(leads.values())))


class NoveltyAndVocabularyTests(unittest.TestCase):
    def setUp(self):
        swarm.configure_task(SimpleNamespace(task="hadamard19"))
        self.profile = meter.load_profile(swarm.TASK["profile"])

    def test_critic_novelty_is_logged_per_candidate(self):
        client = llm.LLMClient(mode="fake", log_path=os.devnull)
        candidates = [
            {"agent": "worker-1", "idea": "a", "commit": "c1",
             "prior_hits": [{"id": "S1", "title": "t", "highlight": "h"}]},
            {"agent": "worker-2", "idea": "b", "prior_hits": []},
        ]
        with tempfile.TemporaryDirectory() as tmp:
            swarm.judge_novelty(
                candidates, llm_client=client, out_dir=tmp, round_num=1,
                status={"swarm_B": 0.0, "regime": "EXPLOIT"}, profile=self.profile,
                best_commit="abc", best_val=1.0,
            )
            rows = [json.loads(line) for line in (Path(tmp) / "novelty.jsonl").read_text().splitlines()]
        self.assertEqual(candidates[0]["novelty"], 0.5)
        self.assertTrue(candidates[0]["prior_art_pass"])
        self.assertNotIn("novelty", candidates[1])
        self.assertEqual([(row["agent"], row["prior_art"]) for row in rows], [("worker-1", ["S1"])])

    def test_novelty_fields_do_not_change_boredom(self):
        events = []
        for seq, (method, status, score) in enumerate(
            [("none", "keep", 1.0), ("restarts", "discard", 1.1), ("seed", "discard", 1.2),
             ("restarts", "discard", 1.3)], 1
        ):
            events.append({
                "seq": seq, "kind": "baseline" if seq == 1 else "candidate",
                "agent": "worker-1", "status": status, "score": score, "round": seq - 1,
                "descriptor": {"mechanism": "baseline" if seq == 1 else "search", "method": method},
            })
        scored = [{**event, "novelty": 0.0, "prior_art_pass": False} for event in events]
        self.assertEqual(
            {k: v for k, v in meter.status(self.profile, events).items() if k != "ledger_sha256"},
            {k: v for k, v in meter.status(self.profile, scored).items() if k != "ledger_sha256"},
        )

    def test_other_slug_is_accepted_and_recorded_without_profile_mutation(self):
        profile_text = Path(swarm.TASK["profile"]).read_text()
        meter.validate_descriptor(self.profile, {"mechanism": "other", "method": "simulated_annealing"})
        for slug in ("Bad-Slug", "x", "9lives", "a" * 41):
            with self.assertRaises(ValueError):
                meter.validate_descriptor(self.profile, {"mechanism": "other", "method": slug})
        with tempfile.TemporaryDirectory() as tmp:
            descriptor = {"mechanism": "other", "method": "simulated_annealing"}
            for _ in range(2):
                swarm.record_vocab_extension(
                    tmp, self.profile, descriptor, agent="worker-1", round_num=1, idea="anneal"
                )
            swarm.record_vocab_extension(
                tmp, self.profile, {"mechanism": "search", "method": "restarts"},
                agent="worker-1", round_num=1, idea="known",
            )
            rows = (Path(tmp) / "vocab_extensions.jsonl").read_text().splitlines()
            self.assertEqual([json.loads(row)["cell"] for row in rows], ["other/simulated_annealing"])
            self.assertEqual(
                swarm.vocab_with_extensions(self.profile, tmp)["other"], ["simulated_annealing"]
            )
        self.assertEqual(Path(swarm.TASK["profile"]).read_text(), profile_text)
        self.assertNotIn("other", self.profile["vocab"])

    def test_known_optimum_stop(self):
        self.assertEqual(swarm.TASK["known_optimum_loss"], 0.0)
        self.assertTrue(swarm.known_optimum_reached(0.0))
        self.assertFalse(swarm.known_optimum_reached(0.01))
        swarm.configure_task(SimpleNamespace(task="bixbench_mini"))
        self.assertFalse(swarm.known_optimum_reached(0.0))


class RecordingClient:
    def __init__(self):
        self.calls = []

    def call(self, role, *, agent, round_num, values):
        self.calls.append((role, agent, round_num, dict(values)))
        return llm.fake_response(role, values) if hasattr(llm, "fake_response") else {}


class CriticArmParityTests(unittest.TestCase):
    def test_arms_a_and_b_make_identical_critic_calls(self):
        swarm.configure_task(SimpleNamespace(task="hadamard19"))
        profile = meter.load_profile(swarm.TASK["profile"])
        arm_settings = {
            "A": ({"BOREDOM": "off"}, {"swarm_B": 0.0, "regime": "EXPLOIT"}),
            "B": ({"BOREDOM": "on"}, {"swarm_B": 0.91, "regime": "BOREDOM_SNAP"}),
        }
        calls = {}
        for arm, (env, status) in arm_settings.items():
            candidate = {
                "agent": "worker-2", "idea": "circulant core", "commit": "c2",
                "rationale": "r", "descriptor": {"mechanism": "construction", "method": "circulant"},
                "sources": ["S1"], "predicted_delta": -0.01,
                "prior_hits": [{"id": "S1", "title": "t", "highlight": "h"}],
            }
            events = [{"descriptor": {"mechanism": "construction", "method": "circulant"},
                       "status": "discard", "score": 0.05}]
            client = RecordingClient()
            with tempfile.TemporaryDirectory() as tmp, patch.dict(os.environ, env):
                swarm.judge_novelty(
                    [candidate], llm_client=client, out_dir=tmp, round_num=2,
                    status=status, profile=profile, best_commit="abc", best_val=0.0585,
                )
                swarm.critic_review(
                    client, round_num=2, candidate=candidate, events=events,
                    first_score=0.05, second_score=0.05, accepted=True,
                    previous_best_commit="abc", previous_best_val=0.0585, profile=profile,
                )
            calls[arm] = client.calls
        self.assertEqual([call[0] for call in calls["A"]], ["CRITIC_NOVELTY", "CRITIC"])
        self.assertEqual(calls["A"], calls["B"])
        prompt = llm.render_prompt("CRITIC", calls["A"][1][3])
        self.assertIn("top hits", prompt)
        self.assertNotIn("0.910", prompt)


if __name__ == "__main__":
    unittest.main()
