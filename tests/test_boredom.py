import csv
import json
import os
from pathlib import Path
import subprocess
import sys
import tempfile
import unittest
from unittest.mock import patch

from boredom import (
    compute_meter,
    descriptor_from_message,
    descriptor_meter,
    is_disabled,
    jaccard_distance,
    ledger_events,
    parse_train_diff,
    read_results,
    representation_from_diff,
)


SCRIPT = Path(__file__).resolve().parents[1] / "boredom.py"
CONTROL_REPLAY = Path(__file__).parent / "fixtures" / "control_replay"


def make_row(commit, value, status="keep", diff_lines=8):
    return {
        "commit": commit,
        "val_bpb": value,
        "status": status,
        "diff_lines": diff_lines,
        "resolvable": True,
    }


class ComputeMeterTests(unittest.TestCase):
    def test_identical_diffs_and_stagnation_reach_breakout(self):
        rows = [make_row(f"c{i}", 1.0 if i == 0 else 1.0) for i in range(6)]
        meter = compute_meter(rows, [{"same"}] * len(rows), k=5)
        self.assertGreaterEqual(meter["B"], 0.85)
        self.assertEqual(meter["regime"], "PARADIGM_BREAKOUT")

    def test_diverse_diffs_and_steady_improvement_exploit(self):
        rows = [make_row(f"c{i}", 1.0 - i * 0.01) for i in range(6)]
        zs = [{f"change-{i}"} for i in range(len(rows))]
        meter = compute_meter(rows, zs, k=5)
        self.assertEqual(meter["novelty"], 1.0)
        self.assertEqual(meter["stagnation"], 0.0)
        self.assertEqual(meter["regime"], "EXPLOIT")

    def test_middle_case_enters_boredom_snap(self):
        rows = [make_row(f"c{i}", 1.0) for i in range(4)]
        meter = compute_meter(rows, [{"same"}] * len(rows), k=5)
        self.assertAlmostEqual(meter["B"], 0.72)
        self.assertEqual(meter["regime"], "BOREDOM_SNAP")

    def test_crash_heavy_window_raises_overload(self):
        rows = [
            make_row("baseline", 1.0),
            make_row("crash1", 0.0, status="crash"),
            make_row("crash2", 0.0, status="crash"),
            make_row("crash3", 0.0, status="crash"),
            make_row("attempt", 0.9),
        ]
        meter = compute_meter(rows, [{str(i)} for i in range(len(rows))], k=5)
        self.assertEqual(meter["overload"], 0.6)

    def test_warmup_forces_exploit(self):
        rows = [make_row("baseline", 1.0), make_row("stalled", 1.0)]
        meter = compute_meter(rows, [{"same"}, {"same"}], k=5)
        self.assertEqual(meter["regime"], "EXPLOIT")

    def test_sub_epsilon_best_updates_frontier_but_not_stagnation(self):
        rows = [
            make_row("baseline", 1.0),
            make_row("small-gain", 0.9998),
            make_row("new-best", 0.9997),
        ]
        meter = compute_meter(rows, [{"same"}] * len(rows), k=5, eps=0.0005)
        self.assertEqual(meter["best_val_bpb"], 0.9997)
        self.assertEqual(meter["best_commit"], "new-best")
        self.assertEqual(meter["frontier_stall"], 0)
        self.assertAlmostEqual(meter["stagnation"], 0.4)

    def test_disabled_forces_exploit_but_keeps_metrics(self):
        rows = [make_row(f"c{i}", 1.0) for i in range(6)]
        with patch.dict(os.environ, {"BOREDOM": "off"}):
            meter = compute_meter(
                rows, [{"same"}] * len(rows), k=5, disabled=is_disabled()
            )
        self.assertGreaterEqual(meter["B"], 0.85)
        self.assertEqual(meter["regime"], "EXPLOIT")
        self.assertTrue(meter["disabled"])


