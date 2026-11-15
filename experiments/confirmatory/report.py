"""Summarize the preregistered confirmatory runs (see PREREGISTRATION.md).

Usage: python experiments/confirmatory/report.py --hadamard <ab out> --bixbench <ab out> --out <dir>
Runs final_eval.py once per finished bixbench_numeric arm (cached in heldout.json next to run/).
"""

import argparse
import csv
import itertools
import json
import re
import statistics
import subprocess
import sys
from collections import Counter
from datetime import datetime
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
FINAL_EVAL = ROOT / "testcases" / "bixbench_numeric" / "final_eval.py"
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))
from experiments import ab  # noqa: E402

ERROR = re.compile(r"^error: ([a-z_]+):", re.M)
RESUMED_AT = re.compile(r"resuming run \S+ at round (\d+)")
LLM_FAILED = re.compile(r"^round (\d+): \S+ LLM call failed", re.M)


def rows(out):
    """results.csv rows, plus finished arms whose coordinator stopped before summarizing them."""
    out = Path(out)
    found = []
    if (out / "results.csv").exists():
        with open(out / "results.csv", encoding="utf-8") as stream:
            found = [r for r in csv.DictReader(stream) if r.get("best_loss") not in (None, "")]
    seen = {(r["task"], str(r["seed"]), r["arm"]) for r in found}
    manifest = (
        json.loads((out / "manifest.json").read_text()) if (out / "manifest.json").exists() else {}
    )
    settings = {k: v for k, v in manifest.items() if k != "runs"}
    for run in manifest.get("runs", []):
        location = Path(run["location"])
        key = (run["task"], str(run["seed"]), run["arm"])
        if key in seen or not (location / "run" / "run.json").exists():
            continue
        if json.loads((location / "run" / "run.json").read_text()).get("status") != "finished":
            continue
        arm_settings = {
            **settings,
            "rounds": ab.arm_rounds(argparse.Namespace(**settings), run["arm"]),
            "workers": 1 if run["arm"] == "S" else settings["workers"],
            "task": run["task"],
            "seed": run["seed"],
            "arm": run["arm"],
            "task_inputs_sha256": ab.task_inputs_digest(location / "repo", run["task"]),
        }
        row = ab.summarize(location / "run", arm_settings)
        found.append(
            {
                k: "" if v is None else str(v) if not isinstance(v, str) else v
                for k, v in row.items()
            }
        )
    return found


def crash_reasons(run_dir):
    reasons = Counter()
    for log in (Path(run_dir) / "runs").glob("*.log"):
        match = ERROR.search(log.read_text(encoding="utf-8", errors="replace"))
        if match:
            reasons[match.group(1)] += 1
    return dict(reasons)


def llm_failed_slots(run_dir, completed):
    """Worker slots lost to provider errors (e.g. Tinker 402) inside completed rounds."""
    location = Path(run_dir).parent
    resumed = location / "stderr.resume.log"
    resume_text = resumed.read_text(encoding="utf-8", errors="replace") if resumed.exists() else ""
    restart = RESUMED_AT.findall(resume_text)
    # A resume drops the unfinished round, so only failures in rounds before it count.
    first_limit = int(restart[0]) - 1 if restart else completed
    lost = Counter()
    for text, limit in (
        ((location / "stderr.log").read_text(encoding="utf-8", errors="replace"), first_limit),
        (resume_text, completed),
    ):
        lost.update(int(r) for r in LLM_FAILED.findall(text) if int(r) <= limit)
    return dict(sorted(lost.items()))


def wall_seconds(run_dir):
    stamps = []
    for name in ("ledger.jsonl", "llm_log.jsonl"):
        path = Path(run_dir) / name
        if path.exists():
            for line in path.read_text(encoding="utf-8").splitlines():
                ts = json.loads(line).get("ts")
                if isinstance(ts, (int, float)):
                    stamps.append(float(ts))
                elif isinstance(ts, str):
                    stamps.append(datetime.fromisoformat(ts.replace("Z", "+00:00")).timestamp())
    return max(stamps) - min(stamps) if stamps else None


def heldout(run_dir):
    run_dir = Path(run_dir)
    cache = run_dir.parent / "heldout.json"
    if not cache.exists():
        result = subprocess.run(
            [
                sys.executable,
                str(FINAL_EVAL),
                "--repo",
                str(run_dir.parent / "repo"),
                "--run",
                str(run_dir),
                "--out",
                str(cache),
            ],
            capture_output=True,
            text=True,
        )
        if result.returncode:
            return {"error": result.stderr.strip()[-300:]}
    return json.loads(cache.read_text())


def sign_flip_p(diffs):
    """Exact two-sided sign-flip permutation p-value for the mean paired difference."""
    observed = abs(sum(diffs))
    flips = list(itertools.product((1, -1), repeat=len(diffs)))
    hits = sum(abs(sum(s * d for s, d in zip(signs, diffs))) >= observed - 1e-12 for signs in flips)
    return hits / len(flips)


def describe(values):
    if not values:
        return {"n": 0}
    return {
        "n": len(values),
        "mean": statistics.fmean(values),
        "sd": statistics.stdev(values) if len(values) > 1 else 0.0,
        "min": min(values),
        "max": max(values),
    }


