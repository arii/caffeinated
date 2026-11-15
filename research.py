#!/usr/bin/env python3
"""Search, inspect, and extract Exa sources. Set EXA_API_KEY for live requests."""

import argparse
import hashlib
import json
import os
import re
import sys
import time
from datetime import date, datetime, timedelta, timezone
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.parse import urlsplit
from urllib.request import Request, urlopen

import live_publish

SOURCE_ID_PATTERN = r"S\d+|D\d+_\d+"
SOURCE_ID_RE = re.compile(r"^S(\d+)$")
QUERY_ID_RE = re.compile(r"^Q(\d+)$")
EXTRACT_ID_RE = re.compile(r"^E(\d+)$")
DEFAULT_EXTRACT_QUESTION = (
    "What concrete, testable change for the task described by this source does it propose? "
    "Give implementation details and the reported effect."
)


class BudgetExceeded(RuntimeError):
    pass


def timestamp():
    return datetime.now(timezone.utc).isoformat().replace("+00:00", "Z")


def read_log(path):
    path = Path(path)
    if not path.exists():
        return []
    records = []
    with path.open(encoding="utf-8") as log_file:
        for line_number, line in enumerate(log_file, start=1):
            if not line.strip():
                continue
            try:
                records.append(json.loads(line))
            except json.JSONDecodeError as error:
                raise ValueError(f"invalid JSON in {path}, line {line_number}") from error
    return records


def append_records(path, records):
    live_publish.append_records(path, records)


def next_id(records, record_type, id_pattern):
    numbers = [
        int(match.group(1))
        for record in records
        if record.get("type") == record_type
        and (match := id_pattern.fullmatch(str(record.get("id", ""))))
    ]
    return max(numbers, default=0) + 1


def source_line(source):
    title = source.get("title") or "(untitled)"
    published = source.get("published")
    year = f" ({published[:4]})" if isinstance(published, str) and published else ""
    highlights = source.get("highlights") or []
    highlight = highlights[0][:200] if highlights and isinstance(highlights[0], str) else ""
    return f"{source['id']} | {title}{year} | {source.get('url', '')} | {highlight}"


def replay_enabled(args):
    return args.replay or os.environ.get("EXA_REPLAY") == "1"


def canonical_body(payload):
    return json.dumps(payload, sort_keys=True, separators=(",", ":"))


def cache_path(args, endpoint, payload):
    material = endpoint + canonical_body(payload)
    digest = hashlib.sha256(material.encode("utf-8")).hexdigest()[:16]
    return Path(args.cache_dir) / f"{digest}.json"


def read_cached_request(path, endpoint, payload):
    try:
        cached = json.loads(path.read_text(encoding="utf-8"))
    except FileNotFoundError as error:
        raise RuntimeError("cache miss") from error
    except json.JSONDecodeError as error:
        raise RuntimeError(f"invalid Exa cache entry: {path}") from error
    if cached.get("endpoint") != endpoint or cached.get("request") != payload:
        raise RuntimeError(f"invalid Exa cache entry: {path}")
    return cached


def write_cached_request(path, endpoint, payload, status, response_text):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(
        json.dumps(
            {
                "endpoint": endpoint,
                "request": payload,
                "status": status,
                "response": response_text,
            },
            sort_keys=True,
        )
        + "\n",
        encoding="utf-8",
    )


def exa_request(args, endpoint, payload):
    path = cache_path(args, endpoint, payload)
    if replay_enabled(args):
        cached = read_cached_request(path, endpoint, payload)
        return cached["status"], cached["response"], 0

    api_key = os.environ.get("EXA_API_KEY")
    if not api_key:
        raise RuntimeError("EXA_API_KEY is required for Exa requests")
    base_url = os.environ.get("EXA_BASE_URL", "https://api.exa.ai").rstrip("/")
    request = Request(
        f"{base_url}{endpoint}",
        data=json.dumps(payload).encode("utf-8"),
        headers={"x-api-key": api_key, "Content-Type": "application/json"},
        method="POST",
    )
    started = time.monotonic()
    try:
        with urlopen(request, timeout=30) as response:
            status = response.status
            response_text = response.read().decode("utf-8")
    except HTTPError as error:
        status = error.code
        response_text = error.read().decode("utf-8", errors="replace")
    except URLError as error:
        raise RuntimeError(f"Exa request failed: {error.reason}") from error
    latency_ms = int((time.monotonic() - started) * 1000)
    write_cached_request(path, endpoint, payload, status, response_text)
    return status, response_text, latency_ms


