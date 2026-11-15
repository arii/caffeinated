import os
import subprocess
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch

import swarm


def git(repo, *args):
    return subprocess.run(
        ["git", "-C", str(repo), *args], capture_output=True, text=True, check=True
    ).stdout.strip()


class PreflightTests(unittest.TestCase):
    def args(self, *extra):
        return swarm.build_parser().parse_args(["--task", "hadamard19", *extra])

    def problems(self, args, memory_backend="pastdev", exa_enabled=True, environ=None):
        with (
            patch.dict(os.environ, environ or {}, clear=True),
            patch("swarm.sandbox.docker_available", return_value=True),
            patch("swarm.subprocess.run", return_value=subprocess.CompletedProcess([], 0)),
        ):
            try:
                swarm.preflight(args, memory_backend, exa_enabled)
            except RuntimeError as error:
                return str(error)
        return ""

    def test_reports_every_missing_key_with_its_fix(self):
        message = self.problems(self.args("--llm", "tinker"))
        for expected in ("TINKER_MODEL", "TINKER_API_KEY", "--memory-backend local", "--exa off"):
            self.assertIn(expected, message)

    def test_configured_run_passes(self):
        environ = {
            "TINKER_MODEL": "m",
            "TINKER_API_KEY": "k",
            "PAST_API_KEY": "p",
            "EXA_API_KEY": "e",
        }
        self.assertEqual(self.problems(self.args("--llm", "tinker"), environ=environ), "")
        self.assertEqual(self.problems(self.args("--llm", "fake"), "local", False), "")

    def test_missing_sandbox_image_names_build_command(self):
        missing = subprocess.CompletedProcess([], 1)
        with (
            patch("swarm.sandbox.docker_available", return_value=True),
            patch("swarm.subprocess.run", return_value=missing),
            self.assertRaisesRegex(RuntimeError, "docker build -t caffeinated-testcases"),
        ):
            swarm.preflight(self.args("--llm", "fake"), "local", False)


class WorktreeRecoveryTests(unittest.TestCase):
    def setUp(self):
        directory = tempfile.TemporaryDirectory()
        self.addCleanup(directory.cleanup)
        self.repo = Path(directory.name) / "repo"
        self.repo.mkdir()
        (self.repo / ".gitignore").write_text(".swarm_worktrees/\n", encoding="utf-8")
        (self.repo / "task.py").write_text("x = 1\n", encoding="utf-8")
        subprocess.run(["git", "init", "-q", str(self.repo)], check=True)
        git(self.repo, "add", ".")
        git(self.repo, "-c", "user.name=T", "-c", "user.email=t@e", "commit", "-qm", "base")
        self.start = git(self.repo, "rev-parse", "HEAD")
        self.conductor = self.repo / ".swarm_worktrees/B/conductor"

    def create(self):
        with patch("sys.stderr"):
            return swarm.create_arm_worktrees(self.repo, "B", self.start)

    def test_dirty_conductor_from_failed_run_is_recovered(self):
        branch, conductor, _ = self.create()
        artifacts = conductor / "experiments/swarm_B"
        artifacts.mkdir(parents=True)
        (artifacts / "run_id").write_text("old\n", encoding="utf-8")
        (conductor / "task.py").write_text("x = 2\n", encoding="utf-8")
        second, conductor, _ = self.create()
        self.assertEqual(second, branch)
        self.assertEqual(git(conductor, "status", "--porcelain"), "")
        self.assertEqual(git(conductor, "branch", "--show-current"), branch)
        stale = list(conductor.parent.glob("conductor.stale-*/experiments/swarm_B/run_id"))
        self.assertEqual(len(stale), 1)

    def test_deleted_worktrees_are_pruned_and_recreated(self):
        self.create()
        subprocess.run(["rm", "-rf", str(self.repo / ".swarm_worktrees")], check=True)
        branch, conductor, _ = self.create()
        self.assertEqual(git(conductor, "rev-parse", "--show-toplevel"), str(conductor))
        self.assertEqual(git(conductor, "branch", "--show-current"), branch)

    def test_plain_directory_is_replaced_without_touching_main_checkout(self):
        head = git(self.repo, "symbolic-ref", "HEAD")
        self.conductor.mkdir(parents=True)
        (self.conductor / "leftover").write_text("x", encoding="utf-8")
        _, conductor, _ = self.create()
        self.assertFalse((conductor / "leftover").exists())
        self.assertEqual(git(self.repo, "symbolic-ref", "HEAD"), head)
        self.assertEqual(git(self.repo, "status", "--porcelain"), "")

    def test_branch_with_commits_is_not_reused(self):
        branch, conductor, _ = self.create()
        git(
            conductor,
            "-c",
            "user.name=T",
            "-c",
            "user.email=t@e",
            "commit",
            "-q",
            "--allow-empty",
            "-m",
            "work",
        )
        second, _, _ = self.create()
        self.assertNotEqual(second, branch)
        self.assertTrue(git(self.repo, "rev-parse", branch))

    def test_lock_rejects_a_live_concurrent_run(self):
        root = self.repo / ".swarm_worktrees/B"
        with swarm.arm_lock(root):
            self.assertEqual((root / ".lock").read_text().strip(), str(os.getpid()))
            with self.assertRaisesRegex(RuntimeError, f"pid {os.getpid()}"), swarm.arm_lock(root):
                pass
        (root / ".lock").write_text("999999999\n", encoding="utf-8")
        with swarm.arm_lock(root):
            self.assertEqual((root / ".lock").read_text().strip(), str(os.getpid()))


if __name__ == "__main__":
    unittest.main()
