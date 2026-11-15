import io
import json
import os
import sys
import tempfile
import unittest
from pathlib import Path
from unittest.mock import MagicMock, call, patch
from urllib.error import HTTPError

import llm
import swarm


class TinkerTests(unittest.TestCase):
    def setUp(self):
        directory = tempfile.TemporaryDirectory()
        self.addCleanup(directory.cleanup)
        self.log_path = Path(directory.name) / "llm.jsonl"
        environment = patch.dict(
            os.environ,
            {
                "TINKER_API_KEY": "stub-tinker-key",
                "TINKER_MODEL": "stub/chat-model",
                "OPENAI_MODEL": "not-the-tinker-model",
            },
        )
        environment.start()
        self.addCleanup(environment.stop)

    def client(self, *, log_path=None, **kwargs):
        return llm.LLMClient(mode="tinker", log_path=log_path or self.log_path, **kwargs)

    def call(self, client):
        return client.call("SCOUT_QUERY", agent="worker-1", round_num=1, values={})

    def test_cli_and_model_precedence(self):
        self.assertEqual(
            swarm.build_parser().parse_args(["--task", "hadamard19", "--llm", "tinker"]).llm,
            "tinker",
        )
        self.assertEqual(self.client().model, "stub/chat-model")
        self.assertEqual(self.client(model="explicit-model").model, "explicit-model")

    def test_model_and_key_required_but_not_for_replay(self):
        with patch.dict(os.environ, {}, clear=True):
            with self.assertRaisesRegex(ValueError, "TINKER_MODEL"):
                self.client()
            with self.assertRaisesRegex(ValueError, "TINKER_API_KEY"):
                self.client(model="chat-model")
            self.client(replay=True)

    def test_first_object_handles_fences_nesting_and_braces_in_strings(self):
        for content in [
            '{"value": {"text": "a } and { b"}}',
            'Here is JSON:\n```json\n{"value": {"text": "a } and { b"}}\n```',
            '{"value": {"text": "a } and { b"}}\n{"ignored": true}',
        ]:
            with self.subTest(content=content):
                self.assertEqual(llm.first_json_object(content), {"value": {"text": "a } and { b"}})
        for content in [
            "[]",
            '[{"nested": true}]',
            "null",
            "no object",
            '{broken: {"nested": true}}',
        ]:
            with self.subTest(content=content), self.assertRaises(ValueError):
                llm.first_json_object(content)

    def test_parse_retry_usage_logging_and_original_hash_replay(self):
        usage = {"prompt_tokens": 12, "completion_tokens": 7, "total_tokens": 19}
        client = self.client()
        with patch.object(
            client,
            "_tinker_completion",
            side_effect=[
                ('{"broken":', usage),
                ('```json\n{"paper_query": "working"}\n```', usage),
            ],
        ) as completion:
            self.assertEqual(self.call(client), {"paper_query": "working"})
        first_prompt, retry_prompt = [call.args[0] for call in completion.call_args_list]
        self.assertTrue(retry_prompt.startswith(first_prompt))
        self.assertIn("Expecting value", retry_prompt)
        record = llm.read_log(self.log_path)[0]
        self.assertEqual(record["prompt_sha"], llm.prompt_sha(first_prompt))
        self.assertEqual(record["model"], "stub/chat-model")
        self.assertEqual(
            record["usage"], {"prompt_tokens": 24, "completion_tokens": 14, "total_tokens": 38}
        )
        self.assertEqual(record["call_id"], client.last_call_id)
        self.assertEqual(len(record["attempts"]), 2)
        self.assertIn("parse_error", record["attempts"][0])
        self.assertGreaterEqual(record["latency_ms"], 0)
        self.assertNotIn("stub-tinker-key", self.log_path.read_text())
        with patch.dict(os.environ, {}, clear=True), patch.dict(sys.modules, {"tinker": None}):
            replay = self.client(replay=True)
            self.assertEqual(self.call(replay), {"paper_query": "working"})
        self.assertEqual(llm.read_log(self.log_path)[-1]["model"], "stub/chat-model")

    def test_role_models_are_logged_and_replayed_from_mixed_model_logs(self):
        usage = {"prompt_tokens": 3, "completion_tokens": 2, "total_tokens": 5}
        client = self.client(
            model="worker-model",
            role_models={"CRITIC": "critic-model"},
        )
        with patch.object(
            client,
            "_tinker_completion",
            side_effect=[
                ('{"paper_query": "worker response"}', usage),
                ('{"verdict": "replicated"}', usage),
            ],
        ):
            self.assertEqual(
                client.call("SCOUT_QUERY", agent="worker-1", round_num=1, values={}),
                {"paper_query": "worker response"},
            )
            self.assertEqual(
                client.call("CRITIC", agent="critic", round_num=1, values={}),
                {"verdict": "replicated"},
            )
        self.assertEqual(
            [row["model"] for row in llm.read_log(self.log_path)],
            ["worker-model", "critic-model"],
        )

        replay = self.client(
            model="replay-base",
            role_models={"CRITIC": "replay-critic"},
            replay=True,
        )
        self.assertEqual(
            replay.call("SCOUT_QUERY", agent="worker-1", round_num=1, values={}),
            {"paper_query": "worker response"},
        )
        self.assertEqual(
            replay.call("CRITIC", agent="critic", round_num=1, values={}),
            {"verdict": "replicated"},
        )
        self.assertEqual(
            [row["model"] for row in llm.read_log(self.log_path)[-2:]],
            ["worker-model", "critic-model"],
        )

    def test_retry_is_bounded(self):
        client = self.client()
        with (
            patch.object(client, "_tinker_completion", return_value=("not JSON", {})) as completion,
            self.assertRaisesRegex(RuntimeError, "after one retry"),
        ):
            self.call(client)
        self.assertEqual(completion.call_count, 2)

    def http_response(self, body):
        response = MagicMock()
        response.__enter__.return_value.read.return_value = json.dumps(body).encode()
        return response

    def timeout_response(self):
        response = MagicMock()
        response.__enter__.return_value.read.side_effect = TimeoutError("read timed out")
        return response

    def client_for_mode(self, mode, log_path=None):
        log_path = log_path or self.log_path
        if mode == "tinker":
            return self.client(log_path=log_path)
        return llm.LLMClient(mode="openai", model="stub-openai-model", log_path=log_path)

    def test_read_timeouts_retry_and_raise_llm_error(self):
        for mode in ("tinker", "openai"):
            with (
                self.subTest(mode=mode),
                patch.dict(os.environ, {"OPENAI_API_KEY": "stub-openai-key"}),
            ):
                log_dir = self.log_path.parent / f"{mode}-failure"
                log_dir.mkdir()
                log_path = log_dir / "llm_log.jsonl"
                client = self.client_for_mode(mode, log_path)
                with (
                    patch(
                        "llm.urlopen",
                        side_effect=[self.timeout_response() for _ in range(3)],
                    ) as urlopen,
                    patch("llm.time.sleep") as sleep,
                    self.assertRaisesRegex(llm.LLMError, "request timed out"),
                ):
                    self.call(client)
                self.assertEqual(urlopen.call_count, 3)
                sleep.assert_has_calls([call(5), call(10)])
                self.assertEqual(llm.read_log(log_path), [])
                errors = llm.read_log(log_path.with_name("llm_errors.jsonl"))
                self.assertEqual(len(errors), 1)
                self.assertEqual(errors[0]["call_id"], client.last_call_id)
                self.assertEqual(len(errors[0]["attempts"]), 3)
                self.assertIn("ts", errors[0])
                self.assertEqual(errors[0]["role"], "SCOUT_QUERY")
                self.assertEqual(errors[0]["agent"], "worker-1")
                self.assertEqual(errors[0]["round"], 1)
                self.assertEqual(errors[0]["model"], client.model)
                self.assertEqual(len(errors[0]["prompt_sha"]), 64)
                self.assertIn("request timed out", errors[0]["error"])
                self.assertTrue(
                    all(
                        attempt["transport_error"]
                        and attempt["usage"] is None
                        and isinstance(attempt["latency_ms"], int)
                        for attempt in errors[0]["attempts"]
                    )
                )

    def test_read_timeout_retries_once_then_succeeds(self):
        body = {"choices": [{"message": {"content": '{"ok": true}'}}], "usage": {}}
        for mode in ("tinker", "openai"):
            with (
                self.subTest(mode=mode),
                patch.dict(os.environ, {"OPENAI_API_KEY": "stub-openai-key"}),
            ):
                log_dir = self.log_path.parent / f"{mode}-success"
                log_dir.mkdir()
                log_path = log_dir / "llm_log.jsonl"
                client = self.client_for_mode(mode, log_path)
                with (
                    patch(
                        "llm.urlopen",
                        side_effect=[self.timeout_response(), self.http_response(body)],
                    ) as urlopen,
                    patch("llm.time.sleep") as sleep,
                ):
                    self.assertEqual(self.call(client), {"ok": True})
                self.assertEqual(urlopen.call_count, 2)
                sleep.assert_called_once_with(5)
                record = llm.read_log(log_path)[0]
                self.assertEqual(len(record["attempts"]), 2)
                self.assertEqual(
                    record["attempts"][0]["transport_error"], "TimeoutError: read timed out"
                )
                self.assertIsNone(record["attempts"][0]["usage"])
                self.assertIsInstance(record["attempts"][1]["usage"], dict)
                self.assertEqual(llm.read_log(log_path.with_name("llm_errors.jsonl")), [])

    def test_openai_compatible_request_uses_final_content_not_reasoning(self):
        body = {
            "choices": [
                {
                    "message": {
                        "role": "assistant",
                        "content": '{"ok": true}',
                        "reasoning_content": '{"not_final": true}',
                    }
                }
            ],
            "usage": {
                "prompt_tokens": 98,
                "completion_tokens": 33,
                "total_tokens": 131,
                "prompt_tokens_details": {"cached_tokens": 19},
                "completion_tokens_details": {"reasoning_tokens": 11},
            },
        }
        model = "moonshotai/Kimi-K3.1-Pro:peft:262144"
        with patch("llm.urlopen", return_value=self.http_response(body)) as urlopen:
            client = self.client(
                model=model, role_models={"SCOUT_QUERY": "role-specific-model"}, seed=7
            )
            self.assertEqual(self.call(client), {"ok": True})
        request = urlopen.call_args.args[0]
        self.assertEqual(request.full_url, llm.TINKER_BASE_URL + "/chat/completions")
        self.assertEqual(request.get_header("Authorization"), "Bearer stub-tinker-key")
        payload = json.loads(request.data)
        record = llm.read_log(self.log_path)[0]
        self.assertEqual(record["model"], "role-specific-model")
        self.assertEqual(payload["model"], "role-specific-model")
        self.assertEqual(payload["messages"], [{"role": "user", "content": record["prompt"]}])
        self.assertEqual(payload["reasoning_effort"], llm.DEFAULT_TINKER_REASONING_EFFORT)
        self.assertEqual(llm.DEFAULT_TINKER_REASONING_EFFORT, "low")
        self.assertEqual(payload["seed"], record["seed"])
        self.assertEqual(
            record["usage"],
            {
                "prompt_tokens": 98,
                "completion_tokens": 33,
                "total_tokens": 131,
                "prompt_tokens_details": {"cached_tokens": 19},
                "cached_tokens": 19,
                "reasoning_tokens": 11,
                "completion_tokens_details": {"reasoning_tokens": 11},
                "reasoning_chars": len('{"not_final": true}'),
            },
        )
        self.assertEqual(record["call_id"], client.last_call_id)
        self.assertEqual(record["attempts"][0]["usage"]["cached_tokens"], 19)
        self.assertEqual(record["attempts"][0]["usage"]["reasoning_tokens"], 11)
        self.assertEqual(
            record["attempts"][0]["usage"]["reasoning_chars"], len('{"not_final": true}')
        )
        self.assertEqual(record["attempts"][0]["reasoning"], '{"not_final": true}')
        self.assertNotIn("stub-tinker-key", self.log_path.read_text())

    def test_pi_role_uses_its_reasoning_effort(self):
        body = {"choices": [{"message": {"content": '{"steers": []}'}}], "usage": {}}
        with (
            patch.dict(os.environ, {"TINKER_PI_REASONING_EFFORT": "high"}),
            patch("llm.urlopen", return_value=self.http_response(body)) as urlopen,
        ):
            client = self.client()
            self.assertEqual(client.call("PI", agent="pi", round_num=2, values={}), {"steers": []})
        payload = json.loads(urlopen.call_args.args[0].data)
        self.assertEqual(payload["reasoning_effort"], "high")
        self.assertEqual(llm.DEFAULT_TINKER_PI_REASONING_EFFORT, "high")

    def test_openai_path_logs_cached_tokens_reasoning_and_call_ids(self):
        body = {
            "choices": [
                {
                    "message": {
                        "content": '{"ok": true}',
                        "reasoning_content": "think",
                    }
                }
            ],
            "usage": {
                "prompt_tokens": 20,
                "completion_tokens": 8,
                "total_tokens": 28,
                "prompt_tokens_details": {"cached_tokens": 5},
                "completion_tokens_details": {"reasoning_tokens": 3},
            },
        }
        with (
            patch.dict(os.environ, {"OPENAI_API_KEY": "stub-openai-key"}),
            patch("llm.urlopen", return_value=self.http_response(body)),
        ):
            client = llm.LLMClient(mode="openai", model="openai-model", log_path=self.log_path)
            self.assertEqual(self.call(client), {"ok": True})
            first_id = client.last_call_id
            self.assertEqual(self.call(client), {"ok": True})
        records = llm.read_log(self.log_path)
        self.assertEqual(len({record["call_id"] for record in records}), 2)
        self.assertEqual(records[0]["call_id"], first_id)
        self.assertEqual(
            records[0]["usage"],
            {
                "prompt_tokens": 20,
                "completion_tokens": 8,
                "total_tokens": 28,
                "prompt_tokens_details": {"cached_tokens": 5},
                "cached_tokens": 5,
                "completion_tokens_details": {"reasoning_tokens": 3},
                "reasoning_tokens": 3,
                "reasoning_chars": 5,
            },
        )

    def test_http_errors_report_status_and_detail(self):
        error = HTTPError(
            llm.TINKER_BASE_URL, 400, "Bad Request", {}, io.BytesIO(b'{"detail": "not supported"}')
        )
        with (
            patch("llm.urlopen", side_effect=error),
            self.assertRaisesRegex(llm.LLMError, "HTTP 400.*not supported"),
        ):
            self.call(self.client())

    def test_transient_http_errors_are_retried(self):
        body = {"choices": [{"message": {"content": '{"ok": true}'}}], "usage": {}}
        for mode in ("tinker", "openai"):
            with (
                self.subTest(mode=mode),
                patch.dict(os.environ, {"OPENAI_API_KEY": "stub-openai-key"}),
            ):
                log_dir = self.log_path.parent / f"{mode}-http-retry"
                log_dir.mkdir()
                client = self.client_for_mode(mode, log_dir / "llm_log.jsonl")
                busy = HTTPError(llm.TINKER_BASE_URL, 503, "Busy", {}, io.BytesIO(b""))
                with (
                    patch(
                        "llm.urlopen",
                        side_effect=[busy, self.http_response(body)],
                    ) as urlopen,
                    patch("llm.time.sleep") as sleep,
                ):
                    self.assertEqual(self.call(client), {"ok": True})
                self.assertEqual(urlopen.call_count, 2)
                sleep.assert_called_once_with(5)
                attempts = llm.read_log(client.log_path)[0]["attempts"]
                self.assertEqual(attempts[0]["transport_error"], "HTTPError: HTTP 503")
                self.assertEqual(len(attempts), 2)


if __name__ == "__main__":
    unittest.main()
