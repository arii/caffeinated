#!/usr/bin/env python3
"""Stdlib OpenAI Chat Completions client for swarm JSON prompts."""

from datetime import datetime, timezone
import hashlib
import json
import os
from pathlib import Path
import re
import tempfile
import time
from urllib.error import HTTPError, URLError
from urllib.request import Request, urlopen


ROOT = Path(__file__).resolve().parent
DEFAULT_PROMPT_DIR = ROOT / "prompts"
FAKE_TARGETS = (
    ("MATRIX_LR", "optimizer", "matrix_lr", 0.001),
    ("WARMDOWN_RATIO", "lr_schedule", "warmdown", 0.05),
    ("EMBEDDING_LR", "optimizer", "embed_lr", 0.01),
    ("TOTAL_BATCH_SIZE", "batch", "total_batch", 1),
)


def timestamp():
    return datetime.now(timezone.utc).isoformat().replace("+00:00", "Z")


def prompt_sha(prompt):
    return hashlib.sha256(prompt.encode("utf-8")).hexdigest()


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
    path = Path(path)
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("a", encoding="utf-8") as stream:
        stream.write(json.dumps(record, sort_keys=True, ensure_ascii=False) + "\n")


def atomic_write_text(path, text):
    path = Path(path)
    path.parent.mkdir(parents=True, exist_ok=True)
    with tempfile.NamedTemporaryFile(
        mode="w",
        encoding="utf-8",
        dir=path.parent,
        prefix=f".{path.name}.",
        delete=False,
    ) as stream:
        temporary = Path(stream.name)
        stream.write(text)
    os.replace(temporary, path)


def fill_placeholders(template, values):
    for name, value in values.items():
        template = template.replace("{" + name + "}", str(value))
    return template


def render_prompt(role, values, prompt_dir=DEFAULT_PROMPT_DIR):
    prompt_dir = Path(prompt_dir)
    common = (prompt_dir / "common.md").read_text(encoding="utf-8")
    common = fill_placeholders(common, values)
    role_file = prompt_dir / f"{role.casefold()}.md"
    role_template = role_file.read_text(encoding="utf-8")
    role_template = role_template.replace("{common}", common)
    return fill_placeholders(role_template, values)


def fake_response(role, values):
    role = role.upper()
    if role == "SCOUT_QUERY":
        bottleneck = "small GPT validation loss under a fixed training budget"
        return {
            "paper_query": f"recent methods for {bottleneck}",
            "code_query": f"GitHub small GPT {bottleneck}",
            "bottleneck": bottleneck,
        }
    if role == "SCOUT_PICK":
        source_match = re.search(r"\bS\d+\b", str(values.get("sources", "")))
        return {
            "source_id": source_match.group(0) if source_match else "S1",
            "why": "Most directly testable small-GPT training change.",
        }
    if role == "SCOUT_LEAD":
        return {
            "recipe": "Change one optimizer learning-rate parameter.",
            "claimed_effect": "The source reports improved training efficiency.",
            "predicted_delta": -0.001,
            "risk": "The short budget may hide the effect.",
        }
    if role == "CRITIC":
        return {
            "verdict": "replicated",
            "why": "The seed-43 result matches the candidate run.",
            "lesson": None,
        }
    if role in ("WORKER_PROPOSE", "WORKER_REPAIR"):
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
        train_py = str(values.get("train_py") or "")
        if not train_py:
            train_py = (ROOT / "train.py").read_text(encoding="utf-8")
        agent_match = re.search(r"(\d+)$", str(values.get("agent", "")))
        target_index = (int(agent_match.group(1)) - 1) % len(FAKE_TARGETS) if agent_match else 0
        name, mechanism, method, increment = FAKE_TARGETS[target_index]
        match = re.search(
            rf"(?m)^(?P<prefix>\s*{re.escape(name)}\s*=\s*)"
            rf"(?P<rhs>[^\n]*)$",
            train_py,
        )
        if not match:
            for offset in range(len(FAKE_TARGETS)):
                name, mechanism, method, increment = FAKE_TARGETS[
                    (target_index + offset) % len(FAKE_TARGETS)
                ]
                match = re.search(
                    rf"(?m)^(?P<prefix>\s*{re.escape(name)}\s*=\s*)"
                    rf"(?P<rhs>[^\n]*)$",
                    train_py,
                )
                if match:
                    break
        if not match:
            raise ValueError("fake worker could not find a supported train.py knob")
        old = match.group(0)
        rhs = match.group("rhs")
        value_text, marker, comment = rhs.partition("#")
        value_text = value_text.strip()
        if name == "TOTAL_BATCH_SIZE":
            exponent_match = re.fullmatch(r"2\s*\*\*\s*(\d+)", value_text)
            exponent = int(exponent_match.group(1)) if exponent_match else 19
            new_value = f"2**{max(1, exponent - 1)}"
            numeric_value = float(2 ** max(1, exponent - 1))
        else:
            current = float(re.match(r"[+-]?\d+(?:\.\d*)?", value_text).group(0))
            new_number = current + increment
            new_value = f"{new_number:.6g}"
            numeric_value = new_number
        suffix = f"{marker}{comment}" if marker else ""
        new = f"{match.group('prefix')}{new_value}"
        if suffix:
            new += f" #{comment}" if marker else suffix
        return {
            "descriptor": {
                "mechanism": mechanism,
                "method": method,
                "params": {"value": numeric_value},
            },
            "idea": f"Adjust {name.lower()} to {new_value}",
            "rationale": "A small controlled change tests an untried descriptor cell.",
            "lead_id": None,
            "source_ids": [],
            "predicted_delta": -0.001,
            "edits": [{"old": old, "new": new}],
        }
    raise ValueError(f"no fake response for role {role}")


