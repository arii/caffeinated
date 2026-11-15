#!/usr/bin/env python3
"""Run a four-agent, meter-guided CPU-task research swarm."""

import argparse
import csv
import fcntl
import gzip
import io
import json
import math
import os
import re
import shutil
import signal
import subprocess
import sys
import tarfile
import uuid
from contextlib import ExitStack, contextmanager, redirect_stdout, suppress
from datetime import datetime, timezone
from pathlib import Path
from types import SimpleNamespace

import boredom
import literature
import live_publish
import llm
import memory
import research
from boredom import descriptor_meter as meter
from testcases import sandbox

ROOT = Path(__file__).resolve().parent
AGENTS = tuple(f"worker-{number}" for number in range(1, 5))
# Arm S is the single-agent baseline: one worker, no meter, no scouts, no critic.
METER_OFF_ARMS = ("A", "S")
BOREDOM_COMPONENTS = (
    "B",
    "regime",
    "novelty",
    "stagnation",
    "overload",
    "fail_rate",
    "trivial_rate",
    "diversity",
    "frontier_stall",
    "frustration",
)
TESTCASES = ROOT / "testcases"
TARGET_FILE = None
TASK = None
RESULT_COLUMNS = (
    "commit",
    "loss",
    "status",
    "description",
)


class EditError(ValueError):
    pass


def timestamp():
    return datetime.now(timezone.utc).isoformat().replace("+00:00", "Z")


def git(path, *args, check=True):
    result = subprocess.run(
        ["git", "-C", str(path), *map(str, args)],
        capture_output=True,
        text=True,
        check=False,
    )
    if check and result.returncode:
        detail = result.stderr.strip() or result.stdout.strip()
        raise RuntimeError(f"git {' '.join(map(str, args))} failed: {detail}")
    return result


def git_text(path, *args):
    return git(path, *args).stdout.strip()


def append_jsonl(path, record):
    path = Path(path)
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("a", encoding="utf-8") as stream:
        stream.write(json.dumps(record, sort_keys=True, ensure_ascii=False) + "\n")
    if path.name != "viewer_publish_log.jsonl":
        live_publish.changed(path)


def read_jsonl(path):
    path = Path(path)
    if not path.exists():
        return []
    records = []
    with path.open(encoding="utf-8") as stream:
        for line_number, line in enumerate(stream, 1):
            if not line.strip():
                continue
            try:
                records.append(json.loads(line))
            except json.JSONDecodeError as error:
                raise ValueError(f"invalid JSON in {path} line {line_number}") from error
    return records


def safe_slug(value):
    slug = re.sub(r"[^a-z0-9-]+", "-", str(value).casefold()).strip("-")
    return slug or "unknown"


def unique_tag(repo, base):
    existing = set(git_text(repo, "tag", "--list", base + "*").splitlines())
    if base not in existing:
        return base
    index = 2
    while f"{base}-{index}" in existing:
        index += 1
    return f"{base}-{index}"


SANDBOX_BUILD = f"docker build -t {sandbox.SANDBOX_IMAGE} -f testcases/Dockerfile testcases"


def task_research_off(task_name):
    if not task_name:
        return False
    config_path = TESTCASES / task_name / "task.json"
    try:
        config = json.loads(config_path.read_text(encoding="utf-8"))
    except (OSError, ValueError):
        return False
    return config.get("research") == "off"


def resolve_research_source(args):
    """exa, keyless (OpenAlex/arXiv/PubMed via literature.py) or off. Arm C never researches.

    With Exa requested but EXA_API_KEY unset, only an explicit --literature keyless|auto falls
    back to keyless; by default the run stays on Exa and preflight reports the missing key.
    """
    if args.arm == "C":
        return "off"
    if task_research_off(getattr(args, "task", None)) or (TASK or {}).get("research") == "off":
        return "off"
    mode = getattr(args, "literature", None)
    keyless = mode == "keyless" or (mode in (None, "auto") and args.llm != "fake")
    exa_requested = os.environ.get("EXA", "").casefold() != "off" and args.exa != "off"
    if exa_requested and (
        args.replay or os.environ.get("EXA_API_KEY") or not keyless or mode is None
    ):
        return "exa"
    return "keyless" if keyless else "off"


def preflight(args, memory_backend, exa_enabled):
    """Fail before any branch or worktree exists when the run cannot start."""
    problems = []
    if not args.replay:
        if args.llm == "tinker":
            if not (args.model or os.environ.get("TINKER_MODEL")):
                problems.append("set --model or TINKER_MODEL (in the environment or .env)")
            if not os.environ.get("TINKER_API_KEY"):
                problems.append("TINKER_API_KEY is required for --llm tinker (environment or .env)")
        elif args.llm == "openai":
            if not (args.model or os.environ.get("OPENAI_MODEL")):
                problems.append("set --model or OPENAI_MODEL for --llm openai")
            if not os.environ.get("OPENAI_API_KEY"):
                problems.append("OPENAI_API_KEY is required for --llm openai")
        if memory_backend == "pastdev" and not memory.api_key_for_arm(args.arm):
            problems.append(
                f"PAST_API_KEY is required for the pastdev memory backend (arm {args.arm} "
                "default); set it in the environment or .env, or pass --memory-backend local"
            )
        if exa_enabled and not os.environ.get("EXA_API_KEY"):
            problems.append(
                f"EXA_API_KEY is required for Exa search (arm {args.arm}); set it in the "
                "environment or .env, or pass --literature keyless (or --exa off)"
            )
    if not sandbox.docker_available():
        problems.append("Docker is not running; candidate code is scored in a Docker sandbox")
    elif (
        subprocess.run(
            ["docker", "image", "inspect", sandbox.SANDBOX_IMAGE],
            capture_output=True,
            check=False,
        ).returncode
        != 0
    ):
        problems.append(f"sandbox image {sandbox.SANDBOX_IMAGE} is missing; fix: {SANDBOX_BUILD}")
    problems = [problem for problem in problems if problem]
    if problems:
        raise RuntimeError("cannot start:\n  - " + "\n  - ".join(problems))


@contextmanager
def arm_lock(worktree_root):
    """Keep two runs from sharing (and cleaning) the same arm's worktrees."""
    worktree_root.mkdir(parents=True, exist_ok=True)
    path = worktree_root / ".lock"
    descriptor = os.open(path, os.O_CREAT | os.O_RDWR)
    try:
        fcntl.flock(descriptor, fcntl.LOCK_EX | fcntl.LOCK_NB)
    except BlockingIOError:
        owner = os.read(descriptor, 32).decode("utf-8", "replace").strip() or "unknown"
        os.close(descriptor)
        raise RuntimeError(
            f"another swarm.py run (pid {owner}) is using {worktree_root}; "
            "wait for it to finish or run from a separate clone"
        ) from None
    try:
        os.ftruncate(descriptor, 0)
        os.write(descriptor, f"{os.getpid()}\n".encode())
        yield
    finally:
        os.close(descriptor)


def is_worktree_root(path):
    result = git(path, "rev-parse", "--show-toplevel", check=False)
    return result.returncode == 0 and Path(result.stdout.strip()).resolve() == path.resolve()


def reset_owned_worktree(repo, path, commit, preserve=()):
    """Check out commit detached in a swarm-owned worktree, discarding leftovers of old runs.

    preserve holds gitignore-style patterns for untracked paths that must survive the clean,
    such as archived recordings and the output directory of a run being resumed.
    """
    if path.exists() and not is_worktree_root(path):
        shutil.rmtree(path)
    if not path.exists():
        git(repo, "worktree", "add", "--force", "--detach", str(path), commit)
        return
    status = git_text(path, "status", "--porcelain", "--untracked-files=all", "--ignored")
    if status:
        print(f"swarm.py: discarding leftovers of an earlier run in {path}", file=sys.stderr)
        git(path, "reset", "--hard", "--quiet")
        excludes = [arg for pattern in preserve for arg in ("-e", pattern)]
        git(path, "clean", "-ffdx", "--quiet", *excludes)
    git(path, "switch", "--quiet", "--detach", commit)


def arm_branch(repo, arm, start_commit):
    """Return a fresh arm branch, reusing one an earlier run left without commits."""
    base = f"swarm-{arm}-{datetime.now().strftime('%Y%m%d')}"
    existing = set(git_text(repo, "branch", "--list", "--format=%(refname:short)").splitlines())
    branch, index = base, 1
    while branch in existing:
        if git_text(repo, "rev-parse", branch) == start_commit:
            return branch
        index += 1
        branch = f"{base}-{index}"
    git(repo, "branch", branch, start_commit)
    return branch


ARCHIVED_OUT_PATTERN = "/experiments/swarm_*.prev-*/"


def mark_abandoned_run(out_dir):
    """Give a recording whose writer died a terminal "stopped" status."""
    out_dir = Path(out_dir)
    try:
        run_artifact = json.loads((out_dir / "run.json").read_text(encoding="utf-8"))
    except (OSError, ValueError):
        return
    if run_artifact.get("status") != "running":
        return
    run_artifact["status"] = "stopped"
    _write_run_artifact(out_dir, run_artifact)
    if run_artifact.get("viewer") is False or not run_artifact.get("viewer_run_id"):
        return
    dest = Path(run_artifact.get("viewer_dest") or out_dir / "viewer")
    if dest.is_dir():
        publish_viewer_state(out_dir, dest, final=True, status="stopped")


def archive_previous_out(conductor, arm, keep=None):
    """Move an earlier run's uncommitted output aside inside experiments/ so the Lab still
    discovers its recording at .swarm_worktrees/*/conductor/experiments/*/viewer."""
    current = conductor / "experiments" / f"swarm_{arm}"
    if not current.is_dir() or (keep is not None and current.resolve() == Path(keep).resolve()):
        return None
    relative = f"experiments/swarm_{arm}"
    if not git_text(conductor, "status", "--porcelain", "--untracked-files=all", "--", relative):
        return None
    stamp = datetime.now().strftime("%Y%m%d-%H%M%S")
    archive = current.with_name(f"swarm_{arm}.prev-{stamp}")
    index = 1
    while archive.exists():
        index += 1
        archive = current.with_name(f"swarm_{arm}.prev-{stamp}-{index}")
    shutil.copytree(current, archive, symlinks=True)
    shutil.rmtree(current)
    print(f"swarm.py: kept the earlier run's output in {archive}", file=sys.stderr)
    mark_abandoned_run(archive)
    return archive


def _preserve_patterns(conductor, out_dir):
    patterns = [ARCHIVED_OUT_PATTERN]
    if out_dir is not None:
        with suppress(ValueError):
            patterns.append(f"/{Path(out_dir).resolve().relative_to(conductor.resolve())}/")
    return tuple(patterns)


def create_arm_worktrees(repo, arm, start_commit):
    worktree_root = repo / ".swarm_worktrees" / arm
    conductor = worktree_root / "conductor"
    agents_root = worktree_root
    git(repo, "worktree", "prune")
    if conductor.exists() and is_worktree_root(conductor):
        archive_previous_out(conductor, arm)
    reset_owned_worktree(repo, conductor, start_commit, preserve=(ARCHIVED_OUT_PATTERN,))
    branch = arm_branch(repo, arm, start_commit)
    git(conductor, "switch", "--quiet", branch)
    return branch, conductor, agents_root


def resume_arm_worktrees(repo, arm, branch, commit, out_dir):
    """Put the conductor back on branch at commit, the last completed round."""
    worktree_root = repo / ".swarm_worktrees" / arm
    conductor = worktree_root / "conductor"
    git(repo, "worktree", "prune")
    if git(
        repo, "rev-parse", "--verify", "--quiet", f"refs/heads/{branch}", check=False
    ).returncode:
        raise ValueError(f"cannot resume: arm branch {branch} no longer exists in {repo}")
    if git(repo, "merge-base", "--is-ancestor", commit, branch, check=False).returncode:
        raise ValueError(f"cannot resume: checkpoint commit {commit[:12]} is not on {branch}")
    in_conductor = Path(out_dir).resolve().is_relative_to(conductor.resolve())
    if conductor.exists() and not is_worktree_root(conductor) and in_conductor:
        raise ValueError(f"cannot resume: {conductor} is no longer a git worktree")
    if conductor.exists() and is_worktree_root(conductor):
        archive_previous_out(conductor, arm, keep=out_dir)
    reset_owned_worktree(repo, conductor, commit, preserve=_preserve_patterns(conductor, out_dir))
    git(conductor, "switch", "--quiet", "-C", branch, commit)
    return branch, conductor, worktree_root


def prepare_agent_worktree(repo, agents_root, arm, agent, base_commit, round_num, attempt):
    """Reset the agent's worktree to base_commit, detached: attempts get no branch of their
    own; their commits stay reachable through the run's tags and the arm branch."""
    path = agents_root / agent
    path.parent.mkdir(parents=True, exist_ok=True)
    reset_owned_worktree(repo, path, base_commit)
    return path, None


def allocate_roles(profile, events, agents=AGENTS, arm="B", exa_enabled=True):
    swarm_status = meter.status(profile, events)
    regime = "EXPLOIT" if arm in METER_OFF_ARMS else swarm_status["regime"]
    agent_status = {agent: meter.status(profile, events, agent=agent) for agent in agents}
    per_agent = {agent: agent_status[agent]["B"] for agent in agents}
    bored = sorted(
        (agent for agent in agents if per_agent[agent] >= 0.70),
        key=lambda agent: (-per_agent[agent], agent),
    )
    roles = {}
    scouts = []

    def divergent_worker():
        return bored[0] if bored else min(agents, key=lambda agent: (per_agent[agent], agent))

    if arm == "S":
        roles = dict.fromkeys(agents, "exploit")
        rationale = "Arm S runs one worker with no meter, scouts or critic."
    elif arm == "A":
        roles = dict.fromkeys(agents, "exploit")
        scout = agents[0]
        roles[scout] = "divergent"
        scouts = [scout] if exa_enabled else []
        rationale = f"Arm A fixes {len(agents) - 1} exploit slots and one divergent slot; it scouts when Exa is enabled."
    elif regime == "BOREDOM_SNAP":
        if exa_enabled:
            scout_count = min(2, 1 + len(bored))
            scouts = bored[:scout_count]
            if len(scouts) < scout_count:
                remaining = sorted(
                    (agent for agent in agents if agent not in scouts),
                    key=lambda agent: (per_agent[agent], agent),
                )
                scouts.extend(remaining[: scout_count - len(scouts)])
        roles = dict.fromkeys(agents, "exploit")
        for agent in scouts:
            roles[agent] = "divergent"
        non_scouts = [agent for agent in agents if agent not in scouts]
        remaining_divergent = max(0, len(agents) - 1 - len(scouts))
        for agent in sorted(non_scouts, key=lambda agent: (per_agent[agent], agent))[
            :remaining_divergent
        ]:
            roles[agent] = "divergent"
        rationale = (
            f"SNAP assigns one exploit and {len(agents) - 1} divergent slots; "
            f"{len(scouts)} divergent workers scout."
        )
    elif regime == "PARADIGM_BREAKOUT":
        if exa_enabled:
            scouts = bored[:2]
            if len(scouts) < 2:
                remaining = sorted(
                    (agent for agent in agents if agent not in scouts),
                    key=lambda agent: (per_agent[agent], agent),
                )
                scouts.extend(remaining[: 2 - len(scouts)])
        roles = dict.fromkeys(agents, "divergent")
        rationale = f"BREAKOUT assigns {len(agents)} divergent slots and {len(scouts)} scouts."
    else:
        roles = dict.fromkeys(agents, "exploit")
        divergent_agent = divergent_worker()
        if exa_enabled:
            scouts = [divergent_agent]
        roles[divergent_agent] = "divergent"
        rationale = f"EXPLOIT assigns {len(agents) - 1} exploit slots and one divergent slot."

    return {
        "swarm_B": swarm_status["B"],
        "regime": regime,
        "per_agent_B": per_agent,
        "per_agent_boredom": {
            agent: {
                key: agent_status[agent][key]
                for key in BOREDOM_COMPONENTS
                if key in agent_status[agent]
            }
            for agent in agents
        },
        "roles": roles,
        "scouts": scouts,
        "rationale": rationale,
        "frustration": swarm_status["frustration"],
        "stuck_cells": swarm_status["stuck_cells"],
        "ledger_sha256": swarm_status["ledger_sha256"],
        "profile_sha256": swarm_status["profile_sha256"],
    }


def result_rows_from_ledger(ledger_path):
    return meter.read_ledger(ledger_path)


def write_results(ledger_path, results_path):
    events = result_rows_from_ledger(ledger_path)
    results_path = Path(results_path)
    results_path.parent.mkdir(parents=True, exist_ok=True)
    with results_path.open("w", newline="", encoding="utf-8") as stream:
        writer = csv.writer(stream, delimiter="\t")
        writer.writerow(RESULT_COLUMNS)
        for event in events:
            score = event.get("score")
            writer.writerow(
                [
                    event.get("commit") or "",
                    "" if score is None else f"{float(score):.6f}",
                    event.get("status", ""),
                    event.get("description", ""),
                ]
            )
    return events


def append_status(out_dir, profile, events, arm):
    status = meter.status(profile, events)
    disabled = arm in METER_OFF_ARMS
    record = {
        "type": "status",
        "ts": timestamp(),
        "n_rows": len(events),
        "B": status["B"],
        "regime": "EXPLOIT" if disabled else status["regime"],
        "best_loss": status["best"],
        "best_seq": status["best_seq"],
        "frontier_stall": status["frontier_stall"],
        "frustration": status["frustration"],
        "stuck_cells": status["stuck_cells"],
        "disabled": disabled,
        "ledger_sha256": status["ledger_sha256"],
        "profile_sha256": status["profile_sha256"],
        "profile_version": profile.get("version"),
        "descriptor": events[-1].get("descriptor") if events else None,
        "directive": profile.get("directives", {}).get(
            "EXPLOIT" if disabled else status["regime"], ""
        ),
    }
    append_jsonl(Path(out_dir) / "boredom_log.jsonl", record)
    return status, record


