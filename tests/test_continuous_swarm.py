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
