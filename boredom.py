#!/usr/bin/env python3
"""Track search novelty and gate low-divergence autoresearch attempts."""

import argparse
import csv
from datetime import datetime, timezone
import json
import math
import os
from pathlib import Path
import re
import subprocess
import sys


DEFAULT_WEIGHTS = (0.45, 0.45, 0.10)
_DIGITS = r"\d(?:_?\d)*"
NUMBER_PATTERN = rf"(?:{_DIGITS}(?:\.(?:{_DIGITS})?)?|\.(?:{_DIGITS}))(?:[eE][+-]?{_DIGITS})?"
NUMBER_RE = re.compile(NUMBER_PATTERN)
TOKEN_RE = re.compile(NUMBER_PATTERN + r"|\w+|[^\w\s]")
WORD_RE = re.compile(r"\w+")


def jaccard_distance(a, b):
    """Return set distance, treating two empty representations as identical."""
    a = set(a)
    b = set(b)
    if not a and not b:
        return 0.0
    return 1.0 - len(a & b) / len(a | b)


def compute_meter(rows, zs, k=5, eps=0.0005, weights=DEFAULT_WEIGHTS, disabled=False):
    """Compute boredom metrics from chronological rows and their token sets."""
    if k < 1:
        raise ValueError("k must be at least 1")
    if len(rows) != len(zs):
        raise ValueError("rows and zs must have the same length")

    n_rows = len(rows)
    if not n_rows:
        return {
            "n_rows": 0,
            "B": 0.0,
            "regime": "EXPLOIT",
            "novelty": 0.0,
            "stagnation": 0.0,
            "overload": 0.0,
            "frontier_stall": 0,
            "best_val_bpb": None,
            "best_commit": None,
            "disabled": bool(disabled),
        }

    if n_rows == 1:
        novelty = 1.0
    else:
        latest = zs[-1]
        previous = zs[max(0, n_rows - 1 - k) : -1]
        novelty = sum(jaccard_distance(latest, z) for z in previous) / len(previous)

    best_val = None
    best_commit = None
    streak = 0
    frontier_stall = 0
    for row in rows:
        status = row.get("status", "")
        try:
            value = float(row.get("val_bpb", "nan"))
        except (TypeError, ValueError):
            value = float("nan")
        if status != "crash" and math.isfinite(value) and best_val is None:
            best_val = value
            best_commit = row.get("commit")
            streak = 0
            frontier_stall = 0
        elif status != "crash" and math.isfinite(value) and value < best_val:
            significant_improvement = best_val - value > eps
            best_val = value
            best_commit = row.get("commit")
            frontier_stall = 0
            if significant_improvement:
                streak = 0
            else:
                streak += 1
        else:
            streak += 1
            frontier_stall += 1

    stagnation = min(streak / k, 1.0)
    window = rows[-k:]
    crash_rate = sum(row.get("status") == "crash" for row in window) / len(window)
    trivial_count = sum(
        bool(row.get("resolvable", True)) and int(row.get("diff_lines", 0)) <= 2
        for row in window
    )
    trivial_rate = trivial_count / len(window)
    overload = max(crash_rate, trivial_rate)
    w_novelty, w_stagnation, w_overload = weights
    boredom = (
        w_novelty * (1.0 - novelty)
        + w_stagnation * stagnation
        + w_overload * overload
    )
    boredom = min(max(boredom, 0.0), 1.0)

    if disabled or n_rows < 3 or boredom < 0.70:
        regime = "EXPLOIT"
    elif boredom < 0.85:
        regime = "BOREDOM_SNAP"
    else:
        regime = "PARADIGM_BREAKOUT"

    return {
        "n_rows": n_rows,
        "B": boredom,
        "regime": regime,
        "novelty": novelty,
        "stagnation": stagnation,
        "overload": overload,
        "frontier_stall": frontier_stall,
        "best_val_bpb": best_val,
        "best_commit": best_commit,
        "disabled": bool(disabled),
    }


def description_tokens(description):
    return {"desc:" + word.casefold() for word in WORD_RE.findall(description or "")}


def parse_train_diff(diff_text):
    """Extract changed lines, line count, and word-level three-shingles."""
    changed_lines = []
    for line in diff_text.splitlines():
        if line.startswith("+++") or line.startswith("---"):
            continue
        if line.startswith("+") or line.startswith("-"):
            content = " ".join(line[1:].split())
            changed_lines.append(content)

    tokens = []
    for line in changed_lines:
        tokens.extend(
            "<num>" if NUMBER_RE.fullmatch(token) else token.casefold()
            for token in TOKEN_RE.findall(line)
        )
    shingles = {
        " ".join(tokens[index : index + 3])
        for index in range(max(0, len(tokens) - 2))
    }
    return shingles, len(changed_lines)


