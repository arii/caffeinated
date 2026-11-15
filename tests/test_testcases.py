import csv
import json
import os
import re
import shutil
import subprocess
import sys
import tempfile
import types
import unittest
from pathlib import Path
from unittest.mock import Mock, patch

import swarm
from boredom import descriptor_meter as meter
from testcases import sandbox
from testcases.bixbench_mini.evaluate import grade as grade_bixbench
from testcases.playworld_mini.evaluate import valid_frame as playworld_valid_frame

from testcases.ignobel_mini import evaluate as ignobel

REPO_ROOT = Path(__file__).resolve().parents[1]
TESTCASES = REPO_ROOT / "testcases"
DOCKER_DAEMON_AVAILABLE = sandbox.docker_available()
DOCKER_IMAGE_AVAILABLE = (
    DOCKER_DAEMON_AVAILABLE
    and subprocess.run(
        ["docker", "image", "inspect", "caffeinated-testcases:py311-v1"],
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
        check=False,
    ).returncode
    == 0
)
DOCKER_AVAILABLE = DOCKER_IMAGE_AVAILABLE
DOCKER_SKIP_REASON = "Docker daemon and caffeinated-testcases:py311-v1 image required"


def evaluate(task):
    return subprocess.run(
        [sys.executable, "evaluate.py"],
        cwd=TESTCASES / task,
        capture_output=True,
        text=True,
        timeout=600,
        check=False,
    )


def task_evaluation(task, source, **kwargs):
    return sandbox.evaluate_task(TESTCASES / task, source, **kwargs)


