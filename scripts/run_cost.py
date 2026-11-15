#!/usr/bin/env python3
"""Summarize LLM token usage and logged research costs for one swarm run."""

import argparse
import json
import math
import statistics
from pathlib import Path

EXA_ENDPOINTS = frozenset({"/search", "/contents", "/findSimilar", "/answer"})


def read_jsonl(path):
    path = Path(path)
    if not path.is_file():
        return []
    records = []
    for line_number, line in enumerate(path.read_text(encoding="utf-8").splitlines(), 1):
        if not line.strip():
            continue
        try:
            record = json.loads(line)
        except json.JSONDecodeError as error:
            raise ValueError(f"{path}:{line_number}: invalid JSON: {error}") from error
        if not isinstance(record, dict):
            raise ValueError(f"{path}:{line_number}: expected a JSON object")
        records.append(record)
    return records


def parse_price(value):
    try:
        model, rates = value.split("=", 1)
        input_price, output_price = (float(item) for item in rates.split(",", 1))
    except (ValueError, TypeError) as error:
        raise ValueError("price must be MODEL=input_per_mtok,output_per_mtok") from error
    if not model or not all(
        math.isfinite(price) and price >= 0 for price in (input_price, output_price)
    ):
        raise ValueError("model and prices must be non-empty and prices non-negative")
    return model, (input_price, output_price)


def _cost_value(record):
    for field in ("cost_usd", "cost", "costDollars"):
        value = record.get(field)
        if isinstance(value, dict):
            value = value.get("total")
        if isinstance(value, (int, float)) and not isinstance(value, bool) and math.isfinite(value):
            return float(value)
    return None


def _latency_ms_p50(records):
    latencies = [
        record["latency_ms"]
        for record in records
        if isinstance(record.get("latency_ms"), (int, float))
        and not isinstance(record["latency_ms"], bool)
        and math.isfinite(record["latency_ms"])
        and record["latency_ms"] >= 0
    ]
    return statistics.median(latencies) if latencies else None


def _pastdev_usage(records):
    usage = {}
    for operation in ("write", "recall"):
        matching = [
            record
            for record in records
            if record.get("backend") == "pastdev" and record.get("type") == operation
        ]
        usage[operation] = {
            "records": len(matching),
            "latency_ms_p50": _latency_ms_p50(matching),
        }
    return usage


def _research_costs(records, memory_records=()):
    totals = {"exa": 0.0, "past_dev": 0.0}
    counts = {"exa": 0, "past_dev": 0}
    cost_fields = {
        "exa": ("exa_cost_usd", "exa_cost"),
        "past_dev": ("past_dev_cost_usd", "pastdev_cost_usd", "past_dev_cost", "pastdev_cost"),
    }
    exa_calls = [
        record for record in records if str(record.get("endpoint", "")).strip() in EXA_ENDPOINTS
    ]
    for record in records:
        explicit = False
        for service, fields in cost_fields.items():
            for field in fields:
                value = record.get(field)
                if (
                    isinstance(value, (int, float))
                    and not isinstance(value, bool)
                    and math.isfinite(value)
                ):
                    totals[service] += float(value)
                    counts[service] += 1
                    explicit = True
        if explicit:
            continue
        descriptor = " ".join(
            str(record.get(field, ""))
            for field in ("provider", "service", "backend", "endpoint", "source")
        ).casefold()
        endpoint = str(record.get("endpoint", "")).strip()
        service = (
            "exa"
            if endpoint in EXA_ENDPOINTS
            else "past_dev"
            if "past" in descriptor
            else "exa"
            if "exa" in descriptor
            else None
        )
        cost = _cost_value(record)
        if service is not None and cost is not None:
            totals[service] += cost
            counts[service] += 1
    result = {
        service: {"cost_usd": round(totals[service], 9), "records": counts[service]}
        for service in totals
    }
    result["exa"].update(
        {
            "calls": len(exa_calls),
            "latency_ms_p50": _latency_ms_p50(exa_calls),
        }
    )
    result["past_dev"].update(_pastdev_usage(memory_records))
    if counts["past_dev"] == 0:
        result["past_dev"]["cost_usd"] = None
        result["past_dev"]["cost_note"] = "not reported by past.dev API"
    return result


def build_report(run_dir, prices=None):
    run_dir = Path(run_dir).resolve()
    prices = prices or {}
    calls_by_model = {}
    for record in read_jsonl(run_dir / "llm_log.jsonl"):
        model = record.get("model") or "unknown"
        usage = record.get("usage") or {}
        if not isinstance(usage, dict):
            usage = {}
        model_usage = calls_by_model.setdefault(
            model, {"calls": 0, "prompt_tokens": 0, "completion_tokens": 0}
        )
        model_usage["calls"] += 1
        for token_name in ("prompt_tokens", "completion_tokens"):
            value = usage.get(token_name, 0)
            if isinstance(value, int) and not isinstance(value, bool) and value >= 0:
                model_usage[token_name] += value

    total_calls = sum(model["calls"] for model in calls_by_model.values())
    total_prompt_tokens = sum(model["prompt_tokens"] for model in calls_by_model.values())
    total_completion_tokens = sum(model["completion_tokens"] for model in calls_by_model.values())
    for model, usage in calls_by_model.items():
        rates = prices.get(model)
        usage["estimated_cost_usd"] = (
            round(
                usage["prompt_tokens"] * rates[0] / 1_000_000
                + usage["completion_tokens"] * rates[1] / 1_000_000,
                9,
            )
            if rates is not None
            else None
        )

    return {
        "run_dir": str(run_dir),
        "llm": {
            "calls": total_calls,
            "prompt_tokens": total_prompt_tokens,
            "completion_tokens": total_completion_tokens,
            "models": dict(sorted(calls_by_model.items())),
        },
        "research_costs": _research_costs(
            read_jsonl(run_dir / "research_log.jsonl"),
            read_jsonl(run_dir / "memory_log.jsonl"),
        ),
    }


def main(argv=None):
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("run_dir", type=Path)
    parser.add_argument(
        "--price",
        action="append",
        default=[],
        metavar="MODEL=IN_PER_MTOK,OUT_PER_MTOK",
        help="optional input/output USD prices per million tokens; may be repeated",
    )
    args = parser.parse_args(argv)
    try:
        prices = dict(parse_price(value) for value in args.price)
        report = build_report(args.run_dir, prices)
    except ValueError as error:
        parser.error(str(error))
    print(json.dumps(report, indent=2, sort_keys=True))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
