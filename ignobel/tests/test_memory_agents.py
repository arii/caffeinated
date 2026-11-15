import agents
import memory
from memory import Item, LocalMemory, PastDevMemory, SharedMemory, share


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


def test_new_idea_unwraps_nested_fields_and_never_uses_untitled():
    spec = agents.AgentSpec(name="biology4", field="biology", family="biology", seed_queries=[])
    a = agents.Agent(spec, LocalMemory(), {})
    question = "Can a protein's predicted confidence reveal a silly pattern?"
    idea = a._new_idea({"study": {"question": question, "null_hypothesis": "There is no pattern."}},
                       "propose", 4, [])
    assert idea.idea_id == "biology4-i1"
    assert idea.title == question[:60] and idea.text == question
    assert idea.hypothesis == "There is no pattern."

    idea = a._new_idea({"title": "untitled idea", "idea": "untitled",
                        "hypothesis": "Protein confidence varies by residue."}, "refine", 5, [])
    assert idea.title == "Protein confidence varies by residue."
    idea = a._new_idea({"response": {"study": {}}}, "refine", 6, [])
    assert idea.idea_id == "biology4-i3" and idea.title == "biology4 idea 3"
    assert all("untitled" not in item.title.casefold() for item in a.ideas)


def test_hypothesis_statuses_have_distinct_private_pastdev_ids(monkeypatch, tmp_path):
    import world as world_mod

    fake, run = _past_run(monkeypatch, tmp_path)
    spec = agents.AgentSpec(name="fleming", field="biology", family="biology", seed_queries=[])
    a = agents.Agent(spec, PastDevMemory("fleming", run), {})
    idea = a._new_idea({"title": "A residue-level confidence test", "idea": "A hypothesis about pLDDT."},
                       "propose", 0, [])
    world = world_mod.World.__new__(world_mod.World)
    world.pastdev = run
    world.status_counts = {}
    world._hypothesis(a, idea, 0, "proposed, not tested yet")
    world._hypothesis(a, idea, 1, "testing")
    run.flush()

    assert world.status_counts == {idea.idea_id: 2}
    assert f"fam-t-{idea.idea_id}-hyp" in fake.points
    assert fake.points[f"fam-t-{idea.idea_id}-hyp"]["content"].startswith(
        f"Hypothesis {idea.idea_id} (lab fleming): A residue-level confidence test.")
    for number, status in ((1, "proposed, not tested yet"), (2, "testing")):
        point = fake.points[f"fam-t-{idea.idea_id}-status-{number}"]
        assert point["metadata"]["kind"] == "status"
        assert point["metadata"]["idea_id"] == idea.idea_id
        assert point["metadata"]["round"] == number - 1
        assert point["metadata"]["status"] == status
        assert point["identity"] == "fam-t-fleming"
        assert point["audience"] == "fam-t-private-fleming"
        assert point["timestamp"]


def test_recall_forwards_occurrence_window_and_sort(monkeypatch, tmp_path):
    fake, run = _past_run(monkeypatch, tmp_path)
    run.recall("lab", "status history", 10, at="2025-01-01T00:00:00Z",
               occurred_from="2024-01-01T00:00:00Z", occurred_to="2024-01-02T00:00:00Z",
               sort="chronological")
    body = next(call[2] for call in fake.calls if call[1] == "/recall")
    assert body == {
        "query": "status history", "identity": "fam-t-lab", "limit": 10,
        "queryTimestamp": "2025-01-01T00:00:00Z",
        "occurredFrom": "2024-01-01T00:00:00Z",
        "occurredTo": "2024-01-02T00:00:00Z",
        "sort": "chronological",
    }


def test_status_counts_survive_world_state_resume(tmp_path):
    import run_arm

    out = tmp_path / "status-state"
    world = run_arm.build_world("full", 1, 0, out, roster="flat")
    world.log.append(0, "quill", "idea", {})
    world.status_counts = {"quill-i1": 2}
    world.save_state()

    resumed = run_arm.build_world("full", 1, 0, out, roster="flat")
    assert resumed.load_state()
    assert resumed.status_counts == {"quill-i1": 2}


def test_truncated_proposal_retries_with_double_budget_and_uses_second_title(monkeypatch):
    import numpy as np

    spec = agents.load_specs(n=1)[0]
    a = agents.Agent(spec, LocalMemory(), {})
    responses = [
        agents.llm.LLMResult(data={"_truncated": True}, tokens=7, latency_ms=2, model="fake"),
        agents.llm.LLMResult(
            data={"title": "Recovered title", "idea": "A complete idea.",
                  "hypothesis": "A complete hypothesis."},
            tokens=11, latency_ms=3, model="fake",
        ),
    ]
    calls = []

    def fake_chat(model, system, user, **kwargs):
        calls.append((kwargs["kind"], kwargs["max_tokens"]))
        return responses.pop(0)

    monkeypatch.setattr(agents.llm, "chat_json", fake_chat)
    monkeypatch.setattr(agents.llm, "embed", lambda texts: [np.zeros(64) for _ in texts])

    idea, result = a.propose(0, [])
    assert idea.title == "Recovered title"
    assert calls == [("propose", 900), ("propose", 1800)]
    assert result.tokens == 18 and result.latency_ms == 5
