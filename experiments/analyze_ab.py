#!/usr/bin/env python3
"""Paired B-A analysis of ab.py results (lower loss and lower AUC are better)."""

import argparse
import csv
import itertools
import json
import math
import random
import statistics
import sys
from collections import Counter, defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
LABELS = {
    "hadamard19": "exact objective with a known optimum",
    "bixbench_mini": "17-question subset, not full BixBench",
    "playworld_mini": "synthetic proxy, not PlayWorld",
    "hadamard21": "exact objective with a proven optimum",
    "hadamard22": "exact objective with a proven optimum",
    "hadamard29": "exact objective against an unattainable upper bound",
    "bixbench_numeric": "45-question BixBench subset; dev loss, held-out via final_eval.py",
    "playworld_hard": "synthetic proxy; dev seeds, fresh seeds via final_eval.py",
    "ignobel": "pre-registered tests on real public data; loss is 0/1 per run",
}
MATCHED = (
    "source_commit",
    "llm",
    "model",
    "rounds",
    "workers",
    "exa",
    "exa_max_calls",
    "memory_backend",
    "eps",
    "profile_sha256",
    "task_inputs_sha256",
)


def sign_test(differences):
    positive = sum(d > 0 for d in differences)
    negative = sum(d < 0 for d in differences)
    n = positive + negative
    return {
        "n_nonzero": n,
        "p_two_sided": min(
            1.0, 2 * sum(math.comb(n, k) for k in range(min(positive, negative) + 1)) / 2**n
        )
        if n
        else 1.0,
    }


def wilcoxon(differences):
    """Exact conditional sign-permutation test with midranks; zeros dropped."""
    values = sorted((abs(d), d > 0) for d in differences if d != 0)
    n = len(values)
    if n > 50:
        return {
            "n_nonzero": n,
            "p_two_sided": None,
            "note": "exact calculation capped at 50 nonzero pairs; use the sign test",
        }
    ranks, start = [], 0
    while start < n:
        end = start + 1
        while end < n and values[end][0] == values[start][0]:
            end += 1
        # Twice the midrank keeps the subset-sum calculation integer-valued.
        ranks.extend((start + 1 + end, positive) for _, positive in values[start:end])
        start = end
    total = sum(rank for rank, _ in ranks)
    plus = sum(rank for rank, positive in ranks if positive)
    observed = min(plus, total - plus)
    counts = Counter({0: 1})
    for rank, _ in ranks:
        updated = counts.copy()
        for value, count in counts.items():
            updated[value + rank] += count
        counts = updated
    p = min(1.0, 2 * sum(count for value, count in counts.items() if value <= observed) / 2**n)
    return {
        "n_nonzero": n,
        "statistic": observed / 2,
        "p_two_sided": p,
        "note": "exact sign permutations with tied midranks; assumes symmetric differences",
    }


def quantile(values, p):
    position = (len(values) - 1) * p
    lower = math.floor(position)
    upper = math.ceil(position)
    return values[lower] + (values[upper] - values[lower]) * (position - lower)


def bootstrap_ci(differences, *, samples=10000, seed=2026):
    if len(differences) < 2:
        return None
    rng = random.Random(seed)
    means = sorted(
        statistics.mean(rng.choices(differences, k=len(differences))) for _ in range(samples)
    )
    return [quantile(means, 0.025), quantile(means, 0.975)]


def metric_summary(differences, margin, *, samples, seed):
    sign = sign_test(differences)
    return {
        "mean_B_minus_A": statistics.mean(differences),
        "sd_B_minus_A": statistics.stdev(differences) if len(differences) > 1 else None,
        "bootstrap_95_ci_mean": bootstrap_ci(differences, samples=samples, seed=seed),
        "sign_test": sign,
        "wilcoxon": wilcoxon(differences),
        "margin": margin,
        "B_improved": sum(d < -margin for d in differences),
        "A_improved": sum(d > margin for d in differences),
        "within_margin": sum(abs(d) <= margin for d in differences),
        "small_n_note": (
            "Too few nonzero pairs to reach two-sided p < 0.05 even if every sign agrees; too small to conclude a benefit."
            if sign["n_nonzero"] < 6
            else "Exploratory paired estimates; inspect CI width and practical margin before drawing conclusions."
        ),
    }


