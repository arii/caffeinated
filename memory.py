#!/usr/bin/env python3
"""Store autoresearch run memories and recall prior results using past.dev."""

import argparse
import csv
from datetime import datetime, timezone
import hashlib
import json
import os
from pathlib import Path
import re
import subprocess
import sys
import time
from urllib.error import HTTPError, URLError
from urllib.parse import quote
from urllib.request import Request, urlopen

from boredom import commit_message, source_trailers
from research import read_log


DATA_IDENTITY = "autoresearch-agent"
RECALL_IDENTITY = "autoresearch"
REGIME_RE = re.compile(r"^\[(EXPLOIT|SNAP|BREAKOUT)\]")
RESULT_COLUMNS = {"commit", "val_bpb", "memory_gb", "status", "description"}


def utc_now():
    return datetime.now(timezone.utc).isoformat().replace("+00:00", "Z")


def commit_timestamp(commit, repo):
    try:
        result = subprocess.run(
            ["git", "log", "-1", "--format=%cI", commit],
            cwd=repo,
            check=True,
            capture_output=True,
            text=True,
        )
    except (OSError, subprocess.CalledProcessError):
        return utc_now()
    try:
        value = datetime.fromisoformat(result.stdout.strip().replace("Z", "+00:00"))
        return value.astimezone(timezone.utc).isoformat().replace("+00:00", "Z")
    except ValueError:
        return utc_now()


def commit_train_diff(commit, repo):
    try:
        result = subprocess.run(
            ["git", "show", "--format=", commit, "--", "train.py"],
            cwd=repo,
            check=True,
            capture_output=True,
            text=True,
        )
    except (OSError, subprocess.CalledProcessError):
        return None
    return result.stdout


def parse_float(value):
    try:
        number = float(value)
    except (TypeError, ValueError):
        return None
    return number if number == number and abs(number) != float("inf") else None


def safe_text(value):
    text = str(value)
    api_key = os.environ.get("PAST_API_KEY")
    return text.replace(api_key, "[REDACTED]") if api_key else text


def regime_for(description):
    match = REGIME_RE.match(description or "")
    if not match:
        return None
    return {
        "EXPLOIT": "EXPLOIT",
        "SNAP": "BOREDOM_SNAP",
        "BREAKOUT": "PARADIGM_BREAKOUT",
    }[match.group(1)]


def read_sources(path):
    sources = {}
    for record in read_log(path):
        if record.get("type") == "source" and record.get("id"):
            sources[str(record["id"])] = record
    return sources


def run_data_point(arm, row, repo, research_log):
    commit = str(row.get("commit", ""))
    description = str(row.get("description") or "")
    status = str(row.get("status") or "")
    value = parse_float(row.get("val_bpb"))
    memory_gb = row.get("memory_gb")
    regime = regime_for(description)
    timestamp = commit_timestamp(commit, repo)
    cited_ids, _ = source_trailers(commit_message(commit, repo))
    source_records = read_sources(research_log)

    content_lines = [
        f"autoresearch {arm} run {commit}, {timestamp}",
        f"Idea: {description}",
        f"Outcome: {status} (val_bpb {row.get('val_bpb')}, "
        f"memory {memory_gb if memory_gb not in (None, '') else 'n/a'} GB)",
    ]
    if regime:
        content_lines.append(f"Regime: {regime}")
    if cited_ids:
        source_descriptions = []
        for source_id in cited_ids:
            source = source_records.get(source_id, {})
            source_descriptions.append(
                " ".join(
                    part
                    for part in (
                        source_id,
                        str(source.get("title") or ""),
                        str(source.get("url") or ""),
                    )
                    if part
                )
            )
        content_lines.append("Sources: " + "; ".join(source_descriptions))

    diff = commit_train_diff(commit, repo)
    if diff is not None:
        if len(diff) > 3000:
            diff = diff[:3000] + "... [truncated]"
        content_lines.extend(["train.py diff:", diff])

    return {
        "id": f"run:{arm}:{commit}",
        "content": "\n".join(content_lines),
        "label": f"{arm} run {commit}: {description}"[:200],
        "timestamp": timestamp,
        "metadata": {
            "arm": arm,
            "commit": commit,
            "val_bpb": value,
            "status": status,
            "regime": regime,
            "sources": cited_ids,
        },
        "identity": DATA_IDENTITY,
    }