def commit_representation(commit, description, repo):
    """Return a row's representation, falling back to description if unresolved."""
    try:
        result = subprocess.run(
            ["git", "show", "--format=", "--unified=0", commit, "--", "train.py"],
            cwd=repo,
            check=True,
            capture_output=True,
            text=True,
        )
    except (OSError, subprocess.CalledProcessError):
        return description_tokens(description), 0, False

    shingles, diff_lines = parse_train_diff(result.stdout)
    return shingles | description_tokens(description), diff_lines, True


def commit_subject(commit, repo):
    try:
        result = subprocess.run(
            ["git", "log", "-1", "--format=%s", commit],
            cwd=repo,
            check=True,
            capture_output=True,
            text=True,
        )
    except (OSError, subprocess.CalledProcessError):
        return ""
    return result.stdout.strip()


def read_results(path):
    path = Path(path)
    if not path.exists() or path.stat().st_size == 0:
        return []
    with path.open(newline="", encoding="utf-8") as results_file:
        reader = csv.DictReader(results_file, delimiter="\t")
        required = {"commit", "val_bpb", "memory_gb", "status", "description"}
        if not required.issubset(reader.fieldnames or []):
            raise ValueError("results.tsv is missing required columns")
        return [row for row in reader if row.get("commit")]


def load_history(rows, repo):
    normalized = []
    representations = []
    for row in rows:
        z, diff_lines, resolvable = commit_representation(
            row["commit"], row.get("description", ""), repo
        )
        normalized.append(
            {
                **row,
                "diff_lines": diff_lines,
                "resolvable": resolvable,
            }
        )
        representations.append(z)
    return normalized, representations


def is_disabled():
    return os.environ.get("BOREDOM", "").casefold() == "off"


def append_log(path, record):
    path = Path(path)
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("a", encoding="utf-8") as log_file:
        log_file.write(json.dumps(record, sort_keys=True) + "\n")


def timestamp():
    return datetime.now(timezone.utc).isoformat()


def status_record(rows, metrics, k, weights):
    return {
        "ts": timestamp(),
        "n_rows": metrics["n_rows"],
        "last_commit": rows[-1]["commit"] if rows else None,
        "B": metrics["B"],
        "regime": metrics["regime"],
        "novelty": metrics["novelty"],
        "stagnation": metrics["stagnation"],
        "overload": metrics["overload"],
        "frontier_stall": metrics["frontier_stall"],
        "best_val_bpb": metrics["best_val_bpb"],
        "best_commit": metrics["best_commit"],
        "weights": list(weights),
        "k": k,
        "disabled": metrics["disabled"],
    }


def print_directive(regime):
    print(f"{regime} directive:")
    if regime == "EXPLOIT":
        print("  Refine the best result with one small, targeted change.")
        print("  Keep the search local while progress remains steady.")
    elif regime == "BOREDOM_SNAP":
        print("  Micro-tweaks are banned; consult the failed-ideas list below.")
        print("  Propose a structurally different idea and consider a parallel divergent burst.")
    else:
        print("  Change the framing itself: try another architecture/optimizer family, data ordering, or training regime.")
        print("  Reset to the best commit before trying the new framing.")


def run_status(args):
    raw_rows = read_results(args.results)
    rows, zs = load_history(raw_rows, args.repo)
    metrics = compute_meter(
        rows, zs, k=args.k, eps=args.eps, weights=args.weights, disabled=is_disabled()
    )
    record = status_record(rows, metrics, args.k, args.weights)
    append_log(args.log, record)

    if args.json:
        print(json.dumps(record, sort_keys=True))
        return 0

    print(
        f"B={record['B']:.3f} regime={record['regime']} "
        f"attempts={record['n_rows']} last={record['last_commit'] or 'none'}"
    )
    print(
        f"novelty={record['novelty']:.3f} stagnation={record['stagnation']:.3f} "
        f"overload={record['overload']:.3f} frontier_stall={record['frontier_stall']}"
    )
    if record["best_val_bpb"] is not None:
        print(
            f"best_val_bpb={record['best_val_bpb']:.6f} "
            f"best_commit={record['best_commit']}"
        )
    print_directive(record["regime"])

    if record["regime"] in ("BOREDOM_SNAP", "PARADIGM_BREAKOUT"):
        print("Episodic memory (last 10 discard/crash attempts):")
        failed_rows = [
            row for row in rows if row.get("status") in ("discard", "crash")
        ][-10:]
        if failed_rows:
            for row in failed_rows:
                print(f"  - {row['commit']}: {row.get('description', '')}")
        else:
            print("  (none)")
    return 0


