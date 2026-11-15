#!/usr/bin/env python3
"""Write a post-run report of the in-run Ig Nobel committee verdicts.

Reads <run>/ignobel_studies.jsonl (written by evaluate.py), keeps each distinct
finding once (the earliest lab to report a dataset's column pair has priority),
reuses cached in-run verdicts (judging legacy records when needed), counts
tested and confirmed studies, and writes <run>/scores.jsonl, best first.

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
        verdict = result.get("committee")
        if not isinstance(verdict, dict):
            verdict = committee.score_study(
                committee.abstract(prereg, result),
                result["headline"],
                task_dir,
                ask,
                exa_enabled=record.get("exa_enabled"),
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
                "available": verdict.get("available", verdict.get("status") != "off"),
                "committee": verdict.get("score"),
                "rejected": verdict.get("rejected", False),
                "verdicts": verdict.get("verdicts", {}),
                "judges": verdict.get("judges", {}),
                "prior_work": verdict.get("prior_work", []),
                "prior_work_available": verdict.get("prior_work_available", False),
            }
        )
    rows.sort(key=lambda row: -(row["committee"] if row["committee"] is not None else -1))
    with (run_dir / "scores.jsonl").open("w", encoding="utf-8") as stream:
        for row in rows:
            stream.write(json.dumps(row, sort_keys=True) + "\n")
    return rows


def study_counts(run_dir):
    records = [
        json.loads(line)
        for line in (Path(run_dir) / "ignobel_studies.jsonl")
        .read_text(encoding="utf-8")
        .splitlines()
    ]
    tested = sum("rho" in record.get("result", {}) for record in records)
    confirmed = sum(bool(record.get("result", {}).get("confirmed")) for record in records)
    return tested, confirmed


def main(argv=None):
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--run", required=True, help="swarm --out directory")
    args = parser.parse_args(argv)
    rows = score_run(args.run)
    tested, confirmed = study_counts(args.run)
    print(
        f"studies tested: {tested}; confirmed: {confirmed}; "
        f"multiple testing: k={tested} tests at alpha=0.005 per test"
    )
    print(f"scored {len(rows)} confirmed studies -> {Path(args.run) / 'scores.jsonl'}")
    for row in rows:
        flag = " REJECTED" if row["rejected"] else ""
        score = f"{row['committee']:.1f}" if row["committee"] is not None else "unavailable"
        print(f"  {score:>11s}  {row['field']:22s} {row['headline'][:100]}{flag}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
