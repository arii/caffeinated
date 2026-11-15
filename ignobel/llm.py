"""All model calls go through here: JSON chat, embeddings, cache, token cap, prompt log.

MOCK=1 returns canned JSON and seeded embeddings with no network.
Real mode uses the OpenAI SDK; model names come from env vars.
"""
import hashlib
import json
import os
import re
import threading
import time
from pathlib import Path

import numpy as np
from pydantic import BaseModel

MOCK = os.environ.get("MOCK") == "1"
MODEL_CHEAP = os.environ.get("MODEL_CHEAP", "gpt-5-mini")
MODEL_STRONG = os.environ.get("MODEL_STRONG", "gpt-5")
MODEL_JUDGE_B = os.environ.get("MODEL_JUDGE_B", "gpt-5-mini")
EMBED_BACKEND = os.environ.get("EMBED_BACKEND", "openai")  # "local" = fastembed on CPU, no key
EMBED_MODEL = os.environ.get("EMBED_MODEL") or (
    "BAAI/bge-small-en-v1.5" if EMBED_BACKEND == "local" else "text-embedding-3-small")
CACHE_DIR = Path(os.environ.get("LLM_CACHE_DIR", Path(__file__).parent / ".cache"))
TOKEN_CAP = int(os.environ.get("TOKEN_CAP", "0") or 0)  # 0 = unlimited
# Reasoning models spend completion tokens thinking before they answer; this is added to every
# call's max_tokens so the answer isn't cut off (Tinker's Inkling needs ~2000).
REASONING_TOKENS = int(os.environ.get("REASONING_TOKENS", "0") or 0)
MOCK_EMBED_DIM = 64


class TokenCapExceeded(RuntimeError):
    pass


class LLMResult(BaseModel):
    data: dict
    tokens: int
    latency_ms: int
    model: str
    cached: bool = False


usage = {"tokens": 0}
_prompt_log: Path | None = None
_clients = None
_clients_lock = threading.Lock()
_turn = 0


def set_prompt_log(path: str | Path | None) -> None:
    """Record every prompt sent (used by the judge-isolation test)."""
    global _prompt_log
    _prompt_log = Path(path) if path else None


def _log_prompt(model: str, system: str, user: str) -> None:
    if _prompt_log is None:
        return
    _prompt_log.parent.mkdir(parents=True, exist_ok=True)
    with open(_prompt_log, "a", encoding="utf-8") as f:
        f.write(json.dumps({"model": model, "system": system, "user": user}) + "\n")


def _hash(*parts: str) -> str:
    h = hashlib.sha256()
    for p in parts:
        h.update(p.encode("utf-8"))
        h.update(b"\x00")
    return h.hexdigest()


def _charge(tokens: int) -> None:
    usage["tokens"] += tokens
    if TOKEN_CAP and usage["tokens"] > TOKEN_CAP:
        raise TokenCapExceeded(f"token cap {TOKEN_CAP} exceeded ({usage['tokens']})")


def chat_json(model: str, system: str, user: str, *, kind: str, seed: int = 0,
              max_tokens: int = 900, mock_context: dict | None = None) -> LLMResult:
    """One chat call that must return a JSON object.

    `kind` names the caller (propose, refine, talk, study_code, abstract, lesson,
    judge_a, judge_b) so mock mode can pick a valid canned shape.
    `mock_context` is structured info only the mock uses (instrument names etc.).
    """
    _log_prompt(model, system, user)
    if MOCK:
        data = _mock_json(kind, _hash(system, user, str(seed)), {**(mock_context or {}), "_prompt": user})
        tokens = (len(system) + len(user) + len(json.dumps(data))) // 4
        _charge(tokens)
        return LLMResult(data=data, tokens=tokens, latency_ms=0, model=f"mock-{model}")

    max_tokens += REASONING_TOKENS
    key = _hash("chat", model, system, user, str(seed), str(max_tokens))
    cache_file = CACHE_DIR / "llm" / f"{key}.json"
    if cache_file.exists():
        cached = json.loads(cache_file.read_text(encoding="utf-8"))
        if isinstance(cached["data"], dict) and cached["data"].get("_parse_error"):
            cached["data"] = parse_reply(cached["data"].get("_raw", ""))
        return LLMResult(**cached, cached=True)

    t0 = time.monotonic()
    tokens = 0
    budget = max_tokens
    import openai
    for attempt in range(2):  # a cut-off reply is retried once with double the budget
        try:
            resp = _openai_call(lambda client, token_budget=budget: client.chat.completions.create(
                model=model,
                messages=[{"role": "system", "content": system}, {"role": "user", "content": user}],
                response_format={"type": "json_object"},
                max_completion_tokens=token_budget,
                seed=seed,
            ))
        except openai.UnprocessableEntityError as e:
            # the provider could not turn the model's output into a reply (seen with Tinker when the
            # model answers in function-call syntax). One retry, then an unusable, uncached reply.
            if attempt == 0:
                continue
            return LLMResult(data={"_raw": "", "_parse_error": True, "_error": f"HTTP 422: {str(e)[:200]}"},
                             tokens=tokens, latency_ms=int((time.monotonic() - t0) * 1000), model=model)
        used = resp.usage.total_tokens if resp.usage else 0
        tokens += used
        _charge(used)
        choice = resp.choices[0]
        truncated = choice.finish_reason == "length"
        if not truncated:
            break
        budget *= 2
    latency_ms = int((time.monotonic() - t0) * 1000)
    data = parse_reply(choice.message.content or "")
    if truncated:
        data["_truncated"] = True
    result = LLMResult(data=data, tokens=tokens, latency_ms=latency_ms, model=model)
    if truncated:  # don't cache a cut-off reply; a rerun with more REASONING_TOKENS should retry it
        return result
    cache_file.parent.mkdir(parents=True, exist_ok=True)
    cache_file.write_text(json.dumps(result.model_dump(exclude={"cached"})), encoding="utf-8")
    return result


