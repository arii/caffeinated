import csv
import itertools
import json
import os
from pathlib import Path
import subprocess
import sys
import tempfile
import threading
import unittest
from unittest.mock import Mock, patch

from experiments import ab, analyze_ab
import llm
import swarm


class StatisticsTests(unittest.TestCase):
    def pair(self, seed=1, curve_a=(1.0, 0.8, 0.8), curve_b=(1.0, 0.6, 0.6)):
        rows = []
        for arm, curve in (("A", curve_a), ("B", curve_b)):
            rows.append({
                "task": "hadamard19", "seed": str(seed), "arm": arm,
                "run_id": f"{seed}-{arm}", "memory_scope": f"/{seed}/{arm}/memory.jsonl",
                "source_commit": "abc", "llm": "fake", "model": "fake", "rounds": "2",
                "workers": "4", "exa": "off", "exa_max_calls": "200", "memory_backend": "local",
                "eps": "0.005", "profile_sha256": "profile", "task_inputs_sha256": "inputs", "best_loss": str(curve[-1]),
                "loss_by_round": json.dumps(curve),
                "auc": str(sum((a + b) / 2 for a, b in zip(curve, curve[1:]))),
            })
        return rows

    def test_paired_differences_sd_bootstrap_and_fake_warning(self):
        rows = self.pair() + self.pair(2, curve_b=(1.0, 0.7, 0.7))
        task = analyze_ab.analyze(rows, samples=1000)["tasks"]["hadamard19"]
        self.assertEqual(task["n_pairs"], 2)
        self.assertAlmostEqual(task["best_loss"]["mean_B_minus_A"], -0.15)
        self.assertAlmostEqual(task["best_loss"]["sd_B_minus_A"], 0.1 / 2**0.5)
        self.assertAlmostEqual(task["auc"]["mean_B_minus_A"], -0.225)
        self.assertEqual(task["best_loss"]["B_improved"], 2)
        self.assertIn("too small", task["best_loss"]["small_n_note"])
        self.assertIn("no evidence", task["evidence"])
        self.assertEqual(task, analyze_ab.analyze(rows, samples=1000)["tasks"]["hadamard19"])
        lo, hi = task["best_loss"]["bootstrap_95_ci_mean"]
        self.assertAlmostEqual(lo, -0.2)
        self.assertAlmostEqual(hi, -0.1)

    def test_eps_is_practical_margin_for_loss_and_mean_auc(self):
        task = analyze_ab.analyze(self.pair(curve_b=(1.0, 0.797, 0.797)), samples=100)["tasks"]["hadamard19"]
        self.assertEqual(task["best_loss"]["B_improved"], 0)
        self.assertEqual(task["best_loss"]["within_margin"], 1)
        self.assertEqual(task["auc"]["margin"], 0.01)
        self.assertIsNone(task["best_loss"]["sd_B_minus_A"])
        self.assertIsNone(task["best_loss"]["bootstrap_95_ci_mean"])

    def test_sign_and_wilcoxon_exact_pvalues_and_ties(self):
        for differences in ([], [0, 0], [-1] * 5, [-1] * 6, [-1, 2, -2, 3, 0]):
            result = analyze_ab.wilcoxon(differences)
            nonzero = [d for d in differences if d]
            if nonzero:
                absolute = sorted(abs(d) for d in nonzero)
                ranks = [sum(i + 1 for i, value in enumerate(absolute) if value == abs(d)) / absolute.count(abs(d)) for d in nonzero]
                observed = min(sum(r for d, r in zip(nonzero, ranks) if d > 0), sum(r for d, r in zip(nonzero, ranks) if d < 0))
                extremes = 0
                for signs in itertools.product((0, 1), repeat=len(nonzero)):
                    plus = sum(r * s for r, s in zip(ranks, signs))
                    extremes += min(plus, sum(ranks) - plus) <= observed
                self.assertAlmostEqual(result["p_two_sided"], extremes / 2**len(nonzero))
            else:
                self.assertEqual(result["p_two_sided"], 1)
        self.assertEqual(analyze_ab.sign_test([-1] * 6)["p_two_sided"], 0.03125)
        self.assertEqual(analyze_ab.sign_test([-1] * 5)["p_two_sided"], 0.0625)

    def test_rejects_missing_duplicate_contaminated_and_mismatched_pairs(self):
        cases = [self.pair()[:1], self.pair() + self.pair()[:1]]
        for field, value in (("memory_scope", "/1/A/memory.jsonl"), ("run_id", "1-A"),
                             ("model", "different"), ("source_commit", "different"),
                             ("loss_by_round", "[1, 0.8]"), ("best_loss", "nan")):
            rows = self.pair()
            rows[1][field] = value
            cases.append(rows)
        for rows in cases:
            with self.subTest(rows=rows), self.assertRaises(ValueError):
                analyze_ab.analyze(rows, samples=100)


