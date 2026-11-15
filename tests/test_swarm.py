import json
import os
from pathlib import Path
import shutil
import subprocess
import sys
import tempfile
import unittest
from unittest.mock import patch

import llm
import swarm
from boredom import descriptor_meter as meter


ROOT = Path(__file__).resolve().parents[1]
PROFILE = ROOT / "testcases/hadamard19/boredom_profile.json"


class FakeLLMTests(unittest.TestCase):
    def test_task_fake_proposals_are_valid_and_distinct(self):
        task = swarm.load_task("hadamard19")
        source = (ROOT / "testcases/hadamard19/construct.py").read_text()
        profile = meter.load_profile(PROFILE)
        proposals = [
            llm.fake_response(
                "WORKER_PROPOSE",
                {
                    "agent": agent,
                    "candidate_source": source,
                    "fake_targets": task["fake_targets"],
                },
            )
            for agent in swarm.AGENTS
        ]
        for proposal in proposals:
            swarm.validate_proposal(profile, proposal)
            self.assertEqual(len(proposal["edits"]), 1)
            self.assertNotEqual(proposal["edits"][0]["old"], proposal["edits"][0]["new"])
        self.assertGreater(len({(p["edits"][0]["old"], p["edits"][0]["new"]) for p in proposals}), 1)

    def test_assigned_cell_uses_task_knob(self):
        task = swarm.load_task("hadamard19")
        source = (ROOT / "testcases/hadamard19/construct.py").read_text()
        proposal = llm.fake_assigned_proposal(
            "search/restarts",
            source,
            {"params": {"value": 6}},
            fake_targets=task["fake_targets"],
        )
        self.assertEqual(proposal["descriptor"]["mechanism"], "search")
        self.assertEqual(proposal["descriptor"]["method"], "restarts")
        self.assertTrue(proposal["edits"])


class AllocationTests(unittest.TestCase):
    def test_exploit_scout_and_arm_a_fixed_allocation(self):
        profile = meter.load_profile(PROFILE)
        for arm in ("A", "B"):
            allocation = swarm.allocate_roles(profile, [], arm=arm, exa_enabled=True)
            self.assertEqual(len(allocation["scouts"]), 1)
            self.assertEqual(
                allocation["roles"][allocation["scouts"][0]], "divergent"
            )
        self.assertEqual(
            list(swarm.allocate_roles(profile, [], arm="A")["roles"].values()).count(
                "exploit"
            ),
            3,
        )
        self.assertEqual(
            swarm.allocate_roles(profile, [], arm="B", exa_enabled=False)["scouts"],
            [],
        )

    def test_meter_gate_hash_and_reject_audit_invariance(self):
        profile = meter.load_profile(PROFILE)
        descriptor = {"mechanism": "search", "method": "restarts", "params": {"value": 8}}
        event = {
            "seq": 1,
            "agent": "worker-1",
            "status": "discard",
            "score": 0.0585,
            "descriptor": descriptor,
        }
        before = meter.gate(profile, [event], descriptor)
        after = meter.gate(
            profile,
            [
                event,
                {
                    "seq": 2,
                    "kind": "critic",
                    "status": "keep",
                    "score": 0.0,
                    "descriptor": descriptor,
                },
                {
                    "seq": 3,
                    "status": "reject",
                    "score": None,
                    "descriptor": descriptor,
                },
            ],
            descriptor,
        )
        self.assertEqual(before["regime"], after["regime"])
        self.assertNotEqual(before["ledger_sha256"], after["ledger_sha256"])
        self.assertEqual(before["pass"], after["pass"])


class SandboxedSwarmTests(unittest.TestCase):
    def without_commits(self, value):
        if isinstance(value, dict):
            return {
                key: self.without_commits(item)
                for key, item in value.items()
                if "commit" not in key
            }
        if isinstance(value, list):
            return [self.without_commits(item) for item in value]
        return value

    def create_repo(self, path, name):
        repo = Path(path) / f"repo-{name}"
        repo.mkdir()
        cases = repo / "testcases"
        cases.mkdir()
        for name in ("sandbox.py", "run_task.py"):
            shutil.copy2(ROOT / "testcases" / name, cases / name)
        shutil.copytree(ROOT / "testcases/hadamard19", cases / "hadamard19")
        (repo / ".gitignore").write_text(".swarm_worktrees/\n", encoding="utf-8")
        subprocess.run(["git", "init", "-q", str(repo)], check=True)
        subprocess.run(["git", "config", "user.name", "Test"], cwd=repo, check=True)
        subprocess.run(
            ["git", "config", "user.email", "test@example.com"], cwd=repo, check=True
        )
        subprocess.run(["git", "add", "."], cwd=repo, check=True)
        subprocess.run(["git", "commit", "-qm", "baseline"], cwd=repo, check=True)
        return repo

    def run_three_rounds(self, parent, name):
        repo = self.create_repo(parent, name)
        out = Path(parent) / name
        env = os.environ.copy()
        env.update({"EXA": "off", "MEMORY_BACKEND": "local"})
        env.pop("OPENAI_API_KEY", None)
        result = subprocess.run(
            [
                sys.executable,
                str(ROOT / "swarm.py"),
                "--task",
                "hadamard19",
                "--arm",
                "B",
                "--rounds",
                "3",
                "--llm",
                "fake",
                "--no-push",
                "--out",
                str(out),
                "--repo",
                str(repo),
            ],
            cwd=ROOT,
            env=env,
            capture_output=True,
            text=True,
            timeout=600,
            check=False,
        )
        self.assertEqual(result.returncode, 0, result.stdout + result.stderr)
        ledger = [
            json.loads(line)
            for line in (out / "ledger.jsonl").read_text().splitlines()
            if line
        ]
        return ledger, out

    def test_fake_three_round_ledgers_match_with_real_docker_evaluator(self):
        with tempfile.TemporaryDirectory() as tmp:
            first, _ = self.run_three_rounds(Path(tmp), "out-one")
            second, _ = self.run_three_rounds(Path(tmp), "out-two")
        self.assertEqual(self.without_commits(first), self.without_commits(second))
        self.assertEqual(sum(row.get("kind") == "candidate" for row in first), 12)


if __name__ == "__main__":
    unittest.main()
