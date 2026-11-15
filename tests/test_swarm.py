import csv
import itertools
import json
import os
import re
import shutil
import subprocess
import sys
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch

import export_viewer
import llm
import swarm
from boredom import descriptor_meter as meter
from test_testcases import DOCKER_AVAILABLE, DOCKER_SKIP_REASON

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
        self.assertGreater(
            len({(p["edits"][0]["old"], p["edits"][0]["new"]) for p in proposals}), 1
        )

    def test_dataset_finds_count_as_sources(self):
        profile = meter.load_profile(PROFILE)
        source = (ROOT / "testcases/hadamard19/construct.py").read_text()
        task = swarm.load_task("hadamard19")
        proposal = llm.fake_response(
            "WORKER_PROPOSE",
            {"agent": "worker-1", "candidate_source": source, "fake_targets": task["fake_targets"]},
        )
        proposal["source_ids"] = ["S3", "D6_2"]
        self.assertEqual(swarm.validate_proposal(profile, proposal)["source_ids"], ["S3", "D6_2"])
        proposal["source_ids"] = ["paper-1"]
        with self.assertRaises(ValueError):
            swarm.validate_proposal(profile, proposal)
        self.assertEqual(
            swarm.boredom.source_trailers("x\n\nSource: S3, D6_2, paper-1")[0], ["S3", "D6_2"]
        )

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

    def test_hadamard_fake_targets_build_construction_and_objective_edits(self):
        task = swarm.load_task("hadamard19")
        source = (ROOT / "testcases/hadamard19/construct.py").read_text()
        for _name, mechanism, method, _ in task["fake_targets"]:
            if mechanism not in {"construction", "objective"}:
                continue
            proposal = llm.fake_assigned_proposal(
                f"{mechanism}/{method}",
                source,
                {"mechanism": mechanism, "method": method},
                fake_targets=task["fake_targets"],
            )
            self.assertNotEqual(proposal.get("status"), "reject")
            self.assertIn(proposal["edits"][0]["old"], source)
            self.assertEqual(proposal["descriptor"]["mechanism"], mechanism)
            self.assertEqual(proposal["descriptor"]["method"], method)

    def test_unbuildable_assigned_cell_is_rejected(self):
        proposal = llm.fake_assigned_proposal(
            "objective/log_det",
            "RESTARTS = 4\n",
            {"mechanism": "objective", "method": "log_det"},
            fake_targets=[["RESTARTS", "search", "restarts", 1]],
        )
        self.assertEqual(proposal["status"], "reject")
        self.assertEqual(proposal["reason"], "unbuildable assignment: objective/log_det")

    def test_real_repair_descriptor_mismatch_is_rejected(self):
        profile = meter.load_profile(PROFILE)
        reason = swarm.assigned_cell_mismatch_reason(
            profile,
            {"mechanism": "search", "method": "restarts"},
            "objective/log_det",
        )
        self.assertEqual(reason, "unbuildable assignment: objective/log_det")

    def test_deterministic_critic_uses_first_score_without_rerun(self):
        with (
            patch.object(swarm, "TASK", {"deterministic": True}),
            patch("swarm.run_evaluations", side_effect=AssertionError("unexpected rerun")),
        ):
            result = swarm.critic_confirmation_result(Path("."), "commit", 0.123, Path("critic"))
        self.assertEqual(result["loss"], 0.123)
        self.assertEqual(result["critic_rerun"], "skipped (deterministic)")