class DiffTokenTests(unittest.TestCase):
    def test_knob_assignments_collapse_but_structural_lines_stay_distinct(self):
        first, first_lines = parse_train_diff(
            "--- a/train.py\n+++ b/train.py\n"
            "-MATRIX_LR = 0.04\n+MATRIX_LR = 0.05\n"
        )
        second, second_lines = parse_train_diff(
            "--- a/train.py\n+++ b/train.py\n"
            "-WARMDOWN_RATIO = 0.5\n+WARMDOWN_RATIO = 0.7  # longer\n"
        )
        structural, structural_lines = parse_train_diff(
            "--- a/train.py\n+++ b/train.py\n"
            "-        x = self.attn(x)\n+        x = self.attention(x)\n"
        )
        self.assertEqual(jaccard_distance(first, second), 0.0)
        self.assertEqual(first_lines, 2)
        self.assertEqual(second_lines, 2)
        self.assertEqual(structural_lines, 2)
        self.assertGreater(jaccard_distance(first, structural), 0.0)
        self.assertEqual(jaccard_distance(set(), set()), 0.0)

    def test_scientific_and_exponent_literals_are_single_numeric_tokens(self):
        shingles, _ = parse_train_diff(
            "--- a/train.py\n+++ b/train.py\n"
            "-lr = 1e-3\n+width = 2**19\n"
        )
        self.assertIn("<num> * *", shingles)
        self.assertIn("* * <num>", shingles)


class DescriptorTests(unittest.TestCase):
    def setUp(self):
        self.profile = descriptor_meter.load_profile(
            Path(__file__).resolve().parents[1]
            / "boredom_meter/profiles/autoresearch_llm.json"
        )

    def test_descriptor_trailer_and_classifier_fallback(self):
        explicit = descriptor_from_message(
            "candidate\n\nDescriptor: optimizer/matrix_lr value=0.03",
            "ignored description",
            self.profile,
        )
        inferred = descriptor_from_message(
            "",
            "[EXPLOIT] increase matrix lr to 0.03",
            self.profile,
        )
        self.assertEqual(
            explicit,
            {
                "mechanism": "optimizer",
                "method": "matrix_lr",
                "params": {"value": 0.03},
            },
        )
        self.assertEqual(inferred, explicit)


