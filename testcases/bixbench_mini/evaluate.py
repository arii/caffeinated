"""Trusted grader for the 17-question BixBench proxy."""

import json
import math
from pathlib import Path
import sys
import time

ROOT = Path(__file__).resolve().parents[2]
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))

from testcases import sandbox

HERE = Path(__file__).resolve().parent
RECORD = 0.523
TIMEOUT_S = 120


def grade(key, answers):
    correct = {}
    for qid, expected in key.items():
        answer = answers.get(qid)
        if isinstance(answer, bool) or not isinstance(answer, (int, float)):
            correct[qid] = False
            continue
        try:
            value = float(answer)
        except (OverflowError, TypeError, ValueError):
            correct[qid] = False
            continue
        if not math.isfinite(value):
            correct[qid] = False
        elif expected["mode"] == "range":
            correct[qid] = expected["lo"] <= value <= expected["hi"]
        else:
            correct[qid] = abs(value - expected["value"]) <= 1e-9 * max(
                1.0, abs(expected["value"])
            )
    return correct


def evaluate_source(source, task_dir=HERE, timeout_s=None):
    task_dir = Path(task_dir).resolve()
    started = time.time()
    config = json.loads((task_dir / "task.json").read_text(encoding="utf-8"))
    key = {}
    correct = {}
    score = 0.0
    status = "crash"
    reason = None
    network_isolated = False
    diagnostics = ""
    candidate_stderr = ""
    try:
        sandbox.prepare_task(
            task_dir,
            config.get("context_files", []),
            required_files=(".cache/answers.json",),
        )
        key = json.loads((task_dir / ".cache" / "answers.json").read_text())
        run = sandbox.run_candidate(
            task_dir,
            config["editable"],
            source,
            context_files=config.get("context_files", []),
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
                answers = json.loads(lines[-1]) if lines else None
                if not isinstance(answers, dict):
                    raise ValueError("analysis.py must print a JSON object")
            except (IndexError, json.JSONDecodeError, ValueError) as error:
                reason = "invalid_output"
                diagnostics = f"{type(error).__name__}: {error}"
            else:
                correct = grade(key, answers)
                score = sum(correct.values()) / len(correct)
                status = "ok"
    except sandbox.SandboxUnavailable as error:
        reason = "sandbox_unavailable"
        diagnostics = str(error)
    except Exception as error:
        reason = "grader_error"
        diagnostics = f"{type(error).__name__}: {error}"

    if status != "ok":
        correct = dict.fromkeys(key, False)
    loss = 1 - score
    lines = [f"{qid}: {'ok' if ok else 'wrong'}" for qid, ok in correct.items()]
    lines.extend(
        [
            f"score: {score:.6f}",
            f"loss: {loss:.6f}",
            f"record: {RECORD}",
            f"beats_reference: {str(score > RECORD).lower()}",
            f"proxy_note: {config.get('proxy_note', '')}",
            f"network_isolated: {str(network_isolated).lower()}",
            f"seconds: {time.time() - started:.1f}",
        ]
    )
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
    source = (HERE / "analysis.py").read_text(encoding="utf-8")
    result = evaluate_source(source)
    sys.stdout.write(result["stdout"])
    sys.stderr.write(result["stderr"])


if __name__ == "__main__":
    main()
