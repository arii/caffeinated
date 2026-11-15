import csv
import os
from pathlib import Path
import re
import shutil
import subprocess
import sys
import tempfile
import unittest

from boredom import descriptor_meter as meter

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
