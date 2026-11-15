import io
import json
import tempfile
import unittest
from contextlib import redirect_stdout
from pathlib import Path

from scripts import run_cost


class RunCostTests(unittest.TestCase):
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
        self.assertEqual(llm_report["by_role"]["WORKER_PROPOSE"]["calls"], 1)
        self.assertEqual(llm_report["by_round"]["1"]["input_tokens"], 130)
        self.assertEqual(llm_report["by_agent"]["a"]["calls"], 2)
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
