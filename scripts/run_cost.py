#!/usr/bin/env python3
"""Summarize LLM token usage and logged research costs for one swarm run."""

import argparse
import json
import math
import statistics
from pathlib import Path

EXA_ENDPOINTS = frozenset({"/search", "/contents", "/findSimilar", "/answer"})
WASTED_OUTCOMES = frozenset({"rejected", "duplicate", "invalid", "edit_error"})
TOKEN_FIELDS = ("input_tokens", "cached_tokens", "output_tokens", "reasoning_tokens")


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


def _token_count(value):
    if isinstance(value, bool):
        return 0
    try:
        return max(0, int(value or 0))
    except (TypeError, ValueError):
        return 0


def _usage_values(record):
    usage = record.get("usage") or {}
    if not isinstance(usage, dict):
        usage = {}
    prompt_details = usage.get("prompt_tokens_details")
    if not isinstance(prompt_details, dict):
        prompt_details = {}
    completion_details = usage.get("completion_tokens_details")
    if not isinstance(completion_details, dict):
        completion_details = {}
    return {
        "input_tokens": _token_count(usage.get("prompt_tokens")),
        "cached_tokens": _token_count(
            usage.get("cached_tokens", prompt_details.get("cached_tokens"))
        ),
        "output_tokens": _token_count(usage.get("completion_tokens")),
        "reasoning_tokens": _token_count(
            usage.get("reasoning_tokens", completion_details.get("reasoning_tokens"))
        ),
    }


def _usage_totals(records):
    totals = {"calls": len(records), **dict.fromkeys(TOKEN_FIELDS, 0)}
    for record in records:
        for field, value in _usage_values(record).items():
            totals[field] += value
    return totals


def _group_usage(records, field):
    groups = {}
    for record in records:
        raw_key = record.get(field)
        key = str(raw_key) if raw_key is not None and str(raw_key) else "unknown"
        group = groups.setdefault(key, {"calls": 0, **dict.fromkeys(TOKEN_FIELDS, 0)})
        group["calls"] += 1
        for name, value in _usage_values(record).items():
            group[name] += value
    return dict(sorted(groups.items(), key=lambda item: _group_sort_key(field, item[0])))


def _group_sort_key(field, key):
    if field == "round" and key.isdigit():
        return (0, int(key))
    return (1, key)


def _wasted_usage(records, outcomes):
    outcome_by_call = {
        record.get("call_id"): record.get("outcome") for record in outcomes if record.get("call_id")
    }
    wasted_records = [
        record
        for record in records
        if record.get("call_id") and outcome_by_call.get(record["call_id"]) in WASTED_OUTCOMES
    ]
    totals = _usage_totals(records)
    wasted = _usage_totals(wasted_records)
    wasted["percent_of_total"] = {
        "calls": round(100 * wasted["calls"] / totals["calls"], 2) if totals["calls"] else 0.0,
        **{
            field: round(100 * wasted[field] / totals[field], 2) if totals[field] else 0.0
            for field in TOKEN_FIELDS
        },
    }
    return wasted


def _tool_counts(research_records, memory_records):
    exa_searches = sum(
        1
        for record in research_records
        if record.get("type") == "query"
        and str(record.get("endpoint", "")).strip().casefold().lstrip("/") == "search"
        and not record.get("replay")
    )
    pastdev_recalls = sum(
        1
        for record in memory_records
        if record.get("backend") == "pastdev" and record.get("type") == "recall"
    )
    pastdev_writes = sum(
        1
        for record in memory_records
        if record.get("backend") == "pastdev" and record.get("type") == "write"
    )
    return {
        "exa_searches": exa_searches,
        "pastdev_recalls": pastdev_recalls,
        "pastdev_writes": pastdev_writes,
    }


def _pi_steer_followed_by_accepted_attempt(pi_records, ledger_records):
    accepted_attempts = {
        (record.get("agent"), record.get("round"))
        for record in ledger_records
        if record.get("kind") == "candidate"
        and record.get("status") in {"keep", "discard"}
        and record.get("score") is not None
    }
    return sum(
        1
        for record in pi_records
        if record.get("type") == "pi_steer"
        and record.get("steer")
        and (record.get("agent"), record.get("round", 0)) in accepted_attempts
    )


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
    llm_records = read_jsonl(run_dir / "llm_log.jsonl")
    for record in llm_records:
        model = record.get("model") or "unknown"
        values = _usage_values(record)
        model_usage = calls_by_model.setdefault(
            model,
            {
                "calls": 0,
                "prompt_tokens": 0,
                "completion_tokens": 0,
                **dict.fromkeys(TOKEN_FIELDS, 0),
            },
        )
        model_usage["calls"] += 1
        model_usage["prompt_tokens"] += values["input_tokens"]
        model_usage["completion_tokens"] += values["output_tokens"]
        for field in TOKEN_FIELDS:
            model_usage[field] += values[field]

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

    outcomes = read_jsonl(run_dir / "llm_outcomes.jsonl")
    research_records = read_jsonl(run_dir / "research_log.jsonl")
    memory_records = read_jsonl(run_dir / "memory_log.jsonl")
    pi_records = read_jsonl(run_dir / "pi.jsonl")
    ledger_records = read_jsonl(run_dir / "ledger.jsonl")
    pi_followed = _pi_steer_followed_by_accepted_attempt(pi_records, ledger_records)
    usage_totals = _usage_totals(llm_records)
    by_role = _group_usage(llm_records, "role")
    if "PI" in by_role:
        by_role["PI"]["steer_followed_by_accepted_attempt"] = pi_followed
    return {
        "run_dir": str(run_dir),
        "llm": {
            "calls": total_calls,
            "prompt_tokens": total_prompt_tokens,
            "completion_tokens": total_completion_tokens,
            "input_tokens": usage_totals["input_tokens"],
            "cached_tokens": usage_totals["cached_tokens"],
            "output_tokens": usage_totals["output_tokens"],
            "reasoning_tokens": usage_totals["reasoning_tokens"],
            "by_role": by_role,
            "by_round": _group_usage(llm_records, "round"),
            "by_agent": _group_usage(llm_records, "agent"),
            "pi_steer_followed_by_accepted_attempt": pi_followed,
            "wasted": _wasted_usage(llm_records, outcomes),
            "outcomes": {
                outcome: sum(1 for record in outcomes if record.get("outcome") == outcome)
                for outcome in sorted(
                    {record.get("outcome") for record in outcomes if record.get("outcome")}
                )
            },
            "models": dict(sorted(calls_by_model.items())),
        },
        "research_costs": _research_costs(
            research_records,
            memory_records,
        ),
        "tools": _tool_counts(research_records, memory_records),
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
    parser.add_argument(
        "--json",
        action="store_true",
        help="emit JSON (the default; retained for explicit machine-readable invocations)",
    )
    parser.add_argument("--by", choices=("role", "round", "agent"))
    args = parser.parse_args(argv)
    try:
        prices = dict(parse_price(value) for value in args.price)
        report = build_report(args.run_dir, prices)
    except ValueError as error:
        parser.error(str(error))
    if args.by:
        report["selected_breakdown"] = report["llm"][f"by_{args.by}"]
    print(json.dumps(report, indent=2, sort_keys=True))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