def run_gate(args):
    raw_rows = read_results(args.results)
    rows, zs = load_history(raw_rows, args.repo)
    metrics = compute_meter(
        rows, zs, k=args.k, eps=args.eps, weights=args.weights, disabled=is_disabled()
    )
    candidate_description = commit_subject(args.commit, args.repo)
    candidate_z, diff_lines, _ = commit_representation(
        args.commit, candidate_description, args.repo
    )
    recent_distances = [
        jaccard_distance(candidate_z, z) for z in zs[-args.k :]
    ]
    failed_distances = [
        jaccard_distance(candidate_z, z)
        for row, z in zip(rows, zs)
        if row.get("status") in ("discard", "crash")
    ]
    min_recent = min(recent_distances) if recent_distances else None
    min_failed = min(failed_distances) if failed_distances else None

    reasons = []
    if metrics["regime"] not in ("EXPLOIT",) and not metrics["disabled"]:
        if diff_lines < args.min_lines:
            reasons.append(
                f"diff has {diff_lines} changed lines; minimum is {args.min_lines}"
            )
        if min_recent is not None and min_recent < args.delta_min:
            reasons.append(
                f"near-duplicate of a recent attempt (distance {min_recent:.3f} "
                f"< {args.delta_min:.3f})"
            )
        if min_failed is not None and min_failed < args.failed_delta:
            reasons.append(
                f"too close to a failed basin (distance {min_failed:.3f} "
                f"< {args.failed_delta:.3f})"
            )
    passed = not reasons
    record = {
        "type": "gate",
        "ts": timestamp(),
        "candidate_commit": args.commit,
        "n_rows": metrics["n_rows"],
        "regime": metrics["regime"],
        "disabled": metrics["disabled"],
        "pass": passed,
        "diff_lines": diff_lines,
        "min_recent_dist": min_recent,
        "min_failed_dist": min_failed,
        "reasons": reasons,
        "min_lines": args.min_lines,
        "delta_min": args.delta_min,
        "failed_delta": args.failed_delta,
    }
    append_log(args.log, record)

    print(f"candidate={args.commit} regime={metrics['regime']} diff_lines={diff_lines}")
    if min_recent is not None:
        print(f"minimum recent distance: {min_recent:.3f}")
    else:
        print("minimum recent distance: n/a")
    if min_failed is not None:
        print(f"minimum failed distance: {min_failed:.3f}")
    else:
        print("minimum failed distance: n/a")
    if passed:
        print("PASS")
        return 0
    print("REJECT")
    for reason in reasons:
        print(f"- {reason}")
    return 1


def parse_weights(value):
    try:
        weights = tuple(float(part) for part in value.split(","))
    except ValueError as error:
        raise argparse.ArgumentTypeError("weights must be three comma-separated numbers") from error
    if len(weights) != 3 or any(not math.isfinite(weight) or weight < 0 for weight in weights):
        raise argparse.ArgumentTypeError("weights must be three finite non-negative numbers")
    return weights


def add_common_options(parser, suppress_defaults=False):
    default = argparse.SUPPRESS if suppress_defaults else None
    parser.add_argument("--results", default=default if suppress_defaults else "results.tsv")
    parser.add_argument("--log", default=default if suppress_defaults else "boredom_log.jsonl")
    parser.add_argument("--repo", default=default if suppress_defaults else ".")
    parser.add_argument("--k", type=int, default=default if suppress_defaults else 5)
    parser.add_argument("--eps", type=float, default=default if suppress_defaults else 0.0005)
    parser.add_argument(
        "--weights",
        type=parse_weights,
        default=default if suppress_defaults else DEFAULT_WEIGHTS,
    )


def build_parser():
    parser = argparse.ArgumentParser(description=__doc__)
    add_common_options(parser)
    subparsers = parser.add_subparsers(dest="command", required=True)

    status_parser = subparsers.add_parser("status")
    add_common_options(status_parser, suppress_defaults=True)
    status_parser.add_argument("--json", action="store_true")
    status_parser.set_defaults(func=run_status)

    gate_parser = subparsers.add_parser("gate")
    add_common_options(gate_parser, suppress_defaults=True)
    gate_parser.add_argument("--commit", default="HEAD")
    gate_parser.add_argument("--min-lines", type=int, default=4)
    gate_parser.add_argument("--delta-min", type=float, default=0.35)
    gate_parser.add_argument("--failed-delta", type=float, default=0.25)
    gate_parser.set_defaults(func=run_gate)
    return parser


def main(argv=None):
    parser = build_parser()
    args = parser.parse_args(argv)
    if args.k < 1:
        parser.error("--k must be at least 1")
    if args.eps < 0 or not math.isfinite(args.eps):
        parser.error("--eps must be a finite non-negative number")
    if args.command == "gate":
        if args.min_lines < 0:
            parser.error("--min-lines must be non-negative")
        if (
            not math.isfinite(args.delta_min)
            or args.delta_min < 0
            or not math.isfinite(args.failed_delta)
            or args.failed_delta < 0
        ):
            parser.error("distance thresholds must be finite and non-negative")
    args.repo = str(Path(args.repo).resolve())
    try:
        return args.func(args)
    except (OSError, ValueError) as error:
        print(f"boredom.py: {error}", file=sys.stderr)
        return 2


if __name__ == "__main__":
    raise SystemExit(main())