def suggest_cells(profile, events):
    return meter.suggest(profile, events, n=3)


def format_cells(cells):
    if not cells:
        return "none"
    return ", ".join(f"{item['cell']} (visits={item['visits']})" for item in cells)


def hard_rules(profile, events, agent, role, status, deterministic):
    if "attempt_statuses" not in profile or "levels" not in profile:
        return (
            "Do not resubmit code identical to an already-scored version; the edit must change "
            "the editable file's behavior."
            if deterministic
            else "none"
        )
    events = list(events or [])
    regime = status.get("regime", "EXPLOIT") if isinstance(status, dict) else "EXPLOIT"
    if os.environ.get("BOREDOM", "").casefold() == "off":
        regime = "EXPLOIT"
    gate = profile.get("gate", {})
    attempts = list(meter.attempt_events(profile, events))
    rules = []

    if (
        regime in ("BOREDOM_SNAP", "PARADIGM_BREAKOUT", "CONVERGED")
        and gate.get("require_sources")
        and os.environ.get("GROUNDING", "").casefold() != "off"
    ):
        rules.append(
            "Cite at least one source from search results, dataset IDs (D…), or a lead's sources."
        )

    if regime == "CONVERGED":
        status_row = meter.status(profile, events, agent)
        best_event = next(
            (event for event in attempts if event.get("seq") == status_row.get("best_seq")),
            None,
        )
        if best_event:
            best = "/".join(
                str(best_event["descriptor"].get(level, "")) for level in profile["levels"]
            )
            rules.append(f"Only confirmation runs matching the best ({best}) are allowed.")
        else:
            rules.append("Only confirmation runs of the best are allowed.")
    elif regime != "EXPLOIT":
        if role != "exploit" and attempts:
            rules.append(
                f"Do not make a near-duplicate of the last {profile['k']} attempts "
                f"(minimum distance {gate['snap_min_distance']})."
            )
        failed = [
            event["descriptor"]
            for event in attempts
            if event.get("status") in profile["fail_statuses"] or event.get("status") == "discard"
        ]
        if failed:
            descriptions = []
            for descriptor in failed:
                label = "/".join(str(descriptor.get(level, "")) for level in profile["levels"])
                if label not in descriptions:
                    descriptions.append(label)
            rules.append(
                f"Do not get too close to failed/discarded attempts "
                f"(distance < {gate['failed_min_distance']}): " + ", ".join(descriptions[-8:]) + "."
            )

    if regime == "PARADIGM_BREAKOUT":
        head = profile["levels"][0]
        recent_values = list(
            dict.fromkeys(event["descriptor"].get(head) for event in attempts[-profile["k"] :])
        )
        listed = ", ".join(str(value) for value in recent_values) or "none"
        rules.append(
            f"The head level '{head}' cannot be used in the last {profile['k']} attempts: {listed}."
        )

    stuck = meter.stuck_cells(profile, events)
    if stuck:
        rules.append("Avoid stuck cells: " + ", ".join(sorted(stuck)) + ".")
    if deterministic:
        rules.append(
            "Do not resubmit code identical to an already-scored version; the edit must change "
            "the editable file's behavior."
        )
    return "\n".join(rules) if rules else "none"


def rejection_feedback(out_dir, agent):
    if not out_dir:
        return "none"
    path = Path(out_dir) / "boredom_log.jsonl"
    records = [
        item
        for item in read_jsonl(path)
        if item.get("type") == "worker_rejection" and item.get("agent") == agent
    ]
    ledger = read_jsonl(Path(out_dir) / "ledger.jsonl")
    by_commit = {item.get("commit"): item for item in ledger if item.get("commit")}
    for gate_record in read_jsonl(path):
        if gate_record.get("type") != "gate" or gate_record.get("pass"):
            continue
        candidate = by_commit.get(gate_record.get("candidate_commit"))
        if candidate and candidate.get("agent") == agent:
            records.append(
                {
                    "agent": agent,
                    "ts": gate_record.get("ts"),
                    "round": candidate.get("round"),
                    "idea": candidate.get("idea") or candidate.get("description", ""),
                    "reasons": gate_record.get("reasons", []),
                }
            )
    records.sort(key=lambda item: (str(item.get("ts", "")), str(item.get("round", ""))))
    grouped = {}
    for record in records[-5:]:
        reasons = tuple(str(reason) for reason in record.get("reasons", []) if reason)
        if not reasons:
            continue
        idea = " ".join(str(record.get("idea") or "proposal").split())
        key = (idea, reasons)
        value = grouped.setdefault(key, {"rounds": [], "count": 0})
        value["count"] += 1
        if record.get("round") is not None and record["round"] not in value["rounds"]:
            value["rounds"].append(record["round"])
    if not grouped:
        return "none"
    return "\n".join(
        f"round {', '.join(map(str, value['rounds'])) or '?'} — {idea}: "
        f"rejected {value['count']}x: {'; '.join(reasons)}"
        for (idea, reasons), value in grouped.items()
    )


def log_worker_rejection(out_dir, agent, round_num, idea, reasons):
    append_jsonl(
        Path(out_dir) / "boredom_log.jsonl",
        {
            "type": "worker_rejection",
            "ts": timestamp(),
            "agent": agent,
            "round": round_num,
            "idea": str(idea or "proposal"),
            "reasons": [str(reason) for reason in reasons],
        },
    )


def common_values(
    agent,
    round_num,
    role,
    status,
    agent_b,
    best_commit,
    best_val,
    profile,
    *,
    events=None,
    deterministic=False,
    out_dir=None,
):
    shadow = os.environ.get("BOREDOM", "").casefold() == "off"
    return {
        "agent": agent,
        "best_commit": best_commit,
        "best_loss": f"{best_val:.6f}",
        "noise": str(profile.get("eps", 0.0036)),
        "round": round_num,
        "swarm_B": "disabled" if shadow else f"{status['swarm_B']:.3f}",
        "regime": status["regime"],
        "agent_B": "disabled" if shadow else f"{agent_b:.3f}",
        "role": role,
        "hard_rules": hard_rules(profile, events, agent, role, status, deterministic),
        "own_feedback": rejection_feedback(out_dir, agent),
        "task_brief": (TASK or {}).get("brief", ""),
        "editable": (TASK or {}).get("editable", ""),
        "agent_brief": ((TASK or {}).get("agents") or {}).get(agent, {}).get("brief", ""),
        **(TASK or {}).get("prompt_values", {}),
    }


def memory_text(result):
    entries = []
    for item in result.get("results", []):
        content = str(item.get("content") or "").replace("\n", " ")
        earlier = any(source.get("scope") == "cross_run" for source in item.get("sources") or [])
        label = f"{item.get('kind', 'unknown')}{', earlier-run' if earlier else ''}"
        entries.append(f"#{item.get('rank', '?')} [{label}] {content[:500]}")
    return "\n".join(entries) if entries else "No matching memories."


def write_memory_item(
    mem_type,
    memory_id,
    content,
    author,
    metadata,
    *,
    backend,
    mirror,
    log,
    arm,
):
    return memory.write(
        mem_type,
        memory_id,
        content,
        author,
        metadata,
        backend=backend,
        mirror=mirror,
        log=log,
        arm=arm,
    )


def recall_memory(query, author, *, backend, mirror, log, arm, limit=5):
    return memory.recall(
        query,
        memory.RECALL_IDENTITY,
        limit=limit,
        log_agent=author,
        backend=backend,
        mirror=mirror,
        log=log,
        arm=arm,
    )


def append_assignment(
    assignment,
    *,
    out_dir,
    backend,
    mirror,
    memory_log,
    arm,
    round_num,
    provenance=None,
):
    record = {
        "type": "assignment",
        "ts": timestamp(),
        "round": round_num,
        "swarm_B": assignment["swarm_B"],
        "regime": assignment["regime"],
        "per_agent_B": assignment["per_agent_B"],
        "per_agent_boredom": assignment.get("per_agent_boredom", {}),
        "roles": assignment["roles"],
        "scouts": assignment["scouts"],
        "rationale": assignment["rationale"],
        "frustration": assignment.get("frustration"),
        "stuck_cells": assignment.get("stuck_cells", []),
        "ledger_sha256": assignment["ledger_sha256"],
        "profile_sha256": assignment["profile_sha256"],
        "provenance": provenance or {},
        "llm_call_ids": [],
        "lead_call_ids": {},
    }
    append_jsonl(Path(out_dir) / "assignments.jsonl", record)
    recalled_record = dict(record)
    if arm in METER_OFF_ARMS:
        for key in ("swarm_B", "per_agent_B", "per_agent_boredom", "frustration", "stuck_cells"):
            recalled_record.pop(key, None)
    write_memory_item(
        "assignment",
        f"assignment-{arm}-{round_num}",
        json.dumps(recalled_record, sort_keys=True),
        "conductor",
        {
            "arm": arm,
            "round": round_num,
            "regime": assignment["regime"],
            "ledger_sha256": assignment["ledger_sha256"],
            "profile_sha256": assignment["profile_sha256"],
            "roles": assignment["roles"],
            "scouts": assignment["scouts"],
        },
        backend=backend,
        mirror=mirror,
        log=memory_log,
        arm=arm,
    )
    return record


def attach_assignment_call_ids(out_dir, round_num, leads):
    path = Path(out_dir) / "assignments.jsonl"
    records = read_jsonl(path)
    for record in reversed(records):
        if record.get("type") == "assignment" and record.get("round") == round_num:
            lead_call_ids = {
                agent: list(lead.get("llm_call_ids", []))
                for agent, lead in leads.items()
                if lead.get("llm_call_ids")
            }
            record["lead_call_ids"] = lead_call_ids
            record["llm_call_ids"] = sorted(
                {call_id for call_ids in lead_call_ids.values() for call_id in call_ids}
            )
            path.write_text(
                "".join(
                    json.dumps(item, sort_keys=True, ensure_ascii=False) + "\n" for item in records
                ),
                encoding="utf-8",
            )
            live_publish.changed(path)
            return record
    return None


def research_call(
    command,
    *,
    out_dir,
    agent,
    regime,
    replay,
    query=None,
    kind=None,
    source=None,
    question=None,
    n=3,
    since=None,
    cell=None,
    category="publication",
    domains=None,
):
    log_path = Path(out_dir) / "research_log.jsonl"
    cache_dir = Path(out_dir) / "exa_cache"
    records_before = len(research.read_log(log_path))
    args = SimpleNamespace(
        command=command,
        query=query,
        source=source,
        kind=kind,
        question=question,
        n=n,
        since=since,
        agent=agent,
        regime=regime,
        log=str(log_path),
        cache_dir=str(cache_dir),
        replay=replay,
        cell=cell,
        category=category,
        domains=domains,
    )
    if os.environ.get("EXA", "").casefold() == "off":
        if os.environ.get("LITERATURE", "").casefold() == "keyless":
            literature.RUNNERS[command](args)
        else:
            research.run_disabled(args)
    else:
        runner = {
            "prior-art": research.run_prior_art,
            "scout": research.run_scout,
            "worker-search": research.run_scout,
            "extract": research.run_extract,
        }[command]
        runner(args)
    return research.read_log(log_path)[records_before:]


def source_records(records):
    return [record for record in records if record.get("type") == "source"]


def render_source_list(sources):
    if not sources:
        return "No sources returned."
    return "\n".join(research.source_line(source) for source in sources)


WORKER_SEARCH_REGIMES = ("BOREDOM_SNAP", "PARADIGM_BREAKOUT")
MAX_WORKER_SEARCHES = 2
NOVELTY_PASS = 0.5
KNOWN_OPTIMUM_TOLERANCE = 1e-9


def agent_index(agent):
    match = re.search(r"(\d+)$", str(agent))
    return int(match.group(1)) - 1 if match else 0


def direction_cells(cells):
    return [item["cell"] for item in cells or [] if item.get("cell") != "baseline/none"]


def worker_search_cell(agent, role, status, assigned_cell="none"):
    if assigned_cell not in (None, "none"):
        return assigned_cell
    if role != "divergent" and status.get("regime") not in WORKER_SEARCH_REGIMES:
        return None
    cells = direction_cells(status.get("suggested_cells"))
    return cells[agent_index(agent) % len(cells)] if cells else None


def cell_search_query(cell):
    mechanism, _, method = str(cell).partition("/")
    topic = (TASK or {}).get("search_topic") or (TASK or {}).get("brief", "")[:120]
    return f"{topic}: {method.replace('_', ' ')} approach ({mechanism.replace('_', ' ')})"


def worker_search(agent, cell, kinds, *, status, out_dir, replay):
    records = []
    for kind in kinds:
        records += research_call(
            "worker-search",
            out_dir=out_dir,
            agent=agent,
            regime=status["regime"],
            replay=replay,
            query=cell_search_query(cell),
            kind=kind,
            n=3,
            cell=cell,
        )
    return source_records(records)


def prior_hits(records):
    return [
        {
            "id": str(item["id"]),
            "title": str(item.get("title") or ""),
            "highlight": " ".join(str(text) for text in item.get("highlights") or [])[:300],
        }
        for item in source_records(records)
        if item.get("id")
    ]


CRITIC_STATUS = {"swarm_B": 0.0, "regime": "n/a"}


def critic_common_values(round_num, best_commit, best_val, profile):
    """Critic prompts carry no meter state, so arms A and B judge identically."""
    values = common_values(
        "critic", round_num, "critic", CRITIC_STATUS, 0.0, best_commit, best_val, profile
    )
    values.update({"swarm_B": "n/a", "agent_B": "n/a", "regime": "critic is arm-independent"})
    return values


def critic_review(
    llm_client,
    *,
    round_num,
    candidate,
    events,
    first_score,
    second_score,
    accepted,
    previous_best_commit,
    previous_best_val,
    profile,
):
    basin = [
        event
        for event in events
        if event.get("descriptor", {}).get("mechanism") == candidate["descriptor"]["mechanism"]
    ][-5:]
    claim = {
        "idea": candidate["idea"],
        "rationale": candidate.get("rationale", ""),
        "lead": candidate.get("lead_claim"),
        "sources": candidate.get("sources", []),
    }
    values = {
        **critic_common_values(round_num, previous_best_commit, previous_best_val, profile),
        "commit": candidate["commit"],
        "author": candidate["agent"],
        "idea": candidate["idea"],
        "v1": f"{first_score:.6f}",
        "v2": "n/a" if second_score is None else f"{float(second_score):.6f}",
        "prev_best": f"{previous_best_val:.6f}",
        "accepted": str(accepted).lower(),
        "claim": json.dumps(claim, sort_keys=True),
        "predicted_delta": str(candidate.get("predicted_delta")),
        "basin_results": json.dumps(basin, sort_keys=True),
        "novelty": ("n/a" if candidate.get("novelty") is None else f"{candidate['novelty']:.2f}"),
        "prior_art": json.dumps(candidate.get("prior_hits", [])[:3], sort_keys=True),
    }
    return llm_client.call("CRITIC", agent="critic", round_num=round_num, values=values)


def judge_novelty(
    candidates, *, llm_client, out_dir, round_num, status, profile, best_commit, best_val
):
    """Critic scores each idea against its prior-art hits; logged, never fed to the meter."""
    items = [candidate for candidate in candidates if candidate.get("prior_hits")]
    if not items:
        return
    listing = [
        {
            "agent": candidate["agent"],
            "idea": candidate.get("idea", ""),
            "rationale": str(candidate.get("rationale", ""))[:300],
            "prior_art": candidate["prior_hits"][:3],
        }
        for candidate in items
    ]
    try:
        response = llm_client.call(
            "CRITIC_NOVELTY",
            agent="critic",
            round_num=round_num,
            values={
                **critic_common_values(round_num, best_commit, best_val, profile),
                "candidates": json.dumps(listing, indent=1, sort_keys=True),
            },
        )
        call_ids = [llm_client.last_call_id] if getattr(llm_client, "last_call_id", None) else []
    except (RuntimeError, ValueError) as error:
        response = {"error": str(error)}
        call_ids = []
    scores = {
        str(item.get("agent")): item
        for item in response.get("scores") or []
        if isinstance(item, dict)
    }
    for candidate in items:
        item = scores.get(candidate["agent"], {})
        try:
            novelty = min(1.0, max(0.0, float(item.get("novelty"))))
        except (TypeError, ValueError):
            novelty = None
        candidate["novelty"] = novelty
        candidate["prior_art_pass"] = None if novelty is None else novelty >= NOVELTY_PASS
        candidate["critic_call_ids"] = list(
            dict.fromkeys([*candidate.get("critic_call_ids", []), *call_ids])
        )
        append_jsonl(
            Path(out_dir) / "novelty.jsonl",
            {
                "ts": timestamp(),
                "round": round_num,
                "agent": candidate["agent"],
                "commit": candidate.get("commit") or None,
                "idea": candidate.get("idea", ""),
                "novelty": novelty,
                "prior_art_pass": candidate["prior_art_pass"],
                "closest": item.get("closest"),
                "why": str(item.get("why") or response.get("error") or "")[:300],
                "prior_art": [hit["id"] for hit in candidate["prior_hits"]],
                "llm_call_ids": call_ids,
            },
        )


def vocab_with_extensions(profile, out_dir):
    vocab = json.loads(json.dumps(profile.get("vocab", {})))
    slugs = sorted(
        {
            record["cell"].split("/", 1)[1]
            for record in read_jsonl(Path(out_dir) / "vocab_extensions.jsonl")
            if record.get("cell")
        }
    )
    if slugs:
        vocab["other"] = slugs
    return vocab


