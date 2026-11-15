#!/usr/bin/env python3
"""Package the committed run artifacts as a Hugging Face dataset directory.

Usage: python scripts/export_hf_dataset.py --out dist/hf-dataset [--license cc-by-4.0]
Then: hf upload <namespace>/caffeinated-runs dist/hf-dataset --repo-type dataset

Writes README.md (dataset card), data/*.jsonl tables for the dataset viewer, raw/ (byte copies
of the committed artifacts) and checksums.sha256. Output is deterministic for a given commit.
Refuses to export if any file looks like it contains an API key.
"""

import argparse
import csv
import gzip
import hashlib
import io
import json
import re
import shutil
import subprocess
import sys
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
RAW_SOURCES = (
    "experiments/real-runs",
    "experiments/confirmatory",
    "experiments/memory-comparison",
    "data/igjudge",
    "data/replays",
)
SECRET = re.compile(
    rb"(past_sk_[A-Za-z0-9]{8}|sk-[A-Za-z0-9_-]{20}|tml-[A-Za-z0-9]{20}|hf_[A-Za-z0-9]{30})"
)
RUN_FIELDS = ("task", "arm", "seed", "llm", "model", "exa", "memory_backend", "status", "rounds")
TABLES = {
    "runs": "One row per swarm run: settings from run.json plus held-out grades.",
    "candidates": "Every candidate row of each run's results.tsv (commit, dev loss, status, idea).",
    "ignobel_studies": "Ig Nobel pre-registrations and their Spearman test results.",
    "confirmatory_heldout": "Held-out BixBench accuracy of each confirmatory A/B/S winner.",
    "igjudge": "IgJudge (gpt-5.5) six-criterion scores for 60 Ig Nobel ideas.",
}


def tracked_files(path):
    listed = subprocess.run(
        ["git", "-C", str(ROOT), "ls-files", "-z", "--", path],
        capture_output=True,
        check=True,
    ).stdout
    return sorted(ROOT / name for name in listed.decode().split("\0") if name)


def contents(name, data):
    if name.endswith(".gz"):
        yield from contents(name[:-3], gzip.decompress(data))
    elif name.endswith(".zip"):
        with zipfile.ZipFile(io.BytesIO(data)) as archive:
            yield archive.comment
            for info in archive.infolist():
                yield info.filename.encode() + b"\n" + info.comment + b"\n" + info.extra
                yield from contents(info.filename, archive.read(info))
    else:
        yield data


def has_secret(path):
    return any(SECRET.search(data) for data in contents(path.name, path.read_bytes()))


def run_dirs():
    for path in tracked_files("experiments"):
        if path.name == "run.json":
            yield path.parent


def run_rows():
    for run_dir in run_dirs():
        settings = json.loads((run_dir / "run.json").read_text(encoding="utf-8"))
        row = {"run": run_dir.relative_to(ROOT).as_posix()}
        row.update({field: settings.get(field) for field in RUN_FIELDS})
        held = run_dir / "held_out_test.json"
        if not held.exists():
            held = run_dir / "heldout.json"
        row["held_out"] = json.loads(held.read_text(encoding="utf-8")) if held.exists() else None
        yield row


def candidate_rows():
    for run_dir in run_dirs():
        with open(run_dir / "results.tsv", encoding="utf-8") as stream:
            for index, row in enumerate(csv.DictReader(stream, delimiter="\t")):
                loss = row.get("loss") or None
                yield {
                    "run": run_dir.relative_to(ROOT).as_posix(),
                    "index": index,
                    "commit": row.get("commit"),
                    "loss": float(loss) if loss else None,
                    "status": row.get("status"),
                    "description": row.get("description"),
                }


def ignobel_rows():
    path = ROOT / "experiments/real-runs/ignobel/ignobel_studies.jsonl"
    for line in path.read_text(encoding="utf-8").splitlines():
        study = json.loads(line)
        prereg, result = study["prereg"], study["result"]
        yield {
            "commit": study["commit"],
            "role": study["role"],
            "ts": study.get("ts"),
            "hypothesis": prereg.get("hypothesis"),
            "field": prereg.get("field"),
            "direction": prereg.get("direction"),
            "dataset_url": prereg.get("dataset", {}).get("url"),
            "dataset_sha256": result.get("sha256"),
            "citations": prereg.get("citations"),
            **{k: result.get(k) for k in ("n", "rho", "p", "confirmed", "replicated", "rejected")},
        }


def confirmatory_rows():
    results = ROOT / "experiments/confirmatory/results"
    for path in sorted(results.glob("bixbench_strict/seed-*/*/heldout.json")):
        grade = json.loads(path.read_text(encoding="utf-8"))
        yield {
            "set": "strict",
            "seed": int(path.parts[-3].removeprefix("seed-")),
            "arm": path.parts[-2],
            "commit": grade["commit"],
            "heldout_acc": grade["heldout"]["accuracy"],
            "heldout_unguarded_acc": grade["heldout_unguarded"]["accuracy"],
            "dev_acc": grade["dev"]["accuracy"],
        }
    truncated = json.loads((results / "truncated_partial_runs.json").read_text(encoding="utf-8"))
    for seed, arms in sorted(truncated["bixbench_guard2"].items()):
        for arm in ("A", "B", "S"):
            yield {
                "set": "guard2",
                "seed": int(seed),
                "arm": arm,
                "commit": None,
                "heldout_acc": arms[arm]["heldout_acc"],
                "heldout_unguarded_acc": arms[arm]["heldout_unguarded_acc"],
                "dev_acc": 1 - arms[arm]["dev_loss"],
            }