class AllocationTests(unittest.TestCase):
    def test_exploit_scout_and_arm_a_fixed_allocation(self):
        profile = meter.load_profile(PROFILE)
        for arm in ("A", "B"):
            allocation = swarm.allocate_roles(profile, [], arm=arm, exa_enabled=True)
            self.assertEqual(len(allocation["scouts"]), 1)
            self.assertEqual(allocation["roles"][allocation["scouts"][0]], "divergent")
        self.assertEqual(
            list(swarm.allocate_roles(profile, [], arm="A")["roles"].values()).count("exploit"),
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
        if isinstance(value, str):
            return re.sub(
                r"(duplicate: (?:blob already scored as|same editable blob as) )\S+",
                r"\1<commit>",
                value,
            )
        if isinstance(value, dict):
            return {
                key: self.without_commits(item)
                for key, item in value.items()
                if "commit" not in key and key not in {"duplicate_of", "ts"}
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
        subprocess.run(["git", "config", "user.email", "test@example.com"], cwd=repo, check=True)
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
            json.loads(line) for line in (out / "ledger.jsonl").read_text().splitlines() if line
        ]
        return ledger, out

    def publish_round_snapshots(self, out, parent):
        def rows(path):
            if not path.exists():
                return []
            return [json.loads(line) for line in path.read_text().splitlines() if line.strip()]

        statuses = [row for row in rows(out / "boredom_log.jsonl") if row.get("type") == "status"]
        self.assertGreaterEqual(len(statuses), 3)
        destination = parent / "incremental"
        snapshots = []
        for round_num in range(1, 4):
            prefix = parent / f"prefix-{round_num}" / out.name
            prefix.parent.mkdir(parents=True)
            shutil.copytree(out, prefix)
            end_ts = statuses[round_num - 1]["ts"]
            for name in (
                "assignments.jsonl",
                "ledger.jsonl",
                "boredom_log.jsonl",
                "research_log.jsonl",
                "memory.jsonl",
                "memory_log.jsonl",
                "llm_log.jsonl",
            ):
                path = prefix / name
                if not path.exists():
                    continue
                filtered = []
                for record in rows(path):
                    round_value = record.get("round")
                    if name == "memory.jsonl":
                        round_value = (record.get("metadata") or {}).get("round")
                    if isinstance(round_value, int):
                        keep = round_value <= round_num
                    else:
                        stamp = record.get("ts") or record.get("timestamp")
                        keep = stamp is None or stamp <= end_ts
                    filtered.append(record) if keep else None
                path.write_text(
                    "".join(
                        json.dumps(record, sort_keys=True, ensure_ascii=False) + "\n"
                        for record in filtered
                    ),
                    encoding="utf-8",
                )
            for name in ("critic.tsv", "results.tsv"):
                path = prefix / name
                if path.exists():
                    with path.open(encoding="utf-8", newline="") as stream:
                        reader = csv.DictReader(stream, delimiter="\t")
                        fields, filtered = (
                            reader.fieldnames,
                            [row for row in reader if int(row.get("round") or 0) <= round_num],
                        )
                    with path.open("w", encoding="utf-8", newline="") as stream:
                        writer = csv.DictWriter(stream, fieldnames=fields, delimiter="\t")
                        writer.writeheader()
                        writer.writerows(filtered)
            run_artifact = json.loads((prefix / "run.json").read_text())
            run_artifact["status"] = "running"
            (prefix / "run.json").write_text(json.dumps(run_artifact), encoding="utf-8")
            run_dir = export_viewer.publish(
                prefix,
                destination,
                final=round_num == 3,
                status="finished" if round_num == 3 else "running",
            )
            snapshot = parent / f"snapshot-{round_num}"
            shutil.copytree(run_dir, snapshot)
            snapshots.append(snapshot)
        fresh_root = parent / "one-shot"
        fresh_run = export_viewer.export(out, fresh_root)
        self.assertEqual(
            {
                p.relative_to(snapshots[-1]).as_posix(): p.read_bytes()
                for p in snapshots[-1].rglob("*")
                if p.is_file()
            },
            {
                p.relative_to(fresh_run).as_posix(): p.read_bytes()
                for p in fresh_run.rglob("*")
                if p.is_file()
            },
        )
        return snapshots

    @unittest.skipUnless(DOCKER_AVAILABLE, DOCKER_SKIP_REASON)
    def test_fake_three_round_ledgers_match_with_real_docker_evaluator(self):
        with tempfile.TemporaryDirectory() as tmp:
            first, first_out = self.run_three_rounds(Path(tmp), "out-one")
            snapshots = self.publish_round_snapshots(first_out, Path(tmp))
            second, _ = self.run_three_rounds(Path(tmp), "out-two")
            event_files = [(path / "events.ndjson").read_bytes() for path in snapshots]
            for previous, current in itertools.pairwise(event_files):
                self.assertTrue(current.startswith(previous))
            manifests = [json.loads((path / "manifest.json").read_text()) for path in snapshots]
            self.assertEqual(
                [manifest["status"] for manifest in manifests], ["running", "running", "finished"]
            )
            event_rows = [
                [json.loads(line) for line in data.decode().splitlines()] for data in event_files
            ]
            self.assertFalse(any(event["type"] == "run.finished" for event in event_rows[0]))
            self.assertFalse(any(event["type"] == "run.finished" for event in event_rows[1]))
            self.assertTrue(any(event["type"] == "run.finished" for event in event_rows[2]))
            frames = [
                {path.name: path.read_bytes() for path in (snapshot / "keyframes").glob("*.json")}
                for snapshot in snapshots
            ]
            for previous, current in itertools.pairwise(frames):
                for name, data in previous.items():
                    self.assertEqual(current[name], data)
        self.assertEqual(self.without_commits(first), self.without_commits(second))
        self.assertEqual(sum(row.get("kind") == "candidate" for row in first), 12)

    @unittest.skipUnless(DOCKER_AVAILABLE, DOCKER_SKIP_REASON)
    def test_viewer_publish_failure_does_not_stop_swarm(self):
        with tempfile.TemporaryDirectory() as tmp:
            repo = self.create_repo(tmp, "publish-failure")
            out = Path(tmp) / "out"
            args = swarm.build_parser().parse_args(
                [
                    "--task",
                    "hadamard19",
                    "--rounds",
                    "1",
                    "--llm",
                    "fake",
                    "--no-push",
                    "--out",
                    str(out),
                    "--repo",
                    str(repo),
                ]
            )
            env = {"EXA": "off", "MEMORY_BACKEND": "local"}
            with (
                patch.dict(os.environ, env),
                patch("export_viewer.publish", side_effect=RuntimeError("test publish failure")),
            ):
                result = swarm.orchestrate(args)
            self.assertEqual(result["arm"], "B")
            entries = [
                json.loads(line)
                for line in (out / "viewer_publish_log.jsonl").read_text().splitlines()
            ]
            self.assertGreaterEqual(len(entries), 2)
            ledger = [json.loads(line) for line in (out / "ledger.jsonl").read_text().splitlines()]
            self.assertEqual(sum(row.get("kind") == "candidate" for row in ledger), 4)

    @unittest.skipUnless(DOCKER_AVAILABLE, DOCKER_SKIP_REASON)
    def test_fake_run_stops_early_when_converged(self):
        with tempfile.TemporaryDirectory() as tmp:
            repo = self.create_repo(tmp, "converged")
            out = Path(tmp) / "out"
            args = swarm.build_parser().parse_args(
                [
                    "--task",
                    "hadamard19",
                    "--rounds",
                    "10",
                    "--llm",
                    "fake",
                    "--no-push",
                    "--out",
                    str(out),
                    "--repo",
                    str(repo),
                ]
            )
            original = meter.load_profile

            def quick_profile(path):
                profile = original(path)
                profile["patience"] = 1
                profile["required_mechanisms"] = ["baseline"]
                profile["attempt_statuses"] = ["keep", "discard", "crash", "reject", "duplicate"]
                profile["_hash"] = meter.sha(
                    {key: value for key, value in profile.items() if not key.startswith("_")}
                )
                return profile

            with (
                patch.dict(os.environ, {"EXA": "off", "MEMORY_BACKEND": "local"}),
                patch("swarm.meter.load_profile", side_effect=quick_profile),
            ):
                swarm.orchestrate(args)
            summary = json.loads((out / "converged.json").read_text())
            ledger = meter.read_ledger(out / "ledger.jsonl")
            profile = original(PROFILE)
            profile["attempt_statuses"] = ["keep", "discard", "crash", "reject", "duplicate"]
            self.assertLess(summary["round"], 10)
            self.assertLess(max(event.get("round", 0) for event in ledger), summary["round"])
            self.assertEqual(
                round(summary["best_loss"], 6),
                summary["status_record"]["best_loss"],
            )
            self.assertEqual(
                summary["attempt_count"],
                len(list(meter.attempt_events(profile, ledger))),
            )
            self.assertTrue(json.loads((out / "run.json").read_text())["converged"])
            manifest = json.loads(next((out / "viewer").glob("*/manifest.json")).read_text())
            self.assertEqual(manifest["status"], "finished")
            self.assertTrue(manifest["converged"])

    def test_deterministic_gate_rejects_previously_scored_blob(self):
        with tempfile.TemporaryDirectory() as tmp:
            repo = self.create_repo(tmp, "dedup")
            out = Path(tmp) / "out"
            out.mkdir()
            args = swarm.build_parser().parse_args(["--task", "hadamard19", "--llm", "fake"])
            swarm.configure_task(args)
            commit = swarm.git_text(repo, "rev-parse", "HEAD")
            swarm.record_score_cache(repo, out, {commit: {"loss": 0.5, "status": "ok"}})
            passed, record = swarm.gate_candidate(
                repo=repo, out_dir=out, profile_path=PROFILE, commit=commit
            )
            self.assertFalse(passed)
            self.assertEqual(
                record["reasons"],
                [f"duplicate: blob already scored as {commit}"],
            )
            self.assertEqual(record["duplicate_of"], commit)
            self.assertEqual(record["score"], 0.5)
            profile = meter.load_profile(PROFILE)
            event = swarm.add_result_event(
                profile,
                out / "ledger.jsonl",
                {
                    "agent": "worker-1",
                    "commit": commit,
                    "descriptor": {"mechanism": "search", "method": "restarts"},
                    "duplicate_of": record["duplicate_of"],
                    "reasons": record["reasons"],
                },
                1,
                "duplicate",
                record["score"],
            )
            self.assertEqual(event["status"], "duplicate")
            self.assertEqual(event["score"], 0.5)
            self.assertEqual(event["duplicate_of"], commit)

    def test_same_round_duplicate_is_evaluated_once(self):
        with tempfile.TemporaryDirectory() as tmp:
            repo = self.create_repo(tmp, "same-round-dedup")
            out = Path(tmp) / "out"
            out.mkdir()
            args = swarm.build_parser().parse_args(["--task", "hadamard19", "--llm", "fake"])
            swarm.configure_task(args)
            first_commit = swarm.git_text(repo, "rev-parse", "HEAD")
            subprocess.run(
                ["git", "commit", "--allow-empty", "-m", "same editable blob"],
                cwd=repo,
                check=True,
                capture_output=True,
            )
            second_commit = swarm.git_text(repo, "rev-parse", "HEAD")
            self.assertNotEqual(first_commit, second_commit)
            self.assertEqual(
                swarm.git_text(repo, "rev-parse", f"{first_commit}:{swarm.TARGET_FILE}"),
                swarm.git_text(repo, "rev-parse", f"{second_commit}:{swarm.TARGET_FILE}"),
            )
            candidates = [
                {
                    "agent": agent,
                    "status": "pending",
                    "score": None,
                    "commit": commit,
                    "descriptor": {"mechanism": "search", "method": "restarts"},
                    "role": "exploit",
                    "attempts": [{"attempt": 1, "commit": commit, "pass": True, "reasons": []}],
                    "reasons": [],
                }
                for agent, commit in (
                    ("worker-1", first_commit),
                    ("worker-2", second_commit),
                )
            ]
            evaluation_candidates = swarm.deduplicate_round_candidates(repo, candidates, out)
            self.assertEqual(len(evaluation_candidates), 1)
            self.assertEqual(evaluation_candidates[0]["commit"], first_commit)
            duplicate = candidates[1]
            self.assertEqual(duplicate["status"], "duplicate")
            self.assertEqual(duplicate["duplicate_of"], first_commit)
            self.assertTrue(duplicate["same_round_duplicate"])
            gate_record = json.loads((out / "boredom_log.jsonl").read_text().splitlines()[-1])
            self.assertFalse(gate_record["pass"])
            self.assertEqual(gate_record["duplicate_of"], first_commit)


if __name__ == "__main__":
    unittest.main()
