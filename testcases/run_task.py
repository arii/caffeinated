"""Score one test-case task and optionally append a row to results.tsv.

    python testcases/run_task.py hadamard19
    python testcases/run_task.py hadamard19 --results results.tsv --desc "anneal 2k steps" --status auto

The row uses the autoresearch columns (commit, val_bpb, memory_gb, status, description)
with the task's loss (lower is better) in the val_bpb column, so boredom.py,
analyze.py and the trace exporter work unchanged. --status auto keeps the run only
if it beats the best kept loss so far.
"""
import argparse, csv, re, subprocess, sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
TASKS = ("hadamard19", "bixbench_mini", "playworld_mini")
HEADER = ["commit", "val_bpb", "memory_gb", "status", "description"]


def score(task):
    out = subprocess.run([sys.executable, "evaluate.py"], cwd=HERE / task, capture_output=True, text=True)
    sys.stdout.write(out.stdout)
    sys.stderr.write(out.stderr)
    m = re.search(r"^loss: ([0-9.eE+-]+)$", out.stdout, re.M)
    return float(m.group(1)) if m else None, "error:" in out.stderr


def best_kept(path):
    if not path.exists():
        return None
    rows = list(csv.DictReader(path.open(), delimiter="\t"))
    kept = [float(r["val_bpb"]) for r in rows if r["status"] == "keep"]
    return min(kept) if kept else None


def main():
    p = argparse.ArgumentParser()
    p.add_argument("task", choices=TASKS)
    p.add_argument("--results")
    p.add_argument("--status", default="auto", choices=("auto", "keep", "discard", "crash"))
    p.add_argument("--desc", default="")
    args = p.parse_args()
    loss, errored = score(args.task)
    if not args.results:
        return
    path = Path(args.results)
    status = args.status
    if loss is None or errored:
        status = "crash"
    elif status == "auto":
        best = best_kept(path)
        status = "keep" if best is None or loss < best else "discard"
    commit = subprocess.run(["git", "rev-parse", "--short=7", "HEAD"], capture_output=True, text=True).stdout.strip() or "nogit"
    new = not path.exists()
    with path.open("a", newline="") as f:
        w = csv.writer(f, delimiter="\t", lineterminator="\n")
        if new:
            w.writerow(HEADER)
        w.writerow([commit, f"{loss if loss is not None else 0:.6f}", "0.0", status, args.desc.replace("\t", " ")])
    print(f"logged: {commit} {status}")


if __name__ == "__main__":
    main()
