#!/usr/bin/env python3
"""OpenAI, Tinker, queue, and offline clients for swarm JSON prompts."""

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

from runtime_env import load_local_env


ROOT = Path(__file__).resolve().parent
load_local_env(ROOT / ".env")
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
        assigned = values.get("assigned_cell")
        if assigned and assigned != "none":
            return fake_assigned_proposal(assigned, str(values["train_py"]), values.get("assigned_descriptor"))
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


def fake_assigned_proposal(cell, train_py, descriptor=None):
    mechanism, method = cell.split("/")
    knobs = {
        "architecture/depth": ("DEPTH", 1),
        "architecture/width": ("ASPECT_RATIO", 8),
        "architecture/head_dim": ("HEAD_DIM", 16),
        "optimizer/matrix_lr": ("MATRIX_LR", 0.002),
        "optimizer/embed_lr": ("EMBEDDING_LR", 0.02),
        "optimizer/unembed_lr": ("UNEMBEDDING_LR", 0.001),
        "optimizer/weight_decay": ("WEIGHT_DECAY", 0.02),
        "lr_schedule/warmup": ("WARMUP_RATIO", 0.02),
        "lr_schedule/warmdown": ("WARMDOWN_RATIO", 0.02),
        "lr_schedule/final_lr": ("FINAL_LR_FRAC", 0.02),
    }
    if cell in knobs:
        name, increment = knobs[cell]
        match = re.search(rf"(?m)^{name}\s*=\s*([\d.]+)", train_py)
        if match is None:
            raise ValueError(f"fake assigned cell cannot find {name}")
        value = float(match.group(1)) + increment
        value = (descriptor or {}).get("params", {}).get("value", value)
        old, new = match.group(0), f"{name} = {value:g}"
    else:
        edits = {
            "architecture/family": ("x = F.relu(x).square()", "x = F.gelu(x)"),
            "architecture/mlp": ("4 * config.n_embd", "3 * config.n_embd"),
            "architecture/norm": ("return F.rms_norm(x, (x.size(-1),))", "return F.layer_norm(x, (x.size(-1),))"),
            "attention/family": ("q, k = norm(q), norm(k)", "q, k = norm(q) * 0.9, norm(k)"),
            "attention/softcap": ("causal=True, window_size=window_size", "causal=True, window_size=window_size, softcap=30.0"),
            "attention/window": ('WINDOW_PATTERN = "SSSL"', 'WINDOW_PATTERN = "SLLL"'),
            "data/ordering": ("x, y, epoch = next(train_loader)  # prefetch first batch", "next(train_loader)  # skip the first training batch\nx, y, epoch = next(train_loader)  # prefetch first batch"),
            "data/sequence": ("config = build_model_config(DEPTH)", "MAX_SEQ_LEN //= 2\nconfig = build_model_config(DEPTH)"),
            "optimizer/adam_beta": ("ADAM_BETAS = (0.8, 0.95)", "ADAM_BETAS = (0.85, 0.95)"),
            "optimizer/family": ("kind='muon', params=group_params, lr=matrix_lr,", "kind='adamw', params=group_params, lr=matrix_lr, betas=adam_betas, eps=1e-10,"),
        }
        if cell == "batch/total_batch":
            match = re.search(r"TOTAL_BATCH_SIZE\s*=\s*2\*\*(\d+)", train_py)
            if match is None:
                raise ValueError("fake assigned cell cannot find TOTAL_BATCH_SIZE")
            old, new = match.group(0), f"TOTAL_BATCH_SIZE = 2**{int(match.group(1)) - 1}"
        elif cell in edits:
            old, new = edits[cell]
        else:
            raise ValueError(f"fake worker does not support assigned cell {cell}")
        value = None
    if cell == "architecture/mlp":
        match = re.search(r"self.c_fc = nn.Linear\(config.n_embd, (\d+) \* config.n_embd", train_py)
        if match is None:
            raise ValueError("fake assigned cell cannot find the MLP width")
        width = match.group(1)
        old = "\n".join(line for line in train_py.splitlines() if f"{width} * config.n_embd" in line)
        new = old.replace(f"{width} * config.n_embd", f"{int(width) + 1} * config.n_embd")
    elif cell not in knobs and old not in train_py and new in train_py:
        old, new = new, old
    if old not in train_py or old == new:
        raise ValueError(f"fake assigned edit unavailable for {cell}")
    return {
        "descriptor": {"mechanism": mechanism, "method": method,
                       **({"params": {"value": value}} if value is not None else {})},
        "idea": f"Test assigned {cell}",
        "rationale": "Implement the conductor-assigned descriptor cell.",
        "lead_id": None, "source_ids": [], "predicted_delta": -0.001,
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
        elif self.mode == "queue":
            self.model = "devin-queue"
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
            raise ValueError("LLM mode must be openai, tinker, fake, or queue")

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
        elif self.mode == "queue":
            response = self._queue_request(
                role, agent=agent, round_num=round_num, prompt=prompt
            )
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
                        "Kimi K3.1 requires tml-renderers and PyTorch 2.10+; "
                        "see program_swarm.md"
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
                chat.MessageList.from_openai_chat_dicts(
                    [{"role": "user", "content": prompt}]
                )
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
        sequence = self.tinker_sampler.sample(
            prompt=model_input,
            num_samples=1,
            sampling_params=tinker.types.SamplingParams(
                max_tokens=8192, temperature=0.3, stop=stop
            ),
        ).result().sequences[0]
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
                content = "\n".join(
                    message.get("content") or "" for message in messages
                    if message.get("role") == "assistant"
                )
            except ValueError:
                content = ""
        else:
            content = self.tinker_tokenizer.decode(sequence.tokens, skip_special_tokens=True)
            content = content.rsplit("</think>", 1)[-1]
        return content, usage

    def _request_tinker(self, prompt):
        usage = {"prompt_tokens": 0, "completion_tokens": 0, "total_tokens": 0}
        request_prompt = prompt
        for attempt in range(2):
            started = time.monotonic()
            content, attempt_usage = self._tinker_completion(request_prompt)
            record = {
                "response": content,
                "latency_ms": int((time.monotonic() - started) * 1000),
                "usage": attempt_usage,
            }
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
                    prompt + "\nYour previous response could not be parsed: "
                    + str(error) + "\nReturn a single valid JSON object only."
                )

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
