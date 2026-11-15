#!/usr/bin/env python3
"""OpenAI, Tinker, and offline clients for swarm JSON prompts."""

import hashlib
import json
import os
import re
import time
from datetime import datetime, timezone
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.request import Request, urlopen

import live_publish
from runtime_env import load_local_env

ROOT = Path(__file__).resolve().parent
load_local_env(ROOT / ".env")
DEFAULT_PROMPT_DIR = ROOT / "prompts"
TINKER_BASE_URL = "https://tinker.thinkingmachines.dev/services/tinker-prod/oai/api/v1"
TINKER_TIMEOUT_SECONDS = 900
DEFAULT_TINKER_REASONING_EFFORT = "low"
TRANSIENT_HTTP = {408, 409, 429, 500, 502, 503, 504}


def timestamp():
    return datetime.now(timezone.utc).isoformat().replace("+00:00", "Z")


def _usage_int(value):
    if isinstance(value, bool):
        return 0
    try:
        return max(0, int(value or 0))
    except (TypeError, ValueError):
        return 0


def _usage_with_token_details(usage, raw_usage, reasoning_content=None):
    usage = dict(usage or {})
    if isinstance(raw_usage, dict):
        prompt_details = raw_usage.get("prompt_tokens_details")
        if isinstance(prompt_details, dict):
            usage["prompt_tokens_details"] = prompt_details
            if "cached_tokens" in prompt_details:
                usage["cached_tokens"] = _usage_int(prompt_details["cached_tokens"])
        completion_details = raw_usage.get("completion_tokens_details")
        if isinstance(completion_details, dict):
            usage["completion_tokens_details"] = completion_details
            if "reasoning_tokens" in completion_details:
                usage["reasoning_tokens"] = _usage_int(completion_details["reasoning_tokens"])
    if reasoning_content is not None:
        usage["reasoning_chars"] = len(str(reasoning_content))
    return usage


def prompt_sha(prompt):
    return hashlib.sha256(prompt.encode("utf-8")).hexdigest()


def first_json_object(content):
    content = content.strip()
    try:
        parsed = json.loads(content)
    except json.JSONDecodeError:
        start = content.find("{")
        if start < 0:
            raise ValueError("no JSON object found") from None
        parsed, _ = json.JSONDecoder().raw_decode(content, start)
    if not isinstance(parsed, dict):
        raise ValueError("completion must be a JSON object")
    return parsed


def read_log(path):
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


def append_log(path, record):
    live_publish.append_records(path, [record])


def fill_placeholders(template, values):
    for name, value in values.items():
        template = template.replace("{" + name + "}", str(value))
    return template


def render_prompt(role, values, prompt_dir=DEFAULT_PROMPT_DIR):
    prompt_dir = Path(prompt_dir)
    values = {
        **values,
        "program": (ROOT / "program.md").read_text(encoding="utf-8"),
    }
    common = (prompt_dir / "common.md").read_text(encoding="utf-8")
    common = fill_placeholders(common, values)
    role_filename = "pi_steer.md" if role.upper() == "PI" else f"{role.casefold()}.md"
    role_file = prompt_dir / role_filename
    role_template = role_file.read_text(encoding="utf-8")
    role_template = role_template.replace("{common}", common)
    return fill_placeholders(role_template, values)


