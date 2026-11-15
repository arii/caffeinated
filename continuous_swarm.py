"""Continuous supervised work queue. Shared research mutations stay under one lock."""

import copy
import fcntl
import json
import threading
import time
from collections import deque
from concurrent.futures import FIRST_COMPLETED, ThreadPoolExecutor, wait

import llm


class WorkerClient:
    """Each worker owns its call bookkeeping; only inference releases the state lock."""

    def __init__(self, client, queue):
        self.client = copy.deepcopy(client)
        self.client.call_ids = []
        self.client.call_metadata = {}
        self.queue = queue
        self.lock = queue.lock

    def __getattr__(self, name):
        return getattr(self.client, name)

    def call(self, *args, **kwargs):
        if self.queue.stopped():
            raise llm.LLMError("Continuous run stopping; no request sent")
        self.lock.release()
        try:
            return self.client.call(*args, **kwargs)
        finally:
            self.lock.acquire()


class Queue:
    def __init__(self, out_dir, *, initial=8, maximum=20, concurrency=4, minutes=30, budget=10):
        if not 1 <= initial <= maximum <= 20 or not 1 <= concurrency <= 4:
            raise ValueError("Expected 1-20 workers and 1-4 concurrent jobs")
        self.out_dir = out_dir
        self.maximum = maximum
        self.concurrency = concurrency
        self.deadline = time.monotonic() + minutes * 60
        self.budget = budget
        self.agents = [f"worker-{n}" for n in range(1, initial + 1)]
        self.pending = deque()
        self.active = {}
        self.last_assigned = dict.fromkeys(self.agents, 0)
        self.serial = 0
        self.reason = None
        self.lock = threading.Lock()
        self.closed = False
        self.pool = ThreadPoolExecutor(max_workers=concurrency)

    def __enter__(self):
        self.lock.acquire()
        return self

    def __exit__(self, *_):
        self.close()

    def close(self):
        if self.closed:
            return
        self.closed = True
        self.reason = self.reason or "shutdown"
        self.pending.clear()
        self.lock.release()
        self.pool.shutdown(wait=True, cancel_futures=True)

    def stopped(self):
        if not self.reason:
            if (self.out_dir / "stop_requested").exists():
                self.reason = "user_stop"
            elif time.monotonic() >= self.deadline:
                self.reason = "time_limit"
            else:
                path = self.out_dir / "openai_budget.jsonl"
                if path.exists():
                    with path.open() as stream:
                        fcntl.flock(stream, fcntl.LOCK_SH)
                        reserved = sum(
                            json.loads(line)["reserved_usd"] for line in stream if line.strip()
                        )
                    if reserved >= max(0, self.budget - 0.35):
                        self.reason = "budget_limit"
        if self.reason:
            self.pending.clear()
        return bool(self.reason)

    def plan_agents(self):
        if self.stopped() or self.pending:
            return []
        busy = {item["agent"] for item in self.active.values()}
        # Only expand after the initial queue has been used and there is ongoing work.
        if self.serial and busy and len(self.agents) < self.maximum:
            for _ in range(min(2, self.maximum - len(self.agents))):
                agent = f"worker-{len(self.agents) + 1}"
                self.agents.append(agent)
                self.last_assigned[agent] = 0
        idle = [agent for agent in self.agents if agent not in busy]
        return sorted(idle, key=lambda agent: self.last_assigned[agent])[:8]

    def enqueue(self, function, kwargs, context, client):
        self.serial += 1
        agent = kwargs["agent"]
        self.last_assigned[agent] = self.serial
        worker_client = WorkerClient(client, self)
        kwargs = {**copy.deepcopy(kwargs), "round_num": self.serial, "llm_client": worker_client}
        self.pending.append(
            (
                function,
                kwargs,
                {**context, "agent": agent, "job": self.serial, "client": worker_client},
            )
        )

    def _execute(self, function, kwargs, context):
        with self.lock:
            if self.stopped():
                return None, context
            try:
                candidate = function(**kwargs)
            except llm.LLMError as error:
                if "budget exhausted" in str(error):
                    self.reason = "budget_limit"
                budget_rejection = isinstance(error, llm.WorkerCallBudgetError)
                candidate = {
                    "agent": kwargs["agent"],
                    "role": kwargs["role"],
                    "status": "reject",
                    "score": None,
                    "commit": "",
                    "descriptor": {"mechanism": "baseline", "method": "none"},
                    "sources": [],
                    "lead": None,
                    "idea": "worker call budget reached"
                    if budget_rejection
                    else "Model request failed",
                    "reasons": [f"worker_call_budget: {error}" if budget_rejection else str(error)],
                    "llm_error": not isinstance(error, llm.WorkerCallBudgetError),
                    "llm_call_ids": kwargs["llm_client"].call_ids,
                }
            return candidate, context

    def next(self):
        self.stopped()
        while self.pending and len(self.active) < self.concurrency:
            function, kwargs, context = self.pending.popleft()
            future = self.pool.submit(self._execute, function, kwargs, context)
            self.active[future] = context
        while self.active:
            self.lock.release()
            try:
                done, _ = wait(self.active, return_when=FIRST_COMPLETED)
            finally:
                self.lock.acquire()
            future = next(iter(done))
            del self.active[future]
            candidate, context = future.result()
            if candidate is not None:
                return candidate, context
        return None