def parse_response(response_text):
    try:
        result = json.loads(response_text)
    except json.JSONDecodeError as error:
        raise RuntimeError("Exa returned invalid JSON") from error
    if not isinstance(result, dict):
        raise RuntimeError("Exa response must be a JSON object")
    return result


def response_cost(response):
    costs = response.get("costDollars")
    return costs.get("total") if isinstance(costs, dict) else None


def check_budget(args, slots=1):
    if replay_enabled(args):
        return
    configured_limit = os.environ.get("EXA_MAX_CALLS")
    if configured_limit is None:
        return
    try:
        limit = int(configured_limit)
    except ValueError as error:
        raise ValueError("EXA_MAX_CALLS must be a non-negative integer") from error
    if limit < 0:
        raise ValueError("EXA_MAX_CALLS must be a non-negative integer")
    used = sum(
        record.get("type") in ("query", "extract")
        and not record.get("replay")
        and not record.get("disabled")
        for record in read_log(args.log)
    )
    if used + slots > limit:
        raise BudgetExceeded("Exa budget exhausted")


def query_id_for(records):
    return f"Q{next_id(records, 'query', QUERY_ID_RE)}"


def append_query_record(
    args,
    records,
    query_id,
    purpose,
    query,
    endpoint,
    n_results,
    cost,
    latency_ms,
    **extra,
):
    record = {
        "type": "query",
        "id": query_id,
        "ts": timestamp(),
        "purpose": purpose,
        "agent": args.agent,
        "regime": args.regime,
        "endpoint": endpoint,
        "query": query,
        "n_results": n_results,
        "cost": cost,
        "latency_ms": latency_ms,
    }
    if replay_enabled(args):
        record["replay"] = True
    record.update(extra)
    return record


def query_payload(
    query,
    n,
    category=None,
    include_domains=None,
    exclude_domains=None,
    start_published_date=None,
    highlight_query=False,
):
    payload = {
        "query": query,
        "type": "auto",
        "numResults": n,
        "contents": {"highlights": {"maxCharacters": 400}},
    }
    if highlight_query:
        payload["contents"]["highlights"]["query"] = query
    if category:
        payload["category"] = category
    if include_domains:
        payload["includeDomains"] = include_domains
    if exclude_domains:
        payload["excludeDomains"] = exclude_domains
    if start_published_date:
        payload["startPublishedDate"] = start_published_date
    return payload


def write_query_results(
    args,
    records,
    query_id,
    purpose,
    query,
    endpoint,
    payload,
    *,
    prior_art=False,
    extra_record=None,
):
    status, response_text, latency_ms = exa_request(args, endpoint, payload)
    if status >= 400:
        raise RuntimeError(f"Exa {endpoint.lstrip('/')} returned HTTP {status}")
    response = parse_response(response_text)
    results = response.get("results")
    if not isinstance(results, list):
        raise RuntimeError("Exa response is missing a results list")

    source_number = next_id(records, "source", SOURCE_ID_RE)
    sources = []
    for index, item in enumerate(results):
        source = {
            "type": "source",
            "id": f"S{source_number + index}",
            "ts": timestamp(),
            "query_id": query_id,
            "agent": args.agent,
            "query": query,
            "url": item.get("url", ""),
            "title": item.get("title", ""),
            "published": item.get("publishedDate"),
            "highlights": item.get("highlights") or [],
        }
        sources.append(source)

    record = append_query_record(
        args,
        records,
        query_id,
        purpose,
        query,
        endpoint,
        len(sources),
        response_cost(response),
        latency_ms,
    )
    if extra_record:
        record.update(extra_record)
    append_records(args.log, [record, *sources])
    if prior_art:
        print(f"{query_id}: {query}")
    if not sources:
        print(f"none-found {query_id}" if prior_art else "No sources found.")
    else:
        for source in sources:
            print(source_line(source))
    return response, sources


def source_by_id(records, source_id):
    for record in records:
        if record.get("type") == "source" and record.get("id") == source_id:
            return record
    raise ValueError(f"unknown source {source_id}")


def command_query(args):
    if args.command in ("search", "prior-art", "scout", "worker-search"):
        return args.query
    if args.command in ("similar", "extract"):
        return args.source
    return args.command


def run_disabled(args):
    records = read_log(args.log)
    query_id = query_id_for(records)
    purpose = {
        "search": "search",
        "list": "search",
        "prior-art": "prior-art",
        "scout": "scout",
        "worker-search": "worker-search",
        "similar": "similar",
        "extract": "extract",
    }[args.command]
    record = append_query_record(
        args,
        records,
        query_id,
        purpose,
        command_query(args),
        "disabled",
        0,
        None,
        0,
    )
    record["disabled"] = True
    append_records(args.log, [record])
    print("exa disabled")
    if args.command == "prior-art":
        print(f"none-found {query_id}")
    return 0


