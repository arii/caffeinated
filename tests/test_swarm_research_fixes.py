import io
import json
import os
import shutil
import subprocess
import tempfile
import unittest
from contextlib import redirect_stdout
from pathlib import Path
from types import SimpleNamespace
from unittest.mock import patch

import boredom
import llm
import swarm
from boredom_meter import meter

ROOT = Path(__file__).resolve().parents[1]


def task_values(task):
    swarm.configure_task(SimpleNamespace(task=task))
    status = {"swarm_B": 0.0, "regime": "EXPLOIT"}
    values = swarm.common_values("worker-1", 1, "divergent", status, 0.0, "abc1234", 1.0, {})
    values.update(
        {
            "assignment": "divergent",
            "recalled_results": "",
            "recalled_leads": "",
            "claims": "",
            "search_cell": "none",
            "worker_sources": "No search run.",
            "task_inputs": swarm.TASK["prompt_values"]["task_context"],
            "candidate_source": "",
            "vocab": "{}",
            "suggested_cells": "none",
            "reasons": "none",
            "assigned_cell": "none",
            "recalled": "",
            "target_cell": "data/filter",
        }
    )
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

    def test_call_ids_in_lead_records_do_not_change_prompt_sha(self):
        lead = {
            "id": "lead-1",
            "recipe": "adjust one parameter",
            "source_ids": ["S1"],
        }
        with_ids = {
            **lead,
            "llm_call_ids": ["SCOUT_LEAD-r2-worker-1-7"],
            "critic_call_ids": ["CRITIC-r2-critic-8"],
        }
        values = task_values("bixbench_mini")
        values["recalled_leads"] = swarm.render_leads_for_prompt([lead])
        prompt_without_ids = llm.render_prompt("WORKER_PROPOSE", values)
        values["recalled_leads"] = swarm.render_leads_for_prompt([with_ids])
        prompt_with_ids = llm.render_prompt("WORKER_PROPOSE", values)
        self.assertEqual(llm.prompt_sha(prompt_without_ids), llm.prompt_sha(prompt_with_ids))
        self.assertNotIn("SCOUT_LEAD-r2-worker-1-7", prompt_with_ids)
        self.assertNotIn("CRITIC-r2-critic-8", prompt_with_ids)


class ProposalGroundingTests(unittest.TestCase):
    def setUp(self):
        swarm.configure_task(SimpleNamespace(task="hadamard19"))
        self.profile = meter.load_profile(swarm.TASK["profile"])

    def test_dataset_source_ids_validate_without_changing_prior_art_format(self):
        task = swarm.TASK
        source = (ROOT / "testcases/hadamard19/construct.py").read_text(encoding="utf-8")
        proposal = llm.fake_response(
            "WORKER_PROPOSE",
            {
                "agent": "worker-1",
                "candidate_source": source,
                "fake_targets": task["fake_targets"],
            },
        )
        proposal["source_ids"] = ["D6_3"]
        self.assertEqual(swarm.validate_proposal(self.profile, proposal)["source_ids"], ["D6_3"])

        source_ids, present = boredom.source_trailers("Candidate\n\nSource: D6_3")
        self.assertEqual(source_ids, ["D6_3"])
        self.assertTrue(present)
        prior_ids, prior_present, invalid, _query_ids = boredom.prior_art_trailers(
            "Prior-art: D6_3"
        )
        self.assertEqual(prior_ids, [])
        self.assertTrue(prior_present)
        self.assertEqual(invalid, ["D6_3"])

    def test_recalled_earlier_round_lead_is_known_and_its_sources_are_unioned(self):
        recalled = {
            "results": [
                {
                    "content": json.dumps(
                        {
                            "id": "lead-round-2",
                            "round": 2,
                            "source_ids": ["D6_3", "S4"],
                        }
                    )
                }
            ]
        }
        known = swarm.known_lead_records([], None, recalled)
        lead = swarm.validate_lead_reference({"lead_id": "lead-round-2"}, known)
        sources = swarm.cited_sources_for_proposal(
            {"lead_id": "lead-round-2", "source_ids": ["S1", "D6_3"]}, lead
        )
        self.assertEqual(lead["round"], 2)
        self.assertEqual(sources, ["S1", "D6_3", "S4"])
        with self.assertRaisesRegex(ValueError, "^lead_id must reference a known lead$"):
            swarm.validate_lead_reference({"lead_id": "unknown"}, known)


