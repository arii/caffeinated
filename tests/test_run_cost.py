import io
import json
import tempfile
import unittest
from contextlib import redirect_stdout
from pathlib import Path

from scripts import run_cost


class RunCostTests(unittest.TestCase):
    def test_pi_no_steer_counts_as_wasted(self):
        with tempfile.TemporaryDirectory() as directory:
            run_dir = Path(directory)
            (run_dir / "llm_log.jsonl").write_text(
                json.dumps(
                    {
                        "call_id": "PI-r1-pi-1",
                        "role": "PI",
                        "round": 1,
                        "agent": "pi",
                        "usage": {"prompt_tokens": 12, "completion_tokens": 4},
                    }
                )
                + "\n",
                encoding="utf-8",
            )
            (run_dir / "llm_outcomes.jsonl").write_text(
                json.dumps({"call_id": "PI-r1-pi-1", "outcome": "pi_no_steer"}) + "\n",
                encoding="utf-8",
            )
            wasted = run_cost.build_report(run_dir)["llm"]["wasted"]
        self.assertEqual(wasted["calls"], 1)
        self.assertEqual(wasted["input_tokens"], 12)
        self.assertEqual(wasted["output_tokens"], 4)

    def test_fixture_groups_usage_and_reports_wasted_calls_and_tool_counts(self):
        with tempfile.TemporaryDirectory() as directory:
            run_dir = Path(directory)
            calls = [
                {
                    "call_id": "WORKER_PROPOSE-r1-a-1",
                    "role": "WORKER_PROPOSE",
                    "round": 1,
                    "agent": "a",
                    "model": "fixture-model",
                    "attempts": [
                        {"transport_error": "TimeoutError: read timed out", "usage": None},
                        {"usage": {"prompt_tokens": 100, "completion_tokens": 40}},
                    ],
                    "usage": {
                        "prompt_tokens": 100,
                        "prompt_tokens_details": {"cached_tokens": 20},
                        "completion_tokens": 40,
                        "completion_tokens_details": {"reasoning_tokens": 5},
                    },
                },
                {
                    "call_id": "WORKER_REPAIR-r1-a-2",
                    "role": "WORKER_REPAIR",
                    "round": 1,
                    "agent": "a",
                    "model": "fixture-model",
                    "usage": {
                        "prompt_tokens": 30,
                        "cached_tokens": 10,
                        "completion_tokens": 10,
                        "reasoning_tokens": 2,
                    },
                },
                {
                    "call_id": "CRITIC-r2-b-3",
                    "role": "CRITIC",
                    "round": 2,
                    "agent": "b",
                    "model": "fixture-model",
                    "usage": {
                        "prompt_tokens": 50,
                        "completion_tokens": 20,
                        "completion_tokens_details": {"reasoning_tokens": 5},
                    },
                },
            ]
            (run_dir / "llm_log.jsonl").write_text(
                "".join(json.dumps(record) + "\n" for record in calls), encoding="utf-8"
            )
            transport_error = {
                "call_id": "SCOUT_QUERY-r3-c-4",
                "role": "SCOUT_QUERY",
                "round": 3,
                "agent": "c",
                "model": "fixture-model",
                "error": "SCOUT_QUERY call for c failed: request timed out",
                "attempts": [
                    {"transport_error": "TimeoutError: read timed out", "usage": None}
                    for _ in range(3)
                ],
            }
            (run_dir / "llm_errors.jsonl").write_text(
                json.dumps(transport_error) + "\n", encoding="utf-8"
            )
            (run_dir / "llm_outcomes.jsonl").write_text(
                "".join(
                    json.dumps(record) + "\n"
                    for record in (
                        {
                            "call_id": calls[0]["call_id"],
                            "outcome": "rejected",
                            "reasons": ["not useful"],
                        },
                        {"call_id": calls[1]["call_id"], "outcome": "repaired_then_accepted"},
                        {"call_id": calls[2]["call_id"], "outcome": "invalid"},
                    )
                ),
                encoding="utf-8",
            )
            (run_dir / "research_log.jsonl").write_text(
                json.dumps({"type": "query", "endpoint": "search"})
                + "\n"
                + json.dumps({"type": "query", "endpoint": "contents"})
                + "\n",
                encoding="utf-8",
            )
            (run_dir / "memory_log.jsonl").write_text(
                "".join(
                    json.dumps(record) + "\n"
                    for record in (
                        {"backend": "pastdev", "type": "recall"},
                        {"backend": "pastdev", "type": "write"},
                        {"backend": "local", "type": "recall"},
                    )
                ),
                encoding="utf-8",
            )

            report = run_cost.build_report(run_dir)
            output = io.StringIO()
            with redirect_stdout(output):
                self.assertEqual(run_cost.main([str(run_dir), "--json"]), 0)
            cli_report = json.loads(output.getvalue())
            text_output = io.StringIO()
            with redirect_stdout(text_output):
                self.assertEqual(run_cost.main([str(run_dir), "--text"]), 0)

        llm_report = report["llm"]
        self.assertEqual(
            {
                key: llm_report[key]
                for key in (
                    "calls",
                    "input_tokens",
                    "cached_tokens",
                    "output_tokens",
                    "reasoning_tokens",
                )
            },
            {
                "calls": 3,
                "input_tokens": 180,
                "cached_tokens": 30,
                "output_tokens": 70,
                "reasoning_tokens": 12,
            },
        )
        self.assertEqual(llm_report["failed_calls"], 1)
        self.assertEqual(llm_report["transport_retries"], 4)
        self.assertEqual(llm_report["by_role"]["WORKER_PROPOSE"]["calls"], 1)
        self.assertEqual(llm_report["by_role"]["WORKER_PROPOSE"]["transport_retries"], 1)
        self.assertEqual(llm_report["by_role"]["SCOUT_QUERY"]["failed_calls"], 1)
        self.assertEqual(llm_report["by_role"]["SCOUT_QUERY"]["transport_retries"], 3)
        self.assertEqual(llm_report["by_round"]["1"]["input_tokens"], 130)
        self.assertEqual(llm_report["by_round"]["3"]["failed_calls"], 1)
        self.assertEqual(llm_report["by_round"]["3"]["transport_retries"], 3)
        self.assertEqual(llm_report["by_agent"]["a"]["calls"], 2)
        self.assertEqual(llm_report["by_agent"]["c"]["failed_calls"], 1)
        self.assertEqual(llm_report["by_agent"]["c"]["transport_retries"], 3)
        self.assertEqual(
            llm_report["wasted"],
            {
                "calls": 2,
                "input_tokens": 150,
                "cached_tokens": 20,
                "output_tokens": 60,
                "reasoning_tokens": 10,
                "percent_of_total": {
                    "calls": 66.67,
                    "input_tokens": 83.33,
                    "cached_tokens": 66.67,
                    "output_tokens": 85.71,
                    "reasoning_tokens": 83.33,
                },
            },
        )
        self.assertEqual(
            report["tools"],
            {"exa_searches": 1, "pastdev_recalls": 1, "pastdev_writes": 1},
        )
        self.assertEqual(cli_report["llm"]["wasted"]["calls"], 2)
        self.assertEqual(cli_report["llm"]["failed_calls"], 1)
        self.assertIn("failed_calls=1 transport_retries=4", text_output.getvalue())
        self.assertIn(
            "SCOUT_QUERY: calls=0 failed_calls=1 transport_retries=3",
            text_output.getvalue(),
        )

    def test_repaired_worker_call_only_counts_the_failed_proposal_as_waste(self):
        with tempfile.TemporaryDirectory() as directory:
            run_dir = Path(directory)
            proposal = {
                "call_id": "WORKER_PROPOSE-r1-a-1",
                "role": "WORKER_PROPOSE",
                "round": 1,
                "agent": "a",
                "usage": {"prompt_tokens": 100, "completion_tokens": 20},
            }
            repair = {
                "call_id": "WORKER_REPAIR-r1-a-2",
                "role": "WORKER_REPAIR",
                "round": 1,
                "agent": "a",
                "usage": {"prompt_tokens": 60, "completion_tokens": 10},
            }
            (run_dir / "llm_log.jsonl").write_text(
                json.dumps(proposal) + "\n" + json.dumps(repair) + "\n", encoding="utf-8"
            )
            (run_dir / "llm_outcomes.jsonl").write_text(
                json.dumps({"call_id": proposal["call_id"], "outcome": "rejected"})
                + "\n"
                + json.dumps({"call_id": repair["call_id"], "outcome": "repaired_then_accepted"})
                + "\n",
                encoding="utf-8",
            )
            wasted = run_cost.build_report(run_dir)["llm"]["wasted"]
        self.assertEqual(wasted["calls"], 1)
        self.assertEqual(wasted["input_tokens"], 100)

    def test_pi_steer_followed_by_acceptance_is_reported_by_role(self):
        with tempfile.TemporaryDirectory() as directory:
            run_dir = Path(directory)
            (run_dir / "llm_log.jsonl").write_text(
                json.dumps(
                    {
                        "call_id": "PI-r1-pi-1",
                        "role": "PI",
                        "round": 1,
                        "agent": "pi",
                        "usage": {"prompt_tokens": 10, "completion_tokens": 3},
                    }
                )
                + "\n",
                encoding="utf-8",
            )
            (run_dir / "pi.jsonl").write_text(
                json.dumps(
                    {"type": "pi_steer", "round": 1, "agent": "a", "steer": "try a new method"}
                )
                + "\n",
                encoding="utf-8",
            )
            (run_dir / "ledger.jsonl").write_text(
                json.dumps(
                    {
                        "kind": "candidate",
                        "round": 1,
                        "agent": "a",
                        "status": "discard",
                        "score": 0.4,
                    }
                )
                + "\n",
                encoding="utf-8",
            )
            report = run_cost.build_report(run_dir)
            output = io.StringIO()
            with redirect_stdout(output):
                run_cost.main([str(run_dir), "--by", "role", "--json"])
            cli_report = json.loads(output.getvalue())
        self.assertEqual(report["llm"]["pi_steer_followed_by_accepted_attempt"], 1)
        self.assertEqual(report["llm"]["by_role"]["PI"]["steer_followed_by_accepted_attempt"], 1)
        self.assertEqual(
            cli_report["selected_breakdown"]["PI"]["steer_followed_by_accepted_attempt"], 1
        )

    def test_summarizes_model_tokens_prices_and_research_costs(self):
        with tempfile.TemporaryDirectory() as directory:
            run_dir = Path(directory)
            (run_dir / "llm_log.jsonl").write_text(
                "\n".join(
                    json.dumps(record)
                    for record in (
                        {
                            "model": "model-a",
                            "usage": {"prompt_tokens": 100, "completion_tokens": 20},
                        },
                        {
                            "model": "model-a",
                            "usage": {"prompt_tokens": 30, "completion_tokens": 5},
                        },
                        {
                            "model": "model-b",
                            "usage": {"prompt_tokens": 10, "completion_tokens": 12},
                        },
                    )
                )
                + "\n",
                encoding="utf-8",
            )
            (run_dir / "research_log.jsonl").write_text(
                "\n".join(
                    json.dumps(record)
                    for record in (
                        {"provider": "exa", "cost": 0.007},
                        {"provider": "past.dev", "costDollars": {"total": 0.002}},
                    )
                )
                + "\n",
                encoding="utf-8",
            )

            report = run_cost.build_report(run_dir, {"model-a": (2, 4)})

        self.assertEqual(report["llm"]["calls"], 3)
        self.assertEqual(report["llm"]["prompt_tokens"], 140)
        self.assertEqual(report["llm"]["completion_tokens"], 37)
        self.assertEqual(report["llm"]["models"]["model-a"]["calls"], 2)
        for usage in report["llm"]["models"].values():
            self.assertEqual(usage["input_tokens"], usage["prompt_tokens"])
            self.assertEqual(usage["output_tokens"], usage["completion_tokens"])
        self.assertEqual(
            sum(usage["input_tokens"] for usage in report["llm"]["models"].values()), 140
        )
        self.assertEqual(report["llm"]["models"]["model-a"]["estimated_cost_usd"], 0.00036)
        self.assertEqual(report["llm"]["models"]["model-b"]["estimated_cost_usd"], None)
        self.assertEqual(report["research_costs"]["exa"]["cost_usd"], 0.007)
        self.assertEqual(report["research_costs"]["past_dev"]["cost_usd"], 0.002)
        self.assertNotIn("cost_note", report["research_costs"]["past_dev"])

    def test_parse_price_rejects_negative_or_invalid_rates(self):
        for value in ("model-a=2", "model-a=-1,4", "=2,4", "model-a=nan,4"):
            with self.subTest(value=value), self.assertRaises(ValueError):
                run_cost.parse_price(value)

    def test_counts_exa_endpoint_calls_and_costs_but_ignores_costless_sources(self):
        with tempfile.TemporaryDirectory() as directory:
            run_dir = Path(directory)
            (run_dir / "research_log.jsonl").write_text(
                "\n".join(
                    json.dumps(record)
                    for record in (
                        {
                            "type": "query",
                            "endpoint": " /search ",
                            "cost": 0.007,
                            "latency_ms": 500,
                        },
                        {"type": "query", "endpoint": "/search", "cost": 0.005, "latency_ms": 700},
                        {"type": "source", "source": "dataset", "title": "Example"},
                    )
                )
                + "\n",
                encoding="utf-8",
            )

            research_costs = run_cost.build_report(run_dir)["research_costs"]

        self.assertEqual(research_costs["exa"]["calls"], 2)
        self.assertEqual(research_costs["exa"]["cost_usd"], 0.012)
        self.assertEqual(research_costs["exa"]["records"], 2)
        self.assertEqual(research_costs["exa"]["latency_ms_p50"], 600)

    def test_reports_pastdev_memory_usage_and_missing_log_zeros(self):
        with tempfile.TemporaryDirectory() as directory:
            run_dir = Path(directory)
            (run_dir / "memory_log.jsonl").write_text(
                "\n".join(
                    json.dumps(record)
                    for record in (
                        {"backend": "pastdev", "type": "recall", "latency_ms": 500},
                        {"backend": "pastdev", "type": "recall", "latency_ms": 700},
                        {"backend": "pastdev", "type": "write", "latency_ms": 300},
                        {"backend": "local", "type": "recall", "latency_ms": 100},
                    )
                )
                + "\n",
                encoding="utf-8",
            )
            past_dev = run_cost.build_report(run_dir)["research_costs"]["past_dev"]

        self.assertEqual(past_dev["cost_usd"], None)
        self.assertEqual(past_dev["cost_note"], "not reported by past.dev API")
        self.assertEqual(past_dev["recall"], {"records": 2, "latency_ms_p50": 600})
        self.assertEqual(past_dev["write"], {"records": 1, "latency_ms_p50": 300})

        with tempfile.TemporaryDirectory() as directory:
            past_dev = run_cost.build_report(Path(directory))["research_costs"]["past_dev"]

        self.assertEqual(past_dev["recall"], {"records": 0, "latency_ms_p50": None})
        self.assertEqual(past_dev["write"], {"records": 0, "latency_ms_p50": None})