def run_search(args):
    if args.n < 1:
        raise ValueError("--n must be at least 1")
    check_budget(args)
    records = read_log(args.log)
    query_id = query_id_for(records)
    payload = query_payload(
        args.query,
        args.n,
        category=None if args.category.casefold() == "none" else args.category,
    )
    write_query_results(args, records, query_id, "search", args.query, "/search", payload)
    return 0


def run_prior_art(args):
    if args.n < 1:
        raise ValueError("--n must be at least 1")
    check_budget(args)
    records = read_log(args.log)
    query_id = query_id_for(records)
    payload = query_payload(args.query, args.n, category="publication", highlight_query=True)
    write_query_results(
        args,
        records,
        query_id,
        "prior-art",
        args.query,
        "/search",
        payload,
        prior_art=True,
    )
    return 0


def run_scout(args):
    if args.n < 1:
        raise ValueError("--n must be at least 1")
    since = args.since
    if since:
        date.fromisoformat(since)
    else:
        since = (date.today() - timedelta(days=365)).isoformat()
    check_budget(args)
    records = read_log(args.log)
    query_id = query_id_for(records)
    if args.kind == "paper":
        category = getattr(args, "category", None) or "publication"
        payload = query_payload(
            args.query,
            args.n,
            category=None if category.casefold() == "none" else category,
            start_published_date=since,
        )
    else:
        payload = query_payload(
            args.query,
            args.n,
            include_domains=getattr(args, "domains", None) or ["github.com"],
            start_published_date=since,
        )
    purpose = "worker-search" if args.command == "worker-search" else "scout"
    cell = getattr(args, "cell", None)
    write_query_results(
        args,
        records,
        query_id,
        purpose,
        args.query,
        "/search",
        payload,
        extra_record={"cell": cell} if cell else None,
    )
    return 0


def similar_payload(source, n):
    return {
        "url": source.get("url", ""),
        "numResults": n,
        "contents": {"highlights": {"maxCharacters": 400}},
    }


def run_similar(args):
    if args.n < 1:
        raise ValueError("--n must be at least 1")
    records = read_log(args.log)
    source = source_by_id(records, args.source)
    check_budget(args)
    query_id = query_id_for(records)
    query = str(source.get("title") or source.get("url") or args.source)

    endpoint = "/findSimilar"
    payload = similar_payload(source, args.n)
    status, response_text, latency_ms = exa_request(args, endpoint, payload)
    attempt_status = status
    extra_record = {"find_similar_status": attempt_status}
    if status in (404, 410):
        highlight_values = source.get("highlights") or []
        first_highlight = (
            highlight_values[0][:300]
            if highlight_values and isinstance(highlight_values[0], str)
            else ""
        )
        query = " ".join(part for part in (str(source.get("title") or ""), first_highlight) if part)
        domain = urlsplit(str(source.get("url") or "")).hostname
        if not domain:
            raise ValueError(f"source {args.source} has no valid URL domain")
        print(
            f"similar: /findSimilar returned HTTP {status}; falling back to /search",
            file=sys.stderr,
        )
        endpoint = "/search"
        payload = query_payload(query, args.n, exclude_domains=[domain])
        next_status, response_text, fallback_latency = exa_request(args, endpoint, payload)
        latency_ms += fallback_latency
        status = next_status
    if status >= 400:
        raise RuntimeError(f"Exa {endpoint.lstrip('/')} returned HTTP {status}")

    response = parse_response(response_text)
    result_items = response.get("results")
    if not isinstance(result_items, list):
        raise RuntimeError("Exa response is missing a results list")
    source_number = next_id(records, "source", SOURCE_ID_RE)
    sources = [
        {
            "type": "source",
            "id": f"S{source_number + index}",
            "ts": timestamp(),
            "query_id": query_id,
            "agent": args.agent,
            "query": query,
            "url": item.get("url", ""),
            "title": item.get("title", ""),
            "published": item.get("publishedDate"),
            "highlights": item.get("highlights") or [],
        }
        for index, item in enumerate(result_items)
    ]
    record = append_query_record(
        args,
        records,
        query_id,
        "similar",
        query,
        endpoint,
        len(sources),
        response_cost(response),
        latency_ms,
        **extra_record,
    )
    append_records(args.log, [record, *sources])
    print(f"{query_id}: {query}")
    if not sources:
        print("No sources found.")
    else:
        for result in sources:
            print(source_line(result))
    return 0


