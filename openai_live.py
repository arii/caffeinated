"""Bounded OpenAI requests for the supervised live runner (standard pricing)."""

import fcntl
import json
import math
import os
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.request import Request, urlopen

# USD per million tokens, verified 2026-11-15. No tools or fast tier; reserve input at the 30m cache-write rate.
RATES = {"gpt-6.1-sol": (2, 10), "gpt-6-sol": (2, 10), "gpt-6-luna": (0.1, 0.5)}


def reserve(path, *, model, prompt, limit, budget):
    if model not in RATES:
        raise RuntimeError("Live budget has no verified price for this model")
    if not math.isfinite(budget) or not 0 < budget <= 100:
        raise RuntimeError("Live budget must be greater than zero and at most $100")
    # One token per UTF-8 byte plus message overhead is intentionally conservative.
    size = len(prompt.encode("utf-8")) + 1024
    if size > 32000:
        raise RuntimeError("Live prompt exceeds the 32K-byte budget bound")
    input_rate, output_rate = RATES[model]
    ceiling = (size * input_rate * 1.25 + limit * output_rate) / 1_000_000
    path = Path(path)
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("a+", encoding="utf-8") as ledger:
        fcntl.flock(ledger, fcntl.LOCK_EX)
        ledger.seek(0)
        rows = [json.loads(line) for line in ledger if line.strip()]
        spent = sum(row["reserved_usd"] for row in rows)
        if spent + ceiling > budget:
            raise RuntimeError("Live run budget exhausted; no request sent")
        ledger.write(
            json.dumps(
                {
                    "model": model,
                    "reserved_usd": ceiling,
                    "budget_usd": budget,
                    "output_limit": limit,
                }
            )
            + "\n"
        )
        ledger.flush()
        os.fsync(ledger.fileno())
    return ceiling


def request(client, prompt, *, model, role):
    if (
        os.environ.get("OPENAI_BASE_URL", "https://api.openai.com/v1").rstrip("/")
        != "https://api.openai.com/v1"
    ):
        raise RuntimeError("Budgeted live mode requires the official OpenAI endpoint")
    supervisor = role.upper() == "SUPERVISOR"
    effort = "medium" if supervisor else "none"
    if not supervisor and model != "gpt-6-luna":
        raise RuntimeError("Budgeted execution roles require gpt-6-luna")
    limit = client.supervisor_tokens if supervisor else client.worker_tokens
    ceiling = reserve(
        client.log_path.with_name("openai_budget.jsonl"),
        model=model,
        prompt=prompt,
        limit=limit,
        budget=client.max_cost_usd,
    )
    usage = {"reserved_usd": ceiling, "reasoning_effort": effort, "output_limit": limit}
    client.request_attempts.append({"usage": usage})
    payload = {
        "model": model,
        "messages": [{"role": "user", "content": prompt}],
        "response_format": {"type": "json_object"},
        "reasoning_effort": effort,
        "max_completion_tokens": limit,
        "service_tier": "default",
        "store": False,
    }
    req = Request(
        "https://api.openai.com/v1/chat/completions",
        data=json.dumps(payload).encode(),
        headers={
            "Authorization": "Bearer " + os.environ["OPENAI_API_KEY"],
            "Content-Type": "application/json",
        },
        method="POST",
    )
    try:
        with urlopen(req, timeout=180) as response:
            data = json.load(response)
    except HTTPError as error:
        raise RuntimeError(f"OpenAI returned HTTP {error.code}; reservation retained") from error
    except (URLError, TimeoutError, json.JSONDecodeError) as error:
        raise RuntimeError("OpenAI request failed; reservation retained") from error
    raw = data.get("usage") or {}
    usage.update(raw)
    usage["reasoning_tokens"] = (raw.get("completion_tokens_details") or {}).get("reasoning_tokens")
    if "prompt_tokens" in raw and "completion_tokens" in raw:
        rates = RATES[model]
        usage["estimated_cost_usd"] = (
            (
                raw["prompt_tokens"]
                + (raw.get("prompt_tokens_details") or {}).get("cache_write_tokens", 0) * 0.25
            )
            * rates[0]
            + raw["completion_tokens"] * rates[1]
        ) / 1_000_000
    try:
        choice = data["choices"][0]
        if choice.get("finish_reason") != "stop":
            raise RuntimeError("OpenAI completion incomplete; refusing partial output")
        parsed = json.loads(choice["message"]["content"])
    except (KeyError, IndexError, TypeError, json.JSONDecodeError) as error:
        raise RuntimeError("OpenAI returned invalid JSON completion") from error
    if not isinstance(parsed, dict):
        raise RuntimeError("OpenAI completion must be a JSON object")
    return parsed, usage