def _quote_bare_keys(s: str) -> str:
    """{code: "x", requests: []} -> {"code": "x", "requests": []}; string contents are left alone."""
    out, i, in_str, esc, expect_key = [], 0, False, False, False
    while i < len(s):
        c = s[i]
        if in_str:
            esc, in_str = (False, True) if esc else (c == "\\", c != '"')
        elif c == '"':
            in_str = True
        elif c in "{,":
            expect_key = True
        elif expect_key and (c.isalpha() or c == "_"):
            j = i
            while j < len(s) and (s[j].isalnum() or s[j] == "_"):
                j += 1
            k = j
            while k < len(s) and s[k].isspace():
                k += 1
            expect_key = False
            if k < len(s) and s[k] == ":":
                out.append(f'"{s[i:j]}"')
                i = j
                continue
        elif not c.isspace():
            expect_key = False
        out.append(c)
        i += 1
    return "".join(out)


def parse_reply(text: str) -> dict:
    """JSON object from a model reply. Some models (Tinker Inkling) leave object keys unquoted."""
    for candidate in (text, _quote_bare_keys(text)):
        try:
            data = json.loads(candidate)
        except json.JSONDecodeError:
            continue
        return data if isinstance(data, dict) else {"_raw": text, "_parse_error": True}
    return {"_raw": text, "_parse_error": True}


def embed(texts: list[str]) -> np.ndarray:
    """Return unit-norm embeddings, shape (len(texts), dim). Cached per text."""
    if not texts:
        return np.zeros((0, embed_dim()))
    if MOCK:
        return np.vstack([_mock_embed(t) for t in texts])

    out: list[np.ndarray | None] = [None] * len(texts)
    missing: list[int] = []
    for i, t in enumerate(texts):
        f = CACHE_DIR / "embed" / f"{_hash(EMBED_MODEL, t)}.json"
        if f.exists():
            out[i] = np.array(json.loads(f.read_text()))
        else:
            missing.append(i)
    if missing:
        for i, raw in zip(missing, _embed_remote([texts[i] for i in missing])):
            v = np.array(raw)
            v = v / (np.linalg.norm(v) or 1.0)
            out[i] = v
            f = CACHE_DIR / "embed" / f"{_hash(EMBED_MODEL, texts[i])}.json"
            f.parent.mkdir(parents=True, exist_ok=True)
            f.write_text(json.dumps(v.tolist()))
    return np.vstack(out)  # type: ignore[arg-type]


_embed_dim = None


def embed_dim() -> int:
    global _embed_dim
    if MOCK:
        return MOCK_EMBED_DIM
    if _embed_dim is None:
        _embed_dim = len(embed(["dimension probe"])[0])
    return _embed_dim


def _embed_remote(texts: list[str]) -> list:
    if EMBED_BACKEND == "local":
        return list(_local_embedder().embed(texts))
    resp = _openai_call(lambda client: client.embeddings.create(model=EMBED_MODEL, input=texts))
    _charge(resp.usage.total_tokens if resp.usage else 0)
    return [item.embedding for item in resp.data]


_local_model = None


def _local_embedder():
    global _local_model
    if _local_model is None:
        from fastembed import TextEmbedding
        _local_model = TextEmbedding(EMBED_MODEL)
    return _local_model


def _mock_embed(text: str) -> np.ndarray:
    """Seeded bag-of-words vector: shared words give similar texts a high cosine."""
    words = re.findall(r"\w+", text.lower()) or ["empty"]
    v = np.zeros(MOCK_EMBED_DIM)
    for w in words:
        h = int(_hash("embed", w)[:8], 16)
        v += np.random.default_rng(h).normal(size=MOCK_EMBED_DIM)
    return v / (np.linalg.norm(v) or 1.0)


