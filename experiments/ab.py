#!/usr/bin/env python3
"""Run matched meter-off/on pairs. Defaults are offline; live runs require --live."""

import argparse
import csv
import hashlib
import itertools
import json
import math
import os
import random
import subprocess
import sys
from collections import Counter
from concurrent.futures import FIRST_COMPLETED, ThreadPoolExecutor, wait
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
TASKS = ("hadamard19", "bixbench_mini", "playworld_mini", "ignobel")
DEFAULT_TASKS = TASKS[:3]
MAX_ROUNDS = 30
FIELDS = (
    "task",
    "seed",
    "arm",
    "run_id",
    "source_commit",
    "llm",
    "model",
    "rounds",
    "workers",
    "rounds_completed",
    "exa",
    "exa_max_calls",
    "memory_backend",
    "memory_scope",
    "eps",
    "profile_sha256",
    "task_inputs_sha256",
    "best_loss",
    "best_observed_loss",
    "loss_by_round",
    "rounds_to_best",
    "auc",
    "keeps",
    "evaluated",
    "rejected",
    "duplicates",
    "candidate_attempts",
    "critic_confirmations",
    "critic_evaluated",
    "distinct_cells",
    "distinct_evaluated_cells",
    "regime_counts",
    "converged",
    "llm_calls",
    "prompt_tokens",
    "completion_tokens",
    "llm_cost_usd",
    "llm_cost_source",
    "exa_calls",
    "exa_cost_usd",
    "exa_cost_source",
    "run_dir",
)


def read_jsonl(path):
    if not path.exists():
        return []
    return [json.loads(line) for line in path.read_text().splitlines() if line.strip()]


def git(repo, *args):
    return subprocess.check_output(["git", "-C", str(repo), *args], text=True).strip()


def finite(value):
    return isinstance(value, (int, float)) and math.isfinite(value)


def costs(records, *, free=False, rates=None):
    """Unknown charges stay blank. Usage on an LLM row already includes retries."""
    if free:
        return 0.0, "disabled_or_fake"
    if not records:
        return "", "unknown_no_log"
    total, sources = 0.0, set()
    for record in records:
        value = record.get("cost_usd", record.get("cost"))
        if finite(value) and value >= 0:
            total += value
            sources.add("logged")
        elif rates is not None and all(
            finite((record.get("usage") or {}).get(key))
            for key in ("prompt_tokens", "completion_tokens")
        ):
            usage = record["usage"]
            total += (
                usage["prompt_tokens"] * rates[0] + usage["completion_tokens"] * rates[1]
            ) / 1_000_000
            sources.add("token_rate_estimate")
        else:
            return "", "unknown_incomplete_log"
    return total, "+".join(sorted(sources))