class PromptFeedbackAndRuleTests(unittest.TestCase):
    def setUp(self):
        swarm.configure_task(SimpleNamespace(task="bixbench_mini"))
        self.profile = meter.load_profile(swarm.TASK["profile"])
        self.profile["gate"]["require_sources"] = True

    def test_hard_rules_follow_regime_and_profile_thresholds(self):
        events = [
            {
                "seq": 1,
                "kind": "candidate",
                "status": "crash",
                "score": None,
                "descriptor": {"mechanism": "qc_filtering", "method": "mito_threshold"},
            },
            {
                "seq": 2,
                "kind": "candidate",
                "status": "keep",
                "score": 0.5,
                "descriptor": {"mechanism": "normalization", "method": "log_cpm"},
            },
        ]
        with patch.dict(os.environ, {"GROUNDING": "on"}):
            exploit = swarm.hard_rules(
                self.profile, events, "worker-1", "divergent", {"regime": "EXPLOIT"}, False
            )
            snap = swarm.hard_rules(
                self.profile, events, "worker-1", "divergent", {"regime": "BOREDOM_SNAP"}, False
            )
            breakout = swarm.hard_rules(
                self.profile,
                events,
                "worker-1",
                "divergent",
                {"regime": "PARADIGM_BREAKOUT"},
                False,
            )
        self.assertEqual(exploit, "none")
        self.assertIn("Cite at least one source", snap)
        self.assertIn(str(self.profile["gate"]["snap_min_distance"]), snap)
        self.assertIn(str(self.profile["gate"]["failed_min_distance"]), snap)
        self.assertIn("qc_filtering/mito_threshold", snap)
        self.assertIn(f"last {self.profile['k']} attempts", breakout)
        self.assertIn("qc_filtering", breakout)

        deterministic = swarm.hard_rules(
            self.profile,
            [],
            "worker-1",
            "exploit",
            {"regime": "EXPLOIT"},
            True,
        )
        self.assertIn("code identical to an already-scored version", deterministic)
        self.assertIn("behavior", deterministic)

    def test_round_n_rejection_is_in_the_same_agents_round_n_plus_one_values(self):
        with tempfile.TemporaryDirectory() as tmp:
            swarm.log_worker_rejection(
                tmp,
                "worker-2",
                4,
                "retry with an unsupported citation",
                ["ungrounded: no valid source id in Source trailer"],
            )
            values = swarm.common_values(
                "worker-2",
                5,
                "divergent",
                {"swarm_B": 0.4, "regime": "BOREDOM_SNAP"},
                0.3,
                "abc123",
                0.5,
                self.profile,
                events=[],
                out_dir=tmp,
            )
            other_agent_values = swarm.common_values(
                "worker-1",
                5,
                "divergent",
                {"swarm_B": 0.4, "regime": "BOREDOM_SNAP"},
                0.3,
                "abc123",
                0.5,
                self.profile,
                events=[],
                out_dir=tmp,
            )
        self.assertIn("round 4", values["own_feedback"])
        self.assertIn("ungrounded: no valid source id in Source trailer", values["own_feedback"])
        self.assertEqual(other_agent_values["own_feedback"], "none")

    def test_gate_rejection_feedback_joins_candidate_and_keeps_recent_gate_timestamp(self):
        with tempfile.TemporaryDirectory() as tmp:
            boredom_log = Path(tmp) / "boredom_log.jsonl"
            ledger_path = Path(tmp) / "ledger.jsonl"
            for round_num in range(1, 6):
                swarm.append_jsonl(
                    boredom_log,
                    {
                        "type": "worker_rejection",
                        "ts": f"2020-0{round_num}-01T00:00:00Z",
                        "agent": "worker-2",
                        "round": round_num,
                        "idea": f"validation idea {round_num}",
                        "reasons": ["invalid proposal"],
                    },
                )
            swarm.append_jsonl(
                ledger_path,
                {"commit": "gate-commit", "agent": "worker-2", "round": 6, "idea": "gate idea"},
            )
            swarm.append_jsonl(
                boredom_log,
                {
                    "type": "gate",
                    "ts": "9999-01-01T00:00:00Z",
                    "pass": False,
                    "candidate_commit": "gate-commit",
                    "reasons": ["ungrounded: missing source"],
                },
            )
            feedback = swarm.rejection_feedback(tmp, "worker-2")
        self.assertIn("gate idea", feedback)
        self.assertIn("rejected 1x: ungrounded: missing source", feedback)
        self.assertNotIn("validation idea 1", feedback)

    def test_invalid_proposal_validation_failure_is_in_next_round_feedback(self):
        task = swarm.TASK
        profile = meter.load_profile(task["profile"])
        base_commit = swarm.git_text(ROOT, "rev-parse", "HEAD")
        valid = llm.fake_response(
            "WORKER_PROPOSE",
            {
                "agent": "worker-1",
                "candidate_source": swarm.git(
                    ROOT, "show", f"{base_commit}:{swarm.TARGET_FILE}"
                ).stdout,
                "fake_edits": task.get("fake_edits", []),
                "fake_targets": task.get("fake_targets", []),
            },
        )
        invalid = {**valid, "source_ids": ["not-a-source-id"]}
        status = {"swarm_B": 0.0, "regime": "EXPLOIT"}
        with tempfile.TemporaryDirectory() as tmp:
            output = Path(tmp)
            client = llm.LLMClient(mode="fake", log_path=output / "llm_log.jsonl")
            with (
                patch.object(swarm, "recall_memory", return_value={"results": []}),
                patch.object(client, "call", side_effect=[invalid, valid]),
                patch.object(
                    swarm, "local_candidate_precheck", return_value=["pre-check rejection"]
                ),
                patch.object(swarm, "assigned_cell_repair", return_value=None),
                patch.object(swarm, "commit_candidate", side_effect=AssertionError("no commit")),
            ):
                result = swarm.worker_attempts(
                    agent="worker-1",
                    round_num=4,
                    arm="B",
                    role="exploit",
                    agent_b=0.0,
                    status=status,
                    best_commit=base_commit,
                    best_val=1.0,
                    profile=profile,
                    profile_path=task["profile"],
                    events=[],
                    out_dir=output,
                    repo=ROOT,
                    agents_root=ROOT / ".swarm_worktrees",
                    base_commit=base_commit,
                    llm_client=client,
                    backend="local",
                    mirror=output / "memory.jsonl",
                    memory_log=output / "memory_log.jsonl",
                    lead=None,
                    all_leads=[],
                    claims=[],
                    replay=False,
                    assigned_cells=[],
                )
            next_round_values = swarm.common_values(
                "worker-1",
                5,
                "exploit",
                {"swarm_B": 0.0, "regime": "EXPLOIT"},
                0.0,
                base_commit,
                1.0,
                profile,
                events=[],
                out_dir=output,
            )
        self.assertEqual(result["status"], "reject")
        self.assertIn("round 4", next_round_values["own_feedback"])
        self.assertIn(
            "source_ids must use the S<number> or D<round>_<number> format",
            next_round_values["own_feedback"],
        )