def api_request(method, path, payload=None):
    api_key = os.environ.get("PAST_API_KEY")
    if not api_key:
        raise RuntimeError("PAST_API_KEY is required")
    base_url = os.environ.get("PAST_BASE_URL", "https://api.past.dev").rstrip("/")
    body = None if payload is None else json.dumps(payload).encode("utf-8")
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Accept": "application/json",
    }
    if body is not None:
        headers["Content-Type"] = "application/json"
    request = Request(
        f"{base_url}/api/v1{path}",
        data=body,
        headers=headers,
        method=method,
    )
    try:
        with urlopen(request, timeout=30) as response:
            response_body = response.read().decode("utf-8")
    except HTTPError as error:
        raise RuntimeError(f"past.dev returned HTTP {error.code}") from error
    except URLError as error:
        raise RuntimeError(
            f"past.dev request failed: {safe_text(error.reason)}"
        ) from error
    try:
        result = json.loads(response_body)
    except json.JSONDecodeError as error:
        raise RuntimeError(
            f"past.dev returned invalid JSON: {safe_text(response_body)}"
        ) from error
    if not isinstance(result, dict):
        raise RuntimeError(
            f"unexpected past.dev response for {method} {path}: "
            f"{safe_text(response_body)}"
        )
    return result


def wait_for_ingestion(response, wait):
    status = response.get("status")
    if status == "failed":
        raise RuntimeError(f"ingestion failed: {safe_text(response.get('failure'))}")
    if status not in ("queued", "processing", "completed"):
        raise RuntimeError(
            f"unexpected past.dev ingestion response: {safe_text(json.dumps(response))}"
        )
    if status == "completed":
        return
    ingestion_id = response.get("ingestionId")
    if not ingestion_id:
        raise RuntimeError(
            "unexpected past.dev ingestion response: "
            f"{safe_text(json.dumps(response))}"
        )
    if not wait:
        return
    try:
        interval = float(os.environ.get("PAST_POLL_SECONDS", "2"))
    except ValueError as error:
        raise RuntimeError("PAST_POLL_SECONDS must be a non-negative number") from error
    if interval < 0:
        raise RuntimeError("PAST_POLL_SECONDS must be a non-negative number")

    deadline = time.monotonic() + 180
    while True:
        remaining = deadline - time.monotonic()
        if remaining <= 0:
            raise RuntimeError(f"timed out waiting for ingestion {ingestion_id}")
        time.sleep(min(interval, remaining))
        result = api_request(
            "GET", f"/ingest/{quote(str(ingestion_id), safe='')}"
        )
        status = result.get("status")
        if status == "completed":
            return
        if status == "failed":
            failure = result.get("failure")
            raise RuntimeError(f"ingestion failed: {safe_text(failure)}")
        if status != "processing":
            raise RuntimeError(
                "unexpected past.dev ingestion status: "
                f"{safe_text(json.dumps(result))}"
            )


def remember(args):
    row = {
        "commit": args.commit,
        "val_bpb": args.val_bpb,
        "memory_gb": args.memory_gb,
        "status": args.status,
        "description": args.description,
    }
    item = run_data_point(args.arm, row, args.repo, args.research_log)
    response = api_request("POST", "/ingest", item)
    wait_for_ingestion(response, args.wait)
    print(f"remembered {item['id']} ({args.status})")
    return 0


def read_results(path):
    path = Path(path)
    with path.open(newline="", encoding="utf-8") as results_file:
        reader = csv.DictReader(results_file, delimiter="\t")
        if not RESULT_COLUMNS.issubset(reader.fieldnames or []):
            raise ValueError(f"{path} is missing required columns")
        return list(reader)


def sync(args):
    items = []
    seen_commits = set()
    for row in read_results(args.results):
        commit = row.get("commit", "")
        if not commit or commit in seen_commits:
            continue
        seen_commits.add(commit)
        items.append(run_data_point(args.arm, row, args.repo, args.research_log))

    if not items:
        print(f"synced 0 runs for {args.arm} (ingestion none)")
        return 0

    serialized_items = json.dumps(items, sort_keys=True, separators=(",", ":"))
    digest = hashlib.sha256(serialized_items.encode("utf-8")).hexdigest()[:16]
    idempotency_key = f"sync:{args.arm}:{digest}"
    response = api_request(
        "POST",
        "/ingest/batch",
        {"idempotencyKey": idempotency_key, "items": items},
    )
    wait_for_ingestion(response, args.wait)
    ingestion_id = response.get("ingestionId")
    if not ingestion_id:
        raise RuntimeError(
            f"unexpected past.dev batch response: {safe_text(json.dumps(response))}"
        )
    print(f"synced {len(items)} runs for {args.arm} (ingestion {ingestion_id})")
    return 0


