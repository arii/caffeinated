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
    is_disabled,
    jaccard_distance,
    parse_train_diff,
)


SCRIPT = Path(__file__).resolve().parents[1] / "boredom.py"


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
    def test_numeric_value_tweaks_have_identical_shingles(self):
        first, _ = parse_train_diff(
            "--- a/train.py\n+++ b/train.py\n"
            "-MATRIX_LR = 0.04\n+MATRIX_LR = 0.05\n"
        )
        second, _ = parse_train_diff(
            "--- a/train.py\n+++ b/train.py\n"
            "-MATRIX_LR = 0.04\n+MATRIX_LR = 0.03\n"
        )
        different_constant, _ = parse_train_diff(
            "--- a/train.py\n+++ b/train.py\n"
            "-WEIGHT_DECAY = 0.04\n+WEIGHT_DECAY = 0.05\n"
        )
        self.assertEqual(jaccard_distance(first, second), 0.0)
        self.assertGreater(jaccard_distance(first, different_constant), 0.0)

    def test_scientific_and_exponent_literals_are_single_numeric_tokens(self):
        shingles, _ = parse_train_diff(
            "--- a/train.py\n+++ b/train.py\n"
            "-LR = 1e-3\n+WIDTH = 2**19\n"
        )
        self.assertIn("<num> * *", shingles)
        self.assertIn("* * <num>", shingles)


class CliIntegrationTests(unittest.TestCase):
    def run_cli(self, repo, results, log, command, *extra):
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
                commits.append(commit("experiment"))

            results = Path(directory) / "results.tsv"
            log = Path(directory) / "boredom_log.jsonl"
            self.write_results(
                results,
                [
                    (sha, "1.000000", "1.0", "keep", "experiment")
                    for sha in commits[:4]
                ],
            )

            status = self.run_cli(repo, results, log, "status", "--json")
            self.assertEqual(status.returncode, 0, status.stderr)
            record = json.loads(status.stdout)
            self.assertEqual(record["regime"], "BOREDOM_SNAP")
            self.assertEqual(record["n_rows"], 4)
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


if __name__ == "__main__":
    unittest.main()
