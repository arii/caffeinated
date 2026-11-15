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
    def test_task_scout_settings_reach_prompts(self):
        from llm import render_prompt

        task = swarm.load_task("ignobel_mini")
        extra = {"recalled": "", "suggested_cells": "", "target_cell": "none", "sources": ""}
        prompt = render_prompt("SCOUT_QUERY", {**task["prompt_values"], **extra})
        self.assertIn("downloadable", prompt)
        self.assertNotIn("{scout_", prompt)
        self.assertIn("real data", render_prompt("SCOUT_PICK", {**task["prompt_values"], **extra}))
        default = swarm.load_task("hadamard19")["prompt_values"]
        for role in ("SCOUT_QUERY", "SCOUT_PICK"):
            plain = render_prompt(role, {**default, **extra})
            self.assertNotIn("Task-specific search focus", plain)
            self.assertNotIn("{scout_", plain)

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


class IgnobelPreregTests(unittest.TestCase):
    URL = "https://raw.githubusercontent.com/example/odd/main/socks.csv"

    def setUp(self):
        sys.path.insert(0, str(TESTCASES / "ignobel_mini"))
        import external
        import prepare

        self.external, self.prepare = external, prepare
        self.tmp = tempfile.TemporaryDirectory()
        self.task_dir = Path(self.tmp.name)
        for name in ("judge.json", "boredom_profile.json", "sources.json"):
            shutil.copy(TESTCASES / "ignobel_mini" / name, self.task_dir / name)
        rows = ["rownames,Socks lost per month,Dryer age (years),Favourite colour"]
        for i in range(200):
            rows.append(f"{i},{i % 7 + i % 3},{i % 7},{'red' if i % 2 else 'blue'}")
        self.csv = "\n".join(rows) + "\n"
        self.log = self.task_dir / "run" / "research_log.jsonl"
        self.log.parent.mkdir()
        self.log.write_text(
            "".join(
                json.dumps({"type": "source", "id": f"S{k}", "url": f"https://doi.org/10.1/socks{k}"}) + "\n"
                for k in (1, 2)
            )
        )
        for patcher in (
            patch.object(prepare, "fetch", return_value=self.csv),
            patch("socket.getaddrinfo", return_value=[(2, 1, 6, "", ("93.184.216.34", 443))]),
        ):
            patcher.start()
            self.addCleanup(patcher.stop)

    def tearDown(self):
        self.tmp.cleanup()

    def prereg(self, **overrides):
        dataset = {"url": self.URL, "x": "Dryer age (years)", "y": "Socks lost per month"}
        dataset.update(overrides.pop("dataset", {}))
        base = {
            "field": "everyday_physics",
            "study_type": "untested_prediction",
            "question": "Do older dryers eat more socks?",
            "hypothesis": "Sock loss rises with dryer age.",
            "mechanism": "Worn drum seals open gaps that trap small garments.",
            "citations": ["S1", "S2"],
            "dataset": dataset,
            "direction": "positive",
            "predicted_rho": 0.6,
        }
        return {**base, **overrides}

    def run_prereg(self, log=True, **overrides):
        return ignobel.evaluate_source(
            json.dumps(self.prereg(**overrides)),
            task_dir=self.task_dir,
            research_log=str(self.log) if log else None,
        )

    def test_confirmed_registration_scores(self):
        result = self.run_prereg()
        self.assertEqual(result["status"], "ok", result["stderr"])
        graded = result["graded"]
        self.assertTrue(graded["confirmed"], graded)
        self.assertGreater(graded["score"], 0)
        self.assertEqual(graded["citations"], ["https://doi.org/10.1/socks1", "https://doi.org/10.1/socks2"])
        self.assertIn('higher "Dryer age (years)" goes with higher "Socks lost per month"', graded["headline"])
        self.assertIn("candidate_executed: false", result["stdout"])

    def test_wrong_direction_and_poor_calibration(self):
        registry = self.log.parent / "ignobel_registry.json"
        self.assertFalse(self.run_prereg(direction="negative")["graded"]["confirmed"])
        registry.unlink()
        sharp = self.run_prereg()["graded"]
        vague = self.run_prereg(predicted_rho=0.05)["graded"]
        self.assertLess(vague["calibration"], sharp["calibration"])
        self.assertLess(vague["score"], sharp["score"])

    def test_citations_must_come_from_research_or_vetted_sources(self):
        for citations in (["S1"], ["S1", "S9"], ["S1", "https://doi.org/10.1/made-up"], ["S1", self.URL]):
            with self.subTest(citations=citations), patch.object(self.external, "doi_title", return_value=None):
                graded = self.run_prereg(citations=citations)["graded"]
                self.assertEqual(graded["score"], 0.0)
                self.assertIn("citations", graded["rejected"])
        real_doi = ["S1", "https://doi.org/10.1038/294580a0"]
        with patch.object(self.external, "doi_title", return_value="Sexual activity reduces lifespan of male fruitflies"):
            self.assertGreater(self.run_prereg(citations=real_doi)["graded"]["score"], 0)
        vetted = ["https://doi.org/10.1002/bdm.414", "https://doi.org/10.1046/j.1360-0443.2002.00163.x"]
        self.assertGreater(self.run_prereg(log=False, citations=vetted)["graded"]["score"], 0)

    def test_one_registered_test_per_dataset_per_run(self):
        self.assertGreater(self.run_prereg()["graded"]["score"], 0)
        self.assertGreater(self.run_prereg()["graded"]["score"], 0)
        for url in (self.URL, self.URL + "#again", self.URL + "?copy=1"):
            with self.subTest(url=url):
                other = self.run_prereg(dataset={"url": url, "x": "Favourite colour", "x_level": "red"})["graded"]
                self.assertEqual(other["score"], 0.0)
                self.assertIn("one confirmatory test per dataset", other["rejected"])

    def test_unknown_column_lists_usable_columns(self):
        result = self.run_prereg(dataset={"y": "Socks"})
        self.assertEqual(result["status"], "crash")
        self.assertEqual(result["reason"], "invalid_output")
        self.assertIn("Socks lost per month", result["stderr"])
        self.assertNotIn("rownames", result["stderr"])

    def test_invalid_registrations_fail_closed(self):
        for overrides in (
            {"field": "astrology"},
            {"study_type": "fishing"},
            {"predicted_rho": 0},
            {"hypothesis": ""},
            {"citations": [f"10.1/{k}" for k in range(9)]},
        ):
            with self.subTest(overrides=overrides):
                result = self.run_prereg(**overrides)
                self.assertEqual((result["status"], result["reason"]), ("crash", "invalid_output"))
        result = ignobel.evaluate_source("print('the gravy did it')", task_dir=self.task_dir)
        self.assertEqual((result["status"], result["score"]), ("crash", 0.0))

    def test_trivial_pair_scores_zero(self):
        graded = self.run_prereg(dataset={"x": "Socks lost per month"})["graded"]
        self.assertEqual(graded["score"], 0.0)
        self.assertIn("same variable", graded["rejected"])

    def test_url_policy(self):
        check = self.external.check_url
        check(self.URL)
        for url in (
            "http://raw.githubusercontent.com/a.csv",
            "https://127.0.0.1/a.csv",
            "https://localhost/a.csv",
            "https://evil.example.com/a.csv",
        ):
            with self.subTest(url=url), self.assertRaises(ValueError):
                check(url, research_log=self.task_dir / "missing.jsonl")
        log = self.task_dir / "cited.jsonl"
        log.write_text(json.dumps({"url": "https://lab.example.org/raw/odd.csv"}) + "\n")
        check("https://lab.example.org/raw/odd.csv", research_log=log)

    def test_minimum_rows_counts_both_halves(self):
        header = "a,b\n"
        for n, ok in ((60, True), (59, False)):
            body = "".join(f"{i % 5},{i % 3}\n" for i in range(n))
            url = f"https://raw.githubusercontent.com/example/odd/main/rows{n}.csv"
            with self.subTest(n=n), patch.object(self.prepare, "fetch", return_value=header + body):
                if ok:
                    self.assertEqual(self.external.ensure(url, self.task_dir)[1]["n_rows"], n)
                else:
                    with self.assertRaises(ValueError):
                        self.external.ensure(url, self.task_dir)

    def test_redirects_and_private_resolution_are_blocked(self):
        with patch("socket.getaddrinfo", return_value=[(2, 1, 6, "", ("10.0.0.5", 443))]):
            with self.assertRaises(ValueError):
                self.external.safe_url("https://raw.githubusercontent.com/a.csv")
        handler = self.prepare.CheckedRedirect()
        previous = self.prepare.URL_CHECK
        self.prepare.URL_CHECK = self.external.safe_url
        try:
            for target in ("http://raw.githubusercontent.com/a.csv", "https://169.254.169.254/latest"):
                with self.subTest(target=target), self.assertRaises(ValueError):
                    handler.redirect_request(None, None, 302, "Found", {}, target)
        finally:
            self.prepare.URL_CHECK = previous

    def test_dataset_is_frozen_and_split_deterministically(self):
        name, entry = self.external.ensure(self.URL, self.task_dir)
        first = (self.task_dir / entry["file"]).read_text()
        hidden = (self.task_dir / ".cache" / "replication" / f"{name}.csv").read_text()
        self.assertEqual(first.count("\n") + hidden.count("\n") - 2, 200)
        self.assertEqual(self.external.ensure(self.URL, self.task_dir)[1], entry)
        self.assertEqual({v["label"] for v in entry["variables"].values()}, {"Socks lost per month", "Dryer age (years)", "Favourite colour"})


class IgnobelTaskTests(unittest.TestCase):
    def test_fields_match_profile(self):
        fields = ignobel.load_fields()
        self.assertIn("food_science", fields)
        prereg = json.loads((TESTCASES / "ignobel_mini" / "prereg.json").read_text())
        self.assertIn(prereg["study_type"], fields[prereg["field"]])

    def test_judge_rates_ignobel_rationales_above_ordinary_titles(self):
        judge = ignobel.load_judge(TESTCASES / "ignobel_mini")
        funny = ignobel.likeness("why woodpeckers do not get headaches", judge)
        dull = ignobel.likeness("a multicenter randomized trial of statin therapy outcomes", judge)
        self.assertGreater(funny, dull)

    def test_ignobel_baseline_registration_confirms(self):
        result = evaluate("ignobel_mini")
        values = dict(re.findall(r"^([\w_ ]+): (.+)$", result.stdout, re.M))
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertAlmostEqual(float(values["loss"]), 0.6280, places=3)
        self.assertEqual(values["confirmed"], "true")
        self.assertEqual(values["citations"], "2 verified")


if __name__ == "__main__":
    unittest.main()
