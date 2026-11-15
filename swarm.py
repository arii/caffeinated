#!/usr/bin/env python3
"""Run a four-agent, meter-guided CPU-task research swarm."""

import argparse
import csv
from contextlib import contextmanager, redirect_stdout
from datetime import datetime, timezone
import io
import json
import math
import os
from pathlib import Path
import re
import shutil
import subprocess
import sys
import tempfile
import uuid
from types import SimpleNamespace

import boredom
from boredom import descriptor_meter as meter
import llm
import memory
import research
from testcases import sandbox


ROOT = Path(__file__).resolve().parent
AGENTS = tuple(f"worker-{number}" for number in range(1, 5))
BOREDOM_COMPONENTS = (
    "B", "regime", "novelty", "stagnation", "overload",
    "fail_rate", "trivial_rate", "diversity", "frontier_stall",
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


def unique_branch(repo, base):
    existing = set(git_text(repo, "branch", "--list", "--format=%(refname:short)").splitlines())
    if base not in existing:
        return base
    index = 2
    while f"{base}-{index}" in existing:
        index += 1
    return f"{base}-{index}"


def unique_tag(repo, base):
    existing = set(git_text(repo, "tag", "--list", base + "*").splitlines())
    if base not in existing:
        return base
    index = 2
    while f"{base}-{index}" in existing:
        index += 1
    return f"{base}-{index}"


def ensure_clean_worktree(path):
    status = git_text(path, "status", "--porcelain")
    if status:
        raise RuntimeError(f"worktree {path} has uncommitted changes")


def create_arm_worktrees(repo, arm, start_commit):
    worktree_root = repo / ".swarm_worktrees" / arm
    conductor = worktree_root / "conductor"
    agents_root = worktree_root
    branch = unique_branch(
        repo, f"swarm-{arm}-{datetime.now().strftime('%Y%m%d')}"
    )
    git(repo, "branch", branch, start_commit)
    conductor.parent.mkdir(parents=True, exist_ok=True)
    if conductor.exists():
        ensure_clean_worktree(conductor)
        git(conductor, "switch", "--detach", start_commit)
        git(conductor, "switch", branch)
    else:
        git(repo, "worktree", "add", str(conductor), branch)
    return branch, conductor, agents_root


def prepare_agent_worktree(repo, agents_root, arm, agent, base_commit, round_num, attempt):
    path = agents_root / agent
    path.parent.mkdir(parents=True, exist_ok=True)
    if path.exists():
        ensure_clean_worktree(path)
        git(path, "switch", "--detach", base_commit)
    else:
        git(repo, "worktree", "add", "--detach", str(path), base_commit)
    branch = unique_branch(
        repo, f"swarm-{arm}-r{round_num}-{agent}-a{attempt}"
    )
    git(path, "switch", "-c", branch)
    return path, branch


def allocate_roles(profile, events, agents=AGENTS, arm="B", exa_enabled=True):
    swarm_status = meter.status(profile, events)
    regime = "EXPLOIT" if arm == "A" else swarm_status["regime"]
    agent_status = {
        agent: meter.status(profile, events, agent=agent) for agent in agents
    }
    per_agent = {agent: agent_status[agent]["B"] for agent in agents}
    bored = sorted(
        (agent for agent in agents if per_agent[agent] >= 0.70),
        key=lambda agent: (-per_agent[agent], agent),
    )
    roles = {}
    scouts = []

    def divergent_worker():
        return bored[0] if bored else min(
            agents, key=lambda agent: (per_agent[agent], agent)
        )

    if arm == "A":
        roles = {agent: "exploit" for agent in agents}
        scout = divergent_worker()
        roles[scout] = "divergent"
        scouts = [scout] if exa_enabled else []
        rationale = (
            "Arm A fixes three exploit slots and one divergent slot; "
            "it scouts when Exa is enabled."
        )
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
        roles = {agent: "exploit" for agent in agents}
        for agent in scouts:
            roles[agent] = "divergent"
        non_scouts = [agent for agent in agents if agent not in scouts]
        remaining_divergent = 3 - len(scouts)
        for agent in sorted(
            non_scouts, key=lambda agent: (per_agent[agent], agent)
        )[:remaining_divergent]:
            roles[agent] = "divergent"
        rationale = (
            f"SNAP assigns one exploit and three divergent slots; "
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
        roles = {agent: "divergent" for agent in agents}
        rationale = (
            f"BREAKOUT assigns four divergent slots and {len(scouts)} scouts."
        )
    else:
        roles = {agent: "exploit" for agent in agents}
        divergent_agent = divergent_worker()
        if exa_enabled:
            scouts = [divergent_agent]
        roles[divergent_agent] = "divergent"
        rationale = "EXPLOIT assigns three exploit slots and one divergent slot."

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
    disabled = arm == "A"
    record = {
        "type": "status",
        "ts": timestamp(),
        "n_rows": len(events),
        "B": status["B"],
        "regime": "EXPLOIT" if disabled else status["regime"],
        "best_loss": status["best"],
        "best_seq": status["best_seq"],
        "frontier_stall": status["frontier_stall"],
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
    return ", ".join(
        f"{item['cell']} (visits={item['visits']})" for item in cells
    )


def common_values(agent, round_num, role, status, agent_b, best_commit, best_val, profile):
    return {
        "agent": agent,
        "best_commit": best_commit,
        "best_loss": f"{best_val:.6f}",
        "noise": str(profile.get("eps", 0.0036)),
        "round": round_num,
        "swarm_B": f"{status['swarm_B']:.3f}",
        "regime": status["regime"],
        "agent_B": f"{agent_b:.3f}",
        "role": role,
        "task_brief": (TASK or {}).get("brief", ""),
        "editable": (TASK or {}).get("editable", ""),
        **(TASK or {}).get("prompt_values", {}),
    }


def memory_text(result):
    entries = []
    for item in result.get("results", []):
        content = str(item.get("content") or "").replace("\n", " ")
        entries.append(f"#{item.get('rank', '?')} [{item.get('kind', 'unknown')}] {content[:500]}")
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
        "ledger_sha256": assignment["ledger_sha256"],
        "profile_sha256": assignment["profile_sha256"],
        "provenance": provenance or {},
    }
    append_jsonl(Path(out_dir) / "assignments.jsonl", record)
    write_memory_item(
        "assignment",
        f"assignment-{arm}-{round_num}",
        json.dumps(record, sort_keys=True),
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
        category="publication",
    )
    if os.environ.get("EXA", "").casefold() == "off":
        research.run_disabled(args)
    else:
        runner = {
            "prior-art": research.run_prior_art,
            "scout": research.run_scout,
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
    cells = suggest_cells(profile, events)
    for agent in scouts:
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
        )
        query_plan = llm_client.call(
            "SCOUT_QUERY",
            agent=agent,
            round_num=round_num,
            values={
                **common,
                "recalled": memory_text(recalled),
                "suggested_cells": format_cells(cells),
            },
        )
        paper_records = research_call(
            "scout",
            out_dir=out_dir,
            agent=agent,
            regime=status["regime"],
            replay=replay,
            query=str(query_plan.get("paper_query") or ""),
            kind="paper",
            n=3,
        )
        code_records = research_call(
            "scout",
            out_dir=out_dir,
            agent=agent,
            regime=status["regime"],
            replay=replay,
            query=str(query_plan.get("code_query") or ""),
            kind="code",
            n=3,
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
        source_id = str(pick.get("source_id") or "")
        source = next(
            (item for item in sources if item.get("id") == source_id), None
        )
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
            question=(
                f"What exact method, settings, and measured result could be "
                f"implemented in {TARGET_FILE} for this task?"
            ),
        )
        extract = next(
            (
                item.get("summary")
                for item in extract_records
                if item.get("type") == "extract"
            ),
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
        lead_id = f"lead-{arm}-{round_num}-{agent}"
        lead = {
            "id": lead_id,
            "agent": agent,
            "source_ids": [source_id],
            "recipe": str(lead_response.get("recipe") or ""),
            "claimed_effect": str(lead_response.get("claimed_effect") or ""),
            "predicted_delta": float(lead_response.get("predicted_delta", 0.0)),
            "risk": str(lead_response.get("risk") or ""),
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
    if any(not re.fullmatch(r"S\d+", item) for item in sources):
        raise ValueError("source_ids must use the S<number> format")
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
    if proposal["lead_id"] is not None and not re.fullmatch(
        r"[A-Za-z0-9_-]+", proposal["lead_id"]
    ):
        raise ValueError("lead_id must contain only letters, digits, '_' or '-'")
    proposal["descriptor"] = json.loads(json.dumps(descriptor))
    return proposal


def assigned_cell_mismatch_reason(profile, descriptor, assigned_cell):
    if assigned_cell in (None, "none"):
        return None
    if meter.cell_key(profile, descriptor, 2) != assigned_cell:
        return f"unbuildable assignment: {assigned_cell}"
    return None


def apply_edits(source_path, edits):
    text = Path(source_path).read_text(encoding="utf-8")
    edited = text
    for index, edit in enumerate(edits, 1):
        old = edit["old"]
        if not old or edited.count(old) != 1:
            count = edited.count(old) if old else 0
            raise EditError(
                f"edit {index}: old text must occur exactly once (found {count})"
            )
        edited = edited.replace(old, edit["new"], 1)
    Path(source_path).write_text(edited, encoding="utf-8")


def descriptor_trailer(descriptor):
    mechanism = str(descriptor["mechanism"])
    method = str(descriptor["method"])
    params = descriptor.get("params") or {}
    value = params.get("value")
    return f"{mechanism}/{method}" + (
        f" value={float(value):g}" if value is not None else ""
    )


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
    commit_args = ["-c", "user.name=Autoresearch Swarm", "-c", "user.email=swarm@localhost", "commit", "-m", subject]
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
                "type": "gate", "ts": timestamp(), "candidate_commit": commit,
                "candidate_blob": blob, "pass": False, "reasons": [reason],
                "descriptor": descriptor, "role": role,
                "duplicate_of": cached["commit"], "score": cached.get("loss"),
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
        reason = (
            f"duplicate: same editable blob as {previous['commit']} in this round"
        )
        candidate.update({
            "status": "duplicate",
            "score": None,
            "duplicate_of": previous["commit"],
            "same_round_duplicate": True,
            "reasons": [reason],
        })
        attempts = list(candidate.get("attempts") or [])
        attempt_number = attempts[-1].get("attempt", 1) if attempts else 1
        attempts.append({
            "attempt": attempt_number,
            "commit": candidate["commit"],
            "pass": False,
            "reasons": [reason],
        })
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
        cache.setdefault(blob, {
            "commit": commit, "loss": result.get("loss"),
            "status": result.get("status"),
        })
    path.write_text(json.dumps(cache, indent=2, sort_keys=True) + "\n", encoding="utf-8")


def source_union(*groups):
    return list(dict.fromkeys(source for group in groups for source in group))


def lead_for_agent(agent, scout_leads, all_leads):
    return scout_leads.get(agent) or (all_leads[0] if all_leads else None)


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
        for query in memory_queries
    ]
    recalled_results = "\n".join(memory_text(result) for result in (recalls[0], recalls[2]))
    recalled_leads = "\n".join(
        [
            *(json.dumps(item, sort_keys=True) for item in all_leads),
            memory_text(recalls[1]),
        ]
    )
    current_base = base_commit
    candidate_source = git(repo, "show", f"{current_base}:{TARGET_FILE}").stdout
    common = common_values(
        agent, round_num, role, status, agent_b, best_commit, best_val, profile
    )
    common.update({
        "suggested_cells": format_cells(status.get("suggested_cells", [])),
        "reasons": "none",
        "assigned_cell": "none",
        "candidate_source": candidate_source,
        "fake_targets": TASK.get("fake_targets", []),
        "fake_edits": TASK.get("fake_edits", []),
    })
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
            "vocab": json.dumps(profile.get("vocab", {}), sort_keys=True),
        },
    )
    attempts = []
    current_proposal = proposal
    for attempt in (1, 2, 3):
        try:
            current_proposal = validate_proposal(profile, current_proposal)
            mismatch_reason = assigned_cell_mismatch_reason(
                profile, current_proposal["descriptor"], common["assigned_cell"]
            )
            if mismatch_reason:
                raise ValueError(mismatch_reason)
            valid_leads = {
                item.get("id") for item in all_leads if item.get("id")
            }
            if lead and lead.get("id"):
                valid_leads.add(lead["id"])
            if (
                current_proposal.get("lead_id")
                and current_proposal["lead_id"] not in valid_leads
            ):
                raise ValueError("lead_id must reference a lead offered this round")
            if current_proposal.get("lead_id") is None and lead:
                current_proposal["lead_id"] = lead["id"]
        except (ValueError, TypeError) as error:
            if (
                common["assigned_cell"] != "none"
                and str(error).startswith("unbuildable assignment: ")
            ):
                return {
                    "agent": agent, "status": "reject", "score": None,
                    "commit": "", "descriptor": current_proposal.get("descriptor", {}),
                    "sources": [], "lead": lead.get("id") if lead else None,
                    "idea": current_proposal.get("idea", ""),
                    "predicted_delta": None, "role": role,
                    "reasons": [str(error)], "attempts": attempts,
                }
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
                    return {
                        "agent": agent, "status": "reject", "score": None,
                        "commit": "", "descriptor": common["assigned_descriptor"],
                        "sources": [], "lead": lead.get("id") if lead else None,
                        "idea": "assigned cell has no buildable fake target",
                        "predicted_delta": None, "role": role,
                        "reasons": [current_proposal["reason"]], "attempts": attempts,
                    }
                continue
            return {
                "agent": agent,
                "status": "reject",
                "score": None,
                "commit": "",
                "descriptor": {"mechanism": "baseline", "method": "none"},
                "sources": [],
                "lead": lead.get("id") if lead else None,
                "idea": "proposal rejected after repair",
                "predicted_delta": None,
                "role": role,
                "reasons": [f"invalid proposal after repair: {error}"],
                "attempts": attempts,
            }

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
            str(item["id"])
            for item in source_records(prior_records)
            if item.get("id")
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
        cited_sources = source_union(
            current_proposal.get("source_ids", []),
            prior_sources,
            lead.get("source_ids", []) if lead else [],
        )
        lead_id = current_proposal.get("lead_id") or (
            lead.get("id") if lead else None
        )

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
            return {
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
                "pending" if gate_pass
                else "duplicate" if gate_record.get("duplicate_of") is not None
                else "reject"
            ),
            "score": (
                gate_record.get("score")
                if gate_record.get("duplicate_of") is not None
                else None
            ),
            "duplicate_of": gate_record.get("duplicate_of"),
            "commit": committed["commit"],
            "descriptor": current_proposal["descriptor"],
            "sources": cited_sources,
            "lead": lead_id,
            "lead_claim": lead,
            "idea": current_proposal["idea"],
            "rationale": current_proposal.get("rationale", ""),
            "predicted_delta": current_proposal["predicted_delta"],
            "role": role,
            "reasons": gate_record.get("reasons", []),
            "attempts": attempts,
            "branch": committed["branch"],
        }
        if candidate["status"] == "duplicate":
            return candidate
        if gate_pass:
            return candidate
        common["reasons"] = "; ".join(gate_record.get("reasons", []))
        if attempt == 2:
            events = meter.read_ledger(Path(out_dir) / "ledger.jsonl")
            reserved = assigned_cells if assigned_cells is not None else []
            cells = meter.suggest(profile, events, n=len(meter.all_cells(profile, 2)))
            eligible = []
            for cell in cells:
                descriptor = dict(zip(profile["levels"], cell["cell"].split("/")))
                values = [event["descriptor"].get("params", {}).get("value")
                          for event in events
                          if meter.cell_key(profile, event["descriptor"], 2) == cell["cell"]]
                values = [abs(value) for value in values if isinstance(value, (int, float))]
                spec = profile.get("params", {}).get("value", {})
                if values and spec.get("scale") == "ratio":
                    descriptor["params"] = {"value": max(max(values), 1e-12) * spec["ratio"]}
                if cell["cell"] != "baseline/none" and cell["cell"] not in reserved and meter.gate(
                    profile, events, descriptor, role=role, sources=["assigned"]
                )["pass"]:
                    eligible.append((cell["cell"], descriptor))
            if not eligible:
                eligible = [(cell["cell"], dict(zip(profile["levels"], cell["cell"].split("/")))) for cell in cells
                            if cell["cell"] != "baseline/none" and cell["cell"] not in reserved]
            if eligible:
                common["assigned_cell"], common["assigned_descriptor"] = eligible[0]
                reserved.append(common["assigned_cell"])
                current_proposal = llm_client.call(
                    "WORKER_REPAIR", agent=agent, round_num=round_num,
                    values={**common, "problem": "Implement exactly the conductor-assigned cell. Required descriptor: "
                            + json.dumps(common["assigned_descriptor"], sort_keys=True),
                            "proposal": json.dumps(current_proposal, sort_keys=True)},
                )
                if current_proposal.get("status") == "reject":
                    return {
                        "agent": agent, "status": "reject", "score": None,
                        "commit": "", "descriptor": common["assigned_descriptor"],
                        "sources": [], "lead": lead.get("id") if lead else None,
                        "idea": "assigned cell has no buildable fake target",
                        "predicted_delta": None, "role": role,
                        "reasons": [current_proposal["reason"]], "attempts": attempts,
                    }
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
        return candidate
    return {
        "agent": agent,
        "status": "reject",
        "score": None,
        "commit": "",
        "descriptor": {"mechanism": "baseline", "method": "none"},
        "sources": [],
        "lead": lead.get("id") if lead else None,
        "idea": "proposal rejected after repair",
        "predicted_delta": None,
        "role": role,
        "reasons": ["proposal rejected after repair"],
        "attempts": attempts,
    }