class CollectionTests(unittest.TestCase):
    def test_costs_missing_logged_estimated_and_retry_usage(self):
        self.assertEqual(ab.costs([], free=True), (0, "disabled_or_fake"))
        self.assertEqual(ab.costs([])[0], "")
        self.assertEqual(ab.costs([{"cost": 0.13}, {"cost": 0.02}])[0], 0.15)
        self.assertEqual(ab.costs([{"cost": 0.13}, {}])[0], "")
        usage = [{"usage": {"prompt_tokens": 100, "completion_tokens": 50},
                  "attempts": [{"usage": {"prompt_tokens": 60, "completion_tokens": 30}}]}]
        cost, source = ab.costs(usage, rates=(2, 4))
        self.assertAlmostEqual(cost, 0.0004)
        self.assertEqual(source, "token_rate_estimate")

    def test_collects_confirmed_frontier_not_unkept_best(self):
        with tempfile.TemporaryDirectory() as tmp:
            out = Path(tmp)
            settings = {"task": "hadamard19", "seed": 1, "arm": "B", "rounds": 2,
                        "workers": 4, "llm": "fake", "model": "fake", "exa": "off", "memory_backend": "local"}
            (out / "run.json").write_text(json.dumps({**settings, "status": "finished", "run_id": "id"}))
            (out / "boredom_profile.json").write_text('{"eps": 0.005}')
            candidates = [{"kind": "candidate", "round": r, "status": "reject"} for r in (1, 2) for _ in range(4)]
            candidates[0].update(status="discard", score=0.1, descriptor={"mechanism": "search", "method": "seed"})
            candidates[4].update(status="keep", score=0.5, replicate_score=0.7, descriptor={"mechanism": "search", "method": "seed"})
            ledger = [{"kind": "baseline", "score": 1.0}] + candidates + [{"kind": "critic", "round": 2}]
            for name, rows in (("ledger.jsonl", ledger), ("assignments.jsonl", [{"round": 1, "regime": "EXPLOIT"}, {"round": 2, "regime": "CONVERGED"}])):
                (out / name).write_text("".join(json.dumps(r) + "\n" for r in rows))
            row = ab.summarize(out, settings)
            self.assertEqual(json.loads(row["loss_by_round"]), [1, 1, 0.6])
            self.assertEqual(row["best_loss"], 0.6)
            self.assertEqual(row["best_observed_loss"], 0.1)
            self.assertEqual(row["rounds_to_best"], 2)
            self.assertEqual(row["auc"], 1.8)
            self.assertEqual((row["keeps"], row["evaluated"], row["rejected"], row["critic_evaluated"]), (1, 2, 6, 1))
            self.assertEqual(row["distinct_cells"], 1)
            self.assertTrue(row["converged"])
            (out / "assignments.jsonl").write_text('{"round":1}\n')
            with self.assertRaisesRegex(ValueError, "rounds"):
                ab.summarize(out, settings)

    def test_driver_disallows_live_calls_by_default_and_duplicate_seeds(self):
        parser = ab.build_parser()
        for extra, message in ((["--llm", "tinker"], "--live"),
                               (["--seeds", "1", "1"], "distinct"),
                               (["--jobs", "0"], "jobs"),
                               (["--jobs", "-1"], "jobs"),
                               (["--exa", "on"], "fake validation")):
            args = parser.parse_args(["--out", "/unused", "--seeds", "1"] + extra)
            with self.assertRaisesRegex(ValueError, message):
                ab.run_experiment(args)

    def test_convergence_pads_budget_and_duplicates_are_not_evaluations(self):
        with tempfile.TemporaryDirectory() as tmp:
            out = Path(tmp)
            settings = {"task": "hadamard19", "seed": 1, "arm": "B", "rounds": 5,
                        "workers": 4, "llm": "fake", "model": "fake", "exa": "off", "memory_backend": "local"}
            (out / "run.json").write_text(json.dumps({**settings, "status": "finished", "run_id": "id", "converged": True}))
            (out / "boredom_profile.json").write_text('{"eps": 0.005}')
            (out / "converged.json").write_text('{"round":2, "best_loss":0.6}')
            (out / "assignments.jsonl").write_text('{"round":1,"regime":"EXPLOIT"}\n')
            candidate = {"kind": "candidate", "round": 1, "descriptor": {"mechanism": "search", "method": "seed"}}
            ledger = [{"kind": "baseline", "score": 1.0},
                      {**candidate, "status": "keep", "score": 0.6, "commit": "a", "critic_rerun": "skipped (deterministic)"},
                      {**candidate, "status": "duplicate", "score": 0.6},
                      {**candidate, "status": "duplicate", "score": 0.6},
                      {**candidate, "status": "reject"},
                      {"kind": "critic", "round": 1, "commit": "a"}]
            (out / "ledger.jsonl").write_text("".join(json.dumps(r) + "\n" for r in ledger))
            row = ab.summarize(out, settings)
            self.assertEqual(json.loads(row["loss_by_round"]), [1, 0.6, 0.6, 0.6, 0.6, 0.6])
            self.assertEqual((row["evaluated"], row["duplicates"], row["rejected"]), (1, 2, 1))
            self.assertEqual((row["rounds_completed"], row["candidate_attempts"]), (1, 4))
            self.assertEqual((row["critic_confirmations"], row["critic_evaluated"]), (1, 0))
            self.assertTrue(row["converged"])
            (out / "converged.json").unlink()
            with self.assertRaisesRegex(ValueError, "rounds"):
                ab.summarize(out, settings)

    def test_driver_isolates_clones_and_matches_all_budgets(self):
        with tempfile.TemporaryDirectory() as tmp:
            args = ab.build_parser().parse_args(["--repo", tmp, "--out", str(Path(tmp) / "out"), "--tasks", "hadamard19", "--seeds", "11", "22", "--jobs", "2"])
            commands, summaries = [], []
            barrier, lock = threading.Barrier(2), threading.Lock()
            active = peak = 0

            def execute(command, **kwargs):
                nonlocal active, peak
                commands.append((command, kwargs))
                if "--arm" in command:
                    with lock:
                        active += 1
                        peak = max(peak, active)
                    barrier.wait(timeout=5)
                    with lock:
                        active -= 1
                return subprocess.CompletedProcess(command, 0)

            def summarize(path, settings):
                summaries.append((path, settings))
                return {key: settings.get(key, "") for key in ab.FIELDS}

            def fake_git(repo, *parts):
                return "abc" if parts[0] == "rev-parse" else ""

            inherited = {"EXA_REPLAY": "1", "BOREDOM": "off", "MEMORY_MIRROR": "/shared"}
            with patch.dict(os.environ, inherited), patch.object(ab, "git", side_effect=fake_git), patch.object(ab.subprocess, "run", side_effect=execute), patch.object(ab, "summarize", side_effect=summarize), patch.object(ab, "task_inputs_digest", return_value="inputs"):
                result = ab.run_experiment(args)
            with result.open() as stream:
                self.assertEqual(len(list(csv.DictReader(stream))), 4)
            self.assertEqual(peak, 2)
            manifest = json.loads((result.parent / "manifest.json").read_text())
            self.assertEqual((manifest["jobs"], manifest["status"]), (2, "finished"))
            self.assertTrue(all(r["status"] == "finished" for r in manifest["runs"]))
            self.assertEqual(len({str(p) for p, _ in summaries}), 4)
            swarms = [(c, k) for c, k in commands if "--arm" in c]
            self.assertEqual(len(swarms), 4)
            for command, kwargs in swarms:
                self.assertIn("--no-push", command)
                self.assertEqual(kwargs["env"]["MEMORY_BACKEND"], "local")
                self.assertNotIn("EXA_REPLAY", kwargs["env"])
                self.assertNotIn("BOREDOM", kwargs["env"])
                self.assertNotIn("MEMORY_MIRROR", kwargs["env"])
            self.assertEqual({s["rounds"] for _, s in summaries}, {5})
            self.assertEqual({s["workers"] for _, s in summaries}, {4})
            self.assertEqual({s["source_commit"] for _, s in summaries}, {"abc"})

    def test_parallel_failure_drains_running_arms_without_starting_queued_arms(self):
        with tempfile.TemporaryDirectory() as tmp:
            out = Path(tmp) / "out"
            args = ab.build_parser().parse_args(["--repo", tmp, "--out", str(out), "--tasks", "hadamard19", "--seeds", "11", "22", "--jobs", "2"])
            barrier, failed_written, started = threading.Barrier(2), threading.Event(), []
            original_write = ab.write_manifest

            def write_manifest(path, manifest):
                original_write(path, manifest)
                if any(r["status"] == "failed" for r in manifest["runs"]):
                    failed_written.set()

            def run_arm(run, *unused):
                started.append((run["seed"], run["arm"]))
                barrier.wait(timeout=5)
                if run["arm"] == "A":
                    raise RuntimeError("planned failure")
                if not failed_written.wait(timeout=5):
                    raise AssertionError("failure was not checkpointed while the other arm ran")
                return {"task": run["task"], "seed": run["seed"], "arm": run["arm"]}

            with patch.object(ab, "git", side_effect=lambda repo, *parts: "abc" if parts[0] == "rev-parse" else ""), patch.object(ab, "run_arm", side_effect=run_arm), patch.object(ab, "write_manifest", side_effect=write_manifest):
                with self.assertRaisesRegex(RuntimeError, "planned failure"):
                    ab.run_experiment(args)
            self.assertEqual(set(started), {(11, "A"), (11, "B")})
            manifest = json.loads((out / "manifest.json").read_text())
            self.assertEqual(manifest["status"], "failed")
            self.assertEqual([r["status"] for r in manifest["runs"] if r["seed"] == 22], ["not_started", "not_started"])
            with (out / "results.csv").open() as stream:
                self.assertEqual([r["arm"] for r in csv.DictReader(stream)], ["B"])

    def test_jobs_defaults_to_serial(self):
        self.assertEqual(ab.build_parser().parse_args(["--out", "unused", "--seeds", "1"]).jobs, 1)


