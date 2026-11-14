#!/usr/bin/env python3
"""Search Exa for research sources. Install no dependencies; set EXA_API_KEY."""

import argparse
from datetime import datetime, timezone
import json
import os
from pathlib import Path
import re
import sys
from urllib.error import HTTPError, URLError
from urllib.request import Request, urlopen


SOURCE_ID_RE = re.compile(r"^S(\d+)$")


def timestamp():
    return datetime.now(timezone.utc).isoformat()


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
    path = Path(path)
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("a", encoding="utf-8") as log_file:
        for record in records:
            log_file.write(json.dumps(record, sort_keys=True) + "\n")


def next_source_number(records):
    numbers = [
        int(match.group(1))
        for record in records
        if record.get("type") == "source"
        and (match := SOURCE_ID_RE.fullmatch(str(record.get("id", ""))))
    ]
    return max(numbers, default=0) + 1


def source_line(source):
    title = source.get("title") or "(untitled)"
    published = source.get("published")
    year = f" ({published[:4]})" if isinstance(published, str) and published else ""
    highlights = source.get("highlights") or []
    highlight = highlights[0][:200] if highlights and isinstance(highlights[0], str) else ""
    return f"{source['id']} | {title}{year} | {source.get('url', '')} | {highlight}"


def run_search(args):
    api_key = os.environ.get("EXA_API_KEY")
    if not api_key:
        raise RuntimeError("EXA_API_KEY is required for Exa search")
    if args.n < 1:
        raise ValueError("--n must be at least 1")

    payload = {
        "query": args.query,
        "type": "auto",
        "numResults": args.n,
        "contents": {"highlights": {"maxCharacters": 400}},
    }
    if args.category.casefold() != "none":
        payload["category"] = args.category
    request = Request(
        f"{os.environ.get('EXA_BASE_URL', 'https://api.exa.ai').rstrip('/')}/search",
        data=json.dumps(payload).encode("utf-8"),
        headers={"x-api-key": api_key, "Content-Type": "application/json"},
        method="POST",
    )
    try:
        with urlopen(request, timeout=30) as response:
            result = json.loads(response.read().decode("utf-8"))
    except HTTPError as error:
        raise RuntimeError(f"Exa search returned HTTP {error.code}") from error
    except URLError as error:
        raise RuntimeError(f"Exa search request failed: {error.reason}") from error
    except json.JSONDecodeError as error:
        raise RuntimeError("Exa returned invalid JSON") from error

    results = result.get("results")
    if not isinstance(results, list):
        raise RuntimeError("Exa response is missing a results list")

    existing_records = read_log(args.log)
    source_number = next_source_number(existing_records)
    ts = timestamp()
    records = [
        {
            "type": "query",
            "ts": ts,
            "query": args.query,
            "n_results": len(results),
            "cost": result.get("costDollars", {}).get("total"),
        }
    ]
    sources = []
    for index, item in enumerate(results):
        source = {
            "type": "source",
            "id": f"S{source_number + index}",
            "ts": ts,
            "query": args.query,
            "url": item.get("url", ""),
            "title": item.get("title", ""),
            "published": item.get("publishedDate"),
            "highlights": item.get("highlights") or [],
        }
        sources.append(source)
        records.append(source)
    append_records(args.log, records)

    if not sources:
        print("No sources found.")
    else:
        for source in sources:
            print(source_line(source))
    return 0


def run_list(args):
    sources = [
        record for record in read_log(args.log) if record.get("type") == "source"
    ]
    if not sources:
        print("No sources found.")
    else:
        for source in sources:
            print(source_line(source))
    return 0


def build_parser():
    parser = argparse.ArgumentParser(description=__doc__)
    subparsers = parser.add_subparsers(dest="command", required=True)

    search_parser = subparsers.add_parser("search")
    search_parser.add_argument("query")
    search_parser.add_argument("--n", type=int, default=5)
    search_parser.add_argument("--category", default="research paper")
    search_parser.add_argument("--log", default="research_log.jsonl")
    search_parser.set_defaults(func=run_search)

    list_parser = subparsers.add_parser("list")
    list_parser.add_argument("--log", default="research_log.jsonl")
    list_parser.set_defaults(func=run_list)
    return parser


def main(argv=None):
    args = build_parser().parse_args(argv)
    try:
        return args.func(args)
    except (OSError, ValueError, RuntimeError) as error:
        print(f"research.py: {error}", file=sys.stderr)
        return 2


if __name__ == "__main__":
    raise SystemExit(main())
