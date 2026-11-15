#!/usr/bin/env python3
"""Compare autoresearch experiment arms and render demo plots."""

import argparse
import csv
from itertools import combinations
import json
import math
from pathlib import Path
import re
import subprocess
import sys

import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.lines import Line2D

from boredom import jaccard_distance, parse_train_diff


BASELINE_VAL_BPB = 0.995814
SUMMARY_LINE_RE = re.compile(r"^\[(EXPLOIT|SNAP|BREAKOUT)\]")
REQUIRED_COLUMNS = {"commit", "val_bpb", "memory_gb", "status", "description"}


def parse_arm(value):
    if "=" not in value:
        raise argparse.ArgumentTypeError("arm must be NAME=PATH")
    name, path = value.split("=", 1)
    if not name or not path:
        raise argparse.ArgumentTypeError("arm must be NAME=PATH")
    return name, path


def read_results(path):
    results_path = Path(path) / "results.tsv"
    if not results_path.is_file():
        raise ValueError(f"missing results file: {results_path}")

    with results_path.open(newline="", encoding="utf-8") as results_file:
        reader = csv.DictReader(results_file, delimiter="\t")
        if not REQUIRED_COLUMNS.issubset(reader.fieldnames or []):
            raise ValueError(f"{results_path} is missing required columns")

        rows = []
        for index, record in enumerate(reader):
            try:
                value = float(record["val_bpb"])
            except (TypeError, ValueError) as error:
                raise ValueError(
                    f"invalid val_bpb in {results_path}, row {index + 2}"
                ) from error
            if not math.isfinite(value):
                raise ValueError(
                    f"non-finite val_bpb in {results_path}, row {index + 2}"
                )
            status = record["status"].strip().casefold()
            if status not in ("keep", "discard", "crash"):
                raise ValueError(
                    f"invalid status {status!r} in {results_path}, row {index + 2}"
                )
            rows.append(
                {
                    **record,
                    "run_index": index,
                    "val_bpb": value,
                    "status": status,
                }
            )
    if not rows:
        raise ValueError(f"no results in {results_path}")
    return rows


def best_so_far(rows):
    best = None
    values = []
    for row in rows:
        if row["status"] != "crash":
            best = row["val_bpb"] if best is None else min(best, row["val_bpb"])
        values.append(best)
    return values


def resolve_diff(commit, repo):
    try:
        result = subprocess.run(
            ["git", "show", "--format=", "--unified=0", commit, "--", "train.py"],
            cwd=repo,
            check=True,
            capture_output=True,
            text=True,
        )
    except (OSError, subprocess.CalledProcessError):
        return None
    diff_tokens, _ = parse_train_diff(result.stdout)
    return diff_tokens


def structural_diversity(rows, repo):
    kept_rows = [row for row in rows if row["status"] == "keep"]
    diff_sets = []
    skipped = 0
    for row in kept_rows:
        diff_tokens = resolve_diff(row["commit"], repo)
        if diff_tokens is None:
            skipped += 1
        else:
            diff_sets.append(diff_tokens)

    if len(diff_sets) < 2:
        return None, len(diff_sets), skipped
    distances = [
        jaccard_distance(left, right)
        for left, right in combinations(diff_sets, 2)
    ]
    return sum(distances) / len(distances), len(diff_sets), skipped


def regime_counts(rows):
    counts = {"EXPLOIT": 0, "SNAP": 0, "BREAKOUT": 0}
    for row in rows:
        match = SUMMARY_LINE_RE.match(row.get("description", ""))
        if match:
            counts[match.group(1)] += 1
    return counts