class CliIntegrationTests(unittest.TestCase):
    def run_cli(
        self, repo, results, log, command, *extra, env=None, prior_art_off=True
    ):
        environment = os.environ.copy()
        environment.pop("BOREDOM", None)
        environment.pop("GROUNDING", None)
        environment.pop("EXA", None)
        environment.pop("PRIOR_ART", None)
        if prior_art_off:
            environment["PRIOR_ART"] = "off"
        if env:
            environment.update(env)
        return subprocess.run(
            [
                sys.executable,
                str(SCRIPT),
                command,
                "--repo",
                str(repo),
                "--results",
                str(results),
                "--log",
                str(log),
                *extra,
            ],
            text=True,
            capture_output=True,
            check=False,
            env=environment,
        )

    def write_results(self, path, rows):
        with path.open("w", newline="", encoding="utf-8") as results_file:
            writer = csv.writer(results_file, delimiter="\t")
            writer.writerow(["commit", "val_bpb", "memory_gb", "status", "description"])
            writer.writerows(rows)

    def test_status_and_gate_regimes_in_temporary_git_repo(self):
        with tempfile.TemporaryDirectory() as directory:
            repo = Path(directory) / "repo"
            repo.mkdir()
            subprocess.run(["git", "init", "-q", str(repo)], check=True)
            train_file = repo / "train.py"
            train_file.write_text("\n".join(["VALUE = 0"] * 20) + "\n", encoding="utf-8")

            def commit(message):
                subprocess.run(["git", "add", "train.py"], cwd=repo, check=True)
                subprocess.run(
                    [
                        "git",
                        "-c",
                        "user.name=Test",
                        "-c",
                        "user.email=test@example.com",
                        "commit",
                        "-m",
                        message,
                    ],
                    cwd=repo,
                    check=True,
                    capture_output=True,
                    text=True,
                )
                return subprocess.check_output(
                    ["git", "rev-parse", "--short", "HEAD"], cwd=repo, text=True
                ).strip()

            subprocess.run(["git", "add", "train.py"], cwd=repo, check=True)
            subprocess.run(
                [
                    "git",
                    "-c",
                    "user.name=Test",
                    "-c",
                    "user.email=test@example.com",
                    "commit",
                    "-m",
                    "initial",
                ],
                cwd=repo,
                check=True,
                capture_output=True,
                text=True,
            )

            commits = []
            for block in range(5):
                lines = train_file.read_text(encoding="utf-8").splitlines()
                lines[block * 4 : block * 4 + 4] = ["VALUE = 1"] * 4
                train_file.write_text("\n".join(lines) + "\n", encoding="utf-8")
                commits.append(
                    commit("experiment\n\nDescriptor: optimizer/matrix_lr")
                )

            results = Path(directory) / "results.tsv"
            log = Path(directory) / "boredom_log.jsonl"
            self.write_results(
                results,
                [
                    (sha, "1.000000", "1.0", "keep", "experiment")
                    for sha in commits
                ],
            )

            status = self.run_cli(repo, results, log, "status", "--json")
            self.assertEqual(status.returncode, 0, status.stderr)
            record = json.loads(status.stdout)
            self.assertEqual(record["regime"], "BOREDOM_SNAP")
            self.assertEqual(record["n_rows"], 5)
            profile_version = descriptor_meter.load_profile(
                SCRIPT.parent / "boredom_meter/profiles/autoresearch_llm.json"
            )["version"]
            self.assertEqual(record["profile_version"], profile_version)
            self.assertEqual(record["descriptor"]["mechanism"], "optimizer")
            self.assertEqual(len(record["ledger_sha256"]), 64)
            self.assertEqual(len(record["profile_sha256"]), 64)
            print("integration fixture status --json:", status.stdout.strip())

            rejected = self.run_cli(
                repo, results, log, "gate", "--commit", commits[4]
            )
            self.assertEqual(rejected.returncode, 1, rejected.stdout)
            self.assertIn("REJECT", rejected.stdout)

            self.write_results(
                results,
                [
                    (sha, f"{0.5 - index * 0.01:.6f}", "1.0", "keep", "experiment")
                    for index, sha in enumerate(commits[:3])
                ],
            )
            accepted = self.run_cli(repo, results, log, "gate", "--commit", commits[4])
            self.assertEqual(accepted.returncode, 0, accepted.stdout)
            self.assertIn("PASS", accepted.stdout)

            logged_gates = [
                json.loads(line)
                for line in log.read_text(encoding="utf-8").splitlines()
                if json.loads(line).get("type") == "gate"
            ]
            self.assertEqual([entry["pass"] for entry in logged_gates], [False, True])
            self.assertEqual(logged_gates[0]["descriptor"]["mechanism"], "optimizer")
            self.assertEqual(logged_gates[0]["profile_version"], profile_version)
            self.assertEqual(len(logged_gates[0]["ledger_sha256"]), 64)
            self.assertEqual(len(logged_gates[0]["profile_sha256"]), 64)

    def test_gate_requires_research_grounding_only_in_snap_and_breakout(self):
        with tempfile.TemporaryDirectory() as directory:
            repo = Path(directory) / "repo"
            repo.mkdir()
            subprocess.run(["git", "init", "-q", str(repo)], check=True)
            train_file = repo / "train.py"
            train_file.write_text("\n".join(["VALUE = 0"] * 20) + "\n", encoding="utf-8")

            def commit(message, value, descriptor=None):
                if descriptor is not None:
                    message = f"{message}\n\nDescriptor: {descriptor}"
                train_file.write_text(
                    "\n".join([f"VALUE = {value}"] * 20) + "\n", encoding="utf-8"
                )
                subprocess.run(["git", "add", "train.py"], cwd=repo, check=True)
                subprocess.run(
                    [
                        "git",
                        "-c",
                        "user.name=Test",
                        "-c",
                        "user.email=test@example.com",
                        "commit",
                        "-m",
                        message,
                    ],
                    cwd=repo,
                    check=True,
                    capture_output=True,
                    text=True,
                )
                return subprocess.check_output(
                    ["git", "rev-parse", "--short", "HEAD"], cwd=repo, text=True
                ).strip()

            subprocess.run(["git", "add", "train.py"], cwd=repo, check=True)
            subprocess.run(
                [
                    "git",
                    "-c",
                    "user.name=Test",
                    "-c",
                    "user.email=test@example.com",
                    "commit",
                    "-m",
                    "initial",
                ],
                cwd=repo,
                check=True,
                capture_output=True,
                text=True,
            )
            history_commits = [
                commit("experiment", value, "optimizer/matrix_lr")
                for value in range(1, 7)
            ]
            no_source_commit = commit(
                "candidate without source", 7, "architecture/depth"
            )
            unknown_source_commit = commit(
                "candidate with unknown source\n\nSource: S9", 8, "architecture/depth"
            )
            valid_source_commit = commit(
                "candidate with valid source\n\nSource: S1, S2",
                9,
                "architecture/depth",
            )
            missing_descriptor_commit = commit(
                "candidate missing descriptor", 10
            )

            results = Path(directory) / "results.tsv"
            results.write_text("", encoding="utf-8")
            self.write_results(
                results,
                [
                    (sha, "1.000000", "1.0", "keep", "experiment")
                    for sha in history_commits
                ],
            )
            research_log = Path(directory) / "research_log.jsonl"
            research_log.write_text(
                '{"type":"source","id":"S1","title":"Known source"}\n'
                '{"type":"source","id":"S2","title":"Second known source"}\n',
                encoding="utf-8",
            )
            gate_log = Path(directory) / "boredom_log.jsonl"

            def gate(commit_id, *extra, env=None):
                return self.run_cli(
                    repo,
                    results,
                    gate_log,
                    "gate",
                    "--commit",
                    commit_id,
                    "--research-log",
                    str(research_log),
                    "--min-lines",
                    "0",
                    "--delta-min",
                    "0",
                    "--failed-delta",
                    "0",
                    *extra,
                    env=env,
                )

            ungrounded = gate(no_source_commit)
            self.assertEqual(ungrounded.returncode, 1, ungrounded.stdout)
            self.assertIn("ungrounded: no Source trailer", ungrounded.stdout)

            unknown = gate(unknown_source_commit)
            self.assertEqual(unknown.returncode, 1, unknown.stdout)
            self.assertIn("ungrounded: unknown id S9", unknown.stdout)

            grounded = gate(valid_source_commit)
            self.assertEqual(grounded.returncode, 0, grounded.stdout)

            missing_descriptor = gate(missing_descriptor_commit)
            self.assertEqual(missing_descriptor.returncode, 1, missing_descriptor.stdout)
            self.assertIn("no-descriptor", missing_descriptor.stdout)

            grounding_disabled = gate(no_source_commit, env={"GROUNDING": "off"})
            self.assertEqual(grounding_disabled.returncode, 0, grounding_disabled.stdout)

            self.write_results(
                results,
                [
                    (sha, "1.000000", "1.0", "keep", "experiment")
                    for sha in history_commits
                ],
            )
            breakout = gate(no_source_commit)
            self.assertEqual(breakout.returncode, 1, breakout.stdout)
            self.assertIn("regime=PARADIGM_BREAKOUT", breakout.stdout)
            self.assertIn("ungrounded: no Source trailer", breakout.stdout)

            self.write_results(
                results,
                [
                    (sha, f"{1.0 - index * 0.1:.6f}", "1.0", "keep", "experiment")
                    for index, sha in enumerate(history_commits)
                ],
            )
            exploit = gate(no_source_commit)
            self.assertEqual(exploit.returncode, 0, exploit.stdout)
            self.assertIn("regime=EXPLOIT", exploit.stdout)

            self.write_results(
                results,
                [
                    (sha, "1.000000", "1.0", "keep", "experiment")
                    for sha in history_commits
                ],
            )
            boredom_disabled = gate(no_source_commit, env={"BOREDOM": "off"})
            self.assertEqual(boredom_disabled.returncode, 0, boredom_disabled.stdout)

            gate_records = [
                json.loads(line)
                for line in gate_log.read_text(encoding="utf-8").splitlines()
            ]
            valid_record = next(
                record
                for record in gate_records
                if record["candidate_commit"] == valid_source_commit
            )
            self.assertEqual(valid_record["sources"], ["S1", "S2"])
            self.assertTrue(valid_record["grounded"])
            self.assertTrue(gate_records[-1]["disabled"])

    def test_gate_prior_art_and_persona_trailers(self):
        with tempfile.TemporaryDirectory() as directory:
            repo = Path(directory) / "repo"
            repo.mkdir()
            subprocess.run(["git", "init", "-q", str(repo)], check=True)
            train_file = repo / "train.py"

            def commit(message, value):
                train_file.write_text(
                    "\n".join([f"VALUE = {value}"] * 20) + "\n", encoding="utf-8"
                )
                subprocess.run(["git", "add", "train.py"], cwd=repo, check=True)
                subprocess.run(
                    [
                        "git",
                        "-c",
                        "user.name=Test",
                        "-c",
                        "user.email=test@example.com",
                        "commit",
                        "-m",
                        message,
                    ],
                    cwd=repo,
                    check=True,
                    capture_output=True,
                    text=True,
                )
                return subprocess.check_output(
                    ["git", "rev-parse", "--short", "HEAD"], cwd=repo, text=True
                ).strip()

            train_file.write_text("\n".join(["VALUE = 0"] * 20) + "\n")
            subprocess.run(["git", "add", "train.py"], cwd=repo, check=True)
            subprocess.run(
                [
                    "git",
                    "-c",
                    "user.name=Test",
                    "-c",
                    "user.email=test@example.com",
                    "commit",
                    "-m",
                    "initial",
                ],
                cwd=repo,
                check=True,
                capture_output=True,
                text=True,
            )
            history = [
                commit("history\n\nDescriptor: optimizer/matrix_lr", value)
                for value in range(1, 7)
            ]
            missing = commit("[BREAKOUT] missing prior art\n\nSource: S1", 7)
            unknown = commit(
                "[BREAKOUT] unknown prior art\n\nSource: S1\nPrior-art: S9", 8
            )
            valid_source = commit(
                "[BREAKOUT] cited source\n\nSource: S1\nPrior-art: S1\n"
                "Lead: lead-1\nAgent: worker-1",
                9,
            )
            valid_query = commit(
                "[BREAKOUT] no prior art found\n\nSource: S1\n"
                "Prior-art: none-found Q1",
                10,
            )
            unknown_query = commit(
                "[BREAKOUT] unknown query\n\nSource: S1\n"
                "Prior-art: none-found Q9",
                11,
            )

            results = Path(directory) / "results.tsv"
            self.write_results(
                results,
                [
                    (sha, "1.000000", "1.0", "keep", "history")
                    for sha in history
                ],
            )
            research_log = Path(directory) / "research_log.jsonl"
            research_log.write_text(
                '{"type":"source","id":"S1","title":"known"}\n'
                '{"type":"query","id":"Q1","purpose":"prior-art"}\n',
                encoding="utf-8",
            )
            gate_log = Path(directory) / "boredom_log.jsonl"

            def gate(commit_id, prior_art=None):
                environment = {"BOREDOM": "off"}
                if prior_art:
                    environment["PRIOR_ART"] = "required"
                return self.run_cli(
                    repo,
                    results,
                    gate_log,
                    "gate",
                    "--commit",
                    commit_id,
                    "--research-log",
                    str(research_log),
                    "--min-lines",
                    "0",
                    "--delta-min",
                    "0",
                    "--failed-delta",
                    "0",
                    env=environment,
                )

            missing_result = gate(missing, prior_art=True)
            self.assertEqual(missing_result.returncode, 1, missing_result.stdout)
            self.assertIn("no-prior-art: missing Prior-art trailer", missing_result.stdout)

            unknown_result = gate(unknown, prior_art=True)
            self.assertEqual(unknown_result.returncode, 1, unknown_result.stdout)
            self.assertIn("no-prior-art: unknown id S9", unknown_result.stdout)

            source_result = gate(valid_source, prior_art=True)
            self.assertEqual(source_result.returncode, 0, source_result.stdout)

            query_result = gate(valid_query, prior_art=True)
            self.assertEqual(query_result.returncode, 0, query_result.stdout)

            unknown_query_result = gate(unknown_query, prior_art=True)
            self.assertEqual(unknown_query_result.returncode, 1, unknown_query_result.stdout)
            self.assertIn("no-prior-art: unknown id Q9", unknown_query_result.stdout)

            default_result = self.run_cli(
                repo,
                results,
                gate_log,
                "gate",
                "--commit",
                missing,
                "--research-log",
                str(research_log),
                "--min-lines",
                "0",
                "--delta-min",
                "0",
                "--failed-delta",
                "0",
                env={"BOREDOM": "off"},
                prior_art_off=False,
            )
            self.assertEqual(default_result.returncode, 1, default_result.stdout)
            self.assertIn(
                "no-prior-art: missing Prior-art trailer", default_result.stdout
            )
            for override in ("EXA", "GROUNDING", "PRIOR_ART"):
                disabled_by = self.run_cli(
                    repo,
                    results,
                    gate_log,
                    "gate",
                    "--commit",
                    missing,
                    "--research-log",
                    str(research_log),
                    "--min-lines",
                    "0",
                    "--delta-min",
                    "0",
                    "--failed-delta",
                    "0",
                    env={"BOREDOM": "off", override: "off"},
                    prior_art_off=False,
                )
                self.assertEqual(disabled_by.returncode, 0, disabled_by.stdout)

            legacy_result = gate(missing)
            self.assertEqual(legacy_result.returncode, 0, legacy_result.stdout)

            disabled_result = self.run_cli(
                repo,
                results,
                gate_log,
                "gate",
                "--commit",
                missing,
                "--research-log",
                str(research_log),
                "--min-lines",
                "0",
                "--delta-min",
                "0",
                "--failed-delta",
                "0",
                env={"PRIOR_ART": "required", "BOREDOM": "off"},
            )
            self.assertEqual(disabled_result.returncode, 1, disabled_result.stdout)
            self.assertIn("no-prior-art: missing Prior-art trailer", disabled_result.stdout)
            self.assertNotIn("no-descriptor", disabled_result.stdout)

            records = [
                json.loads(line)
                for line in gate_log.read_text(encoding="utf-8").splitlines()
            ]
            source_record = next(
                record
                for record in records
                if record.get("candidate_commit") == valid_source
            )
            query_record = next(
                record
                for record in records
                if record.get("candidate_commit") == valid_query
            )
            self.assertEqual(source_record["prior_art"], ["S1"])
            self.assertEqual(source_record["lead"], "lead-1")
            self.assertEqual(source_record["agent"], "worker-1")
            self.assertEqual(query_record["prior_art"], ["Q1"])