def analyze(rows, *, samples=10000, seed=2026):
    if not rows:
        raise ValueError("no result rows")
    if samples < 100:
        raise ValueError("use at least 100 bootstrap samples")
    pairs, run_ids, scopes = defaultdict(dict), set(), set()
    for row in rows:
        if row["task"] not in LABELS or row["arm"] not in ("A", "B"):
            raise ValueError("unknown task or arm")
        key = row["task"], int(row["seed"])
        if row["arm"] in pairs[key]:
            raise ValueError(f"duplicate arm for {key}")
        for value, seen in ((row["run_id"], run_ids), (row["memory_scope"], scopes)):
            if not value or value in seen:
                raise ValueError("run IDs and memory scopes must be unique across arms and pairs")
            seen.add(value)
        if row["memory_backend"] != "local":
            raise ValueError("this harness guarantees isolation only for local memory")
        curve = json.loads(row["loss_by_round"])
        rounds = int(row["rounds"])
        if (
            rounds < 1
            or len(curve) != rounds + 1
            or any(not isinstance(v, (int, float)) or not math.isfinite(v) for v in curve)
        ):
            raise ValueError("incomplete/nonfinite best-so-far curve")
        if any(b > a for a, b in itertools.pairwise(curve)):
            raise ValueError("best-so-far curve must not increase")
        auc = sum((a + b) / 2 for a, b in itertools.pairwise(curve))
        if not math.isclose(float(row["best_loss"]), curve[-1], abs_tol=1e-12) or not math.isclose(
            float(row["auc"]), auc, abs_tol=1e-12
        ):
            raise ValueError("summary does not match the best-so-far curve")
        pairs[key][row["arm"]] = row
    tasks = defaultdict(list)
    for (task, pair_seed), pair in sorted(pairs.items()):
        if set(pair) != {"A", "B"}:
            raise ValueError(f"missing paired arm for {task} seed {pair_seed}; no silent dropping")
        a, b = pair["A"], pair["B"]
        if any(a[key] != b[key] for key in MATCHED):
            raise ValueError(f"unmatched settings for {task} seed {pair_seed}")
        if json.loads(a["loss_by_round"])[0] != json.loads(b["loss_by_round"])[0]:
            raise ValueError("paired baselines differ")
        tasks[task].append((pair_seed, a, b))
    result = {
        "difference": "B minus A; negative favors B",
        "bootstrap_samples": samples,
        "bootstrap_seed": seed,
        "auc_definition": "trapezoidal loss-rounds, includes baseline at round 0; confirmed kept incumbents",
        "inference_note": "Two-sided tests use zero difference; improvement labels require the task eps. Percentile bootstrap is unstable at small n. P-values are exploratory, unadjusted across tasks/endpoints.",
        "tasks": {},
    }
    for task, task_pairs in sorted(tasks.items()):
        a0 = task_pairs[0][1]
        if any(any(a[key] != a0[key] for key in MATCHED) for _, a, _ in task_pairs):
            raise ValueError(f"mixed settings within task {task}")
        eps, rounds = float(a0["eps"]), int(a0["rounds"])
        if not math.isfinite(eps) or eps <= 0:
            raise ValueError("eps must be positive and finite")
        best_diffs = [float(b["best_loss"]) - float(a["best_loss"]) for _, a, b in task_pairs]
        auc_diffs = [float(b["auc"]) - float(a["auc"]) for _, a, b in task_pairs]
        result["tasks"][task] = {
            "label": LABELS[task],
            "n_pairs": len(task_pairs),
            "seeds": [s for s, _, _ in task_pairs],
            "eps": eps,
            "rounds": rounds,
            "evidence": "FAKE RUNS: harness validation only; no evidence that boredom helps."
            if a0["llm"] == "fake"
            else "Live paired experiment; no causal claim beyond the tested configuration and task.",
            "best_loss": metric_summary(best_diffs, eps, samples=samples, seed=seed),
            "auc": metric_summary(auc_diffs, eps * rounds, samples=samples, seed=seed),
        }
    return result


def main(argv=None):
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("csv", type=Path)
    parser.add_argument("--out", type=Path, help="optional JSON analysis file")
    parser.add_argument("--bootstrap-samples", type=int, default=10000)
    parser.add_argument("--seed", type=int, default=2026)
    args = parser.parse_args(argv)
    try:
        with args.csv.open(newline="") as stream:
            result = analyze(
                list(csv.DictReader(stream)), samples=args.bootstrap_samples, seed=args.seed
            )
        rendered = json.dumps(result, indent=2, allow_nan=False) + "\n"
        if args.out:
            args.out.write_text(rendered)
        print(rendered, end="")
    except (OSError, ValueError, KeyError) as error:
        print(f"analyze_ab.py: {error}", file=sys.stderr)
        return 2
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