def fake_response(role, values):
    role = role.upper()
    if role == "SCOUT_QUERY":
        bottleneck = values.get("task_brief", "the current CPU benchmark loss")
        return {
            "paper_query": f"recent methods for {bottleneck}",
            "code_query": f"GitHub benchmark methods for {bottleneck}",
            "bottleneck": bottleneck,
        }
    if role == "SCOUT_PICK":
        source_match = re.search(r"\bS\d+\b", str(values.get("sources", "")))
        return {
            "source_id": source_match.group(0) if source_match else "S1",
            "why": "Most directly testable benchmark change.",
        }
    if role == "SCOUT_LEAD":
        return {
            "recipe": "Change one task-specific search parameter.",
            "claimed_effect": "The source reports improved benchmark performance.",
            "predicted_delta": -0.001,
            "risk": "The small benchmark may not expose the effect.",
        }
    if role == "CRITIC_NOVELTY":
        try:
            candidates = json.loads(str(values.get("candidates") or "[]"))
        except json.JSONDecodeError:
            candidates = []
        return {
            "scores": [
                {
                    "agent": item.get("agent"),
                    "novelty": 0.5,
                    "closest": None,
                    "why": "Offline runs cannot judge prior art.",
                }
                for item in candidates
                if isinstance(item, dict)
            ]
        }
    if role == "CRITIC":
        return {
            "verdict": "replicated",
            "why": "The second evaluation matches the candidate run.",
            "lesson": None,
        }
    if role == "PI":
        return {"steers": []}
    if role in ("WORKER_PROPOSE", "WORKER_REPAIR"):
        assigned = values.get("assigned_cell")
        if assigned and assigned != "none":
            return fake_assigned_proposal(
                assigned,
                str(values.get("candidate_source", "")),
                values.get("assigned_descriptor"),
                values.get("fake_edits", []),
                fake_targets=values.get("fake_targets", []),
            )
        proposal = values.get("proposal")
        if role == "WORKER_REPAIR" and isinstance(proposal, dict):
            return proposal
        if role == "WORKER_REPAIR" and isinstance(proposal, str):
            try:
                parsed_proposal = json.loads(proposal)
            except json.JSONDecodeError:
                parsed_proposal = None
            if isinstance(parsed_proposal, dict):
                return parsed_proposal
        candidate_source = str(values.get("candidate_source") or "")
        fake_edits = values.get("fake_edits") or []
        if fake_edits:
            agent_match = re.search(r"(\d+)$", str(values.get("agent", "")))
            target_index = (int(agent_match.group(1)) - 1) % len(fake_edits) if agent_match else 0
            target_index = (target_index + values.get("fake_offset", 0)) % len(fake_edits)
            # Kept edits consume their old text and unlock follow-ups, so pick the
            # next canned edit that still applies to the current source.
            for offset in range(len(fake_edits)):
                index = (target_index + offset) % len(fake_edits)
                edits = fake_edit_pairs(fake_edits[index], candidate_source)
                if edits:
                    break
            else:
                return {"status": "reject", "reason": "no canned fake edit applies to this source"}
            return {
                "descriptor": fake_edits[index]["descriptor"],
                "idea": fake_edits[index].get("idea")
                or f"Test deterministic task edit {index + 1}",
                "rationale": "Apply a distinct task-specific edit for offline runs.",
                "lead_id": None,
                "source_ids": [],
                "predicted_delta": -0.001,
                "edits": edits,
            }
        fake_targets = values.get("fake_targets") or []
        if fake_targets:
            agent_match = re.search(r"(\d+)$", str(values.get("agent", "")))
            target_index = (int(agent_match.group(1)) - 1) % len(fake_targets) if agent_match else 0
            target_index = (target_index + values.get("fake_offset", 0)) % len(fake_targets)
            name, mechanism, method, increment = fake_targets[target_index]
            match = re.search(
                rf"(?m)^(?P<prefix>\s*{re.escape(name)}\s*=\s*)"
                rf"(?P<value>[+-]?\d+(?:\.\d+)?)\s*$",
                candidate_source,
            )
            if match is None:
                raise ValueError(f"fake worker could not find task knob {name}")
            value = float(match.group("value")) + float(increment)
            number = int(value) if value.is_integer() else value
            old = match.group(0)
            new = f"{match.group('prefix')}{number:g}"
            return {
                "descriptor": {
                    "mechanism": mechanism,
                    "method": method,
                    "params": {"value": number},
                },
                "idea": f"Adjust {name.lower()} to {number:g}",
                "rationale": "A controlled task-specific edit tests one descriptor cell.",
                "lead_id": None,
                "source_ids": [],
                "predicted_delta": -0.001,
                "edits": [{"old": old, "new": new}],
            }
        raise ValueError("fake worker requires task-specific fake_edits")
    raise ValueError(f"no fake response for role {role}")


def fake_edit_pairs(target, candidate_source):
    """The edits a canned fake edit makes to candidate_source, or None if it does not apply.

    A target is {"old", "new"}, {"edits": [{"old", "new"}, ...]} or {"replace_with": text
    or JSON object} (the whole file); every old text must occur exactly once, and an
    insertion whose new text is already present counts as applied.
    """
    if "replace_with" in target:
        new = target["replace_with"]
        if not isinstance(new, str):
            new = json.dumps(new, indent=1, ensure_ascii=False) + "\n"
        return (
            [{"old": candidate_source, "new": new}]
            if candidate_source.strip() and candidate_source != new
            else None
        )
    pairs = target.get("edits") or [{"old": target.get("old"), "new": target.get("new")}]
    edits = []
    for pair in pairs:
        old, new = pair.get("old"), pair.get("new")
        if not isinstance(old, str) or not isinstance(new, str):
            raise ValueError("fake task edits must contain string old/new values")
        if not old or old == new or candidate_source.count(old) != 1:
            return None
        if old in new and new in candidate_source:
            return None
        edits.append({"old": old, "new": new})
    return edits