def record_vocab_extension(out_dir, profile, descriptor, *, agent, round_num, idea):
    if not meter.is_other_descriptor(profile, descriptor):
        return
    path = Path(out_dir) / "vocab_extensions.jsonl"
    cell = meter.cell_key(profile, descriptor, 2)
    if any(record.get("cell") == cell for record in read_jsonl(path)):
        return
    append_jsonl(
        path,
        {
            "ts": timestamp(),
            "round": round_num,
            "agent": agent,
            "cell": cell,
            "idea": idea,
        },
    )
    print(f"vocabulary extension: {cell}")


def known_optimum_reached(best_val):
    target = (TASK or {}).get("known_optimum_loss")
    return target is not None and best_val <= float(target) + KNOWN_OPTIMUM_TOLERANCE


def write_converged(out_dir, profile, events, status, *, round_num, best_commit, best_val, reason):
    status_record = read_jsonl(Path(out_dir) / "boredom_log.jsonl")
    converged = {
        "round": round_num,
        "reason": reason,
        "best_commit": best_commit,
        "best_loss": best_val,
        "cells_covered": sorted(
            {
                meter.cell_key(profile, event["descriptor"], 2)
                for event in meter.attempt_events(profile, events)
            }
        ),
        "attempt_count": len(list(meter.attempt_events(profile, events))),
        "status_record": status_record[-1] if status_record else status,
    }
    if reason == "known_optimum_loss":
        converged["known_optimum_loss"] = TASK.get("known_optimum_loss")
    (Path(out_dir) / "converged.json").write_text(
        json.dumps(converged, indent=2, sort_keys=True) + "\n",
        encoding="utf-8",
    )
    run_path = Path(out_dir) / "run.json"
    run_artifact = json.loads(run_path.read_text(encoding="utf-8"))
    run_artifact["converged"] = True
    run_artifact["converged_reason"] = reason
    _write_run_artifact(Path(out_dir), run_artifact)


def run_scouts(
    scouts,
    *,
    profile,
    events,
    status,
    out_dir,
    llm_client,
    backend,
    mirror,
    memory_log,
    arm,
    round_num,
    best_commit,
    best_val,
    replay,
):
    leads = {}
    scout = (TASK or {}).get("scout", {})
    cells = [] if arm in METER_OFF_ARMS else suggest_cells(profile, events)
    targets = direction_cells(cells) or ["none"]
    for scout_number, agent in enumerate(scouts):
        lead_call_ids = []
        target_cell = targets[scout_number % len(targets)]
        recalled = recall_memory(
            "lessons and results that identify exhausted or already tried directions",
            agent,
            backend=backend,
            mirror=mirror,
            log=memory_log,
            arm=arm,
        )
        common = common_values(
            agent,
            round_num,
            "scout",
            status,
            status["per_agent_B"][agent],
            best_commit,
            best_val,
            profile,
            events=events,
            deterministic=bool((TASK or {}).get("deterministic")),
            out_dir=out_dir,
        )
        query_plan = llm_client.call(
            "SCOUT_QUERY",
            agent=agent,
            round_num=round_num,
            values={
                **common,
                "recalled": memory_text(recalled),
                "suggested_cells": format_cells(cells),
                "target_cell": target_cell,
            },
        )
        if getattr(llm_client, "last_call_id", None):
            lead_call_ids.append(llm_client.last_call_id)
        fallback_query = cell_search_query(target_cell) if target_cell != "none" else ""
        paper_records = research_call(
            "scout",
            out_dir=out_dir,
            agent=agent,
            regime=status["regime"],
            replay=replay,
            query=str(query_plan.get("paper_query") or fallback_query),
            kind="paper",
            n=3,
            cell=target_cell,
            since=scout.get("since"),
            category=scout.get("paper_category", "publication"),
        )
        code_records = research_call(
            "scout",
            out_dir=out_dir,
            agent=agent,
            regime=status["regime"],
            replay=replay,
            query=str(query_plan.get("code_query") or fallback_query),
            kind="code",
            n=3,
            cell=target_cell,
            since=scout.get("since"),
            domains=scout.get("code_domains"),
        )
        sources = source_records(paper_records) + source_records(code_records)
        if not sources:
            continue
        pick = llm_client.call(
            "SCOUT_PICK",
            agent=agent,
            round_num=round_num,
            values={
                **common,
                "bottleneck": str(query_plan.get("bottleneck") or ""),
                "sources": render_source_list(sources),
            },
        )
        if getattr(llm_client, "last_call_id", None):
            lead_call_ids.append(llm_client.last_call_id)
        source_id = str(pick.get("source_id") or "")
        source = next((item for item in sources if item.get("id") == source_id), None)
        if source is None:
            source = sources[0]
            source_id = str(source.get("id"))
        extract_records = research_call(
            "extract",
            out_dir=out_dir,
            agent=agent,
            regime=status["regime"],
            replay=replay,
            source=source_id,
            question=scout.get(
                "extract_question",
                f"What exact method, settings, and measured result could be "
                f"implemented in {TARGET_FILE} for this task?",
            ),
        )
        extract = next(
            (item.get("summary") for item in extract_records if item.get("type") == "extract"),
            "",
        )
        lead_values = {
            **common,
            "source_id": source_id,
            "title": source.get("title") or "",
            "published": source.get("published") or "",
            "url": source.get("url") or "",
            "summary": extract or "No extract returned.",
        }
        lead_response = llm_client.call(
            "SCOUT_LEAD",
            agent=agent,
            round_num=round_num,
            values=lead_values,
        )
        if getattr(llm_client, "last_call_id", None):
            lead_call_ids.append(llm_client.last_call_id)
        lead_id = f"lead-{arm}-{round_num}-{agent}"
        lead = {
            "id": lead_id,
            "agent": agent,
            "cell": target_cell,
            "source_ids": [source_id],
            "recipe": str(lead_response.get("recipe") or ""),
            "claimed_effect": str(lead_response.get("claimed_effect") or ""),
            "predicted_delta": float(lead_response.get("predicted_delta", 0.0)),
            "risk": str(lead_response.get("risk") or ""),
            "llm_call_ids": lead_call_ids,
        }
        leads[agent] = lead
        write_memory_item(
            "lead",
            lead_id,
            json.dumps(lead, sort_keys=True),
            agent,
            {"arm": arm, "round": round_num, "source_ids": [source_id]},
            backend=backend,
            mirror=mirror,
            log=memory_log,
            arm=arm,
        )
    return leads


def validate_proposal(profile, proposal):
    if not isinstance(proposal, dict):
        raise ValueError("proposal must be a JSON object")
    idea = proposal.get("idea")
    if not isinstance(idea, str) or not idea.strip():
        raise ValueError("proposal needs a one-line idea")
    descriptor = proposal.get("descriptor")
    if not isinstance(descriptor, dict):
        raise ValueError("proposal needs a descriptor object")
    meter.validate_descriptor(profile, descriptor)
    edits = proposal.get("edits")
    if not isinstance(edits, list) or not edits:
        raise ValueError("proposal needs at least one edit")
    for edit in edits:
        if (
            not isinstance(edit, dict)
            or not isinstance(edit.get("old"), str)
            or not isinstance(edit.get("new"), str)
        ):
            raise ValueError("each edit needs string old and new values")
    sources = proposal.get("source_ids", [])
    if not isinstance(sources, list) or any(not isinstance(item, str) for item in sources):
        raise ValueError("source_ids must be a list of strings")
    if any(not re.fullmatch(research.SOURCE_ID_PATTERN, item) for item in sources):
        raise ValueError("source_ids must use the S<number> or D<round>_<number> format")
    predicted_delta = proposal.get("predicted_delta", 0.0)
    try:
        predicted_delta = float(predicted_delta)
    except (TypeError, ValueError) as error:
        raise ValueError("predicted_delta must be numeric") from error
    if not math.isfinite(predicted_delta):
        raise ValueError("predicted_delta must be finite")
    proposal["idea"] = " ".join(idea.split())[:80]
    proposal["source_ids"] = sources
    proposal["predicted_delta"] = predicted_delta
    proposal["lead_id"] = proposal.get("lead_id") or None
    if proposal["lead_id"] is not None and not re.fullmatch(r"[A-Za-z0-9_-]+", proposal["lead_id"]):
        raise ValueError("lead_id must contain only letters, digits, '_' or '-'")
    proposal["descriptor"] = json.loads(json.dumps(descriptor))
    return proposal


def assigned_cell_mismatch_reason(profile, descriptor, assigned_cell):
    if assigned_cell in (None, "none"):
        return None
    if meter.cell_key(profile, descriptor, 2) != assigned_cell:
        return f"unbuildable assignment: {assigned_cell}"
    return None


def apply_edits_to_text(text, edits):
    edited = text
    for index, edit in enumerate(edits, 1):
        old = edit["old"]
        if not old or edited.count(old) != 1:
            count = edited.count(old) if old else 0
            raise EditError(f"edit {index}: old text must occur exactly once (found {count})")
        edited = edited.replace(old, edit["new"], 1)
    return edited


def apply_edits(source_path, edits):
    text = Path(source_path).read_text(encoding="utf-8")
    edited = apply_edits_to_text(text, edits)
    Path(source_path).write_text(edited, encoding="utf-8")


def descriptor_trailer(descriptor):
    mechanism = str(descriptor["mechanism"])
    method = str(descriptor["method"])
    params = descriptor.get("params") or {}
    value = params.get("value")
    return f"{mechanism}/{method}" + (f" value={float(value):g}" if value is not None else "")


def commit_candidate(
    *,
    repo,
    agents_root,
    arm,
    agent,
    round_num,
    attempt,
    base_commit,
    proposal,
    prior_art,
    source_ids,
    lead_id,
    memory_write_claim,
):
    worktree, branch = prepare_agent_worktree(
        repo, agents_root, arm, agent, base_commit, round_num, attempt
    )
    try:
        apply_edits(worktree / TARGET_FILE, proposal["edits"])
    except EditError:
        raise
    memory_write_claim(proposal, attempt)
    subject = proposal["idea"][:72]
    trailer_lines = [
        f"Agent: {agent}",
        f"Round: {round_num}",
        f"Descriptor: {descriptor_trailer(proposal['descriptor'])}",
        f"Prior-art: {prior_art}",
        f"Source: {','.join(source_ids) if source_ids else 'none'}",
        f"Lead: {lead_id or 'none'}",
        f"Attempt: {attempt}",
    ]
    git(worktree, "add", "--", TARGET_FILE)
    commit_args = [
        "-c",
        "user.name=Autoresearch Swarm",
        "-c",
        "user.email=swarm@localhost",
        "commit",
        "-m",
        subject,
    ]
    for line in trailer_lines:
        commit_args.extend(["-m", line])
    git(worktree, *commit_args)
    commit = git_text(worktree, "rev-parse", "HEAD")
    return {"commit": commit, "branch": branch, "worktree": worktree}


def gate_candidate(
    *,
    repo,
    out_dir,
    profile_path,
    commit,
    role=None,
    descriptor=None,
):
    if TASK.get("deterministic"):
        cache_path = Path(out_dir) / "score_cache.json"
        cache = json.loads(cache_path.read_text(encoding="utf-8")) if cache_path.exists() else {}
        blob = git_text(repo, "rev-parse", f"{commit}:{TARGET_FILE}")
        if blob in cache:
            cached = cache[blob]
            reason = f"duplicate: blob already scored as {cached['commit']}"
            record = {
                "type": "gate",
                "ts": timestamp(),
                "candidate_commit": commit,
                "candidate_blob": blob,
                "pass": False,
                "reasons": [reason],
                "descriptor": descriptor,
                "role": role,
                "duplicate_of": cached["commit"],
                "score": cached.get("loss"),
            }
            append_jsonl(Path(out_dir) / "boredom_log.jsonl", record)
            return False, record
    args = SimpleNamespace(
        command="gate",
        results=str(Path(out_dir) / "results.tsv"),
        ledger=str(Path(out_dir) / "ledger.jsonl"),
        role=role,
        log=str(Path(out_dir) / "boredom_log.jsonl"),
        repo=str(repo),
        profile=str(profile_path),
        k=None,
        eps=None,
        weights=None,
        commit=commit,
        min_lines=4,
        delta_min=None,
        failed_delta=None,
        research_log=str(Path(out_dir) / "research_log.jsonl"),
    )
    with redirect_stdout(io.StringIO()):
        result = boredom.run_gate(args)
    record = read_jsonl(Path(out_dir) / "boredom_log.jsonl")[-1]
    if record.get("type") != "gate" or record.get("candidate_commit") != commit:
        raise RuntimeError("boredom.py gate did not append its gate record")
    return result == 0, record


def local_candidate_precheck(*, repo, out_dir, profile, role, proposal, cited_sources, source_text):
    out_dir = Path(out_dir)
    events = meter.read_ledger(out_dir / "ledger.jsonl")
    reasons = []
    if not boredom.is_disabled():
        known_sources = boredom.read_research_sources(out_dir / "research_log.jsonl")
        valid_sources = [source_id for source_id in cited_sources if source_id in known_sources]
        try:
            result = meter.gate(
                profile,
                events,
                proposal["descriptor"],
                agent=None,
                sources=valid_sources,
                role=role,
            )
            reasons.extend(result["reasons"])
        except ValueError as error:
            reasons.append(f"invalid-descriptor: {error}")
    if TASK.get("deterministic"):
        try:
            edited = apply_edits_to_text(source_text, proposal["edits"])
        except EditError:
            edited = None
        if edited is not None:
            result = subprocess.run(
                ["git", "-C", str(repo), "hash-object", "--stdin"],
                input=edited.encode("utf-8"),
                capture_output=True,
                check=False,
            )
            if result.returncode:
                raise RuntimeError("could not hash the edited task file for score-cache check")
            blob = result.stdout.decode("ascii").strip()
            cache_path = out_dir / "score_cache.json"
            cache = (
                json.loads(cache_path.read_text(encoding="utf-8")) if cache_path.exists() else {}
            )
            if blob in cache:
                cached = cache[blob]
                commit = cached.get("commit") if isinstance(cached, dict) else cached
                reasons.append(f"duplicate: blob already scored as {commit}")
    return reasons


def deduplicate_round_candidates(repo, candidates, out_dir):
    if not TASK.get("deterministic"):
        return candidates
    unique = []
    seen = {}
    for candidate in candidates:
        blob = git_text(repo, "rev-parse", f"{candidate['commit']}:{TARGET_FILE}")
        previous = seen.get(blob)
        if previous is None:
            seen[blob] = candidate
            unique.append(candidate)
            continue
        reason = f"duplicate: same editable blob as {previous['commit']} in this round"
        candidate.update(
            {
                "status": "duplicate",
                "score": None,
                "duplicate_of": previous["commit"],
                "same_round_duplicate": True,
                "reasons": [reason],
            }
        )
        attempts = list(candidate.get("attempts") or [])
        attempt_number = attempts[-1].get("attempt", 1) if attempts else 1
        attempts.append(
            {
                "attempt": attempt_number,
                "commit": candidate["commit"],
                "pass": False,
                "reasons": [reason],
            }
        )
        candidate["attempts"] = attempts
        append_jsonl(
            Path(out_dir) / "boredom_log.jsonl",
            {
                "type": "gate",
                "ts": timestamp(),
                "candidate_commit": candidate["commit"],
                "candidate_blob": blob,
                "pass": False,
                "reasons": [reason],
                "descriptor": candidate.get("descriptor"),
                "role": candidate.get("role"),
                "duplicate_of": previous["commit"],
            },
        )
    return unique


def record_score_cache(repo, out_dir, results):
    if not TASK.get("deterministic"):
        return
    path = Path(out_dir) / "score_cache.json"
    cache = json.loads(path.read_text(encoding="utf-8")) if path.exists() else {}
    for commit, result in results.items():
        if result.get("status") != "ok" or result.get("loss") is None:
            continue
        blob = git_text(repo, "rev-parse", f"{commit}:{TARGET_FILE}")
        cache.setdefault(
            blob,
            {
                "commit": commit,
                "loss": result.get("loss"),
                "status": result.get("status"),
            },
        )
    path.write_text(json.dumps(cache, indent=2, sort_keys=True) + "\n", encoding="utf-8")


def source_union(*groups):
    return list(dict.fromkeys(source for group in groups for source in group))


def recalled_lead_records(result):
    leads = []
    for item in result.get("results", []) if isinstance(result, dict) else []:
        content = item.get("content") if isinstance(item, dict) else None
        try:
            lead = json.loads(content) if isinstance(content, str) else content
        except (TypeError, json.JSONDecodeError):
            continue
        if not isinstance(lead, dict):
            continue
        lead_id = lead.get("id")
        if not isinstance(lead_id, str) or not lead_id:
            continue
        sources = lead.get("source_ids", [])
        if not isinstance(sources, list):
            sources = []
        leads.append(
            {
                **lead,
                "id": lead_id,
                "source_ids": [
                    source_id
                    for source_id in sources
                    if isinstance(source_id, str)
                    and re.fullmatch(research.SOURCE_ID_PATTERN, source_id)
                ],
            }
        )
    return leads


def known_lead_records(all_leads, lead, recalled_result):
    leads = []
    seen = set()
    for item in [*all_leads, *([lead] if lead else []), *recalled_lead_records(recalled_result)]:
        lead_id = item.get("id") if isinstance(item, dict) else None
        if lead_id and lead_id not in seen:
            seen.add(lead_id)
            leads.append(item)
    return leads


def validate_lead_reference(proposal, known_leads):
    lead_id = proposal.get("lead_id")
    if not lead_id:
        return None
    lead = next((item for item in known_leads if item.get("id") == lead_id), None)
    if lead is None:
        raise ValueError("lead_id must reference a known lead")
    return lead


def cited_sources_for_proposal(proposal, lead):
    return source_union(
        proposal.get("source_ids", []),
        lead.get("source_ids", []) if lead else [],
    )


