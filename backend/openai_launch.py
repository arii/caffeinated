"""Launch the budgeted Sol/Luna Ig Nobel run; the recording catalog follows its viewer output."""

import os
import subprocess
import threading
import time
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SCRIPT = ROOT / "scripts" / "run_openai_ignobel.sh"
MAX_COST_USD = 10.0


def enabled():
    return os.environ.get("LAB_OPENAI_LAUNCH", "").strip().lower() in {"1", "true", "yes", "on"}


def cost_cap():
    try:
        requested = float(os.environ.get("LAB_OPENAI_MAX_COST_USD", MAX_COST_USD))
    except ValueError:
        requested = MAX_COST_USD
    return max(0.01, min(requested, MAX_COST_USD))


class Launcher:
    def __init__(self, log_dir, root=ROOT):
        self.log_dir = Path(log_dir)
        self.root = Path(root)
        self.process = None
        self.current = None
        self.lock = threading.Lock()

    def running(self):
        return self.process is not None and self.process.poll() is None

    def status(self):
        return {
            "enabled": enabled(),
            "available": bool(os.environ.get("OPENAI_API_KEY")),
            "running": self.running(),
            "current": self.current,
            "maxCostUsd": cost_cap(),
            "maxRounds": 5,
        }

    def start(self, rounds):
        with self.lock:
            if self.running():
                raise RuntimeError("busy")
            if not os.environ.get("OPENAI_API_KEY"):
                raise LookupError("OPENAI_API_KEY is not configured on the server")
            name = time.strftime("openai-ignobel-%Y%m%d-%H%M%S")
            env = {
                **os.environ,
                "OPENAI_RUN_ROUNDS": str(rounds),
                "OPENAI_RUN_OUT": f"experiments/{name}",
                "OPENAI_MAX_COST_USD": str(cost_cap()),
            }
            self.log_dir.mkdir(parents=True, exist_ok=True)
            with (self.log_dir / f"{name}.log").open("w") as log:
                self.process = subprocess.Popen(
                    [str(SCRIPT)],
                    cwd=self.root,
                    env=env,
                    stdout=log,
                    stderr=subprocess.STDOUT,
                    start_new_session=True,
                )
            self.current = name
            return {"name": name, "rounds": rounds, "maxCostUsd": cost_cap()}