def run_extract(args):
    records = read_log(args.log)
    source = source_by_id(records, args.source)
    question = args.question or DEFAULT_EXTRACT_QUESTION
    check_budget(args, slots=2)
    query_id = query_id_for(records)
    endpoint = "/contents"
    payload = {
        "urls": [source.get("url", "")],
        "summary": {"query": question},
    }
    status, response_text, latency_ms = exa_request(args, endpoint, payload)
    if status >= 400:
        raise RuntimeError(f"Exa contents returned HTTP {status}")
    response = parse_response(response_text)
    results = response.get("results") or []
    summary = response.get("summary")
    if not isinstance(summary, str) and results and isinstance(results[0], dict):
        summary = results[0].get("summary")
    if not isinstance(summary, str) or not summary:
        raise RuntimeError("Exa contents response is missing a summary")

    extract_id = f"E{next_id(records, 'extract', EXTRACT_ID_RE)}"
    query_record = append_query_record(
        args,
        records,
        query_id,
        "extract",
        question,
        endpoint,
        len(results),
        response_cost(response),
        latency_ms,
    )
    extract_record = {
        "type": "extract",
        "id": extract_id,
        "source_id": args.source,
        "query_id": query_id,
        "ts": timestamp(),
        "agent": args.agent,
        "summary": summary,
        "cost": response_cost(response),
        "latency_ms": latency_ms,
    }
    append_records(args.log, [query_record, extract_record])
    print(summary)
    return 0


def run_list(args):
    sources = [record for record in read_log(args.log) if record.get("type") == "source"]
    if not sources:
        print("No sources found.")
    else:
        for source in sources:
            print(source_line(source))
    return 0


def add_common_options(parser):
    parser.add_argument("--log", default="research_log.jsonl")
    parser.add_argument("--agent")
    parser.add_argument("--regime")
    parser.add_argument("--cache-dir", default="exa_cache")
    parser.add_argument("--replay", action="store_true")


def build_parser():
    parser = argparse.ArgumentParser(description=__doc__)
    subparsers = parser.add_subparsers(dest="command", required=True)

    search_parser = subparsers.add_parser("search")
    search_parser.add_argument("query")
    search_parser.add_argument("--n", type=int, default=5)
    search_parser.add_argument(
        "--category",
        default="publication",
        choices=(
            "company",
            "publication",
            "news",
            "personal site",
            "financial report",
            "people",
            "none",
        ),
    )
    add_common_options(search_parser)
    search_parser.set_defaults(func=run_search)

    prior_art_parser = subparsers.add_parser("prior-art")
    prior_art_parser.add_argument("query")
    prior_art_parser.add_argument("--n", type=int, default=5)
    add_common_options(prior_art_parser)
    prior_art_parser.set_defaults(func=run_prior_art)

    scout_parser = subparsers.add_parser("scout")
    scout_parser.add_argument("query")
    scout_parser.add_argument("--kind", choices=("paper", "code"), required=True)
    scout_parser.add_argument("--since")
    scout_parser.add_argument("--n", type=int, default=5)
    add_common_options(scout_parser)
    scout_parser.set_defaults(func=run_scout)

    similar_parser = subparsers.add_parser("similar")
    similar_parser.add_argument("source")
    similar_parser.add_argument("--n", type=int, default=5)
    add_common_options(similar_parser)
    similar_parser.set_defaults(func=run_similar)

    extract_parser = subparsers.add_parser("extract")
    extract_parser.add_argument("source")
    extract_parser.add_argument("--question")
    add_common_options(extract_parser)
    extract_parser.set_defaults(func=run_extract)

    list_parser = subparsers.add_parser("list")
    add_common_options(list_parser)
    list_parser.set_defaults(func=run_list)
    return parser


def main(argv=None):
    parser = build_parser()
    args = parser.parse_args(argv)
    args.agent = args.agent or os.environ.get("AUTORESEARCH_AGENT") or "agent"
    args.regime = args.regime or None
    try:
        if os.environ.get("EXA", "").casefold() == "off":
            return run_disabled(args)
        return args.func(args)
    except BudgetExceeded as error:
        print(f"research.py: {error}", file=sys.stderr)
        return 3
    except (OSError, ValueError, RuntimeError) as error:
        print(f"research.py: {error}", file=sys.stderr)
        return 2


if __name__ == "__main__":
    raise SystemExit(main())
