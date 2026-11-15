"""Grade a finished run's best analysis.py on the held-out questions (run once, after the run).

Usage: python final_eval.py --repo <swarm repo clone> --run <run dir> [--out result.json]
The best candidate is the lowest-loss keep row in <run>/results.tsv; its source is read from
the repo at that commit. Dev and held-out accuracy are both reported.
"""

import argparse
import csv
import json
import subprocess
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(HERE))

import evaluate

EDITABLE = "testcases/bixbench_numeric/analysis.py"


def best_commit(run_dir):
    with open(Path(run_dir) / "results.tsv", encoding="utf-8") as stream:
        rows = [r for r in csv.DictReader(stream, delimiter="\t") if r["status"] == "keep"]
    if not rows:
        raise ValueError(f"no keep rows in {run_dir}/results.tsv")
    return min(rows, key=lambda r: float(r["loss"]))["commit"]


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--repo", required=True)
    parser.add_argument("--run", required=True)
    parser.add_argument("--out")
    args = parser.parse_args()
    commit = best_commit(args.run)
    source = subprocess.run(
        ["git", "-C", args.repo, "show", f"{commit}:{EDITABLE}"],
        capture_output=True,
        text=True,
        check=True,
    ).stdout
    report = {"commit": commit}
    for split, answers in (("dev", evaluate.ANSWERS), ("heldout", ".cache/heldout_answers.json")):
        result = evaluate.evaluate_source(source, answers_file=answers)
        report[split] = {"accuracy": result["score"], "status": result["status"]}
    text = json.dumps(report, indent=2)
    if args.out:
        Path(args.out).write_text(text + "\n", encoding="utf-8")
    print(text)


if __name__ == "__main__":
    main()
