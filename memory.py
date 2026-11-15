#!/usr/bin/env python3
"""Store autoresearch run memories and recall prior results using past.dev."""

import argparse
import csv
from datetime import datetime, timezone
import hashlib
import json
import math
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
RESULT_COLUMNS = {"commit", "loss", "memory_gb", "status", "description"}
MEMORY_TYPES = {"lead", "claim", "result", "verdict", "lesson", "assignment"}
_ENSURED_AUDIENCES = set()


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


def commit_candidate_diff(commit, repo):
    try:
        result = subprocess.run(
            [
                "git",
                "show",
                "--format=",
                commit,
                "--",
                os.environ.get("AUTORESEARCH_TARGET", "candidate.py"),
            ],
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
    secrets = sorted(
        (
            secret
            for name, secret in os.environ.items()
            if name.startswith("PAST_API_KEY") and secret
        ),
        key=len,
        reverse=True,
    )
    for secret in secrets:
        text = text.replace(secret, "[REDACTED]")
    return text


def api_key_for_arm(arm=None):
    arm = arm or os.environ.get("AUTORESEARCH_ARM")
    if arm:
        key = os.environ.get(f"PAST_API_KEY_{arm.upper()}")
        if key:
            return key
    return os.environ.get("PAST_API_KEY")


def audience_for_arm(arm=None):
    arm = str(arm or os.environ.get("AUTORESEARCH_ARM") or "").casefold()
    if not re.fullmatch(r"[a-z]", arm):
        return None
    return f"arm-{arm}", f"swarm-arm-{arm}"


def ensure_arm_audience(arm=None, api_key=None):
    audience = audience_for_arm(arm)
    if audience is None:
        return None
    slug, identity = audience
    api_key = api_key or api_key_for_arm(arm)
    if not api_key:
        raise RuntimeError("PAST_API_KEY is required for pastdev backend")
    base_url = os.environ.get("PAST_BASE_URL", "https://api.past.dev").rstrip("/")
    cache_key = (
        base_url,
        hashlib.sha256(api_key.encode("utf-8")).hexdigest(),
        slug,
    )
    if cache_key not in _ENSURED_AUDIENCES:
        api_request(
            "PUT",
            f"/audiences/{quote(slug, safe='')}",
            {"kind": "fixed", "identities": [identity]},
            api_key=api_key,
        )
        _ENSURED_AUDIENCES.add(cache_key)
    return slug, identity


def selected_backend(backend=None, arm=None):
    backend = backend or os.environ.get("MEMORY_BACKEND")
    if backend is None:
        backend = "pastdev" if api_key_for_arm(arm) else "local"
    backend = backend.casefold()
    if backend not in {"none", "local", "pastdev"}:
        raise ValueError("memory backend must be none, local, or pastdev")
    return backend


def selected_mirror(mirror=None):
    return Path(mirror or os.environ.get("MEMORY_MIRROR", "memory.jsonl"))


def selected_log(log=None):
    return Path(log or os.environ.get("MEMORY_LOG", "memory_log.jsonl"))


def arm_run_scope(arm=None, run_id=None):
    arm = arm or os.environ.get("AUTORESEARCH_ARM")
    if not arm:
        return None
    run_id = run_id or os.environ.get("AUTORESEARCH_RUN_ID")
    if not run_id:
        raise ValueError("arm-scoped pastdev memory requires --run-id or AUTORESEARCH_RUN_ID")
    return {"arm": str(arm).upper(), "run_id": run_id}


def append_jsonl(path, record):
    path = Path(path)
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("a", encoding="utf-8") as log_file:
        log_file.write(json.dumps(record, sort_keys=True) + "\n")


def memory_payload(mem_type, memory_id, content, author, metadata, timestamp):
    if mem_type not in MEMORY_TYPES:
        raise ValueError(f"memory type must be one of {', '.join(sorted(MEMORY_TYPES))}")
    if not memory_id or "/" in memory_id:
        raise ValueError("memory id must be non-empty and must not contain '/'")
    if not isinstance(metadata, dict):
        raise ValueError("metadata must be a JSON object")
    enriched_metadata = {**metadata, "type": mem_type, "author": author}
    return {
        "id": memory_id,
        "content": content,
        "label": f"{mem_type} by {author}",
        "timestamp": timestamp,
        "metadata": enriched_metadata,
        "identity": author,
    }


def append_mirror(mirror, payload, source_id):
    record = {
        "id": payload["id"],
        "sourceId": source_id or payload["id"],
        "content": payload["content"],
        "label": payload["label"],
        "timestamp": payload["timestamp"],
        "author": payload["identity"],
        "metadata": payload["metadata"],
    }
    if payload.get("audience"):
        record["audience"] = payload["audience"]
    append_jsonl(mirror, record)


def append_write_log(log, memory_id, mem_type, author, backend, latency_ms,
                     completed_ms, audience=None):
    record = {
        "type": "write",
        "ts": utc_now(),
        "agent": author,
        "backend": backend,
        "id": memory_id,
        "mem_type": mem_type,
        "latency_ms": latency_ms,
        "completed_ms": completed_ms,
    }
    if audience:
        record["audience"] = audience
    append_jsonl(log, record)


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
    value = parse_float(row.get("loss"))
    memory_gb = row.get("memory_gb")
    regime = regime_for(description)
    timestamp = commit_timestamp(commit, repo)
    cited_ids, _ = source_trailers(commit_message(commit, repo))
    source_records = read_sources(research_log)

    content_lines = [
        f"autoresearch {arm} run {commit}, {timestamp}",
        f"Idea: {description}",
        f"Outcome: {status} (loss {row.get('loss')}, "
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

    diff = commit_candidate_diff(commit, repo)
    if diff is not None:
        if len(diff) > 3000:
            diff = diff[:3000] + "... [truncated]"
        content_lines.extend(["candidate diff:", diff])

    return {
        "id": f"run:{arm}:{commit}",
        "content": "\n".join(content_lines),
        "label": f"{arm} run {commit}: {description}"[:200],
        "timestamp": timestamp,
        "metadata": {
            "arm": arm,
            "commit": commit,
            "loss": value,
            "status": status,
            "regime": regime,
            "sources": cited_ids,
        },
        "identity": DATA_IDENTITY,
    }


def api_request(method, path, payload=None, api_key=None):
    api_key = api_key or api_key_for_arm()
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


def wait_for_ingestion(response, wait, api_key=None, started_at=None):
    status = response.get("status")
    if status == "failed":
        raise RuntimeError(f"ingestion failed: {safe_text(response.get('failure'))}")
    if status not in ("queued", "processing", "completed"):
        raise RuntimeError(
            f"unexpected past.dev ingestion response: {safe_text(json.dumps(response))}"
        )
    if status == "completed":
        return 0
    ingestion_id = response.get("ingestionId")
    if not ingestion_id:
        raise RuntimeError(
            "unexpected past.dev ingestion response: "
            f"{safe_text(json.dumps(response))}"
        )
    if not wait:
        return None
    try:
        interval = float(os.environ.get("PAST_POLL_SECONDS", "2"))
    except ValueError as error:
        raise RuntimeError("PAST_POLL_SECONDS must be a non-negative number") from error
    if interval < 0:
        raise RuntimeError("PAST_POLL_SECONDS must be a non-negative number")

    started_at = started_at or time.monotonic()
    deadline = time.monotonic() + 180
    while True:
        remaining = deadline - time.monotonic()
        if remaining <= 0:
            raise RuntimeError(f"timed out waiting for ingestion {ingestion_id}")
        time.sleep(min(interval, remaining))
        result = api_request(
            "GET", f"/ingest/{quote(str(ingestion_id), safe='')}", api_key=api_key
        )
        status = result.get("status")
        if status == "completed":
            return int((time.monotonic() - started_at) * 1000)
        if status == "failed":
            failure = result.get("failure")
            raise RuntimeError(f"ingestion failed: {safe_text(failure)}")
        if status != "processing":
            raise RuntimeError(
                "unexpected past.dev ingestion status: "
                f"{safe_text(json.dumps(result))}"
            )


def write(type, id, content, author, metadata, timestamp=None, wait=False,
          *, backend=None, mirror=None, log=None, arm=None, run_id=None):
    mem_type = type
    memory_id = id
    backend = selected_backend(backend, arm)
    mirror_path = selected_mirror(mirror)
    log_path = selected_log(log)
    when = timestamp or utc_now()
    payload = memory_payload(
        mem_type, memory_id, content, author, metadata, when
    )
    if backend == "pastdev":
        scope = arm_run_scope(arm, run_id or os.environ.get("AUTORESEARCH_RUN_ID") or metadata.get("run_id"))
        payload["metadata"].update(scope or {})
    ingestion_id = None
    completed_ms = None
    audience = None
    if backend == "none":
        source_id = None
        latency_ms = 0
        completed_ms = 0
    elif backend == "local":
        source_id = memory_id
        latency_ms = 0
        completed_ms = 0
        append_mirror(mirror_path, payload, source_id)
    else:
        api_key = api_key_for_arm(arm)
        if not api_key:
            raise RuntimeError("PAST_API_KEY is required for pastdev backend")
        audience_scope = ensure_arm_audience(arm, api_key)
        if audience_scope:
            audience = audience_scope[0]
            payload["audience"] = audience
        started_at = time.monotonic()
        response = api_request("POST", "/ingest", payload, api_key=api_key)
        latency_ms = int((time.monotonic() - started_at) * 1000)
        completed_ms = wait_for_ingestion(
            response, wait, api_key=api_key, started_at=started_at
        )
        source_id = response.get("sourceId") or memory_id
        ingestion_id = response.get("ingestionId")
        append_mirror(mirror_path, payload, source_id)

    append_write_log(
        log_path,
        memory_id,
        mem_type,
        author,
        backend,
        latency_ms,
        completed_ms,
        audience,
    )
    return {
        "sourceId": source_id,
        "ingestionId": ingestion_id,
        "latency_ms": latency_ms,
        "completed_ms": completed_ms,
    }


def remember(args):
    arm = args.arm or os.environ.get("AUTORESEARCH_ARM") or "boredom"
    row = {
        "commit": args.commit,
        "loss": args.loss,
        "memory_gb": args.memory_gb,
        "status": args.status,
        "description": args.description,
    }
    item = run_data_point(arm, row, args.repo, args.research_log)
    write(
        "result",
        item["id"],
        item["content"],
        DATA_IDENTITY,
        item["metadata"],
        timestamp=item["timestamp"],
        wait=args.wait,
        backend=args.backend,
        mirror=args.mirror,
        log=args.log,
        arm=arm,
        run_id=args.run_id,
    )
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

    backend = selected_backend(args.backend, args.arm)
    typed_items = [
        memory_payload(
            "result",
            item["id"],
            item["content"],
            DATA_IDENTITY,
            item["metadata"],
            item["timestamp"],
        )
        for item in items
    ]
    if backend != "pastdev":
        for item in typed_items:
            write(
                "result",
                item["id"],
                item["content"],
                DATA_IDENTITY,
                item["metadata"],
                timestamp=item["timestamp"],
                backend=backend,
                mirror=args.mirror,
                log=args.log,
                arm=args.arm,
            )
        print(f"synced {len(items)} runs for {args.arm} (ingestion {backend})")
        return 0

    scope = arm_run_scope(args.arm, args.run_id)
    for item in typed_items:
        item["metadata"].update(scope or {})
    api_key = api_key_for_arm(args.arm)
    if not api_key:
        raise RuntimeError("PAST_API_KEY is required for pastdev backend")
    audience_scope = ensure_arm_audience(args.arm, api_key)
    audience = audience_scope[0] if audience_scope else None
    if audience:
        for item in typed_items:
            item["audience"] = audience
    serialized_items = json.dumps(typed_items, sort_keys=True, separators=(",", ":"))
    digest = hashlib.sha256(serialized_items.encode("utf-8")).hexdigest()[:16]
    idempotency_key = f"sync:{args.arm}:{digest}"
    started_at = time.monotonic()
    response = api_request(
        "POST",
        "/ingest/batch",
        {"idempotencyKey": idempotency_key, "items": typed_items},
        api_key=api_key,
    )
    latency_ms = int((time.monotonic() - started_at) * 1000)
    completed_ms = wait_for_ingestion(
        response, args.wait, api_key=api_key, started_at=started_at
    )
    ingestion_id = response.get("ingestionId")
    if not ingestion_id:
        raise RuntimeError(
            f"unexpected past.dev batch response: {safe_text(json.dumps(response))}"
        )
    response_items = response.get("items") or []
    ordinals = [
        response_item.get("ordinal")
        for response_item in response_items
        if isinstance(response_item.get("ordinal"), int)
    ]
    ordinal_base = 0 if 0 in ordinals else 1
    for ordinal, item in enumerate(typed_items):
        source_id = item["id"]
        for response_item in response_items:
            if response_item.get("ordinal") == ordinal + ordinal_base:
                source_id = response_item.get("sourceId") or source_id
                break
        append_mirror(selected_mirror(args.mirror), item, source_id)
        append_write_log(
            selected_log(args.log),
            item["id"],
            "result",
            DATA_IDENTITY,
            backend,
            latency_ms,
            completed_ms,
            audience,
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


def read_mirror(mirror):
    path = Path(mirror)
    if not path.exists():
        return []
    records = []
    with path.open(encoding="utf-8") as mirror_file:
        for line_number, line in enumerate(mirror_file, start=1):
            if not line.strip():
                continue
            try:
                records.append(json.loads(line))
            except json.JSONDecodeError as error:
                raise ValueError(
                    f"invalid JSON in {path}, line {line_number}"
                ) from error
    return records


def mirror_source_index(mirror):
    indexed = {}
    for record in read_mirror(mirror):
        source_id = record.get("sourceId") or record.get("id")
        if source_id:
            indexed[str(source_id)] = record
    return indexed


def source_author_type(source, mirror_index):
    source_id = str(source.get("sourceId") or "")
    metadata = source.get("metadata")
    if not isinstance(metadata, dict):
        metadata = {}
    mirror_record = mirror_index.get(source_id, {})
    mirror_metadata = mirror_record.get("metadata")
    if not isinstance(mirror_metadata, dict):
        mirror_metadata = {}
    author = (
        source.get("author")
        or metadata.get("author")
        or mirror_record.get("author")
        or mirror_metadata.get("author")
    )
    mem_type = (
        metadata.get("type")
        or mirror_metadata.get("type")
        or source.get("type")
        or mirror_record.get("type")
    )
    return author, mem_type


def word_tokens(value):
    return set(re.findall(r"\w+", str(value or "").casefold()))


def timestamp_value(value):
    if not value:
        return None
    try:
        parsed = datetime.fromisoformat(str(value).replace("Z", "+00:00"))
        if parsed.tzinfo is None:
            parsed = parsed.replace(tzinfo=timezone.utc)
        return parsed.astimezone(timezone.utc)
    except ValueError:
        return None


def is_before_query_timestamp(value, query_timestamp):
    if query_timestamp is None:
        return True
    occurred_at = timestamp_value(value)
    return occurred_at is None or occurred_at <= query_timestamp


def local_recall_results(query, limit, query_timestamp, mirror):
    query_words = word_tokens(query)
    records = [
        record
        for record in read_mirror(mirror)
        if is_before_query_timestamp(
            record.get("timestamp") or record.get("occurred_at"), query_timestamp
        )
    ]
    documents = [word_tokens(record.get("content")) for record in records]
    document_frequency = {
        word: sum(word in document for document in documents)
        for word in query_words
    }
    inverse_frequency = {
        word: math.log((len(records) + 1) / (frequency + 1)) + 1
        for word, frequency in document_frequency.items()
    }
    scored = []
    for index, (record, document) in enumerate(zip(records, documents)):
        score = sum(
            inverse_frequency[word]
            for word in query_words
            if word in document
        )
        if score <= 0:
            continue
        metadata = record.get("metadata") or {}
        source_id = record.get("sourceId") or record.get("id")
        scored.append(
            (
                score,
                str(record.get("timestamp") or ""),
                index,
                {
                    "content": record.get("content", ""),
                    "kind": metadata.get("type") or record.get("type") or "unknown",
                    "occurred_at": record.get("timestamp") or "",
                    "sources": [
                        {
                            "sourceId": source_id,
                            "label": record.get("label", ""),
                            "author": record.get("author")
                            or metadata.get("author"),
                            "type": metadata.get("type") or record.get("type"),
                        }
                    ],
                },
            )
        )
    scored.sort(key=lambda item: (item[0], item[1], item[2]), reverse=True)
    results = []
    for rank, (_, _, _, result) in enumerate(scored[:limit], start=1):
        results.append({"rank": rank, **result})
    used_tokens = sum(len(word_tokens(result["content"])) for result in results)
    return results, used_tokens


def normalize_pastdev_results(response, mirror):
    raw_results = response.get("results")
    if not isinstance(raw_results, list):
        raise RuntimeError(
            "unexpected past.dev recall response: "
            f"{safe_text(json.dumps(response))}"
        )
    mirror_index = mirror_source_index(mirror)
    results = []
    for index, result in enumerate(raw_results, start=1):
        artifact = result.get("artifact") or {}
        sources = []
        for source in result.get("sources") or []:
            author, mem_type = source_author_type(source, mirror_index)
            sources.append(
                {
                    "sourceId": source.get("sourceId", ""),
                    "label": source.get("label", ""),
                    "author": author,
                    "type": mem_type,
                }
            )
        results.append(
            {
                "rank": result.get("rank", index),
                "content": result.get("content") or "",
                "kind": artifact.get("kind", "unknown"),
                "occurred_at": result.get("occurredAt") or "",
                "sources": sources,
            }
        )
    return results


def scoped_pastdev_response(response, mirror, scope):
    mirror_index = mirror_source_index(mirror)

    def matches(metadata):
        metadata = metadata if isinstance(metadata, dict) else {}
        return (
            ("arm" not in metadata or str(metadata["arm"]).upper() == scope["arm"])
            and ("run_id" not in metadata or metadata["run_id"] == scope["run_id"])
        )

    results = []
    raw_results = response.get("results")
    if not isinstance(raw_results, list):
        raise RuntimeError("unexpected past.dev recall response: results must be a list")
    for result in raw_results:
        sources = []
        for source in result.get("sources") or []:
            record = mirror_index.get(str(source.get("sourceId") or ""))
            if record is not None and all(matches(item.get("metadata")) for item in (record, source, result)):
                sources.append(source)
        if sources:
            results.append({**result, "sources": sources})
    return {**response, "results": results}, len(raw_results) - len(results)


def _recall(query, agent, limit=8, query_timestamp=None, *, backend=None,
            mirror=None, log=None, arm=None, run_id=None):
    backend = selected_backend(backend, arm)
    mirror_path = selected_mirror(mirror)
    log_path = selected_log(log)
    cutoff = timestamp_value(query_timestamp)
    started_at = time.monotonic()
    pending = 0
    raw_response = None
    audience = None
    recall_identity = agent
    dropped_count = 0
    if backend == "none":
        results = []
        used_tokens = 0
    elif backend == "local":
        results, used_tokens = local_recall_results(
            query, limit, cutoff, mirror_path
        )
    else:
        scope = arm_run_scope(arm, run_id)
        api_key = api_key_for_arm(arm)
        if not api_key:
            raise RuntimeError("PAST_API_KEY is required for pastdev backend")
        audience_scope = ensure_arm_audience(arm, api_key)
        if audience_scope:
            audience, recall_identity = audience_scope
        response = api_request(
            "POST",
            "/recall",
            {"query": query, "identity": recall_identity, "limit": limit},
            api_key=api_key,
        )
        if scope:
            response, dropped_count = scoped_pastdev_response(response, mirror_path, scope)
        raw_response = response
        results = normalize_pastdev_results(response, mirror_path)
        if cutoff is not None:
            results = [
                result
                for result in results
                if is_before_query_timestamp(result.get("occurred_at"), cutoff)
            ]
        used_tokens = response.get("usedEvidenceTokens", 0)
        pending = pending_count(response.get("pending"))

    latency_ms = int((time.monotonic() - started_at) * 1000)
    source_ids = []
    authors = []
    for result in results:
        for source in result.get("sources") or []:
            source_id = source.get("sourceId")
            author = source.get("author")
            if source_id and source_id not in source_ids:
                source_ids.append(source_id)
            if author and author not in authors:
                authors.append(author)
    log_record = {
        "type": "recall",
        "ts": utc_now(),
        "agent": agent,
        "backend": backend,
        "query": query,
        "latency_ms": latency_ms,
        "used_evidence_tokens": used_tokens,
        "n_results": len(results),
        "source_ids": source_ids,
        "authors": authors,
        "pending": pending,
        "dropped_count": dropped_count,
    }
    if audience:
        log_record["audience"] = audience
    append_recall_log(log_path, log_record)
    recall_result = {
        "results": results,
        "latency_ms": latency_ms,
        "used_evidence_tokens": used_tokens,
        "pending": pending,
    }
    if raw_response is not None:
        recall_result["_raw_response"] = raw_response
    return recall_result


def recall(query, agent, limit=8, query_timestamp=None, *, backend=None,
           mirror=None, log=None, arm=None, run_id=None):
    result = _recall(
        query,
        agent,
        limit,
        query_timestamp,
        backend=backend,
        mirror=mirror,
        log=log,
        arm=arm,
        run_id=run_id,
    )
    result.pop("_raw_response", None)
    return result


def recall_command(args):
    result = _recall(
        args.query,
        args.agent or os.environ.get("AUTORESEARCH_AGENT") or RECALL_IDENTITY,
        args.limit,
        args.query_timestamp,
        backend=args.backend,
        mirror=args.mirror,
        log=args.log,
        arm=args.arm,
        run_id=args.run_id,
    )
    raw_response = result.pop("_raw_response", None)
    if result["pending"]:
        print(
            f"note: {result['pending']} ingestions still processing",
            file=sys.stderr,
        )
    if args.json:
        print(
            json.dumps(
                raw_response if raw_response is not None else result,
                ensure_ascii=False,
            )
        )
    elif not result["results"]:
        print("No memories found.")
    else:
        for item in result["results"]:
            occurred_at = str(item.get("occurred_at") or "")[:10]
            content = str(item.get("content") or "")[:300]
            print(f"#{item['rank']} {occurred_at} [{item['kind']}] {content}")
            for source in item.get("sources") or []:
                print(
                    f"   from: {source.get('sourceId', '')} — "
                    f"{source.get('label', '')}"
                )
    return 0


def write_command(args):
    try:
        metadata = json.loads(args.metadata)
    except json.JSONDecodeError as error:
        raise ValueError("--metadata must be a JSON object") from error
    if not isinstance(metadata, dict):
        raise ValueError("--metadata must be a JSON object")
    write(
        args.type,
        args.id,
        args.content,
        args.author,
        metadata,
        timestamp=args.timestamp,
        wait=args.wait,
        backend=args.backend,
        mirror=args.mirror,
        log=args.log,
        arm=args.arm,
        run_id=args.run_id,
    )
    print(f"wrote {args.id} ({args.type})")
    return 0


def add_backend_options(parser):
    parser.add_argument("--backend", choices=("none", "local", "pastdev"))
    parser.add_argument("--mirror")
    parser.add_argument("--log")
    parser.add_argument("--run-id")


def build_parser():
    parser = argparse.ArgumentParser(description=__doc__)
    subparsers = parser.add_subparsers(dest="command", required=True)

    write_parser = subparsers.add_parser("write")
    write_parser.add_argument("--type", required=True, choices=sorted(MEMORY_TYPES))
    write_parser.add_argument("--id", required=True)
    write_parser.add_argument("--content", required=True)
    write_parser.add_argument("--author", required=True)
    write_parser.add_argument("--metadata", default="{}")
    write_parser.add_argument("--timestamp")
    write_parser.add_argument("--wait", action="store_true")
    write_parser.add_argument("--arm")
    add_backend_options(write_parser)
    write_parser.set_defaults(func=write_command)

    remember_parser = subparsers.add_parser("remember")
    remember_parser.add_argument("--commit", required=True)
    remember_parser.add_argument("--loss", required=True)
    remember_parser.add_argument("--status", required=True)
    remember_parser.add_argument("--description", required=True)
    remember_parser.add_argument("--memory-gb", type=float)
    remember_parser.add_argument("--arm")
    remember_parser.add_argument("--repo", default=".")
    remember_parser.add_argument("--research-log", default="research_log.jsonl")
    remember_parser.add_argument("--wait", action="store_true")
    add_backend_options(remember_parser)
    remember_parser.set_defaults(func=remember)

    sync_parser = subparsers.add_parser("sync")
    sync_parser.add_argument("--arm", required=True)
    sync_parser.add_argument("--results", required=True)
    sync_parser.add_argument("--repo", default=".")
    sync_parser.add_argument("--research-log", default="research_log.jsonl")
    sync_parser.add_argument("--wait", action="store_true")
    add_backend_options(sync_parser)
    sync_parser.set_defaults(func=sync)

    recall_parser = subparsers.add_parser("recall")
    recall_parser.add_argument("query")
    recall_parser.add_argument("--limit", type=int, default=8)
    recall_parser.add_argument("--json", action="store_true")
    recall_parser.add_argument("--agent")
    recall_parser.add_argument("--arm")
    recall_parser.add_argument("--query-timestamp")
    add_backend_options(recall_parser)
    recall_parser.set_defaults(func=recall_command)
    return parser


def main(argv=None):
    parser = build_parser()
    args = parser.parse_args(argv)
    if args.command == "recall" and args.limit < 1:
        parser.error("--limit must be at least 1")
    try:
        return args.func(args)
    except (OSError, ValueError, RuntimeError) as error:
        print(f"memory.py: {error}", file=sys.stderr)
        return 2


if __name__ == "__main__":
    raise SystemExit(main())
