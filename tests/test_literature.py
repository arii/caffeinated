import io
import json
import os
import tempfile
import unittest
from contextlib import redirect_stderr
from datetime import date
from pathlib import Path
from unittest.mock import patch

import literature
import swarm
from testcases.ignobel import evaluate as ignobel

FIXTURES = Path(__file__).resolve().parent / "fixtures" / "literature"
INDEX = json.loads((FIXTURES / "index.json").read_text(encoding="utf-8"))
QUERY = INDEX["query"]
KEYLESS = {"EXA": "off", "LITERATURE": "keyless"}


def recorded(url, cache_dir):
    """Recorded API responses; any other URL would be a live request."""
    if url not in INDEX["responses"]:
        raise AssertionError(f"unrecorded request: {url}")
    return (FIXTURES / INDEX["responses"][url]).read_bytes()


class RecordedTestCase(unittest.TestCase):
    def setUp(self):
        fetch = patch.object(literature, "fetch", side_effect=recorded)
        self.fetch = fetch.start()
        self.addCleanup(fetch.stop)
        tmp = tempfile.TemporaryDirectory()
        self.addCleanup(tmp.cleanup)
        self.out = Path(tmp.name)

    def call(self, command, **kwargs):
        with patch.dict(os.environ, KEYLESS):
            return swarm.research_call(
                command, out_dir=self.out, agent="scout-1", regime="EXPLORE", replay=False, **kwargs
            )


class SearchTests(RecordedTestCase):
    def test_scouting_defaults_to_the_last_year_like_exa(self):
        with patch.object(literature, "search", return_value=([], {})) as search:
            self.call("scout", query=QUERY, n=2, kind="paper", since=None)
            self.call("worker-search", query=QUERY, n=2)
        self.assertEqual(search.call_args_list[0].args[3][:4], str(date.today().year - 1))
        self.assertIsNone(search.call_args_list[1].args[3])

    def test_arxiv_filters_dates_in_the_query_and_skips_empty_queries(self):
        with patch.object(literature, "_xml", side_effect=AssertionError("request")) as xml:
            self.assertEqual(literature.arxiv("the of and", 3, self.out, "2025-01-01"), [])
            xml.assert_not_called()
            xml.side_effect = None
            xml.return_value.findall.return_value = []
            literature.arxiv(QUERY, 3, self.out, "2025-06-01")
        self.assertIn("submittedDate%3A%5B202501010000+TO+", xml.call_args.args[0])

    def test_interleaves_providers_with_urls_from_the_apis(self):
        hits, status = literature.search(QUERY, INDEX["n"], self.out)
        self.assertEqual(status, {"openalex": 3, "arxiv": 2, "pubmed": 1})
        self.assertEqual(
            [(hit["provider"], hit["url"]) for hit in hits],
            [
                ("openalex", "https://doi.org/10.1016/j.als.2016.05.009"),
                ("arxiv", "https://arxiv.org/abs/1711.08558v1"),
                ("pubmed", "https://doi.org/10.1103/PhysRevE.85.046117"),
            ],
        )
        self.assertTrue(hits[0]["text"].startswith("When a half-full Bordeaux glass"))
        self.assertEqual(hits[2]["title"], "Walking with coffee: why does it spill?")
        self.assertEqual(hits[2]["published"], "2012")

    def test_the_same_doi_from_two_providers_is_one_source(self):
        def provider(url):
            return lambda *_: [
                {"title": "Walking with coffee", "url": url, "published": "", "text": ""}
            ]

        searches = {
            "openalex": provider("https://doi.org/10.1103/physreve.85.046117"),
            "arxiv": lambda *_: [],
            "pubmed": provider("https://doi.org/10.1103/PhysRevE.85.046117"),
        }
        with patch.dict(literature.SEARCHES, searches):
            hits, _ = literature.search(QUERY, 3, self.out)
        self.assertEqual([hit["provider"] for hit in hits], ["openalex"])

    def test_arxiv_relaxes_an_empty_three_term_query(self):
        literature.arxiv(QUERY, 3, self.out)
        urls = [call.args[0] for call in self.fetch.call_args_list]
        self.assertEqual(len(urls), 2)
        self.assertIn("all%3Awalking", urls[0])
        self.assertNotIn("all%3Awalking", urls[1])

    def test_a_failing_provider_is_reported_not_fatal(self):
        def flaky(url, cache_dir):
            if "arxiv" in url:
                raise literature.LiteratureError("HTTP 503 from export.arxiv.org")
            return recorded(url, cache_dir)

        self.fetch.side_effect = flaky
        hits, status = literature.search(QUERY, 3, self.out)
        self.assertEqual(status["arxiv"], "HTTP 503 from export.arxiv.org")
        self.assertNotIn("arxiv", {hit["provider"] for hit in hits})
        self.assertEqual(len(hits), 3)