class ControlReplayTests(unittest.TestCase):
    def test_control_replay_reaches_snap(self):
        rows = read_results(CONTROL_REPLAY / "results.tsv")
        profile = descriptor_meter.load_profile(
            Path(__file__).resolve().parents[1]
            / "boredom_meter/profiles/autoresearch_llm.json"
        )
        events = ledger_events(rows, None, profile)
        trajectory = []
        first_snap = None
        for run_index in range(1, len(rows)):
            metrics = descriptor_meter.status(profile, events[: run_index + 1])
            trajectory.append((run_index, metrics["B"], metrics["regime"]))
            if first_snap is None and metrics["regime"] != "EXPLOIT":
                first_snap = run_index

        print("control replay B/regime (post-baseline run index):")
        for run_index, score, regime in trajectory:
            print(f"{run_index:>2} {score:.6f} {regime}")

        self.assertEqual(len(rows), 26)
        self.assertIsNotNone(first_snap)
        self.assertGreaterEqual(first_snap, 5)
        self.assertLessEqual(first_snap, 12)
        self.assertTrue(
            all(
                regime != "EXPLOIT"
                for run_index, _, regime in trajectory
                if 11 <= run_index <= 14
            )
        )
        self.assertEqual(
            next(regime for run_index, _, regime in trajectory if run_index == 16),
            "EXPLOIT",
        )


if __name__ == "__main__":
    unittest.main()