def summarize(run_dir, settings):
    run_dir = Path(run_dir)
    run = json.loads((run_dir / "run.json").read_text())
    if run.get("status") != "finished":
        raise ValueError(f"unfinished run: {run_dir}")
    if "source_commit" in settings and run.get("swarm_commit") != settings["source_commit"]:
        raise ValueError(f"source revision mismatch: {run_dir}")
    for key in (
        "task",
        "seed",
        "arm",
        "rounds",
        "workers",
        "llm",
        "model",
        "exa",
        "memory_backend",
    ):
        if run.get(key) != settings[key]:
            raise ValueError(f"run metadata mismatch for {key}: {run_dir}")
    ledger = read_jsonl(run_dir / "ledger.jsonl")
    assignments = read_jsonl(run_dir / "assignments.jsonl")
    rounds = settings["rounds"]
    completed = len(assignments)
    stopped_converged = run.get("converged") and (run_dir / "converged.json").exists()
    if (
        completed > rounds
        or (completed < rounds and not stopped_converged)
        or [row["round"] for row in assignments] != list(range(1, completed + 1))
    ):
        raise ValueError(f"missing or duplicate rounds: {run_dir}")
    baseline = [e for e in ledger if e.get("kind") == "baseline" and finite(e.get("score"))]
    if len(baseline) != 1:
        raise ValueError(f"expected one scored baseline: {run_dir}")
    candidates = [e for e in ledger if e.get("kind") == "candidate"]
    if Counter(e.get("round") for e in candidates) != dict.fromkeys(
        range(1, completed + 1), settings["workers"]
    ):
        raise ValueError(f"candidate budget mismatch: {run_dir}")
    if any(
        e.get("status") not in ("keep", "discard", "crash", "reject", "duplicate")
        for e in candidates
    ):
        raise ValueError(f"unknown candidate status: {run_dir}")
    evaluated = [e for e in candidates if e.get("status") in ("keep", "discard", "crash")]
    attempted = [e for e in candidates if e.get("status") != "reject"]
    best, curve = float(baseline[0]["score"]), []
    for round_num in range(rounds + 1):
        for event in candidates:
            if event.get("round") != round_num or event.get("status") != "keep":
                continue
            score = event.get("score")
            if not finite(score):
                raise ValueError("kept candidate has no finite score")
            replicate = event.get("replicate_score")
            value = (score + replicate) / 2 if finite(replicate) else score
            best = min(best, value)
        curve.append(best)
    if completed < rounds:
        converged = json.loads((run_dir / "converged.json").read_text())
        if converged.get("round") != completed + 1 or not math.isclose(
            converged["best_loss"], best, abs_tol=1e-12
        ):
            raise ValueError(f"invalid convergence record: {run_dir}")
    llm_rows = read_jsonl(run_dir / "llm_log.jsonl")
    exa_rows = [r for r in read_jsonl(run_dir / "research_log.jsonl") if r.get("type") == "query"]
    llm_cost, llm_source = costs(
        llm_rows, free=settings["llm"] == "fake", rates=settings.get("rates")
    )
    exa_cost, exa_source = costs(exa_rows, free=settings["exa"] == "off")

    def cells(events):
        return {
            tuple(e["descriptor"].get(k) for k in ("mechanism", "method"))
            for e in events
            if isinstance(e.get("descriptor"), dict)
        }

    critics = [e for e in ledger if e.get("kind") == "critic"]
    skipped_critics = {
        (e.get("round"), e.get("commit"))
        for e in candidates
        if e.get("critic_rerun") == "skipped (deterministic)"
    }
    profile_bytes = (run_dir / "boredom_profile.json").read_bytes()
    statuses = read_jsonl(run_dir / "boredom_log.jsonl")
    row = {key: settings[key] for key in FIELDS if key in settings}
    row.update(
        {
            "run_id": run["run_id"],
            "memory_scope": str(run_dir / "memory.jsonl"),
            "eps": json.loads(profile_bytes)["eps"],
            "rounds_completed": completed,
            "profile_sha256": hashlib.sha256(profile_bytes).hexdigest(),
            "best_loss": best,
            "best_observed_loss": min(
                [curve[0]] + [e["score"] for e in evaluated if finite(e.get("score"))]
            ),
            "loss_by_round": json.dumps(curve),
            "rounds_to_best": curve.index(best),
            "auc": sum((a + b) / 2 for a, b in itertools.pairwise(curve)),
            "keeps": sum(e.get("status") == "keep" for e in candidates),
            "evaluated": len(evaluated),
            "rejected": sum(e.get("status") == "reject" for e in candidates),
            "duplicates": sum(e.get("status") == "duplicate" for e in candidates),
            "candidate_attempts": len(candidates),
            "critic_confirmations": len(critics),
            "critic_evaluated": sum(
                (e.get("round"), e.get("commit")) not in skipped_critics for e in critics
            ),
            "distinct_cells": len(cells(attempted)),
            "distinct_evaluated_cells": len(cells(evaluated)),
            "regime_counts": json.dumps(
                dict(Counter(a["regime"] for a in assignments)), sort_keys=True
            ),
            "converged": bool(
                stopped_converged
                or any(s.get("regime") == "CONVERGED" for s in statuses + assignments)
            ),
            "llm_calls": len(llm_rows),
            "prompt_tokens": sum((r.get("usage") or {}).get("prompt_tokens", 0) for r in llm_rows),
            "completion_tokens": sum(
                (r.get("usage") or {}).get("completion_tokens", 0) for r in llm_rows
            ),
            "llm_cost_usd": llm_cost,
            "llm_cost_source": llm_source,
            "exa_calls": sum(not r.get("disabled") for r in exa_rows),
            "exa_cost_usd": exa_cost,
            "exa_cost_source": exa_source,
            "run_dir": str(run_dir),
        }
    )
    return row


def task_inputs_digest(clone, task):
    directory = clone / "testcases" / task
    config = json.loads((directory / "task.json").read_text())
    names = list(config.get("context_files", []))
    if (directory / ".cache/answers.json").exists():
        names.append(".cache/answers.json")
    digest = hashlib.sha256()
    for name in sorted(names):
        digest.update(name.encode() + b"\0")
        digest.update(hashlib.sha256((directory / name).read_bytes()).digest())
    return digest.hexdigest()