def paired(table, metric, a, b):
    seeds = sorted(
        s
        for s in table
        if a in table[s]
        and b in table[s]
        and table[s][a].get(metric) is not None
        and table[s][b].get(metric) is not None
    )
    diffs = [table[s][b][metric] - table[s][a][metric] for s in seeds]
    return {
        "comparison": f"{b} - {a}",
        "metric": metric,
        "seeds": seeds,
        "diffs": diffs,
        **{k: v for k, v in describe(diffs).items() if k != "n"},
        "n_pairs": len(diffs),
        "b_better": sum(d != 0 and (d < 0) == (metric != "heldout_acc") for d in diffs),
        "ties": sum(d == 0 for d in diffs),
        "p_signflip": sign_flip_p(diffs) if diffs else None,
    }


def holm(tests):
    order = sorted(
        range(len(tests)),
        key=lambda i: tests[i]["p_signflip"] if tests[i]["p_signflip"] is not None else 2,
    )
    running = 0.0
    for rank, i in enumerate(order):
        p = tests[i]["p_signflip"]
        if p is None:
            continue
        running = max(running, min(1.0, p * (len(tests) - rank)))
        tests[i]["p_holm"] = running
    return tests


def collect(outs, grade):
    table = {}
    for r in (row for out in outs for row in rows(out)):
        run_dir = Path(r["run_dir"])
        entry = {
            "best_loss": float(r["best_loss"]),
            "rounds": int(r["rounds"]),
            "rounds_completed": int(r["rounds_completed"] or 0),
            "rounds_to_best": r["rounds_to_best"],
            "keeps": int(r["keeps"]),
            "evaluated": int(r["evaluated"]),
            "rejected": int(r["rejected"]),
            "duplicates": int(r["duplicates"]),
            "candidate_attempts": int(r["candidate_attempts"]),
            "critic_confirmations": int(r["critic_confirmations"] or 0),
            "distinct_evaluated_cells": int(r["distinct_evaluated_cells"] or 0),
            "regime_counts": r["regime_counts"],
            "llm_calls": int(r["llm_calls"] or 0),
            "prompt_tokens": int(r["prompt_tokens"] or 0),
            "completion_tokens": int(r["completion_tokens"] or 0),
            "exa_calls": int(r["exa_calls"] or 0),
            "exa_cost_usd": float(r["exa_cost_usd"] or 0),
            "crash_reasons": crash_reasons(run_dir),
        }
        run_json = json.loads((run_dir / "run.json").read_text())
        entry["status"] = run_json.get("status")
        entry["wall_s"] = wall_seconds(run_dir)
        entry["llm_failed_slots"] = llm_failed_slots(run_dir, entry["rounds_completed"])
        if grade:
            report = heldout(run_dir)
            entry["heldout"] = report
            entry["heldout_acc"] = (report.get("heldout") or {}).get("accuracy")
            entry["heldout_unguarded_acc"] = (report.get("heldout_unguarded") or {}).get("accuracy")
            entry["dev_acc"] = (report.get("dev") or {}).get("accuracy")
        table.setdefault(int(r["seed"]), {})[r["arm"]] = entry
    return table


def arm_summary(table, metrics):
    arms = sorted({a for s in table.values() for a in s})
    return {
        arm: {
            m: describe(
                [s[arm][m] for s in table.values() if arm in s and s[arm].get(m) is not None]
            )
            for m in metrics
        }
        for arm in arms
    }


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--hadamard", nargs="+", required=True)
    parser.add_argument("--bixbench", nargs="+", required=True)
    parser.add_argument("--out", required=True)
    args = parser.parse_args()
    out = Path(args.out)
    out.mkdir(parents=True, exist_ok=True)
    had = collect(args.hadamard, grade=False)
    bix = collect(args.bixbench, grade=True)
    tests = holm(
        [
            paired(had, "best_loss", "A", "B"),
            paired(bix, "heldout_acc", "A", "S"),
            paired(bix, "heldout_acc", "B", "S"),
            paired(bix, "heldout_acc", "A", "B"),
        ]
    )
    cost = [
        "prompt_tokens",
        "completion_tokens",
        "llm_calls",
        "exa_calls",
        "candidate_attempts",
        "distinct_evaluated_cells",
        "keeps",
        "rejected",
        "duplicates",
    ]
    report = {
        "primary": tests,
        "hadamard29": {"per_seed": had, "by_arm": arm_summary(had, ["best_loss"] + cost)},
        "bixbench_numeric": {
            "per_seed": bix,
            "by_arm": arm_summary(
                bix, ["heldout_acc", "heldout_unguarded_acc", "dev_acc", "best_loss"] + cost
            ),
        },
    }
    (out / "report.json").write_text(json.dumps(report, indent=2, default=str) + "\n")
    for t in tests:
        print(
            f"{t['metric']:12s} {t['comparison']:6s} n={t['n_pairs']} mean={t.get('mean')} "
            f"sd={t.get('sd')} p={t['p_signflip']} holm={t.get('p_holm')}"
        )
    for name, table, metric in (
        ("hadamard29", had, "best_loss"),
        ("bixbench_numeric", bix, "heldout_acc"),
    ):
        print(name)
        for seed in sorted(table):
            print(
                " ",
                seed,
                {
                    a: (e.get(metric), e.get("dev_acc"), e["crash_reasons"], e["prompt_tokens"])
                    for a, e in sorted(table[seed].items())
                },
            )


if __name__ == "__main__":
    main()