def igjudge_rows():
    report = json.loads((ROOT / "data/igjudge/ignobel-real-runs/results-zip.json").read_text())
    for idea in report["ideas"]:
        yield {
            "study_id": idea["study_id"],
            "title": idea["title"],
            "hypothesis": idea["hypothesis"],
            "total": idea["total"],
            "classification": idea.get("classification"),
            **{key: score["final"] for key, score in idea["scores"].items()},
        }


def write_jsonl(path, rows):
    path.parent.mkdir(parents=True, exist_ok=True)
    lines = [json.dumps(row, sort_keys=True, ensure_ascii=False) for row in rows]
    path.write_text("\n".join(lines) + "\n", encoding="utf-8")
    return len(lines)


def card(license_id, commit, counts):
    configs = "\n".join(
        f"- config_name: {name}\n  data_files: data/{name}.jsonl" for name in TABLES
    )
    tables = "\n".join(f"| `{name}` | {counts[name]} | {text} |" for name, text in TABLES.items())
    return f"""---
license: {license_id}
pretty_name: Caffeinated Artificial Scientist Swarm runs
tags:
- agents
- autoresearch
- reproducibility
configs:
{configs}
---

# Caffeinated Artificial Scientist Swarm runs

Run artifacts behind the results of [arii/caffeinated](https://github.com/arii/caffeinated)
("Ig Nobel Prize Winning ASS (Artificial Scientist Swarms)", Team caffeinated: Ariel Anders,
Jialin Feng, Neeraj Shah, Masha Baidachna). Exported from commit `{commit}` with
`scripts/export_hf_dataset.py`.

Our hypothesis is that existing AI scientist swarms get stuck because they are bored—trapped in
repetitive, low-payoff loops. Artificial Scientist Swarms (ASS) fixes this by adding a
deterministic boredom meter grounded in psychology. It tracks stagnation, novelty deficit, and
overload to detect when the swarm is bored and trigger a seeking state—forcing a jump from
routine exploitation to paradigm breakout. Validated on known benchmarks, we put the swarm on
an Ig Nobel challenge: research that makes you laugh, then think. Agents search via Exa, share
memory on past.dev, pre-register real-data tests, and get ranked by a two-judge committee and
final IgJudge.

All runs are real Kimi K3.1 Pro (Tinker) swarm runs; IgJudge scores come from gpt-5.5. No
fake-LLM runs are included. Results are exploratory: see `docs/results.md` and
`experiments/confirmatory/RESULTS.md` in the repository for caveats, deviations from the
preregistration and known grader false positives.

## Tables

| Config | Rows | Contents |
|---|---|---|
{tables}

## Raw files

`raw/` holds byte copies of the committed artifacts (ledgers, results, held-out grades,
gzipped LLM, research and memory logs, viewer replay ZIPs). `checksums.sha256` lists every file.
To check the headline numbers, clone the repository at `{commit}` and run
`python scripts/verify_results.py`; `REPRODUCE.md` covers re-grading and live reruns.

## Third-party content

BixBench questions and data are from `futurehouse/BixBench`. Ig Nobel studies cite public
datasets by URL and sha256; the datasets are not redistributed here. Logs contain excerpts of
web pages returned by Exa search, which remain under their original terms.
"""


def export(out, license_id):
    if out.exists():
        shutil.rmtree(out)
    files = [f for source in RAW_SOURCES for f in tracked_files(source)]
    leaked = [str(f.relative_to(ROOT)) for f in files if has_secret(f)]
    if leaked:
        raise SystemExit("refusing to export, possible API key in: " + ", ".join(leaked))
    for source in files:
        target = out / "raw" / source.relative_to(ROOT)
        target.parent.mkdir(parents=True, exist_ok=True)
        shutil.copyfile(source, target)
    builders = {
        "runs": run_rows,
        "candidates": candidate_rows,
        "ignobel_studies": ignobel_rows,
        "confirmatory_heldout": confirmatory_rows,
        "igjudge": igjudge_rows,
    }
    counts = {
        name: write_jsonl(out / "data" / f"{name}.jsonl", build())
        for name, build in builders.items()
    }
    commit = subprocess.run(
        ["git", "-C", str(ROOT), "rev-parse", "HEAD"], capture_output=True, text=True, check=True
    ).stdout.strip()
    (out / "README.md").write_text(card(license_id, commit, counts), encoding="utf-8")
    sums = [
        f"{hashlib.sha256(p.read_bytes()).hexdigest()}  {p.relative_to(out).as_posix()}"
        for p in sorted(out.rglob("*"))
        if p.is_file()
    ]
    (out / "checksums.sha256").write_text("\n".join(sums) + "\n", encoding="utf-8")
    return counts


def main(argv=None):
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument("--out", type=Path, default=ROOT / "dist" / "hf-dataset")
    parser.add_argument("--license", default="cc-by-4.0", help="dataset card license id")
    args = parser.parse_args(argv)
    counts = export(args.out.resolve(), args.license)
    print(json.dumps({"out": str(args.out), "rows": counts}, indent=2))
    return 0


if __name__ == "__main__":
    sys.exit(main())
