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
        environment["PAST_API_KEY"] = TEST_API_KEY
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
        train_file = repo / "train.py"
        train_file.write_text("WIDTH = 8\n", encoding="utf-8")

        def commit(message):
            subprocess.run(["git", "add", "train.py"], cwd=repo, check=True)
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
        train_file.write_text("WIDTH = 10\n", encoding="utf-8")
        message = candidate_message or "[SNAP] increase width based on paper\n\nSource: S1"
        second = commit(message)
        return repo, first, second

    def write_results(self, path, rows):
        with path.open("w", newline="", encoding="utf-8") as results_file:
            writer = csv.writer(results_file, delimiter="\t")
            writer.writerow(
                ["commit", "val_bpb", "memory_gb", "status", "description"]
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
                "--val-bpb",
                "0.98",
                "--memory-gb",
                "44",
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
            self.assertEqual(body["metadata"]["val_bpb"], 0.98)
            self.assertEqual(body["metadata"]["status"], "keep")
            self.assertEqual(body["metadata"]["regime"], "BOREDOM_SNAP")
            self.assertEqual(body["metadata"]["sources"], ["S1"])
            self.assertIn("Outcome: keep (val_bpb 0.98", body["content"])
            self.assertIn(
                "Sources: S1 A useful paper https://example.test/paper",
                body["content"],
            )
            self.assertIn("train.py diff:", body["content"])
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
                "control",
                "--results",
                str(results),
                "--repo",
                str(repo),
                "--research-log",
                str(Path(directory) / "research_log.jsonl"),
            ]
            first_sync = self.run_cli(server, *command)
            second_sync = self.run_cli(server, *command)
            self.assertEqual(first_sync.returncode, 0, first_sync.stderr)
            self.assertEqual(second_sync.returncode, 0, second_sync.stderr)

            batch_requests = [
                request
                for request in server.requests
                if request["path"] == "/api/v1/ingest/batch"
            ]
            self.assertEqual(len(batch_requests), 2)
            first_body = batch_requests[0]["body"]
            second_body = batch_requests[1]["body"]
            self.assertTrue(first_body["idempotencyKey"].startswith("sync:control:"))
            self.assertEqual(
                first_body["idempotencyKey"], second_body["idempotencyKey"]
            )
            self.assertEqual(len(first_body["items"]), 2)

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
                "--val-bpb",
                "0.98",
                "--status",
                "keep",
                "--description",
                "candidate",
                "--repo",
                str(repo),
                "--wait",
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
            )
            self.assertEqual(empty.returncode, 0, empty.stderr)
            self.assertEqual(empty.stdout.strip(), "No memories found.")
            self.assertEqual(len(log.read_text(encoding="utf-8").splitlines()), 2)

    def test_missing_key_and_http_error_return_two_without_exposing_key(self):
        server = self.start_server()
        with tempfile.TemporaryDirectory() as directory:
            env = os.environ.copy()
            env.pop("PAST_API_KEY", None)
            env["PAST_BASE_URL"] = f"http://127.0.0.1:{server.server_port}"
            missing = subprocess.run(
                [
                    sys.executable,
                    str(SCRIPT),
                    "recall",
                    "test",
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
                "--log",
                str(Path(directory) / "memory_log.jsonl"),
            )
            self.assertEqual(failed.returncode, 2)
            self.assertIn("memory.py: past.dev returned HTTP 500", failed.stderr)
            self.assertNotIn(TEST_API_KEY, failed.stderr)


if __name__ == "__main__":
    unittest.main()
