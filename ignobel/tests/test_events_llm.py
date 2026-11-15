import json

import numpy as np
import pytest

import events
import llm


def test_event_rejects_unknown_type(tmp_path):
    log = events.EventLog(tmp_path / "e.jsonl", arm="full", seed=0)
    with pytest.raises(ValueError):
        log.append(0, "a", "bogus", {})


def test_event_roundtrip(tmp_path):
    log = events.EventLog(tmp_path / "e.jsonl", arm="full", seed=3)
    log.append(1, "a", "idea", {"text": "x"}, tokens=5, latency_ms=0)
    [ev] = list(events.read(tmp_path / "e.jsonl"))
    assert ev.type == "idea" and ev.seed == 3 and ev.tokens == 5
    line = (tmp_path / "e.jsonl").read_text().strip()
    assert set(json.loads(line)) == {"round", "arm", "seed", "agent", "type", "payload", "tokens", "latency_ms"}


def test_mock_chat_is_deterministic_json():
    a = llm.chat_json("m", "sys", "user", kind="propose", seed=1)
    b = llm.chat_json("m", "sys", "user", kind="propose", seed=1)
    c = llm.chat_json("m", "sys", "other user", kind="propose", seed=1)
    assert a.data == b.data and a.data != c.data
    assert a.data["prediction"]["direction"] in ("+", "-")
    assert a.latency_ms == 0 and a.tokens > 0


def test_mock_embed_shape_and_determinism():
    e = llm.embed(["alpha", "beta", "alpha"])
    assert e.shape == (3, llm.MOCK_EMBED_DIM)
    assert np.allclose(e[0], e[2]) and not np.allclose(e[0], e[1])
    assert np.allclose(np.linalg.norm(e, axis=1), 1.0)


def test_token_cap(monkeypatch):
    monkeypatch.setattr(llm, "TOKEN_CAP", 10)
    monkeypatch.setitem(llm.usage, "tokens", 0)
    with pytest.raises(llm.TokenCapExceeded):
        llm.chat_json("m", "s" * 100, "u" * 100, kind="lesson")


def test_prompt_log(tmp_path):
    llm.set_prompt_log(tmp_path / "p.jsonl")
    llm.chat_json("m", "SYS", "USR", kind="lesson")
    llm.set_prompt_log(None)
    rec = json.loads((tmp_path / "p.jsonl").read_text().splitlines()[0])
    assert rec["system"] == "SYS" and rec["user"] == "USR"


def test_local_embed_backend_needs_no_key(monkeypatch, tmp_path):
    import llm

    class FakeEmbedder:
        def embed(self, texts):
            return [[float(len(t)), 1.0] for t in texts]

    monkeypatch.setattr(llm, "MOCK", False)
    monkeypatch.setattr(llm, "EMBED_BACKEND", "local")
    monkeypatch.setattr(llm, "CACHE_DIR", tmp_path)
    monkeypatch.setattr(llm, "_local_model", FakeEmbedder())
    monkeypatch.setattr(llm, "_openai", lambda: (_ for _ in ()).throw(AssertionError("called OpenAI")))
    v = llm.embed(["ab", "abcd"])
    assert v.shape == (2, 2) and abs(float((v[0] ** 2).sum()) - 1) < 1e-9
    assert (llm.embed(["ab"]) == v[:1]).all()  # second call comes from the cache
