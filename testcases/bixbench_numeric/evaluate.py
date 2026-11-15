"""Trusted grader for the 45-question BixBench numeric task (dev split during search)."""

import json
import math
import sys
import time
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))

from testcases import sandbox
from testcases.bixbench_mini.evaluate import _numeric_literals, _question_numbers

HERE = Path(__file__).resolve().parent
ANSWERS = ".cache/answers.json"
TIMEOUT_S = 120


# Conventional significance, power, quantile and confidence levels; they fall inside some gold
# ranges (e.g. 0.88-1.0) but are not answers, so they must not trip the literal guard.
STAT_CONSTANTS = frozenset(
    {
        0.001,
        0.005,
        0.01,
        0.025,
        0.05,
        0.1,
        0.2,
        0.25,
        0.5,
        0.75,
        0.8,
        0.9,
        0.95,
        0.975,
        0.99,
        0.995,
        0.999,
        1.0,
    }
)


def answer_literal_qids(source, key, questions_text):
    """Question ids whose gold answer appears in source as a numeric literal."""
    public_numbers = _question_numbers(questions_text)
    flagged = set()
    for literal in _numeric_literals(source):
        if type(literal) is int and abs(literal) <= 10:
            continue
        try:
            value = float(literal)
        except OverflowError:
            continue
        if not math.isfinite(value) or value in public_numbers or value in STAT_CONSTANTS:
            continue
        for qid, expected in key.items():
            if expected["mode"] == "range":
                matches = expected["lo"] <= value <= expected["hi"]
            else:
                target = expected["value"]
                matches = abs(value - target) <= 1e-9 * max(1.0, abs(target))
            if matches:
                flagged.add(qid)
    return [qid for qid in key if qid in flagged]


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
            correct[qid] = abs(value - expected["value"]) <= 1e-9 * max(1.0, abs(expected["value"]))
    return correct


def evaluate_source(source, task_dir=HERE, timeout_s=None, answers_file=ANSWERS):
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
            required_files=(answers_file,),
        )
        key = json.loads((task_dir / answers_file).read_text())
        answer_literals = answer_literal_qids(
            source, key, (task_dir / "questions.json").read_text(encoding="utf-8")
        )
        run = None
        if answer_literals:
            reason = "answer_literal"
            diagnostics = f"candidate contains answer literals for {', '.join(answer_literals)}"
        else:
            run = sandbox.run_candidate(
                task_dir,
                config["editable"],
                source,
                context_files=config.get("context_files", []),
                timeout_s=TIMEOUT_S if timeout_s is None else timeout_s,
            )
            network_isolated = run.network_isolated
            candidate_stderr = run.stderr
        failure = sandbox.candidate_failure(run) if run is not None else None
        if failure:
            reason, diagnostics = failure
        elif run is not None:
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
            f"graded: {len(key)} ({answers_file})",
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