def lead_for_agent(agent, scout_leads, all_leads):
    return scout_leads.get(agent)


def assigned_cell_repair(
    *,
    agent,
    round_num,
    arm,
    role,
    status,
    profile,
    out_dir,
    assigned_cells,
    searches_used,
    worker_sources,
    common,
    llm_client,
    replay,
    proposal,
):
    if arm in METER_OFF_ARMS:
        return None
    events = meter.read_ledger(Path(out_dir) / "ledger.jsonl")
    reserved = assigned_cells if assigned_cells is not None else []
    cells = meter.suggest(profile, events, n=len(meter.all_cells(profile, 2)))
    eligible = []
    for cell in cells:
        descriptor = dict(zip(profile["levels"], cell["cell"].split("/")))
        values = [
            event["descriptor"].get("params", {}).get("value")
            for event in events
            if meter.cell_key(profile, event["descriptor"], 2) == cell["cell"]
        ]
        values = [abs(value) for value in values if isinstance(value, (int, float))]
        spec = profile.get("params", {}).get("value", {})
        if values and spec.get("scale") == "ratio":
            descriptor["params"] = {"value": max(max(values), 1e-12) * spec["ratio"]}
        if (
            cell["cell"] != "baseline/none"
            and cell["cell"] not in reserved
            and meter.gate(profile, events, descriptor, role=role, sources=["assigned"])["pass"]
        ):
            eligible.append((cell["cell"], descriptor))
    if not eligible:
        eligible = [
            (cell["cell"], dict(zip(profile["levels"], cell["cell"].split("/"))))
            for cell in cells
            if cell["cell"] != "baseline/none" and cell["cell"] not in reserved
        ]
    if not eligible:
        return None
    common["assigned_cell"], common["assigned_descriptor"] = eligible[0]
    reserved.append(common["assigned_cell"])
    if searches_used < MAX_WORKER_SEARCHES:
        worker_sources = worker_search(
            agent,
            common["assigned_cell"],
            ["paper"],
            status=status,
            out_dir=out_dir,
            replay=replay,
        )
        searches_used += 1
        common["search_cell"] = common["assigned_cell"]
        common["worker_sources"] = render_source_list(worker_sources)
    proposal = llm_client.call(
        "WORKER_REPAIR",
        agent=agent,
        round_num=round_num,
        values={
            **common,
            "problem": "Implement exactly the conductor-assigned cell. Required descriptor: "
            + json.dumps(common["assigned_descriptor"], sort_keys=True),
            "proposal": json.dumps(proposal, sort_keys=True),
        },
    )
    return proposal, searches_used, worker_sources


def worker_attempts(
    *,
    agent,
    round_num,
    arm,
    role,
    agent_b,
    status,
    best_commit,
    best_val,
    profile,
    profile_path,
    events,
    out_dir,
    repo,
    agents_root,
    base_commit,
    llm_client,
    backend,
    mirror,
    memory_log,
    lead,
    all_leads,
    claims,
    replay,
    assigned_cells=None,
):
    call_id_start = len(getattr(llm_client, "call_ids", []))

    def with_call_ids(candidate):
        call_ids = getattr(llm_client, "call_ids", [])
        candidate["llm_call_ids"] = list(call_ids[call_id_start:])
        return candidate

    memory_queries = [
        f"what has been tried involving {profile.get('objective', 'loss')} and what happened",
        "untested implementation leads",
        "who is testing what this round",
    ]
    recalls = [
        recall_memory(
            query,
            agent,
            backend=backend,
            mirror=mirror,
            log=memory_log,
            arm=arm,
        )
        for query in (memory_queries if not getattr(llm_client, "supervised", False) else [])
    ]
    if not recalls:
        recalls = [{"results": []} for _ in range(3)]
    recalled_results = "\n".join(memory_text(result) for result in (recalls[0], recalls[2]))
    known_leads = known_lead_records(all_leads, lead, recalls[1])
    recalled_leads = "\n".join(
        [
            *(json.dumps(item, sort_keys=True) for item in known_leads),
            memory_text(recalls[1]),
        ]
    )
    current_base = base_commit
    candidate_source = git(repo, "show", f"{current_base}:{TARGET_FILE}").stdout
    common = common_values(
        agent,
        round_num,
        role,
        status,
        agent_b,
        best_commit,
        best_val,
        profile,
        events=events,
        deterministic=bool(TASK.get("deterministic")),
        out_dir=out_dir,
    )
    search_cell = (
        None
        if getattr(llm_client, "supervised", False)
        else worker_search_cell(agent, role, status)
    )
    worker_sources = []
    searches_used = 0
    if search_cell:
        kinds = ["paper", "code"] if status["regime"] == "PARADIGM_BREAKOUT" else ["paper"]
        worker_sources = worker_search(
            agent, search_cell, kinds, status=status, out_dir=out_dir, replay=replay
        )
        searches_used = len(kinds)
    offered_sources = {
        source_id for item in known_leads for source_id in item.get("source_ids", [])
    }
    common.update(
        {
            "search_cell": search_cell or "none",
            "worker_sources": render_source_list(worker_sources)
            if search_cell
            else "No search run.",
            "task_inputs": (TASK or {}).get("prompt_values", {}).get("task_context", "(none)"),
            "suggested_cells": format_cells(status.get("suggested_cells", [])),
            "reasons": "none",
            "assigned_cell": "none",
            "candidate_source": candidate_source,
            "fake_targets": TASK.get("fake_targets", []),
            "fake_edits": TASK.get("fake_edits", []),
        }
    )
    if getattr(llm_client, "supervised", False):
        common["supervisor_instruction"] = status["supervisor_tasks"][agent]
        common["vocab"] = json.dumps(vocab_with_extensions(profile, out_dir), sort_keys=True)
        common["problem"] = "none"
        common["proposal"] = "none"
    proposal = llm_client.call(
        "WORKER_PROPOSE",
        agent=agent,
        round_num=round_num,
        values={
            **common,
            "assignment": role,
            "recalled_results": recalled_results,
            "recalled_leads": recalled_leads,
            "claims": "\n".join(claims) if claims else "No claims yet.",
            "candidate_source": candidate_source,
            "vocab": json.dumps(vocab_with_extensions(profile, out_dir), sort_keys=True),
        },
    )
    attempts = []
    precheck_failures = {}
    current_proposal = proposal
    for attempt in (1, 2, 3):
        try:
            current_proposal = validate_proposal(profile, current_proposal)
            mismatch_reason = assigned_cell_mismatch_reason(
                profile, current_proposal["descriptor"], common["assigned_cell"]
            )
            if mismatch_reason:
                raise ValueError(mismatch_reason)
            lead_claim = validate_lead_reference(current_proposal, known_leads)
        except (ValueError, TypeError) as error:
            log_worker_rejection(
                out_dir,
                agent,
                round_num,
                current_proposal.get("idea", "") if isinstance(current_proposal, dict) else "",
                [str(error)],
            )
            if common["assigned_cell"] != "none" and str(error).startswith(
                "unbuildable assignment: "
            ):
                return with_call_ids(
                    {
                        "agent": agent,
                        "status": "reject",
                        "score": None,
                        "commit": "",
                        "descriptor": current_proposal.get("descriptor", {}),
                        "sources": [],
                        "lead": None,
                        "idea": current_proposal.get("idea", ""),
                        "predicted_delta": None,
                        "role": role,
                        "reasons": [str(error)],
                        "attempts": attempts,
                    }
                )
            if attempt == 1:
                current_proposal = llm_client.call(
                    "WORKER_REPAIR",
                    agent=agent,
                    round_num=round_num,
                    values={
                        **common,
                        "problem": f"Invalid proposal: {error}",
                        "proposal": json.dumps(current_proposal, sort_keys=True),
                    },
                )
                if current_proposal.get("status") == "reject":
                    return with_call_ids(
                        {
                            "agent": agent,
                            "status": "reject",
                            "score": None,
                            "commit": "",
                            "descriptor": common.get(
                                "assigned_descriptor", {"mechanism": "baseline", "method": "none"}
                            ),
                            "sources": [],
                            "lead": None,
                            "idea": "assigned cell has no buildable fake target",
                            "predicted_delta": None,
                            "role": role,
                            "reasons": [current_proposal["reason"]],
                            "attempts": attempts,
                        }
                    )
                continue
            return with_call_ids(
                {
                    "agent": agent,
                    "status": "reject",
                    "score": None,
                    "commit": "",
                    "descriptor": {"mechanism": "baseline", "method": "none"},
                    "sources": [],
                    "lead": None,
                    "idea": "proposal rejected after repair",
                    "predicted_delta": None,
                    "role": role,
                    "reasons": [f"invalid proposal after repair: {error}"],
                    "attempts": attempts,
                }
            )

        lead_id = current_proposal.get("lead_id")
        cited_sources = cited_sources_for_proposal(current_proposal, lead_claim)
        precheck_reasons = local_candidate_precheck(
            repo=repo,
            out_dir=out_dir,
            profile=profile,
            role=role,
            proposal=current_proposal,
            cited_sources=cited_sources,
            source_text=candidate_source,
        )
        if precheck_reasons:
            precheck_failures[attempt] = precheck_reasons
            attempts.append(
                {
                    "attempt": attempt,
                    "precheck": True,
                    "pass": False,
                    "reasons": precheck_reasons,
                }
            )
            log_worker_rejection(
                out_dir, agent, round_num, current_proposal["idea"], precheck_reasons
            )
            common["reasons"] = "; ".join(precheck_reasons)
            if attempt == 2 and precheck_failures.get(1) == precheck_reasons:
                return with_call_ids(
                    {
                        "agent": agent,
                        "status": "reject",
                        "score": None,
                        "commit": "",
                        "descriptor": current_proposal["descriptor"],
                        "sources": cited_sources,
                        "lead": lead_id,
                        "idea": current_proposal["idea"],
                        "predicted_delta": current_proposal["predicted_delta"],
                        "role": role,
                        "reasons": precheck_reasons,
                        "attempts": attempts,
                    }
                )
            if attempt == 1:
                current_proposal = llm_client.call(
                    "WORKER_REPAIR",
                    agent=agent,
                    round_num=round_num,
                    values={
                        **common,
                        "problem": "Gate pre-check rejected the proposal: "
                        + "; ".join(precheck_reasons),
                        "proposal": json.dumps(current_proposal, sort_keys=True),
                    },
                )
                continue
            if attempt == 2:
                fallback = assigned_cell_repair(
                    agent=agent,
                    round_num=round_num,
                    arm=arm,
                    role=role,
                    status=status,
                    profile=profile,
                    out_dir=out_dir,
                    assigned_cells=assigned_cells,
                    searches_used=searches_used,
                    worker_sources=worker_sources,
                    common=common,
                    llm_client=llm_client,
                    replay=replay,
                    proposal=current_proposal,
                )
                if fallback:
                    current_proposal, searches_used, worker_sources = fallback
                    if current_proposal.get("status") == "reject":
                        return with_call_ids(
                            {
                                "agent": agent,
                                "status": "reject",
                                "score": None,
                                "commit": "",
                                "descriptor": common["assigned_descriptor"],
                                "sources": [],
                                "lead": None,
                                "idea": "assigned cell has no buildable fake target",
                                "predicted_delta": None,
                                "role": role,
                                "reasons": [current_proposal["reason"]],
                                "attempts": attempts,
                            }
                        )
                    continue
            return with_call_ids(
                {
                    "agent": agent,
                    "status": "reject",
                    "score": None,
                    "commit": "",
                    "descriptor": current_proposal["descriptor"],
                    "sources": cited_sources,
                    "lead": lead_id,
                    "idea": current_proposal["idea"],
                    "predicted_delta": current_proposal["predicted_delta"],
                    "role": role,
                    "reasons": precheck_reasons,
                    "attempts": attempts,
                }
            )

        claims.append(f"{agent}: {current_proposal['idea']}")
        prior_records = research_call(
            "prior-art",
            out_dir=out_dir,
            agent=agent,
            regime=status["regime"],
            replay=replay,
            query=current_proposal["idea"],
            n=3,
        )
        prior_sources = [
            str(item["id"]) for item in source_records(prior_records) if item.get("id")
        ]
        prior_query = next(
            (item for item in prior_records if item.get("type") == "query"),
            {},
        )
        prior_art = (
            ",".join(prior_sources)
            if prior_sources
            else f"none-found {prior_query.get('id', 'Q0')}"
        )
        offered = offered_sources | {str(item["id"]) for item in worker_sources}

        def write_claim(value, attempt_number):
            write_memory_item(
                "claim",
                f"claim-{arm}-r{round_num}-{agent}-a{attempt_number}",
                json.dumps(
                    {
                        "idea": value["idea"],
                        "rationale": value.get("rationale", ""),
                        "descriptor": value["descriptor"],
                        "predicted_delta": value["predicted_delta"],
                        "lead_id": value.get("lead_id"),
                        "source_ids": value.get("source_ids", []),
                    },
                    sort_keys=True,
                ),
                agent,
                {
                    "arm": arm,
                    "round": round_num,
                    "idea": value["idea"],
                    "rationale": value.get("rationale", ""),
                    "predicted_delta": value["predicted_delta"],
                    "lead_id": value.get("lead_id"),
                    "descriptor": value["descriptor"],
                    "source_ids": value.get("source_ids", []),
                },
                backend=backend,
                mirror=mirror,
                log=memory_log,
                arm=arm,
            )

        try:
            committed = commit_candidate(
                repo=repo,
                agents_root=agents_root,
                arm=arm,
                agent=agent,
                round_num=round_num,
                attempt=attempt,
                base_commit=current_base,
                proposal=current_proposal,
                prior_art=prior_art,
                source_ids=cited_sources,
                lead_id=lead_id,
                memory_write_claim=write_claim,
            )
        except EditError as error:
            attempts.append({"attempt": attempt, "edit_error": str(error)})
            if attempt == 1:
                current_proposal = llm_client.call(
                    "WORKER_REPAIR",
                    agent=agent,
                    round_num=round_num,
                    values={
                        **common,
                        "problem": f"Edit application failed: {error}",
                        "proposal": json.dumps(current_proposal, sort_keys=True),
                    },
                )
                continue
            return with_call_ids(
                {
                    "agent": agent,
                    "status": "reject",
                    "score": None,
                    "commit": "",
                    "descriptor": current_proposal["descriptor"],
                    "sources": cited_sources,
                    "lead": lead_id,
                    "idea": current_proposal["idea"],
                    "predicted_delta": current_proposal["predicted_delta"],
                    "role": role,
                    "reasons": [str(error)],
                    "attempts": attempts,
                }
            )

        gate_pass, gate_record = gate_candidate(
            repo=repo,
            out_dir=out_dir,
            profile_path=profile_path,
            commit=committed["commit"],
            role=role,
            descriptor=current_proposal["descriptor"],
        )
        attempts.append(
            {
                "attempt": attempt,
                "commit": committed["commit"],
                "pass": gate_pass,
                "reasons": gate_record.get("reasons", []),
            }
        )
        candidate = {
            "agent": agent,
            "status": (
                "pending"
                if gate_pass
                else "duplicate"
                if gate_record.get("duplicate_of") is not None
                else "reject"
            ),
            "score": (
                gate_record.get("score") if gate_record.get("duplicate_of") is not None else None
            ),
            "duplicate_of": gate_record.get("duplicate_of"),
            "commit": committed["commit"],
            "descriptor": current_proposal["descriptor"],
            "sources": cited_sources,
            "lead": lead_id,
            "lead_claim": lead_claim,
            "prior_hits": prior_hits(prior_records),
            "prior_art_sources": prior_sources,
            "offered_sources": sorted(offered),
            "worker_search_cell": common["search_cell"],
            "worker_searches": searches_used,
            "idea": current_proposal["idea"],
            "rationale": current_proposal.get("rationale", ""),
            "predicted_delta": current_proposal["predicted_delta"],
            "role": role,
            "reasons": gate_record.get("reasons", []),
            "attempts": attempts,
            "branch": committed["branch"],
        }
        if not any(reason.startswith("invalid-descriptor") for reason in candidate["reasons"]):
            record_vocab_extension(
                out_dir,
                profile,
                current_proposal["descriptor"],
                agent=agent,
                round_num=round_num,
                idea=current_proposal["idea"],
            )
        if candidate["status"] == "duplicate":
            return with_call_ids(candidate)
        if gate_pass:
            return with_call_ids(candidate)
        common["reasons"] = "; ".join(gate_record.get("reasons", []))
        if attempt == 2 and arm not in METER_OFF_ARMS:
            fallback = assigned_cell_repair(
                agent=agent,
                round_num=round_num,
                arm=arm,
                role=role,
                status=status,
                profile=profile,
                out_dir=out_dir,
                assigned_cells=assigned_cells,
                searches_used=searches_used,
                worker_sources=worker_sources,
                common=common,
                llm_client=llm_client,
                replay=replay,
                proposal=current_proposal,
            )
            if fallback:
                current_proposal, searches_used, worker_sources = fallback
                if current_proposal.get("status") == "reject":
                    return with_call_ids(
                        {
                            "agent": agent,
                            "status": "reject",
                            "score": None,
                            "commit": "",
                            "descriptor": common["assigned_descriptor"],
                            "sources": [],
                            "lead": None,
                            "idea": "assigned cell has no buildable fake target",
                            "predicted_delta": None,
                            "role": role,
                            "reasons": [current_proposal["reason"]],
                            "attempts": attempts,
                        }
                    )
                continue
        if attempt == 1:
            current_proposal = llm_client.call(
                "WORKER_REPAIR",
                agent=agent,
                round_num=round_num,
                values={
                    **common,
                    "problem": "Gate rejected the candidate: "
                    + "; ".join(gate_record.get("reasons", [])),
                    "proposal": json.dumps(current_proposal, sort_keys=True),
                },
            )
            continue
        candidate["status"] = "reject"
        return with_call_ids(candidate)
    return with_call_ids(
        {
            "agent": agent,
            "status": "reject",
            "score": None,
            "commit": "",
            "descriptor": {"mechanism": "baseline", "method": "none"},
            "sources": [],
            "lead": None,
            "idea": "proposal rejected after repair",
            "predicted_delta": None,
            "role": role,
            "reasons": ["proposal rejected after repair"],
            "attempts": attempts,
        }
    )