class LLMClient:
    def __init__(
        self,
        *,
        mode="openai",
        model=None,
        log_path="llm_log.jsonl",
        prompt_dir=DEFAULT_PROMPT_DIR,
        replay=False,
        arm=None,
        queue_dir=None,
        queue_timeout=3600,
    ):
        self.mode = mode.casefold()
        self.prompt_dir = Path(prompt_dir)
        self.log_path = Path(log_path)
        self.replay = replay
        self.arm = arm or os.environ.get("AUTORESEARCH_ARM")
        self.queue_dir = Path(queue_dir or "llm_queue")
        self.queue_timeout = float(queue_timeout)
        if self.queue_timeout <= 0:
            raise ValueError("--queue-timeout must be greater than zero")
        self.call_counts = {}
        self.records = read_log(self.log_path)
        self.model = model or os.environ.get("OPENAI_MODEL")
        if self.mode == "fake":
            self.model = self.model or "fake"
        elif self.mode == "queue":
            self.model = "devin-queue"
        elif self.mode == "openai" and not replay:
            if not self.model:
                raise ValueError("set --model or OPENAI_MODEL for OpenAI requests")
            if not os.environ.get("OPENAI_API_KEY"):
                raise ValueError("OPENAI_API_KEY is required for OpenAI requests")
        elif self.mode != "openai":
            raise ValueError("LLM mode must be openai, fake, or queue")

    def call(self, role, *, agent, round_num, values):
        prompt_values = dict(values)
        prompt_values["agent"] = agent
        prompt_values["round"] = round_num
        prompt_values["role"] = role.casefold()
        prompt = render_prompt(role, prompt_values, self.prompt_dir)
        digest = prompt_sha(prompt)
        started = time.monotonic()
        usage = None
        model = self.model
        if self.replay:
            previous = next(
                (record for record in self.records if record.get("prompt_sha") == digest),
                None,
            )
            if previous is None:
                raise RuntimeError(f"LLM replay miss for prompt {digest}")
            response = previous.get("response")
            model = previous.get("model", model)
            usage = previous.get("usage")
        elif self.mode == "queue":
            response = self._queue_request(
                role, agent=agent, round_num=round_num, prompt=prompt
            )
        elif self.mode == "fake":
            response = fake_response(role, prompt_values)
        else:
            response, usage = self._request(prompt)
        if not isinstance(response, dict):
            raise RuntimeError(f"LLM role {role} response must be a JSON object")
        record = {
            "ts": timestamp(),
            "role": role.upper(),
            "agent": agent,
            "round": round_num,
            "model": model,
            "prompt_sha": digest,
            "prompt": prompt,
            "response": response,
            "latency_ms": int((time.monotonic() - started) * 1000),
            "usage": usage,
        }
        append_log(self.log_path, record)
        self.records.append(record)
        return response

    def _queue_request(self, role, *, agent, round_num, prompt):
        self.queue_dir.mkdir(parents=True, exist_ok=True)
        role_name = role.casefold()
        counter_key = (round_num, role_name, agent)
        call_number = self.call_counts.get(counter_key, 0) + 1
        call_id = f"r{round_num}-{role_name}-{agent}-{call_number}"
        while (
            (self.queue_dir / f"{call_id}.prompt.json").exists()
            or (self.queue_dir / f"{call_id}.response.json").exists()
        ):
            call_number += 1
            call_id = f"r{round_num}-{role_name}-{agent}-{call_number}"
        self.call_counts[counter_key] = call_number
        request = {
            "call_id": call_id,
            "role": role.upper(),
            "agent": agent,
            "round": round_num,
            "arm": self.arm,
            "prompt": prompt,
        }
        prompt_path = self.queue_dir / f"{call_id}.prompt.json"
        response_path = self.queue_dir / f"{call_id}.response.json"
        error_path = self.queue_dir / f"{call_id}.error.txt"
        atomic_write_text(
            prompt_path,
            json.dumps(request, sort_keys=True, ensure_ascii=False) + "\n",
        )
        deadline = time.monotonic() + self.queue_timeout
        invalid_signature = None
        while True:
            try:
                signature = (
                    response_path.stat().st_mtime_ns,
                    response_path.stat().st_size,
                )
            except FileNotFoundError:
                signature = None
            if signature is not None and signature != invalid_signature:
                try:
                    response = json.loads(response_path.read_text(encoding="utf-8"))
                    if not isinstance(response, dict):
                        raise ValueError("response must be a JSON object")
                except (OSError, json.JSONDecodeError, ValueError) as error:
                    invalid_signature = signature
                    atomic_write_text(
                        error_path,
                        f"invalid JSON response: {error}\n",
                    )
                else:
                    error_path.unlink(missing_ok=True)
                    return response
            remaining = deadline - time.monotonic()
            if remaining <= 0:
                raise RuntimeError(
                    f"timed out waiting for LLM response {call_id}"
                )
            time.sleep(min(2, remaining))

    def _request(self, prompt):
        api_key = os.environ.get("OPENAI_API_KEY")
        base_url = os.environ.get(
            "OPENAI_BASE_URL", "https://api.openai.com/v1"
        ).rstrip("/")
        payload = {
            "model": self.model,
            "messages": [{"role": "user", "content": prompt}],
            "response_format": {"type": "json_object"},
        }
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
            content = response["choices"][0]["message"]["content"]
            parsed = json.loads(content)
        except (KeyError, IndexError, TypeError, json.JSONDecodeError) as error:
            raise RuntimeError("OpenAI returned an invalid JSON-mode completion") from error
        if not isinstance(parsed, dict):
            raise RuntimeError("OpenAI completion must be a JSON object")
        return parsed, response.get("usage")
