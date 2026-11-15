#!/usr/bin/env python3
"""Per-round task context for the ignobel swarm task (run by swarm.py on the host).

Prints two things every lab sees in its next proposal:
1. the lab notebook: every study registered so far this run and what happened,
   so labs build on (and do not repeat) each other's work;
2. real downloadable datasets found this round on Zenodo and Hugging Face for
   the least-explored fields, with their column names.
Dataset search is skipped when EXA=off or IGNOBEL_DATASET_SEARCH=off (offline runs).
"""

import argparse
import json
import os
from pathlib import Path

import datasets

NOTEBOOK_ITEMS = 15


def outcome(result):
    if result.get("rejected"):
        return "rejected: " + str(result["rejected"])[:140]
    if "rho" not in result:
        return "not run"
    verdict = "REPLICATED" if result.get("confirmed") else (
        "significant but did not replicate" if result.get("significant") else "not significant"
    )
    return f"rho {result['rho']:.3f}, p {result['p']:.2g}, n {result['n']}: {verdict}"


def notebook(out_dir):
    path = Path(out_dir) / "ignobel_studies.jsonl"
    records = [json.loads(line) for line in path.read_text(encoding="utf-8").splitlines()] if path.is_file() else []
    if not records:
        return ["Lab notebook: no studies registered yet this run."], set()
    lines = ["Lab notebook (studies registered so far this run, newest last; build on them, do not repeat them):"]
    for record in records[-NOTEBOOK_ITEMS:]:
        prereg, result = record["prereg"], record["result"]
        test = result.get("headline") or prereg.get("question", "")
        lines.append(f"- [{prereg.get('field')}] {test[:220]} -> {outcome(result)}")
    used = {r["prereg"]["dataset"]["url"] for r in records if "rho" in r["result"]}
    if used:
        lines.append("Datasets already tested this run (one registered test each): " + ", ".join(sorted(used)))
    return lines, used


def field_query(cell):
    field = str(cell.get("cell", "")).split("/")[0].replace("_", " ")
    return field if field and field not in ("baseline", "other") else ""


def log_source(out_dir, source_id, hit):
    record = {"type": "source", "id": source_id, "url": hit["page"], "file_url": hit["url"], "title": hit["title"], "purpose": "dataset_finder"}
    with (Path(out_dir) / "research_log.jsonl").open("a", encoding="utf-8") as stream:
        stream.write(json.dumps(record, sort_keys=True) + "\n")


def found_datasets(cells, skip, out_dir=None, round_num=0):
    if os.environ.get("EXA") == "off" or os.environ.get("IGNOBEL_DATASET_SEARCH") == "off":
        return []
    lines, seen = [], set(skip)
    for query in dict.fromkeys(q for q in map(field_query, cells) if q):
        for hit in datasets.find(query, n=2, skip=seen):
            seen.add(hit["url"])
            source_id = f"D{round_num}_{len(seen) - len(skip)}"
            if out_dir:
                log_source(out_dir, source_id, hit)
            if not lines:
                lines.append("Real public datasets found this round (use the file url as dataset.url and exact column names):")
            lines.append(
                f"- {source_id} [{query}] {hit['title']} ({hit['license'] or 'license: see page'}) {hit['page']}\n"
                f"  file url: {hit['url']}\n  columns: {', '.join(hit['columns'])}\n  about: {hit['about']}"
            )
    return lines


def main(argv=None):
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--out-dir", required=True)
    parser.add_argument("--round", type=int, default=0)
    parser.add_argument("--cells", default="[]", help="JSON list of boredom-meter cell suggestions")
    args = parser.parse_args(argv)
    lines, used = notebook(args.out_dir)
    print("\n".join(lines + found_datasets(json.loads(args.cells), used, args.out_dir, args.round)))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