def acceptance_margin(profile):
    return float(profile.get("accept_margin", profile["eps"]))


def candidate_is_provisional(profile, score, best_val):
    return score < best_val - acceptance_margin(profile)


def critic_accepts(profile, first_score, second_score, previous_best, status):
    return (
        status == "ok"
        and second_score is not None
        and (first_score + float(second_score)) / 2 < previous_best - acceptance_margin(profile)
    )


def apply_critic_verdict(accepted, verdict):
    vetoed = (
        isinstance(verdict, dict)
        and str(verdict.get("verdict") or "").strip().casefold() == "contradicted"
    )
    return (False if vetoed else accepted), vetoed


def prepare_task(task_dir, context_files):
    sandbox.prepare_task(task_dir, context_files)


def preview_file(path, max_chars=6000):
    if path.suffix in (".xlsx", ".xls"):
        try:
            import pandas

            sheets = pandas.read_excel(path, sheet_name=None)
        except ImportError as error:
            return f"(spreadsheet; preview unavailable: {error})"
        text = "\n".join(
            f"[sheet {sheet}] {frame.shape[0]} rows x {frame.shape[1]} cols\n"
            f"{frame.head(5).to_csv(index=False)}"
            for sheet, frame in sheets.items()
        )
    elif path.suffix in (".csv", ".tsv"):
        with path.open(encoding="utf-8", errors="replace") as stream:
            lines = [next(stream, "") for _ in range(6)]
        text = "".join(lines) + "..."
    else:
        text = path.read_text(encoding="utf-8", errors="replace")
    return text if len(text) <= max_chars else text[:max_chars] + "\n...(truncated)"


def set_task_context(task_context):
    TASK["prompt_values"]["task_context"] = task_context
    TASK["prompt_values"]["task_inputs_brief"] = (
        task_context if len(task_context) <= 1500 else task_context[:1500] + "\n...(truncated)"
    )


def run_post_run_hook(out_dir, llm_mode, *, replay=False, on_start=None):
    """Run the task's post-run scorer (ignobel: the Ig Nobel committee) when it can call Tinker.

    on_start is called just before the scorer starts. Returns True when the scorer ran
    successfully (its output should be recorded).
    """
    hook = (TASK or {}).get("post_run")
    if not hook:
        return False
    if replay or llm_mode in {"fake", "ollama"} or not os.environ.get("TINKER_API_KEY"):
        print(
            f"[post_run] {hook} skipped (needs --llm tinker/openai and TINKER_API_KEY, "
            "not --replay)",
            flush=True,
        )
        return False
    if on_start:
        on_start()
    command = [sys.executable, str(TASK["dir"] / hook), "--run", str(out_dir)]
    try:
        proc = subprocess.run(
            command, cwd=TASK["dir"], capture_output=True, text=True, timeout=1800, check=False
        )
    except subprocess.TimeoutExpired:
        print(f"[post_run] {hook} timed out", flush=True)
        return False
    output = (proc.stdout if proc.returncode == 0 else proc.stderr).strip()
    print(f"[post_run] {hook} exit {proc.returncode}: {output[-2000:]}", flush=True)
    return proc.returncode == 0


def refresh_round_context(out_dir, round_num, cells):
    """Append the output of the task's round_context script (if any) to the task inputs."""
    hook = (TASK or {}).get("round_context")
    if not hook:
        return
    command = [
        sys.executable,
        str(TASK["dir"] / hook),
        "--out-dir",
        str(out_dir),
        "--round",
        str(round_num),
        "--cells",
        json.dumps(cells, default=str),
    ]
    try:
        proc = subprocess.run(
            command, cwd=TASK["dir"], capture_output=True, text=True, timeout=240, check=False
        )
        extra = proc.stdout.strip() if proc.returncode == 0 else ""
        if proc.returncode:
            print(f"[round_context] {hook} failed: {proc.stderr.strip()[-300:]}", flush=True)
    except subprocess.TimeoutExpired:
        extra = ""
        print(f"[round_context] {hook} timed out", flush=True)
    limit = TASK.get("round_context_max_chars", 8000)
    set_task_context(
        TASK["base_task_context"] + (f"\n--- this round\n{extra[:limit]}" if extra else "")
    )


def build_task_context(task_dir, context_files, max_chars=6000):
    parts = [
        f"--- {name}\n{preview_file(task_dir / name, max_chars)}"
        for name in context_files
        if (task_dir / name).exists()
    ]
    return "\n".join(parts) or "(none)"


def load_task(name):
    task_dir = TESTCASES / name
    config = json.loads((task_dir / "task.json").read_text(encoding="utf-8"))
    target = f"testcases/{name}/{config['editable']}"
    context_files = config.get("context_files", [])
    prepare_task(task_dir, context_files)
    task_context = build_task_context(
        task_dir, context_files, config.get("context_max_chars", 6000)
    )
    scout = config.get("scout", {})
    return {
        **config,
        "name": name,
        "dir": task_dir,
        "target": target,
        "profile": task_dir / "boredom_profile.json",
        "base_task_context": task_context,
        "prompt_values": {
            "task_brief": config["brief"],
            "target_file": target,
            "task_context": task_context,
            "task_inputs_brief": (
                task_context
                if len(task_context) <= 1500
                else task_context[:1500] + "\n...(truncated)"
            ),
            "scout_focus": (
                f"Task-specific search focus: {scout['goal']}. {scout.get('channels', '')}"
                if scout.get("goal")
                else ""
            ),
            "scout_pick_focus": (
                f"For this task, prefer a source that {scout['pick_criterion']}."
                if scout.get("pick_criterion")
                else ""
            ),
        },
    }


CANDIDATE_DIFF_MAX_CHARS = 20000


def write_candidate_diff(repo, commit, out_dir):
    """Save the candidate's diff (capped) next to its log for the viewer."""
    diff = git(repo, "show", "--format=%s%n", "--stat", "--patch", commit, check=False)
    if diff.returncode != 0:
        return
    text = diff.stdout
    if len(text) > CANDIDATE_DIFF_MAX_CHARS:
        text = text[:CANDIDATE_DIFF_MAX_CHARS] + "\n... [diff truncated]\n"
    (Path(out_dir) / f"{commit}.diff").write_text(text, encoding="utf-8")


def local_task_result(repo, commit, out_dir, role="candidate"):
    """Score a commit's version of the task's editable file with the frozen evaluator."""
    log_path = Path(out_dir) / f"{commit}.log"
    log_path.parent.mkdir(parents=True, exist_ok=True)
    source = git(repo, "show", f"{commit}:{TARGET_FILE}", check=False)
    result = None
    log = source.stderr
    if source.returncode == 0:
        if role == "candidate":
            write_candidate_diff(repo, commit, out_dir)
        # Evaluators that log their own records (ignobel studies) tag them with this.
        # Candidate logs live in <out>/runs, critic logs in <out>/runs/critic_confirmation.
        run_settings = {}
        for parent in list(Path(out_dir).parents)[:2]:
            try:
                run_settings = json.loads((parent / "run.json").read_text(encoding="utf-8"))
                break
            except (OSError, json.JSONDecodeError):
                continue
        eval_context = {"commit": commit, "role": role}
        eval_context["exa_enabled"] = (
            run_settings["exa"] == "on" and bool(os.environ.get("EXA_API_KEY"))
            if "exa" in run_settings
            else os.environ.get("EXA", "").casefold() != "off"
            and bool(os.environ.get("EXA_API_KEY"))
        )
        # Fake runs are gate-only; otherwise IGNOBEL_COMMITTEE (default on) is inherited.
        committee_flag = "off" if run_settings.get("llm") == "fake" else None
        previous = os.environ.get("TASK_EVAL_CONTEXT")
        previous_committee_flag = os.environ.get("IGNOBEL_COMMITTEE")
        if committee_flag is not None:
            os.environ["IGNOBEL_COMMITTEE"] = committee_flag
        os.environ["TASK_EVAL_CONTEXT"] = json.dumps(eval_context)
        try:
            result = sandbox.evaluate_task(TASK["dir"], source.stdout)
        finally:
            if previous is None:
                os.environ.pop("TASK_EVAL_CONTEXT", None)
            else:
                os.environ["TASK_EVAL_CONTEXT"] = previous
            if committee_flag is not None:
                if previous_committee_flag is None:
                    os.environ.pop("IGNOBEL_COMMITTEE", None)
                else:
                    os.environ["IGNOBEL_COMMITTEE"] = previous_committee_flag
        log = result.get("stdout", "") + result.get("stderr", "")
        if role == "critic" and log_path.exists():
            log_path = Path(out_dir) / f"{commit}.critic.log"
    log_path.write_text(log, encoding="utf-8")
    loss = result.get("loss") if result and result.get("status") == "ok" else None
    return {
        "commit": commit,
        "loss": loss,
        "status": result.get("status", "crash") if result else "crash",
        "reason": result.get("reason") if result else "candidate_source_unavailable",
    }


def run_evaluations(repo, commits, out_dir, role="candidate"):
    if not commits:
        return {}, ""
    results = {commit: local_task_result(repo, commit, out_dir, role) for commit in commits}
    for commit, result in results.items():
        score = result["loss"]
        print(f"{commit}\t{score if score is None else f'{score:.6f}'}\t{result['status']}")
    return results, ""


def critic_confirmation_result(repo, commit, first_score, out_dir):
    if TASK.get("deterministic"):
        return {
            "loss": first_score,
            "status": "ok",
            "critic_rerun": "skipped (deterministic)",
        }
    results, _ = run_evaluations(repo, [commit], out_dir, role="critic")
    return results[commit]


def add_result_event(profile, ledger_path, candidate, round_num, status, score):
    event = {
        "ts": timestamp(),
        "kind": "candidate",
        "agent": candidate["agent"],
        "status": status,
        "score": score,
        "replicate_score": candidate.get("replicate_score"),
        "descriptor": candidate["descriptor"],
        "sources": candidate.get("sources", []),
        "commit": candidate.get("commit") or None,
        "round": round_num,
        "lead": candidate.get("lead"),
        "description": candidate.get("description")
        or f"[{candidate.get('regime_label', 'EXPLOIT')}] {candidate.get('idea', '')}",
        "role": candidate.get("role"),
        "regime_label": candidate.get("regime_label", "EXPLOIT"),
        "predicted_delta": candidate.get("predicted_delta"),
        "gate_reasons": candidate.get("reasons", []),
        "gate_attempts": candidate.get("attempts", []),
        "critic_rerun": candidate.get("critic_rerun"),
        "llm_call_ids": candidate.get("llm_call_ids", []),
        "critic_call_ids": candidate.get("critic_call_ids", []),
    }
    if candidate.get("duplicate_of") is not None:
        event["duplicate_of"] = candidate["duplicate_of"]
    for key in (
        "novelty",
        "prior_art_pass",
        "prior_art_sources",
        "offered_sources",
        "worker_search_cell",
        "worker_searches",
    ):
        if candidate.get(key) is not None:
            event[key] = candidate[key]
    submitted = meter.submit(profile, ledger_path, event)
    live_publish.changed(ledger_path)
    return submitted


def record_worker_outcomes(out_dir, candidate, round_num, llm_client):
    call_ids = list(dict.fromkeys(candidate.get("llm_call_ids", [])))
    if not call_ids:
        return
    status = candidate.get("status")
    reasons = [str(reason) for reason in candidate.get("reasons", [])]
    attempts = candidate.get("attempts", [])
    if not isinstance(attempts, list):
        attempts = []
    if candidate.get("duplicate_of") is not None or status == "duplicate":
        outcome = "duplicate"
    elif (
        candidate.get("evaluation_status") == "ok"
        and candidate.get("score") is not None
        and status in {"keep", "discard"}
    ):
        outcome = "repaired_then_accepted" if len(call_ids) > 1 else "accepted"
    elif candidate.get("outcome") in {"invalid", "edit_error"}:
        outcome = candidate["outcome"]
    elif any(item.get("edit_error") for item in attempts if isinstance(item, dict)):
        outcome = "edit_error"
    elif (status == "reject" and not attempts and not candidate.get("llm_error")) or any(
        reason.startswith(
            ("invalid proposal", "lead_id must ", "source_ids must ", "unbuildable assignment")
        )
        for reason in reasons
    ):
        outcome = "invalid"
    else:
        outcome = "rejected"
    if outcome in {"rejected", "invalid", "edit_error"} and not reasons:
        evaluation_status = candidate.get("evaluation_status")
        reasons = (
            [f"evaluation status: {evaluation_status}"]
            if evaluation_status
            else ["worker proposal was not accepted"]
        )

    path = Path(out_dir) / "llm_outcomes.jsonl"
    written_call_ids = {record.get("call_id") for record in read_jsonl(path)}
    metadata = getattr(llm_client, "call_metadata", {})
    for call_id in call_ids:
        if call_id in written_call_ids:
            continue
        call = metadata.get(call_id, {})
        record = {
            "call_id": call_id,
            "round": call.get("round", round_num),
            "agent": call.get("agent", candidate.get("agent")),
            "role": call.get("role", candidate.get("role")),
            "outcome": outcome,
        }
        if outcome in {"rejected", "invalid", "edit_error"}:
            record["reasons"] = reasons
        append_jsonl(path, record)
        written_call_ids.add(call_id)


def write_result_memory(
    event,
    *,
    backend,
    mirror,
    log,
    arm,
):
    if event.get("commit"):
        memory_id = f"run:{arm}:{event['commit']}"
        if event.get("kind") == "critic":
            memory_id += f":critic:r{event.get('round')}"
    else:
        memory_id = f"reject:{arm}:r{event.get('round')}-{event.get('agent')}"
    value = event.get("score")
    content = (
        f"autoresearch {arm} round {event.get('round')} by {event.get('agent')}\n"
        f"Idea: {event.get('description', '')}\n"
        f"Outcome: {event.get('status')} (loss "
        f"{'n/a' if value is None else f'{float(value):.6f}'})\n"
        f"Descriptor: {json.dumps(event.get('descriptor'), sort_keys=True)}"
    )
    write_memory_item(
        "result",
        memory_id,
        content,
        event.get("agent") or "conductor",
        {
            "arm": arm,
            "round": event.get("round"),
            "commit": event.get("commit"),
            "loss": value,
            "status": event.get("status"),
            "descriptor": event.get("descriptor"),
            "sources": event.get("sources", []),
            "kind": event.get("kind", "candidate"),
        },
        backend=backend,
        mirror=mirror,
        log=log,
        arm=arm,
    )


def update_critic_tsv(path, record):
    path = Path(path)
    is_new = not path.exists() or path.stat().st_size == 0
    columns = (
        "round",
        "commit",
        "run1_loss",
        "run2_loss",
        "accepted",
        "verdict",
        "why",
        "vetoed",
        "llm_call_ids",
    )
    if not is_new:
        with path.open(newline="", encoding="utf-8") as stream:
            reader = csv.DictReader(stream, delimiter="\t")
            existing_columns = list(reader.fieldnames or ())
            existing_rows = list(reader)
        missing_columns = [
            column for column in ("vetoed", "llm_call_ids") if column not in existing_columns
        ]
        if missing_columns:
            existing_columns.extend(missing_columns)
            for row in existing_rows:
                for column in missing_columns:
                    row[column] = ""
            with path.open("w", newline="", encoding="utf-8") as stream:
                writer = csv.DictWriter(stream, fieldnames=existing_columns, delimiter="\t")
                writer.writeheader()
                writer.writerows(existing_rows)
        columns = tuple(existing_columns)
    with path.open("a", newline="", encoding="utf-8") as stream:
        if is_new:
            writer = csv.DictWriter(stream, fieldnames=columns, delimiter="\t")
            writer.writeheader()
        else:
            writer = csv.DictWriter(stream, fieldnames=columns, delimiter="\t")
        writer.writerow(
            {
                "round": record["round"],
                "commit": record["commit"],
                "run1_loss": "" if record["v1"] is None else f"{record['v1']:.6f}",
                "run2_loss": "" if record["v2"] is None else f"{record['v2']:.6f}",
                "accepted": str(record["accepted"]).lower(),
                "verdict": record["verdict"],
                "why": record["why"],
                "vetoed": str(record.get("vetoed", False)).lower(),
                "llm_call_ids": json.dumps(record.get("llm_call_ids", [])),
            }
        )


# Bulky or re-derivable outputs stay out of the per-round arm commits: the viewer export is
# rebuilt by export_viewer.py, and the logs are committed once, compressed, when the run ends.
ROUND_UNTRACKED = (
    "viewer",
    "runs",
    "exa_cache",
    "literature_cache",
    "llm_log.jsonl",
    "llm_outcomes.jsonl",
    "research_log.jsonl",
    "viewer_publish_log.jsonl",
    "resume_checkpoint.json",
)
FINAL_ARCHIVES = {
    "llm_log.jsonl": "llm_log.jsonl.gz",
    "llm_outcomes.jsonl": "llm_outcomes.jsonl.gz",
    "research_log.jsonl": "research_log.jsonl.gz",
    "runs": "runs.tar.gz",
    "exa_cache": "exa_cache.tar.gz",
    "literature_cache": "literature_cache.tar.gz",
}