def cosine(a: np.ndarray, b: np.ndarray) -> float:
    na, nb = np.linalg.norm(a), np.linalg.norm(b)
    if na == 0 or nb == 0:
        return 0.0
    return float(np.dot(a, b) / (na * nb))


def _openai_call(fn):
    """Run fn(client), taking turns across the comma-separated keys in OPENAI_API_KEY.

    A key that is rejected or out of credit (401/402/403, or 429 insufficient_quota) is dropped
    for the rest of the process and the call is retried with the next one.
    """
    import openai
    global _clients, _turn
    while True:
        with _clients_lock:  # World._gather calls this from several threads
            if _clients is None:
                keys = [k.strip() for k in os.environ.get("OPENAI_API_KEY", "").split(",") if k.strip()]
                if not keys:
                    raise RuntimeError("set OPENAI_API_KEY (comma-separated for several keys), or run with MOCK=1")
                _clients = [openai.OpenAI(api_key=k) for k in keys]  # base URL from OPENAI_BASE_URL
            if not _clients:
                raise RuntimeError("every OPENAI_API_KEY was rejected or is out of credit")
            client = _clients[_turn % len(_clients)]
            _turn += 1
        try:
            return fn(client)
        except openai.APIStatusError as e:
            body = e.body if isinstance(e.body, dict) else {}
            quota = e.status_code == 429 and "insufficient_quota" in json.dumps(body)
            if e.status_code not in (401, 402, 403) and not quota:
                raise
            with _clients_lock:  # by identity: another thread may have removed it already
                if client in _clients:
                    _clients.remove(client)


# ----------------------------------------------------------------- mock data
_IDEAS = [
    "Do {noun} behave differently on Mondays? A {method} study of weekday effects",
    "Measuring the {noun} response to being politely asked to stop",
    "Does the volume of background humming change {noun} outcomes? A {method} test",
    "Left-handed {noun}: an unexplained asymmetry revisited with {method}",
    "The {noun} that waited: latency as a function of observer boredom",
    "Can {noun} tell the difference between real and fake applause? {method}",
    "Round numbers in {noun} data: a {method} audit of human rounding habits",
    "The optimal nap length for {noun} performance, estimated by {method}",
    "Do {noun} records improve when the lab plays jazz? {method} evidence",
    "Why {noun} measurements cluster near coffee breaks: a {method} analysis",
    "Counting the uncountable: {noun} and the illusion of precision via {method}",
    "A {method} replication of folklore about {noun} and full moons",
]
_TALK = [
    "In my field we would frame that as a sampling problem. What is your unit of analysis?",
    "That reminds me of an old result on {topic}. The effect flipped sign under replication.",
    "Have you considered that the measurement itself changes the thing measured?",
    "I can offer an instrument that reads {topic} if you want an outside check.",
    "The funny part is also the testable part. Predict the direction before you look.",
]
_LESSONS = [
    "Predict smaller effects; my last predictions were too confident.",
    "Replication halves disagree when the sample is tiny. Ask for more data first.",
    "Ideas close to my last five bored me. Next time borrow a method from another lab.",
    "Crashes came from instrument misuse. Read the instrument list before writing code.",
]


_SUBFIELDS = ["kitchen", "office", "bathroom", "playground", "commuter", "garden", "hospital", "nightclub"]


def _pick(seq, h: str, offset: int = 0):
    return seq[(int(h[offset:offset + 8], 16)) % len(seq)]


