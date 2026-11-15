import json
import tempfile
import threading
import time
import unittest
from pathlib import Path

from continuous_swarm import Queue


class SlowClient:
    def __init__(self):
        self.call_ids = []
        self.call_metadata = {}

    def call(self, *, agent, round_num):
        time.sleep(0.12 if agent == "worker-1" else 0.01)
        self.call_ids.append(f"{agent}-{round_num}")
        return {"agent": agent}


def work(*, agent, round_num, llm_client, role):
    return llm_client.call(agent=agent, round_num=round_num)


class ContinuousQueueTests(unittest.TestCase):
    def test_fast_worker_finishes_before_slow_worker_without_batch_barrier(self):
        with tempfile.TemporaryDirectory() as tmp, Queue(Path(tmp)) as queue:
            client = SlowClient()
            for agent in queue.plan_agents():
                queue.enqueue(work, {"agent": agent, "role": "worker"}, {}, client)
            candidate, context = queue.next()
            self.assertNotEqual(candidate["agent"], "worker-1")
            self.assertLessEqual(len(queue.active), 3)
            self.assertEqual(len(context["client"].call_ids), 1)
            self.assertEqual(client.call_ids, [])
            seen = {candidate["agent"]}
            for _ in range(7):
                candidate, _ = queue.next()
                seen.add(candidate["agent"])
            self.assertEqual(len(seen), 8)

    def test_growth_is_bounded_and_never_assigns_busy_worker(self):
        with tempfile.TemporaryDirectory() as tmp, Queue(Path(tmp)) as queue:
            self.assertEqual(len(queue.plan_agents()), 8)
            queue.serial = 8
            queue.active["busy"] = {"agent": "worker-1"}
            for _ in range(20):
                self.assertNotIn("worker-1", queue.plan_agents())
            self.assertEqual(len(queue.agents), 20)
            queue.active.clear()

    def test_stop_budget_and_time_cancel_queued_work(self):
        for cause in ("user_stop", "budget_limit", "time_limit"):
            with (
                self.subTest(cause=cause),
                tempfile.TemporaryDirectory() as tmp,
                Queue(Path(tmp), budget=1) as queue,
            ):
                queue.enqueue(work, {"agent": "worker-1", "role": "worker"}, {}, SlowClient())
                if cause == "user_stop":
                    (Path(tmp) / "stop_requested").touch()
                elif cause == "budget_limit":
                    (Path(tmp) / "openai_budget.jsonl").write_text(
                        json.dumps({"reserved_usd": 0.8}) + "\n"
                    )
                else:
                    queue.deadline = time.monotonic() - 1
                self.assertIsNone(queue.next())
                self.assertEqual(queue.reason, cause)

    def test_at_most_four_provider_calls_in_flight(self):
        counts = {"active": 0, "peak": 0}
        lock = threading.Lock()
        barrier = threading.Barrier(4)

        class Client(SlowClient):
            def call(self, *, agent, round_num):
                with lock:
                    counts["active"] += 1
                    counts["peak"] = max(counts["peak"], counts["active"])
                barrier.wait(timeout=3)
                with lock:
                    counts["active"] -= 1
                return {"agent": agent}

        with tempfile.TemporaryDirectory() as tmp, Queue(Path(tmp), initial=20) as queue:
            for agent in queue.agents:
                queue.enqueue(work, {"agent": agent, "role": "worker"}, {}, Client())
            # Drain groups; don't block the fourth call by waiting at a later barrier.
            for _ in range(20):
                queue.next()
        self.assertEqual(counts["peak"], 4)


