#!/usr/bin/env python3
"""Paired B-A secondary metrics for ignobel arms of an ab.py output directory.

The ignobel loss is 0/1 per run, so best_loss only says whether any study
replicated. This adds per-arm counts from <run>/ignobel_studies.jsonl
(registrations, datasets tested, distinct confirmed findings, earliest first)
and, with --committee, runs testcases/ignobel/score_run.py on each run and
reports the top committee score. Committee calls use TINKER_API_KEY.
"""

import argparse
import csv
import json
import subprocess
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import analyze_ab

METRICS = ("registered", "datasets", "confirmed_findings", "top_committee")


def arm_metrics(run_dir, committee=False):
    run_dir = Path(run_dir)
    path = run_dir / "ignobel_studies.jsonl"
    records = [json.loads(line) for line in path.read_text().splitlines() if line.strip()]
    datasets, findings = set(), set()
    for record in records:
        result = record["result"]
        if result.get("sha256"):
            datasets.add(result["sha256"])
        if result.get("confirmed"):
            findings.add((result["sha256"], tuple(result.get("columns") or [result["headline"]])))
    top = ""
    if committee:
        clone = run_dir.parent / "repo"
        subprocess.run(
            [sys.executable, str(clone / "testcases/ignobel/score_run.py"), "--run", str(run_dir)],
            check=True,
            cwd=clone,
        )
    scores = run_dir / "scores.jsonl"
    if scores.exists():
        rows = [json.loads(line) for line in scores.read_text().splitlines() if line.strip()]
        top = max((r["committee"] for r in rows if not r["rejected"]), default=0.0)
    return {
        "registered": len(records),
        "datasets": len(datasets),
        "confirmed_findings": len(findings),
        "top_committee": top,
    }


def main(argv=None):
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("results", help="ab.py results.csv")
    parser.add_argument("--committee", action="store_true")
    parser.add_argument("--out", required=True)
    args = parser.parse_args(argv)
    with open(args.results, newline="") as stream:
        rows = [r for r in csv.DictReader(stream) if r["task"] == "ignobel"]
    per_arm, pairs = [], {}
    for row in rows:
        metrics = arm_metrics(row["run_dir"], args.committee)
        per_arm.append({"seed": int(row["seed"]), "arm": row["arm"], **metrics})
        pairs.setdefault(int(row["seed"]), {})[row["arm"]] = metrics
    complete = sorted(s for s, p in pairs.items() if set(p) == {"A", "B"})
    summary = {}
    for metric in METRICS:
        diffs = [
            pairs[s]["A"][metric] - pairs[s]["B"][metric]
            for s in complete
            if pairs[s]["A"][metric] != "" and pairs[s]["B"][metric] != ""
        ]
        if diffs:
            summary[metric] = analyze_ab.metric_summary(diffs, 0.0, samples=10000, seed=2026)
    report = {
        "difference": "A minus B (higher counts are better), so negative favors B as in analyze_ab.py",
        "seeds": complete,
        "per_arm": sorted(per_arm, key=lambda r: (r["seed"], r["arm"])),
        "metrics": summary,
    }
    Path(args.out).write_text(json.dumps(report, indent=2) + "\n")
    print(json.dumps(report["per_arm"], indent=1))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