def _mock_json(kind: str, h: str, ctx: dict) -> dict:
    noun = ctx.get("noun", "participants")
    method = ctx.get("method", "regression")
    n = int(h[:8], 16)
    if kind == "propose":
        text = _pick(_IDEAS, h).format(noun=noun, method=method)
        return {
            "title": text[:60],
            "idea": text,
            "hypothesis": f"{noun} differ measurably under the manipulated condition.",
            "method": method,
            "prediction": {"direction": "+" if n % 2 == 0 else "-",
                           "effect_size": round(0.1 + (n % 80) / 100, 2)},
            **({"citations": ctx["sources"][:2]} if ctx.get("sources") else {}),
        }
    if kind == "refine":
        # A sensible scientist keeps the idea, sharpens the hypothesis, and predicts what it saw last time.
        prompt = ctx.get("_prompt", "")
        m = re.search(r"study: (.*?)(?:\nLast study|\nReturn)", prompt, re.DOTALL)
        text = m.group(1).strip() if m else _pick(_IDEAS, h).format(noun=noun, method=method)
        seen = re.search(r"actual effect=(-?[0-9.]+) \(([+-])\)", prompt)
        if seen:
            pred = {"direction": seen.group(2), "effect_size": round(abs(float(seen.group(1))), 2)}
        else:
            pred = {"direction": "+" if n % 2 == 0 else "-", "effect_size": round(0.1 + (n % 80) / 100, 2)}
        return {"title": "Refined: " + text[:50], "idea": text,
                "hypothesis": f"The effect on {noun} holds after controlling for variant {n % 7}.",
                "method": method, "prediction": pred}
    if kind == "talk":
        return {"text": _pick(_TALK, h).format(topic=ctx.get("topic", "measurement error"))}
    if kind == "study_code":
        return {"code": _mock_study_code(n, ctx), "requests": _mock_requests(n, ctx)}
    if kind == "abstract":
        ok = ctx.get("ok", True)
        verdict = "The effect replicated." if ok else "The effect did not survive the split-half check."
        return {"abstract": f"We asked whether {noun} change under a mundane manipulation. "
                            f"Using {method}, we measured {ctx.get('n', 'a modest number of')} observations. "
                            f"{verdict} We discuss what this says about {noun} and about us."}
    if kind == "lesson":
        return {"lesson": _pick(_LESSONS, h)}
    if kind == "research_plan":
        query = _pick(ctx.get("queries") or [noun], h)
        paper = {"tool": _pick(("openalex", "arxiv", "pubmed", "exa", "alphafold"), h, 8), "query": query}
        if not ctx.get("datasets"):
            first = {"tool": "load", "lead": "D1"} if ctx.get("leads") else {"tool": "datasets", "query": query}
            return {"steps": [first, paper], "why": "mock: a study needs real data"}
        steps = [paper]
        if ctx.get("sources"):
            steps.append({"tool": "read", "source": ctx["sources"][n % len(ctx["sources"])],
                          "question": "What was the main result, in numbers?"})
        return {"steps": steps, "why": "mock: read more"}
    if kind == "spawn":
        field = ctx.get("field", "science")
        k = int(ctx.get("spawned", 0)) + 1
        topic = _pick(_SUBFIELDS, h)
        return {"name": f"{field[:4]}{topic.split()[0]}{k}", "field": f"{topic} {field}",
                "seed_queries": [f"{topic} {field} odd findings", f"everyday {field} experiments"],
                "methods": [method, "randomised trials"]}
    if kind in ("judge_a", "judge_b"):
        base = 3 + (n % 7)
        return {"laugh": max(1, min(10, base + (n >> 8) % 3 - 1)),
                "think": max(1, min(10, base + (n >> 12) % 3 - 1)),
                "targets_group": (n % 97) == 0,
                "reason": "mock judgement"}
    return {"text": "mock"}


def _mock_requests(n: int, ctx: dict) -> list[dict]:
    """Statistician (no instruments) asks other labs for measurements."""
    if ctx.get("instruments"):
        return []
    peers = [p for p in ctx.get("peers", []) if p.get("instruments")]
    if not peers:
        return []
    reqs = []
    for i in range(2):
        p = peers[(n + i) % len(peers)]
        inst = p["instruments"][(n // 7 + i) % len(p["instruments"])]
        reqs.append({"owner": p["agent"], "instrument": inst, "args": {}})
    return reqs


def _mock_study_code(n: int, ctx: dict) -> str:
    variant = n % 10
    real = [d for d in ctx.get("datasets") or [] if len(d["numeric"]) >= 2]
    if real:
        d = real[n % len(real)]
        a, b = d["numeric"][n % len(d["numeric"])], d["numeric"][(n // 3 + 1) % len(d["numeric"])]
        b = b if b != a else d["numeric"][(d["numeric"].index(a) + 1) % len(d["numeric"])]
        head = ("from lab_runtime import rows, report, report_corr\n"
                f"x, y = zip(*rows({d['name']!r}, [{a!r}, {b!r}]))\n")
    elif ctx.get("instruments"):
        head = ("from lab_runtime import instruments, instrument, report, report_corr\n"
                "names = instruments()\n"
                "x = instrument(names[0])\n"
                "y = instrument(names[-1]) if len(names) > 1 else instrument(names[0], offset=1)\n")
    else:
        head = ("from lab_runtime import measurement, report, report_corr\n"
                "x = measurement(0)\n"
                "y = measurement(1)\n")
    if variant == 9:
        return head + "raise RuntimeError('mock crash: forgot to load the plate')\n"
    if variant >= 6:
        return head + ("m = min(len(x), len(y))\n"
                       f"report_corr(x[:m], y[:m], direction='{'+' if n % 2 == 0 else '-'}', "
                       f"effect_size={round(0.1 + (n % 80) / 100, 2)})\n")
    return head + (f"report(x, y, direction='{'+' if n % 2 == 0 else '-'}', "
                   f"effect_size={round(0.1 + (n % 80) / 100, 2)})\n")