class EvaluatorTests(unittest.TestCase):
    def test_bixbench_candidate_answers_must_be_finite_numbers(self):
        key = {"q1": {"mode": "exact", "value": 1.0}}
        self.assertTrue(grade_bixbench(key, {"q1": 1})["q1"])
        self.assertTrue(grade_bixbench(key, {"q1": 1.0})["q1"])
        for answer in ("1", True, float("inf"), float("nan"), None):
            with self.subTest(answer=answer):
                self.assertFalse(grade_bixbench(key, {"q1": answer})["q1"])

    def test_playworld_candidate_frames_are_type_and_shape_checked(self):
        frame = [[0] * 5 for _ in range(5)]
        self.assertTrue(playworld_valid_frame(frame))
        self.assertFalse(playworld_valid_frame([[False] * 5 for _ in range(5)]))
        self.assertFalse(playworld_valid_frame([[0] * 4 for _ in range(5)]))
        invalid_value = [row[:] for row in frame]
        invalid_value[0][0] = 7
        self.assertFalse(playworld_valid_frame(invalid_value))

    def test_profiles_are_valid(self):
        for profile in TESTCASES.glob("*/boredom_profile.json"):
            with self.subTest(profile=profile.parent.name):
                loaded = meter.load_profile(profile)
                task = json.loads((profile.parent / "task.json").read_text(encoding="utf-8"))
                for edit in task.get("fake_edits", []):
                    meter.validate_descriptor(loaded, edit["descriptor"])
                for target in task.get("fake_targets", []):
                    meter.validate_descriptor(loaded, {"mechanism": target[1], "method": target[2]})

    @unittest.skipUnless(DOCKER_AVAILABLE, DOCKER_SKIP_REASON)
    def test_fake_edit_changes_each_task_score(self):
        for task_name in ("hadamard19", "bixbench_mini", "playworld_mini"):
            task_dir = TESTCASES / task_name
            config = json.loads((task_dir / "task.json").read_text(encoding="utf-8"))
            source = (task_dir / config["editable"]).read_text(encoding="utf-8")
            if task_name == "hadamard19":
                candidates = [
                    source.replace("CONSTRUCTION = 0", "CONSTRUCTION = 1", 1),
                    source.replace("OBJECTIVE = 0", "OBJECTIVE = 1", 1),
                ]
            else:
                index = 1 if task_name == "bixbench_mini" else 0
                edit = config["fake_edits"][index]
                candidates = [source.replace(edit["old"], edit["new"], 1)]
            baseline = sandbox.evaluate_task(task_dir, source)
            self.assertEqual(baseline["status"], "ok")
            candidate_results = [
                sandbox.evaluate_task(task_dir, candidate) for candidate in candidates
            ]
            self.assertTrue(
                any(
                    result["status"] == "ok" and result["loss"] != baseline["loss"]
                    for result in candidate_results
                ),
                task_name,
            )

    @unittest.skipUnless(DOCKER_AVAILABLE, DOCKER_SKIP_REASON)
    def test_hadamard_baseline_score_is_unchanged(self):
        result = evaluate("hadamard19")
        values = dict(re.findall(r"^([\w_]+): (.+)$", result.stdout, re.M))
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertAlmostEqual(float(values["loss"]), 0.0585, places=4)
        self.assertEqual(values["beats_reference"], "false")
        self.assertEqual(values["network_isolated"], "true")

    @unittest.skipUnless(DOCKER_AVAILABLE, DOCKER_SKIP_REASON)
    def test_bixbench_baseline_score_is_unchanged(self):
        result = evaluate("bixbench_mini")
        values = dict(re.findall(r"^([\w_]+): (.+)$", result.stdout, re.M))
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertAlmostEqual(float(values["score"]), 0.118, places=3)
        self.assertAlmostEqual(float(values["loss"]), 1 - 2 / 17, places=5)
        self.assertEqual(values["network_isolated"], "true")

    @unittest.skipUnless(DOCKER_AVAILABLE, DOCKER_SKIP_REASON)
    def test_playworld_baseline_score_is_unchanged(self):
        result = evaluate("playworld_mini")
        values = dict(re.findall(r"^([\w_]+): (.+)$", result.stdout, re.M))
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertAlmostEqual(float(values["score"]), 0.149, places=3)
        self.assertEqual(values["network_isolated"], "true")

    @unittest.skipUnless(DOCKER_AVAILABLE, DOCKER_SKIP_REASON)
    def test_hadamard_rejects_non_pm1_matrix(self):
        source = 'import json\nprint(json.dumps({"matrix": [[2] * 19] * 19}))\n'
        result = task_evaluation("hadamard19", source)
        self.assertEqual(result["status"], "crash")
        self.assertEqual(result["reason"], "invalid_output")
        self.assertEqual(result["score"], 0.0)
        self.assertIn("error:", result["stderr"])

    @unittest.skipUnless(DOCKER_AVAILABLE, DOCKER_SKIP_REASON)
    def test_hadamard_rejects_valid_output_followed_by_crash(self):
        source = (TESTCASES / "hadamard19" / "construct.py").read_text(
            encoding="utf-8"
        ) + "\nraise SystemExit(3)\n"
        result = task_evaluation("hadamard19", source)
        self.assertEqual(result["status"], "crash")
        self.assertEqual(result["reason"], "candidate_failed")
        self.assertIn("status 3", result["stderr"])
        self.assertEqual(result["score"], 0.0)

    @unittest.skipUnless(DOCKER_AVAILABLE, DOCKER_SKIP_REASON)
    def test_bixbench_candidate_cannot_read_answer_key_or_host_keys(self):
        task_dir = TESTCASES / "bixbench_mini"
        sandbox.prepare_task(
            task_dir,
            json.loads((task_dir / "task.json").read_text())["context_files"],
            required_files=(".cache/answers.json",),
        )
        answer_path = task_dir / ".cache" / "answers.json"
        paths = [
            ".cache/answers.json",
            "../testcases/bixbench_mini/.cache/answers.json",
            str(answer_path),
            str(REPO_ROOT / "swarm.py"),
        ]
        keys = (
            "EXA_API_KEY",
            "MODAL_TOKEN_ID",
            "PAST_API_KEY",
            "TINKER_API_KEY",
            "OPENAI_API_KEY",
            "GITHUB_TOKEN",
        )
        source = (
            "import json, os, sys\n"
            f"paths = {paths!r}\n"
            "readable = []\n"
            "existing = []\n"
            "for path in paths:\n"
            "    if os.path.exists(path): existing.append(path)\n"
            "    try:\n"
            "        with open(path, 'rb') as stream: stream.read(1)\n"
            "        readable.append(path)\n"
            "    except OSError:\n"
            "        pass\n"
            f"keys = {keys!r}\n"
            "print('ISOLATION=' + json.dumps({'existing': existing, 'readable': readable, "
            "'keys': {key: key in os.environ for key in keys}, "
            "'environment': sorted(os.environ)}), file=sys.stderr)\n"
            "print('{}')\n"
        )
        secret_env = {
            "EXA_API_KEY": "test-only",
            "MODAL_TOKEN_ID": "test-only",
            "PAST_API_KEY": "test-only",
            "TINKER_API_KEY": "test-only",
            "OPENAI_API_KEY": "test-only",
            "GITHUB_TOKEN": "test-only",
        }
        with patch.dict(os.environ, secret_env):
            result = task_evaluation("bixbench_mini", source)
        probe = json.loads(result["stderr"].split("ISOLATION=", 1)[1])
        self.assertEqual(result["status"], "ok")
        self.assertEqual(result["score"], 0.0)
        self.assertEqual(probe["existing"], [])
        self.assertEqual(probe["readable"], [])
        self.assertFalse(any(probe["keys"].values()))
        self.assertEqual(
            set(probe["environment"]),
            {"PATH", "HOME", "PYTHONHASHSEED", "LANG"},
        )
        self.assertTrue(answer_path.exists())

    @unittest.skipUnless(DOCKER_AVAILABLE, DOCKER_SKIP_REASON)
    def test_playworld_candidate_cannot_import_grader_or_reach_network(self):
        source = """
import json
from pathlib import Path
import socket
import sys

imports = {}
for name in ("env", "evaluate"):
    try:
        module = __import__(name)
        if name == "env":
            module.episode = lambda seed: None
        else:
            module.evaluate = lambda *args: 1.0
        imports[name] = True
    except ImportError:
        imports[name] = False
try:
    socket.create_connection(("1.1.1.1", 80), timeout=1)
    network_blocked = False
except OSError:
    network_blocked = True
episodes = json.loads(Path("/work/inputs.json").read_text())
probe = {
    "imports": imports,
    "network_blocked": network_blocked,
    "grader_files": [Path("/work/env.py").exists(), Path("/work/evaluate.py").exists()],
    "host_paths": [Path("/home/ubuntu/repos/caffeinated/testcases/playworld_mini/env.py").exists()],
    "hidden_future_frames": any("future_frames" in episode for episode in episodes),
}
print("ISOLATION=" + json.dumps(probe), file=sys.stderr)

def predict(context_frames, context_actions, future_actions):
    return []
"""
        result = task_evaluation("playworld_mini", source)
        probe = json.loads(result["stderr"].split("ISOLATION=", 1)[1])
        self.assertEqual(result["status"], "ok")
        self.assertEqual(result["score"], 0.0)
        self.assertFalse(any(probe["imports"].values()))
        self.assertTrue(probe["network_blocked"])
        self.assertEqual(probe["grader_files"], [False, False])
        self.assertEqual(probe["host_paths"], [False])
        self.assertFalse(probe["hidden_future_frames"])

    @unittest.skipUnless(DOCKER_AVAILABLE, DOCKER_SKIP_REASON)
    def test_busy_candidate_times_out_and_container_is_removed(self):
        result = task_evaluation("hadamard19", "while True:\n    pass\n", timeout_s=1)
        self.assertEqual(result["status"], "crash")
        self.assertEqual(result["reason"], "timeout")
        containers = subprocess.run(
            [
                "docker",
                "ps",
                "-aq",
                "--filter",
                "name=autoresearch-testcase-",
            ],
            capture_output=True,
            text=True,
            check=True,
        )
        self.assertEqual(containers.stdout.strip(), "")

    def test_docker_unavailable_fails_closed_without_host_execution(self):
        with tempfile.TemporaryDirectory() as directory:
            marker = Path(directory) / "host-executed"
            source = (
                "from pathlib import Path\n"
                f"Path({str(marker)!r}).write_text('executed')\n"
                "print('{\"matrix\": []}')\n"
            )
            with patch.object(sandbox.shutil, "which", return_value=None):
                result = task_evaluation("hadamard19", source)
            self.assertEqual(result["status"], "crash")
            self.assertEqual(result["reason"], "sandbox_unavailable")
            self.assertIn("sandbox_unavailable", result["stderr"])
            self.assertFalse(marker.exists())


