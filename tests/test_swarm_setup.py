import json
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
        self.assertEqual(git(conductor, "status", "--porcelain", "--untracked-files=no"), "")
        self.assertEqual(git(conductor, "branch", "--show-current"), branch)
        self.assertFalse((conductor / "task.py").read_text().startswith("x = 2"))
        archived = list(conductor.glob("experiments/swarm_B.prev-*/run_id"))
        self.assertEqual(len(archived), 1)

    def test_killed_run_recording_stays_discoverable_and_is_marked_stopped(self):
        _, conductor, _ = self.create()
        artifacts = conductor / "experiments/swarm_B"
        (artifacts / "viewer").mkdir(parents=True)
        run = {"run_id": "old", "viewer_run_id": "v", "status": "running"}
        (artifacts / "run.json").write_text(json.dumps(run), encoding="utf-8")
        with patch("swarm.publish_viewer_state") as publish:
            _, conductor, _ = self.create()
        archive = next(conductor.glob("experiments/swarm_B.prev-*"))
        self.assertEqual(json.loads((archive / "run.json").read_text())["status"], "stopped")
        publish.assert_called_once_with(archive, archive / "viewer", final=True, status="stopped")
        self.assertTrue(archive.match(".swarm_worktrees/*/conductor/experiments/*"))
        self.create()
        self.assertTrue((archive / "viewer").is_dir())

    def test_agent_worktrees_are_detached_without_branches(self):
        _, _, agents_root = self.create()
        before = git(self.repo, "branch", "--list")
        for attempt in (1, 2):
            path, branch = swarm.prepare_agent_worktree(
                self.repo, agents_root, "B", "worker-1", self.start, 1, attempt
            )
            self.assertIsNone(branch)
            self.assertEqual(git(path, "rev-parse", "--abbrev-ref", "HEAD"), "HEAD")
        self.assertEqual(git(self.repo, "branch", "--list"), before)

    def test_round_commit_leaves_out_viewer_and_bulky_logs(self):
        _, conductor, _ = self.create()
        target = conductor / "experiments/swarm_B"
        for name in (
            "viewer/run/events.ndjson",
            "runs/a.log",
            "exa_cache/q.json",
            "literature_cache/q.bin",
        ):
            self.assertIn(Path(name).parts[0], swarm.ROUND_UNTRACKED)
            (target / name).parent.mkdir(parents=True, exist_ok=True)
            (target / name).write_text("x\n", encoding="utf-8")
        for name in ("ledger.jsonl", "llm_log.jsonl", "research_log.jsonl", "results.tsv"):
            (target / name).write_text("x\n", encoding="utf-8")
        with patch("sys.stderr"):
            commit = swarm.commit_arm_artifacts(conductor, target, 3)
        self.assertEqual(commit, git(conductor, "rev-parse", "HEAD"))
        tree = git(conductor, "ls-tree", "-r", "--name-only", "HEAD", "experiments").splitlines()
        self.assertEqual(
            tree, ["experiments/swarm_B/ledger.jsonl", "experiments/swarm_B/results.tsv"]
        )

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


