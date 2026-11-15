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

METER_PATH = Path(__file__).parent / "boredom_meter"
if str(METER_PATH) not in sys.path:
    sys.path.insert(0, str(METER_PATH))

import meter as descriptor_meter


DEFAULT_PROFILE = Path(__file__).resolve().parent / "testcases" / "hadamard19" / "boredom_profile.json"
DEFAULT_WEIGHTS = (0.45, 0.45, 0.10)
_DIGITS = r"\d(?:_?\d)*"
NUMBER_PATTERN = rf"(?:{_DIGITS}(?:\.(?:{_DIGITS})?)?|\.(?:{_DIGITS}))(?:[eE][+-]?{_DIGITS})?"
NUMBER_RE = re.compile(NUMBER_PATTERN)
TOKEN_RE = re.compile(NUMBER_PATTERN + r"|\w+|[^\w\s]")
WORD_RE = re.compile(r"\w+")
KNOB_ASSIGNMENT_RE = re.compile(r"^\s*[A-Z][A-Z0-9_]*\s*=")


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
            "best_loss": None,
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
            value = float(row.get("loss", "nan"))
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
        "best_loss": best_val,
        "best_commit": best_commit,
        "disabled": bool(disabled),
    }


def description_tokens(description):
    return {"desc:" + word.casefold() for word in WORD_RE.findall(description or "")}


def parse_candidate_diff(diff_text):
    """Extract changed lines, line count, and word-level three-shingles."""
    changed_lines = []
    for line in diff_text.splitlines():
        if line.startswith("+++") or line.startswith("---"):
            continue
        if line.startswith("+") or line.startswith("-"):
            changed_lines.append(line[1:])

    tokens = []
    for line in changed_lines:
        if KNOB_ASSIGNMENT_RE.match(line):
            tokens.extend(("<knob>", "=", "<val>"))
            continue
        content = " ".join(line.split())
        tokens.extend(
            "<num>" if NUMBER_RE.fullmatch(token) else token.casefold()
            for token in TOKEN_RE.findall(content)
        )
    shingles = {
        " ".join(tokens[index : index + 3])
        for index in range(max(0, len(tokens) - 2))
    }
    return shingles, len(changed_lines)


def representation_from_diff(diff_text, description):
    shingles, diff_lines = parse_candidate_diff(diff_text)
    return shingles | description_tokens(description), diff_lines


def commit_representation(commit, description, repo):
    """Return a row's representation, falling back to description if unresolved."""
    try:
        result = subprocess.run(
            [
                "git", "show", "--format=", "--unified=0", commit,
                "--", os.environ.get("AUTORESEARCH_TARGET", "candidate.py"),
            ],
            cwd=repo,
            check=True,
            capture_output=True,
            text=True,
        )
    except (OSError, subprocess.CalledProcessError):
        return description_tokens(description), 0, False

    representation, diff_lines = representation_from_diff(
        result.stdout, description
    )
    return representation, diff_lines, True


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


def commit_message(commit, repo):
    try:
        result = subprocess.run(
            ["git", "log", "-1", "--format=%B", commit],
            cwd=repo,
            check=True,
            capture_output=True,
            text=True,
        )
    except (OSError, subprocess.CalledProcessError):
        return ""
    return result.stdout


def source_trailers(message):
    sources = []
    has_trailer = False
    for line in message.splitlines():
        match = re.fullmatch(r"\s*Source:\s*(.*?)\s*", line)
        if not match:
            continue
        has_trailer = True
        for source_id in match.group(1).split(","):
            source_id = source_id.strip()
            if re.fullmatch(r"S\d+", source_id) and source_id not in sources:
                sources.append(source_id)
    return sources, has_trailer


def message_trailer(message, name):
    matches = []
    for line in message.splitlines():
        match = re.fullmatch(rf"\s*{re.escape(name)}:\s*(.*?)\s*", line)
        if match:
            matches.append(match.group(1))
    return matches[-1] if matches else None


