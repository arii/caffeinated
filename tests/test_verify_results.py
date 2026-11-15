import contextlib
import io
import unittest

from scripts import verify_results


class VerifyResultsTest(unittest.TestCase):
    def test_committed_artifacts_match_published_numbers(self):
        failed = [r for r in verify_results.run_checks() if not r["ok"]]
        self.assertEqual(failed, [])

    def test_mismatch_exits_nonzero(self):
        self.assertTrue(verify_results.matches({"A": 0.0931}, {"A": 0.093}))
        self.assertFalse(verify_results.matches([0.65, 0.31], [0.65, 0.30]))
        self.assertFalse(verify_results.matches({"A": 0.1}, {"A": 0.1, "B": 0.2}))

    def test_cli_reports_every_check(self):
        out, err = io.StringIO(), io.StringIO()
        with contextlib.redirect_stdout(out), contextlib.redirect_stderr(err):
            self.assertEqual(verify_results.main([]), 0)
        self.assertNotIn("FAIL", out.getvalue())
        self.assertIn("checks match the published numbers", err.getvalue())


if __name__ == "__main__":
    unittest.main()