def write_csv(path, rows):
    # Replace the complete file so an interruption never leaves a partial row.
    temporary = path.with_suffix(".csv.tmp")
    with temporary.open("w", newline="") as stream:
        writer = csv.DictWriter(stream, fieldnames=FIELDS)
        writer.writeheader()
        writer.writerows(rows)
    temporary.replace(path)


def write_manifest(path, manifest):
    temporary = path.with_suffix(".json.tmp")
    temporary.write_text(json.dumps(manifest, indent=2) + "\n")
    temporary.replace(path)


def run_arm(run, repo, commit, settings, env):
    """The worker owns only this arm's clone, files, and subprocess."""
    location = Path(run["location"])
    location.mkdir(parents=True)
    clone, run_dir = location / "repo", location / "run"
    subprocess.run(
        ["git", "clone", "--quiet", "--no-hardlinks", "--no-checkout", str(repo), str(clone)],
        check=True,
    )
    git(clone, "checkout", "--quiet", "--detach", commit)
    with (
        (location / "stdout.log").open("w") as stdout,
        (location / "stderr.log").open("w") as stderr,
    ):
        result = subprocess.run(
            run["command"],
            cwd=clone,
            env={**env, "PYTHONHASHSEED": str(run["seed"])},
            stdout=stdout,
            stderr=stderr,
        )
    if result.returncode:
        raise RuntimeError(f"arm failed (exit {result.returncode}); inspect {location}")
    return summarize(
        run_dir,
        {
            **settings,
            "task": run["task"],
            "seed": run["seed"],
            "arm": run["arm"],
            "task_inputs_sha256": task_inputs_digest(clone, run["task"]),
        },
    )