def append_recall_log(path, record):
    path = Path(path)
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("a", encoding="utf-8") as log_file:
        log_file.write(json.dumps(record, sort_keys=True) + "\n")


def pending_count(value):
    if isinstance(value, int):
        return value
    if isinstance(value, list):
        return len(value)
    if isinstance(value, dict):
        count = value.get("count")
        return count if isinstance(count, int) else len(value)
    return 1 if value else 0


def recall(args):
    response = api_request(
        "POST",
        "/recall",
        {"query": args.query, "identity": RECALL_IDENTITY, "limit": args.limit},
    )
    results = response.get("results")
    if not isinstance(results, list):
        raise RuntimeError(
            "unexpected past.dev recall response: "
            f"{safe_text(json.dumps(response))}"
        )

    source_ids = []
    for result in results:
        for source in result.get("sources") or []:
            source_id = source.get("sourceId")
            if source_id and source_id not in source_ids:
                source_ids.append(source_id)
    append_recall_log(
        args.log,
        {
            "type": "recall",
            "ts": utc_now(),
            "query": args.query,
            "n_results": len(results),
            "source_ids": source_ids,
        },
    )

    if "pending" in response:
        print(
            f"note: {pending_count(response['pending'])} ingestions still processing",
            file=sys.stderr,
        )
    if args.json:
        print(json.dumps(response, ensure_ascii=False))
    elif not results:
        print("No memories found.")
    else:
        for index, result in enumerate(results, start=1):
            rank = result.get("rank", index)
            occurred_at = str(result.get("occurredAt") or "")[:10]
            artifact = result.get("artifact") or {}
            kind = artifact.get("kind", "unknown")
            content = str(result.get("content") or "")[:300]
            print(f"#{rank} {occurred_at} [{kind}] {content}")
            for source in result.get("sources") or []:
                print(
                    f"   from: {source.get('sourceId', '')} — "
                    f"{source.get('label', '')}"
                )
    return 0


def build_parser():
    parser = argparse.ArgumentParser(description=__doc__)
    subparsers = parser.add_subparsers(dest="command", required=True)

    remember_parser = subparsers.add_parser("remember")
    remember_parser.add_argument("--commit", required=True)
    remember_parser.add_argument("--val-bpb", required=True)
    remember_parser.add_argument("--status", required=True)
    remember_parser.add_argument("--description", required=True)
    remember_parser.add_argument("--memory-gb", type=float)
    remember_parser.add_argument("--arm", default="boredom")
    remember_parser.add_argument("--repo", default=".")
    remember_parser.add_argument("--research-log", default="research_log.jsonl")
    remember_parser.add_argument("--wait", action="store_true")
    remember_parser.set_defaults(func=remember)

    sync_parser = subparsers.add_parser("sync")
    sync_parser.add_argument("--arm", required=True)
    sync_parser.add_argument("--results", required=True)
    sync_parser.add_argument("--repo", default=".")
    sync_parser.add_argument("--research-log", default="research_log.jsonl")
    sync_parser.add_argument("--wait", action="store_true")
    sync_parser.set_defaults(func=sync)

    recall_parser = subparsers.add_parser("recall")
    recall_parser.add_argument("query")
    recall_parser.add_argument("--limit", type=int, default=8)
    recall_parser.add_argument("--json", action="store_true")
    recall_parser.add_argument("--log", default="memory_log.jsonl")
    recall_parser.set_defaults(func=recall)
    return parser


def main(argv=None):
    parser = build_parser()
    args = parser.parse_args(argv)
    if args.command == "recall" and args.limit < 1:
        parser.error("--limit must be at least 1")
    try:
        if not os.environ.get("PAST_API_KEY"):
            raise RuntimeError("PAST_API_KEY is required")
        return args.func(args)
    except (OSError, ValueError, RuntimeError) as error:
        print(f"memory.py: {error}", file=sys.stderr)
        return 2


if __name__ == "__main__":
    raise SystemExit(main())