class SwarmResearchTests(RecordedTestCase):
    def test_exa_off_prior_art_logs_keyless_sources_and_extracts_abstracts(self):
        rows = self.call("prior-art", query=QUERY, n=3)
        query, *sources = rows
        self.assertEqual(query["type"], "query")
        self.assertEqual(query["endpoint"], "keyless")
        self.assertTrue(query["disabled"])
        self.assertEqual([s["id"] for s in sources], ["S1", "S2", "S3"])
        self.assertEqual(swarm.source_records(rows), sources)
        extract = self.call("extract", source="S3")
        self.assertEqual(extract[-1]["type"], "extract")
        self.assertEqual(extract[-1]["source_id"], "S3")
        self.assertIn("Abstract (pubmed)", extract[-1]["summary"])

    def test_code_searches_do_not_invent_literature(self):
        rows = self.call("worker-search", query=QUERY, kind="code", n=3)
        self.assertEqual(len(rows), 1)
        self.assertEqual(rows[0]["providers"], {"skipped": "code search needs Exa"})
        self.fetch.assert_not_called()

    def test_without_keyless_exa_off_stays_disabled_and_offline(self):
        with patch.dict(os.environ, {"EXA": "off"}):
            os.environ.pop("LITERATURE", None)
            rows = swarm.research_call(
                "prior-art",
                out_dir=self.out,
                agent="a",
                regime="EXPLORE",
                replay=False,
                query=QUERY,
            )
        self.assertEqual([row["endpoint"] for row in rows], ["disabled"])
        self.fetch.assert_not_called()

    def test_only_a_logged_source_url_counts_not_text_quoted_in_an_abstract(self):
        self.call("prior-art", query=QUERY, n=3)
        log = self.out / "research_log.jsonl"
        quoted = "https://example.com/quoted-in-an-abstract"
        record = {"type": "source", "id": "S9", "url": "https://example.com/real", "title": "t"}
        record["highlights"] = [f"see {quoted} and https://doi.org/10.1103/PhysRevE.85.046117"]
        with log.open("a", encoding="utf-8") as handle:
            handle.write(json.dumps(record) + "\n")
        with patch.object(ignobel.external, "doi_title", return_value=None):
            resolved, problems = ignobel.check_citations(
                [quoted, "https://doi.org/10.1103/Phys", "https://example.com/real"],
                "https://zenodo.org/records/1",
                ignobel.HERE,
                log,
            )
        self.assertEqual(resolved, ["https://example.com/real"])
        self.assertEqual(len(problems), 3)
        self.assertTrue(problems[0].startswith(quoted))
        self.assertTrue(problems[1].startswith("https://doi.org/10.1103/Phys "))

    def test_keyless_sources_pass_the_ignobel_citation_check_without_crossref(self):
        self.call("prior-art", query=QUERY, n=3)
        log = self.out / "research_log.jsonl"
        with patch.object(ignobel.external, "doi_title", side_effect=AssertionError("network")):
            resolved, problems = ignobel.check_citations(
                ["S1", "https://doi.org/10.1103/PhysRevE.85.046117"],
                "https://zenodo.org/records/1",
                ignobel.HERE,
                log,
            )
        self.assertEqual(problems, [])
        self.assertEqual(
            resolved,
            [
                "https://doi.org/10.1016/j.als.2016.05.009",
                "https://doi.org/10.1103/physreve.85.046117",
            ],
        )


class FetchTests(unittest.TestCase):
    def setUp(self):
        tmp = tempfile.TemporaryDirectory()
        self.addCleanup(tmp.cleanup)
        self.cache = Path(tmp.name)
        opener = patch.object(literature, "build_opener", side_effect=AssertionError("network"))
        opener.start()
        self.addCleanup(opener.stop)

    def test_only_allowlisted_https_hosts(self):
        for url in ("https://example.com/works", "http://api.openalex.org/works"):
            with self.assertRaises(literature.LiteratureError):
                literature.fetch(url, self.cache)

    def test_cache_hits_need_no_network_and_budget_bounds_live_calls(self):
        url = "https://api.openalex.org/works?search=toast"
        with patch.dict(os.environ, {"LITERATURE_MAX_CALLS": "0"}):
            with self.assertRaisesRegex(literature.LiteratureError, "LITERATURE_MAX_CALLS"):
                literature.fetch(url, self.cache)
            (
                self.cache / (literature.hashlib.sha256(url.encode()).hexdigest()[:24] + ".bin")
            ).write_bytes(b"{}")
            self.assertEqual(literature.fetch(url, self.cache), b"{}")