def acceptance_margin(profile):
    return float(profile.get("accept_margin", profile["eps"]))


def candidate_is_provisional(profile, score, best_val):
    return score < best_val - acceptance_margin(profile)


def critic_accepts(profile, first_score, second_score, previous_best, status):
    return (
        status == "ok"
        and second_score is not None
        and (first_score + float(second_score)) / 2
        < previous_best - acceptance_margin(profile)
    )


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


def build_task_context(task_dir, context_files):
    parts = [
        f"--- {name}\n{preview_file(task_dir / name)}"
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
    return {
        **config,
        "name": name,
        "dir": task_dir,
        "target": target,
        "profile": task_dir / "boredom_profile.json",
        "prompt_values": {
            "task_brief": config["brief"],
            "target_file": target,
            "task_context": build_task_context(task_dir, context_files),
        },
    }


def local_task_result(repo, commit, out_dir):
    """Score a commit's version of the task's editable file with the frozen evaluator."""
    log_path = Path(out_dir) / f"{commit}.log"
    log_path.parent.mkdir(parents=True, exist_ok=True)
    source = git(repo, "show", f"{commit}:{TARGET_FILE}", check=False)
    result = None
    log = source.stderr
    if source.returncode == 0:
        result = sandbox.evaluate_task(TASK["dir"], source.stdout)
        log = result.get("stdout", "") + result.get("stderr", "")
    log_path.write_text(log, encoding="utf-8")
    loss = result.get("loss") if result and result.get("status") == "ok" else None
    return {
        "commit": commit,
        "loss": loss,
        "status": result.get("status", "crash") if result else "crash",
        "reason": result.get("reason") if result else "candidate_source_unavailable",
    }


def run_evaluations(repo, commits, out_dir):
    if not commits:
        return {}, ""
    results = {
        commit: local_task_result(repo, commit, out_dir) for commit in commits
    }
    for commit, result in results.items():
        score = result["loss"]
        print(
            f"{commit}\t{score if score is None else f'{score:.6f}'}\t{result['status']}"
        )
    return results, ""


def critic_confirmation_result(repo, commit, first_score, out_dir):
    if TASK.get("deterministic"):
        return {
            "loss": first_score,
            "status": "ok",
            "critic_rerun": "skipped (deterministic)",
        }
    results, _ = run_evaluations(repo, [commit], out_dir)
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
    }
    if candidate.get("duplicate_of") is not None:
        event["duplicate_of"] = candidate["duplicate_of"]
    return meter.submit(profile, ledger_path, event)


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
    with path.open("a", newline="", encoding="utf-8") as stream:
        writer = csv.writer(stream, delimiter="\t")
        if is_new:
            writer.writerow(
                (
                    "round",
                    "commit",
                    "run1_loss",
                    "run2_loss",
                    "accepted",
                    "verdict",
                    "why",
                )
            )
        writer.writerow(
            (
                record["round"],
                record["commit"],
                "" if record["v1"] is None else f"{record['v1']:.6f}",
                "" if record["v2"] is None else f"{record['v2']:.6f}",
                str(record["accepted"]).lower(),
                record["verdict"],
                record["why"],
            )
        )