def fake_assigned_proposal(cell, candidate_source, descriptor=None, fake_edits=(), fake_targets=()):
    mechanism, method = cell.split("/")
    value = (descriptor or {}).get("params", {}).get("value")
    matching = [
        item
        for item in fake_edits
        if item.get("descriptor", {}).get("mechanism") == mechanism
        and item.get("descriptor", {}).get("method") == method
    ]
    target = next(
        (item for item in matching if fake_edit_pairs(item, candidate_source)),
        matching[0] if matching else None,
    )
    if target is None and fake_targets:
        target = next(
            (item for item in fake_targets if item[1] == mechanism and item[2] == method),
            None,
        )
        if target is None:
            return {"status": "reject", "reason": f"unbuildable assignment: {cell}"}
        name, _, _, increment = target
        match = re.search(
            rf"(?m)^(?P<prefix>\s*{re.escape(name)}\s*=\s*)"
            rf"(?P<value>[+-]?\d+(?:\.\d+)?)\s*$",
            candidate_source,
        )
        if match is None:
            raise ValueError(f"fake assigned cell cannot find {name}")
        value = float(match.group("value")) + float(increment)
        number = int(value) if value.is_integer() else value
        old = match.group(0)
        new = f"{match.group('prefix')}{number:g}"
        edits = [{"old": old, "new": new}]
    elif target is not None:
        edits = fake_edit_pairs(target, candidate_source)
        if not edits:
            return {"status": "reject", "reason": f"unbuildable assignment: {cell}"}
    else:
        return {"status": "reject", "reason": f"unbuildable assignment: {cell}"}
    assigned_value = value or (descriptor or {}).get("params", {}).get("value")
    return {
        "descriptor": {
            "mechanism": mechanism,
            "method": method,
            **({"params": {"value": assigned_value}} if assigned_value is not None else {}),
        },
        "idea": (target.get("idea") if isinstance(target, dict) else None)
        or f"Test assigned {cell}",
        "rationale": "Implement the conductor-assigned descriptor cell.",
        "lead_id": None,
        "source_ids": [],
        "predicted_delta": -0.001,
        "edits": edits,
    }


class LLMError(RuntimeError):
    """A model request failed after its retries; the caller may record it and go on."""


