"""Shared exact grader for the Hadamard max-det tasks of other orders (hadamard19 keeps its own).

task.json sets "order" and either "record_det" (a proven maximal |det| of a +-1 matrix; loss is
log10(record) - log10|det|, 0 at the optimum) or "bound": "barba" (loss against Barba's upper
bound sqrt(2n-1)(n-1)^((n-1)/2) for n = 1 mod 4, used where no verified maximum is shipped).
"""

import json
import math
import time
from pathlib import Path

from testcases import sandbox
from testcases.hadamard19.evaluate import bareiss_det

TIMEOUT_S = 60


def reference(config):
    n = config["order"]
    if "record_det" in config:
        return math.log10(int(config["record_det"])), int(config["record_det"])
    if config.get("bound") == "barba" and n % 4 == 1:
        return 0.5 * math.log10(2 * n - 1) + (n - 1) / 2 * math.log10(n - 1), None
    raise ValueError("task.json needs record_det or bound=barba with order = 1 mod 4")


def validate(matrix, n):
    if (
        not isinstance(matrix, list)
        or len(matrix) != n
        or any(not isinstance(row, list) or len(row) != n for row in matrix)
    ):
        raise ValueError(f"matrix must be {n}x{n}")
    if any(type(value) is not int or value not in (-1, 1) for row in matrix for value in row):
        raise ValueError("entries must be the integers 1 or -1")


def evaluate_source(source, task_dir, timeout_s=None):
    task_dir = Path(task_dir).resolve()
    started = time.time()
    config = json.loads((task_dir / "task.json").read_text(encoding="utf-8"))
    n = config["order"]
    determinant, score, status, reason = 0, 0.0, "crash", None
    network_isolated, diagnostics, candidate_stderr = False, "", ""
    try:
        run = sandbox.run_candidate(
            task_dir,
            config["editable"],
            source,
            timeout_s=config.get("timeout_s", TIMEOUT_S) if timeout_s is None else timeout_s,
        )
        network_isolated = run.network_isolated
        candidate_stderr = run.stderr
        failure = sandbox.candidate_failure(run)
        if failure:
            reason, diagnostics = failure
        else:
            try:
                lines = [line for line in run.stdout.splitlines() if line.strip()]
                result = json.loads(lines[-1]) if lines else None
                if not isinstance(result, dict) or "matrix" not in result:
                    raise ValueError("construct.py must print an object with matrix")
                validate(result["matrix"], n)
            except (IndexError, json.JSONDecodeError, ValueError) as error:
                reason = "invalid_output"
                diagnostics = f"{type(error).__name__}: {error}"
            else:
                determinant = abs(bareiss_det(result["matrix"]))
                score = math.log10(determinant) if determinant else 0.0
                status = "ok"
    except sandbox.SandboxUnavailable as error:
        reason, diagnostics = "sandbox_unavailable", str(error)
    except Exception as error:
        reason, diagnostics = "grader_error", f"{type(error).__name__}: {error}"

    record, record_det = reference(config)
    loss = record - score
    lines = [
        f"det: {determinant}",
        f"score: {score:.6f}",
        f"loss: {loss:.6f}",
        f"{'record' if record_det else 'upper_bound'}: {record:.6f}",
    ]
    if record_det:
        lines.append(f"matches_record: {str(determinant == record_det).lower()}")
    lines += [
        f"proxy_note: {config.get('proxy_note', '')}",
        f"network_isolated: {str(network_isolated).lower()}",
        f"seconds: {time.time() - started:.1f}",
    ]
    stderr = f"error: {reason}: {diagnostics}\n" if status != "ok" else ""
    if candidate_stderr:
        stderr += candidate_stderr if candidate_stderr.endswith("\n") else candidate_stderr + "\n"
    return {
        "score": score,
        "loss": loss,
        "status": status,
        "reason": reason,
        "stdout": "\n".join(lines) + "\n",
        "stderr": stderr,
        "network_isolated": network_isolated,
    }
