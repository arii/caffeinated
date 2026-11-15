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
SCRIPT = REPO_ROOT / "research.py"


class ExaStubHandler(BaseHTTPRequestHandler):
    def do_POST(self):
        body = json.loads(self.rfile.read(int(self.headers["Content-Length"])))
        self.server.requests.append(
            {
                "path": self.path,
                "key": self.headers.get("x-api-key"),
                "body": body,
            }
        )
        self.server.request_key = self.headers.get("x-api-key")
        self.server.request_body = body
        status, response = self.server.responses.get(
            self.path,
            (self.server.default_status, self.server.default_response),
        )
        encoded = json.dumps(response).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(encoded)))
        self.end_headers()
        self.wfile.write(encoded)

    def log_message(self, format_string, *args):
        pass


class ResearchCliTests(unittest.TestCase):
    def start_server(self):
        server = ThreadingHTTPServer(("127.0.0.1", 0), ExaStubHandler)
        server.requests = []
        server.responses = {}
        server.default_status = 200
        server.default_response = {
            "results": [
                {
                    "url": "https://example.test/paper-1",
                    "title": "Research paper one",
                    "publishedDate": "2024-06-01",
                    "highlights": ["A" * 350],
                },
                {
                    "url": "https://example.test/paper-2",
                    "title": "Research paper two",
                    "publishedDate": "2023-01-01",
                    "highlights": ["Second highlight"],
                },
            ],
            "costDollars": {"total": 0.007},
        }
        thread = threading.Thread(target=server.serve_forever)
        thread.start()
        self.addCleanup(server.server_close)
        self.addCleanup(thread.join)
        self.addCleanup(server.shutdown)
        return server

    def run_cli(self, server, *args, env=None):
        environment = os.environ.copy()
        for name in (
            "EXA_API_KEY",
            "EXA_REPLAY",
            "EXA_MAX_CALLS",
            "EXA",
            "AUTORESEARCH_AGENT",
        ):
            environment.pop(name, None)
        environment["EXA_BASE_URL"] = f"http://127.0.0.1:{server.server_port}"
        if env:
            environment.update(env)
        return subprocess.run(
            [sys.executable, str(SCRIPT), *args],
            text=True,
            capture_output=True,
            check=False,
            env=environment,
        )

    def write_sources(self, path, *sources):
        path.write_text(
            "".join(json.dumps(source) + "\n" for source in sources),
            encoding="utf-8",
        )

    def test_search_uses_publication_and_continues_query_and_source_ids(self):
        server = self.start_server()
        with tempfile.TemporaryDirectory() as directory:
            log = Path(directory) / "research_log.jsonl"
            self.write_sources(
                log,
                {
                    "type": "query",
                    "id": "Q4",
                    "query": "previous",
                },
                {
                    "type": "source",
                    "id": "S1",
                    "url": "https://example.test/previous",
                    "title": "Previous source",
                },
            )
            result = self.run_cli(
                server,
                "search",
                "task optimization approach",
                "--n",
                "2",
                "--log",
                str(log),
                "--cache-dir",
                str(Path(directory) / "cache"),
                "--agent",
                "worker-1",
                env={"EXA_API_KEY": "test-api-key"},
            )
            self.assertEqual(result.returncode, 0, result.stderr)
            self.assertEqual(server.request_key, "test-api-key")
            self.assertEqual(
                server.request_body,
                {
                    "query": "task optimization approach",
                    "type": "auto",
                    "numResults": 2,
                    "category": "publication",
                    "contents": {"highlights": {"maxCharacters": 400}},
                },
            )
            self.assertIn("S2 | Research paper one (2024)", result.stdout)
            self.assertIn("https://example.test/paper-1", result.stdout)
            printed_highlight = result.stdout.splitlines()[0].split(" | ")[-1]
            self.assertEqual(len(printed_highlight), 200)

            records = [
                json.loads(line) for line in log.read_text(encoding="utf-8").splitlines()
            ]
            query = next(record for record in records if record.get("id") == "Q5")
            sources = [record for record in records if record.get("id") in ("S2", "S3")]
            self.assertEqual(query["purpose"], "search")
            self.assertEqual(query["agent"], "worker-1")
            self.assertEqual(query["endpoint"], "/search")
            self.assertTrue(query["ts"].endswith("Z"))
            self.assertEqual(query["n_results"], 2)
            self.assertEqual(query["cost"], 0.007)
            self.assertIsInstance(query["latency_ms"], int)
            self.assertEqual([source["query_id"] for source in sources], ["Q5", "Q5"])
            self.assertEqual([source["agent"] for source in sources], ["worker-1"] * 2)
            self.assertIn("ts", sources[0])

            listed = self.run_cli(server, "list", "--log", str(log))
            self.assertEqual(listed.returncode, 0, listed.stderr)
            self.assertIn("S3 | Research paper two (2023)", listed.stdout)

    def test_prior_art_none_found_prints_query_id(self):
        server = self.start_server()
        server.default_response = {"results": [], "costDollars": {"total": 0.001}}
        with tempfile.TemporaryDirectory() as directory:
            log = Path(directory) / "research_log.jsonl"
            result = self.run_cli(
                server,
                "prior-art",
                "replace ReLU with SwiGLU",
                "--n",
                "3",
                "--log",
                str(log),
                "--cache-dir",
                str(Path(directory) / "cache"),
                env={"EXA_API_KEY": "test-api-key"},
            )
            self.assertEqual(result.returncode, 0, result.stderr)
            self.assertEqual(
                result.stdout.splitlines(),
                ["Q1: replace ReLU with SwiGLU", "none-found Q1"],
            )
            record = json.loads(log.read_text(encoding="utf-8").splitlines()[0])
            self.assertEqual(record["purpose"], "prior-art")
            self.assertEqual(record["endpoint"], "/search")
            self.assertEqual(record["id"], "Q1")
            self.assertEqual(
                server.request_body["contents"]["highlights"],
                {"query": "replace ReLU with SwiGLU", "maxCharacters": 400},
            )

    def test_scout_code_uses_github_and_published_date(self):
        server = self.start_server()
        with tempfile.TemporaryDirectory() as directory:
            result = self.run_cli(
                server,
                "scout",
                "task implementation approach",
                "--kind",
                "code",
                "--since",
                "2025-01-02",
                "--n",
                "4",
                "--log",
                str(Path(directory) / "research_log.jsonl"),
                "--cache-dir",
                str(Path(directory) / "cache"),
                env={"EXA_API_KEY": "test-api-key"},
            )
            self.assertEqual(result.returncode, 0, result.stderr)
            self.assertEqual(
                server.request_body["includeDomains"], ["github.com"]
            )
            self.assertEqual(server.request_body["startPublishedDate"], "2025-01-02")
            self.assertNotIn("category", server.request_body)
            self.assertEqual(
                server.request_body["contents"]["highlights"],
                {"maxCharacters": 400},
            )

    def test_similar_falls_back_from_404_and_records_endpoint_status(self):
        server = self.start_server()
        server.responses["/findSimilar"] = (404, {"error": "removed"})
        source = {
            "type": "source",
            "id": "S1",
            "url": "https://example.test/original",
            "title": "Original title",
            "highlights": ["First evidence " * 30, "Second evidence"],
        }
        with tempfile.TemporaryDirectory() as directory:
            log = Path(directory) / "research_log.jsonl"
            self.write_sources(log, source)
            result = self.run_cli(
                server,
                "similar",
                "S1",
                "--n",
                "3",
                "--log",
                str(log),
                "--cache-dir",
                str(Path(directory) / "cache"),
                "--agent",
                "scout-1",
                env={"EXA_API_KEY": "test-api-key"},
            )
            self.assertEqual(result.returncode, 0, result.stderr)
            self.assertEqual(
                [request["path"] for request in server.requests],
                ["/findSimilar", "/search"],
            )
            fallback = server.requests[1]["body"]
            self.assertEqual(
                fallback["query"],
                "Original title " + ("First evidence " * 30)[:300],
            )
            self.assertEqual(fallback["excludeDomains"], ["example.test"])
            records = [
                json.loads(line) for line in log.read_text(encoding="utf-8").splitlines()
            ]
            query = next(record for record in records if record.get("type") == "query")
            self.assertEqual(query["endpoint"], "/search")
            self.assertEqual(query["find_similar_status"], 404)
            self.assertEqual(query["agent"], "scout-1")
            self.assertIn("/findSimilar returned HTTP 404", result.stderr)

    def test_similar_records_successful_find_similar_endpoint(self):
        server = self.start_server()
        server.responses["/findSimilar"] = (200, server.default_response)
        with tempfile.TemporaryDirectory() as directory:
            log = Path(directory) / "research_log.jsonl"
            self.write_sources(
                log,
                {
                    "type": "source",
                    "id": "S1",
                    "url": "https://example.test/original",
                    "title": "Original title",
                    "highlights": ["Original highlight"],
                },
            )
            result = self.run_cli(
                server,
                "similar",
                "S1",
                "--log",
                str(log),
                "--cache-dir",
                str(Path(directory) / "cache"),
                env={"EXA_API_KEY": "test-api-key"},
            )
            self.assertEqual(result.returncode, 0, result.stderr)
            self.assertEqual([request["path"] for request in server.requests], ["/findSimilar"])
            query = next(
                record
                for record in (
                    json.loads(line)
                    for line in log.read_text(encoding="utf-8").splitlines()
                )
                if record.get("type") == "query"
            )
            self.assertEqual(query["endpoint"], "/findSimilar")
            self.assertEqual(query["find_similar_status"], 200)

    def test_similar_falls_back_from_410(self):
        server = self.start_server()
        server.responses["/findSimilar"] = (410, {"error": "gone"})
        with tempfile.TemporaryDirectory() as directory:
            log = Path(directory) / "research_log.jsonl"
            self.write_sources(
                log,
                {
                    "type": "source",
                    "id": "S1",
                    "url": "https://example.test/original",
                    "title": "Original title",
                },
            )
            result = self.run_cli(
                server,
                "similar",
                "S1",
                "--log",
                str(log),
                "--cache-dir",
                str(Path(directory) / "cache"),
                env={"EXA_API_KEY": "test-api-key"},
            )
            self.assertEqual(result.returncode, 0, result.stderr)
            self.assertEqual(
                [request["path"] for request in server.requests],
                ["/findSimilar", "/search"],
            )
            self.assertIn("/findSimilar returned HTTP 410", result.stderr)

    def test_extract_writes_query_and_extract_record(self):
        server = self.start_server()
        server.responses["/contents"] = (
            200,
            {
                "results": [
                    {
                        "summary": "Replace the MLP with SwiGLU; loss improved.",
                    }
                ],
                "costDollars": {"total": 0.002},
            },
        )
        with tempfile.TemporaryDirectory() as directory:
            log = Path(directory) / "research_log.jsonl"
            self.write_sources(
                log,
                {
                    "type": "source",
                    "id": "S1",
                    "url": "https://example.test/paper",
                    "title": "Source",
                },
            )
            result = self.run_cli(
                server,
                "extract",
                "S1",
                "--log",
                str(log),
                "--cache-dir",
                str(Path(directory) / "cache"),
                env={"EXA_API_KEY": "test-api-key"},
            )
            self.assertEqual(result.returncode, 0, result.stderr)
            self.assertIn("Replace the MLP with SwiGLU", result.stdout)
            self.assertEqual(server.requests[0]["path"], "/contents")
            self.assertEqual(
                server.request_body,
                {
                    "urls": ["https://example.test/paper"],
                    "summary": {
                        "query": (
                            "What concrete, testable change for the task described "
                            "by this source does it propose? Give implementation "
                            "details and the reported effect."
                        )
                    },
                },
            )
            records = [
                json.loads(line) for line in log.read_text(encoding="utf-8").splitlines()
            ]
            query = next(record for record in records if record.get("type") == "query")
            extract = next(record for record in records if record.get("type") == "extract")
            self.assertEqual(query["purpose"], "extract")
            self.assertEqual(query["endpoint"], "/contents")
            self.assertEqual(extract["id"], "E1")
            self.assertEqual(extract["query_id"], "Q1")
            self.assertEqual(extract["source_id"], "S1")
            self.assertEqual(extract["summary"], "Replace the MLP with SwiGLU; loss improved.")

    def test_cache_replay_works_without_key_and_cache_miss_returns_two(self):
        server = self.start_server()
        with tempfile.TemporaryDirectory() as directory:
            cache_dir = Path(directory) / "cache"
            log = Path(directory) / "research_log.jsonl"
            common = [
                "prior-art",
                "task optimization",
                "--n",
                "2",
                "--log",
                str(log),
                "--cache-dir",
                str(cache_dir),
            ]
            live = self.run_cli(
                server, *common, env={"EXA_API_KEY": "test-api-key"}
            )
            self.assertEqual(live.returncode, 0, live.stderr)
            replay = self.run_cli(server, *common, env={"EXA_REPLAY": "1"})
            self.assertEqual(replay.returncode, 0, replay.stderr)
            self.assertEqual(len(server.requests), 1)
            records = [
                json.loads(line) for line in log.read_text(encoding="utf-8").splitlines()
            ]
            replay_query = next(record for record in records if record.get("id") == "Q2")
            self.assertTrue(replay_query["replay"])

            miss = self.run_cli(
                server,
                "prior-art",
                "uncached query",
                "--log",
                str(log),
                "--cache-dir",
                str(cache_dir),
                "--replay",
            )
            self.assertEqual(miss.returncode, 2)
            self.assertIn("cache miss", miss.stderr)

    def test_budget_and_exa_disabled_modes(self):
        server = self.start_server()
        with tempfile.TemporaryDirectory() as directory:
            log = Path(directory) / "research_log.jsonl"
            common = [
                "prior-art",
                "test query",
                "--log",
                str(log),
                "--cache-dir",
                str(Path(directory) / "cache"),
            ]
            exhausted = self.run_cli(
                server,
                *common,
                env={"EXA_API_KEY": "test-api-key", "EXA_MAX_CALLS": "0"},
            )
            self.assertEqual(exhausted.returncode, 3)
            self.assertIn("Exa budget exhausted", exhausted.stderr)
            self.assertEqual(server.requests, [])

            disabled = self.run_cli(server, *common, env={"EXA": "off"})
            self.assertEqual(disabled.returncode, 0, disabled.stderr)
            self.assertEqual(
                disabled.stdout.splitlines(),
                ["exa disabled", "none-found Q1"],
            )
            record = json.loads(log.read_text(encoding="utf-8").splitlines()[0])
            self.assertEqual(record["endpoint"], "disabled")
            self.assertEqual(record["n_results"], 0)
            self.assertEqual(record["purpose"], "prior-art")

    def test_http_error_and_missing_key_return_two(self):
        server = self.start_server()
        server.default_status = 500
        with tempfile.TemporaryDirectory() as directory:
            common = [
                "search",
                "test",
                "--log",
                str(Path(directory) / "log"),
                "--cache-dir",
                str(Path(directory) / "cache"),
            ]
            error = self.run_cli(
                server, *common, env={"EXA_API_KEY": "test-api-key"}
            )
            self.assertEqual(error.returncode, 2)
            self.assertIn("HTTP 500", error.stderr)

            missing = self.run_cli(server, *common)
            self.assertEqual(missing.returncode, 2)
            self.assertIn("EXA_API_KEY is required", missing.stderr)
            self.assertNotIn("test-api-key", missing.stderr)


if __name__ == "__main__":
    unittest.main()