def descriptor_from_message(message, description, profile):
    value = message_trailer(message, "Descriptor")
    if value is None:
        raise ValueError("missing Descriptor trailer")
    match = re.fullmatch(
        rf"([A-Za-z0-9_]+)/([A-Za-z0-9_]+)"
        rf"(?:\s+value=({NUMBER_PATTERN}))?",
        value,
    )
    if not match:
        raise ValueError(f"invalid Descriptor trailer: {value}")
    descriptor = dict(zip(profile["levels"], match.group(1, 2)))
    if match.group(3) is not None:
        descriptor["params"] = {"value": float(match.group(3))}
    descriptor_meter.validate_descriptor(profile, descriptor)
    return descriptor


def ledger_events(rows, repo, profile, errors=None):
    events = []
    for seq, row in enumerate(rows, 1):
        message = commit_message(row["commit"], repo) if repo is not None else ""
        try:
            if row.get("descriptor"):
                descriptor = json.loads(row["descriptor"])
                descriptor_meter.validate_descriptor(profile, descriptor)
            elif message_trailer(message, "Descriptor") is not None:
                descriptor = descriptor_from_message(message, "", profile)
            else:
                raise ValueError("missing descriptor column or Descriptor trailer")
        except (ValueError, TypeError) as error:
            if errors is not None:
                errors.append(f"history row {seq}: {error}")
            continue
        score = None
        if row.get("status") != "crash":
            try:
                score = float(row.get("loss", "nan"))
            except (TypeError, ValueError):
                score = None
        sources, _ = source_trailers(message)
        events.append(
            {
                "seq": seq,
                "commit": row.get("commit"),
                "kind": row.get("kind"),
                "agent": row.get("agent")
                or message_trailer(message, "Agent")
                or "agent",
                "status": row.get("status"),
                "score": score,
                "descriptor": descriptor,
                "sources": sources,
            }
        )
    return events


def effective_profile(args):
    profile = descriptor_meter.load_profile(args.profile)
    for name in ("k", "eps", "weights"):
        value = getattr(args, name, None)
        if value is not None:
            profile[name] = value
    if args.command == "gate":
        gate = profile.setdefault("gate", {})
        if args.delta_min is not None:
            gate["snap_min_distance"] = args.delta_min
        if args.failed_delta is not None:
            gate["failed_min_distance"] = args.failed_delta
    if profile["k"] < 1:
        raise ValueError("k must be at least 1")
    if profile["eps"] < 0 or not math.isfinite(profile["eps"]):
        raise ValueError("eps must be a finite non-negative number")
    profile["_hash"] = descriptor_meter.sha(
        {key: value for key, value in profile.items() if not key.startswith("_")}
    )
    return profile


def prior_art_trailers(message):
    values = []
    for line in message.splitlines():
        match = re.fullmatch(r"\s*Prior-art:\s*(.*?)\s*", line)
        if match:
            values.append(match.group(1))

    ids = []
    invalid = []
    query_ids = []
    for value in values:
        none_found = re.fullmatch(r"none-found\s+(Q\d+)", value)
        if none_found:
            query_ids.append(none_found.group(1))
            if none_found.group(1) not in ids:
                ids.append(none_found.group(1))
            continue
        for item in value.split(","):
            item = item.strip()
            if re.fullmatch(r"S\d+", item):
                if item not in ids:
                    ids.append(item)
            else:
                invalid.append(item)
    return ids, bool(values), invalid, query_ids


def read_research_sources(path):
    path = Path(path)
    if not path.exists():
        return set()
    sources = set()
    with path.open(encoding="utf-8") as log_file:
        for line_number, line in enumerate(log_file, start=1):
            if not line.strip():
                continue
            try:
                record = json.loads(line)
            except json.JSONDecodeError as error:
                raise ValueError(
                    f"invalid JSON in {path}, line {line_number}"
                ) from error
            if record.get("type") == "source" and record.get("id"):
                sources.add(str(record["id"]))
    return sources


def read_research_ids(path):
    path = Path(path)
    if not path.exists():
        return {"source": set(), "query": set()}
    ids = {"source": set(), "query": set()}
    with path.open(encoding="utf-8") as log_file:
        for line_number, line in enumerate(log_file, start=1):
            if not line.strip():
                continue
            try:
                record = json.loads(line)
            except json.JSONDecodeError as error:
                raise ValueError(
                    f"invalid JSON in {path}, line {line_number}"
                ) from error
            record_type = record.get("type")
            if record_type in ids and record.get("id"):
                ids[record_type].add(str(record["id"]))
    return ids