def arm_summary(name, rows, repo):
    successful_rows = [
        row for row in rows if row["status"] != "crash"
    ]
    if successful_rows:
        best_row = min(successful_rows, key=lambda row: row["val_bpb"])
        best_value = best_row["val_bpb"]
        best_index = best_row["run_index"]
        delta = best_value - BASELINE_VAL_BPB
        delta_percent = delta / BASELINE_VAL_BPB * 100
        first_improvement = next(
            (
                row["run_index"]
                for row in successful_rows
                if row["run_index"] > 0
                and row["val_bpb"] < BASELINE_VAL_BPB
            ),
            None,
        )
    else:
        best_value = None
        best_index = None
        delta = None
        delta_percent = None
        first_improvement = None

    counts = {
        status: sum(row["status"] == status for row in rows)
        for status in ("keep", "discard", "crash")
    }
    diversity, resolved_count, skipped_count = structural_diversity(rows, repo)
    if diversity is None:
        diversity_text = (
            f"N/A (<2 resolvable kept diffs; skipped {skipped_count} unresolvable)"
        )
    else:
        diversity_text = (
            f"{diversity:.4f} ({resolved_count} resolvable kept diffs; "
            f"skipped {skipped_count} unresolvable)"
        )

    if name.casefold() == "boredom":
        counts_by_regime = regime_counts(rows)
        regimes_text = (
            f"EXPLOIT {counts_by_regime['EXPLOIT']} / "
            f"SNAP {counts_by_regime['SNAP']} / "
            f"BREAKOUT {counts_by_regime['BREAKOUT']}"
        )
    else:
        regimes_text = "—"

    return {
        "name": name,
        "best": best_value,
        "delta": delta,
        "delta_percent": delta_percent,
        "first_improvement": first_improvement,
        "runs_until_best": best_index,
        "counts": counts,
        "regimes": regimes_text,
        "diversity": diversity_text,
    }


def format_number(value, decimals=6):
    return "N/A" if value is None else f"{value:.{decimals}f}"


def research_summary(log_path, research_log_path, max_run_index=None):
    if research_log_path is None:
        return "N/A", []

    entries = (
        read_boredom_log(log_path)
        if log_path is not None and log_path.is_file()
        else []
    )
    if max_run_index is not None:
        entries = [
            record
            for record in entries
            if record.get("type") != "gate"
            or record.get("n_rows") is None
            or int(record["n_rows"]) <= max_run_index
        ]
    grounded_gates = [
        record
        for record in entries
        if record.get("type") == "gate"
        and record.get("regime") in ("BOREDOM_SNAP", "PARADIGM_BREAKOUT")
    ]
    if grounded_gates:
        grounded_passes = sum(
            record.get("pass") is True and record.get("grounded") is True
            for record in grounded_gates
        )
        grounded_text = f"{grounded_passes} / {len(grounded_gates)}"
    else:
        grounded_text = "N/A"

    research_records = read_boredom_log(research_log_path)
    sources_by_id = {
        record["id"]: record
        for record in research_records
        if record.get("type") == "source" and record.get("id")
    }
    cited_ids = []
    for record in entries:
        if record.get("type") != "gate":
            continue
        for source_id in record.get("sources", []):
            if source_id not in cited_ids:
                cited_ids.append(source_id)
    citations = [
        (source_id, sources_by_id.get(source_id, {})) for source_id in cited_ids
    ]
    return grounded_text, citations


def build_summary(
    arms, repo, max_runs=None, available_rows=None, research_logs=None
):
    research_logs = research_logs or {}
    summaries = [arm_summary(name, rows, repo) for name, rows, _ in arms]
    grounded_by_arm = {}
    citations_by_arm = {}
    for name, _, log_path in arms:
        grounded_by_arm[name], citations_by_arm[name] = research_summary(
            log_path, research_logs.get(name), max_runs
        )
    lines = [
        "# Autoresearch experiment comparison",
        "",
    ]
    truncated_arms = [
        f"{available_rows[name]} total rows available for {name}"
        for name, rows, _ in arms
        if max_runs is not None and available_rows[name] > len(rows)
    ]
    if truncated_arms:
        lines.extend(
            [
                f"Comparison truncated to first {max_runs} runs per arm "
                f"({'; '.join(truncated_arms)}).",
                "",
            ]
        )
    lines.extend(
        [
            f"Baseline val_bpb: {BASELINE_VAL_BPB:.6f}. "
            "Δ is best val_bpb minus baseline (negative is better).",
            "",
            "| Arm | Best val_bpb | Δ vs baseline (absolute, %) | "
            "Runs to first improvement | Runs until best | Keep / discard / crash | "
            "Regime counts | Structural diversity | Grounded |",
            "| --- | ---: | ---: | ---: | ---: | ---: | --- | --- | --- |",
        ]
    )
    for summary in summaries:
        if summary["delta"] is None:
            delta_text = "N/A"
        else:
            delta_text = (
                f"{summary['delta']:+.6f} "
                f"({summary['delta_percent']:+.2f}%)"
            )
        lines.append(
            f"| {summary['name']} | {format_number(summary['best'])} | "
            f"{delta_text} | "
            f"{summary['first_improvement'] if summary['first_improvement'] is not None else 'N/A'} | "
            f"{summary['runs_until_best'] if summary['runs_until_best'] is not None else 'N/A'} | "
            f"{summary['counts']['keep']} / {summary['counts']['discard']} / "
            f"{summary['counts']['crash']} | {summary['regimes']} | "
            f"{summary['diversity']} | {grounded_by_arm[summary['name']]} |"
        )
    lines.extend(
        [
            "",
            "Run index follows TSV row order: the seeded baseline is index 0.",
            "Structural diversity averages pairwise Jaccard distances between kept "
            "commits' `train.py` diff shingles; unresolved commits are skipped.",
            "",
        ]
    )
    if any(research_logs.values()):
        lines.extend(["", "## Cited sources", ""])
        has_citations = False
        for name, _, _ in arms:
            for source_id, source in citations_by_arm[name]:
                has_citations = True
                title = source.get("title") or "(untitled)"
                url = source.get("url") or "(URL unavailable)"
                lines.append(f"- **{name}** `{source_id}` — {title} — {url}")
        if not has_citations:
            lines.append("No cited sources.")
        lines.append("")
    return "\n".join(lines)