class SwarmTaskModeTests(unittest.TestCase):
    def test_task_context_previews_inputs(self):
        with tempfile.TemporaryDirectory() as directory:
            task_dir = Path(directory)
            (task_dir / "data").mkdir()
            (task_dir / "questions.json").write_text('{"q1": "mean of a?"}', encoding="utf-8")
            (task_dir / "data" / "t.csv").write_text("a,b\n" + "1,2\n" * 50, encoding="utf-8")
            context = swarm.build_task_context(
                task_dir, ["questions.json", "data/t.csv", "missing.csv"]
            )
            self.assertIn("mean of a?", context)
            self.assertIn("a,b", context)
            self.assertLess(context.count("1,2"), 10)
            self.assertNotIn("missing.csv", context)

    def test_spreadsheet_preview_survives_missing_excel_engine(self):
        pandas = types.ModuleType("pandas")
        pandas.read_excel = Mock(side_effect=ImportError("Missing openpyxl"))
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory) / "data.xlsx"
            path.write_bytes(b"")
            with patch.dict(sys.modules, {"pandas": pandas}):
                preview = swarm.preview_file(path)
            self.assertIn("preview unavailable", preview)

    @unittest.skipUnless(DOCKER_AVAILABLE, DOCKER_SKIP_REASON)
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
                [
                    "git",
                    "-c",
                    "user.name=t",
                    "-c",
                    "user.email=t@example.test",
                    "commit",
                    "-q",
                    "-m",
                    "baseline",
                ],
                cwd=repo,
                check=True,
            )
            out_dir = Path(directory) / "out"
            env = {
                key: value
                for key, value in os.environ.items()
                if not any(
                    marker in key.upper() for marker in ("KEY", "TOKEN", "SECRET", "PASSWORD")
                )
            }
            env.update({"EXA": "off", "MEMORY_BACKEND": "local"})
            result = subprocess.run(
                [
                    sys.executable,
                    str(REPO_ROOT / "swarm.py"),
                    "--task",
                    "hadamard19",
                    "--rounds",
                    "1",
                    "--llm",
                    "fake",
                    "--repo",
                    str(repo),
                    "--out",
                    str(out_dir),
                    "--no-push",
                ],
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
                self.assertLess(float(row["loss"]), 0.2)
            self.assertTrue(list((out_dir / "runs").rglob("*.log")))


class IgnobelTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        task_dir = TESTCASES / "ignobel_mini"
        sandbox.prepare_task(
            task_dir,
            json.loads((task_dir / "task.json").read_text())["context_files"],
            required_files=("codebook.json", ".cache/replication/thanksgiving.csv"),
        )

    def claim(self, **overrides):
        base = {
            "dataset": "thanksgiving",
            "x": "v06",
            "x_level": "Yes",
            "y": "v04",
            "y_level": "Bread-based",
            "direction": "positive",
        }
        return {**base, **overrides}

    def test_split_is_disjoint_and_deterministic(self):
        task_dir = TESTCASES / "ignobel_mini"
        codebook = ignobel.load_codebook(task_dir)
        for name, dataset in codebook.items():
            with self.subTest(dataset=name):
                discovery = (task_dir / dataset["file"]).read_text(encoding="utf-8")
                replication = (task_dir / ".cache" / "replication" / f"{name}.csv").read_text(
                    encoding="utf-8"
                )
                self.assertEqual(dataset["n_discovery"], discovery.count("\n") - 1)
                self.assertGreater(replication.count("\n"), 30)
                self.assertNotEqual(discovery, replication)

    def test_replicated_claim_scores_and_wrong_direction_does_not(self):
        graded = ignobel.score_claim(self.claim())
        self.assertTrue(graded["replicated"])
        self.assertGreater(graded["score"], 0)
        self.assertIn("gravy", graded["headline"])
        self.assertEqual(ignobel.score_claim(self.claim(direction="negative"))["score"], 0.0)

    def test_non_replicating_claim_scores_zero(self):
        graded = ignobel.score_claim(self.claim(y="v05", y_level="Homemade"))
        self.assertFalse(graded["replicated"])
        self.assertEqual(graded["score"], 0.0)

    def test_trivial_claims_are_rejected(self):
        same_question = self.claim(x="v14", x_level="Macaroni and cheese", y="v15", y_level=None)
        codebook = ignobel.load_codebook(TESTCASES / "ignobel_mini")
        same_question["y_level"] = codebook["thanksgiving"]["variables"]["v15"]["levels"][-1]
        graded = ignobel.score_claim(same_question)
        self.assertIn("same survey question", graded["rejected"])
        self.assertEqual(graded["score"], 0.0)
        self.assertIn("same variable", ignobel.score_claim(self.claim(y="v06", y_level="No"))["rejected"])

    def test_malformed_claims_raise(self):
        for claim in (
            self.claim(dataset="nope"),
            self.claim(x="v999"),
            self.claim(x_level="Maybe"),
            self.claim(direction="up"),
        ):
            with self.subTest(claim=claim), self.assertRaises(ValueError):
                ignobel.score_claim(claim)

    def test_judge_rates_ignobel_rationales_above_ordinary_titles(self):
        judge = ignobel.load_judge(TESTCASES / "ignobel_mini")
        funny = ignobel.likeness("why woodpeckers do not get headaches", judge)
        dull = ignobel.likeness("a multicenter randomized trial of statin therapy outcomes", judge)
        self.assertGreater(funny, dull)

    @unittest.skipUnless(DOCKER_AVAILABLE, "Docker daemon required")
    def test_ignobel_baseline_score_is_unchanged(self):
        result = evaluate("ignobel_mini")
        values = dict(re.findall(r"^([\w_]+): (.+)$", result.stdout, re.M))
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertAlmostEqual(float(values["loss"]), 0.5089, places=3)
        self.assertEqual(values["replicated"], "true")
        self.assertEqual(values["beats_reference"], "false")
        self.assertEqual(values["network_isolated"], "true")

    @unittest.skipUnless(DOCKER_AVAILABLE, "Docker daemon required")
    def test_ignobel_candidate_cannot_read_replication_half_or_network(self):
        task_dir = TESTCASES / "ignobel_mini"
        hidden = task_dir / ".cache" / "replication" / "thanksgiving.csv"
        source = f"""
import json, os, socket, sys
paths = [".cache/replication/thanksgiving.csv", {str(hidden)!r}, "evaluate.py", "judge.json"]
try:
    socket.create_connection(("1.1.1.1", 80), timeout=1)
    blocked = False
except OSError:
    blocked = True
probe = {{"existing": [p for p in paths if os.path.exists(p)], "network_blocked": blocked}}
print("ISOLATION=" + json.dumps(probe), file=sys.stderr)
print(json.dumps({{"dataset": "thanksgiving", "x": "v06", "x_level": "Yes", "y": "v04",
                  "y_level": "Bread-based", "direction": "positive"}}))
"""
        result = task_evaluation("ignobel_mini", source)
        probe = json.loads(result["stderr"].split("ISOLATION=", 1)[1])
        self.assertEqual(result["status"], "ok")
        self.assertEqual(probe["existing"], [])
        self.assertTrue(probe["network_blocked"])
        self.assertTrue(hidden.exists())

    @unittest.skipUnless(DOCKER_AVAILABLE, "Docker daemon required")
    def test_ignobel_rejects_unparseable_claim(self):
        result = task_evaluation("ignobel_mini", "print('the gravy did it')\n")
        self.assertEqual(result["status"], "crash")
        self.assertEqual(result["reason"], "invalid_output")
        self.assertEqual(result["score"], 0.0)


if __name__ == "__main__":
    unittest.main()
