import csv
import os
from pathlib import Path
import re
import shutil
import subprocess
import sys
import tempfile
import unittest
from unittest.mock import patch

from boredom import descriptor_meter as meter
import swarm

REPO_ROOT = Path(__file__).resolve().parents[1]
TESTCASES = REPO_ROOT / "testcases"


def evaluate(task, cwd=None):
    result = subprocess.run(
        [sys.executable, "evaluate.py"],
        cwd=cwd or TESTCASES / task,
        capture_output=True,
        text=True,
        timeout=300,
        check=False,
    )
    values = dict(re.findall(r"^(\w+): (\S+)$", result.stdout, re.M))
    return result, values


class EvaluatorTests(unittest.TestCase):
    def test_profiles_are_valid(self):
        for profile in TESTCASES.glob("*/boredom_profile.json"):
            with self.subTest(profile=profile.parent.name):
                meter.load_profile(profile)

    def test_hadamard_baseline_scores_below_known_optimum(self):
        result, values = evaluate("hadamard19")
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertEqual(values["beats_record"], "false")
        self.assertGreater(float(values["loss"]), 0.0)
        self.assertLess(float(values["loss"]), 0.2)

    def test_hadamard_rejects_non_pm1_matrix(self):
        with tempfile.TemporaryDirectory() as directory:
            work = Path(directory) / "hadamard19"
            shutil.copytree(TESTCASES / "hadamard19", work)
            (work / "construct.py").write_text(
                'import json\nprint(json.dumps({"matrix": [[2] * 19] * 19}))\n',
                encoding="utf-8",
            )
            result, values = evaluate("hadamard19", cwd=work)
            self.assertIn("error:", result.stderr)
            self.assertEqual(float(values["score"]), 0.0)

    def test_hadamard_rejects_valid_output_followed_by_crash(self):
        with tempfile.TemporaryDirectory() as directory:
            work = Path(directory) / "hadamard19"
            shutil.copytree(TESTCASES / "hadamard19", work)
            source = (work / "construct.py").read_text(encoding="utf-8")
            (work / "construct.py").write_text(
                source + "\nraise SystemExit(3)\n", encoding="utf-8"
            )
            result, values = evaluate("hadamard19", cwd=work)
            self.assertIn("exited 3", result.stderr)
            self.assertEqual(float(values["score"]), 0.0)

    def test_playworld_baseline_and_import_guard(self):
        result, values = evaluate("playworld_mini")
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertAlmostEqual(float(values["score"]), 0.14875, places=4)
        with tempfile.TemporaryDirectory() as directory:
            work = Path(directory) / "playworld_mini"
            shutil.copytree(TESTCASES / "playworld_mini", work)
            (work / "world_model.py").write_text(
                "import env\n\ndef predict(c, a, f):\n    return []\n",
                encoding="utf-8",
            )
            result, values = evaluate("playworld_mini", cwd=work)
            self.assertIn("error:", result.stderr)
            self.assertEqual(float(values["score"]), 0.0)


