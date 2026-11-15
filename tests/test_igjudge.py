import copy
import json
import tempfile
import unittest
from pathlib import Path
from unittest.mock import Mock, patch

from testcases.ignobel import igjudge


def verdict(score=7):
    return {
        "scores": {
            c["key"]: {"initial": score, "revised": score, "final": score, "reason": "Test reason"}
            for c in igjudge.CRITERIA
        },
        "total": 99,
        "classification": "High Potential",
        "verdict": "Worth investigating, not a guaranteed award.",
        "safeguards": ["Hypothetical proposal"],
    }


class IgJudgeTests(unittest.TestCase):
    def test_parse_fences_and_reasoning(self):
        data = verdict()
        for response in (
            "Thinking {not JSON}\n```json\n" + json.dumps(data) + "\n```",
            {"content": json.dumps(data), "reasoning_content": "Earlier thoughts"},
            {"content": "", "reasoning_content": "Reasoning\n" + json.dumps(data)},
        ):
            with self.subTest(response=response):
                result = igjudge.parse_response(response)
                self.assertEqual(result["total"], 70)
                self.assertEqual(result["model_total"], 99)

    def test_weighting_uses_final_scores(self):
        data = verdict()
        for criterion, final in zip(igjudge.CRITERIA, (1, 2, 3, 4, 5, 6)):
            data["scores"][criterion["key"]]["final"] = final
        self.assertEqual(igjudge.validate(data)["total"], 32.5)

    def test_ranges_and_required_fields(self):
        for invalid in (0, 11, True, 7.5, "7", None):
            data = verdict()
            data["scores"]["humor"]["final"] = invalid
            with self.subTest(invalid=invalid), self.assertRaises(ValueError):
                igjudge.validate(data)
        for data in ({}, {"scores": {}}, {**verdict(), "safeguards": "no"}):
            with self.assertRaises(ValueError):
                igjudge.validate(data)
        with self.assertRaises(ValueError):
            igjudge.parse_response("")

    def test_safeguards_override_model(self):
        data = verdict(10)
        data["scores"]["plausibility"]["final"] = 3
        result = igjudge.validate(data)
        self.assertEqual(result["total"], 86)
        self.assertEqual(result["classification"], "Moderate Potential")
        self.assertIn("Raw numerical classification: Exceptional Candidate", result["safeguards"])
        data = verdict(10)
        data["scores"]["insight"]["final"] = 3
        self.assertEqual(igjudge.validate(data)["classification"], "High Potential")

    def test_classification_boundaries(self):
        for score, expected in (
            (1, "Very Low Potential"),
            (4, "Low Potential"),
            (6, "Moderate Potential"),
            (7, "High Potential"),
            (9, "Exceptional Candidate"),
        ):
            self.assertEqual(igjudge.validate(verdict(score))["classification"], expected)

    def test_retry_and_cache(self):
        idea = {
            "study_id": "study:1",
            "title": "Idea",
            "hypothesis": "",
            "agent_id": "a",
            "gate": "pending",
            "committee": "not judged",
            "study": {},
        }
        prior = Mock(
            return_value={
                "available": True,
                "results": [{"title": "Paper", "url": "https://example.org"}],
            }
        )
        with tempfile.TemporaryDirectory() as tmp:
            complete = Mock(side_effect=["malformed", json.dumps(verdict())])
            result = igjudge.judge_idea(idea, "model", "prompt", tmp, complete, prior)
            self.assertIsNone(result["error"])
            self.assertEqual(complete.call_count, 2)
            self.assertEqual(
                result["prior_work"], [{"title": "Paper", "url": "https://example.org"}]
            )
            cached = igjudge.judge_idea(idea, "model", "prompt", tmp, complete, prior)
            self.assertEqual(cached, result)
            self.assertEqual(complete.call_count, 2)
        with tempfile.TemporaryDirectory() as tmp:
            complete = Mock(return_value="invalid")
            result = igjudge.judge_idea(idea, "model", "prompt", tmp, complete, prior)
            self.assertEqual(complete.call_count, 2)
            self.assertTrue(result["error"])
            self.assertIsNone(result["total"])
            self.assertEqual(result["scores"], {})

    def test_leaderboard_empty_errors_and_ties(self):
        ideas = [
            {"study_id": sid, "total": total, "error": error}
            for sid, total, error in (
                ("study:2", 70, None),
                ("study:1", 70, None),
                ("study:3", None, "error"),
            )
        ]
        result = igjudge.build_artifact("run", "model", "prompt", ideas)
        self.assertEqual(result["winner"], "study:1")
        self.assertEqual([r["study_id"] for r in result["leaderboard"]], ["study:1", "study:2"])
        self.assertEqual(igjudge.build_artifact("run", "m", "p", [])["winner"], "")
        self.assertEqual(igjudge.build_artifact("run", "m", "p", ideas[2:])["leaderboard"], [])

    def test_recording_ingestion_includes_failed_gates(self):
        recording = (
            Path(__file__).resolve().parents[1]
            / "data/pages/viewer/50bbe2bb-0a86-50d9-9ef8-be8aa5fa3929"
        )
        run_id, ideas = igjudge.load_ideas(recording)
        self.assertEqual(run_id, recording.name)
        self.assertEqual(len(ideas), 21)
        self.assertTrue(ideas[0]["hypothesis"])
        self.assertTrue(ideas[0]["gate"].startswith("rejected:"))
        self.assertTrue(all(i["committee"] == "not judged" for i in ideas))

    def test_run_dir_skips_critic_duplicates(self):
        record = {
            "prereg": {"question": "Question", "hypothesis": "Hypothesis"},
            "result": {"confirmed": True},
        }
        with tempfile.TemporaryDirectory() as tmp:
            records = [record, copy.deepcopy(record), {**record, "role": "critic"}]
            (Path(tmp) / "ignobel_studies.jsonl").write_text("\n".join(map(json.dumps, records)))
            _, ideas = igjudge.load_ideas(tmp)
            self.assertEqual(len(ideas), 1)
            self.assertEqual(ideas[0]["gate"], "passed")

    def test_missing_key_and_non_tinker_fail_loudly(self):
        with (
            patch.dict("os.environ", {}, clear=True),
            self.assertRaisesRegex(RuntimeError, "TINKER_API_KEY"),
        ):
            igjudge.require_tinker()
        with (
            patch.dict(
                "os.environ",
                {"TINKER_API_KEY": "fake", "TINKER_BASE_URL": "https://example.org"},
                clear=True,
            ),
            self.assertRaisesRegex(RuntimeError, "Tinker-only"),
        ):
            igjudge.require_tinker()


if __name__ == "__main__":
    unittest.main()
