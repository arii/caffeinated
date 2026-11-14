from pathlib import Path
import subprocess
import sys
import tempfile
import unittest

from analyze import read_boredom_log, trace_records


REPO_ROOT = Path(__file__).resolve().parents[1]
FIXTURE_ROOT = Path(__file__).parent / "fixtures" / "analyze"
SCRIPT = REPO_ROOT / "analyze.py"


class AnalyzeCliTests(unittest.TestCase):
    def test_renders_comparison_trace_and_expected_summary(self):
        with tempfile.TemporaryDirectory() as temporary_directory:
            output = Path(temporary_directory)
            result = subprocess.run(
                [
                    sys.executable,
                    str(SCRIPT),
                    "--arm",
                    f"control={FIXTURE_ROOT / 'control'}",
                    "--arm",
                    f"boredom={FIXTURE_ROOT / 'boredom'}",
                    "--repo",
                    str(REPO_ROOT),
                    "--out",
                    str(output),
                ],
                text=True,
                capture_output=True,
                check=False,
            )
            self.assertEqual(result.returncode, 0, result.stderr)

            comparison = output / "comparison.png"
            trace = output / "boredom_trace.png"
            summary = output / "summary.md"
            for artifact in (comparison, trace, summary):
                self.assertTrue(artifact.is_file(), artifact)
                self.assertGreater(artifact.stat().st_size, 0, artifact)
            self.assertTrue(comparison.read_bytes().startswith(b"\x89PNG\r\n\x1a\n"))
            self.assertTrue(trace.read_bytes().startswith(b"\x89PNG\r\n\x1a\n"))

            summary_text = summary.read_text(encoding="utf-8")
            self.assertIn("| control | 0.989000 |", summary_text)
            self.assertIn("| boredom | 0.987500 |", summary_text)
            self.assertIn("EXPLOIT 3 / SNAP 3 / BREAKOUT 5", summary_text)
            self.assertIn("N/A (<2 resolvable kept diffs;", summary_text)
            self.assertIn("| Grounded |", summary_text)
            self.assertIn("| 1 / 3 |", summary_text)
            self.assertIn("## Cited sources", summary_text)
            self.assertIn(
                "S1` — Efficient Attention Paper — "
                "https://example.test/attention-paper",
                summary_text,
            )
            control_line = next(
                line for line in summary_text.splitlines() if line.startswith("| control |")
            )
            self.assertTrue(control_line.endswith("| N/A |"), control_line)

    def test_max_runs_truncates_results_and_reports_available_rows(self):
        with tempfile.TemporaryDirectory() as temporary_directory:
            output = Path(temporary_directory)
            result = subprocess.run(
                [
                    sys.executable,
                    str(SCRIPT),
                    "--arm",
                    f"control={FIXTURE_ROOT / 'control'}",
                    "--arm",
                    f"boredom={FIXTURE_ROOT / 'boredom'}",
                    "--max-runs",
                    "5",
                    "--repo",
                    str(REPO_ROOT),
                    "--out",
                    str(output),
                ],
                text=True,
                capture_output=True,
                check=False,
            )
            self.assertEqual(result.returncode, 0, result.stderr)

            summary_text = (output / "summary.md").read_text(encoding="utf-8")
            self.assertIn("| control | 0.994500 |", summary_text)
            self.assertIn("| boredom | 0.994200 |", summary_text)
            self.assertIn(
                "Comparison truncated to first 5 runs per arm "
                "(12 total rows available for control; "
                "12 total rows available for boredom).",
                summary_text,
            )
            self.assertIn("| 0 / 1 |", summary_text)

    def test_trace_keeps_last_status_for_row_count_and_gate_rejections(self):
        log_path = FIXTURE_ROOT / "boredom" / "boredom_log.jsonl"
        statuses, rejected = trace_records(read_boredom_log(log_path))
        status_by_rows = {record["n_rows"]: record for record in statuses}
        self.assertEqual(status_by_rows[4]["B"], 0.78)
        self.assertEqual(rejected, [4, 7])

        truncated_statuses, truncated_rejected = trace_records(
            read_boredom_log(log_path), max_run_index=5
        )
        self.assertTrue(
            all(int(record["n_rows"]) - 1 <= 5 for record in truncated_statuses)
        )
        self.assertEqual(truncated_rejected, [4])


if __name__ == "__main__":
    unittest.main()
