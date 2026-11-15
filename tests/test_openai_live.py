import io
import json
import tempfile
import unittest
from pathlib import Path
from types import SimpleNamespace
from unittest.mock import patch

import openai_live


def reply(finish="stop", content='{"ok":true}'):
    return io.BytesIO(
        json.dumps(
            {
                "choices": [{"finish_reason": finish, "message": {"content": content}}],
                "usage": {
                    "prompt_tokens": 100,
                    "completion_tokens": 50,
                    "completion_tokens_details": {"reasoning_tokens": 10},
                    "prompt_tokens_details": {"cache_write_tokens": 100},
                },
            }
        ).encode()
    )


class OpenAILiveTests(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory()
        self.addCleanup(self.tmp.cleanup)
        self.path = Path(self.tmp.name)
        env = patch.dict(
            "os.environ",
            {"OPENAI_API_KEY": "test-secret", "OPENAI_BASE_URL": "https://api.openai.com/v1"},
        )
        env.start()
        self.addCleanup(env.stop)

    def client(self, budget=1):
        return SimpleNamespace(
            log_path=self.path / "llm_log.jsonl",
            max_cost_usd=budget,
            worker_tokens=600,
            supervisor_tokens=4096,
            request_attempts=[],
        )

    def test_role_routing(self):
        for role, model, effort, limit in [
            ("SUPERVISOR", "gpt-6.1-sol", "medium", 4096),
            ("WORKER_IMPLEMENT", "gpt-6-luna", "none", 600),
            ("CRITIC", "gpt-6-luna", "none", 600),
        ]:
            with (
                self.subTest(role=role),
                patch("openai_live.urlopen", return_value=reply()) as send,
            ):
                result, usage = openai_live.request(
                    self.client(), "Return JSON", model=model, role=role
                )
            body = json.loads(send.call_args.args[0].data)
            self.assertEqual(body["reasoning_effort"], effort)
            self.assertEqual(body["max_completion_tokens"], limit)
            self.assertEqual(body["service_tier"], "default")
            self.assertEqual(result, {"ok": True})
            self.assertEqual(usage["reasoning_tokens"], 10)
            self.assertAlmostEqual(
                usage["estimated_cost_usd"],
                (125 * openai_live.RATES[model][0] + 50 * openai_live.RATES[model][1]) / 1e6,
            )
        self.assertNotIn("test-secret", (self.path / "openai_budget.jsonl").read_text())

    def test_budget_survives_restart(self):
        with patch("openai_live.urlopen", return_value=reply()) as send:
            openai_live.request(self.client(0.05), "JSON", model="gpt-6.1-sol", role="SUPERVISOR")
            with self.assertRaisesRegex(RuntimeError, "budget exhausted"):
                openai_live.request(
                    self.client(0.05), "JSON", model="gpt-6.1-sol", role="SUPERVISOR"
                )
            self.assertEqual(send.call_count, 1)

    def test_bad_completion_keeps_accounting(self):
        for finish, content in [("length", '{"ok":true}'), ("stop", "bad")]:
            c = self.client()
            with (
                patch("openai_live.urlopen", return_value=reply(finish, content)),
                self.assertRaises(RuntimeError),
            ):
                openai_live.request(c, "JSON", model="gpt-6-luna", role="WORKER_IMPLEMENT")
            self.assertEqual(c.request_attempts[0]["usage"]["completion_tokens"], 50)
            self.assertTrue((self.path / "openai_budget.jsonl").exists())

    def test_unknown_model_and_endpoint(self):
        with self.assertRaisesRegex(RuntimeError, "verified price"):
            openai_live.reserve(
                self.path / "ledger", model="unknown", prompt="JSON", limit=600, budget=1
            )
        with (
            patch.dict("os.environ", {"OPENAI_BASE_URL": "https://example.org/v1"}),
            self.assertRaisesRegex(RuntimeError, "official OpenAI"),
        ):
            openai_live.request(self.client(), "JSON", model="gpt-6-luna", role="CRITIC")

    def test_invalid_budget_and_oversized_input(self):
        for budget in [0, -1, float("nan"), float("inf"), 101]:
            with self.subTest(budget=budget), self.assertRaises(RuntimeError):
                openai_live.reserve(
                    self.path / "ledger",
                    model="gpt-6-luna",
                    prompt="JSON",
                    limit=600,
                    budget=budget,
                )
        with self.assertRaisesRegex(RuntimeError, "32K"):
            openai_live.reserve(
                self.path / "ledger", model="gpt-6-luna", prompt="x" * 32000, limit=600, budget=1
            )


class IgNobelCommitteeOpenAITests(unittest.TestCase):
    def test_official_endpoint_uses_reasoning_payload_and_shared_ledger(self):
        import importlib
        import os
        import sys

        sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "testcases" / "ignobel"))
        committee = importlib.import_module("committee")
        sent = []

        def fake_urlopen(req, timeout=0):
            self.assertEqual(timeout, 300)
            sent.append(json.loads(req.data))
            return io.BytesIO(
                json.dumps(
                    {"choices": [{"message": {"content": '{"laugh":5}'}, "finish_reason": "stop"}]}
                ).encode()
            )

        with tempfile.TemporaryDirectory() as d:
            ledger = Path(d) / "openai_budget.jsonl"
            env = {
                "IGNOBEL_JUDGE_BASE_URL": "https://api.openai.com/v1",
                "IGNOBEL_JUDGE_API_KEY_ENV": "OPENAI_API_KEY",
                "OPENAI_API_KEY": "test-key-not-real",
                "OPENAI_BUDGET_LEDGER": str(ledger),
                "OPENAI_MAX_COST_USD": "20",
            }
            with (
                patch.dict(os.environ, env),
                patch("urllib.request.urlopen", fake_urlopen),
            ):
                committee._complete("gpt-6.1-sol", "system", "user")
            self.assertTrue(sent)
            payload = sent[0]
            self.assertIn("max_completion_tokens", payload)
            self.assertNotIn("max_tokens", payload)
            self.assertNotIn("temperature", payload)
            self.assertTrue(ledger.read_text().strip())