def comparison_plot(arms, output_path, run_count):
    colors = plt.get_cmap("tab10").colors
    arm_colors = {
        name: colors[index % len(colors)]
        for index, (name, _, _) in enumerate(arms)
    }
    noncrash_values = [
        row["val_bpb"]
        for _, rows, _ in arms
        for row in rows
        if row["status"] != "crash"
    ]
    clip_top = BASELINE_VAL_BPB + 0.02
    displayed_values = [min(value, clip_top) for value in noncrash_values]
    clipped = any(value > clip_top for value in noncrash_values)
    if displayed_values:
        low = min(min(displayed_values), BASELINE_VAL_BPB)
        high = max(max(displayed_values), BASELINE_VAL_BPB)
    else:
        low, high = BASELINE_VAL_BPB - 0.01, BASELINE_VAL_BPB
    margin = max((high - low) * 0.08, 0.001)
    y_bottom = low - margin
    y_top = clip_top if clipped else min(clip_top, high + margin)

    figure, axis = plt.subplots(figsize=(11, 6.5))
    for name, rows, _ in arms:
        color = arm_colors[name]
        x_values = [row["run_index"] for row in rows]
        running_best = best_so_far(rows)
        best_values = [
            float("nan") if value is None else min(value, clip_top)
            for value in running_best
        ]
        axis.step(
            x_values,
            best_values,
            where="post",
            color=color,
            linewidth=2.8,
            zorder=3,
        )
        for row in rows:
            x_value = row["run_index"]
            status = row["status"]
            if status == "crash":
                axis.scatter(
                    [x_value],
                    [y_top],
                    marker="x",
                    color=color,
                    linewidths=1.8,
                    zorder=5,
                    clip_on=True,
                )
                continue

            is_clipped = row["val_bpb"] > clip_top
            y_value = clip_top if is_clipped else row["val_bpb"]
            marker = r"$\uparrow$" if is_clipped else "o"
            if status == "keep":
                axis.scatter(
                    [x_value],
                    [y_value],
                    marker=marker,
                    color=color,
                    s=65 if is_clipped else 38,
                    zorder=4,
                    clip_on=True,
                )
            else:
                axis.scatter(
                    [x_value],
                    [y_value],
                    marker=marker,
                    facecolors="none",
                    edgecolors=color,
                    linewidths=1.3,
                    s=65 if is_clipped else 38,
                    zorder=4,
                    clip_on=True,
                )

    axis.axhline(
        BASELINE_VAL_BPB,
        color="#555555",
        linestyle="--",
        linewidth=1.2,
        zorder=1,
    )
    axis.set_ylim(y_bottom, y_top)
    axis.set_xlim(
        0,
        max(max(len(rows) - 1, 0) for _, rows, _ in arms) + 0.5,
    )
    axis.set_xlabel("Run index (baseline = 0)")
    axis.set_ylabel("val_bpb (lower is better)")
    axis.set_title(
        f"Boredom Meter vs greedy autoresearch ({run_count} H100 runs each)"
    )
    axis.grid(axis="y", alpha=0.2)

    legend_handles = [
        Line2D([0], [0], color=arm_colors[name], linewidth=2.8, label=f"{name} best-so-far")
        for name, _, _ in arms
    ]
    legend_handles.extend(
        [
            Line2D(
                [0], [0], marker="o", color="#444444", linestyle="none",
                label="keep",
            ),
            Line2D(
                [0], [0], marker="o", markerfacecolor="none",
                markeredgecolor="#444444", color="#444444", linestyle="none",
                label="discard",
            ),
            Line2D(
                [0], [0], marker="x", color="#444444", linestyle="none",
                label="crash",
            ),
            Line2D(
                [0], [0], color="#555555", linestyle="--",
                label=f"baseline {BASELINE_VAL_BPB:.6f}",
            ),
        ]
    )
    if clipped:
        legend_handles.append(
            Line2D(
                [0], [0], marker=r"$\uparrow$", color="#444444",
                linestyle="none", label=f"clipped above {clip_top:.6f}",
            )
        )
    axis.legend(handles=legend_handles, loc="best", ncol=2, fontsize="small")
    figure.tight_layout()
    figure.savefig(output_path, dpi=160)
    plt.close(figure)


