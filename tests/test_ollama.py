import json
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch

import llm
import swarm


class Response:
    def __init__(self, value):
        self.value = value

    def __enter__(self):
        return self

    def __exit__(self, *_args):
        return False

    def read(self):
        return json.dumps(self.value).encode()


class OllamaTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.client = llm.LLMClient(
            mode="ollama",
            model="qwen3:4b",
            role_models={"SUPERVISOR": "qwen3:8b"},
            log_path=Path(self.temp.name) / "calls.jsonl",
        )

    def test_requests_are_local_and_workers_do_not_think(self):
        response = Response(
            {
                "message": {"content": '{"ok":true}'},
                "eval_count": 12,
                "prompt_eval_count": 100,
                "done_reason": "stop",
            }
        )
        with (
            patch.dict("os.environ", {"OLLAMA_HOST": "http://127.0.0.1:11434"}),
            patch("llm.urlopen", return_value=response) as send,
        ):
            for role, thinking, limit in [
                ("WORKER_PROPOSE", False, 600),
                ("SUPERVISOR", True, 4096),
            ]:
                result, usage = self.client._request_ollama("Return JSON", role=role)
                request = send.call_args.args[0]
                body = json.loads(request.data)
                self.assertEqual(request.full_url, "http://127.0.0.1:11434/api/chat")
                self.assertEqual(body["think"], thinking)
                self.assertEqual(body["options"]["num_predict"], limit)
                self.assertEqual(usage["total_tokens"], 112)
                self.assertTrue(result["ok"])
                self.assertIsNone(request.get_header("Authorization"))

    def test_partial_and_remote_responses_are_not_executed(self):
        response = Response({"message": {"content": '{"ok":true}'}, "done_reason": "length"})
        with (
            patch("llm.urlopen", return_value=response),
            self.assertRaisesRegex(RuntimeError, "token limit"),
        ):
            self.client._request_ollama("Return JSON")
        with (
            patch.dict("os.environ", {"OLLAMA_HOST": "https://remote.example"}),
            patch("llm.urlopen") as send,
        ):
            with self.assertRaisesRegex(ValueError, "local HTTP"):
                self.client._request_ollama("private prompt")
            send.assert_not_called()

    def test_worker_prompt_omits_full_history_and_call_budget_is_enforced(self):
        values = {
            "supervisor_instruction": "Set restarts to 16.",
            "candidate_source": "RESTARTS = 8",
            "recalled_results": "PRIVATE_HISTORY_SENTINEL",
        }
        prompt = llm.render_prompt("WORKER_PROPOSE", values)
        self.assertIn("Set restarts to 16.", prompt)
        self.assertNotIn("PRIVATE_HISTORY_SENTINEL", prompt)
        with patch.object(self.client, "_request_ollama", return_value=({"ok": True}, {})) as send:
            for _ in range(2):
                self.client.call("WORKER_PROPOSE", agent="worker-8", round_num=1, values=values)
            with self.assertRaisesRegex(llm.LLMError, "call budget"):
                self.client.call("WORKER_PROPOSE", agent="worker-8", round_num=1, values=values)
            self.assertEqual(send.call_count, 2)

    def test_worker_count_and_local_settings_survive_resume_contract(self):
        args = swarm.build_parser().parse_args(
            [
                "--task",
                "hadamard21",
                "--llm",
                "ollama",
                "--workers",
                "8",
                "--supervisor-model",
                "qwen3:8b",
            ]
        )
        swarm.resolve_run_args(args)
        self.assertEqual(args.workers, 8)
        self.assertEqual(args.worker_tokens, 600)
        for setting in [
            "workers",
            "supervisor_model",
            "worker_tokens",
            "supervisor_tokens",
            "ollama_context",
        ]:
            self.assertIn(setting, swarm.RESUMED_SETTINGS)

    def test_local_runs_cannot_trigger_paid_committee_hook(self):
        with (
            patch.dict("os.environ", {"TINKER_API_KEY": "not-a-real-key"}),
            patch.object(swarm, "TASK", {"post_run": "score_run.py"}),
            patch("swarm.subprocess.run") as run,
        ):
            self.assertFalse(swarm.run_post_run_hook(Path(self.temp.name), "ollama"))
            run.assert_not_called()
