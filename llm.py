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

ROOT = Path(__file__).resolve().parent
DEFAULT_PROMPT_DIR = ROOT / "prompts"


def timestamp():
    return datetime.now(timezone.utc).isoformat().replace("+00:00", "Z")


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
    path = Path(path)
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("a", encoding="utf-8") as stream:
        stream.write(json.dumps(record, sort_keys=True, ensure_ascii=False) + "\n")


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
    role_file = prompt_dir / f"{role.casefold()}.md"
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
            # A previous kept edit may have consumed this exact old text.
            # Select the next applicable canned edit rather than aborting a run.
            for offset in range(len(fake_edits)):
                index = (target_index + offset) % len(fake_edits)
                target = fake_edits[index]
                if (
                    isinstance(target.get("old"), str)
                    and target["old"]
                    and candidate_source.count(target["old"]) == 1
                    and target["old"] != target.get("new")
                ):
                    target_index = index
                    break
            else:
                raise ValueError("fake worker could not find a unique task edit")
            old = target["old"]
            new = target["new"]
            if not isinstance(old, str) or not isinstance(new, str):
                raise ValueError("fake task edits must contain string old/new values")
            if not old or candidate_source.count(old) != 1 or old == new:
                raise ValueError("fake worker could not find a unique task edit")
            return {
                "descriptor": target["descriptor"],
                "idea": f"Test deterministic task edit {target_index + 1}",
                "rationale": "Apply a distinct task-specific edit for offline runs.",
                "lead_id": None,
                "source_ids": [],
                "predicted_delta": -0.001,
                "edits": [{"old": old, "new": new}],
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


def fake_assigned_proposal(cell, candidate_source, descriptor=None, fake_edits=(), fake_targets=()):
    mechanism, method = cell.split("/")
    value = (descriptor or {}).get("params", {}).get("value")
    target = next(
        (
            item
            for item in fake_edits
            if item.get("descriptor", {}).get("mechanism") == mechanism
            and item.get("descriptor", {}).get("method") == method
        ),
        None,
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
    elif target is not None:
        old, new = target["old"], target["new"]
        if not old or candidate_source.count(old) != 1 or old == new:
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
        "idea": f"Test assigned {cell}",
        "rationale": "Implement the conductor-assigned descriptor cell.",
        "lead_id": None,
        "source_ids": [],
        "predicted_delta": -0.001,
        "edits": [{"old": old, "new": new}],
    }


class LLMClient:
    def __init__(
        self,
        *,
        mode="openai",
        model=None,
        log_path="llm_log.jsonl",
        prompt_dir=DEFAULT_PROMPT_DIR,
        replay=False,
        seed=None,
    ):
        self.mode = mode.casefold()
        self.prompt_dir = Path(prompt_dir)
        self.log_path = Path(log_path)
        self.replay = replay
        self.seed = seed
        self.sampling_seed = None
        self.records = read_log(self.log_path)
        self.model = model or os.environ.get(
            "TINKER_MODEL" if self.mode == "tinker" else "OPENAI_MODEL"
        )
        self.tinker_service = None
        self.tinker_sampler = None
        self.tinker_renderer = None
        self.tinker_tokenizer = None
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
        model = self.model
        self.request_attempts = []
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
        elif self.mode == "fake":
            response = fake_response(role, prompt_values)
        elif self.mode == "tinker":
            response, usage = self._request_tinker(prompt)
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
            "seed": self.sampling_seed,
        }
        if self.request_attempts:
            record["attempts"] = self.request_attempts
        append_log(self.log_path, record)
        self.records.append(record)
        return response

    def _tinker_completion(self, prompt):
        try:
            import tinker
        except ImportError as error:
            raise RuntimeError("Tinker requires Python 3.11+ and pip install tinker") from error
        if self.tinker_sampler is None:
            if self.model.split(":")[0] == "moonshotai/Kimi-K3.1-Pro":
                try:
                    from tml_renderers import renderers
                except ImportError as error:
                    raise RuntimeError(
                        "Kimi K3.1 requires tml-renderers and PyTorch 2.10+; see program.md"
                    ) from error
                self.tinker_renderer = renderers.KimiK31Pro.low()
            self.tinker_service = tinker.ServiceClient()
            self.tinker_sampler = self.tinker_service.create_sampling_client(
                base_model=self.model
            ).result()
            if self.tinker_renderer is None:
                self.tinker_tokenizer = self.tinker_sampler.get_tokenizer()
        if self.tinker_renderer is not None:
            from tml_renderers import chat
            from tml_renderers.tinker import token_spans_to_tinker_model_input

            spans, parser = self.tinker_renderer.render_for_completion(
                chat.MessageList.from_openai_chat_dicts([{"role": "user", "content": prompt}])
            )
            model_input = token_spans_to_tinker_model_input(spans)
            stop = self.tinker_renderer.stop()
        else:
            tokens = self.tinker_tokenizer.apply_chat_template(
                [{"role": "user", "content": prompt}],
                tokenize=True,
                add_generation_prompt=True,
            )
            model_input = tinker.types.ModelInput.from_ints(tokens)
            stop = [self.tinker_tokenizer.eos_token_id]
        sequence = (
            self.tinker_sampler.sample(
                prompt=model_input,
                num_samples=1,
                sampling_params=tinker.types.SamplingParams(
                    max_tokens=8192,
                    temperature=0.3,
                    stop=stop,
                    **({"seed": self.sampling_seed} if self.sampling_seed is not None else {}),
                ),
            )
            .result()
            .sequences[0]
        )
        usage = {
            "prompt_tokens": len(model_input.to_ints()),
            "completion_tokens": len(sequence.tokens),
        }
        usage["total_tokens"] = sum(usage.values())
        if self.tinker_renderer is not None:
            try:
                messages = chat.MessageList(
                    parser.parse_tokens(sequence.tokens).messages
                ).to_openai_chat_dicts()
                assistant = [m for m in messages if m.get("role") == "assistant"]
                content = "\n".join(m.get("content") or "" for m in assistant)
                reasoning = "\n".join(
                    str(m.get("reasoning_content") or m.get("reasoning") or m.get("thinking") or "")
                    for m in assistant
                ).strip()
            except ValueError:
                content = reasoning = ""
        else:
            text = self.tinker_tokenizer.decode(sequence.tokens, skip_special_tokens=True)
            reasoning, _, content = text.rpartition("</think>")
            reasoning = reasoning.replace("<think>", "").strip()
        if reasoning:
            usage["reasoning"] = reasoning
        return content, usage

    def _request_tinker(self, prompt):
        usage = {"prompt_tokens": 0, "completion_tokens": 0, "total_tokens": 0}
        request_prompt = prompt
        for attempt in range(2):
            started = time.monotonic()
            content, attempt_usage = self._tinker_completion(request_prompt)
            reasoning = attempt_usage.pop("reasoning", "")
            record = {
                "response": content,
                "latency_ms": int((time.monotonic() - started) * 1000),
                "usage": attempt_usage,
            }
            if reasoning:
                record["reasoning"] = reasoning
            self.request_attempts.append(record)
            for key in usage:
                usage[key] += attempt_usage.get(key, 0)
            try:
                return first_json_object(content), usage
            except ValueError as error:
                record["parse_error"] = str(error)
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

    def _request(self, prompt):
        api_key = os.environ.get("OPENAI_API_KEY")
        base_url = os.environ.get("OPENAI_BASE_URL", "https://api.openai.com/v1").rstrip("/")
        payload = {
            "model": self.model,
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
            content = response["choices"][0]["message"]["content"]
            parsed = json.loads(content)
        except (KeyError, IndexError, TypeError, json.JSONDecodeError) as error:
            raise RuntimeError("OpenAI returned an invalid JSON-mode completion") from error
        if not isinstance(parsed, dict):
            raise RuntimeError("OpenAI completion must be a JSON object")
        return parsed, response.get("usage")