class LLMClient:
    def __init__(
        self,
        *,
        mode="openai",
        model=None,
        role_models=None,
        log_path="llm_log.jsonl",
        prompt_dir=DEFAULT_PROMPT_DIR,
        replay=False,
        seed=None,
        fake_delay=0.0,
    ):
        self.mode = mode.casefold()
        self.fake_delay = max(0.0, float(fake_delay))
        self.prompt_dir = Path(prompt_dir)
        self.log_path = Path(log_path)
        self.replay = replay
        self.seed = seed
        self.sampling_seed = None
        self.records = read_log(self.log_path)
        self.call_counter = len(self.records)
        self.call_ids = [
            record["call_id"] for record in self.records if isinstance(record.get("call_id"), str)
        ]
        self.call_metadata = {
            record["call_id"]: {
                "role": record.get("role"),
                "agent": record.get("agent"),
                "round": record.get("round"),
            }
            for record in self.records
            if isinstance(record.get("call_id"), str)
        }
        self.last_call_id = None
        self.model = model or os.environ.get(
            "TINKER_MODEL" if self.mode == "tinker" else "OPENAI_MODEL"
        )
        self.role_models = {
            str(role).upper(): value
            for role, value in (role_models or {}).items()
            if value is not None
        }
        self.request_attempts = []
        if self.mode == "fake":
            self.model = self.model or "fake"
        elif self.mode == "tinker":
            if not replay and not self.model:
                raise ValueError("set --model or TINKER_MODEL for Tinker requests")
            if not replay and not os.environ.get("TINKER_API_KEY"):
                raise ValueError("TINKER_API_KEY is required for Tinker requests")
        elif self.mode == "openai" and not replay:
            if not self.model:
                raise ValueError("set --model or OPENAI_MODEL for OpenAI requests")
            if not os.environ.get("OPENAI_API_KEY"):
                raise ValueError("OPENAI_API_KEY is required for OpenAI requests")
        elif self.mode != "openai":
            raise ValueError("LLM mode must be openai, tinker, or fake")

    def call(self, role, *, agent, round_num, values):
        self.call_counter += 1
        call_id = f"{role.upper()}-r{round_num}-{agent}-{self.call_counter}"
        self.last_call_id = None
        prompt_values = dict(values)
        prompt_values["agent"] = agent
        prompt_values["round"] = round_num
        prompt_values["role"] = role.casefold()
        if self.seed is not None:
            # Key by role/worker/round, so arm-specific extra calls do not shift
            # the common random numbers for later matched calls.
            key = f"{self.seed}:{role}:{agent}:{round_num}"
            self.sampling_seed = int(hashlib.sha256(key.encode()).hexdigest()[:8], 16) % (2**31)
            prompt_values["fake_offset"] = self.seed + round_num - 1
        prompt = render_prompt(role, prompt_values, self.prompt_dir)
        digest = prompt_sha(prompt)
        started = time.monotonic()
        usage = None
        model = self.role_models.get(role.upper(), self.model)
        self.request_attempts = []
        if self.replay:
            previous = next(
                (
                    record
                    for record in self.records
                    if record.get("prompt_sha") == digest
                    and record.get("role", role.upper()) == role.upper()
                ),
                None,
            )
            if previous is None:
                raise RuntimeError(f"LLM replay miss for prompt {digest}")
            response = previous.get("response")
            model = previous.get("model", model)
            usage = previous.get("usage")
        elif self.mode == "fake":
            if self.fake_delay:
                time.sleep(self.fake_delay)
            response = fake_response(role, prompt_values)
        else:
            try:
                if self.mode == "tinker":
                    response, usage = self._request_tinker(
                        prompt,
                        model=model,
                        role=role,
                        allow_json_retry=role.upper() != "PI",
                    )
                else:
                    response, usage = self._request(prompt, model=model)
            except RuntimeError as error:
                raise LLMError(f"{role} call for {agent} failed: {error}") from error
        if not isinstance(response, dict):
            raise LLMError(f"LLM role {role} response must be a JSON object")
        record = {
            "ts": timestamp(),
            "call_id": call_id,
            "role": role.upper(),
            "agent": agent,
            "round": round_num,
            "model": model,
            "prompt_sha": digest,
            "prompt": prompt,
            "response": response,
            "latency_ms": int((time.monotonic() - started) * 1000),
            "usage": usage,
            "seed": self.sampling_seed,
        }
        if self.request_attempts:
            record["attempts"] = self.request_attempts
        append_log(self.log_path, record)
        self.records.append(record)
        self.call_ids.append(call_id)
        self.call_metadata[call_id] = {"role": role.upper(), "agent": agent, "round": round_num}
        self.last_call_id = call_id
        return response

    def _tinker_completion(self, prompt, model=None, role=None):
        """Sample through Tinker's OpenAI-compatible endpoint; it renders the chat template."""
        base_url = os.environ.get("TINKER_BASE_URL", TINKER_BASE_URL).rstrip("/")
        reasoning_effort = (
            os.environ.get("TINKER_PI_REASONING_EFFORT", "medium")
            if str(role or "").upper() == "PI"
            else os.environ.get("TINKER_REASONING_EFFORT", DEFAULT_TINKER_REASONING_EFFORT)
        )
        payload = {
            "model": model or self.model,
            "messages": [{"role": "user", "content": prompt}],
            "max_tokens": 8192,
            "temperature": 0.3,
            "reasoning_effort": reasoning_effort,
        }
        if self.sampling_seed is not None:
            payload["seed"] = self.sampling_seed
        request = Request(
            f"{base_url}/chat/completions",
            data=json.dumps(payload).encode("utf-8"),
            headers={
                "Authorization": f"Bearer {os.environ.get('TINKER_API_KEY', '')}",
                "Content-Type": "application/json",
                "User-Agent": "caffeinated-swarm",
            },
            method="POST",
        )
        for attempt in range(3):
            try:
                with urlopen(request, timeout=TINKER_TIMEOUT_SECONDS) as http_response:
                    response = json.loads(http_response.read().decode("utf-8"))
                break
            except HTTPError as error:
                if error.code in TRANSIENT_HTTP and attempt < 2:
                    time.sleep(5 * (attempt + 1))
                    continue
                detail = error.read().decode("utf-8", "replace")[:300]
                raise RuntimeError(f"Tinker returned HTTP {error.code}: {detail}") from error
            except URLError as error:
                if attempt < 2:
                    time.sleep(5 * (attempt + 1))
                    continue
                raise RuntimeError(f"Tinker request failed: {error.reason}") from error
            except json.JSONDecodeError as error:
                raise RuntimeError("Tinker returned invalid JSON") from error
        try:
            message = response["choices"][0]["message"]
        except (KeyError, IndexError, TypeError) as error:
            raise RuntimeError("Tinker returned no completion message") from error
        content = message.get("content") or ""
        reasoning_content = message.get("reasoning_content")
        reasoning = str(reasoning_content or "").strip()
        raw_usage = response.get("usage") or {}
        usage = _usage_with_token_details(
            {
                key: _usage_int(raw_usage.get(key))
                for key in ("prompt_tokens", "completion_tokens", "total_tokens")
            },
            raw_usage,
            reasoning_content=reasoning_content,
        )
        if reasoning:
            usage["reasoning"] = reasoning
        return content, usage

    def _request_tinker(self, prompt, model=None, role=None, allow_json_retry=True):
        usage = {"prompt_tokens": 0, "completion_tokens": 0, "total_tokens": 0}
        request_prompt = prompt
        for attempt in range(2):
            started = time.monotonic()
            content, attempt_usage = self._tinker_completion(request_prompt, model=model, role=role)
            reasoning = attempt_usage.pop("reasoning", "")
            record = {
                "response": content,
                "latency_ms": int((time.monotonic() - started) * 1000),
                "usage": attempt_usage,
            }
            if reasoning:
                record["reasoning"] = reasoning
            self.request_attempts.append(record)
            for key in (
                "prompt_tokens",
                "completion_tokens",
                "total_tokens",
                "cached_tokens",
                "reasoning_tokens",
                "reasoning_chars",
            ):
                if key in attempt_usage:
                    usage[key] = usage.get(key, 0) + attempt_usage[key]
            if "cached_tokens" in usage:
                usage["prompt_tokens_details"] = {"cached_tokens": usage["cached_tokens"]}
            if "reasoning_tokens" in usage:
                usage["completion_tokens_details"] = {"reasoning_tokens": usage["reasoning_tokens"]}
            try:
                return first_json_object(content), usage
            except ValueError as error:
                record["parse_error"] = str(error)
                if not allow_json_retry:
                    raise RuntimeError(f"Tinker returned invalid JSON: {error}") from error
                if attempt:
                    raise RuntimeError(
                        f"Tinker returned invalid JSON after one retry: {error}"
                    ) from error
                request_prompt = (
                    prompt
                    + "\nYour previous response could not be parsed: "
                    + str(error)
                    + "\nReturn a single valid JSON object only."
                )

    def _request(self, prompt, model=None):
        api_key = os.environ.get("OPENAI_API_KEY")
        base_url = os.environ.get("OPENAI_BASE_URL", "https://api.openai.com/v1").rstrip("/")
        payload = {
            "model": model or self.model,
            "messages": [{"role": "user", "content": prompt}],
            "response_format": {"type": "json_object"},
        }
        if self.sampling_seed is not None:
            payload["seed"] = self.sampling_seed
        request = Request(
            f"{base_url}/chat/completions",
            data=json.dumps(payload).encode("utf-8"),
            headers={
                "Authorization": f"Bearer {api_key}",
                "Content-Type": "application/json",
            },
            method="POST",
        )
        try:
            with urlopen(request, timeout=60) as http_response:
                response = json.loads(http_response.read().decode("utf-8"))
        except HTTPError as error:
            raise RuntimeError(f"OpenAI returned HTTP {error.code}") from error
        except URLError as error:
            raise RuntimeError(f"OpenAI request failed: {error.reason}") from error
        except json.JSONDecodeError as error:
            raise RuntimeError("OpenAI returned invalid JSON") from error
        try:
            message = response["choices"][0]["message"]
            content = message["content"]
            parsed = json.loads(content)
        except (KeyError, IndexError, TypeError, json.JSONDecodeError) as error:
            raise RuntimeError("OpenAI returned an invalid JSON-mode completion") from error
        if not isinstance(parsed, dict):
            raise RuntimeError("OpenAI completion must be a JSON object")
        raw_usage = response.get("usage") or {}
        usage = _usage_with_token_details(
            raw_usage,
            raw_usage,
            reasoning_content=message.get("reasoning_content"),
        )
        return parsed, usage
