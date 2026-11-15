"""Trusted exact grader for the order-19 Hadamard proxy."""

import json
import math
import sys
import time
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))

from testcases import sandbox

HERE = Path(__file__).resolve().parent
N = 19
RECORD_DET = 2**18 * 3411968
TIMEOUT_S = 60


def bareiss_det(matrix):
    values = [row[:] for row in matrix]
    size, sign, previous = len(values), 1, 1
    for column in range(size - 1):
        if values[column][column] == 0:
            swap = next(
                (index for index in range(column + 1, size) if values[index][column] != 0),
                None,
            )
            if swap is None:
                return 0
            values[column], values[swap] = values[swap], values[column]
            sign = -sign
        for row in range(column + 1, size):
            for index in range(column + 1, size):
                values[row][index] = (
                    values[row][index] * values[column][column]
                    - values[row][column] * values[column][index]
                ) // previous
        previous = values[column][column]
    return sign * values[-1][-1]


def validate(matrix):
    if (
        not isinstance(matrix, list)
        or len(matrix) != N
        or any(not isinstance(row, list) or len(row) != N for row in matrix)
    ):
        raise ValueError(f"matrix must be {N}x{N}")
    if any(type(value) is not int or value not in (-1, 1) for row in matrix for value in row):
        raise ValueError("entries must be the integers 1 or -1")


def evaluate_source(source, task_dir=HERE, timeout_s=None):
    task_dir = Path(task_dir).resolve()
    started = time.time()
    determinant = 0
    score = 0.0
    status = "crash"
    reason = None
    network_isolated = False
    diagnostics = ""
    candidate_stderr = ""
    try:
        run = sandbox.run_candidate(
            task_dir,
            "construct.py",
            source,
            timeout_s=TIMEOUT_S if timeout_s is None else timeout_s,
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
                validate(result["matrix"])
            except (IndexError, json.JSONDecodeError, ValueError) as error:
                reason = "invalid_output"
                diagnostics = f"{type(error).__name__}: {error}"
            else:
                determinant = abs(bareiss_det(result["matrix"]))
                score = math.log10(determinant) if determinant else 0.0
                status = "ok"
    except sandbox.SandboxUnavailable as error:
        reason = "sandbox_unavailable"
        diagnostics = str(error)
    except Exception as error:
        reason = "grader_error"
        diagnostics = f"{type(error).__name__}: {error}"

    record = math.log10(RECORD_DET)
    loss = record - score
    config = json.loads((task_dir / "task.json").read_text(encoding="utf-8"))
    lines = [
        f"det: {determinant}",
        f"score: {score:.6f}",
        f"loss: {loss:.6f}",
        f"record: {record:.6f}",
        f"beats_reference: {str(determinant > RECORD_DET).lower()}",
        f"matches_record: {str(determinant == RECORD_DET).lower()}",
        f"proxy_note: {config.get('proxy_note', '')}",
        f"network_isolated: {str(network_isolated).lower()}",
        f"seconds: {time.time() - started:.1f}",
    ]
    stderr = ""
    if status != "ok":
        stderr = f"error: {reason}: {diagnostics}\n"
    if candidate_stderr:
        stderr += candidate_stderr
        if not stderr.endswith("\n"):
            stderr += "\n"
    return {
        "score": score,
        "loss": loss,
        "status": status,
        "reason": reason,
        "stdout": "\n".join(lines) + "\n",
        "stderr": stderr,
        "network_isolated": network_isolated,
    }


def main():
    source = (HERE / "construct.py").read_text(encoding="utf-8")
    result = evaluate_source(source)
    sys.stdout.write(result["stdout"])
    sys.stderr.write(result["stderr"])


if __name__ == "__main__":
    main()