def copy_artifacts_to_arm_branch(out_dir, conductor, arm):
    target = conductor / "experiments" / f"swarm_{arm}"
    out_dir = Path(out_dir).resolve()
    target = target.resolve()
    if out_dir != target:
        target.parent.mkdir(parents=True, exist_ok=True)

        def ignore(directory, names):
            return [
                name for name in names if Path(directory) == out_dir and name in ROUND_UNTRACKED
            ]

        shutil.copytree(out_dir, target, dirs_exist_ok=True, ignore=ignore)
    return target


def assert_live_tool_use(
    out_dir,
    *,
    round_num,
    research_start,
    memory_start,
    expect_exa,
    expect_pastdev,
    counts=None,
):
    counts = counts or round_tool_counts(out_dir, research_start, memory_start)
    if expect_exa and counts["exa_searches"] == 0:
        raise RuntimeError(f"ABORT: Exa configured live but made 0 searches in round {round_num}")
    if expect_pastdev and counts["pastdev_uses"] == 0:
        raise RuntimeError(
            f"ABORT: past.dev configured but made 0 recalls/writes in round {round_num}"
        )
    return counts


def round_tool_counts(out_dir, research_start, memory_start):
    research_records = read_jsonl(Path(out_dir) / "research_log.jsonl")[research_start:]
    memory_records = read_jsonl(Path(out_dir) / "memory_log.jsonl")[memory_start:]
    exa_searches = sum(
        1
        for item in research_records
        if item.get("type") == "query"
        and str(item.get("endpoint", "")).strip().casefold().lstrip("/") == "search"
        and not item.get("replay")
    )
    pastdev_recalls = sum(
        1
        for item in memory_records
        if item.get("type") == "recall" and item.get("backend") == "pastdev"
    )
    pastdev_writes = sum(
        1
        for item in memory_records
        if item.get("type") == "write" and item.get("backend") == "pastdev"
    )
    pastdev_uses = sum(
        1
        for item in memory_records
        if item.get("type") in {"recall", "write"} and item.get("backend") == "pastdev"
    )
    return {
        "exa_searches": exa_searches,
        "pastdev_uses": pastdev_uses,
        "pastdev_recalls": pastdev_recalls,
        "pastdev_writes": pastdev_writes,
    }


def _token_count(value):
    if isinstance(value, bool):
        return 0
    try:
        return max(0, int(value or 0))
    except (TypeError, ValueError):
        return 0


def record_round_spend(out_dir, round_num, llm_start, outcome_start, tool_counts):
    llm_records = read_jsonl(Path(out_dir) / "llm_log.jsonl")[llm_start:]
    outcomes = read_jsonl(Path(out_dir) / "llm_outcomes.jsonl")[outcome_start:]
    usage = {"input_tokens": 0, "cached_tokens": 0, "output_tokens": 0, "reasoning_tokens": 0}
    for record in llm_records:
        call_usage = record.get("usage") or {}
        if not isinstance(call_usage, dict):
            continue
        prompt_details = call_usage.get("prompt_tokens_details")
        if not isinstance(prompt_details, dict):
            prompt_details = {}
        completion_details = call_usage.get("completion_tokens_details")
        if not isinstance(completion_details, dict):
            completion_details = {}
        usage["input_tokens"] += _token_count(call_usage.get("prompt_tokens"))
        usage["cached_tokens"] += _token_count(
            call_usage.get("cached_tokens", prompt_details.get("cached_tokens"))
        )
        usage["output_tokens"] += _token_count(call_usage.get("completion_tokens"))
        usage["reasoning_tokens"] += _token_count(
            call_usage.get("reasoning_tokens", completion_details.get("reasoning_tokens"))
        )
    wasted_calls = sum(
        1
        for record in outcomes
        if record.get("outcome") in {"rejected", "duplicate", "invalid", "edit_error"}
    )
    spend = {
        "round": round_num,
        "calls": len(llm_records),
        **usage,
        "wasted_calls": wasted_calls,
        "exa_searches": tool_counts["exa_searches"],
        "pastdev_recalls": tool_counts["pastdev_recalls"],
        "pastdev_writes": tool_counts["pastdev_writes"],
    }
    append_jsonl(Path(out_dir) / "spend_by_round.jsonl", spend)
    print(
        f"round {round_num} spend: calls={spend['calls']} in={spend['input_tokens']} "
        f"cached={spend['cached_tokens']} out={spend['output_tokens']} "
        f"reasoning={spend['reasoning_tokens']} wasted={spend['wasted_calls']} "
        f"Exa searches={spend['exa_searches']} past.dev recalls={spend['pastdev_recalls']} "
        f"writes={spend['pastdev_writes']}",
        flush=True,
    )
    return spend


def record_round_artifacts(publisher, out_dir, conductor, arm, round_num, checkpoint=None):
    """Commit the round's small artifacts and, under the same lock, mark the round complete."""
    with publisher.publish_lock:
        target = copy_artifacts_to_arm_branch(out_dir, conductor, arm)
        commit = commit_arm_artifacts(conductor, target, round_num)
        if checkpoint is not None:
            write_checkpoint(out_dir, round_num=round_num, arm_commit=commit, **checkpoint)
        return commit


def record_final_artifacts(publisher, out_dir, conductor, arm):
    """Commit the bulky logs once, compressed, when the run ends."""
    with publisher.publish_lock:
        target = copy_artifacts_to_arm_branch(out_dir, conductor, arm)
        out_dir = Path(out_dir)
        for name, archive in FINAL_ARCHIVES.items():
            source = out_dir / name
            if source.is_file():
                with source.open("rb") as raw, gzip.GzipFile(target / archive, "wb", mtime=0) as gz:
                    shutil.copyfileobj(raw, gz)
            elif source.is_dir() and any(source.iterdir()):
                with tarfile.open(target / archive, "w:gz") as tar:
                    tar.add(source, arcname=name)
        return commit_arm_artifacts(conductor, target, None, message="Record final swarm logs")


def commit_arm_artifacts(conductor, target, round_num, message=None):
    relative = target.relative_to(conductor)
    excluded = [f":(exclude){relative / name}" for name in ROUND_UNTRACKED]
    git(conductor, "add", "-f", "--", str(relative), *excluded)
    cached = git(conductor, "diff", "--cached", "--quiet", check=False)
    if cached.returncode not in {0, 1}:
        raise RuntimeError("unable to inspect staged arm artifacts")
    if cached.returncode == 1:
        git(
            conductor,
            "-c",
            "user.name=Autoresearch Swarm",
            "-c",
            "user.email=swarm@localhost",
            "commit",
            "-m",
            message or f"Record swarm artifacts for round {round_num}",
        )
    return git_text(conductor, "rev-parse", "HEAD")


CHECKPOINT_NAME = "resume_checkpoint.json"
CHECKPOINT_SKIP = {
    CHECKPOINT_NAME,
    "run.json",
    "viewer_frontier.json",
    "viewer_publish_log.jsonl",
    "held_out_test.json",
}


def _checkpoint_files(out_dir):
    for path in sorted(Path(out_dir).iterdir()):
        if path.is_file() and path.name not in CHECKPOINT_SKIP and not path.name.startswith("."):
            yield path


def write_checkpoint(out_dir, *, round_num, arm_commit, best_val, best_commit, viewer_dir):
    """Record the state at a round boundary so --resume can drop a half-written round.

    Append-only logs are kept as byte lengths; small rewritten files as their content.
    """
    sizes, contents = {}, {}
    for path in _checkpoint_files(out_dir):
        if path.suffix == ".jsonl":
            sizes[path.name] = path.stat().st_size
        else:
            contents[path.name] = path.read_text(encoding="utf-8")
    viewer = None
    if viewer_dir is not None and (Path(viewer_dir) / "events.ndjson").exists():
        viewer_dir = Path(viewer_dir)
        viewer = {
            "events_bytes": (viewer_dir / "events.ndjson").stat().st_size,
            "keyframes": sorted(path.name for path in (viewer_dir / "keyframes").glob("*")),
        }
    data = {
        "round": round_num,
        "arm_commit": arm_commit,
        "best_val": best_val,
        "best_commit": best_commit,
        "jsonl_bytes": sizes,
        "files": contents,
        "viewer": viewer,
        "ts": timestamp(),
    }
    path = Path(out_dir) / CHECKPOINT_NAME
    temp = path.with_name(f".{path.name}.tmp")
    temp.write_text(json.dumps(data, indent=2, sort_keys=True) + "\n", encoding="utf-8")
    os.replace(temp, path)


def read_checkpoint(out_dir):
    path = Path(out_dir) / CHECKPOINT_NAME
    if not path.exists():
        raise ValueError(f"cannot resume: {path} is missing (the run predates --resume)")
    return json.loads(path.read_text(encoding="utf-8"))


def restore_checkpoint(out_dir, checkpoint):
    """Truncate the out dir back to the checkpointed round boundary."""
    sizes, contents = checkpoint["jsonl_bytes"], checkpoint["files"]
    for path in _checkpoint_files(out_dir):
        if path.name in sizes:
            size = sizes[path.name]
            if path.stat().st_size < size:
                raise ValueError(f"cannot resume: {path} is shorter than its checkpoint")
            with path.open("r+b") as handle:
                handle.truncate(size)
        elif path.name not in contents:
            path.unlink()
    for name, size in sizes.items():
        if not (Path(out_dir) / name).exists():
            if size:
                raise ValueError(f"cannot resume: {Path(out_dir) / name} is missing")
            (Path(out_dir) / name).touch()
    for name, text in contents.items():
        (Path(out_dir) / name).write_text(text, encoding="utf-8")


def restore_viewer(viewer_dir, state):
    """Cut a published recording back to its checkpointed prefix; later publishes append."""
    viewer_dir = Path(viewer_dir)
    events = viewer_dir / "events.ndjson"
    if state is None or not events.exists() or events.stat().st_size < state["events_bytes"]:
        if viewer_dir.exists():
            shutil.rmtree(viewer_dir)
        return
    with events.open("r+b") as handle:
        handle.truncate(state["events_bytes"])
    keep = set(state["keyframes"])
    for path in (viewer_dir / "keyframes").glob("*"):
        if path.name not in keep:
            path.unlink()


def delete_tags_after(repo, prefix, round_num):
    """Drop tags a half-written round left behind so the retried round can reuse the names."""
    for tag in git_text(repo, "tag", "--list", f"{prefix}/*").splitlines():
        head = tag[len(prefix) + 1 :].split("-", 1)[0]
        if head.isdigit() and int(head) > round_num:
            git(repo, "tag", "-d", tag)


def write_round_summary(events, candidate_count):
    successful = [
        event
        for event in events
        if event.get("kind") in {"baseline", "candidate", "critic"}
        and event.get("status") == "keep"
        and event.get("score") is not None
    ]
    best = min(successful, key=lambda event: float(event["score"])) if successful else None
    distinct_cells = {
        f"{event['descriptor']['mechanism']}/{event['descriptor']['method']}"
        for event in events
        if event.get("kind") == "candidate" and isinstance(event.get("descriptor"), dict)
    }
    regimes = {}
    for event in events:
        if event.get("kind") != "candidate":
            continue
        regime = event.get("regime_label", "EXPLOIT")
        regimes[regime] = regimes.get(regime, 0) + 1
    if candidate_count in {10, 20, 30, 40}:
        value = "n/a" if best is None else f"{float(best['score']):.6f}"
        print(
            f"best-so-far at {candidate_count} candidate runs: {value}; "
            f"{len(distinct_cells)} descriptor cells; regime counts={regimes}"
        )


def critic_lesson_memory(
    lesson,
    arm,
    round_num,
    *,
    backend,
    mirror,
    log,
):
    if not isinstance(lesson, dict) or not lesson.get("text"):
        return
    basin = safe_slug(lesson.get("basin") or "general")
    memory_id = f"lesson-{arm}-{basin}"
    write_memory_item(
        "lesson",
        memory_id,
        str(lesson["text"]),
        "critic",
        {"arm": arm, "round": round_num, "basin": basin},
        backend=backend,
        mirror=mirror,
        log=log,
        arm=arm,
    )


@contextmanager
def arm_environment(
    arm, exa_enabled, memory_backend=None, run_id=None, rollbacks=None, keyless=False
):
    names = (
        "AUTORESEARCH_ARM",
        "AUTORESEARCH_RUN_ID",
        "AUTORESEARCH_RUN_ROLLBACKS",
        "EXA",
        "LITERATURE",
        "BOREDOM",
        "PRIOR_ART",
        "GROUNDING",
        "MEMORY_BACKEND",
    )
    saved = {name: os.environ.get(name) for name in names}
    os.environ["AUTORESEARCH_ARM"] = arm
    if run_id is not None:
        os.environ["AUTORESEARCH_RUN_ID"] = run_id
    if rollbacks:
        os.environ["AUTORESEARCH_RUN_ROLLBACKS"] = json.dumps(rollbacks)
    else:
        os.environ.pop("AUTORESEARCH_RUN_ROLLBACKS", None)
    os.environ["EXA"] = "on" if exa_enabled else "off"
    if keyless and not exa_enabled:
        os.environ["LITERATURE"] = "keyless"
    else:
        os.environ.pop("LITERATURE", None)
    if memory_backend:
        os.environ["MEMORY_BACKEND"] = memory_backend
    elif arm == "D":
        os.environ["MEMORY_BACKEND"] = "local"
    else:
        os.environ["MEMORY_BACKEND"] = "pastdev"
    if arm in METER_OFF_ARMS:
        os.environ["BOREDOM"] = "off"
    else:
        os.environ.pop("BOREDOM", None)
    if exa_enabled:
        os.environ["PRIOR_ART"] = "required"
    else:
        os.environ.pop("PRIOR_ART", None)
        os.environ["GROUNDING"] = "off"
    try:
        yield
    finally:
        for name, value in saved.items():
            if value is None:
                os.environ.pop(name, None)
            else:
                os.environ[name] = value


def configure_task(args):
    global TASK, TARGET_FILE
    TASK = load_task(args.task)
    TARGET_FILE = TASK["target"]
    os.environ["AUTORESEARCH_TASK"] = args.task
    os.environ["AUTORESEARCH_TARGET"] = TARGET_FILE
    return ROOT / "prompts"


def redact_command(argv):
    redacted = []
    redact_next = False
    secret_value = re.compile(
        r"(?i)(sk-[a-z0-9_-]{12,}|gh[pousr]_[a-z0-9]{20,}|xox[baprs]-[a-z0-9-]+|"
        r"[a-z0-9_-]*(?:key|token|secret|password|credential|auth)[a-z0-9_-]*=\S+)"
    )
    for arg in argv:
        if redact_next:
            redacted.append("[REDACTED]")
            redact_next = False
            continue
        if secret_value.search(arg):
            redacted.append("[REDACTED]")
        elif arg.startswith("-") and re.search(
            r"key|token|secret|password|credential|auth", arg, re.I
        ):
            redacted.append(arg)
            redact_next = True
        else:
            redacted.append(arg)
    return redacted


def _write_run_artifact(out_dir, data):
    path = Path(out_dir) / "run.json"
    path.write_text(json.dumps(data, indent=2, sort_keys=True) + "\n", encoding="utf-8")


def publish_viewer_state(out_dir, dest, *, final=False, status="running"):
    if not dest:
        return
    out_dir = Path(out_dir)
    import export_viewer

    try:
        export_viewer.publish(out_dir, dest, final=final, status=status)
    except Exception as error:
        print(
            f"viewer publish failed: {type(error).__name__}: {error}", file=sys.stderr, flush=True
        )
        try:
            export_viewer.log_publish_issue(
                out_dir,
                kind=type(error).__name__,
                message=str(error),
                final=final,
                status=status,
            )
        except Exception as log_error:
            print(f"viewer publish log failed: {type(log_error).__name__}", file=sys.stderr)
        if final:
            # The final publish must not fail silently: retry once so the manifest
            # carries publish_errors, then re-raise for the caller to report.
            try:
                export_viewer.publish(out_dir, dest, final=final, status=status)
                return
            except Exception:
                pass
            raise


RESUMED_SETTINGS = (
    "task",
    "arm",
    "seed",
    "llm",
    "model",
    "critic_model",
    "workers",
    "supervisor_model",
    "worker_tokens",
    "supervisor_tokens",
    "ollama_context",
    "exa",
    "literature",
    "memory_backend",
)
RUN_DEFAULTS = {
    "arm": "B",
    "rounds": 10,
    "llm": "openai",
    "exa": "on",
    "workers": 4,
    "worker_tokens": 600,
    "supervisor_tokens": 4096,
    "ollama_context": 8192,
}


def resolve_run_args(args):
    """Fill unset options from defaults, or from run.json when resuming; None when fresh."""
    if not getattr(args, "resume", None):
        for key, value in RUN_DEFAULTS.items():
            if getattr(args, key, None) is None:
                setattr(args, key, value)
        if not args.task:
            raise ValueError("--task is required unless --resume is given")
        if task_research_off(args.task):
            args.exa = "off"
            args.literature = "off"
            print(
                f"swarm.py: task {args.task} sets research=off; forcing Exa and keyless "
                "literature off",
                file=sys.stderr,
            )
        return None
    out_dir = Path(args.resume).resolve()
    if args.out and Path(args.out).resolve() != out_dir:
        raise ValueError("--out must match --resume (or be omitted)")
    try:
        run_artifact = json.loads((out_dir / "run.json").read_text(encoding="utf-8"))
    except (OSError, ValueError) as error:
        raise ValueError(f"cannot resume {out_dir}: unreadable run.json ({error})") from None
    if not run_artifact.get("branch") or not run_artifact.get("repo"):
        raise ValueError(f"cannot resume {out_dir}: the run predates --resume support")
    if run_artifact.get("status") == "finished":
        raise ValueError(f"cannot resume {out_dir}: the run already finished")
    research_task = run_artifact.get("task") or args.task
    research_off = task_research_off(research_task)
    if research_off:
        args.exa = "off"
        args.literature = "off"
        print(
            f"swarm.py: task {research_task} sets research=off; forcing Exa and "
            "keyless literature off",
            file=sys.stderr,
        )
    for key in RESUMED_SETTINGS:
        if research_off and key in {"exa", "literature"}:
            setattr(args, key, "off")
            continue
        stored, given = run_artifact.get(key), getattr(args, key, None)
        if given is not None and key in run_artifact and given != stored:
            raise ValueError(f"--{key.replace('_', '-')} {given} conflicts with the run's {stored}")
        if given is None:
            setattr(args, key, stored)
    if "literature" not in run_artifact and args.literature is None:
        args.literature = "off"  # runs from before --literature never researched keylessly
    if args.rounds is None:
        args.rounds = run_artifact.get("rounds", RUN_DEFAULTS["rounds"])
    if (out_dir / "held_out_test.json").exists() and args.rounds > run_artifact.get(
        "rounds", RUN_DEFAULTS["rounds"]
    ):
        raise ValueError("cannot extend a run after its held-out test has been graded")
    if args.viewer_dest is None and run_artifact.get("viewer_dest"):
        args.viewer_dest = run_artifact["viewer_dest"]
    if run_artifact.get("viewer") is False:
        args.no_viewer = True
    if run_artifact.get("no_push"):
        args.no_push = True
    args.out = str(out_dir)
    args.repo = run_artifact["repo"]
    return {"out_dir": out_dir, "run": run_artifact, "checkpoint": read_checkpoint(out_dir)}