def read_results(path):
    path = Path(path)
    if not path.exists() or path.stat().st_size == 0:
        return []
    with path.open(newline="", encoding="utf-8") as results_file:
        reader = csv.DictReader(results_file, delimiter="\t")
        required = {"commit", "loss", "status", "description"}
        if not required.issubset(reader.fieldnames or []):
            raise ValueError("results.tsv is missing required columns")
        return list(reader)


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


def status_record(rows, events, metrics, profile, disabled):
    best_seq = metrics["best_seq"]
    best_commit = next((event.get("commit") for event in events
                        if event["seq"] == best_seq), None)
    regime = "EXPLOIT" if disabled else metrics["regime"]
    return {
        "ts": timestamp(),
        "n_rows": len(rows),
        "last_commit": rows[-1]["commit"] if rows else None,
        "B": metrics["B"],
        "regime": regime,
        "novelty": metrics["novelty"],
        "stagnation": metrics["stagnation"],
        "overload": metrics["overload"],
        "frontier_stall": metrics["frontier_stall"],
        "best_loss": metrics["best"],
        "best_commit": best_commit,
        "weights": list(profile["weights"]),
        "k": profile["k"],
        "eps": profile["eps"],
        "disabled": disabled,
        "ledger_sha256": metrics["ledger_sha256"],
        "profile_sha256": profile["_hash"],
        "profile_version": profile.get("version"),
        "descriptor": events[-1]["descriptor"] if events else None,
        "directive": profile.get("directives", {}).get(regime, ""),
    }


def print_directive(regime, directive):
    print(f"{regime} directive:")
    print(f"  {directive}")


def run_status(args):
    profile = effective_profile(args)
    rows, events = scoring_history(args, profile)
    metrics = descriptor_meter.status(profile, events)
    disabled = is_disabled()
    record = status_record(rows, events, metrics, profile, disabled)
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
    if record["best_loss"] is not None:
        print(
            f"best_loss={record['best_loss']:.6f} "
            f"best_commit={record['best_commit']}"
        )
    print_directive(record["regime"], record["directive"])

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


def scoring_history(args, profile, errors=None):
    if getattr(args, "ledger", None):
        events = descriptor_meter.read_ledger(args.ledger)
        return events, events
    rows = read_results(args.results)
    return rows, ledger_events(rows, args.repo, profile, errors)