def read_boredom_log(path):
    entries = []
    with path.open(encoding="utf-8") as log_file:
        for line_number, line in enumerate(log_file, start=1):
            if not line.strip():
                continue
            try:
                entries.append(json.loads(line))
            except json.JSONDecodeError as error:
                raise ValueError(
                    f"invalid JSON in {path}, line {line_number}"
                ) from error
    return entries


def trace_records(entries, max_run_index=None):
    statuses = {}
    rejected_gates = []
    for record in entries:
        if record.get("type") == "gate":
            if record.get("pass") is False and record.get("n_rows") is not None:
                gate_x = int(record["n_rows"])
                if max_run_index is None or gate_x <= max_run_index:
                    rejected_gates.append(gate_x)
            continue
        if record.get("n_rows") is None or record.get("B") is None:
            continue
        status_x = int(record["n_rows"]) - 1
        if max_run_index is None or status_x <= max_run_index:
            statuses[int(record["n_rows"])] = record
    return [statuses[key] for key in sorted(statuses)], rejected_gates


def trace_plot(arms, output_path, max_run_index=None):
    trace_arms = [
        (name, rows, log_path, read_boredom_log(log_path))
        for name, rows, log_path in arms
        if log_path is not None and log_path.is_file()
    ]
    if not trace_arms:
        return

    figure, (meter_axis, best_axis) = plt.subplots(
        2, 1, figsize=(11, 8), sharex=True, gridspec_kw={"height_ratios": [1, 1]}
    )
    meter_axis.axhspan(0.0, 0.70, color="#4a9c6a", alpha=0.10)
    meter_axis.axhspan(0.70, 0.85, color="#e2a53b", alpha=0.14)
    meter_axis.axhspan(0.85, 1.0, color="#c84a4a", alpha=0.10)
    meter_axis.axhline(0.70, color="#888888", linestyle=":", linewidth=1)
    meter_axis.axhline(0.85, color="#888888", linestyle=":", linewidth=1)
    meter_axis.text(0.99, 0.35, "EXPLOIT", transform=meter_axis.transAxes, ha="right", va="center", alpha=0.7)
    meter_axis.text(0.99, 0.775, "SNAP", transform=meter_axis.transAxes, ha="right", va="center", alpha=0.7)
    meter_axis.text(0.99, 0.925, "BREAKOUT", transform=meter_axis.transAxes, ha="right", va="center", alpha=0.7)

    colors = plt.get_cmap("tab10").colors
    trace_handles = []
    max_x = 0
    for index, (name, rows, _, entries) in enumerate(trace_arms):
        color = colors[index % len(colors)]
        statuses, rejected_gates = trace_records(entries, max_run_index)
        status_x = [int(record["n_rows"]) - 1 for record in statuses]
        status_y = [float(record["B"]) for record in statuses]
        if statuses:
            meter_axis.plot(
                status_x,
                status_y,
                color=color,
                marker="o",
                linewidth=1.8,
                markersize=4,
            )
            trace_handles.append(
                Line2D([0], [0], color=color, marker="o", label=f"{name} Bₜ")
            )
        if rejected_gates:
            meter_axis.scatter(
                rejected_gates,
                [0.98] * len(rejected_gates),
                marker="X",
                color="#222222",
                s=58,
                zorder=5,
                clip_on=True,
            )
            max_x = max(max_x, max(rejected_gates))

        best_values = best_so_far(rows)
        best_axis.step(
            [row["run_index"] for row in rows],
            [
                float("nan") if value is None else value
                for value in best_values
            ],
            where="post",
            color=color,
            linewidth=2.2,
        )
        trace_handles.append(
            Line2D([0], [0], color=color, linewidth=2.2, label=f"{name} best val_bpb")
        )
        max_x = max(max_x, len(rows) - 1)

    if any(
        trace_records(entries, max_run_index)[1]
        for _, _, _, entries in trace_arms
    ):
        trace_handles.append(
            Line2D(
                [0], [0], marker="X", color="#222222", linestyle="none",
                label="gate rejected",
            )
        )
    meter_axis.set_ylim(0.0, 1.0)
    meter_axis.set_ylabel("Bₜ")
    meter_axis.set_title("Boredom Meter trace and best-so-far")
    meter_axis.grid(axis="y", alpha=0.18)
    best_axis.axhline(
        BASELINE_VAL_BPB,
        color="#555555",
        linestyle="--",
        linewidth=1,
        label="baseline",
    )
    best_axis.set_ylabel("Best val_bpb")
    best_axis.set_xlabel("Run index (baseline = 0)")
    best_axis.grid(axis="y", alpha=0.18)
    best_axis.legend(
        handles=trace_handles
        + [
            Line2D(
                [0], [0], color="#555555", linestyle="--",
                label=f"baseline {BASELINE_VAL_BPB:.6f}",
            )
        ],
        loc="best",
        ncol=2,
        fontsize="small",
    )
    meter_axis.set_xlim(0, max(max_x, 1) + 0.5)
    figure.tight_layout()
    figure.savefig(output_path, dpi=160)
    plt.close(figure)