def plan_local_workers(
    client,
    agents,
    round_num,
    profile,
    status,
    base_commit,
    best_val,
    repo,
    out_dir,
    backend,
    mirror,
    memory_log,
    arm,
):
    recalled = recall_memory(
        "prior experiments, failures and promising directions for " + TASK.get("brief", "")[:200],
        "conductor",
        backend=backend,
        mirror=mirror,
        log=memory_log,
        arm=arm,
        limit=8,
    )
    values = {
        "task_brief": TASK.get("brief", ""),
        "agents": json.dumps(list(agents)),
        "source": git(repo, "show", f"{base_commit}:{TARGET_FILE}").stdout,
        "vocab": json.dumps(vocab_with_extensions(profile, out_dir)),
        "task_inputs": TASK.get("prompt_values", {}).get("task_context", "none"),
        "history": memory_text(recalled),
        "best_loss": best_val,
        "regime": status["regime"],
    }
    result = client.call("SUPERVISOR", agent="conductor", round_num=round_num, values=values)
    tasks = result.get("tasks")
    if not isinstance(tasks, list) or len(tasks) != len(agents):
        raise ValueError("Supervisor must assign exactly one task to each worker")
    assignments = {}
    for task in tasks:
        if not isinstance(task, dict):
            raise ValueError("Invalid supervisor task")
        agent, instruction = task.get("agent"), task.get("instruction")
        if agent not in agents or agent in assignments:
            raise ValueError("Supervisor returned an unknown or duplicate worker")
        if not isinstance(instruction, str) or not instruction.strip() or len(instruction) > 1600:
            raise ValueError("Supervisor instruction must be 1-1600 characters")
        assignments[agent] = instruction
    if len(set(assignments.values())) != len(agents):
        raise ValueError("Supervisor assigned identical work to multiple workers")
    append_jsonl(
        out_dir / "supervisor_plans.jsonl",
        {
            "ts": timestamp(),
            "round": round_num,
            "model": client.role_models["SUPERVISOR"],
            "tasks": tasks,
            "llm_call_id": client.last_call_id,
        },
    )
    write_memory_item(
        "assignment",
        f"supervisor-{arm}-{round_num}",
        json.dumps(tasks),
        "conductor",
        {"round": round_num},
        backend=backend,
        mirror=mirror,
        log=memory_log,
        arm=arm,
    )
    return assignments


def llm_failure_candidate(agent, role, error):
    return {
        "agent": agent,
        "status": "crash",
        "score": None,
        "commit": "",
        "descriptor": {"mechanism": "baseline", "method": "none"},
        "sources": [],
        "lead": None,
        "idea": "LLM call failed",
        "predicted_delta": None,
        "role": role,
        "reasons": [f"llm_error: {str(error)[:500]}"],
        "attempts": [],
        "llm_error": True,
    }


def _orchestrate(args, publish_state, cleanup):
    resume = resolve_run_args(args)
    if args.rounds < 1 or args.rounds > 50:
        raise ValueError("--rounds must be between 1 and 50")
    prompt_dir = configure_task(args)
    if args.arm not in {"A", "B", "C", "D", "S"}:
        raise ValueError("--arm must be A, B, C, D, or S")
    worker_count = getattr(args, "workers", None) or 4
    if not 1 <= worker_count <= 12:
        raise ValueError("--workers must be between 1 and 12")
    if getattr(args, "supervisor_model", None) and args.llm != "ollama":
        raise ValueError("--supervisor-model currently requires --llm ollama")
    agents = (
        AGENTS[:1] if args.arm == "S" else tuple(f"worker-{n}" for n in range(1, worker_count + 1))
    )
    repo = Path(args.repo).resolve()
    git_text(repo, "rev-parse", "--show-toplevel")
    profile_path = TASK["profile"].resolve()
    profile = meter.load_profile(profile_path)
    if resume is not None:
        if resume["run"].get("profile_sha256") != profile["_hash"]:
            raise ValueError(
                "cannot resume: the task's boredom profile changed since the run began"
            )
        start_commit = resume["run"]["swarm_commit"]
        if resume["checkpoint"]["round"] > args.rounds:
            raise ValueError(
                f"cannot resume: round {resume['checkpoint']['round']} is already complete, "
                f"past --rounds {args.rounds}; pass a larger --rounds to extend the run"
            )
    else:
        start_commit = git_text(repo, "rev-parse", "HEAD")
    research_source = resolve_research_source(args)
    exa_enabled = research_source == "exa"
    if research_source == "keyless" and args.exa == "on" and args.arm != "C":
        print(
            "swarm.py: EXA_API_KEY is not set; researching with keyless OpenAlex, arXiv "
            "and PubMed search instead of Exa",
            file=sys.stderr,
        )
    effective_no_push = args.no_push or args.llm in {"fake", "ollama"}
    memory_override = args.memory_backend or os.environ.get("MEMORY_BACKEND")
    if memory_override:
        memory_backend = memory.selected_backend(memory_override, args.arm)
    else:
        memory_backend = "local" if args.arm == "D" else "pastdev"
    preflight(args, memory_backend, exa_enabled)
    cleanup.enter_context(arm_lock(repo / ".swarm_worktrees" / args.arm))
    if resume is not None:
        branch, conductor, agents_root = resume_arm_worktrees(
            repo,
            args.arm,
            resume["run"]["branch"],
            resume["checkpoint"]["arm_commit"],
            resume["out_dir"],
        )
    else:
        branch, conductor, agents_root = create_arm_worktrees(repo, args.arm, start_commit)
    if args.out:
        out_dir = Path(args.out).resolve()
    else:
        out_dir = conductor / "experiments" / f"swarm_{args.arm}"
    out_dir.mkdir(parents=True, exist_ok=True)
    (out_dir / "runs").mkdir(parents=True, exist_ok=True)
    (out_dir / "exa_cache").mkdir(parents=True, exist_ok=True)
    viewer_dest = (
        None
        if args.no_viewer
        else (Path(args.viewer_dest).resolve() if args.viewer_dest else out_dir / "viewer")
    )
    run_id_path = out_dir / "run_id"
    if resume is None and run_id_path.exists():
        raise ValueError(f"{out_dir} already holds a run; resume it with --resume {out_dir}")
    if not run_id_path.exists():
        run_id_path.write_text(uuid.uuid4().hex + "\n", encoding="utf-8")
    run_id = run_id_path.read_text(encoding="utf-8").strip()
    if not run_id:
        raise ValueError("swarm run_id must not be empty")
    import export_viewer

    viewer_run_id = (resume["run"].get("viewer_run_id") if resume else None) or (
        export_viewer.autoresearch_run_id(args.arm, run_id)
    )
    viewer_run_dir = None if viewer_dest is None else viewer_dest / viewer_run_id
    if resume is not None:
        restore_checkpoint(out_dir, resume["checkpoint"])
        if viewer_run_dir is not None:
            restore_viewer(viewer_run_dir, resume["checkpoint"]["viewer"])
        viewer_frontier(out_dir, resume["checkpoint"]["round"], "finish")
    tag_prefix = f"run/swarm_{args.arm}/{run_id[:8]}"
    delete_tags_after(repo, tag_prefix, resume["checkpoint"]["round"] if resume else 0)
    publish_state.update({"out_dir": out_dir, "dest": viewer_dest})
    publisher = live_publish.Publisher(
        lambda **kwargs: publish_viewer_state(
            out_dir,
            viewer_dest,
            **{"status": publish_state.get("live_status", "running"), **kwargs},
        ),
        settle=2.0,
        heartbeat=None if viewer_dest is None else HEARTBEAT_SECONDS,
        on_heartbeat=lambda: viewer_heartbeat(viewer_dest, viewer_run_id),
    )
    publish_state["publisher"] = publisher
    provenance = {"swarm_commit": start_commit, "command": redact_command(sys.argv)}
    profile_artifact = {key: value for key, value in profile.items() if not key.startswith("_")}
    (out_dir / "boredom_profile.json").write_text(
        json.dumps(profile_artifact, indent=2, sort_keys=True) + "\n", encoding="utf-8"
    )
    if resume is not None:
        resumed = resume["run"]
        resumed["status"] = "running"
        resumed["rounds"] = args.rounds
        resumed.setdefault("resumes", []).append(
            {
                "ts": timestamp(),
                "after_round": resume["checkpoint"]["round"],
                "checkpoint_ts": resume["checkpoint"].get("ts"),
                "command": redact_command(sys.argv),
            }
        )
        _write_run_artifact(out_dir, resumed)
        memory_rollbacks = [
            {"epoch": epoch, "after": entry.get("checkpoint_ts")}
            for epoch, entry in enumerate(resumed["resumes"], 1)
        ]
    else:
        _write_run_artifact(
            out_dir,
            {
                "run_id": run_id,
                "viewer_run_id": viewer_run_id,
                "task": args.task,
                "arm": args.arm,
                "status": "running",
                "seed": args.seed,
                "rounds": args.rounds,
                "workers": len(agents),
                "llm": args.llm,
                "critic_model": args.critic_model,
                "exa": "on" if exa_enabled else "off",
                "literature": args.literature,
                "research": research_source,
                "profile_path": "boredom_profile.json",
                "profile_sha256": profile["_hash"],
                "repo": str(repo),
                "branch": branch,
                "viewer": not args.no_viewer,
                "no_push": bool(args.no_push),
                "viewer_dest": str(Path(args.viewer_dest).resolve()) if args.viewer_dest else None,
                **provenance,
            },
        )
    os.environ["TASK_RESEARCH_LOG"] = str(out_dir / "research_log.jsonl")
    ledger_path = out_dir / "ledger.jsonl"
    results_path = out_dir / "results.tsv"
    critic_path = out_dir / "critic.tsv"
    memory_mirror = out_dir / "memory.jsonl"
    memory_log = out_dir / "memory_log.jsonl"
    llm_client = llm.LLMClient(
        mode=args.llm,
        model=args.model,
        role_models={
            "CRITIC": args.critic_model,
            "CRITIC_NOVELTY": args.critic_model,
            "SUPERVISOR": getattr(args, "supervisor_model", None),
        },
        log_path=out_dir / "llm_log.jsonl",
        prompt_dir=prompt_dir,
        replay=args.replay,
        seed=args.seed,
        fake_delay=getattr(args, "fake_delay", 0.0) or 0.0,
        worker_tokens=args.worker_tokens or 600,
        supervisor_tokens=args.supervisor_tokens or 4096,
        ollama_context=args.ollama_context or 8192,
    )
    critic_model = llm_client.role_models.get("CRITIC", llm_client.model)
    provenance.update({"seed": args.seed, "model": llm_client.model, "critic_model": critic_model})
    run_artifact = json.loads((out_dir / "run.json").read_text(encoding="utf-8"))
    run_artifact.update(
        {
            "model": llm_client.model,
            "critic_model": critic_model,
            "memory_backend": memory_backend,
            "supervisor_model": getattr(args, "supervisor_model", None),
            "worker_tokens": args.worker_tokens or 600,
            "supervisor_tokens": args.supervisor_tokens or 4096,
            "ollama_context": args.ollama_context or 8192,
        }
    )
    _write_run_artifact(out_dir, run_artifact)
    if not critic_path.exists():
        critic_path.write_text(
            "round\tcommit\trun1_loss\trun2_loss\taccepted\tverdict\twhy\tvetoed\tllm_call_ids\n",
            encoding="utf-8",
        )

    ledger_baseline = next(
        (event for event in meter.read_ledger(ledger_path) if event.get("kind") == "baseline"), None
    )
    if resume is not None and ledger_baseline is not None:
        baseline = {"loss": ledger_baseline["score"], "status": "ok"}
    else:
        baseline = local_task_result(repo, start_commit[:7], out_dir / "runs")
    if baseline["loss"] is None:
        raise RuntimeError(
            f"task {TASK['name']} baseline failed to score: "
            f"{baseline['status']} ({baseline['reason']}); see {out_dir / 'runs'}"
        )
    baseline_commit, baseline_val = start_commit[:7], baseline["loss"]
    if resume is None:
        record_score_cache(repo, out_dir, {baseline_commit: baseline})
        memory_rollbacks = []
    TASK["prompt_values"]["baseline_loss"] = f"{baseline_val:.6f}"

    with arm_environment(
        args.arm,
        exa_enabled,
        memory_backend,
        run_id=run_id,
        rollbacks=memory_rollbacks,
        keyless=research_source == "keyless",
    ):
        if not meter.read_ledger(ledger_path):
            meter.submit(
                profile,
                ledger_path,
                {
                    "ts": timestamp(),
                    "kind": "baseline",
                    "agent": "baseline",
                    "status": "keep",
                    "score": baseline_val,
                    "descriptor": {"mechanism": "baseline", "method": "none"},
                    "sources": [],
                    "commit": baseline_commit,
                    "round": 0,
                    "lead": None,
                    "description": "baseline",
                },
            )
        write_results(ledger_path, results_path)
        best_val = baseline_val
        best_metric_commit = baseline_commit
        latest_candidate = None
        tags_this_run = []
        if resume is not None and not effective_no_push:
            tags_this_run = git_text(repo, "tag", "--list", f"{tag_prefix}/*").split()
        if resume is not None:
            first_round = resume["checkpoint"]["round"] + 1
            best_val = resume["checkpoint"]["best_val"]
            best_metric_commit = resume["checkpoint"]["best_commit"]
            if first_round > args.rounds:
                print(
                    f"swarm.py: resuming run {run_id}: all {args.rounds} rounds are complete; "
                    "rerunning post-run scoring and finalization",
                    file=sys.stderr,
                )
            else:
                print(f"swarm.py: resuming run {run_id} at round {first_round}", file=sys.stderr)
        else:
            first_round = 1
            record_round_artifacts(
                publisher,
                out_dir,
                conductor,
                args.arm,
                0,
                checkpoint={
                    "best_val": best_val,
                    "best_commit": best_metric_commit,
                    "viewer_dir": viewer_run_dir,
                },
            )

        for round_num in range(first_round, args.rounds + 1):
            research_start = len(read_jsonl(out_dir / "research_log.jsonl"))
            memory_start = len(read_jsonl(memory_log))
            llm_start = len(read_jsonl(out_dir / "llm_log.jsonl"))
            outcome_start = len(read_jsonl(out_dir / "llm_outcomes.jsonl"))
            events = meter.read_ledger(ledger_path)
            allocation = allocate_roles(profile, events, agents, args.arm, research_source != "off")
            status = {
                **allocation,
                "ledger_sha256": allocation["ledger_sha256"],
                "profile_sha256": profile["_hash"],
            }
            if allocation["regime"] == "CONVERGED" or known_optimum_reached(best_val):
                write_converged(
                    out_dir,
                    profile,
                    events,
                    status,
                    round_num=round_num,
                    best_commit=best_metric_commit,
                    best_val=best_val,
                    reason=("known_optimum_loss" if known_optimum_reached(best_val) else "meter"),
                )
                break
            events_for_scouts = list(events)
            cell_suggestions = (
                [] if args.arm in METER_OFF_ARMS else suggest_cells(profile, events_for_scouts)
            )
            allocation["suggested_cells"] = cell_suggestions
            status["suggested_cells"] = cell_suggestions
            append_assignment(
                allocation,
                out_dir=out_dir,
                backend=memory_backend,
                mirror=memory_mirror,
                memory_log=memory_log,
                arm=args.arm,
                round_num=round_num,
                provenance=provenance,
            )
            # After the assignment so sources it logs fall in this round of the viewer timeline.
            refresh_round_context(out_dir, round_num, cell_suggestions)
            status["per_agent_B"] = allocation["per_agent_B"]
            viewer_frontier(out_dir, round_num, "assign")
            if viewer_dest:
                live_publish.watch(out_dir, publisher.request)
                publisher.request()
            leads = run_scouts(
                [] if llm_client.supervised else allocation["scouts"],
                profile=profile,
                events=events_for_scouts,
                status=status,
                out_dir=out_dir,
                llm_client=llm_client,
                backend=memory_backend,
                mirror=memory_mirror,
                memory_log=memory_log,
                arm=args.arm,
                round_num=round_num,
                best_commit=best_metric_commit,
                best_val=best_val,
                replay=args.replay,
            )
            attach_assignment_call_ids(out_dir, round_num, leads)
            all_leads = list(leads.values())
            candidate_records = []
            claims = []
            assigned_cells = []
            base_commit = git_text(conductor, "rev-parse", "HEAD")
            if llm_client.supervised:
                status["supervisor_tasks"] = plan_local_workers(
                    llm_client,
                    agents,
                    round_num,
                    profile,
                    status,
                    base_commit,
                    best_val,
                    conductor,
                    out_dir,
                    memory_backend,
                    memory_mirror,
                    memory_log,
                    args.arm,
                )
            for agent in agents:
                role = allocation["roles"][agent]
                lead = lead_for_agent(agent, leads, all_leads)
                worker_call_start = len(getattr(llm_client, "call_ids", []))
                try:
                    candidate = worker_attempts(
                        assigned_cells=assigned_cells,
                        agent=agent,
                        round_num=round_num,
                        arm=args.arm,
                        role=role,
                        agent_b=allocation["per_agent_B"][agent],
                        status=status,
                        best_commit=best_metric_commit,
                        best_val=best_val,
                        profile=profile,
                        profile_path=profile_path,
                        events=events_for_scouts,
                        out_dir=out_dir,
                        repo=repo,
                        agents_root=agents_root,
                        base_commit=base_commit,
                        llm_client=llm_client,
                        backend=memory_backend,
                        mirror=memory_mirror,
                        memory_log=memory_log,
                        lead=lead,
                        all_leads=all_leads,
                        claims=claims,
                        replay=args.replay,
                    )
                except llm.LLMError as error:
                    print(f"round {round_num}: {agent} LLM call failed: {error}", file=sys.stderr)
                    candidate = llm_failure_candidate(agent, role, error)
                    candidate["llm_call_ids"] = list(
                        getattr(llm_client, "call_ids", [])[worker_call_start:]
                    )
                candidate["regime_label"] = {
                    "EXPLOIT": "EXPLOIT",
                    "BOREDOM_SNAP": "SNAP",
                    "PARADIGM_BREAKOUT": "BREAKOUT",
                }.get(allocation["regime"], "EXPLOIT")
                candidate_records.append(candidate)
            if all(candidate.get("llm_error") for candidate in candidate_records):
                raise RuntimeError(
                    f"every worker's LLM call failed in round {round_num}; fix the provider and "
                    f"continue with --resume {out_dir}"
                )

            viewer_frontier(out_dir, round_num, "research")
            publisher.request()
            judge_novelty(
                candidate_records,
                llm_client=llm_client,
                out_dir=out_dir,
                round_num=round_num,
                status=status,
                profile=profile,
                best_commit=best_metric_commit,
                best_val=best_val,
            )
            pending_candidates = [
                candidate for candidate in candidate_records if candidate.get("status") == "pending"
            ]
            viewer_frontier(out_dir, round_num, "propose")
            publisher.request()
            run_candidates = deduplicate_round_candidates(repo, pending_candidates, out_dir)
            commits = [candidate["commit"] for candidate in run_candidates]
            evaluation_results, _ = run_evaluations(repo, commits, out_dir / "runs")
            record_score_cache(repo, out_dir, evaluation_results)
            for candidate in candidate_records:
                if candidate.get("same_round_duplicate"):
                    result = evaluation_results.get(candidate.get("duplicate_of"), {})
                    if result.get("status") == "ok":
                        candidate["score"] = result.get("loss")
            provisional = []
            for candidate in run_candidates:
                result = evaluation_results.get(candidate["commit"], {})
                candidate["score"] = result.get("loss")
                candidate["evaluation_status"] = result.get("status", "crash")
                if (
                    candidate["evaluation_status"] == "ok"
                    and candidate["score"] is not None
                    and candidate_is_provisional(profile, candidate["score"], best_val)
                ):
                    provisional.append(candidate)
            provisional_best = (
                min(provisional, key=lambda item: float(item["score"])) if provisional else None
            )
            critic_event = None
            accepted = False
            if provisional_best is not None and args.arm == "S":
                accepted = True
                provisional_best["status"] = "keep"
                best_val = float(provisional_best["score"])
                best_metric_commit = provisional_best["commit"]
                latest_candidate = provisional_best
            elif provisional_best is not None:
                previous_best_val = best_val
                previous_best_commit = best_metric_commit
                critic_dir = out_dir / "runs" / "critic_confirmation"
                critic_result = critic_confirmation_result(
                    repo,
                    provisional_best["commit"],
                    provisional_best["score"],
                    critic_dir,
                )
                if critic_result.get("critic_rerun"):
                    provisional_best["critic_rerun"] = critic_result["critic_rerun"]
                provisional_best["critic_score"] = critic_result.get("loss")
                provisional_best["replicate_score"] = critic_result.get("loss")
                first_score = float(provisional_best["score"])
                second_score = critic_result.get("loss")
                accepted = critic_accepts(
                    profile,
                    first_score,
                    second_score,
                    previous_best_val,
                    critic_result.get("status"),
                )
                critic_record = {
                    "round": round_num,
                    "commit": provisional_best["commit"],
                    "v1": first_score,
                    "v2": second_score,
                    "accepted": accepted,
                    "verdict": "",
                    "why": "",
                    "vetoed": False,
                    "novelty": provisional_best.get("novelty"),
                }
                verdict = critic_review(
                    llm_client,
                    round_num=round_num,
                    candidate=provisional_best,
                    events=events,
                    first_score=first_score,
                    second_score=second_score,
                    accepted=accepted,
                    previous_best_commit=previous_best_commit,
                    previous_best_val=previous_best_val,
                    profile=profile,
                )
                critic_call_ids = (
                    [llm_client.last_call_id] if getattr(llm_client, "last_call_id", None) else []
                )
                critic_record["llm_call_ids"] = critic_call_ids
                verdict["llm_call_ids"] = critic_call_ids
                provisional_best["critic_call_ids"] = list(
                    dict.fromkeys([*provisional_best.get("critic_call_ids", []), *critic_call_ids])
                )
                critic_record["verdict"] = str(verdict.get("verdict") or "untested-in-source")
                critic_record["why"] = str(verdict.get("why") or "")
                accepted, critic_record["vetoed"] = apply_critic_verdict(accepted, verdict)
                critic_record["accepted"] = accepted
                write_memory_item(
                    "verdict",
                    f"verdict-{args.arm}-{round_num}-{provisional_best['agent']}",
                    json.dumps(verdict, sort_keys=True),
                    "critic",
                    {
                        "arm": args.arm,
                        "round": round_num,
                        "commit": provisional_best["commit"],
                        "accepted": accepted,
                        "vetoed": critic_record["vetoed"],
                        "llm_call_ids": critic_call_ids,
                    },
                    backend=memory_backend,
                    mirror=memory_mirror,
                    log=memory_log,
                    arm=args.arm,
                )
                critic_lesson_memory(
                    verdict.get("lesson"),
                    args.arm,
                    round_num,
                    backend=memory_backend,
                    mirror=memory_mirror,
                    log=memory_log,
                )
                update_critic_tsv(critic_path, critic_record)
                critic_event = {
                    "kind": "critic",
                    "agent": "critic",
                    "status": "keep" if accepted else "discard",
                    "score": second_score,
                    "descriptor": provisional_best["descriptor"],
                    "sources": provisional_best.get("sources", []),
                    "commit": provisional_best["commit"],
                    "round": round_num,
                    "lead": provisional_best.get("lead"),
                    "description": (
                        f"critic second-evaluation confirmation for {provisional_best['idea']}"
                    ),
                    "role": "critic",
                    "predicted_delta": provisional_best.get("predicted_delta"),
                    "verdict": critic_record["verdict"],
                    "accepted": accepted,
                    "vetoed": critic_record["vetoed"],
                    "novelty": provisional_best.get("novelty"),
                    "llm_call_ids": critic_call_ids,
                }
                if accepted:
                    provisional_best["status"] = "keep"
                    best_val = (first_score + float(second_score)) / 2
                    best_metric_commit = provisional_best["commit"]
                    latest_candidate = provisional_best

            for candidate in candidate_records:
                if candidate.get("status") == "pending":
                    if candidate.get("evaluation_status") != "ok":
                        event_status = "crash"
                    elif candidate is provisional_best and accepted:
                        event_status = "keep"
                    else:
                        event_status = "discard"
                else:
                    event_status = candidate.get("status", "reject")
                candidate["status"] = event_status
                candidate["description"] = (
                    f"[{candidate['regime_label']}] {candidate.get('idea', '')}"
                )
                record_worker_outcomes(out_dir, candidate, round_num, llm_client)
                event = add_result_event(
                    profile,
                    ledger_path,
                    candidate,
                    round_num,
                    event_status,
                    candidate.get("score") if event_status != "reject" else None,
                )
                write_result_memory(
                    event,
                    backend=memory_backend,
                    mirror=memory_mirror,
                    log=memory_log,
                    arm=args.arm,
                )
                if (
                    event_status == "keep"
                    and event.get("commit")
                    and git_text(conductor, "rev-parse", "HEAD") != event["commit"]
                ):
                    merge_result = git(
                        conductor,
                        "merge",
                        "--ff-only",
                        event["commit"],
                        check=False,
                    )
                    if merge_result.returncode:
                        raise RuntimeError(
                            "kept candidate could not fast-forward the arm branch: "
                            + merge_result.stderr.strip()
                        )
            if critic_event is not None:
                critic_event = meter.submit(
                    profile, ledger_path, {**critic_event, "ts": timestamp()}
                )
                write_result_memory(
                    critic_event,
                    backend=memory_backend,
                    mirror=memory_mirror,
                    log=memory_log,
                    arm=args.arm,
                )

            tool_counts = round_tool_counts(out_dir, research_start, memory_start)
            record_round_spend(out_dir, round_num, llm_start, outcome_start, tool_counts)
            assert_live_tool_use(
                out_dir,
                round_num=round_num,
                research_start=research_start,
                memory_start=memory_start,
                expect_exa=exa_enabled and not args.replay and os.environ.get("EXA_REPLAY") != "1",
                expect_pastdev=memory_backend == "pastdev",
                counts=tool_counts,
            )
            events = write_results(ledger_path, results_path)
            _status_after, _status_record = append_status(out_dir, profile, events, args.arm)
            for candidate in candidate_records:
                if candidate.get("commit"):
                    tag = unique_tag(repo, f"{tag_prefix}/{round_num}-{candidate['agent']}")
                    git(conductor, "tag", tag, candidate["commit"])
                    tags_this_run.append(tag)
            if critic_event is not None:
                tag = unique_tag(repo, f"{tag_prefix}/{round_num}-critic")
                git(conductor, "tag", tag, critic_event["commit"])
                tags_this_run.append(tag)
            record_round_artifacts(
                publisher,
                out_dir,
                conductor,
                args.arm,
                round_num,
                checkpoint={
                    "best_val": best_val,
                    "best_commit": best_metric_commit,
                    "viewer_dir": viewer_run_dir,
                },
            )
            if not effective_no_push:
                git(conductor, "push", "origin", branch, *tags_this_run)
                tags_this_run.clear()
            candidates_done = sum(
                1
                for event in events
                if event.get("kind") == "candidate" and event.get("round", 0) > 0
            )
            write_round_summary(events, candidates_done)
            viewer_frontier(out_dir, round_num, "finish")
            publisher.flush(final=False, status="running")
            if latest_candidate is not None and accepted:
                print(
                    f"round {round_num}: accepted {latest_candidate['commit']} "
                    f"at mean loss {best_val:.6f}"
                )
            else:
                print(f"round {round_num}: no candidate confirmed")
            if known_optimum_reached(best_val):
                write_converged(
                    out_dir,
                    profile,
                    events,
                    status,
                    round_num=round_num + 1,
                    best_commit=best_metric_commit,
                    best_val=best_val,
                    reason="known_optimum_loss",
                )
                break

    # The rounds are done: an interrupted or failed committee must not mark the run stopped.
    publish_state["completed"] = True

    def start_scoring():
        publish_state["live_status"] = "scoring"
        publisher.flush(final=False, status="scoring")

    if not args.replay and TASK.get("held_out_test"):
        try:
            from held_out import held_out_test

            test_result = held_out_test(TASK["name"], out_dir)
            print(
                f"[held_out_test] {TASK['name']} baseline loss={test_result['baseline']['loss']} "
                f"best loss={test_result['best']['loss']} "
                f"reference_test_loss={test_result['reference_test_loss']}",
                flush=True,
            )
        except Exception as error:
            print(
                f"[held_out_test] failed: {type(error).__name__}: {error}",
                file=sys.stderr,
                flush=True,
            )

    try:
        if run_post_run_hook(out_dir, args.llm, replay=args.replay, on_start=start_scoring):
            record_round_artifacts(publisher, out_dir, conductor, args.arm, "post-run")
            if not effective_no_push:
                git(conductor, "push", "origin", branch)
    except Exception as error:
        print(f"[post_run] failed: {type(error).__name__}: {error}", file=sys.stderr, flush=True)
    record_final_artifacts(publisher, out_dir, conductor, args.arm)
    if not effective_no_push:
        git(conductor, "push", "origin", branch, *tags_this_run)
    return {
        "arm": args.arm,
        "branch": branch,
        "out": str(out_dir),
        "best_commit": best_metric_commit,
        "best_loss": best_val,
        "no_push": effective_no_push,
    }


