#!/usr/bin/env python3
"""Recompute the published headline numbers from the artifacts committed in this repository.

Usage: python scripts/verify_results.py [--json] [--regrade]

Default mode needs no network, API keys or Docker: it reads experiments/real-runs/,
experiments/confirmatory/results/, experiments/memory-comparison/ and data/igjudge/ and checks
each number quoted in README.md and docs/results.md. Exit status 1 means a mismatch.

--regrade also re-runs the nine committed strict-guard BixBench winners
(best_final_analysis.py) on the held-out questions in the Docker sandbox. It downloads the
public BixBench files from Hugging Face on first use and needs the sandbox image.
"""

import argparse
import csv
import json
import math
import statistics
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))

from experiments.confirmatory.report import sign_flip_p  # noqa: E402
from held_out import wilson_interval  # noqa: E402

REAL = ROOT / "experiments" / "real-runs"
CONFIRMATORY = ROOT / "experiments" / "confirmatory" / "results"
MEMORY = ROOT / "experiments" / "memory-comparison" / "results.json"
IGJUDGE = ROOT / "data" / "igjudge" / "ignobel-real-runs" / "results-zip.json"
SEEDS = ("3001", "3002", "3003")
ARMS = ("A", "B", "S")


def load_json(path):
    return json.loads(Path(path).read_text(encoding="utf-8"))


def load_jsonl(path):
    lines = Path(path).read_text(encoding="utf-8").splitlines()
    return [json.loads(line) for line in lines if line.strip()]


def kept_losses(run_dir):
    with open(run_dir / "results.tsv", encoding="utf-8") as stream:
        rows = csv.DictReader(stream, delimiter="\t")
        return [float(r["loss"]) for r in rows if r["status"] == "keep" and r["loss"]]


def real_run_checks():
    bix = load_json(REAL / "bixbench_mini-v2" / "held_out_test.json")
    n = bix["n_items"]
    yield "bixbench_mini held-out questions", n, 7
    yield "bixbench_mini baseline correct", round(bix["baseline"]["score"] * n), 1
    yield "bixbench_mini best correct", round(bix["best"]["score"] * n), 6
    for arm, low, high in (("baseline", 0.026, 0.513), ("best", 0.487, 0.974)):
        ci = wilson_interval(bix[arm]["score"], n)
        yield f"bixbench_mini {arm} Wilson 95% CI", [round(v, 3) for v in ci], [low, high]
    play = load_json(REAL / "playworld_mini" / "held_out_test.json")
    yield "playworld_mini held-out episodes", play["n_items"], 200
    yield "playworld_mini baseline test loss", round(play["baseline"]["loss"], 5), 0.87225
    yield "playworld_mini best test loss", round(play["best"]["loss"], 4), 0.2535
    yield "hadamard19 best kept loss", min(kept_losses(REAL / "hadamard19")), 0.0


def ignobel_checks():
    studies = load_jsonl(REAL / "ignobel" / "ignobel_studies.jsonl")
    candidates = [s["result"] for s in studies if s["role"] == "candidate"]
    tested = [r for r in candidates if r.get("rho") is not None]
    passed = [r for r in candidates if r.get("confirmed")]
    yield "ignobel registered studies", len(candidates), 21
    yield "ignobel studies run", len(tested), 13
    yield "ignobel studies passing preregistered gates", len(passed), 11
    yield "ignobel passing with |rho| >= 0.1", sum(abs(r["rho"]) >= 0.1 for r in passed), 10
    critic = [s["result"] for s in studies if s["role"] == "critic"]
    yield "ignobel critic re-runs (rho)", [round(r["rho"], 2) for r in critic], [0.07]


def strict_table():
    table = {}
    for seed in SEEDS:
        for arm in ARMS:
            heldout = load_json(
                CONFIRMATORY / "bixbench_strict" / f"seed-{seed}" / arm / "heldout.json"
            )
            table.setdefault(seed, {})[arm] = heldout["heldout"]["accuracy"]
    return table


def guard2_table(key):
    runs = load_json(CONFIRMATORY / "truncated_partial_runs.json")["bixbench_guard2"]
    return {seed: {arm: runs[seed][arm][key] for arm in ARMS} for seed in SEEDS}


def means(table):
    return {arm: round(statistics.fmean(table[s][arm] for s in SEEDS), 3) for arm in ARMS}


def min_sign_flip_p(table):
    pairs = (("A", "B"), ("A", "S"), ("B", "S"))
    return min(sign_flip_p([table[s][b] - table[s][a] for s in SEEDS]) for a, b in pairs)


