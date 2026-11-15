import os
import tempfile
import unittest
from unittest.mock import MagicMock, patch

from fastapi.testclient import TestClient

from backend import openai_launch
from backend.app import allowed_origin, create_app


class OpenAILaunchTests(unittest.TestCase):
    def setUp(self):
        environment = patch.dict(
            os.environ,
            {"LAB_DISCOVER_REPO_RECORDINGS": "0", "LAB_RECORDINGS_DIRS": ""},
        )
        environment.start()
        self.addCleanup(environment.stop)
        for key in ["LAB_OPENAI_LAUNCH", "OPENAI_API_KEY", "LAB_OPENAI_MAX_COST_USD"]:
            os.environ.pop(key, None)

    def test_disabled_by_default(self):
        with tempfile.TemporaryDirectory() as d, TestClient(create_app(d, runner=False)) as c:
            self.assertFalse(c.get("/api/health").json()["openaiLaunch"]["enabled"])
            self.assertEqual(c.post("/api/openai-runs", json={}).status_code, 409)

    def test_requires_key_then_launches_one_capped_run(self):
        os.environ["LAB_OPENAI_LAUNCH"] = "1"
        os.environ["LAB_OPENAI_MAX_COST_USD"] = "500"
        with tempfile.TemporaryDirectory() as d, TestClient(create_app(d, runner=False)) as c:
            self.assertEqual(c.post("/api/openai-runs", json={}).status_code, 422)
            self.assertEqual(c.post("/api/openai-runs", json={"rounds": 6}).status_code, 422)
            os.environ["OPENAI_API_KEY"] = "test-key-not-real"
            process = MagicMock()
            process.poll.return_value = None
            with patch.object(openai_launch.subprocess, "Popen", return_value=process) as popen:
                r = c.post("/api/openai-runs", json={"rounds": 2})
                self.assertEqual(r.status_code, 201)
                self.assertEqual(r.json()["maxCostUsd"], 10.0)
                env = popen.call_args.kwargs["env"]
                self.assertEqual(env["OPENAI_MAX_COST_USD"], "10.0")
                self.assertEqual(env["OPENAI_RUN_ROUNDS"], "2")
                self.assertTrue(env["OPENAI_RUN_OUT"].startswith("experiments/openai-ignobel-"))
                self.assertEqual(c.post("/api/openai-runs", json={}).status_code, 409)
                self.assertTrue(c.get("/api/health").json()["openaiLaunch"]["running"])

    def test_preview_origin_allowlist(self):
        self.assertTrue(allowed_origin("localhost"))
        self.assertFalse(allowed_origin("x.preview.devinapps.com"))
        with patch.dict(os.environ, {"LAB_ALLOWED_HOSTS": ".preview.devinapps.com"}):
            self.assertTrue(allowed_origin("x.preview.devinapps.com"))
            self.assertFalse(allowed_origin("preview.devinapps.com.evil.example"))
            self.assertFalse(allowed_origin(None))


if __name__ == "__main__":
    unittest.main()
