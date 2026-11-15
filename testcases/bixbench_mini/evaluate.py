"""Trusted grader for the 17-question BixBench proxy."""

import ast
import json
import math
import re
import sys
import time
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))

from testcases import sandbox

HERE = Path(__file__).resolve().parent
# TEST_QIDS are the 40% per capsule with the smallest SHA-256 hashes of qid.
TEST_QIDS = (
    "bix-18-q2",
    "bix-18-q4",
    "bix-19-q2",
    "bix-19-q3",
    "bix-51-q4",
    "bix-51-q5",
    "bix-51-q8",
)
# Full-BixBench accuracy, not directly comparable to this seven-question test split.
RECORD = 0.523
TIMEOUT_S = 120
QUESTION_NUMBER = re.compile(
    r"(?<![\w.])[-+]?(?:\d{1,3}(?:,\d{3})+(?:\.\d*)?|\d+(?:\.\d*)?|\.\d+)"
    r"(?:[eE][-+]?\d+)?(?![\w.])"
)
MAX_FOLDED_MAGNITUDE = 1e12
CONVENTIONAL_STATISTICAL_CONSTANTS = (
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
)
STATISTICAL_CONSTANT_TOLERANCE = 1e-12


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


def _numeric_constant(node):
    if isinstance(node, ast.Constant) and type(node.value) in (int, float):
        value = node.value
    elif isinstance(node, ast.UnaryOp) and isinstance(node.op, (ast.UAdd, ast.USub)):
        value = _numeric_constant(node.operand)
        if value is None:
            return None
        value = value if isinstance(node.op, ast.UAdd) else -value
    elif isinstance(node, ast.BinOp):
        left = _numeric_constant(node.left)
        right = _numeric_constant(node.right)
        if left is None or right is None:
            return None
        try:
            if isinstance(node.op, ast.Add):
                value = left + right
            elif isinstance(node.op, ast.Sub):
                value = left - right
            elif isinstance(node.op, ast.Mult):
                value = left * right
            elif isinstance(node.op, ast.Div):
                value = left / right
            elif isinstance(node.op, ast.FloorDiv):
                value = left // right
            elif isinstance(node.op, ast.Mod):
                value = left % right
            elif isinstance(node.op, ast.Pow):
                if abs(right) > 10:
                    return None
                value = left**right
            else:
                return None
        except (ArithmeticError, OverflowError, TypeError, ValueError):
            return None
    else:
        return None
    if type(value) not in (int, float):
        return None
    if type(value) is float and not math.isfinite(value):
        return None
    return None if abs(value) > MAX_FOLDED_MAGNITUDE else value


def _numeric_literals(source):
    try:
        tree = ast.parse(source)
    except SyntaxError:
        return []
    literals = []

    def visit(node):
        if isinstance(node, (ast.UnaryOp, ast.BinOp)):
            value = _numeric_constant(node)
            if value is not None:
                literals.append(value)
        if isinstance(node, ast.Constant) and type(node.value) in (int, float):
            literals.append(node.value)
        for child in ast.iter_child_nodes(node):
            visit(child)

    visit(tree)
    return literals


def _question_numbers(questions_text):
    try:
        questions = json.loads(questions_text)
    except json.JSONDecodeError:
        return set()
    values = set()
    for item in questions.values():
        if not isinstance(item, dict):
            continue
        question = item.get("question", "")
        if not isinstance(question, str):
            continue
        for match in QUESTION_NUMBER.findall(question):
            value = float(match.replace(",", ""))
            if math.isfinite(value):
                values.add(value)
    return values


def answer_literal_qids(source, key, questions_text):
    public_numbers = _question_numbers(questions_text)
    flagged = set()
    for literal in _numeric_literals(source):
        if type(literal) is int and abs(literal) <= 10:
            continue
        try:
            value = float(literal)
        except OverflowError:
            continue
        if not math.isfinite(value) or value in public_numbers:
            continue
        if any(
            abs(value - constant) <= STATISTICAL_CONSTANT_TOLERANCE
            for constant in CONVENTIONAL_STATISTICAL_CONSTANTS
        ):
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


def evaluate_source(source, task_dir=HERE, timeout_s=None, split="dev"):
    if split not in {"dev", "test"}:
        raise ValueError(f"unknown split: {split}")
    task_dir = Path(task_dir).resolve()
    started = time.time()
    config = json.loads((task_dir / "task.json").read_text(encoding="utf-8"))
    key = {}
    graded_key = {}
    correct = {}
    score = 0.0
    status = "crash"
    reason = None
    network_isolated = False
    diagnostics = ""
    candidate_stderr = ""
    answer_literals = []
    try:
        sandbox.prepare_task(
            task_dir,
            config.get("context_files", []),
            required_files=(".cache/answers.json",),
        )
        key = json.loads((task_dir / ".cache" / "answers.json").read_text())
        graded_key = {
            qid: answer for qid, answer in key.items() if (qid in TEST_QIDS) == (split == "test")
        }
        answer_literals = answer_literal_qids(
            source,
            graded_key,
            (task_dir / "questions.json").read_text(encoding="utf-8"),
        )
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
                    correct = grade(graded_key, answers)
                    score = sum(correct.values()) / len(correct) if correct else 0.0
                    status = "ok"
    except sandbox.SandboxUnavailable as error:
        reason = "sandbox_unavailable"
        diagnostics = str(error)
    except Exception as error:
        reason = "grader_error"
        diagnostics = f"{type(error).__name__}: {error}"

    if status != "ok":
        correct = dict.fromkeys(graded_key, False)
    loss = 1 - score
    lines = [
        f"split: {split}",
        f"n_items: {len(correct)}",
        *[f"{qid}: {'ok' if ok else 'wrong'}" for qid, ok in correct.items()],
    ]
    if answer_literals:
        lines.append(f"answer_literal: {', '.join(answer_literals)}")
    lines.extend(
        [
            f"score: {score:.6f}",
            f"loss: {loss:.6f}",
            f"record: {RECORD}",
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
        "split": split,
        "n_items": len(correct),
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