class SwarmTaskModeTests(unittest.TestCase):
    def tearDown(self):
        swarm.TASK, swarm.TARGET_FILE = None, "train.py"

    def make_task(self, directory, evaluate_source):
        task_dir = Path(directory) / "task" / "slow"
        task_dir.mkdir(parents=True)
        (task_dir / "evaluate.py").write_text(evaluate_source, encoding="utf-8")
        repo = Path(directory) / "repo"
        (repo / "testcases" / "slow").mkdir(parents=True)
        (repo / "testcases" / "slow" / "solve.py").write_text("X = 1\n", encoding="utf-8")
        subprocess.run(["git", "init", "-q", str(repo)], check=True)
        subprocess.run(["git", "add", "-A"], cwd=repo, check=True)
        subprocess.run(
            ["git", "-c", "user.name=t", "-c", "user.email=t@example.test",
             "commit", "-q", "-m", "baseline"],
            cwd=repo,
            check=True,
        )
        swarm.TASK = {"name": "slow", "dir": task_dir, "editable": "solve.py"}
        swarm.TARGET_FILE = "testcases/slow/solve.py"
        return repo

    def test_local_evaluation_timeout_is_a_crash_and_hides_secrets(self):
        with tempfile.TemporaryDirectory() as directory:
            repo = self.make_task(
                directory,
                "import os, time\nprint('key_seen:', 'EXA_API_KEY' in os.environ)\n"
                "time.sleep(float(os.environ.get('SLEEP', '0')))\nprint('loss: 0.5')\n",
            )
            with patch.dict(os.environ, {"EXA_API_KEY": "x", "SLEEP": "0"}):
                ok = swarm.local_task_result(repo, "HEAD", Path(directory) / "runs")
            self.assertEqual((ok["status"], ok["val_bpb"]), ("ok", 0.5))
            log = (Path(directory) / "runs" / "HEAD.log").read_text(encoding="utf-8")
            self.assertIn("key_seen: False", log)
            with patch.dict(os.environ, {"SLEEP": "5"}), patch.object(
                swarm, "LOCAL_EVAL_TIMEOUT", 1
            ):
                slow = swarm.local_task_result(repo, "HEAD", Path(directory) / "runs")
            self.assertEqual((slow["status"], slow["val_bpb"]), ("crash", None))

    def test_task_context_previews_inputs(self):
        with tempfile.TemporaryDirectory() as directory:
            task_dir = Path(directory)
            (task_dir / "data").mkdir()
            (task_dir / "questions.json").write_text('{"q1": "mean of a?"}', encoding="utf-8")
            (task_dir / "data" / "t.csv").write_text(
                "a,b\n" + "1,2\n" * 50, encoding="utf-8"
            )
            context = swarm.build_task_context(
                task_dir, ["questions.json", "data/t.csv", "missing.csv"]
            )
            self.assertIn("mean of a?", context)
            self.assertIn("a,b", context)
            self.assertLess(context.count("1,2"), 10)
            self.assertNotIn("missing.csv", context)

    def test_fake_llm_swarm_scores_candidates_with_task_evaluator(self):
        with tempfile.TemporaryDirectory() as directory:
            repo = Path(directory) / "repo"
            (repo / "testcases" / "hadamard19").mkdir(parents=True)
            shutil.copy2(
                TESTCASES / "hadamard19" / "construct.py",
                repo / "testcases" / "hadamard19" / "construct.py",
            )
            subprocess.run(["git", "init", "-q", str(repo)], check=True)
            subprocess.run(["git", "add", "-A"], cwd=repo, check=True)
            subprocess.run(
                ["git", "-c", "user.name=t", "-c", "user.email=t@example.test",
                 "commit", "-q", "-m", "baseline"],
                cwd=repo,
                check=True,
            )
            out_dir = Path(directory) / "out"
            env = {
                key: value
                for key, value in os.environ.items()
                if not key.startswith(("PAST_API_KEY", "OPENAI_API_KEY"))
            }
            env.update({"EXA": "off", "MEMORY_BACKEND": "local"})
            result = subprocess.run(
                [sys.executable, str(REPO_ROOT / "swarm.py"), "--task", "hadamard19",
                 "--rounds", "1", "--llm", "fake", "--repo", str(repo),
                 "--out", str(out_dir)],
                cwd=REPO_ROOT,
                env=env,
                capture_output=True,
                text=True,
                timeout=600,
                check=False,
            )
            self.assertEqual(result.returncode, 0, result.stderr + result.stdout)
            with (out_dir / "results.tsv").open(newline="", encoding="utf-8") as stream:
                rows = list(csv.DictReader(stream, delimiter="\t"))
            self.assertEqual(rows[0]["description"], "baseline")
            self.assertEqual(len(rows), 5)
            for row in rows:
                self.assertLess(float(row["val_bpb"]), 0.2)
            self.assertTrue(list((out_dir / "runs").rglob("*.log")))


if __name__ == "__main__":
    unittest.main()
