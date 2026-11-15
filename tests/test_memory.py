import csv
import json
import os
from pathlib import Path
import subprocess
import sys
import tempfile
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
import threading
import unittest
from unittest.mock import patch

import memory


REPO_ROOT = Path(__file__).resolve().parents[1]
SCRIPT = REPO_ROOT / "memory.py"
TEST_API_KEY = "memory-test-secret"


class PastStubHandler(BaseHTTPRequestHandler):
    def _respond(self, status, body):
        encoded = json.dumps(body).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(encoded)))
        self.end_headers()
        self.wfile.write(encoded)

    def do_POST(self):
        body = json.loads(self.rfile.read(int(self.headers["Content-Length"])))
        self.server.requests.append(
            {
                "method": "POST",
                "path": self.path,
                "authorization": self.headers.get("Authorization"),
                "body": body,
            }
        )
        if self.server.http_error:
            self._respond(500, {"error": "stubbed server error"})
        elif self.path == "/api/v1/ingest":
            self._respond(202, self.server.ingest_response)
        elif self.path == "/api/v1/ingest/batch":
            self._respond(202, self.server.batch_response)
        elif self.path == "/api/v1/recall":
            self._respond(200, self.server.recall_response)
        else:
            self._respond(404, {"error": "unknown route"})

    def do_GET(self):
        self.server.get_paths.append(self.path)
        if self.server.get_responses:
            response = self.server.get_responses.pop(0)
        else:
            response = {"status": "completed", "settled": True, "failure": None}
        self._respond(200, response)

    def do_PUT(self):
        body = json.loads(self.rfile.read(int(self.headers["Content-Length"])))
        self.server.requests.append(
            {
                "method": "PUT",
                "path": self.path,
                "authorization": self.headers.get("Authorization"),
                "body": body,
            }
        )
        slug = self.path.rsplit("/", 1)[-1]
        self._respond(
            201,
            {"slug": slug, "kind": body["kind"], "identities": body["identities"]},
        )

    def log_message(self, format_string, *args):
        pass