class LocalPrecheckTests(unittest.TestCase):
    def test_snap_grounding_rule_applies_without_profile_source_requirement(self):
        profile = meter.load_profile(ROOT / "testcases/bixbench_mini/boredom_profile.json")
        profile["gate"]["require_sources"] = False
        proposal = {
            "descriptor": {"mechanism": "normalization", "method": "log_cpm"},
            "edits": [],
        }
        with (
            tempfile.TemporaryDirectory() as tmp,
            patch.dict(os.environ, {}, clear=True),
            patch.object(swarm, "TASK", {"deterministic": False}),
            patch.object(
                swarm.meter,
                "gate",
                return_value={"regime": "BOREDOM_SNAP", "reasons": [], "pass": True},
            ),
        ):
            reasons = swarm.local_candidate_precheck(
                repo=ROOT,
                out_dir=tmp,
                profile=profile,
                role="divergent",
                proposal=proposal,
                cited_sources=[],
                source_text="",
            )
            rules = swarm.hard_rules(
                profile,
                [],
                "worker-1",
                "divergent",
                {"regime": "BOREDOM_SNAP"},
                False,
            )
        self.assertEqual(reasons, ["ungrounded: no valid source id in Source trailer"])
        self.assertIn("Cite at least one source", rules)
        self.assertTrue(boredom.grounding_required("BOREDOM_SNAP"))

    def test_deterministic_blob_already_in_cache_fails_before_commit(self):
        profile = meter.load_profile(ROOT / "testcases/hadamard19/boredom_profile.json")
        source = "VALUE = 1\n"
        edits = [{"old": "VALUE = 1", "new": "VALUE = 2"}]
        edited = swarm.apply_edits_to_text(source, edits)
        blob = (
            subprocess.check_output(
                ["git", "-C", str(ROOT), "hash-object", "--stdin"], input=edited.encode()
            )
            .decode()
            .strip()
        )
        with tempfile.TemporaryDirectory() as tmp:
            (Path(tmp) / "score_cache.json").write_text(
                json.dumps({blob: {"commit": "previously-scored", "loss": 0.5}}),
                encoding="utf-8",
            )
            with (
                patch.object(swarm, "TASK", {"deterministic": True}),
                patch.dict(os.environ, {"BOREDOM": "off"}),
            ):
                reasons = swarm.local_candidate_precheck(
                    repo=ROOT,
                    out_dir=tmp,
                    profile=profile,
                    role="exploit",
                    proposal={
                        "descriptor": {"mechanism": "search", "method": "restarts"},
                        "edits": edits,
                    },
                    cited_sources=[],
                    source_text=source,
                )
        self.assertEqual(reasons, ["duplicate: blob already scored as previously-scored"])

    def test_cached_blob_precheck_is_recorded_as_an_attempt_duplicate(self):
        swarm.configure_task(SimpleNamespace(task="hadamard19"))
        task = swarm.TASK
        profile = meter.load_profile(task["profile"])
        base_commit = swarm.git_text(ROOT, "rev-parse", "HEAD")
        with tempfile.TemporaryDirectory() as tmp:
            output = Path(tmp)
            client = llm.LLMClient(mode="fake", log_path=output / "llm_log.jsonl")
            duplicate_reason = ["duplicate: blob already scored as cached-commit"]
            with (
                patch.object(swarm, "recall_memory", return_value={"results": []}),
                patch.object(swarm, "local_candidate_precheck", side_effect=[duplicate_reason] * 2),
                patch.object(
                    swarm,
                    "cached_blob_entry",
                    return_value={"commit": "cached-commit", "loss": 0.5},
                ),
                patch.object(swarm, "commit_candidate", side_effect=AssertionError("no commit")),
            ):
                result = swarm.worker_attempts(
                    agent="worker-1",
                    round_num=3,
                    arm="B",
                    role="exploit",
                    agent_b=0.0,
                    status={"swarm_B": 0.0, "regime": "EXPLOIT"},
                    best_commit=base_commit,
                    best_val=1.0,
                    profile=profile,
                    profile_path=task["profile"],
                    events=[],
                    out_dir=output,
                    repo=ROOT,
                    agents_root=ROOT / ".swarm_worktrees",
                    base_commit=base_commit,
                    llm_client=client,
                    backend="local",
                    mirror=output / "memory.jsonl",
                    memory_log=output / "memory_log.jsonl",
                    lead=None,
                    all_leads=[],
                    claims=[],
                    replay=False,
                    assigned_cells=[],
                )
            event = swarm.add_result_event(
                profile, output / "ledger.jsonl", result, 3, result["status"], result["score"]
            )
            attempts = list(meter.attempt_events(profile, [event]))
        self.assertEqual(result["status"], "duplicate")
        self.assertEqual(result["duplicate_of"], "cached-commit")
        self.assertEqual([item["status"] for item in attempts], ["duplicate"])

    def test_repeated_precheck_failure_repairs_once_and_never_commits(self):
        swarm.configure_task(SimpleNamespace(task="hadamard19"))
        task = swarm.TASK
        profile = meter.load_profile(task["profile"])
        base_commit = swarm.git_text(ROOT, "rev-parse", "HEAD")
        output = Path(tempfile.mkdtemp())
        self.addCleanup(lambda: shutil.rmtree(output, ignore_errors=True))
        client = llm.LLMClient(mode="fake", log_path=output / "llm_log.jsonl")
        reasons = ["near-duplicate of a recent attempt"]
        status = {"swarm_B": 0.0, "regime": "EXPLOIT"}
        with (
            patch.object(swarm, "recall_memory", return_value={"results": []}),
            patch.object(swarm, "local_candidate_precheck", side_effect=[reasons, reasons]),
            patch.object(
                swarm, "commit_candidate", side_effect=AssertionError("must not commit")
            ) as commit,
        ):
            result = swarm.worker_attempts(
                agent="worker-1",
                round_num=3,
                arm="B",
                role="exploit",
                agent_b=0.0,
                status=status,
                best_commit=base_commit,
                best_val=1.0,
                profile=profile,
                profile_path=task["profile"],
                events=[],
                out_dir=output,
                repo=ROOT,
                agents_root=ROOT / ".swarm_worktrees",
                base_commit=base_commit,
                llm_client=client,
                backend="local",
                mirror=output / "memory.jsonl",
                memory_log=output / "memory_log.jsonl",
                lead=None,
                all_leads=[],
                claims=[],
                replay=False,
                assigned_cells=[],
            )
        self.assertEqual(result["status"], "reject")
        self.assertEqual(result["reasons"], reasons)
        self.assertEqual(commit.call_count, 0)
        self.assertEqual(
            [record["role"] for record in llm.read_log(output / "llm_log.jsonl")],
            ["WORKER_PROPOSE", "WORKER_REPAIR"],
        )
        call_ids = [record["call_id"] for record in llm.read_log(output / "llm_log.jsonl")]
        self.assertEqual(result["llm_call_ids"], call_ids)
        swarm.record_worker_outcomes(output, result, 3, client)
        outcomes = llm.read_log(output / "llm_outcomes.jsonl")
        self.assertEqual([item["call_id"] for item in outcomes], call_ids)
        self.assertEqual([item["role"] for item in outcomes], ["WORKER_PROPOSE", "WORKER_REPAIR"])
        self.assertEqual([item["outcome"] for item in outcomes], ["rejected", "rejected"])
        self.assertEqual(outcomes[0]["reasons"], reasons)