class ContinuousIntegrationTests(unittest.TestCase):
    def test_completed_jobs_keep_their_planning_research_counts(self):
        import swarm

        with tempfile.TemporaryDirectory() as tmp, Queue(Path(tmp), initial=2) as queue:
            out = Path(tmp)
            swarm.append_jsonl(out / "research_log.jsonl", {"type": "query", "endpoint": "search"})
            counts = swarm.round_tool_counts(out, 0, 0)
            for agent in queue.plan_agents():
                queue.enqueue(
                    work, {"agent": agent, "role": "worker"}, {"tool_counts": counts}, SlowClient()
                )
            for _ in range(2):
                _, job = queue.next()
                # No new search arrives while this already-completed job is collected.
                self.assertEqual(swarm.round_tool_counts(out, 1, 0)["exa_searches"], 0)
                swarm.assert_live_tool_use(
                    out,
                    round_num=job["job"],
                    research_start=1,
                    memory_start=0,
                    expect_exa=True,
                    expect_pastdev=False,
                    counts=swarm.completed_job_tool_counts(out, job, 1, 0),
                )

    def test_accept_study_without_git_identity_preserves_history(self):
        import os
        from unittest.mock import patch

        import swarm

        with (
            tempfile.TemporaryDirectory() as tmp,
            patch.dict(os.environ, {"GIT_CONFIG_GLOBAL": os.devnull, "GIT_CONFIG_NOSYSTEM": "1"}),
        ):
            repo = Path(tmp)
            swarm.git(repo, "init", "-q")
            target = repo / "prereg.json"
            target.write_text('{"study": 1}\n')
            swarm.git(repo, "add", ".")
            identity = ("-c", "user.name=Test", "-c", "user.email=test@localhost")
            swarm.git(repo, *identity, "commit", "-qm", "base")
            base = swarm.git_text(repo, "rev-parse", "HEAD")
            target.write_text('{"study": 2}\n')
            swarm.git(repo, "add", ".")
            swarm.git(repo, *identity, "commit", "-qm", "candidate")
            candidate = swarm.git_text(repo, "rev-parse", "HEAD")
            swarm.git(repo, "checkout", "--detach", base)
            swarm.git(repo, *identity, "commit", "--allow-empty", "-qm", "keep artifact history")
            artifact = swarm.git_text(repo, "rev-parse", "HEAD")
            with patch.object(swarm, "TARGET_FILE", "prereg.json"):
                swarm.accept_continuous_study(repo, candidate)
            self.assertEqual(json.loads(target.read_text()), {"study": 2})
            self.assertEqual(swarm.git_text(repo, "rev-parse", "HEAD^"), artifact)
            self.assertEqual(swarm.git_text(repo, "log", "-1", "--format=%ae"), "swarm@localhost")

    def test_budget_exception_returns_successful_cli_stop(self):
        import io
        from contextlib import redirect_stdout
        from unittest.mock import patch

        import llm
        import swarm
        from tests.test_export_viewer import autoresearch_run

        with tempfile.TemporaryDirectory() as tmp:
            out = autoresearch_run(Path(tmp))

            def fail(_args, state, _cleanup):
                state["out_dir"] = out
                state["dest"] = out / "viewer"
                raise llm.LLMError("Live run budget exhausted; no request sent")

            output = io.StringIO()
            with (
                patch.object(swarm, "_orchestrate", side_effect=fail),
                patch.object(swarm.signal, "signal"),
                redirect_stdout(output),
            ):
                code = swarm.main(["--task", "ignobel", "--continuous"])
            self.assertEqual(code, 0)
            self.assertIn("budget_limit", output.getvalue())
            native = json.loads((out / "run.json").read_text())
            self.assertEqual(native["status"], "stopped")
            self.assertEqual(native["stop_reason"], "budget_limit")

    def test_user_stop_drains_and_publishes_stopped(self):
        from unittest.mock import patch

        import swarm
        from tests.test_export_viewer import autoresearch_run

        with tempfile.TemporaryDirectory() as tmp:
            out = autoresearch_run(Path(tmp))

            def stop_run(_args, state, cleanup):
                state.update(out_dir=out, dest=out / "viewer")
                queue = cleanup.enter_context(Queue(out, initial=2))
                state["queue"] = queue
                for agent in queue.plan_agents():
                    queue.enqueue(work, {"agent": agent, "role": "worker"}, {}, SlowClient())
                queue.next()
                (out / "stop_requested").touch()
                while queue.next() is not None:
                    pass
                self.assertEqual(queue.reason, "user_stop")
                swarm.record_queue_stop(
                    queue, out, json.loads((out / "run.json").read_text()), state
                )
                return {"out": str(out)}

            with patch.object(swarm, "_orchestrate", side_effect=stop_run):
                swarm.orchestrate(type("Args", (), {"continuous": True})())
            self.assertEqual(json.loads((out / "run.json").read_text())["status"], "stopped")
            manifests = list((out / "viewer").glob("*/manifest.json"))
            self.assertEqual(len(manifests), 1)
            self.assertEqual(json.loads(manifests[0].read_text())["status"], "stopped")