class ResumeStateTests(unittest.TestCase):
    def setUp(self):
        directory = tempfile.TemporaryDirectory()
        self.addCleanup(directory.cleanup)
        self.out = Path(directory.name) / "out"
        self.out.mkdir()

    def test_restore_drops_a_half_written_round(self):
        (self.out / "ledger.jsonl").write_text('{"round": 1}\n', encoding="utf-8")
        (self.out / "score_cache.json").write_text("{}\n", encoding="utf-8")
        (self.out / "run_id").write_text("abc\n", encoding="utf-8")
        swarm.write_checkpoint(
            self.out, round_num=1, arm_commit="c", best_val=1.0, best_commit="b", viewer_dir=None
        )
        with (self.out / "ledger.jsonl").open("a", encoding="utf-8") as handle:
            handle.write('{"round": 2}\n{"rou')
        (self.out / "score_cache.json").write_text('{"x": 1}\n', encoding="utf-8")
        (self.out / "vocab_extensions.jsonl").write_text("{}\n", encoding="utf-8")
        checkpoint = swarm.read_checkpoint(self.out)
        self.assertEqual((checkpoint["round"], checkpoint["arm_commit"]), (1, "c"))
        swarm.restore_checkpoint(self.out, checkpoint)
        self.assertEqual((self.out / "ledger.jsonl").read_text(), '{"round": 1}\n')
        self.assertEqual((self.out / "score_cache.json").read_text(), "{}\n")
        self.assertEqual((self.out / "run_id").read_text(), "abc\n")
        self.assertFalse((self.out / "vocab_extensions.jsonl").exists())

    def test_restore_refuses_a_log_shorter_than_its_checkpoint(self):
        (self.out / "ledger.jsonl").write_text('{"round": 1}\n', encoding="utf-8")
        swarm.write_checkpoint(
            self.out, round_num=1, arm_commit="c", best_val=1.0, best_commit="b", viewer_dir=None
        )
        (self.out / "ledger.jsonl").write_text("", encoding="utf-8")
        with self.assertRaisesRegex(ValueError, "shorter"):
            swarm.restore_checkpoint(self.out, swarm.read_checkpoint(self.out))

    def test_viewer_is_cut_back_to_its_checkpointed_prefix(self):
        viewer = self.out / "viewer" / "run"
        (viewer / "keyframes").mkdir(parents=True)
        (viewer / "events.ndjson").write_bytes(b"a\nb\n")
        (viewer / "keyframes" / "0.json").write_text("{}")
        swarm.write_checkpoint(
            self.out, round_num=1, arm_commit="c", best_val=1.0, best_commit="b", viewer_dir=viewer
        )
        with (viewer / "events.ndjson").open("ab") as handle:
            handle.write(b"c\nhalf")
        (viewer / "keyframes" / "4.json").write_text("{}")
        swarm.restore_viewer(viewer, swarm.read_checkpoint(self.out)["viewer"])
        self.assertEqual((viewer / "events.ndjson").read_bytes(), b"a\nb\n")
        self.assertEqual([path.name for path in (viewer / "keyframes").glob("*")], ["0.json"])
        swarm.restore_viewer(viewer, None)
        self.assertFalse(viewer.exists())

    def test_resume_reads_settings_from_run_json(self):
        run = {
            "task": "hadamard19",
            "arm": "C",
            "seed": 7,
            "llm": "fake",
            "model": "fake",
            "exa": "off",
            "memory_backend": "local",
            "rounds": 20,
            "repo": "/repo",
            "branch": "swarm-C-1",
            "viewer": True,
            "viewer_dest": None,
            "status": "running",
        }
        (self.out / "run.json").write_text(json.dumps(run), encoding="utf-8")
        swarm.write_checkpoint(
            self.out, round_num=4, arm_commit="c", best_val=1.0, best_commit="b", viewer_dir=None
        )
        args = swarm.build_parser().parse_args(["--resume", str(self.out), "--rounds", "30"])
        resume = swarm.resolve_run_args(args)
        self.assertEqual(resume["checkpoint"]["round"], 4)
        self.assertEqual((args.task, args.arm, args.seed, args.llm), ("hadamard19", "C", 7, "fake"))
        self.assertEqual((args.rounds, args.repo, args.out), (30, "/repo", str(self.out)))
        conflicting = swarm.build_parser().parse_args(["--resume", str(self.out), "--arm", "B"])
        with self.assertRaisesRegex(ValueError, "--arm B conflicts"):
            swarm.resolve_run_args(conflicting)
        self.assertFalse(args.no_push)
        unseeded = {**run, "seed": None, "no_push": True}
        (self.out / "run.json").write_text(json.dumps(unseeded), encoding="utf-8")
        reseeded = swarm.build_parser().parse_args(["--resume", str(self.out), "--seed", "3"])
        with self.assertRaisesRegex(ValueError, "--seed 3 conflicts"):
            swarm.resolve_run_args(reseeded)
        local = swarm.build_parser().parse_args(["--resume", str(self.out)])
        swarm.resolve_run_args(local)
        self.assertTrue(local.no_push)
        run["status"] = "finished"
        (self.out / "run.json").write_text(json.dumps(run), encoding="utf-8")
        with self.assertRaisesRegex(ValueError, "already finished"):
            swarm.resolve_run_args(swarm.build_parser().parse_args(["--resume", str(self.out)]))

    def test_fresh_run_requires_task_and_fills_defaults(self):
        with self.assertRaisesRegex(ValueError, "--task is required"):
            swarm.resolve_run_args(swarm.build_parser().parse_args([]))
        args = swarm.build_parser().parse_args(["--task", "hadamard19"])
        self.assertIsNone(swarm.resolve_run_args(args))
        self.assertEqual((args.arm, args.rounds, args.llm, args.exa), ("B", 10, "openai", "on"))

    def test_arm_environment_exports_resume_rollbacks_for_memory(self):
        rollbacks = [{"epoch": 1, "after": "2026-01-01T00:10:00Z"}]
        with patch.dict(os.environ, {"AUTORESEARCH_RUN_ROLLBACKS": "stale"}):
            with swarm.arm_environment("A", False, "pastdev", run_id="r1", rollbacks=rollbacks):
                self.assertEqual(json.loads(os.environ["AUTORESEARCH_RUN_ROLLBACKS"]), rollbacks)
            with swarm.arm_environment("A", False, "pastdev", run_id="r1"):
                self.assertNotIn("AUTORESEARCH_RUN_ROLLBACKS", os.environ)
            self.assertEqual(os.environ["AUTORESEARCH_RUN_ROLLBACKS"], "stale")

    def test_only_tags_from_after_the_checkpoint_are_deleted(self):
        repo = self.out / "repo"
        subprocess.run(["git", "init", "-q", str(repo)], check=True)
        git(
            repo,
            "-c",
            "user.name=T",
            "-c",
            "user.email=t@e",
            "commit",
            "-q",
            "--allow-empty",
            "-m",
            "x",
        )
        for tag in (
            "run/swarm_B/abc/2-worker-1",
            "run/swarm_B/abc/3-critic",
            "run/swarm_B/def/3-critic",
        ):
            git(repo, "tag", tag)
        swarm.delete_tags_after(repo, "run/swarm_B/abc", 2)
        self.assertEqual(
            git(repo, "tag", "--list").splitlines(),
            ["run/swarm_B/abc/2-worker-1", "run/swarm_B/def/3-critic"],
        )


if __name__ == "__main__":
    unittest.main()