def run_gate(args):
    profile = effective_profile(args)
    history_errors = []
    rows, events = scoring_history(args, profile, history_errors)
    candidate_description = commit_subject(args.commit, args.repo)
    candidate_message = commit_message(args.commit, args.repo)
    cited_sources, has_source_trailer = source_trailers(candidate_message)
    disabled = is_disabled()
    metrics = descriptor_meter.status(profile, events)
    regime = "EXPLOIT" if disabled else metrics["regime"]
    known_sources = read_research_sources(args.research_log)
    prior_art, has_prior_art, invalid_prior_art, none_found_queries = (
        prior_art_trailers(candidate_message)
    )
    prior_art_enabled = not any(
        os.environ.get(name, "").casefold() == "off"
        for name in ("EXA", "GROUNDING", "PRIOR_ART")
    )
    research_ids = (
        read_research_ids(args.research_log)
        if prior_art_enabled
        else {"source": set(), "query": set()}
    )
    valid_sources = [source_id for source_id in cited_sources if source_id in known_sources]
    unknown_sources = [
        source_id for source_id in cited_sources if source_id not in known_sources
    ]
    reasons = list(history_errors)
    candidate_descriptor = None
    descriptor_trailer = message_trailer(candidate_message, "Descriptor")
    meter_gate = {}
    if descriptor_trailer is not None:
        try:
            candidate_descriptor = descriptor_from_message(
                candidate_message, candidate_description, profile
            )
        except ValueError as error:
            if not disabled:
                reasons.append(f"invalid-descriptor: {error}")
                candidate_descriptor = None
            else:
                candidate_descriptor = None
    elif not disabled:
        reasons.append("no-descriptor")
    if not disabled and candidate_descriptor is not None:
        try:
            meter_gate = descriptor_meter.gate(
                profile,
                events,
                candidate_descriptor,
                agent=None,
                sources=valid_sources,
                role=getattr(args, "role", None),
            )
            regime = meter_gate["regime"]
            reasons.extend(meter_gate["reasons"])
        except ValueError as error:
            reasons.append(f"invalid-descriptor: {error}")

    grounding_enabled = (
        regime in ("BOREDOM_SNAP", "PARADIGM_BREAKOUT")
        and os.environ.get("GROUNDING", "").casefold() != "off"
    )
    grounded = bool(valid_sources)
    if grounding_enabled and not grounded:
        if not has_source_trailer:
            reasons.append("ungrounded: no Source trailer")
        elif unknown_sources:
            reasons.append(
                "ungrounded: unknown id " + ", ".join(unknown_sources)
            )
        else:
            reasons.append("ungrounded: no valid source id in Source trailer")
    if prior_art_enabled:
        if not has_prior_art:
            reasons.append("no-prior-art: missing Prior-art trailer")
        elif invalid_prior_art:
            reasons.append(
                "no-prior-art: invalid id " + ", ".join(invalid_prior_art)
            )
        elif not prior_art:
            reasons.append("no-prior-art: empty Prior-art trailer")
        else:
            unknown_prior_art = [
                item
                for item in prior_art
                if (
                    item in none_found_queries
                    and item not in research_ids["query"]
                )
                or (
                    item not in none_found_queries
                    and item not in research_ids["source"]
                )
            ]
            if unknown_prior_art:
                reasons.append(
                    "no-prior-art: unknown id " + ", ".join(unknown_prior_art)
                )
    _, diff_lines, _ = commit_representation(
        args.commit, candidate_description, args.repo
    )
    passed = not reasons
    record = {
        "type": "gate",
        "ts": timestamp(),
        "candidate_commit": args.commit,
        "n_rows": len(rows),
        "regime": regime,
        "disabled": disabled,
        "pass": passed,
        "descriptor": candidate_descriptor,
        "ledger_sha256": metrics["ledger_sha256"],
        "profile_sha256": profile["_hash"],
        "profile_version": profile.get("version"),
        "diff_lines": diff_lines,
        "min_recent_dist": meter_gate.get("min_recent_distance"),
        "min_failed_dist": meter_gate.get("min_failed_distance"),
        "sources": valid_sources,
        "grounded": grounded,
        "prior_art": prior_art,
        "lead": message_trailer(candidate_message, "Lead"),
        "agent": message_trailer(candidate_message, "Agent"),
        "reasons": reasons,
        "min_lines": args.min_lines,
        "delta_min": profile["gate"].get("snap_min_distance"),
        "failed_delta": profile["gate"].get("failed_min_distance"),
    }
    append_log(args.log, record)

    print(f"candidate={args.commit} regime={regime} diff_lines={diff_lines}")
    min_recent = record["min_recent_dist"]
    min_failed = record["min_failed_dist"]
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
    parser.add_argument("--ledger", default=default if suppress_defaults else None)
    parser.add_argument("--log", default=default if suppress_defaults else "boredom_log.jsonl")
    parser.add_argument("--repo", default=default if suppress_defaults else ".")
    parser.add_argument(
        "--profile",
        default=default if suppress_defaults else str(DEFAULT_PROFILE),
    )
    parser.add_argument("--k", type=int, default=default if suppress_defaults else None)
    parser.add_argument("--eps", type=float, default=default if suppress_defaults else None)
    parser.add_argument(
        "--weights",
        type=parse_weights,
        default=default if suppress_defaults else None,
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
    gate_parser.add_argument("--role")
    gate_parser.add_argument("--min-lines", type=int, default=4)
    gate_parser.add_argument("--delta-min", type=float)
    gate_parser.add_argument("--failed-delta", type=float)
    gate_parser.add_argument("--research-log", default="research_log.jsonl")
    gate_parser.set_defaults(func=run_gate)
    return parser


def main(argv=None):
    parser = build_parser()
    args = parser.parse_args(argv)
    if args.k is not None and args.k < 1:
        parser.error("--k must be at least 1")
    if args.eps is not None and (
        args.eps < 0 or not math.isfinite(args.eps)
    ):
        parser.error("--eps must be a finite non-negative number")
    if args.command == "gate":
        if args.min_lines < 0:
            parser.error("--min-lines must be non-negative")
        if any(
            value is not None and (not math.isfinite(value) or value < 0)
            for value in (args.delta_min, args.failed_delta)
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