def run_experiment(args):
    if args.llm != "fake" and not args.live:
        raise ValueError("live LLM calls require --live after approval")
    if args.llm == "fake" and args.exa != "off":
        raise ValueError("fake validation requires --exa off")
    if len(set(args.seeds)) != len(args.seeds) or any(s < 0 or s >= 2**31 for s in args.seeds):
        raise ValueError("seeds must be distinct integers in [0, 2**31)")
    if len(set(args.tasks)) != len(args.tasks):
        raise ValueError("tasks must be distinct")
    if not 1 <= args.rounds <= MAX_ROUNDS:
        raise ValueError(f"rounds must be between 1 and {MAX_ROUNDS}")
    if args.exa_max_calls < 1:
        raise ValueError("exa-max-calls must be positive")
    if args.jobs < 1:
        raise ValueError("jobs must be positive")
    rates = (args.llm_input_usd_per_million, args.llm_output_usd_per_million)
    if (rates[0] is None) != (rates[1] is None) or any(
        v is not None and (not math.isfinite(v) or v < 0) for v in rates
    ):
        raise ValueError("provide both nonnegative finite LLM token rates, or neither")
    repo = Path(args.repo).resolve()
    if git(repo, "status", "--porcelain", "--untracked-files=no"):
        raise ValueError("commit tracked changes before running for reproducible clones")
    commit = git(repo, "rev-parse", "HEAD")
    model = args.model or ("fake" if args.llm == "fake" else os.environ.get("TINKER_MODEL"))
    if not model:
        raise ValueError("provide --model or TINKER_MODEL")
    out = Path(args.out).resolve()
    out.mkdir(parents=True, exist_ok=False)
    settings = {
        "source_commit": commit,
        "llm": args.llm,
        "model": model,
        "rounds": args.rounds,
        "workers": 4,
        "exa": args.exa,
        "exa_max_calls": args.exa_max_calls,
        "memory_backend": "local",
        "rates": rates if rates[0] is not None else None,
    }
    manifest = {
        **settings,
        "tasks": args.tasks,
        "seeds": args.seeds,
        "jobs": args.jobs,
        "memory_note": "Local fallback: separate clone, mirror and run ID for every task/seed/arm; past.dev unused.",
        "order_seed": args.order_seed,
        "status": "running",
        "runs": [],
    }
    env = os.environ.copy()
    # Prevent inherited ablation, replay, cache, or memory settings from changing a pair.
    for key in (
        "BOREDOM",
        "GROUNDING",
        "PRIOR_ART",
        "EXA_REPLAY",
        "AUTORESEARCH_RUN_ID",
        "MEMORY_MIRROR",
        "MEMORY_LOG",
        "AUTORESEARCH_ARM",
    ):
        env.pop(key, None)
    env.update(
        {"EXA": args.exa, "MEMORY_BACKEND": "local", "EXA_MAX_CALLS": str(args.exa_max_calls)}
    )
    order = random.Random(args.order_seed)
    for task in args.tasks:
        for seed in args.seeds:
            arms = ["A", "B"]
            order.shuffle(arms)
            for arm in arms:
                location = out / task / f"seed-{seed}" / arm
                clone, run_dir = location / "repo", location / "run"
                command = [
                    sys.executable,
                    str(clone / "swarm.py"),
                    "--repo",
                    str(clone),
                    "--task",
                    task,
                    "--arm",
                    arm,
                    "--rounds",
                    str(args.rounds),
                    "--seed",
                    str(seed),
                    "--llm",
                    args.llm,
                    "--model",
                    model,
                    "--exa",
                    args.exa,
                    "--memory-backend",
                    "local",
                    "--out",
                    str(run_dir),
                    "--no-push",
                    "--no-viewer",
                ]
                manifest["runs"].append(
                    {
                        "task": task,
                        "seed": seed,
                        "arm": arm,
                        "command": command,
                        "location": str(location),
                        "status": "pending",
                    }
                )
    manifest_path = out / "manifest.json"
    write_manifest(manifest_path, manifest)
    # Only the coordinator writes shared artifacts. Submit at most jobs arms,
    # stop submitting on failure, and collect successes from arms already running.
    rows, futures, errors, cursor = {}, {}, [], 0
    with ThreadPoolExecutor(max_workers=args.jobs) as executor:
        while futures or (cursor < len(manifest["runs"]) and not errors):
            while not errors and len(futures) < args.jobs and cursor < len(manifest["runs"]):
                run = manifest["runs"][cursor]
                run["status"] = "running"
                print(f"{run['task']} seed={run['seed']} arm={run['arm']}", flush=True)
                futures[executor.submit(run_arm, run, repo, commit, settings, env)] = cursor
                cursor += 1
            write_manifest(manifest_path, manifest)
            done, _ = wait(futures, return_when=FIRST_COMPLETED)
            for future in sorted(done, key=futures.__getitem__):
                index = futures.pop(future)
                run = manifest["runs"][index]
                try:
                    rows[index] = future.result()
                except Exception as error:
                    run.update(status="failed", error=str(error))
                    errors.append(f"{run['task']} seed={run['seed']} arm={run['arm']}: {error}")
                else:
                    run["status"] = "finished"
                    write_csv(out / "results.csv", [rows[i] for i in sorted(rows)])
            write_manifest(manifest_path, manifest)
    for run in manifest["runs"]:
        if run["status"] == "pending":
            run["status"] = "not_started"
    manifest["status"] = "failed" if errors else "finished"
    write_manifest(manifest_path, manifest)
    if errors:
        raise RuntimeError(
            "; ".join(errors) + "; stopped scheduling; already running arms were collected"
        )
    return out / "results.csv"


def build_parser():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--repo", default=str(ROOT))
    parser.add_argument("--out", required=True, help="new output directory; never reuse a run")
    parser.add_argument("--tasks", nargs="+", choices=TASKS, default=list(DEFAULT_TASKS))
    parser.add_argument("--seeds", nargs="+", type=int, required=True)
    parser.add_argument("--rounds", type=int, default=5)
    parser.add_argument(
        "--jobs", type=int, default=1, help="maximum independent arms running concurrently"
    )
    parser.add_argument("--llm", choices=("fake", "tinker"), default="fake")
    parser.add_argument("--model")
    parser.add_argument("--exa", choices=("off", "on"), default="off")
    parser.add_argument("--exa-max-calls", type=int, default=200)
    parser.add_argument(
        "--memory-backend",
        choices=("local",),
        default="local",
        help="safe fallback: past.dev isolation cannot be guaranteed",
    )
    parser.add_argument("--order-seed", type=int, default=2026)
    parser.add_argument("--llm-input-usd-per-million", type=float)
    parser.add_argument("--llm-output-usd-per-million", type=float)
    parser.add_argument("--live", action="store_true")
    return parser


def main(argv=None):
    try:
        print(run_experiment(build_parser().parse_args(argv)))
    except (ValueError, OSError, RuntimeError, subprocess.CalledProcessError) as error:
        print(f"ab.py: {error}", file=sys.stderr)
        return 2
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