class MemoryCliTests(unittest.TestCase):
    def start_server(self):
        server = ThreadingHTTPServer(("127.0.0.1", 0), PastStubHandler)
        server.requests = []
        server.get_paths = []
        server.get_responses = []
        server.http_error = False
        server.ingest_response = {
            "ingestionId": "ingest-single",
            "sourceId": "source-single",
            "status": "queued",
        }
        server.batch_response = {
            "ingestionId": "ingest-batch",
            "status": "queued",
            "items": [],
        }
        server.recall_response = {"asOf": "2025-01-01", "results": []}
        thread = threading.Thread(target=server.serve_forever)
        thread.start()
        self.addCleanup(server.server_close)
        self.addCleanup(thread.join)
        self.addCleanup(server.shutdown)
        return server

    def run_cli(self, server, *args, env=None):
        environment = os.environ.copy()
        for name in tuple(environment):
            if name.startswith("PAST_API_KEY"):
                environment.pop(name)
        for name in (
            "MEMORY_BACKEND",
            "MEMORY_MIRROR",
            "MEMORY_LOG",
            "AUTORESEARCH_ARM",
            "AUTORESEARCH_RUN_ID",
        ):
            environment.pop(name, None)
        environment["PAST_API_KEY"] = TEST_API_KEY
        environment["AUTORESEARCH_RUN_ID"] = "test-run"
        environment["PAST_BASE_URL"] = f"http://127.0.0.1:{server.server_port}"
        if env:
            environment.update(env)
        return subprocess.run(
            [sys.executable, str(SCRIPT), *args],
            text=True,
            capture_output=True,
            check=False,
            env=environment,
        )

    def create_git_repo(self, directory, candidate_message=None):
        repo = Path(directory) / "repo"
        repo.mkdir()
        subprocess.run(["git", "init", "-q", str(repo)], check=True)
        editable_file = repo / "candidate.py"
        editable_file.write_text("WIDTH = 8\n", encoding="utf-8")

        def commit(message):
            subprocess.run(["git", "add", "candidate.py"], cwd=repo, check=True)
            subprocess.run(
                [
                    "git",
                    "-c",
                    "user.name=Memory Test",
                    "-c",
                    "user.email=memory@example.test",
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

        first = commit("baseline")
        editable_file.write_text("WIDTH = 10\n", encoding="utf-8")
        message = candidate_message or "[SNAP] increase width based on paper\n\nSource: S1"
        second = commit(message)
        return repo, first, second

    def write_results(self, path, rows):
        with path.open("w", newline="", encoding="utf-8") as results_file:
            writer = csv.writer(results_file, delimiter="\t")
            writer.writerow(
                ["commit", "loss", "status", "description"]
            )
            writer.writerows(rows)

    def test_remember_sends_grounded_run_data_point(self):
        server = self.start_server()
        with tempfile.TemporaryDirectory() as directory:
            repo, _, commit = self.create_git_repo(directory)
            research_log = Path(directory) / "research_log.jsonl"
            research_log.write_text(
                json.dumps(
                    {
                        "type": "source",
                        "id": "S1",
                        "title": "A useful paper",
                        "url": "https://example.test/paper",
                    }
                )
                + "\n",
                encoding="utf-8",
            )
            result = self.run_cli(
                server,
                "remember",
                "--commit",
                commit,
                "--loss",
                "0.98",
                "--status",
                "keep",
                "--description",
                "[SNAP] increase width based on paper",
                "--arm",
                "boredom",
                "--repo",
                str(repo),
                "--research-log",
                str(research_log),
                "--mirror",
                str(Path(directory) / "memory.jsonl"),
                "--log",
                str(Path(directory) / "memory_log.jsonl"),
            )
            self.assertEqual(result.returncode, 0, result.stderr)
            self.assertEqual(
                result.stdout.strip(), f"remembered run:boredom:{commit} (keep)"
            )

            request = server.requests[0]
            self.assertEqual(request["path"], "/api/v1/ingest")
            self.assertEqual(request["authorization"], f"Bearer {TEST_API_KEY}")
            body = request["body"]
            self.assertEqual(body["id"], f"run:boredom:{commit}")
            self.assertTrue(body["timestamp"].endswith("Z"))
            self.assertEqual(body["identity"], "autoresearch-agent")
            self.assertEqual(body["metadata"]["loss"], 0.98)
            self.assertEqual(body["metadata"]["status"], "keep")
            self.assertEqual(body["metadata"]["regime"], "BOREDOM_SNAP")
            self.assertEqual(body["metadata"]["sources"], ["S1"])
            self.assertEqual(body["metadata"]["type"], "result")
            self.assertEqual(body["metadata"]["author"], "autoresearch-agent")
            self.assertEqual(body["metadata"]["run_id"], "test-run")
            self.assertIn("Outcome: keep (loss 0.98", body["content"])
            self.assertIn(
                "Sources: S1 A useful paper https://example.test/paper",
                body["content"],
            )
            self.assertIn("candidate diff:", body["content"])
            self.assertIn("-WIDTH = 8", body["content"])
            self.assertIn("+WIDTH = 10", body["content"])

    def test_sync_deduplicates_commits_and_reuses_idempotency_key(self):
        server = self.start_server()
        with tempfile.TemporaryDirectory() as directory:
            repo, first, second = self.create_git_repo(directory)
            results = Path(directory) / "results.tsv"
            self.write_results(
                results,
                [
                    (first, "1.000000", "1.0", "keep", "baseline"),
                    (first, "0.990000", "1.0", "discard", "duplicate row"),
                    (second, "0.980000", "1.0", "keep", "[SNAP] new idea"),
                ],
            )
            command = [
                "sync",
                "--arm",
                "Z",
                "--results",
                str(results),
                "--repo",
                str(repo),
                "--research-log",
                str(Path(directory) / "research_log.jsonl"),
                "--mirror",
                str(Path(directory) / "memory.jsonl"),
                "--log",
                str(Path(directory) / "memory_log.jsonl"),
            ]
            first_sync = self.run_cli(
                server, *command, env={"AUTORESEARCH_ARM": "Z"}
            )
            second_sync = self.run_cli(
                server, *command, env={"AUTORESEARCH_ARM": "Z"}
            )
            self.assertEqual(first_sync.returncode, 0, first_sync.stderr)
            self.assertEqual(second_sync.returncode, 0, second_sync.stderr)

            batch_requests = [
                request
                for request in server.requests
                if request["path"] == "/api/v1/ingest/batch"
            ]
            for request in batch_requests:
                for item in request["body"]["items"]:
                    self.assertEqual(item["metadata"]["arm"], "Z")
                    self.assertEqual(item["metadata"]["run_id"], "test-run")
            self.assertEqual(len(batch_requests), 2)
            first_body = batch_requests[0]["body"]
            second_body = batch_requests[1]["body"]
            self.assertTrue(first_body["idempotencyKey"].startswith("sync:Z:"))
            self.assertEqual(
                first_body["idempotencyKey"], second_body["idempotencyKey"]
            )
            self.assertEqual(len(first_body["items"]), 2)
            self.assertTrue(
                all(item["audience"] == "arm-z" for item in first_body["items"])
            )

    def test_wait_polls_until_completed_and_fails_on_failed_status(self):
        server = self.start_server()
        with tempfile.TemporaryDirectory() as directory:
            repo, _, commit = self.create_git_repo(directory)
            server.get_responses = [
                {"status": "processing", "settled": False, "failure": None},
                {"status": "completed", "settled": True, "failure": None},
            ]
            args = [
                "remember",
                "--commit",
                commit,
                "--loss",
                "0.98",
                "--status",
                "keep",
                "--description",
                "candidate",
                "--repo",
                str(repo),
                "--wait",
                "--mirror",
                str(Path(directory) / "memory.jsonl"),
                "--log",
                str(Path(directory) / "memory_log.jsonl"),
            ]
            completed = self.run_cli(
                server, *args, env={"PAST_POLL_SECONDS": "0"}
            )
            self.assertEqual(completed.returncode, 0, completed.stderr)
            self.assertEqual(len(server.get_paths), 2)

            server.ingest_response = {
                "ingestionId": "ingest-unchanged",
                "sourceId": "source-single",
                "status": "completed",
                "unchanged": True,
            }
            unchanged = self.run_cli(
                server, *args, env={"PAST_POLL_SECONDS": "0"}
            )
            self.assertEqual(unchanged.returncode, 0, unchanged.stderr)
            self.assertEqual(len(server.get_paths), 2)

            server.ingest_response = {
                "ingestionId": "ingest-single",
                "sourceId": "source-single",
                "status": "queued",
            }
            server.get_responses = [
                {
                    "status": "failed",
                    "settled": True,
                    "failure": "indexing failed",
                }
            ]
            failed = self.run_cli(server, *args, env={"PAST_POLL_SECONDS": "0"})
            self.assertEqual(failed.returncode, 2)
            self.assertIn("indexing failed", failed.stderr)

    def test_recall_prints_results_and_logs_unique_source_ids(self):
        server = self.start_server()
        server.recall_response = {
            "asOf": "2025-02-01T00:00:00Z",
            "usedEvidenceTokens": 8,
            "results": [
                {
                    "rank": 1,
                    "occurredAt": "2024-05-06T12:00:00Z",
                    "content": "A remembered experiment.",
                    "artifact": {"kind": "run"},
                    "sources": [
                        {"sourceId": "past-source-1", "label": "First source"},
                        {"sourceId": "past-source-1", "label": "Duplicate source"},
                    ],
                }
            ],
            "pending": [{"ingestionId": "pending-1"}, {"ingestionId": "pending-2"}],
        }
        with tempfile.TemporaryDirectory() as directory:
            log = Path(directory) / "memory_log.jsonl"
            recalled = self.run_cli(
                server,
                "recall",
                "what helped?",
                "--limit",
                "5",
                "--log",
                str(log),
                "--mirror",
                str(Path(directory) / "memory.jsonl"),
            )
            self.assertEqual(recalled.returncode, 0, recalled.stderr)
            request = server.requests[0]
            self.assertEqual(request["path"], "/api/v1/recall")
            self.assertEqual(
                request["body"],
                {"query": "what helped?", "identity": "autoresearch", "limit": 5},
            )
            self.assertIn("#1 2024-05-06 [run] A remembered experiment.", recalled.stdout)
            self.assertIn("from: past-source-1 — First source", recalled.stdout)
            self.assertIn(
                "note: 2 ingestions still processing",
                recalled.stderr,
            )
            record = json.loads(log.read_text(encoding="utf-8").splitlines()[0])
            self.assertEqual(record["source_ids"], ["past-source-1"])
            self.assertEqual(record["n_results"], 1)

            server.recall_response = {
                "asOf": "2025-02-02T00:00:00Z",
                "usedEvidenceTokens": 0,
                "results": [],
            }
            empty = self.run_cli(
                server,
                "recall",
                "no result",
                "--log",
                str(log),
                "--mirror",
                str(Path(directory) / "memory.jsonl"),
            )
            self.assertEqual(empty.returncode, 0, empty.stderr)
            self.assertEqual(empty.stdout.strip(), "No memories found.")
            self.assertEqual(len(log.read_text(encoding="utf-8").splitlines()), 2)

    def test_missing_key_and_http_error_return_two_without_exposing_key(self):
        server = self.start_server()
        with tempfile.TemporaryDirectory() as directory:
            env = os.environ.copy()
            for name in tuple(env):
                if name.startswith("PAST_API_KEY"):
                    env.pop(name)
            env["PAST_BASE_URL"] = f"http://127.0.0.1:{server.server_port}"
            missing = subprocess.run(
                [
                    sys.executable,
                    str(SCRIPT),
                    "recall",
                    "test",
                    "--backend",
                    "pastdev",
                    "--log",
                    str(Path(directory) / "memory_log.jsonl"),
                ],
                text=True,
                capture_output=True,
                check=False,
                env=env,
            )
            self.assertEqual(missing.returncode, 2)
            self.assertIn("PAST_API_KEY is required", missing.stderr)

            server.http_error = True
            failed = self.run_cli(
                server,
                "recall",
                "test",
                "--backend",
                "pastdev",
                "--log",
                str(Path(directory) / "memory_log.jsonl"),
            )
            self.assertEqual(failed.returncode, 2)
            self.assertIn("memory.py: past.dev returned HTTP 500", failed.stderr)
            self.assertNotIn(TEST_API_KEY, failed.stderr)

    def test_typed_write_uses_author_identity_and_arm_key(self):
        server = self.start_server()
        with tempfile.TemporaryDirectory() as directory:
            mirror = Path(directory) / "memory.jsonl"
            log = Path(directory) / "memory_log.jsonl"
            arm_key = "arm-specific-test-secret"
            result = self.run_cli(
                server,
                "write",
                "--type",
                "lesson",
                "--id",
                "lesson:1",
                "--content",
                "Try a different schedule.",
                "--author",
                "worker-1",
                "--metadata",
                '{"project":"autoresearch"}',
                "--timestamp",
                "2025-01-02T03:04:05Z",
                "--arm",
                "boredom",
                "--backend",
                "pastdev",
                "--mirror",
                str(mirror),
                "--log",
                str(log),
                env={"PAST_API_KEY_BOREDOM": arm_key},
            )
            self.assertEqual(result.returncode, 0, result.stderr)
            request = server.requests[0]
            self.assertEqual(request["path"], "/api/v1/ingest")
            self.assertEqual(request["authorization"], f"Bearer {arm_key}")
            self.assertNotIn(arm_key, result.stdout + result.stderr)
            self.assertEqual(
                request["body"],
                {
                    "id": "lesson:1@test-run",
                    "content": "Try a different schedule.",
                    "label": "lesson by worker-1",
                    "timestamp": "2025-01-02T03:04:05Z",
                    "metadata": {
                        "project": "autoresearch",
                        "type": "lesson",
                        "author": "worker-1",
                        "arm": "BOREDOM",
                        "run_id": "test-run",
                    },
                    "identity": "worker-1",
                },
            )
            mirror_record = json.loads(mirror.read_text(encoding="utf-8").splitlines()[0])
            self.assertEqual(mirror_record["sourceId"], "source-single")
            event = json.loads(log.read_text(encoding="utf-8").splitlines()[0])
            self.assertEqual(event["type"], "write")
            self.assertEqual(event["mem_type"], "lesson")
            self.assertIn("latency_ms", event)
            self.assertIn("completed_ms", event)

    def test_pastdev_arm_audience_scopes_write_and_recall(self):
        server = self.start_server()
        with tempfile.TemporaryDirectory() as directory:
            log = Path(directory) / "memory_log.jsonl"
            mirror = Path(directory) / "memory.jsonl"
            env = {
                "AUTORESEARCH_ARM": "Z",
                "AUTORESEARCH_RUN_ID": "audience-run",
                "MEMORY_BACKEND": "pastdev",
                "PAST_API_KEY": TEST_API_KEY,
                "PAST_API_KEY_Z": "",
                "PAST_API_KEY_Y": "",
                "PAST_BASE_URL": f"http://127.0.0.1:{server.server_port}",
            }
            with patch.dict(os.environ, env, clear=False), patch.object(
                memory, "_ENSURED_AUDIENCES", set()
            ):
                memory.write(
                    "result",
                    "run:audience-test",
                    "unique audience isolation result",
                    "autoresearch-agent",
                    {"arm": "z"},
                    backend="pastdev",
                    mirror=mirror,
                    log=log,
                    arm="Z",
                )
                memory.recall(
                    "unique audience isolation result",
                    "autoresearch",
                    backend="pastdev",
                    mirror=mirror,
                    log=log,
                    arm="Z",
                )
                memory.recall(
                    "unique audience isolation result",
                    "autoresearch",
                    backend="pastdev",
                    mirror=mirror,
                    log=log,
                    arm="Y",
                )

            requests = server.requests
            self.assertEqual(
                [request["path"] for request in requests],
                [
                    "/api/v1/audiences/arm-z",
                    "/api/v1/ingest",
                    "/api/v1/recall",
                    "/api/v1/audiences/arm-y",
                    "/api/v1/recall",
                ],
            )
            self.assertEqual(
                requests[0]["body"],
                {"kind": "fixed", "identities": ["swarm-arm-z"]},
            )
            self.assertEqual(requests[1]["body"]["audience"], "arm-z")
            self.assertEqual(requests[1]["body"]["identity"], "autoresearch-agent")
            self.assertEqual(requests[1]["body"]["metadata"]["arm"], "Z")
            self.assertEqual(requests[1]["body"]["metadata"]["run_id"], "audience-run")
            self.assertEqual(requests[2]["body"]["identity"], "swarm-arm-z")
            self.assertEqual(requests[3]["body"]["identities"], ["swarm-arm-y"])
            self.assertEqual(requests[4]["body"]["identity"], "swarm-arm-y")
            self.assertTrue(
                all(request["authorization"] == f"Bearer {TEST_API_KEY}" for request in requests)
            )
            records = [
                json.loads(line) for line in log.read_text(encoding="utf-8").splitlines()
            ]
            self.assertEqual(
                [record["audience"] for record in records],
                ["arm-z", "arm-z", "arm-y"],
            )

    def test_pastdev_scope_reuses_same_task_history_and_isolates_arms(self):
        server = self.start_server()
        with tempfile.TemporaryDirectory() as directory:
            mirror = Path(directory) / "memory.jsonl"
            log = Path(directory) / "memory_log.jsonl"
            env = {
                "PAST_API_KEY": TEST_API_KEY,
                "PAST_BASE_URL": f"http://127.0.0.1:{server.server_port}",
                "AUTORESEARCH_ARM": "B",
                "AUTORESEARCH_RUN_ID": "current-run",
                "AUTORESEARCH_TASK": "hadamard19",
            }
            with patch.dict(os.environ, env), patch.object(memory, "_ENSURED_AUDIENCES", set()):
                memory.write(
                    "claim", "claim-1", "fresh claim about restarts", "worker-1", {},
                    backend="pastdev", mirror=mirror, log=log,
                )
                payload = next(request["body"] for request in server.requests if request["path"].endswith("/ingest"))
                self.assertEqual(payload["id"], "claim-1@current-run")
                self.assertEqual(
                    {key: payload["metadata"][key] for key in ("arm", "run_id", "task")},
                    {"arm": "B", "run_id": "current-run", "task": "hadamard19"},
                )

                def item(content, source_id, metadata=None, tags=None):
                    return {
                        "content": content, "artifact": {"kind": "memory"},
                        "sources": [{
                            "sourceId": source_id, "metadata": metadata or {},
                            "tags": tags or [],
                        }],
                    }

                def scoped(**metadata):
                    return {"arm": "B", "run_id": "old-run", "task": "hadamard19", **metadata}

                server.recall_response = {"results": [
                    item("old lesson restarts", "old-lesson", scoped(type="lesson")),
                    item("old verdict restarts", "old-verdict", scoped(type="verdict")),
                    item("old failed restarts", "old-fail", scoped(type="result", status="discard")),
                    item("old kept restarts", "old-keep", scoped(type="result", status="keep"), ["tag-keep"]),
                    item("old claim restarts", "old-claim", scoped(type="claim"), ["tag-claim"]),
                    item("bixbench lesson", "foreign-task", scoped(type="lesson", task="bixbench_mini"), ["tag-task"]),
                    item("arm A lesson", "foreign-arm", scoped(type="lesson", arm="A"), [{"id": "tag-arm"}]),
                    item("arm A same run", "foreign-arm-run", scoped(type="claim", arm="A", run_id="current-run")),
                    item("livecheck", "livecheck", {}, ["tag-livecheck"]),
                    item("legacy lesson without task", "legacy", scoped(type="lesson", task=None)),
                ]}
                result = memory.recall("restarts", "scout", backend="pastdev", mirror=mirror, log=log)
                contents = [entry["content"] for entry in result["results"]]
                self.assertEqual(contents[0], "fresh claim about restarts")
                self.assertEqual(
                    sorted(contents[1:]),
                    ["old failed restarts", "old lesson restarts", "old verdict restarts"],
                )
                self.assertEqual(result["results"][0]["sources"][0]["scope"], "same_run")
                self.assertEqual(result["results"][1]["sources"][0]["scope"], "cross_run")
                record = [json.loads(line) for line in log.read_text().splitlines()][-1]
                self.assertEqual(record["cross_run_kept"], 3)
                self.assertEqual(record["local_same_run"], 1)
                self.assertEqual(record["dropped_count"], 7)
                self.assertEqual(
                    record["dropped_reasons"],
                    {"run_only": 2, "foreign_task": 1, "untagged_task": 1,
                     "foreign_arm": 2, "unscoped": 1},
                )
                self.assertEqual(
                    record["dropped_source_ids"],
                    ["old-keep", "old-claim", "foreign-task", "foreign-arm",
                     "foreign-arm-run", "livecheck", "legacy"],
                )
                self.assertEqual(
                    record["dropped_tags"],
                    ["tag-keep", "tag-claim", "tag-task", "tag-arm", "tag-livecheck"],
                )

    def test_scope_decision_never_crosses_arms(self):
        scope = {"arm": "A", "run_id": "pair-1", "task": "bixbench_mini"}
        for metadata in (
            {"arm": "B", "run_id": "pair-1", "task": "bixbench_mini", "type": "claim"},
            {"arm": "B", "run_id": "old", "task": "bixbench_mini", "type": "lesson"},
            {"arm": "b", "run_id": "old", "task": "bixbench_mini", "type": "verdict"},
        ):
            self.assertEqual(memory.scope_decision(metadata, scope), "foreign_arm")
        self.assertEqual(
            memory.scope_decision(
                {"arm": "a", "run_id": "old", "task": "bixbench_mini", "type": "lesson"}, scope
            ),
            "cross_run",
        )
        self.assertEqual(
            memory.scope_decision(
                {"arm": "A", "run_id": "old", "task": "hadamard19", "type": "lesson"}, scope
            ),
            "foreign_task",
        )
        self.assertEqual(
            memory.scope_decision({"arm": "A", "run_id": "old", "type": "lesson"}, scope),
            "untagged_task",
        )
        self.assertEqual(
            memory.scope_decision({"arm": "A", "run_id": "pair-1", "type": "claim"}, scope),
            "same_run",
        )

    def test_pastdev_arm_recall_with_empty_mirror_drops_all_results(self):
        server = self.start_server()
        server.recall_response = {"results": [{"content": "foreign", "sources": [{"sourceId": "foreign"}]}]}
        with tempfile.TemporaryDirectory() as directory:
            log = Path(directory) / "log"
            result = self.run_cli(
                server, "recall", "anything", "--arm", "B", "--run-id", "new-run",
                "--mirror", str(Path(directory) / "missing.jsonl"), "--log", str(log),
            )
            self.assertEqual(result.returncode, 0, result.stderr)
            self.assertEqual(result.stdout.strip(), "No memories found.")
            self.assertEqual(json.loads(log.read_text())["dropped_count"], 1)

    def test_pastdev_arm_memory_requires_run_id_before_network_access(self):
        with patch.dict(os.environ, {"AUTORESEARCH_ARM": "B"}, clear=True):
            with self.assertRaisesRegex(ValueError, "requires --run-id"):
                memory.recall("anything", "scout", backend="pastdev")
            with self.assertRaisesRegex(ValueError, "requires --run-id"):
                memory.write("result", "id", "content", "worker", {}, backend="pastdev")

    def test_local_backend_ranks_by_idf_and_none_backend_stays_empty(self):
        with tempfile.TemporaryDirectory() as directory:
            mirror = Path(directory) / "memory.jsonl"
            log = Path(directory) / "memory_log.jsonl"
            for memory_id, content, author in (
                ("m:common", "alpha beta generic", "worker-common"),
                ("m:rare", "alpha beta raretoken special", "worker-rare"),
            ):
                written = subprocess.run(
                    [
                        sys.executable,
                        str(SCRIPT),
                        "write",
                        "--type",
                        "result",
                        "--id",
                        memory_id,
                        "--content",
                        content,
                        "--author",
                        author,
                        "--backend",
                        "local",
                        "--mirror",
                        str(mirror),
                        "--log",
                        str(log),
                    ],
                    text=True,
                    capture_output=True,
                    check=False,
                )
                self.assertEqual(written.returncode, 0, written.stderr)
            recalled = subprocess.run(
                [
                    sys.executable,
                    str(SCRIPT),
                    "recall",
                    "alpha raretoken",
                    "--limit",
                    "2",
                    "--backend",
                    "local",
                    "--mirror",
                    str(mirror),
                    "--log",
                    str(log),
                ],
                text=True,
                capture_output=True,
                check=False,
            )
            self.assertEqual(recalled.returncode, 0, recalled.stderr)
            self.assertIn("#1", recalled.stdout)
            self.assertLess(
                recalled.stdout.index("alpha beta raretoken"),
                recalled.stdout.index("alpha beta generic"),
            )
            records = [json.loads(line) for line in log.read_text().splitlines()]
            self.assertEqual([record["type"] for record in records].count("write"), 2)
            self.assertEqual(records[-1]["type"], "recall")
            self.assertEqual(records[-1]["authors"][0], "worker-rare")

            none_mirror = Path(directory) / "none.jsonl"
            none_log = Path(directory) / "none_log.jsonl"
            no_memory = subprocess.run(
                [
                    sys.executable,
                    str(SCRIPT),
                    "write",
                    "--type",
                    "claim",
                    "--id",
                    "claim:1",
                    "--content",
                    "nothing is stored",
                    "--author",
                    "worker",
                    "--backend",
                    "none",
                    "--mirror",
                    str(none_mirror),
                    "--log",
                    str(none_log),
                ],
                text=True,
                capture_output=True,
                check=False,
            )
            self.assertEqual(no_memory.returncode, 0, no_memory.stderr)
            self.assertFalse(none_mirror.exists())
            none_recall = subprocess.run(
                [
                    sys.executable,
                    str(SCRIPT),
                    "recall",
                    "nothing is stored",
                    "--backend",
                    "none",
                    "--mirror",
                    str(none_mirror),
                    "--log",
                    str(none_log),
                ],
                text=True,
                capture_output=True,
                check=False,
            )
            self.assertEqual(none_recall.returncode, 0, none_recall.stderr)
            self.assertEqual(none_recall.stdout.strip(), "No memories found.")

    def test_recall_resolves_author_from_local_mirror(self):
        server = self.start_server()
        with tempfile.TemporaryDirectory() as directory:
            mirror = Path(directory) / "memory.jsonl"
            log = Path(directory) / "memory_log.jsonl"
            local_write = subprocess.run(
                [
                    sys.executable,
                    str(SCRIPT),
                    "write",
                    "--type",
                    "assignment",
                    "--id",
                    "mirror:source",
                    "--content",
                    "Check the validation loss.",
                    "--author",
                    "worker-mirror",
                    "--backend",
                    "local",
                    "--mirror",
                    str(mirror),
                    "--log",
                    str(log),
                ],
                text=True,
                capture_output=True,
                check=False,
            )
            self.assertEqual(local_write.returncode, 0, local_write.stderr)
            server.recall_response = {
                "asOf": "2025-02-01T00:00:00Z",
                "usedEvidenceTokens": 4,
                "results": [
                    {
                        "rank": 1,
                        "occurredAt": "2025-01-02T03:04:05Z",
                        "content": "Check the validation loss.",
                        "artifact": {"kind": "memory"},
                        "sources": [
                            {"sourceId": "mirror:source", "label": "assignment by worker-mirror"}
                        ],
                    },
                    {
                        "rank": 2,
                        "occurredAt": "2025-01-01T03:04:05Z",
                        "content": "A remote lesson.",
                        "artifact": {"kind": "memory"},
                        "sources": [
                            {
                                "sourceId": "remote:source",
                                "label": "lesson by worker-remote",
                                "metadata": {
                                    "author": "worker-remote",
                                    "type": "lesson",
                                },
                            }
                        ],
                    },
                ],
            }
            with patch.dict(
                os.environ,
                {
                    "PAST_API_KEY": TEST_API_KEY,
                    "PAST_BASE_URL": f"http://127.0.0.1:{server.server_port}",
                    "MEMORY_BACKEND": "pastdev",
                    "MEMORY_MIRROR": str(mirror),
                    "MEMORY_LOG": str(log),
                },
            ):
                result = memory.recall("validation loss", "worker-1")
            request = server.requests[0]
            self.assertEqual(request["body"]["identity"], "worker-1")
            self.assertEqual(
                result["results"][0]["sources"][0]["author"], "worker-mirror"
            )
            self.assertEqual(
                result["results"][0]["sources"][0]["type"], "assignment"
            )
            self.assertEqual(
                result["results"][1]["sources"][0]["author"], "worker-remote"
            )


if __name__ == "__main__":
    unittest.main()
