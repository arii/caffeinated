import csv
import json
import os
from pathlib import Path
import shutil
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
import subprocess
import sys
import tempfile
import threading
import unittest
from unittest.mock import patch

import llm
import swarm
import swarm_queue
from boredom import descriptor_meter as meter


REPO_ROOT = Path(__file__).resolve().parents[1]
SWARM_SCRIPT = REPO_ROOT / "swarm.py"
PROFILE_PATH = REPO_ROOT / "boredom_meter" / "profiles" / "autoresearch_llm.json"


class OpenAIStubHandler(BaseHTTPRequestHandler):
    def do_POST(self):
        self.server.request_path = self.path
        self.server.authorization = self.headers.get("Authorization")
        self.server.request_body = json.loads(
            self.rfile.read(int(self.headers["Content-Length"]))
        )
        body = json.dumps(
            {
                "choices": [
                    {
                        "message": {
                            "content": json.dumps(
                                {
                                    "paper_query": "paper search",
                                    "code_query": "code search",
                                    "bottleneck": "validation loss",
                                }
                            )
                        }
                    }
                ],
                "usage": {"prompt_tokens": 12, "completion_tokens": 7},
            }
        ).encode("utf-8")
        self.send_response(200)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def log_message(self, format_string, *args):
        pass


class LLMClientTests(unittest.TestCase):
    def common_values(self):
        return {
            "agent": "scout-1",
            "best_commit": "abc123",
            "best_val_bpb": "0.995814",
            "noise": "0.0036",
            "round": 1,
            "swarm_B": "0.2",
            "regime": "EXPLOIT",
            "agent_B": "0.0",
            "role": "scout",
        }

    def test_chat_completions_json_request_shape(self):
        server = ThreadingHTTPServer(("127.0.0.1", 0), OpenAIStubHandler)
        thread = threading.Thread(target=server.serve_forever)
        thread.start()
        self.addCleanup(server.server_close)
        self.addCleanup(thread.join)
        self.addCleanup(server.shutdown)

        with tempfile.TemporaryDirectory() as directory:
            log_path = Path(directory) / "llm.jsonl"
            with patch.dict(
                os.environ,
                {
                    "OPENAI_API_KEY": "stub-secret",
                    "OPENAI_BASE_URL": f"http://127.0.0.1:{server.server_port}/v1",
                },
            ):
                client = llm.LLMClient(
                    model="stub-model",
                    log_path=log_path,
                )
                response = client.call(
                    "SCOUT_QUERY",
                    agent="scout-1",
                    round_num=1,
                    values={
                        "recalled": "none",
                        "suggested_cells": "batch/total_batch",
                    },
                )

            self.assertEqual(server.request_path, "/v1/chat/completions")
            self.assertEqual(server.authorization, "Bearer stub-secret")
            self.assertEqual(server.request_body["model"], "stub-model")
            self.assertEqual(
                server.request_body["response_format"], {"type": "json_object"}
            )
            self.assertEqual(server.request_body["messages"][0]["role"], "user")
            self.assertIn(
                "Under-visited mechanism cells",
                server.request_body["messages"][0]["content"],
            )
            self.assertEqual(response["paper_query"], "paper search")
            record = json.loads(log_path.read_text(encoding="utf-8").splitlines()[0])
            self.assertEqual(record["model"], "stub-model")
            self.assertEqual(record["role"], "SCOUT_QUERY")
            self.assertEqual(record["usage"]["prompt_tokens"], 12)
            self.assertEqual(len(record["prompt_sha"]), 64)

    def test_prompt_template_preserves_literal_json_braces(self):
        values = {
            **self.common_values(),
            "assignment": "exploit",
            "recalled_results": "none",
            "recalled_leads": "none",
            "claims": "none",
            "train_py": "WIDTH = 8",
            "vocab": '{"optimizer": ["matrix_lr"]}',
        }
        prompt = llm.render_prompt("worker_propose", values)
        self.assertIn(
            'JSON: {"descriptor": {"mechanism": str, "method": str, "params":',
            prompt,
        )
        self.assertIn('{"optimizer": ["matrix_lr"]}', prompt)
        self.assertIn('You are scout-1', prompt)

    def test_openai_model_is_required_without_a_default(self):
        with patch.dict(os.environ, {}, clear=True):
            with self.assertRaisesRegex(ValueError, "OPENAI_MODEL"):
                llm.LLMClient()

    def test_fake_llm_has_a_valid_json_object_for_each_role(self):
        train_py = (REPO_ROOT / "train.py").read_text()
        proposals = [
            llm.fake_response(
                "WORKER_PROPOSE",
                {"agent": agent, "train_py": train_py},
            )
            for agent in swarm.AGENTS
        ]
        worker = proposals[0]
        responses = [
            llm.fake_response("SCOUT_QUERY", {}),
            llm.fake_response("SCOUT_PICK", {"sources": "S1 | example"}),
            llm.fake_response("SCOUT_LEAD", {}),
            worker,
            llm.fake_response("WORKER_REPAIR", {"proposal": json.dumps(worker)}),
            llm.fake_response("CRITIC", {}),
        ]
        self.assertTrue(all(isinstance(response, dict) for response in responses))
        self.assertTrue(all(len(proposal["edits"]) == 1 for proposal in proposals))
        edited_lines = {proposal["edits"][0]["old"] for proposal in proposals}
        self.assertEqual(len(edited_lines), len(swarm.AGENTS))

    def test_queue_client_waits_for_answer_and_logs_queue_model(self):
        with tempfile.TemporaryDirectory() as directory:
            queue_dir = Path(directory) / "llm_queue"
            errors = []
            stop = threading.Event()
            invalid_sent = set()

            def answer_queued_call():
                while not stop.is_set():
                    for prompt_file in queue_dir.glob("*.prompt.json"):
                        try:
                            document = json.loads(
                                prompt_file.read_text(encoding="utf-8")
                            )
                            call_id = document["call_id"]
                            response_path = swarm_queue.response_path(
                                queue_dir, call_id
                            )
                            error_path = queue_dir / f"{call_id}.error.txt"
                            if call_id not in invalid_sent:
                                response_path.write_text("{ invalid", encoding="utf-8")
                                invalid_sent.add(call_id)
                                continue
                            if not error_path.exists():
                                continue
                            swarm_queue.answer(
                                queue_dir,
                                call_id,
                                {
                                    "paper_query": "query",
                                    "code_query": "code",
                                    "bottleneck": "loss",
                                },
                            )
                        except Exception as error:
                            errors.append(error)
                    stop.wait(0.01)

            thread = threading.Thread(target=answer_queued_call)
            thread.start()
            log_path = Path(directory) / "llm_log.jsonl"
            client = llm.LLMClient(
                mode="queue",
                arm="B",
                queue_dir=queue_dir,
                queue_timeout=5,
                log_path=log_path,
            )
            try:
                response = client.call(
                    "SCOUT_QUERY",
                    agent="scout-1",
                    round_num=2,
                    values={
                        **self.common_values(),
                        "recalled": "none",
                        "suggested_cells": "optimizer/matrix_lr",
                    },
                )
            finally:
                stop.set()
                thread.join(timeout=2)

            self.assertFalse(errors, errors)
            self.assertEqual(response["paper_query"], "query")
            prompt_file = next(queue_dir.glob("*.prompt.json"))
            document = json.loads(prompt_file.read_text(encoding="utf-8"))
            self.assertEqual(
                document["call_id"],
                prompt_file.name.removesuffix(".prompt.json"),
            )
            self.assertEqual(document["role"], "SCOUT_QUERY")
            self.assertEqual(document["agent"], "scout-1")
            self.assertEqual(document["round"], 2)
            self.assertEqual(document["arm"], "B")
            self.assertIn("Under-visited mechanism cells", document["prompt"])
            self.assertEqual(swarm_queue.show_prompt(queue_dir, document["call_id"]),
                             document["prompt"])
            self.assertEqual(swarm_queue.list_pending(queue_dir), [])
            self.assertFalse(
                (queue_dir / f"{document['call_id']}.error.txt").exists()
            )
            record = json.loads(log_path.read_text(encoding="utf-8").splitlines()[0])
            self.assertEqual(record["model"], "devin-queue")


