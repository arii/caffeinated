#!/usr/bin/env python3
"""Run a four-agent, meter-guided autoresearch swarm."""

import argparse
import csv
from contextlib import contextmanager, redirect_stdout
from datetime import datetime, timezone
import hashlib
import io
import json
import math
import os
from pathlib import Path
import re
import shutil
import subprocess
import sys
from types import SimpleNamespace

import boredom
from boredom import descriptor_meter as meter
import llm
import memory
import research


ROOT = Path(__file__).resolve().parent
DEFAULT_PROFILE = ROOT / "boredom_meter" / "profiles" / "autoresearch_llm.json"
BASELINE_COMMIT = "7017194"
BASELINE_VAL_BPB = 0.995814
AGENTS = tuple(f"worker-{number}" for number in range(1, 5))
RESULT_COLUMNS = (
    "commit",
    "val_bpb",
    "memory_gb",
    "status",
    "description",
    "agent",
    "round",
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


def allocate_roles(profile, events, agents=AGENTS, arm="B"):
    swarm_status = meter.status(profile, events)
    regime = "EXPLOIT" if arm == "A" else swarm_status["regime"]
    per_agent = {
        agent: meter.status(profile, events, agent=agent)["B"]
        for agent in agents
    }
    bored = sorted(
        (agent for agent in agents if per_agent[agent] >= 0.70),
        key=lambda agent: (-per_agent[agent], agent),
    )
    roles = {}
    scouts = []

    if arm == "A":
        roles = {agent: "exploit" for agent in agents}
        rationale = "Arm A keeps four exploit slots; meter-directed scouting is disabled."
    elif regime == "BOREDOM_SNAP":
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
        scouts = bored[:2]
        if len(scouts) < 2:
            remaining = sorted(
                (agent for agent in agents if agent not in scouts),
                key=lambda agent: (per_agent[agent], agent),
            )
            scouts.extend(remaining[: 2 - len(scouts)])
        roles = {agent: "divergent" for agent in agents}
        rationale = "BREAKOUT assigns four divergent slots and two scouts."
    elif regime == "CONVERGED":
        roles = {agent: "exploit" for agent in agents}
        rationale = "CONVERGED permits confirmation runs only."
    else:
        roles = {agent: "exploit" for agent in agents}
        if bored:
            scouts = [bored[0]]
            divergent_agent = scouts[0]
        else:
            divergent_agent = min(agents, key=lambda agent: (per_agent[agent], agent))
        roles[divergent_agent] = "divergent"
        rationale = "EXPLOIT assigns three exploit slots and one divergent slot."

    return {
        "swarm_B": swarm_status["B"],
        "regime": regime,
        "per_agent_B": per_agent,
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
            memory_gb = event.get("memory_gb")
            writer.writerow(
                [
                    event.get("commit") or "",
                    "" if score is None else f"{float(score):.6f}",
                    "" if memory_gb is None else f"{float(memory_gb):.1f}",
                    event.get("status", ""),
                    event.get("description", ""),
                    event.get("agent", ""),
                    event.get("round", 0),
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
        "best_val_bpb": status["best"],
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
        "best_val_bpb": f"{best_val:.6f}",
        "noise": str(profile.get("eps", 0.0036)),
        "round": round_num,
        "swarm_B": f"{status['swarm_B']:.3f}",
        "regime": status["regime"],
        "agent_B": f"{agent_b:.3f}",
        "role": role,
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
):
    record = {
        "type": "assignment",
        "ts": timestamp(),
        "round": round_num,
        "swarm_B": assignment["swarm_B"],
        "regime": assignment["regime"],
        "per_agent_B": assignment["per_agent_B"],
        "roles": assignment["roles"],
        "scouts": assignment["scouts"],
        "rationale": assignment["rationale"],
        "ledger_sha256": assignment["ledger_sha256"],
        "profile_sha256": assignment["profile_sha256"],
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
                "What exact train.py change, settings, and measured effect can "
                "be tested under a five-minute budget?"
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


def apply_edits(train_path, edits):
    text = Path(train_path).read_text(encoding="utf-8")
    edited = text
    for index, edit in enumerate(edits, 1):
        old = edit["old"]
        if not old or edited.count(old) != 1:
            count = edited.count(old) if old else 0
            raise EditError(
                f"edit {index}: old text must occur exactly once (found {count})"
            )
        edited = edited.replace(old, edit["new"], 1)
    Path(train_path).write_text(edited, encoding="utf-8")


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
        apply_edits(worktree / "train.py", proposal["edits"])
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
    git(worktree, "add", "--", "train.py")
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
):
    args = SimpleNamespace(
        command="gate",
        results=str(Path(out_dir) / "results.tsv"),
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
):
    memory_queries = [
        f"what has been tried involving {profile.get('objective', 'val_bpb')} and what happened",
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
    train_py = git(repo, "show", f"{current_base}:train.py").stdout
    common = common_values(
        agent, round_num, role, status, agent_b, best_commit, best_val, profile
    )
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
            "train_py": train_py,
            "vocab": json.dumps(profile.get("vocab", {}), sort_keys=True),
        },
    )
    attempts = []
    current_proposal = proposal
    for attempt in (1, 2):
        try:
            current_proposal = validate_proposal(profile, current_proposal)
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
                continue
            return {
                "agent": agent,
                "status": "reject",
                "score": None,
                "memory_gb": None,
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
                "memory_gb": None,
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
            "status": "pending" if gate_pass else "reject",
            "score": None,
            "memory_gb": None,
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
        if gate_pass:
            return candidate
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
        "memory_gb": None,
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


def fake_gpu_result(commit):
    digest = int(hashlib.sha256(commit.encode("utf-8")).hexdigest(), 16)
    score = 0.975 + 0.025 * digest / ((1 << 256) - 1)
    memory_gb = 44.0
    return {
        "commit": commit,
        "val_bpb": round(score, 6),
        "memory_gb": memory_gb,
        "status": "ok",
        "log": (
            "---\n"
            f"val_bpb: {score:.6f}\n"
            f"peak_vram_mb: {memory_gb * 1024:.0f}\n"
            "training_seconds: 300\n"
        ),
    }


def modal_gpu_burst(repo, commits, seed, out_dir):
    modal_bin = Path.home() / ".venvs" / "modal" / "bin"
    env = os.environ.copy()
    env["PATH"] = str(modal_bin) + os.pathsep + env.get("PATH", "")
    log_dir = Path(out_dir)
    log_dir.mkdir(parents=True, exist_ok=True)
    command = [
        "modal",
        "run",
        str(ROOT / "modal_run.py"),
        "--commits",
        ",".join(commits),
        "--seed",
        str(seed),
        "--out-dir",
        str(log_dir),
    ]
    result = subprocess.run(
        command,
        cwd=repo,
        capture_output=True,
        text=True,
        env=env,
        check=False,
    )
    parsed = {}
    for line in result.stdout.splitlines():
        fields = line.split("\t")
        if len(fields) != 4 or fields[0] not in commits:
            continue
        try:
            val_bpb = float(fields[1])
            memory_gb = float(fields[2])
        except ValueError:
            continue
        parsed[fields[0]] = {
            "commit": fields[0],
            "val_bpb": val_bpb,
            "memory_gb": memory_gb,
            "status": fields[3],
        }
    if result.returncode and not parsed:
        raise RuntimeError(
            "Modal burst failed: " + (result.stderr.strip() or result.stdout.strip())
        )
    for commit in commits:
        parsed.setdefault(
            commit,
            {
                "commit": commit,
                "val_bpb": None,
                "memory_gb": None,
                "status": "crash",
            },
        )
    return parsed, result.stdout, result.stderr


def run_gpu_burst(repo, commits, seed, out_dir, gpu_mode):
    if not commits:
        return {}, ""
    if gpu_mode == "fake":
        results = {commit: fake_gpu_result(commit) for commit in commits}
        for commit, result in results.items():
            result_path = Path(out_dir) / f"{commit}.log"
            result_path.parent.mkdir(parents=True, exist_ok=True)
            result_path.write_text(result["log"], encoding="utf-8")
            print(
                f"{commit}\t{result['val_bpb']:.6f}\t"
                f"{result['memory_gb']:.1f}\tok"
            )
        return results, ""
    results, stdout, stderr = modal_gpu_burst(repo, commits, seed, out_dir)
    for commit, result in results.items():
        if result.get("status") != "ok":
            result["status"] = "crash"
        print(
            f"{commit}\t"
            f"{result['val_bpb'] if result['val_bpb'] is not None else 'n/a'}\t"
            f"{result['memory_gb'] if result['memory_gb'] is not None else 'n/a'}\t"
            f"{result['status']}"
        )
    return results, stdout + stderr


def add_result_event(profile, ledger_path, candidate, round_num, status, score, memory_gb):
    event = {
        "kind": "candidate",
        "agent": candidate["agent"],
        "status": status,
        "score": score,
        "descriptor": candidate["descriptor"],
        "sources": candidate.get("sources", []),
        "commit": candidate.get("commit") or None,
        "round": round_num,
        "lead": candidate.get("lead"),
        "memory_gb": memory_gb,
        "description": candidate.get("description")
        or f"[{candidate.get('regime_label', 'EXPLOIT')}] {candidate.get('idea', '')}",
        "role": candidate.get("role"),
        "regime_label": candidate.get("regime_label", "EXPLOIT"),
        "predicted_delta": candidate.get("predicted_delta"),
        "gate_reasons": candidate.get("reasons", []),
        "gate_attempts": candidate.get("attempts", []),
    }
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
    memory_gb = event.get("memory_gb")
    content = (
        f"autoresearch {arm} round {event.get('round')} by {event.get('agent')}\n"
        f"Idea: {event.get('description', '')}\n"
        f"Outcome: {event.get('status')} (val_bpb "
        f"{'n/a' if value is None else f'{float(value):.6f}'}, memory "
        f"{'n/a' if memory_gb is None else f'{float(memory_gb):.1f}'} GB)\n"
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
            "val_bpb": value,
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
                    "seed42_val_bpb",
                    "seed43_val_bpb",
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
def arm_environment(arm, exa_enabled, memory_backend=None):
    names = (
        "AUTORESEARCH_ARM",
        "EXA",
        "BOREDOM",
        "PRIOR_ART",
        "GROUNDING",
        "MEMORY_BACKEND",
    )
    saved = {name: os.environ.get(name) for name in names}
    os.environ["AUTORESEARCH_ARM"] = arm
    os.environ["EXA"] = "on" if exa_enabled else "off"
    if memory_backend:
        os.environ["MEMORY_BACKEND"] = memory_backend
    elif arm in ("A", "D"):
        os.environ["MEMORY_BACKEND"] = "local"
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


def orchestrate(args):
    if args.rounds < 1 or args.rounds > 10:
        raise ValueError("--rounds must be between 1 and 10")
    if args.arm not in {"A", "B", "C", "D"}:
        raise ValueError("--arm must be A, B, C, or D")
    repo = Path(args.repo).resolve()
    git_text(repo, "rev-parse", "--show-toplevel")
    profile_path = Path(args.profile).resolve()
    profile = meter.load_profile(profile_path)
    start_commit = git_text(repo, "rev-parse", "HEAD")
    exa_enabled = (
        args.arm != "C"
        and os.environ.get("EXA", "").casefold() != "off"
        and args.exa != "off"
    )
    effective_no_push = args.no_push or args.gpu == "fake"
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
    ledger_path = out_dir / "ledger.jsonl"
    results_path = out_dir / "results.tsv"
    critic_path = out_dir / "critic.tsv"
    memory_mirror = out_dir / "memory.jsonl"
    memory_log = out_dir / "memory_log.jsonl"
    memory_backend = memory.selected_backend(args.memory_backend, args.arm)
    if args.arm in ("A", "D") and args.memory_backend is None:
        memory_backend = "local"
    llm_client = llm.LLMClient(
        mode=args.llm,
        model=args.model,
        log_path=out_dir / "llm_log.jsonl",
        prompt_dir=ROOT / "prompts",
        replay=args.replay,
    )
    if not critic_path.exists():
        critic_path.write_text(
            "round\tcommit\tseed42_val_bpb\tseed43_val_bpb\taccepted\tverdict\twhy\n",
            encoding="utf-8",
        )

    with arm_environment(args.arm, exa_enabled, args.memory_backend):
        if not meter.read_ledger(ledger_path):
            meter.submit(
                profile,
                ledger_path,
                {
                    "kind": "baseline",
                    "agent": "baseline",
                    "status": "keep",
                    "score": BASELINE_VAL_BPB,
                    "descriptor": {"mechanism": "baseline", "method": "none"},
                    "sources": [],
                    "commit": BASELINE_COMMIT,
                    "round": 0,
                    "lead": None,
                    "memory_gb": 44.0,
                    "description": "baseline",
                },
            )
        write_results(ledger_path, results_path)
        best_val = BASELINE_VAL_BPB
        best_metric_commit = BASELINE_COMMIT
        latest_candidate = None
        tags_this_run = []

        for round_num in range(1, args.rounds + 1):
            events = meter.read_ledger(ledger_path)
            allocation = allocate_roles(profile, events, AGENTS, args.arm)
            status = {
                **allocation,
                "ledger_sha256": allocation["ledger_sha256"],
                "profile_sha256": profile["_hash"],
            }
            events_for_scouts = list(events)
            cell_suggestions = suggest_cells(profile, events_for_scouts)
            allocation["suggested_cells"] = cell_suggestions
            append_assignment(
                allocation,
                out_dir=out_dir,
                backend=memory_backend,
                mirror=memory_mirror,
                memory_log=memory_log,
                arm=args.arm,
                round_num=round_num,
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
            base_commit = git_text(conductor, "rev-parse", "HEAD")
            for agent in AGENTS:
                role = allocation["roles"][agent]
                lead = lead_for_agent(agent, leads, all_leads)
                candidate = worker_attempts(
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
                    "CONVERGED": "EXPLOIT",
                }.get(allocation["regime"], "EXPLOIT")
                candidate_records.append(candidate)

            run_candidates = [
                candidate
                for candidate in candidate_records
                if candidate.get("status") == "pending"
            ]
            commits = [candidate["commit"] for candidate in run_candidates]
            gpu_results, gpu_output = run_gpu_burst(
                repo,
                commits,
                args.seed,
                out_dir / "runs",
                args.gpu,
            )
            provisional = []
            for candidate in run_candidates:
                result = gpu_results.get(candidate["commit"], {})
                candidate["score"] = result.get("val_bpb")
                candidate["memory_gb"] = result.get("memory_gb")
                candidate["gpu_status"] = result.get("status", "crash")
                if (
                    candidate["gpu_status"] == "ok"
                    and candidate["score"] is not None
                    and candidate["score"] < best_val - profile["eps"]
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
                critic_dir = out_dir / "runs" / "critic_seed43"
                critic_results, critic_output = run_gpu_burst(
                    repo,
                    [provisional_best["commit"]],
                    43,
                    critic_dir,
                    args.gpu,
                )
                critic_result = critic_results[provisional_best["commit"]]
                provisional_best["critic_score"] = critic_result.get("val_bpb")
                provisional_best["critic_memory_gb"] = critic_result.get("memory_gb")
                first_score = float(provisional_best["score"])
                second_score = critic_result.get("val_bpb")
                accepted = (
                    critic_result.get("status") == "ok"
                    and second_score is not None
                    and (first_score + float(second_score)) / 2
                    < previous_best_val - profile["eps"]
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
                    "memory_gb": critic_result.get("memory_gb"),
                    "description": (
                        f"critic seed-43 confirmation for "
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
                    if candidate.get("gpu_status") != "ok":
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
                    candidate.get("memory_gb"),
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
                critic_event = meter.submit(profile, ledger_path, critic_event)
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
            if latest_candidate is not None and accepted:
                print(
                    f"round {round_num}: accepted {latest_candidate['commit']} "
                    f"at mean val_bpb {best_val:.6f}"
                )
            else:
                print(f"round {round_num}: no candidate confirmed")

    return {
        "arm": args.arm,
        "branch": branch,
        "out": str(out_dir),
        "best_commit": best_metric_commit,
        "best_val_bpb": best_val,
        "no_push": effective_no_push,
    }


def build_parser():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--arm", choices=("A", "B", "C", "D"), default="B")
    parser.add_argument("--rounds", type=int, default=10)
    parser.add_argument("--repo", default=".")
    parser.add_argument("--out")
    parser.add_argument("--profile", default=str(DEFAULT_PROFILE))
    parser.add_argument("--llm", choices=("openai", "fake"), default="openai")
    parser.add_argument("--gpu", choices=("modal", "fake"), default="modal")
    parser.add_argument("--model")
    parser.add_argument("--memory-backend", choices=("none", "local", "pastdev"))
    parser.add_argument("--exa", choices=("on", "off"), default="on")
    parser.add_argument("--seed", type=int, default=42)
    parser.add_argument("--replay", action="store_true")
    parser.add_argument("--no-push", action="store_true")
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
        f"val_bpb={result['best_val_bpb']:.6f}; branch={result['branch']}; "
        f"out={result['out']}; pushed={not result['no_push']}"
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
