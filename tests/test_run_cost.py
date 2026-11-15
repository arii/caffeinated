import json
import tempfile
import unittest
from pathlib import Path

from scripts import run_cost


class RunCostTests(unittest.TestCase):
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
