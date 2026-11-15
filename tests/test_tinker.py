import os
from pathlib import Path
import sys
import tempfile
from types import SimpleNamespace
import unittest
from unittest.mock import Mock, patch

import llm
import swarm


class TinkerTests(unittest.TestCase):
    def setUp(self):
        directory = tempfile.TemporaryDirectory()
        self.addCleanup(directory.cleanup)
        self.log_path = Path(directory.name) / "llm.jsonl"
        environment = patch.dict(os.environ, {
            "TINKER_API_KEY": "stub-tinker-key",
            "TINKER_MODEL": "stub/chat-model",
            "OPENAI_MODEL": "not-the-tinker-model",
        })
        environment.start()
        self.addCleanup(environment.stop)

    def client(self, **kwargs):
        return llm.LLMClient(mode="tinker", log_path=self.log_path, **kwargs)

    def call(self, client):
        return client.call("SCOUT_QUERY", agent="worker-1", round_num=1, values={})

    def test_cli_and_model_precedence(self):
        self.assertEqual(
            swarm.build_parser()
            .parse_args(["--task", "hadamard19", "--llm", "tinker"])
            .llm,
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
        for content in ['[]', '[{"nested": true}]', 'null', 'no object', '{broken: {"nested": true}}']:
            with self.subTest(content=content), self.assertRaises(ValueError):
                llm.first_json_object(content)

    def test_parse_retry_usage_logging_and_original_hash_replay(self):
        usage = {"prompt_tokens": 12, "completion_tokens": 7, "total_tokens": 19}
        client = self.client()
        with patch.object(client, "_tinker_completion", side_effect=[
            ('{"broken":', usage),
            ('```json\n{"paper_query": "working"}\n```', usage),
        ]) as completion:
            self.assertEqual(self.call(client), {"paper_query": "working"})
        first_prompt, retry_prompt = [call.args[0] for call in completion.call_args_list]
        self.assertTrue(retry_prompt.startswith(first_prompt))
        self.assertIn("Expecting value", retry_prompt)
        record = llm.read_log(self.log_path)[0]
        self.assertEqual(record["prompt_sha"], llm.prompt_sha(first_prompt))
        self.assertEqual(record["model"], "stub/chat-model")
        self.assertEqual(record["usage"], {"prompt_tokens": 24, "completion_tokens": 14, "total_tokens": 38})
        self.assertEqual(len(record["attempts"]), 2)
        self.assertIn("parse_error", record["attempts"][0])
        self.assertGreaterEqual(record["latency_ms"], 0)
        self.assertNotIn("stub-tinker-key", self.log_path.read_text())
        with patch.dict(os.environ, {}, clear=True), patch.dict(sys.modules, {"tinker": None}):
            replay = self.client(replay=True)
            self.assertEqual(self.call(replay), {"paper_query": "working"})
        self.assertEqual(llm.read_log(self.log_path)[-1]["model"], "stub/chat-model")

    def test_retry_is_bounded(self):
        client = self.client()
        with patch.object(client, "_tinker_completion", return_value=("not JSON", {})) as completion:
            with self.assertRaisesRegex(RuntimeError, "after one retry"):
                self.call(client)
        self.assertEqual(completion.call_count, 2)

    def test_generic_sdk_chat_rendering_sampling_and_usage(self):
        tokenizer = Mock(eos_token_id=99)
        tokenizer.apply_chat_template.return_value = [10, 11, 12]
        tokenizer.decode.return_value = '<think>{"not_final": true}</think>{"ok": true}'
        model_input = Mock()
        model_input.to_ints.return_value = [10, 11, 12]
        sampler = Mock()
        sampler.get_tokenizer.return_value = tokenizer
        sampler.sample.return_value.result.return_value = SimpleNamespace(
            sequences=[SimpleNamespace(tokens=[21, 22])]
        )
        service = Mock()
        service.create_sampling_client.return_value.result.return_value = sampler
        sdk = SimpleNamespace(ServiceClient=Mock(return_value=service), types=SimpleNamespace(
            ModelInput=SimpleNamespace(from_ints=Mock(return_value=model_input)),
            SamplingParams=Mock(side_effect=lambda **kwargs: kwargs),
        ))
        with patch.dict(sys.modules, {"tinker": sdk}):
            client = self.client()
            self.assertEqual(self.call(client), {"ok": True})
            self.call(client)
        service.create_sampling_client.assert_called_once_with(base_model="stub/chat-model")
        tokenizer.apply_chat_template.assert_called_with(
            [{"role": "user", "content": llm.read_log(self.log_path)[0]["prompt"]}],
            tokenize=True, add_generation_prompt=True,
        )
        self.assertEqual(sampler.sample.call_args.kwargs["sampling_params"]["stop"], [99])
        self.assertEqual(sampler.sample.call_args.kwargs["num_samples"], 1)
        self.assertEqual(llm.read_log(self.log_path)[0]["usage"], {
            "prompt_tokens": 3, "completion_tokens": 2, "total_tokens": 5,
        })

    def test_kimi_native_renderer_uses_final_content_not_reasoning(self):
        parser = Mock()
        parser.parse_tokens.return_value.messages = ["native final message"]
        renderer = Mock()
        renderer.render_for_completion.return_value = (["spans"], parser)
        renderer.stop.return_value = [163586]
        message_list = Mock()
        message_list.return_value.to_openai_chat_dicts.return_value = [{
            "role": "assistant", "content": '{"ok": true}',
            "reasoning_content": '{"not_final": true}',
        }]
        model_input = Mock()
        model_input.to_ints.return_value = [10, 11, 12]
        bridge = Mock(return_value=model_input)
        sampler = Mock()
        sampler.sample.return_value.result.return_value = SimpleNamespace(
            sequences=[SimpleNamespace(tokens=[21, 22])]
        )
        service = Mock()
        service.create_sampling_client.return_value.result.return_value = sampler
        sdk = SimpleNamespace(ServiceClient=Mock(return_value=service), types=SimpleNamespace(
            SamplingParams=Mock(side_effect=lambda **kwargs: kwargs),
        ))
        modules = {
            "tinker": sdk,
            "tml_renderers": SimpleNamespace(
                renderers=SimpleNamespace(KimiK31Pro=SimpleNamespace(low=Mock(return_value=renderer))),
                chat=SimpleNamespace(MessageList=message_list),
            ),
            "tml_renderers.tinker": SimpleNamespace(token_spans_to_tinker_model_input=bridge),
        }
        model = "moonshotai/Kimi-K3.1-Pro:peft:262144"
        with patch.dict(sys.modules, modules):
            self.assertEqual(self.call(self.client(model=model)), {"ok": True})
        service.create_sampling_client.assert_called_once_with(base_model=model)
        sampler.get_tokenizer.assert_not_called()
        bridge.assert_called_once_with(["spans"])
        message_list.assert_called_once_with(["native final message"])
        self.assertEqual(sampler.sample.call_args.kwargs["sampling_params"]["stop"], [163586])


if __name__ == "__main__":
    unittest.main()