class ResearchSourceTests(unittest.TestCase):
    def source(self, *extra, key=None):
        args = swarm.build_parser().parse_args(["--task", "ignobel", "--llm", "tinker", *extra])
        env = {"EXA_API_KEY": key} if key else {}
        with patch.dict(os.environ, env, clear=True):
            return swarm.resolve_research_source(args)

    def test_keyless_under_exa_off_or_when_asked_for_without_a_key(self):
        self.assertEqual(self.source(key="k"), "exa")
        self.assertEqual(self.source("--exa", "off", key="k"), "keyless")
        self.assertEqual(self.source("--literature", "keyless"), "keyless")
        self.assertEqual(self.source("--literature", "auto"), "keyless")
        self.assertEqual(self.source("--arm", "C"), "off")
        self.assertEqual(self.source("--literature", "off"), "exa")
        self.assertEqual(self.source("--exa", "off", "--literature", "off"), "off")

    def test_a_missing_exa_key_fails_preflight_instead_of_switching_to_keyless(self):
        self.assertEqual(self.source(), "exa")
        args = swarm.build_parser().parse_args(["--task", "ignobel", "--llm", "fake"])
        with (
            patch.dict(os.environ, {}, clear=True),
            patch.object(swarm.sandbox, "docker_available", return_value=False),
            self.assertRaisesRegex(RuntimeError, "EXA_API_KEY.*--literature keyless"),
        ):
            swarm.preflight(args, "local", exa_enabled=True)

    def test_fake_llm_runs_stay_offline_unless_asked(self):
        fake = swarm.build_parser().parse_args(
            ["--task", "ignobel", "--llm", "fake", "--exa", "off"]
        )
        with patch.dict(os.environ, {}, clear=True):
            self.assertEqual(swarm.resolve_research_source(fake), "off")
            fake.literature = "keyless"
            self.assertEqual(swarm.resolve_research_source(fake), "keyless")

    def test_bixbench_task_policy_forces_research_off_over_cli_flags(self):
        args = swarm.build_parser().parse_args(
            [
                "--task",
                "bixbench_mini",
                "--llm",
                "tinker",
                "--exa",
                "on",
                "--literature",
                "keyless",
            ]
        )
        log = io.StringIO()
        with redirect_stderr(log):
            swarm.resolve_run_args(args)

        self.assertEqual(args.exa, "off")
        self.assertEqual(args.literature, "off")
        self.assertIn(
            "task bixbench_mini sets research=off; forcing Exa and keyless literature off",
            log.getvalue(),
        )
        with (
            patch.object(swarm, "TASK", None),
            patch.dict(os.environ, {"EXA_API_KEY": "configured"}, clear=True),
        ):
            self.assertEqual(swarm.resolve_research_source(args), "off")
        with tempfile.TemporaryDirectory() as directory:
            out = Path(directory)
            run = {
                "task": "bixbench_mini",
                "arm": "B",
                "llm": "fake",
                "exa": "on",
                "literature": "keyless",
                "repo": "/repo",
                "branch": "swarm-B-test",
                "status": "running",
                "rounds": 2,
            }
            (out / "run.json").write_text(json.dumps(run), encoding="utf-8")
            swarm.write_checkpoint(
                out, round_num=1, arm_commit="c", best_val=1.0, best_commit="b", viewer_dir=None
            )
            resumed = swarm.build_parser().parse_args(
                ["--resume", str(out), "--exa", "on", "--literature", "keyless"]
            )
            with redirect_stderr(io.StringIO()):
                swarm.resolve_run_args(resumed)
            self.assertEqual((resumed.exa, resumed.literature), ("off", "off"))
            held_out = out / "held_out_test.json"
            held_out.write_text("{}", encoding="utf-8")
            checkpoint = swarm.read_checkpoint(out)
            swarm.restore_checkpoint(out, checkpoint)
            self.assertTrue(held_out.exists())
            extended = swarm.build_parser().parse_args(["--resume", str(out), "--rounds", "3"])
            with (
                redirect_stderr(io.StringIO()),
                self.assertRaisesRegex(ValueError, "cannot extend a run"),
            ):
                swarm.resolve_run_args(extended)

    def test_resume_keeps_the_runs_literature_setting(self):
        with tempfile.TemporaryDirectory() as tmp:
            out = Path(tmp)
            run = {"task": "ignobel", "llm": "fake", "exa": "off", "literature": "keyless"}
            run |= {"repo": "/repo", "branch": "swarm-B-1", "status": "running"}
            (out / "run.json").write_text(json.dumps(run), encoding="utf-8")
            swarm.write_checkpoint(
                out, round_num=1, arm_commit="c", best_val=1.0, best_commit="b", viewer_dir=None
            )
            args = swarm.build_parser().parse_args(["--resume", str(out)])
            swarm.resolve_run_args(args)
            self.assertEqual(args.literature, "keyless")
            with patch.dict(os.environ, {}, clear=True):
                self.assertEqual(swarm.resolve_research_source(args), "keyless")
            other = swarm.build_parser().parse_args(["--resume", str(out), "--literature", "off"])
            with self.assertRaisesRegex(ValueError, "--literature off conflicts"):
                swarm.resolve_run_args(other)
            del run["literature"]
            run["llm"] = "tinker"
            (out / "run.json").write_text(json.dumps(run), encoding="utf-8")
            legacy = swarm.build_parser().parse_args(["--resume", str(out)])
            swarm.resolve_run_args(legacy)
            with patch.dict(os.environ, {}, clear=True):
                self.assertEqual(swarm.resolve_research_source(legacy), "off")


if __name__ == "__main__":
    unittest.main()
