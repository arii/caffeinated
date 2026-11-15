"""Frozen scorer for the BixBench mini task. Do not edit.

Runs analysis.py, which must print a JSON object {question_id: number} on stdout,
and grades it with BixBench's range/exact verifiers for the 17 sampled questions.
"""
import json, math, subprocess, sys, time
from pathlib import Path

HERE = Path(__file__).resolve().parent
RECORD = 0.523  # BixBench best published score (Edison Scientific)
TIMEOUT_S = 120


def grade(key, answers):
    correct = {}
    for qid, k in key.items():
        try:
            v = float(answers.get(qid))
        except (TypeError, ValueError):
            correct[qid] = False
            continue
        if math.isnan(v):
            correct[qid] = False
        elif k["mode"] == "range":
            correct[qid] = k["lo"] <= v <= k["hi"]
        else:
            correct[qid] = abs(v - k["value"]) <= 1e-9 * max(1.0, abs(k["value"]))
    return correct


def main():
    if not (HERE / ".cache" / "answers.json").exists():
        subprocess.run([sys.executable, "prepare.py"], cwd=HERE, check=True, capture_output=True)
    key = json.loads((HERE / ".cache" / "answers.json").read_text())
    t0 = time.time()
    try:
        out = subprocess.run([sys.executable, "analysis.py"], cwd=HERE, capture_output=True, text=True, timeout=TIMEOUT_S)
        answers = json.loads(out.stdout.strip().splitlines()[-1])
    except Exception as e:  # crash, timeout or bad JSON scores zero
        print(f"error: {type(e).__name__}: {e}", file=sys.stderr)
        answers = {}
    correct = grade(key, answers)
    score = sum(correct.values()) / len(correct)
    for qid, ok in correct.items():
        print(f"{qid}: {'ok' if ok else 'wrong'}")
    print(f"score: {score:.6f}")
    print(f"loss: {1 - score:.6f}")
    print(f"record: {RECORD}")
    print(f"beats_record: {str(score > RECORD).lower()}")
    print(f"seconds: {time.time() - t0:.1f}")


if __name__ == "__main__":
    main()