class LiveToolGuardTests(unittest.TestCase):
    def test_abort_when_expected_live_tools_have_zero_use(self):
        with tempfile.TemporaryDirectory() as tmp:
            for filename in ("research_log.jsonl", "memory_log.jsonl"):
                (Path(tmp) / filename).write_text("", encoding="utf-8")
            with self.assertRaisesRegex(RuntimeError, "Exa configured live.*round 2"):
                swarm.assert_live_tool_use(
                    tmp,
                    round_num=2,
                    research_start=0,
                    memory_start=0,
                    expect_exa=True,
                    expect_pastdev=False,
                )
            with self.assertRaisesRegex(RuntimeError, "past.dev configured.*round 2"):
                swarm.assert_live_tool_use(
                    tmp,
                    round_num=2,
                    research_start=0,
                    memory_start=0,
                    expect_exa=False,
                    expect_pastdev=True,
                )

    def test_count_only_round_local_exa_and_pastdev_records(self):
        with tempfile.TemporaryDirectory() as tmp:
            research = Path(tmp) / "research_log.jsonl"
            memory = Path(tmp) / "memory_log.jsonl"
            research.write_text(
                json.dumps({"type": "query", "endpoint": "search"}) + "\n", encoding="utf-8"
            )
            memory.write_text(json.dumps({"type": "recall", "backend": "pastdev"}) + "\n")
            research.write_text(
                research.read_text() + json.dumps({"type": "query", "endpoint": "search"}) + "\n",
                encoding="utf-8",
            )
            memory.write_text(
                memory.read_text() + json.dumps({"type": "write", "backend": "pastdev"}) + "\n",
                encoding="utf-8",
            )
            counts = swarm.assert_live_tool_use(
                tmp,
                round_num=3,
                research_start=1,
                memory_start=1,
                expect_exa=True,
                expect_pastdev=True,
            )
        self.assertEqual(
            counts,
            {
                "exa_searches": 1,
                "pastdev_uses": 1,
                "pastdev_recalls": 0,
                "pastdev_writes": 1,
            },
        )

    def test_round_spend_persists_and_prints_round_local_totals(self):
        with tempfile.TemporaryDirectory() as tmp:
            output = Path(tmp)
            (output / "llm_log.jsonl").write_text(
                "\n".join(
                    json.dumps(record)
                    for record in (
                        {
                            "round": 4,
                            "usage": {
                                "prompt_tokens": 10,
                                "cached_tokens": 2,
                                "completion_tokens": 4,
                                "reasoning_tokens": 1,
                            },
                        },
                        {
                            "round": 4,
                            "usage": {
                                "prompt_tokens": 5,
                                "prompt_tokens_details": {"cached_tokens": 1},
                                "completion_tokens": 3,
                                "completion_tokens_details": {"reasoning_tokens": 2},
                            },
                        },
                    )
                )
                + "\n",
                encoding="utf-8",
            )
            (output / "llm_outcomes.jsonl").write_text(
                json.dumps({"outcome": "rejected"})
                + "\n"
                + json.dumps({"outcome": "repaired_then_accepted"})
                + "\n",
                encoding="utf-8",
            )
            console = io.StringIO()
            with redirect_stdout(console):
                spend = swarm.record_round_spend(
                    output,
                    4,
                    0,
                    0,
                    {
                        "exa_searches": 2,
                        "pastdev_uses": 3,
                        "pastdev_recalls": 2,
                        "pastdev_writes": 1,
                    },
                )
            stored = json.loads((output / "spend_by_round.jsonl").read_text().splitlines()[0])
        self.assertEqual(
            spend,
            {
                "round": 4,
                "calls": 2,
                "input_tokens": 15,
                "cached_tokens": 3,
                "output_tokens": 7,
                "reasoning_tokens": 3,
                "wasted_calls": 1,
                "exa_searches": 2,
                "pastdev_recalls": 2,
                "pastdev_writes": 1,
            },
        )
        self.assertEqual(stored, spend)
        self.assertIn("round 4 spend: calls=2", console.getvalue())


