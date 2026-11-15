#!/usr/bin/env python3
"""Score a finished ignobel swarm run with the Ig Nobel committee.

Reads <run>/ignobel_studies.jsonl (written by evaluate.py), keeps each distinct
finding once (the earliest lab to report a dataset's column pair has priority), sends the replicated and significant ones to the two
judges (committee.py) and writes <run>/scores.jsonl, best first.

  TINKER_API_KEY=... python3 testcases/ignobel/score_run.py --run /path/to/swarm_out
"""

import argparse
import json
from pathlib import Path

import committee

HERE = Path(__file__).resolve().parent


def score_run(run_dir, task_dir=HERE, ask=None):
    run_dir = Path(run_dir)
    studies = {}
    for line in (run_dir / "ignobel_studies.jsonl").read_text(encoding="utf-8").splitlines():
        record = json.loads(line)
        result = record["result"]
        if result.get("confirmed"):
            finding = (result["sha256"], tuple(result.get("columns") or [result["headline"]]))
            studies.setdefault(finding, record)
    rows = []
    for record in studies.values():
        prereg, result = record["prereg"], record["result"]
        verdict = committee.score_study(
            committee.abstract(prereg, result), result["headline"], task_dir, ask
        )
        rows.append(
            {
                "commit": record.get("commit"),
                "field": prereg["field"],
                "question": prereg["question"],
                "headline": result["headline"],
                "dataset": prereg["dataset"]["url"],
                "rho": result["rho"],
                "p": result["p"],
                "n": result["n"],
                "citations": result["citations"],
                "committee": verdict["score"],
                "rejected": verdict["rejected"],
                "verdicts": verdict["verdicts"],
            }
        )
    rows.sort(key=lambda row: -row["committee"])
    with (run_dir / "scores.jsonl").open("w", encoding="utf-8") as stream:
        for row in rows:
            stream.write(json.dumps(row, sort_keys=True) + "\n")
    return rows


def main(argv=None):
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--run", required=True, help="swarm --out directory")
    args = parser.parse_args(argv)
    rows = score_run(args.run)
    print(f"scored {len(rows)} replicated studies -> {Path(args.run) / 'scores.jsonl'}")
    for row in rows:
        flag = " REJECTED" if row["rejected"] else ""
        print(f"  {row['committee']:.1f}  {row['field']:22s} {row['headline'][:100]}{flag}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
