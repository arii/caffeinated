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

    def test_parse_price_rejects_negative_or_invalid_rates(self):
        for value in ("model-a=2", "model-a=-1,4", "=2,4", "model-a=nan,4"):
            with self.subTest(value=value), self.assertRaises(ValueError):
                run_cost.parse_price(value)