class LLMCallLinkTests(unittest.TestCase):
    def test_worker_outcome_categories_are_recorded_per_call(self):
        cases = (
            (
                "accepted",
                {"status": "keep", "evaluation_status": "ok", "score": 0.1},
                "accepted",
                1,
            ),
            (
                "repaired_then_accepted",
                {"status": "discard", "evaluation_status": "ok", "score": 0.2},
                ["rejected", "repaired_then_accepted"],
                2,
            ),
            ("duplicate", {"status": "duplicate", "duplicate_of": "known"}, "duplicate", 1),
            ("invalid", {"status": "reject", "reasons": ["bad descriptor"]}, "invalid", 1),
            (
                "edit_error",
                {"status": "reject", "attempts": [{"edit_error": "bad"}], "reasons": ["bad"]},
                "edit_error",
                1,
            ),
            (
                "rejected",
                {"status": "reject", "attempts": [{"precheck": True}], "reasons": ["gate failed"]},
                "rejected",
                1,
            ),
        )
        for name, fields, expected, count in cases:
            with self.subTest(outcome=name), tempfile.TemporaryDirectory() as tmp:
                call_ids = [f"WORKER_PROPOSE-r1-worker-1-{index}" for index in range(count)]
                client = SimpleNamespace(
                    call_metadata={
                        call_id: {
                            "round": 1,
                            "agent": "worker-1",
                            "role": (
                                "WORKER_REPAIR"
                                if name == "repaired_then_accepted" and index == count - 1
                                else "WORKER_PROPOSE"
                            ),
                        }
                        for index, call_id in enumerate(call_ids)
                    }
                )
                candidate = {
                    "agent": "worker-1",
                    "role": "exploit",
                    "llm_call_ids": call_ids,
                    **fields,
                }
                swarm.record_worker_outcomes(tmp, candidate, 1, client)
                records = llm.read_log(Path(tmp) / "llm_outcomes.jsonl")
                self.assertEqual(len(records), count)
                expected_outcomes = expected if isinstance(expected, list) else [expected] * count
                self.assertEqual([record["outcome"] for record in records], expected_outcomes)

    def test_assignment_record_links_scout_lead_calls(self):
        with tempfile.TemporaryDirectory() as tmp:
            swarm.append_jsonl(
                Path(tmp) / "assignments.jsonl",
                {"type": "assignment", "round": 2, "llm_call_ids": [], "lead_call_ids": {}},
            )
            updated = swarm.attach_assignment_call_ids(
                tmp,
                2,
                {
                    "worker-1": {
                        "llm_call_ids": ["SCOUT_QUERY-r2-worker-1-4", "SCOUT_LEAD-r2-worker-1-6"]
                    },
                    "worker-2": {"llm_call_ids": []},
                },
            )
            record = llm.read_log(Path(tmp) / "assignments.jsonl")[0]

        self.assertEqual(
            updated["llm_call_ids"],
            ["SCOUT_LEAD-r2-worker-1-6", "SCOUT_QUERY-r2-worker-1-4"],
        )
        self.assertEqual(
            updated["lead_call_ids"],
            {"worker-1": ["SCOUT_QUERY-r2-worker-1-4", "SCOUT_LEAD-r2-worker-1-6"]},
        )
        self.assertEqual(record, updated)


