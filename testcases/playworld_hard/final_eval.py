"""Grade a finished run's best world_model.py on 200 fresh held-out seeds (run once, after the run).

Usage: python final_eval.py --repo <swarm repo clone> --run <run dir> [--out result.json]
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

EDITABLE = "testcases/playworld_hard/world_model.py"


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
    for split, seeds in (("dev", evaluate.EVAL_SEEDS), ("heldout", evaluate.HELDOUT_SEEDS)):
        result = evaluate.evaluate_source(source, seeds=seeds)
        report[split] = {"accuracy": result["score"], "status": result["status"]}
    text = json.dumps(report, indent=2)
    if args.out:
        Path(args.out).write_text(text + "\n", encoding="utf-8")
    print(text)


if __name__ == "__main__":
    main()
