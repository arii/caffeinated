import os
import subprocess
import tempfile
import unittest
from pathlib import Path
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
            self.assertEqual(c.post("/api/openai-runs", json={"minutes": 31}).status_code, 422)
            os.environ["OPENAI_API_KEY"] = "test-key-not-real"
            process = MagicMock(pid=4242)
            process.poll.return_value = None
            with (
                patch.object(openai_launch.subprocess, "Popen", return_value=process) as popen,
                patch.object(openai_launch.os, "killpg") as killpg,
            ):
                r = c.post("/api/openai-runs", json={"minutes": 2})
                self.assertEqual(r.status_code, 201)
                self.assertEqual(r.json()["maxCostUsd"], 10.0)
                env = popen.call_args.kwargs["env"]
                self.assertEqual(env["OPENAI_MAX_COST_USD"], "10.0")
                self.assertEqual(env["OPENAI_RUN_MINUTES"], "2")
                self.assertTrue(env["OPENAI_RUN_OUT"].startswith("experiments/openai-ignobel-"))
                self.assertEqual(c.post("/api/openai-runs", json={}).status_code, 409)
                self.assertTrue(c.get("/api/health").json()["openaiLaunch"]["running"])
                c.__exit__(None, None, None)
                killpg.assert_called_once_with(4242, openai_launch.signal.SIGTERM)

    def test_stop_writes_marker_only_for_current_run(self):
        with tempfile.TemporaryDirectory() as d:
            root = Path(d)
            launcher = openai_launch.Launcher(root / "logs", root=root)
            launcher.current = "openai-ignobel-test"
            launcher.process = MagicMock()
            launcher.process.poll.return_value = None
            self.assertTrue(launcher.stop()["stopping"])
            self.assertTrue((root / "experiments/openai-ignobel-test/stop_requested").exists())

    def test_local_env_file_cannot_raise_launcher_budget(self):
        with tempfile.TemporaryDirectory() as d:
            root = Path(d)
            (root / "scripts").mkdir()
            script = root / "scripts" / "run_openai_ignobel.sh"
            body = openai_launch.SCRIPT.read_text().split("exec .venv/bin/python")[0]
            script.write_text(body + 'echo "$OPENAI_MAX_COST_USD $OPENAI_API_KEY"\n')
            (root / ".env.openai.local").write_text(
                "OPENAI_MAX_COST_USD=500\nOPENAI_API_KEY=from-file\n"
            )
            env = {**os.environ, "OPENAI_MAX_COST_USD": "20.0"}
            env.pop("OPENAI_API_KEY", None)
            out = subprocess.run(
                ["bash", str(script)], env=env, capture_output=True, text=True, check=True
            ).stdout
            self.assertEqual(out.strip(), "20.0 from-file")

    def test_preview_origin_allowlist(self):
        self.assertTrue(allowed_origin("localhost"))
        self.assertFalse(allowed_origin("x.preview.devinapps.com"))
        with patch.dict(os.environ, {"LAB_ALLOWED_HOSTS": ".preview.devinapps.com"}):
            self.assertTrue(allowed_origin("x.preview.devinapps.com"))
            self.assertFalse(allowed_origin("preview.devinapps.com.evil.example"))
            self.assertFalse(allowed_origin(None))


if __name__ == "__main__":
    unittest.main()