class SeedAndControlTests(unittest.TestCase):
    def test_fake_continues_after_an_edit_is_kept(self):
        values = {"candidate_source": "a = 2\nb = 1\n", "agent": "worker-1", "fake_edits": [
            {"old": "a = 1", "new": "a = 2", "descriptor": {}},
            {"old": "b = 1", "new": "b = 2", "descriptor": {}},
        ]}
        self.assertEqual(llm.fake_response("WORKER_PROPOSE", values)["edits"], [{"old": "b = 1", "new": "b = 2"}])

    def test_all_task_fake_proposals_use_their_profile_vocab(self):
        for task in ab.TASKS:
            directory = swarm.ROOT / "testcases" / task
            config = json.loads((directory / "task.json").read_text())
            profile = swarm.meter.load_profile(directory / "boredom_profile.json")
            source = (directory / config["editable"]).read_text()
            for agent in swarm.AGENTS:
                proposal = llm.fake_response("WORKER_PROPOSE", {
                    "agent": agent, "candidate_source": source,
                    "fake_edits": config.get("fake_edits", []),
                    "fake_targets": config.get("fake_targets", []),
                })
                with self.subTest(task=task, agent=agent):
                    swarm.validate_proposal(profile, proposal)

    def test_seed_replays_fake_edits_and_varies_between_pairs(self):
        task = swarm.load_task("hadamard19")
        values = {"candidate_source": (swarm.ROOT / task["target"]).read_text(), "fake_targets": task["fake_targets"]}
        with tempfile.TemporaryDirectory() as tmp:
            def response(seed, name):
                client = llm.LLMClient(mode="fake", seed=seed, log_path=Path(tmp) / name)
                return client.call("WORKER_PROPOSE", agent="worker-1", round_num=1, values=values)
            self.assertEqual(response(11, "a"), response(11, "b"))
            self.assertNotEqual(response(11, "c"), response(22, "d"))

    def test_tinker_receives_seed_and_extra_calls_do_not_shift_it(self):
        with tempfile.TemporaryDirectory() as tmp:
            client = llm.LLMClient(mode="fake", seed=42, log_path=Path(tmp) / "llm.jsonl")
            client.mode = "tinker"
            sampler, tokenizer = Mock(), Mock()
            tokenizer.apply_chat_template.return_value = [1, 2]
            tokenizer.eos_token_id = 99
            tokenizer.decode.return_value = '{"ok": true}'
            sampler.sample.return_value.result.return_value.sequences = [type("Sequence", (), {"tokens": [3]})()]
            client.tinker_sampler, client.tinker_tokenizer = sampler, tokenizer
            sdk = Mock()
            sdk.types.ModelInput.from_ints.return_value.to_ints.return_value = [1, 2]
            sdk.types.SamplingParams.side_effect = lambda **kwargs: kwargs
            with patch.dict(sys.modules, {"tinker": sdk}):
                client.call("SCOUT_QUERY", agent="worker-1", round_num=2, values={})
                seed1 = sampler.sample.call_args.kwargs["sampling_params"]["seed"]
                client.call("SCOUT_QUERY", agent="worker-2", round_num=1, values={})
                client.call("SCOUT_QUERY", agent="worker-1", round_num=2, values={})
                seed2 = sampler.sample.call_args.kwargs["sampling_params"]["seed"]
            self.assertEqual(seed1, seed2)
            self.assertEqual(llm.read_log(client.log_path)[0]["seed"], seed1)

    def test_arm_a_logs_meter_without_using_it_for_scout_or_prompt(self):
        profile = swarm.meter.load_profile(swarm.ROOT / "testcases/hadamard19/boredom_profile.json")
        status = swarm.meter.status(profile, [])
        status.update(B=0.99, regime="PARADIGM_BREAKOUT")
        with patch.object(swarm.meter, "status", return_value=status):
            allocation = swarm.allocate_roles(profile, [], arm="A")
        self.assertEqual(allocation["scouts"], ["worker-1"])
        self.assertEqual(allocation["regime"], "EXPLOIT")
        self.assertEqual(allocation["swarm_B"], 0.99)
        with swarm.arm_environment("A", False, "local"):
            common = swarm.common_values("worker-1", 1, "exploit", allocation, 0.99, "abc", 1, profile)
        self.assertEqual(common["swarm_B"], "disabled")
        self.assertEqual(common["agent_B"], "disabled")
        with tempfile.TemporaryDirectory() as tmp, patch.object(swarm, "write_memory_item") as write:
            swarm.append_assignment(allocation, out_dir=tmp, backend="local", mirror="m", memory_log="l", arm="A", round_num=1)
            recalled = json.loads(write.call_args.args[2])
            self.assertNotIn("swarm_B", recalled)
            self.assertNotIn("per_agent_B", recalled)
            self.assertEqual(ab.read_jsonl(Path(tmp) / "assignments.jsonl")[0]["swarm_B"], 0.99)


if __name__ == "__main__":
    unittest.main()
