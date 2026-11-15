"""Trusted exact grader for the order-22 Hadamard max-det task (see testcases/maxdet.py)."""

import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))

from testcases import maxdet

HERE = Path(__file__).resolve().parent


def evaluate_source(source, task_dir=HERE, timeout_s=None):
    return maxdet.evaluate_source(source, task_dir, timeout_s)


def main():
    result = evaluate_source((HERE / "construct.py").read_text(encoding="utf-8"))
    sys.stdout.write(result["stdout"])
    sys.stderr.write(result["stderr"])


if __name__ == "__main__":
    main()
