import agents
import memory
from memory import Item, LocalMemory, SharedMemory, PastDevMemory, share


def _fill(mem, who, texts, kind="library"):
    for i, t in enumerate(texts):
        mem.write(Item(id=f"{who}-{i}", kind=kind, text=t, source_agent=who))


def test_local_search_ranks_exact_match_first():
    m = LocalMemory()
    _fill(m, "a", ["toast falls butter side down", "birds sing louder in traffic", "coffee and mood"])
    top = m.search("toast falls butter side down", 2)
    assert top[0].text == "toast falls butter side down" and len(top) == 2


def test_share_caps_at_three_and_tags_source():
    s, r = LocalMemory(), LocalMemory()
    _fill(s, "s", [f"finding number {i} about toast" for i in range(6)])
    out = share("s", s, "r", r, topic="toast")
    assert len(out["offered"]) == 3 and len(out["kept"]) == 3
    assert all(it.source_agent == "s" and it.meta["shared_from"] == "s" for it in r.items)


def test_share_skips_duplicates_receiver_already_has():
    s, r = LocalMemory(), LocalMemory()
    _fill(s, "s", ["alpha fact", "beta fact"])
    _fill(r, "r", ["alpha fact"])
    out = share("s", s, "r", r, topic="fact")
    kept_texts = {it.text for it in r.items if it.source_agent == "s"}
    assert kept_texts == {"beta fact"} and len(out["kept"]) == 1


def test_shared_memory_is_one_store():
    shared = SharedMemory()
    a = memory.make_memory("shared", "a", shared)
    b = memory.make_memory("shared", "b", shared)
    a.write(Item(id="x", kind="idea", text="hello", source_agent="a"))
    assert b.search("hello", 1)[0].source_agent == "a"


class _FakePast:
    """Stands in for the past.dev API: audiences decide who reads which ingested data point."""

    def __init__(self):
        self.calls, self.points, self.members = [], {}, {}

    def __call__(self, method, path, body=None, key=None):
        self.calls.append((method, path, body))
        if path.startswith("/audiences/"):
            self.members[path.split("/")[-1]] = {(c["trait"], c["values"][0]) for c in body["rule"]["conditions"]}
        elif path.startswith("/identities/"):
            self.members.setdefault("traits", {})[path.split("/")[-1]] = set(body["traits"].items())
        elif path == "/ingest":
            self.points[body["id"]] = body
            return {"ingestionId": "i-" + body["id"], "status": "queued"}
        elif path.startswith("/ingest/"):
            return {"status": "completed"}
        elif path == "/recall":
            traits = self.members["traits"].get(body["identity"], set())
            hits = [p for p in self.points.values() if self.members.get(p["audience"], set()) & traits]
            return {"results": [{"content": p["content"], "sources": [{"sourceId": p["id"]}]} for p in hits]}
        return {}


def _past_run(monkeypatch, tmp_path):
    fake = _FakePast()
    monkeypatch.setattr(memory, "_api", fake)
    return fake, memory.PastDevRun("t", tmp_path, api_key="k")


def test_pastdev_labs_are_independent_until_share(monkeypatch, tmp_path):
    fake, run = _past_run(monkeypatch, tmp_path)
    s, r = PastDevMemory("s", run), PastDevMemory("r", run)
    s.write(Item(id="s-i1", kind="idea", text="toast lands butter side down", source_agent="s"))
    run.flush()
    assert not [it for it in r.search("toast", 3) if it.text == "toast lands butter side down"]
    out = share("s", s, "r", r, topic="toast")
    run.flush()
    assert out["kept"]
    assert fake.points["fam-t-" + r.items[-1].id]["audience"] == "fam-t-inbox-r"
    assert fake.points["fam-t-" + r.items[-1].id]["identity"] == "fam-t-s"
    assert [it.source_agent for it in r.search("toast", 3)] == ["s"]
    outsider = run.recall("outsider", "toast", 3)
    assert outsider == []


def test_pastdev_hypothesis_keeps_one_local_version_and_papers_stay_local(monkeypatch, tmp_path):
    fake, run = _past_run(monkeypatch, tmp_path)
    m = PastDevMemory("a", run)
    m.write(Item(id="a-h", kind="hypothesis", text="Status: proposed", source_agent="a"))
    m.write(Item(id="a-h", kind="hypothesis", text="Status: replicated", source_agent="a"))
    m.write(Item(id="a-p", kind="library", text="a paper", source_agent="a"))
    run.flush()
    assert [it.text for it in m.items if it.id == "a-h"] == ["Status: replicated"]
    assert set(fake.points) == {"fam-t-a-h"}
    assert fake.points["fam-t-a-h"]["content"] == "Status: replicated"


def test_load_specs_and_statistician():
    specs = agents.load_specs(n=4)
    assert [s.name for s in specs] == ["quill", "oyelaran", "ikeda", "volkov"]
    assert specs[3].is_statistician and not specs[0].is_statistician


def test_agent_prompt_states_goal_once_and_prize_flag():
    spec = agents.load_specs(n=1)[0]
    a = agents.Agent(spec, LocalMemory(), {"tell_prize": True})
    assert a.system_prompt().count("laugh, then think") == 1 and "prize" in a.system_prompt()
    b = agents.Agent(spec, LocalMemory(), {"tell_prize": False})
    assert "prize" not in b.system_prompt()


def test_agent_methods_return_valid_shapes():
    spec = agents.load_specs(n=1)[0]
    a = agents.Agent(spec, LocalMemory(), {"tell_prize": True})
    idea, res = a.propose(0, [])
    assert idea.prediction.direction in "+-" and idea.embedding and res.tokens > 0
    idea2, _ = a.refine(1)
    assert idea2.idea_id != idea.idea_id and a.current_idea() is idea2
    text, _ = a.talk("ikeda", "food physics", [])
    assert text
    code, _ = a.write_study_code(peers=[])
    assert "lab_runtime" in code["code"] and code["requests"] == []
    lesson, _ = a.write_lesson(1, "ran one study")
    assert a.lessons == lesson and "lessons" in a.system_prompt()
    st = a.to_state()
    b = agents.Agent(spec, LocalMemory(), {})
    b.load_state(st)
    assert b.current_idea().idea_id == idea2.idea_id
