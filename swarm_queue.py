#!/usr/bin/env python3
"""List, inspect, and answer queued swarm LLM calls."""

import argparse
import json
import os
from pathlib import Path
import re
import sys
import tempfile


CALL_ID_RE = re.compile(r"^[A-Za-z0-9_-]+$")


def prompt_path(queue_dir, call_id):
    if not CALL_ID_RE.fullmatch(call_id):
        raise ValueError("invalid call id")
    return Path(queue_dir) / f"{call_id}.prompt.json"


def response_path(queue_dir, call_id):
    if not CALL_ID_RE.fullmatch(call_id):
        raise ValueError("invalid call id")
    return Path(queue_dir) / f"{call_id}.response.json"


def list_pending(queue_dir):
    queue_dir = Path(queue_dir)
    pending = []
    for path in queue_dir.glob("*.prompt.json"):
        call_id = path.name[: -len(".prompt.json")]
        if not CALL_ID_RE.fullmatch(call_id):
            continue
        answered = False
        response = response_path(queue_dir, call_id)
        if response.exists():
            try:
                answered = isinstance(
                    json.loads(response.read_text(encoding="utf-8")), dict
                )
            except (OSError, json.JSONDecodeError):
                answered = False
        if not answered:
            pending.append((path.stat().st_mtime_ns, call_id))
    return [call_id for _, call_id in sorted(pending)]


def show_prompt(queue_dir, call_id):
    path = prompt_path(queue_dir, call_id)
    try:
        document = json.loads(path.read_text(encoding="utf-8"))
    except FileNotFoundError as error:
        raise ValueError(f"no queued call {call_id}") from error
    if not isinstance(document, dict) or not isinstance(document.get("prompt"), str):
        raise ValueError(f"invalid prompt file for {call_id}")
    return document["prompt"]


def answer(queue_dir, call_id, response):
    path = response_path(queue_dir, call_id)
    if isinstance(response, str):
        try:
            response = json.loads(response)
        except json.JSONDecodeError as error:
            raise ValueError(f"invalid JSON response: {error}") from error
    if not isinstance(response, dict):
        raise ValueError("response must be a JSON object")
    try:
        encoded = json.dumps(
            response, sort_keys=True, ensure_ascii=False, allow_nan=False
        )
    except (TypeError, ValueError) as error:
        raise ValueError("response must be valid JSON") from error
    path.parent.mkdir(parents=True, exist_ok=True)
    with tempfile.NamedTemporaryFile(
        mode="w",
        encoding="utf-8",
        dir=path.parent,
        prefix=f".{path.name}.",
        delete=False,
    ) as stream:
        temporary = Path(stream.name)
        stream.write(encoded + "\n")
    os.replace(temporary, path)
    error_path = path.with_name(f"{call_id}.error.txt")
    error_path.unlink(missing_ok=True)
    return path


def build_parser():
    parser = argparse.ArgumentParser(description=__doc__)
    subparsers = parser.add_subparsers(dest="command", required=True)
    list_parser = subparsers.add_parser("list")
    list_parser.add_argument("--queue-dir", default="llm_queue")
    show_parser = subparsers.add_parser("show")
    show_parser.add_argument("call_id")
    show_parser.add_argument("--queue-dir", default="llm_queue")
    answer_parser = subparsers.add_parser("answer")
    answer_parser.add_argument("call_id")
    answer_parser.add_argument("file", help="JSON response file or - for stdin")
    answer_parser.add_argument("--queue-dir", default="llm_queue")
    return parser


def main(argv=None):
    args = build_parser().parse_args(argv)
    try:
        if args.command == "list":
            for call_id in list_pending(args.queue_dir):
                print(call_id)
        elif args.command == "show":
            print(show_prompt(args.queue_dir, args.call_id))
        else:
            response_text = (
                sys.stdin.read()
                if args.file == "-"
                else Path(args.file).read_text(encoding="utf-8")
            )
            answer(args.queue_dir, args.call_id, response_text)
            print(f"answered {args.call_id}")
    except (OSError, ValueError) as error:
        print(f"swarm_queue.py: {error}", file=sys.stderr)
        return 2
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