class CriticAcceptanceTests(unittest.TestCase):
    def test_two_seed_mean_uses_one_sigma_acceptance_margin(self):
        profile = meter.load_profile(PROFILE_PATH)
        best = 0.995814

        self.assertEqual(profile["version"], json.loads(PROFILE_PATH.read_text())["version"])
        self.assertEqual(profile["accept_margin"], 0.0018)
        self.assertTrue(swarm.candidate_is_provisional(profile, 0.993814, best))
        self.assertTrue(
            swarm.critic_accepts(profile, 0.993814, 0.993814, best, "ok")
        )
        self.assertFalse(
            swarm.critic_accepts(profile, 0.994814, 0.994814, best, "ok")
        )
        self.assertFalse(
            swarm.candidate_is_provisional(profile, 0.994814, best)
        )

    def test_critic_margin_falls_back_to_meter_eps(self):
        profile = meter.load_profile(PROFILE_PATH)
        profile.pop("accept_margin")
        self.assertFalse(
            swarm.critic_accepts(profile, 0.993814, 0.993814, 0.995814, "ok")
        )


class SwarmOrchestratorTests(unittest.TestCase):
    def create_repo(self, parent):
        repo = Path(parent) / "repo"
        repo.mkdir()
        subprocess.run(["git", "init", "-q", str(repo)], check=True)
        shutil.copy2(REPO_ROOT / "train.py", repo / "train.py")
        shutil.copy2(REPO_ROOT / ".gitignore", repo / ".gitignore")
        subprocess.run(["git", "add", "train.py", ".gitignore"], cwd=repo, check=True)
        subprocess.run(
            [
                "git",
                "-c",
                "user.name=Swarm Test",
                "-c",
                "user.email=swarm-test@example.test",
                "commit",
                "-q",
                "-m",
                "baseline",
            ],
            cwd=repo,
            check=True,
        )
        return repo

    def jsonl(self, path):
        return [
            json.loads(line)
            for line in Path(path).read_text(encoding="utf-8").splitlines()
            if line.strip()
        ]

    def test_two_round_fake_swarm_writes_round_artifacts_and_memory(self):
        with tempfile.TemporaryDirectory() as directory:
            repo = self.create_repo(directory)
            out_dir = Path(directory) / "swarm-out"
            env = os.environ.copy()
            for name in list(env):
                if name.startswith(("PAST_API_KEY", "OPENAI_API_KEY")):
                    env.pop(name)
            env.update({"EXA": "off", "MEMORY_BACKEND": "local"})
            result = subprocess.run(
                [
                    sys.executable,
                    str(SWARM_SCRIPT),
                    "--arm",
                    "B",
                    "--rounds",
                    "2",
                    "--llm",
                    "fake",
                    "--gpu",
                    "fake",
                    "--out",
                    str(out_dir),
                    "--repo",
                    str(repo),
                ],
                cwd=REPO_ROOT,
                env=env,
                capture_output=True,
                text=True,
                check=False,
            )
            self.assertEqual(result.returncode, 0, result.stderr + result.stdout)

            expected = (
                "ledger.jsonl",
                "results.tsv",
                "boredom_log.jsonl",
                "research_log.jsonl",
                "memory.jsonl",
                "memory_log.jsonl",
                "assignments.jsonl",
                "llm_log.jsonl",
                "critic.tsv",
            )
            for name in expected:
                self.assertTrue((out_dir / name).is_file(), name)
            self.assertTrue((out_dir / "exa_cache").is_dir())
            self.assertTrue(list((out_dir / "runs").rglob("*.log")))

            ledger = self.jsonl(out_dir / "ledger.jsonl")
            self.assertEqual(
                sum(item.get("kind") == "candidate" for item in ledger), 8
            )
            self.assertGreaterEqual(
                sum(item.get("kind") == "critic" for item in ledger), 1
            )
            for critic in (item for item in ledger if item.get("kind") == "critic"):
                candidate = next(
                    item for item in ledger
                    if item.get("kind") == "candidate"
                    and item["commit"] == critic["commit"]
                    and item["round"] == critic["round"]
                )
                self.assertEqual(candidate["replicate_score"], critic["score"])
            assignments = self.jsonl(out_dir / "assignments.jsonl")
            self.assertEqual(len(assignments), 2)
            for assignment in assignments:
                self.assertEqual(len(assignment["ledger_sha256"]), 64)
                self.assertEqual(len(assignment["profile_sha256"]), 64)
            with (out_dir / "results.tsv").open(newline="", encoding="utf-8") as stream:
                result_rows = list(csv.DictReader(stream, delimiter="\t"))
            self.assertEqual(len(result_rows), len(ledger))
            memory_records = self.jsonl(out_dir / "memory.jsonl")
            memory_types = {
                record["metadata"]["type"] for record in memory_records
            }
            self.assertTrue({"assignment", "claim", "result"} <= memory_types)

    def test_scout_allocation_in_exploit_snap_and_arm_a(self):
        profile = meter.load_profile(PROFILE_PATH)
        profile["thresholds"]["snap"] = 0.0
        profile["_hash"] = meter.sha(
            {key: value for key, value in profile.items() if not key.startswith("_")}
        )
        events = [
            {
                "seq": number,
                "agent": "worker-1",
                "status": "discard",
                "score": 0.995814,
                "descriptor": {"mechanism": "baseline", "method": "none"},
            }
            for number in range(1, 6)
        ]
        snap = swarm.allocate_roles(profile, events, arm="B")
        self.assertEqual(snap["regime"], "BOREDOM_SNAP")
        self.assertEqual(list(snap["roles"].values()).count("exploit"), 1)
        self.assertEqual(list(snap["roles"].values()).count("divergent"), 3)
        self.assertGreaterEqual(len(snap["scouts"]), 1)
        self.assertTrue(
            all(snap["roles"][agent] == "divergent" for agent in snap["scouts"])
        )

        static_allocations = [
            swarm.allocate_roles(profile, events, arm="A", exa_enabled=True),
            swarm.allocate_roles(profile, [], arm="A", exa_enabled=True),
        ]
        for static in static_allocations:
            self.assertEqual(
                list(static["roles"].values()).count("exploit"), 3
            )
            self.assertEqual(
                list(static["roles"].values()).count("divergent"), 1
            )
            self.assertEqual(len(static["scouts"]), 1)

        exploit_profile = meter.load_profile(PROFILE_PATH)
        exploit = swarm.allocate_roles(
            exploit_profile, [], arm="B", exa_enabled=True
        )
        self.assertEqual(exploit["regime"], "EXPLOIT")
        self.assertEqual(len(exploit["scouts"]), 1)
        self.assertEqual(
            exploit["roles"][exploit["scouts"][0]], "divergent"
        )
        no_exa = swarm.allocate_roles(
            exploit_profile, [], arm="B", exa_enabled=False
        )
        self.assertEqual(no_exa["scouts"], [])

    def test_arm_memory_backend_defaults(self):
        with patch.dict(os.environ, {}, clear=True):
            with swarm.arm_environment("A", True):
                self.assertEqual(os.environ["MEMORY_BACKEND"], "pastdev")
            with swarm.arm_environment("B", True):
                self.assertEqual(os.environ["MEMORY_BACKEND"], "pastdev")
            with swarm.arm_environment("C", False):
                self.assertEqual(os.environ["MEMORY_BACKEND"], "pastdev")
            with swarm.arm_environment("D", True):
                self.assertEqual(os.environ["MEMORY_BACKEND"], "local")

    def test_converged_round_keeps_confirmation_roles_and_scouts(self):
        profile = meter.load_profile(PROFILE_PATH)

        def converged_status(_profile, _events, agent=None):
            return {
                "B": 0.8 if agent == "worker-2" else 0.1,
                "regime": "CONVERGED",
                "ledger_sha256": "a" * 64,
                "profile_sha256": "b" * 64,
            }

        with patch.object(swarm.meter, "status", side_effect=converged_status):
            allocation = swarm.allocate_roles(
                profile, [], arm="B", exa_enabled=True
            )
        self.assertEqual(set(allocation["roles"].values()), {"exploit"})
        self.assertEqual(allocation["scouts"], ["worker-2"])

    def test_one_round_queue_swarm_runs_without_openai_key(self):
        with tempfile.TemporaryDirectory() as directory:
            repo = self.create_repo(directory)
            out_dir = Path(directory) / "queue-out"
            queue_dir = out_dir / "llm_queue"
            train_py = (repo / "train.py").read_text(encoding="utf-8")
            env = os.environ.copy()
            for name in list(env):
                if name.startswith(("PAST_API_KEY", "OPENAI_API_KEY")):
                    env.pop(name)
            env.pop("OPENAI_MODEL", None)
            env.update({"EXA": "off", "MEMORY_BACKEND": "local"})
            process = subprocess.Popen(
                [
                    sys.executable,
                    str(SWARM_SCRIPT),
                    "--arm",
                    "B",
                    "--rounds",
                    "1",
                    "--llm",
                    "queue",
                    "--gpu",
                    "fake",
                    "--queue-timeout",
                    "10",
                    "--out",
                    str(out_dir),
                    "--repo",
                    str(repo),
                ],
                cwd=REPO_ROOT,
                env=env,
                stdout=subprocess.PIPE,
                stderr=subprocess.PIPE,
                text=True,
            )
            stop = threading.Event()
            errors = []

            def answer_round_calls():
                while not stop.is_set():
                    for prompt_file in queue_dir.glob("*.prompt.json"):
                        try:
                            document = json.loads(
                                prompt_file.read_text(encoding="utf-8")
                            )
                            response_file = swarm_queue.response_path(
                                queue_dir, document["call_id"]
                            )
                            if response_file.exists():
                                continue
                            role = document["role"]
                            if role.startswith("WORKER_"):
                                response = llm.fake_response(
                                    role,
                                    {
                                        "agent": document["agent"],
                                        "train_py": train_py,
                                    },
                                )
                            else:
                                response = llm.fake_response(role, {})
                            swarm_queue.answer(
                                queue_dir, document["call_id"], response
                            )
                        except Exception as error:
                            errors.append(error)
                    stop.wait(0.01)

            answer_thread = threading.Thread(target=answer_round_calls)
            answer_thread.start()
            try:
                stdout, stderr = process.communicate(timeout=120)
            finally:
                stop.set()
                answer_thread.join(timeout=5)

            self.assertFalse(errors, errors)
            self.assertEqual(process.returncode, 0, stderr + stdout)
            calls = self.jsonl(out_dir / "llm_log.jsonl")
            self.assertTrue(calls)
            self.assertTrue(all(call["model"] == "devin-queue" for call in calls))
            self.assertTrue(list(queue_dir.glob("*.prompt.json")))
            self.assertTrue(list(queue_dir.glob("*.response.json")))

    def test_gate_rejection_gets_one_repair_and_is_recorded_as_reject(self):
        with tempfile.TemporaryDirectory() as directory:
            repo = self.create_repo(directory)
            out_dir = Path(directory) / "out"
            out_dir.mkdir()
            (out_dir / "exa_cache").mkdir()
            profile = meter.load_profile(PROFILE_PATH)
            base_commit = subprocess.check_output(
                ["git", "rev-parse", "HEAD"], cwd=repo, text=True
            ).strip()
            memory_log = out_dir / "memory_log.jsonl"
            mirror = out_dir / "memory.jsonl"
            client = llm.LLMClient(
                mode="fake",
                log_path=out_dir / "llm_log.jsonl",
                prompt_dir=REPO_ROOT / "prompts",
            )
            status = {
                "swarm_B": 0.75,
                "regime": "BOREDOM_SNAP",
                "per_agent_B": {agent: 0.0 for agent in swarm.AGENTS},
            }
            with patch.dict(
                os.environ,
                {"EXA": "off", "MEMORY_BACKEND": "local"},
                clear=False,
            ), patch.object(
                swarm,
                "gate_candidate",
                side_effect=[
                    (False, {"reasons": ["near-duplicate"]}),
                    (False, {"reasons": ["near-duplicate after repair"]}),
                ],
            ) as gate:
                candidate = swarm.worker_attempts(
                    agent="worker-1",
                    round_num=1,
                    arm="B",
                    role="divergent",
                    agent_b=0.0,
                    status=status,
                    best_commit=base_commit,
                    best_val=0.995814,
                    profile=profile,
                    profile_path=PROFILE_PATH,
                    out_dir=out_dir,
                    repo=repo,
                    agents_root=repo / ".swarm_worktrees" / "B",
                    base_commit=base_commit,
                    llm_client=client,
                    backend="local",
                    mirror=mirror,
                    memory_log=memory_log,
                    lead=None,
                    all_leads=[],
                    claims=[],
                    replay=False,
                )

            self.assertEqual(gate.call_count, 2)
            calls = self.jsonl(out_dir / "llm_log.jsonl")
            self.assertEqual(
                sum(record["role"] == "WORKER_REPAIR" for record in calls), 1
            )
            self.assertEqual(candidate["status"], "reject")
            self.assertEqual(len(candidate["attempts"]), 2)
            event = swarm.add_result_event(
                profile,
                out_dir / "ledger.jsonl",
                candidate,
                1,
                "reject",
                None,
                None,
            )
            self.assertEqual(event["status"], "reject")
            self.assertEqual(meter.read_ledger(out_dir / "ledger.jsonl")[0]["status"], "reject")