def confirmatory_checks():
    strict = strict_table()
    yield (
        "confirmatory strict-guard held-out means",
        means(strict),
        {"A": 0.093, "B": 0.056, "S": 0.296},
    )
    yield "confirmatory strict-guard smallest sign-flip p", min_sign_flip_p(strict), 0.25
    with open(CONFIRMATORY / "heldout_by_grader.tsv", encoding="utf-8") as stream:
        final = {
            (r["seed"], r["arm"]): float(r["grader_a0d4fcd_final"])
            for r in csv.DictReader(stream, delimiter="\t")
        }
    yield (
        "heldout_by_grader.tsv final column matches heldout.json",
        all(math.isclose(final[(s, a)], strict[s][a], abs_tol=5e-4) for s in SEEDS for a in ARMS),
        True,
    )
    guarded = guard2_table("heldout_acc")
    yield (
        "confirmatory guard2 guarded held-out means",
        means(guarded),
        {"A": 0.111, "B": 0.259, "S": 0.241},
    )
    unguarded = means(guard2_table("heldout_unguarded_acc"))
    yield (
        "confirmatory guard2 unguarded means (A, S)",
        [unguarded["A"], unguarded["S"]],
        [0.222, 0.352],
    )
    yield "confirmatory guard2 smallest sign-flip p", min_sign_flip_p(guarded), 0.5


def memory_checks():
    rows = {r["backend"].split()[0]: r for r in load_json(MEMORY)["results"]}
    local, pastdev = rows["local"], rows["past.dev"]
    yield "memory hit@1 (past.dev, local)", [pastdev["hit@1"], local["hit@1"]], [0.65, 0.30]
    yield "memory hit@8 (past.dev, local)", [pastdev["hit@8"], local["hit@8"]], [0.95, 0.825]
    latency = [round(pastdev["recall_latency_ms_p50"]), round(local["recall_latency_ms_p50"])]
    yield "memory p50 latency ms (past.dev, local)", latency, [562, 15]


def igjudge_checks():
    report = load_json(IGJUDGE)
    weights = {c["key"]: c["weight"] for c in report["criteria"]}
    recomputed = {
        idea["study_id"]: sum(idea["scores"][k]["final"] * w for k, w in weights.items())
        for idea in report["ideas"]
        if not idea.get("error")
    }
    yield "igjudge ideas scored", len(recomputed), 60
    yield (
        "igjudge totals = weighted final scores",
        all(math.isclose(recomputed[i["study_id"]], i["total"]) for i in report["ideas"]),
        True,
    )
    yield "igjudge winner", max(recomputed, key=recomputed.get), report["winner"]
    yield "igjudge winning total", recomputed[report["winner"]], 76.5


def regrade_checks():
    from testcases.bixbench_numeric import evaluate

    strict = strict_table()
    for seed in SEEDS:
        for arm in ARMS:
            source = (
                CONFIRMATORY / "bixbench_strict" / f"seed-{seed}" / arm / "best_final_analysis.py"
            ).read_text(encoding="utf-8")
            result = evaluate.evaluate_source(source, answers_file=".cache/heldout_answers.json")
            yield (
                f"regrade strict {seed}/{arm} held-out accuracy",
                round(result["score"], 3),
                round(strict[seed][arm], 3),
            )


def matches(actual, expected):
    if isinstance(expected, float) and isinstance(actual, (int, float)):
        return math.isclose(actual, expected, abs_tol=5e-4)
    if isinstance(expected, list) and isinstance(actual, list) and len(actual) == len(expected):
        return all(matches(a, e) for a, e in zip(actual, expected))
    if isinstance(expected, dict) and isinstance(actual, dict) and actual.keys() == expected.keys():
        return all(matches(actual[k], expected[k]) for k in expected)
    return actual == expected


def run_checks(regrade=False):
    groups = [real_run_checks, ignobel_checks, confirmatory_checks, memory_checks, igjudge_checks]
    if regrade:
        groups.append(regrade_checks)
    return [
        {"check": name, "actual": actual, "expected": expected, "ok": matches(actual, expected)}
        for group in groups
        for name, actual, expected in group()
    ]


def main(argv=None):
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument("--json", action="store_true", help="print results as JSON")
    parser.add_argument(
        "--regrade", action="store_true", help="re-grade BixBench winners in Docker"
    )
    args = parser.parse_args(argv)
    results = run_checks(regrade=args.regrade)
    if args.json:
        print(json.dumps(results, indent=2))
    else:
        for r in results:
            status = "ok  " if r["ok"] else "FAIL"
            detail = "" if r["ok"] else f" (expected {r['expected']})"
            print(f"{status} {r['check']}: {r['actual']}{detail}")
    failed = sum(not r["ok"] for r in results)
    print(
        f"{len(results) - failed}/{len(results)} checks match the published numbers",
        file=sys.stderr,
    )
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main())