def main(argv=None):
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--arm",
        action="append",
        type=parse_arm,
        required=True,
        metavar="NAME=PATH",
        help="experiment arm directory (repeat for each arm)",
    )
    parser.add_argument("--repo", default=".")
    parser.add_argument("--out", default="experiments/")
    parser.add_argument(
        "--max-runs",
        type=int,
        help="include the baseline plus at most N experiment runs per arm",
    )
    args = parser.parse_args(argv)
    if args.max_runs is not None and args.max_runs < 0:
        parser.error("--max-runs must be non-negative")

    names = [name for name, _ in args.arm]
    if len(set(names)) != len(names):
        parser.error("arm names must be unique")
    repo = str(Path(args.repo).resolve())
    output_dir = Path(args.out)
    try:
        arms = []
        available_rows = {}
        research_logs = {}
        for name, path in args.arm:
            directory = Path(path)
            rows = read_results(directory)
            available_rows[name] = len(rows)
            if args.max_runs is not None:
                rows = rows[: args.max_runs + 1]
            log_path = directory / "boredom_log.jsonl"
            arms.append((name, rows, log_path if log_path.is_file() else None))
            research_log_path = directory / "research_log.jsonl"
            research_logs[name] = (
                research_log_path if research_log_path.is_file() else None
            )

        max_run_index = max(len(rows) - 1 for _, rows, _ in arms)
        run_count = (
            args.max_runs if args.max_runs is not None else max_run_index
        )
        output_dir.mkdir(parents=True, exist_ok=True)
        comparison_plot(arms, output_dir / "comparison.png", run_count)
        trace_plot(arms, output_dir / "boredom_trace.png", args.max_runs)
        (output_dir / "summary.md").write_text(
            build_summary(
                arms, repo, args.max_runs, available_rows, research_logs
            ),
            encoding="utf-8",
        )
    except (OSError, ValueError) as error:
        print(f"analyze.py: {error}", file=sys.stderr)
        return 2
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