def copy_artifacts_to_arm_branch(out_dir, conductor, arm):
    target = conductor / "experiments" / f"swarm_{arm}"
    out_dir = Path(out_dir).resolve()
    target = target.resolve()
    if out_dir != target:
        target.parent.mkdir(parents=True, exist_ok=True)
        shutil.copytree(out_dir, target, dirs_exist_ok=True)
    return target


def commit_arm_artifacts(conductor, target, round_num):
    relative = target.relative_to(conductor)
    git(conductor, "add", "-f", "--", str(relative))
    cached = git(conductor, "diff", "--cached", "--quiet", check=False)
    if cached.returncode == 0:
        return None
    if cached.returncode != 1:
        raise RuntimeError("unable to inspect staged arm artifacts")
    git(
        conductor,
        "-c",
        "user.name=Autoresearch Swarm",
        "-c",
        "user.email=swarm@localhost",
        "commit",
        "-m",
        f"Record swarm artifacts for round {round_num}",
    )
    return git_text(conductor, "rev-parse", "HEAD")


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
        if event.get("kind") == "candidate"
        and isinstance(event.get("descriptor"), dict)
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
def arm_environment(arm, exa_enabled, memory_backend=None, run_id=None):
    names = (
        "AUTORESEARCH_ARM",
        "AUTORESEARCH_RUN_ID",
        "EXA",
        "BOREDOM",
        "PRIOR_ART",
        "GROUNDING",
        "MEMORY_BACKEND",
    )
    saved = {name: os.environ.get(name) for name in names}
    os.environ["AUTORESEARCH_ARM"] = arm
    if run_id is not None:
        os.environ["AUTORESEARCH_RUN_ID"] = run_id
    os.environ["EXA"] = "on" if exa_enabled else "off"
    if memory_backend:
        os.environ["MEMORY_BACKEND"] = memory_backend
    elif arm == "D":
        os.environ["MEMORY_BACKEND"] = "local"
    else:
        os.environ["MEMORY_BACKEND"] = "pastdev"
    if arm == "A":
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
    try:
        import export_viewer

        export_viewer.publish(out_dir, dest, final=final, status=status)
    except Exception as error:
        try:
            append_jsonl(out_dir / "viewer_publish_log.jsonl", {
                "ts": timestamp(), "status": status, "final": final,
                "error": type(error).__name__, "message": str(error),
            })
        except Exception as log_error:
            print(f"viewer publish log failed: {type(log_error).__name__}", file=sys.stderr)
        print(f"viewer publish failed: {type(error).__name__}: {error}", file=sys.stderr)


