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
        self.server.request_key = self.headers.get("x-api-key")
        self.server.request_body = json.loads(
            self.rfile.read(int(self.headers["Content-Length"]))
        )
        if self.server.response_status == 200:
            response = {
                "results": [
                    {
                        "url": "https://example.test/paper-1",
                        "title": "Research paper one",
                        "publishedDate": "2024-06-01",
                        "highlights": ["A" * 250],
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
        else:
            response = {"error": "stubbed failure"}
        body = json.dumps(response).encode("utf-8")
        self.send_response(self.server.response_status)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def log_message(self, format_string, *args):
        pass


class ResearchCliTests(unittest.TestCase):
    def start_server(self):
        server = ThreadingHTTPServer(("127.0.0.1", 0), ExaStubHandler)
        server.response_status = 200
        thread = threading.Thread(target=server.serve_forever)
        thread.start()
        self.addCleanup(server.server_close)
        self.addCleanup(thread.join)
        self.addCleanup(server.shutdown)
        return server

    def run_cli(self, env, *args):
        return subprocess.run(
            [sys.executable, str(SCRIPT), *args],
            text=True,
            capture_output=True,
            check=False,
            env=env,
        )

    def test_search_sends_exa_request_continues_ids_and_lists_sources(self):
        server = self.start_server()
        with tempfile.TemporaryDirectory() as directory:
            log_path = Path(directory) / "research_log.jsonl"
            log_path.write_text(
                json.dumps(
                    {
                        "type": "source",
                        "id": "S1",
                        "url": "https://example.test/previous",
                        "title": "Previous source",
                    }
                )
                + "\n",
                encoding="utf-8",
            )
            env = os.environ.copy()
            env["EXA_API_KEY"] = "test-api-key"
            env["EXA_BASE_URL"] = f"http://127.0.0.1:{server.server_port}"
            result = self.run_cli(
                env,
                "search",
                "small model training",
                "--n",
                "2",
                "--log",
                str(log_path),
            )
            self.assertEqual(result.returncode, 0, result.stderr)
            self.assertEqual(server.request_key, "test-api-key")
            self.assertEqual(
                server.request_body,
                {
                    "query": "small model training",
                    "type": "auto",
                    "numResults": 2,
                    "category": "research paper",
                    "contents": {"highlights": {"maxCharacters": 400}},
                },
            )
            self.assertIn("S2 | Research paper one (2024)", result.stdout)
            self.assertIn("https://example.test/paper-1", result.stdout)
            printed_highlight = result.stdout.splitlines()[0].split(" | ")[-1]
            self.assertEqual(len(printed_highlight), 200)

            records = [
                json.loads(line)
                for line in log_path.read_text(encoding="utf-8").splitlines()
            ]
            query_record = next(record for record in records if record["type"] == "query")
            self.assertEqual(query_record["n_results"], 2)
            self.assertEqual(query_record["cost"], 0.007)
            self.assertEqual(
                [record["id"] for record in records if record["type"] == "source"],
                ["S1", "S2", "S3"],
            )

            listed = self.run_cli(env, "list", "--log", str(log_path))
            self.assertEqual(listed.returncode, 0, listed.stderr)
            self.assertIn("S3 | Research paper two (2023)", listed.stdout)

    def test_search_http_error_and_missing_key_return_two(self):
        server = self.start_server()
        server.response_status = 500
        with tempfile.TemporaryDirectory() as directory:
            env = os.environ.copy()
            env["EXA_API_KEY"] = "test-api-key"
            env["EXA_BASE_URL"] = f"http://127.0.0.1:{server.server_port}"
            error = self.run_cli(env, "search", "test", "--log", str(Path(directory) / "log"))
            self.assertEqual(error.returncode, 2)
            self.assertIn("HTTP 500", error.stderr)

            env.pop("EXA_API_KEY")
            missing_key = self.run_cli(
                env, "search", "test", "--log", str(Path(directory) / "log")
            )
            self.assertEqual(missing_key.returncode, 2)
            self.assertIn("EXA_API_KEY is required", missing_key.stderr)


if __name__ == "__main__":
    unittest.main()