def orchestrate(args):
    publish_state = {}
    terminal_status = "finished"
    with ExitStack() as cleanup:
        try:
            return _orchestrate(args, publish_state, cleanup)
        except BaseException:
            if not publish_state.get("completed"):
                terminal_status = "stopped"
            raise
        finally:
            _finish_publish(publish_state, terminal_status)


def _finish_publish(publish_state, terminal_status):
    out_dir = publish_state.get("out_dir")
    publisher = publish_state.get("publisher")
    if publisher:
        live_publish.unwatch(out_dir)
        publisher.close()
    if out_dir:
        run_path = Path(out_dir) / "run.json"
        if run_path.exists():
            try:
                run_artifact = json.loads(run_path.read_text(encoding="utf-8"))
                run_artifact["status"] = terminal_status
                _write_run_artifact(out_dir, run_artifact)
            except Exception as error:
                print(f"viewer run status update failed: {error}", file=sys.stderr)
        try:
            publish_viewer_state(
                out_dir, publish_state.get("dest"), final=True, status=terminal_status
            )
        except Exception as error:
            print(
                f"FINAL viewer publish failed (see {out_dir}/viewer_publish_log.jsonl): "
                f"{type(error).__name__}: {error}",
                file=sys.stderr,
                flush=True,
            )


HEARTBEAT_SECONDS = 30


def viewer_heartbeat(dest, run_id):
    import export_viewer

    export_viewer.heartbeat(dest, run_id)


def viewer_frontier(out_dir, round_num, phase):
    import export_viewer

    try:
        export_viewer._atomic_write(
            Path(out_dir) / "viewer_frontier.json",
            json.dumps({"round": round_num, "phase": phase}).encode(),
        )
    except Exception as error:
        with suppress(Exception):
            append_jsonl(
                Path(out_dir) / "viewer_publish_log.jsonl",
                {"ts": timestamp(), "error": type(error).__name__, "message": str(error)},
            )


def build_parser():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--arm", choices=("A", "B", "C", "D", "S"), help="experiment arm (default B)"
    )
    parser.add_argument("--rounds", type=int, help="total rounds, 1-50 (default 10)")
    parser.add_argument("--seed", type=int, help="seed LLM sampling; task evaluators stay fixed")
    parser.add_argument("--repo", default=".")
    parser.add_argument("--out")
    parser.add_argument(
        "--llm", choices=("openai", "tinker", "ollama", "fake"), help="default openai"
    )
    parser.add_argument(
        "--resume",
        metavar="OUT",
        help="continue a crashed or killed run from its last completed round",
    )
    parser.add_argument(
        "--task",
        choices=sorted(path.parent.name for path in TESTCASES.glob("*/task.json")),
        help="CPU benchmark to run with its sandboxed evaluator",
    )
    parser.add_argument("--model")
    parser.add_argument(
        "--workers", type=int, help="worker identities (1-12, default 4); calls are queued"
    )
    parser.add_argument("--supervisor-model", help="Ollama planning model; one plan per round")
    parser.add_argument("--worker-tokens", type=int, help="Ollama output cap (default 600)")
    parser.add_argument(
        "--supervisor-tokens", type=int, help="Ollama planning cap including thought (default 4096)"
    )
    parser.add_argument("--ollama-context", type=int, help="local context window (default 8192)")
    parser.add_argument("--critic-model", help="LLM model for critic roles (default: use --model)")
    parser.add_argument("--memory-backend", choices=("none", "local", "pastdev"))
    parser.add_argument("--exa", choices=("on", "off"), help="default on")
    parser.add_argument(
        "--literature",
        choices=("auto", "keyless", "off"),
        help="keyless OpenAlex/arXiv/PubMed research: by default only under --exa off (and not "
        "with --llm fake); keyless or auto also stand in for Exa when EXA_API_KEY is unset",
    )
    parser.add_argument("--replay", action="store_true")
    parser.add_argument("--no-push", action="store_true")
    parser.add_argument(
        "--fake-delay",
        type=float,
        default=0.0,
        help="seconds each --llm fake call sleeps, so offline runs can be watched live",
    )
    parser.add_argument(
        "--viewer-dest", help="directory for live viewer exports (default: <out>/viewer)"
    )
    parser.add_argument("--no-viewer", action="store_true")
    return parser


def _terminate(signum, _frame):
    raise SystemExit(128 + signum)


def main(argv=None):
    parser = build_parser()
    args = parser.parse_args(argv)
    signal.signal(signal.SIGTERM, _terminate)
    try:
        result = orchestrate(args)
    except (OSError, ValueError, RuntimeError, research.BudgetExceeded) as error:
        print(f"swarm.py: {error}", file=sys.stderr)
        return 2
    print(
        f"arm {result['arm']} complete; best {result['best_commit']} "
        f"loss={result['best_loss']:.6f}; branch={result['branch']}; "
        f"out={result['out']}; pushed={not result['no_push']}"
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