def _orchestrate(args, publish_state):
    if args.rounds < 1 or args.rounds > 50:
        raise ValueError("--rounds must be between 1 and 50")
    prompt_dir = configure_task(args)
    if args.arm not in {"A", "B", "C", "D"}:
        raise ValueError("--arm must be A, B, C, or D")
    repo = Path(args.repo).resolve()
    git_text(repo, "rev-parse", "--show-toplevel")
    profile_path = TASK["profile"].resolve()
    profile = meter.load_profile(profile_path)
    start_commit = git_text(repo, "rev-parse", "HEAD")
    exa_enabled = (
        args.arm != "C"
        and os.environ.get("EXA", "").casefold() != "off"
        and args.exa != "off"
    )
    effective_no_push = args.no_push or args.llm == "fake"
    branch, conductor, agents_root = create_arm_worktrees(
        repo, args.arm, start_commit
    )
    if args.out:
        out_dir = Path(args.out).resolve()
    else:
        out_dir = conductor / "experiments" / f"swarm_{args.arm}"
    out_dir.mkdir(parents=True, exist_ok=True)
    (out_dir / "runs").mkdir(parents=True, exist_ok=True)
    (out_dir / "exa_cache").mkdir(parents=True, exist_ok=True)
    viewer_dest = None if args.no_viewer else (
        Path(args.viewer_dest).resolve() if args.viewer_dest else out_dir / "viewer"
    )
    publish_state.update({"out_dir": out_dir, "dest": viewer_dest})
    run_id_path = out_dir / "run_id"
    if not run_id_path.exists():
        run_id_path.write_text(uuid.uuid4().hex + "\n", encoding="utf-8")
    run_id = run_id_path.read_text(encoding="utf-8").strip()
    if not run_id:
        raise ValueError("swarm run_id must not be empty")
    provenance = {"swarm_commit": start_commit, "command": redact_command(sys.argv)}
    profile_artifact = {key: value for key, value in profile.items() if not key.startswith("_")}
    (out_dir / "boredom_profile.json").write_text(
        json.dumps(profile_artifact, indent=2, sort_keys=True) + "\n", encoding="utf-8"
    )
    _write_run_artifact(out_dir, {
        "run_id": run_id, "task": args.task, "arm": args.arm, "status": "running",
        "profile_path": "boredom_profile.json", "profile_sha256": profile["_hash"],
        **provenance,
    })
    ledger_path = out_dir / "ledger.jsonl"
    results_path = out_dir / "results.tsv"
    critic_path = out_dir / "critic.tsv"
    memory_mirror = out_dir / "memory.jsonl"
    memory_log = out_dir / "memory_log.jsonl"
    memory_override = args.memory_backend or os.environ.get("MEMORY_BACKEND")
    if memory_override:
        memory_backend = memory.selected_backend(memory_override, args.arm)
    else:
        memory_backend = "local" if args.arm == "D" else "pastdev"
    llm_client = llm.LLMClient(
        mode=args.llm,
        model=args.model,
        log_path=out_dir / "llm_log.jsonl",
        prompt_dir=prompt_dir,
        replay=args.replay,
    )
    if not critic_path.exists():
        critic_path.write_text(
            "round\tcommit\trun1_loss\trun2_loss\taccepted\tverdict\twhy\n",
            encoding="utf-8",
        )

    baseline = local_task_result(repo, start_commit[:7], out_dir / "runs")
    if baseline["loss"] is None:
        raise RuntimeError(f"task {TASK['name']} baseline failed to score")
    baseline_commit, baseline_val = start_commit[:7], baseline["loss"]
    record_score_cache(repo, out_dir, {baseline_commit: baseline})
    TASK["prompt_values"]["baseline_loss"] = f"{baseline_val:.6f}"

    with arm_environment(args.arm, exa_enabled, memory_backend, run_id=run_id):
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

        for round_num in range(1, args.rounds + 1):
            events = meter.read_ledger(ledger_path)
            allocation = allocate_roles(
                profile, events, AGENTS, args.arm, exa_enabled
            )
            status = {
                **allocation,
                "ledger_sha256": allocation["ledger_sha256"],
                "profile_sha256": profile["_hash"],
            }
            if allocation["regime"] == "CONVERGED":
                status_record = read_jsonl(out_dir / "boredom_log.jsonl")
                converged = {
                    "round": round_num,
                    "best_commit": best_metric_commit,
                    "best_loss": best_val,
                    "cells_covered": sorted({
                        meter.cell_key(profile, event["descriptor"], 2)
                        for event in meter.attempt_events(profile, events)
                    }),
                    "attempt_count": len(list(meter.attempt_events(profile, events))),
                    "status_record": status_record[-1] if status_record else status,
                }
                (out_dir / "converged.json").write_text(
                    json.dumps(converged, indent=2, sort_keys=True) + "\n",
                    encoding="utf-8",
                )
                run_path = out_dir / "run.json"
                run_artifact = json.loads(run_path.read_text(encoding="utf-8"))
                run_artifact["converged"] = True
                _write_run_artifact(out_dir, run_artifact)
                break
            events_for_scouts = list(events)
            cell_suggestions = suggest_cells(profile, events_for_scouts)
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
            status["per_agent_B"] = allocation["per_agent_B"]
            leads = run_scouts(
                allocation["scouts"],
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
            all_leads = list(leads.values())
            candidate_records = []
            claims = []
            assigned_cells = []
            base_commit = git_text(conductor, "rev-parse", "HEAD")
            for agent in AGENTS:
                role = allocation["roles"][agent]
                lead = lead_for_agent(agent, leads, all_leads)
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
                candidate["regime_label"] = {
                    "EXPLOIT": "EXPLOIT",
                    "BOREDOM_SNAP": "SNAP",
                    "PARADIGM_BREAKOUT": "BREAKOUT",
                }.get(allocation["regime"], "EXPLOIT")
                candidate_records.append(candidate)

            pending_candidates = [
                candidate
                for candidate in candidate_records
                if candidate.get("status") == "pending"
            ]
            run_candidates = deduplicate_round_candidates(
                repo, pending_candidates, out_dir
            )
            commits = [candidate["commit"] for candidate in run_candidates]
            evaluation_results, _ = run_evaluations(
                repo, commits, out_dir / "runs"
            )
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
                    and candidate_is_provisional(
                        profile, candidate["score"], best_val
                    )
                ):
                    provisional.append(candidate)
            provisional_best = (
                min(provisional, key=lambda item: float(item["score"]))
                if provisional
                else None
            )
            critic_event = None
            accepted = False
            if provisional_best is not None:
                previous_best_val = best_val
                previous_best_commit = best_metric_commit
                critic_dir = out_dir / "runs" / "critic_confirmation"
                critic_result = critic_confirmation_result(
                    repo, provisional_best["commit"], provisional_best["score"],
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
                    "verdict": "not-applicable" if args.arm == "A" else "",
                    "why": "Arm A omits the critic LLM." if args.arm == "A" else "",
                }
                if args.arm != "A":
                    basin = [
                        event
                        for event in events
                        if event.get("descriptor", {}).get("mechanism")
                        == provisional_best["descriptor"]["mechanism"]
                    ][-5:]
                    claim = {
                        "idea": provisional_best["idea"],
                        "rationale": provisional_best.get("rationale", ""),
                        "lead": provisional_best.get("lead_claim"),
                        "sources": provisional_best.get("sources", []),
                    }
                    critic_values = {
                        **common_values(
                            "critic",
                            round_num,
                            "critic",
                            status,
                            0.0,
                            previous_best_commit,
                            previous_best_val,
                            profile,
                        ),
                        "commit": provisional_best["commit"],
                        "author": provisional_best["agent"],
                        "idea": provisional_best["idea"],
                        "v1": f"{first_score:.6f}",
                        "v2": "n/a" if second_score is None else f"{float(second_score):.6f}",
                        "prev_best": f"{previous_best_val:.6f}",
                        "accepted": str(accepted).lower(),
                        "claim": json.dumps(claim, sort_keys=True),
                        "predicted_delta": str(provisional_best.get("predicted_delta")),
                        "basin_results": json.dumps(basin, sort_keys=True),
                    }
                    verdict = llm_client.call(
                        "CRITIC",
                        agent="critic",
                        round_num=round_num,
                        values=critic_values,
                    )
                    critic_record["verdict"] = str(
                        verdict.get("verdict") or "untested-in-source"
                    )
                    critic_record["why"] = str(verdict.get("why") or "")
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
                        f"critic second-evaluation confirmation for "
                        f"{provisional_best['idea']}"
                    ),
                    "role": "critic",
                    "predicted_delta": provisional_best.get("predicted_delta"),
                    "verdict": critic_record["verdict"],
                    "accepted": accepted,
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
                if event_status == "keep" and event.get("commit"):
                    if git_text(conductor, "rev-parse", "HEAD") != event["commit"]:
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

            events = write_results(ledger_path, results_path)
            status_after, status_record = append_status(
                out_dir, profile, events, args.arm
            )
            copy_target = copy_artifacts_to_arm_branch(
                out_dir, conductor, args.arm
            )
            commit_arm_artifacts(conductor, copy_target, round_num)
            for candidate in candidate_records:
                if candidate.get("commit"):
                    tag = unique_tag(
                        repo,
                        f"run/swarm_{args.arm}/{round_num}-{candidate['agent']}",
                    )
                    git(conductor, "tag", tag, candidate["commit"])
                    tags_this_run.append(tag)
            if critic_event is not None:
                tag = unique_tag(
                    repo, f"run/swarm_{args.arm}/{round_num}-critic"
                )
                git(conductor, "tag", tag, critic_event["commit"])
                tags_this_run.append(tag)
            if not effective_no_push:
                git(conductor, "push", "origin", branch, *tags_this_run)
                tags_this_run.clear()
            candidates_done = sum(
                1
                for event in events
                if event.get("kind") == "candidate" and event.get("round", 0) > 0
            )
            write_round_summary(events, candidates_done)
            publish_viewer_state(out_dir, viewer_dest, final=False, status="running")
            if latest_candidate is not None and accepted:
                print(
                    f"round {round_num}: accepted {latest_candidate['commit']} "
                    f"at mean loss {best_val:.6f}"
                )
            else:
                print(f"round {round_num}: no candidate confirmed")

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
    try:
        return _orchestrate(args, publish_state)
    except BaseException:
        terminal_status = "stopped"
        raise
    finally:
        out_dir = publish_state.get("out_dir")
        if out_dir:
            run_path = Path(out_dir) / "run.json"
            if run_path.exists():
                try:
                    run_artifact = json.loads(run_path.read_text(encoding="utf-8"))
                    run_artifact["status"] = terminal_status
                    _write_run_artifact(out_dir, run_artifact)
                except Exception as error:
                    print(f"viewer run status update failed: {error}", file=sys.stderr)
            publish_viewer_state(
                out_dir, publish_state.get("dest"), final=True, status=terminal_status
            )


def build_parser():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--arm", choices=("A", "B", "C", "D"), default="B")
    parser.add_argument("--rounds", type=int, default=10)
    parser.add_argument("--repo", default=".")
    parser.add_argument("--out")
    parser.add_argument(
        "--llm", choices=("openai", "tinker", "fake"), default="openai"
    )
    parser.add_argument(
        "--task",
        required=True,
        choices=sorted(path.parent.name for path in TESTCASES.glob("*/task.json")),
        help="CPU benchmark to run with its sandboxed evaluator",
    )
    parser.add_argument("--model")
    parser.add_argument("--memory-backend", choices=("none", "local", "pastdev"))
    parser.add_argument("--exa", choices=("on", "off"), default="on")
    parser.add_argument("--replay", action="store_true")
    parser.add_argument("--no-push", action="store_true")
    parser.add_argument("--viewer-dest", help="directory for live viewer exports (default: <out>/viewer)")
    parser.add_argument("--no-viewer", action="store_true")
    return parser


def main(argv=None):
    parser = build_parser()
    args = parser.parse_args(argv)
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