class WorkerSearchTests(unittest.TestCase):
    def setUp(self):
        swarm.configure_task(SimpleNamespace(task="hadamard19"))
        self.cells = [
            {"cell": "baseline/none"},
            {"cell": "construction/circulant"},
            {"cell": "objective/barrier"},
        ]

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
                "worker-3",
                "construction/circulant",
                ["paper", "code"],
                status={"regime": "BOREDOM_SNAP"},
                out_dir=tmp,
                replay=False,
            )
            records = [
                json.loads(line)
                for line in (Path(tmp) / "research_log.jsonl").read_text().splitlines()
            ]
        self.assertEqual([record["purpose"] for record in records], ["worker-search"] * 2)
        self.assertEqual({record["agent"] for record in records}, {"worker-3"})
        self.assertEqual({record["query"] for record in records}, {query})

    def test_only_own_lead_is_attached(self):
        leads = {"worker-1": {"id": "lead-1"}}
        self.assertEqual(
            swarm.lead_for_agent("worker-1", leads, list(leads.values())), {"id": "lead-1"}
        )
        self.assertIsNone(swarm.lead_for_agent("worker-2", leads, list(leads.values())))


class NoveltyAndVocabularyTests(unittest.TestCase):
    def setUp(self):
        swarm.configure_task(SimpleNamespace(task="hadamard19"))
        self.profile = meter.load_profile(swarm.TASK["profile"])

    def test_critic_novelty_is_logged_per_candidate(self):
        client = llm.LLMClient(mode="fake", log_path=os.devnull)
        candidates = [
            {
                "agent": "worker-1",
                "idea": "a",
                "commit": "c1",
                "prior_hits": [{"id": "S1", "title": "t", "highlight": "h"}],
            },
            {"agent": "worker-2", "idea": "b", "prior_hits": []},
        ]
        with tempfile.TemporaryDirectory() as tmp:
            swarm.judge_novelty(
                candidates,
                llm_client=client,
                out_dir=tmp,
                round_num=1,
                status={"swarm_B": 0.0, "regime": "EXPLOIT"},
                profile=self.profile,
                best_commit="abc",
                best_val=1.0,
            )
            rows = [
                json.loads(line) for line in (Path(tmp) / "novelty.jsonl").read_text().splitlines()
            ]
        self.assertEqual(candidates[0]["novelty"], 0.5)
        self.assertTrue(candidates[0]["prior_art_pass"])
        self.assertEqual(candidates[0]["critic_call_ids"], [client.last_call_id])
        self.assertNotIn("novelty", candidates[1])
        self.assertEqual([(row["agent"], row["prior_art"]) for row in rows], [("worker-1", ["S1"])])
        self.assertEqual(rows[0]["llm_call_ids"], [client.last_call_id])

    def test_novelty_fields_do_not_change_boredom(self):
        events = []
        for seq, (method, status, score) in enumerate(
            [
                ("none", "keep", 1.0),
                ("restarts", "discard", 1.1),
                ("seed", "discard", 1.2),
                ("restarts", "discard", 1.3),
            ],
            1,
        ):
            events.append(
                {
                    "seq": seq,
                    "kind": "baseline" if seq == 1 else "candidate",
                    "agent": "worker-1",
                    "status": status,
                    "score": score,
                    "round": seq - 1,
                    "descriptor": {
                        "mechanism": "baseline" if seq == 1 else "search",
                        "method": method,
                    },
                }
            )
        scored = [{**event, "novelty": 0.0, "prior_art_pass": False} for event in events]
        self.assertEqual(
            {k: v for k, v in meter.status(self.profile, events).items() if k != "ledger_sha256"},
            {k: v for k, v in meter.status(self.profile, scored).items() if k != "ledger_sha256"},
        )

    def test_other_slug_is_accepted_and_recorded_without_profile_mutation(self):
        profile_text = Path(swarm.TASK["profile"]).read_text()
        meter.validate_descriptor(
            self.profile, {"mechanism": "other", "method": "simulated_annealing"}
        )
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
                tmp,
                self.profile,
                {"mechanism": "search", "method": "restarts"},
                agent="worker-1",
                round_num=1,
                idea="known",
            )
            rows = (Path(tmp) / "vocab_extensions.jsonl").read_text().splitlines()
            self.assertEqual(
                [json.loads(row)["cell"] for row in rows], ["other/simulated_annealing"]
            )
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
                "agent": "worker-2",
                "idea": "circulant core",
                "commit": "c2",
                "rationale": "r",
                "descriptor": {"mechanism": "construction", "method": "circulant"},
                "sources": ["S1"],
                "predicted_delta": -0.01,
                "prior_hits": [{"id": "S1", "title": "t", "highlight": "h"}],
            }
            events = [
                {
                    "descriptor": {"mechanism": "construction", "method": "circulant"},
                    "status": "discard",
                    "score": 0.05,
                }
            ]
            client = RecordingClient()
            with tempfile.TemporaryDirectory() as tmp, patch.dict(os.environ, env):
                swarm.judge_novelty(
                    [candidate],
                    llm_client=client,
                    out_dir=tmp,
                    round_num=2,
                    status=status,
                    profile=profile,
                    best_commit="abc",
                    best_val=0.0585,
                )
                swarm.critic_review(
                    client,
                    round_num=2,
                    candidate=candidate,
                    events=events,
                    first_score=0.05,
                    second_score=0.05,
                    accepted=True,
                    previous_best_commit="abc",
                    previous_best_val=0.0585,
                    profile=profile,
                )
            calls[arm] = client.calls
        self.assertEqual([call[0] for call in calls["A"]], ["CRITIC_NOVELTY", "CRITIC"])
        self.assertEqual(calls["A"], calls["B"])
        prompt = llm.render_prompt("CRITIC", calls["A"][1][3])
        self.assertIn("top hits", prompt)
        self.assertNotIn("0.910", prompt)


if __name__ == "__main__":
    unittest.main()
