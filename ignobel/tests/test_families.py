import os
import asyncio
import csv
import json
import filecmp
from pathlib import Path

import events
import families
import run_arm
from conftest import requires_sandbox


def _cfg(**over):
    import config
    return {**config.load(), **over}


def test_mothers_talk_first_then_found_daughters(tmp_path):
    w = run_arm.build_world("full", None, 0, tmp_path, roster="families")
    assert w.agents == []
    asyncio.run(w.round0())
    evs = list(events.read(tmp_path / "events.jsonl"))
    first_spawn = next(i for i, e in enumerate(evs) if e.type == "spawn")
    talks = [e for e in evs[:first_spawn]]
    assert talks and all(e.type == "talk" for e in talks)
    assert {e.agent for e in talks} == {"biology", "chemistry", "physics"}
    spawns = [e for e in evs if e.type == "spawn"]
    assert [e.agent for e in spawns] == ["biology", "chemistry", "physics"] * 2
    assert all(e.payload["reason"] == "founded" for e in spawns)
    names = [a.name for a in w.agents]
    assert len(names) == len(set(names)) == 6
    assert all(a.spec.dataset is None and not a.spec.instruments and a.ideas for a in w.agents)  # no planted data


def test_agents_caps_founded_daughters(tmp_path):
    w = run_arm.build_world("full", 4, 0, tmp_path, roster="families")
    asyncio.run(w.round0())
    assert [a.spec.family for a in w.agents] == ["biology", "chemistry", "physics", "biology"]


def test_unusable_spawn_reply_falls_back_to_a_working_lab():
    m = families.load()[0]
    d = families._to_daughter({"name": "Watson!", "methods": "junk"}, m, {"watson"})
    assert d.name != "watson" and d.seed_queries and d.methods == []
    d = families._to_daughter({"seed_queries": 7, "methods": 1.5, "name": 2}, m, set())
    assert d.seed_queries and d.methods == []
    assert families._to_daughter(["not", "a", "dict"], m, set()).seed_queries


def test_simultaneous_spawns_get_unique_names(tmp_path, monkeypatch):
    w = run_arm.build_world("full", 3, 0, tmp_path, cfg=_cfg(spawn_threshold=0.0), roster="families")
    asyncio.run(w.round0())
    picks = iter(["curiephy", "curie", "curie"])
    real = families._to_daughter
    monkeypatch.setattr(families, "_to_daughter",
                        lambda data, m, taken: real({**data, "name": next(picks)}, m, taken))
    asyncio.run(w._spawn(1, {a.name: 1.0 for a in w.agents}))
    names = [a.name for a in w.agents]
    assert len(names) == len(set(names)) == 6


def test_encounters_are_random_and_cross_any_department(tmp_path):
    w = run_arm.build_world("full", None, 0, tmp_path, roster="families")
    asyncio.run(w.round0())
    everyone = {a.name for a in w.agents}
    same = cross = 0
    seen = set()
    for _ in range(40):
        pairs = w._encounters(w.agents, everyone)
        names = [a.name for p in pairs for a in p]
        assert len(names) == len(set(names)) == 6  # 6 wanderers, 3 meetings, nobody twice
        for x, y in pairs:
            same += x.spec.family == y.spec.family
            cross += x.spec.family != y.spec.family
            seen.add(frozenset((x.name, y.name)))
    assert same and cross and len(seen) > 6
    assert w._encounters(w.agents, set()) == []
    one = w.agents[0].name
    pairs = w._encounters(w.agents, {one})
    assert len(pairs) == 1 and pairs[0][0].name == one


@requires_sandbox
def test_bored_mothers_spawn_daughters_and_resume_matches(tmp_path):
    cfg = _cfg(spawn_threshold=0.0, spawn_cooldown=2, max_daughters=4)

    def run(out, rounds, resume=False):
        w = run_arm.build_world("full", 3, 0, out, cfg=cfg, roster="families")
        if resume:
            assert w.load_state()
        asyncio.run(w.run(rounds))
        return w

    w = run(tmp_path / "a", 3)
    evs = list(events.read(tmp_path / "a" / "events.jsonl"))
    spawns = [e for e in evs if e.type == "spawn" and e.payload["reason"] == "bored"]
    assert {e.agent for e in spawns} == {"biology", "chemistry", "physics"}
    assert {e.round for e in spawns} == {1, 3}  # cooldown 2
    born = {e.payload["daughter"] for e in spawns}
    assert born <= {a.name for a in w.agents} and len(w.agents) == 3 + len(born)
    assert {e.agent for e in evs if e.type == "study_result"} & born  # newborns do research later
    assert all(not (e.agent in born and e.type == "boredom" and e.round == 1) for e in evs)

    run(tmp_path / "b", 2)
    run(tmp_path / "b", 3, resume=True)
    assert filecmp.cmp(tmp_path / "a" / "events.jsonl", tmp_path / "b" / "events.jsonl", shallow=False)


@requires_sandbox
def test_single_arm_never_spawns(tmp_path):
    w = run_arm.build_world("single", None, 0, tmp_path, cfg=_cfg(spawn_threshold=0.0), roster="families")
    asyncio.run(w.run(2))
    assert len(w.agents) == 1
    assert [e.payload["reason"] for e in events.read(tmp_path / "events.jsonl") if e.type == "spawn"] == ["founded"]


def test_daughters_research_real_sources_and_load_a_public_dataset(tmp_path):
    w = run_arm.build_world("full", 2, 0, tmp_path, roster="families")
    asyncio.run(w.round0())
    evs = [e for e in events.read(tmp_path / "events.jsonl") if e.type == "research"]
    assert {e.payload["tool"] for e in evs} >= {"datasets", "load"} and {e.agent for e in evs} == {a.name for a in w.agents}
    log = [json.loads(l) for l in open(tmp_path / "research_log.jsonl")]
    sids = {r["id"] for r in log if r["type"] == "source"}
    for a in w.agents:
        d = a.datasets[0]
        assert d["url"].startswith("https://") and (tmp_path / d["file"]).exists() and d["rows"] == 150
        assert "Real datasets you have loaded" in a.system_prompt() and "petallengthcm" in a.system_prompt()
        assert a.known_sources() and set(a.known_sources()) <= sids
        idea = a.current_idea()
        assert idea.citations and set(idea.citations) <= set(a.known_sources())  # only sources she really has
        assert a.can_run()


def test_made_up_citations_and_leads_are_rejected(tmp_path):
    w = run_arm.build_world("full", 1, 0, tmp_path, roster="families")
    asyncio.run(w.round0())
    a = w.agents[0]
    idea = a._new_idea({"idea": "x", "citations": ["S99999", "Smith et al. 2020"]}, "propose", 1, ["u"])
    assert idea.citations == [] and idea.source_urls == ["u"]
    assert "error" in w._do_step(a, {"tool": "read", "source": "S99999"})
    assert "error" in w._do_step(a, {"tool": "load", "lead": "D9"})
    assert "error" in w._do_step(a, {"tool": "simulate", "query": "make data"})
    assert len(a.datasets) == 1


@requires_sandbox
def test_studies_run_on_the_real_dataset_and_carry_evidence(tmp_path):
    w = run_arm.build_world("full", 2, 0, tmp_path, roster="families")
    asyncio.run(w.run(1))
    studies = [e for e in events.read(tmp_path / "events.jsonl") if e.type == "study_result"]
    assert any(e.payload["ok"] for e in studies)
    for e in studies:
        ev = e.payload["evidence"]
        assert ev["datasets"][0]["url"].startswith("https://huggingface.co/datasets/")
        assert ev["supported"] == (e.payload["ok"] and e.payload["replicated"])
        if not e.payload["ok"]:  # a study that crashed reported nothing to trace
            assert ev["traceable"] == 0.0 and ev["finding"] == []
            continue
        assert ev["read"] == ["d1"] and ev["traceable"] == 1.0
        assert ["d1." + f["column"] for f in ev["finding"]] == [t["column"] for t in ev["trace"].values()]
        assert all(f["dataset"] == ev["datasets"][0]["sha256"] and f["sketch"] for f in ev["finding"])
        assert all(t["column"].startswith("d1.") for t in ev["trace"].values())
        assert "rows(" in e.payload["code"] and "instrument(" not in e.payload["code"]


def test_trace_values_counts_only_reported_values_that_are_dataset_cells(tmp_path):
    import lab
    f = tmp_path / "d1.csv"
    f.write_text("a,b,label\n1.5,10,x\n2.5,20,y\n2.5,30,x\n,40,y\n", encoding="utf-8")
    ds = [("d1", f, ["a", "b", "label"])]
    raw = lab.trace_values({"x": [1.5, 2.5, 2.5], "y": [10.0, 20.0, 30.0]}, ds)
    assert raw == {"share": 1.0, "weakest": 1.0, "arrays": {"x": {"column": "d1.a", "share": 1.0}, "y": {"column": "d1.b", "share": 1.0}}}
    # a cell backs one reported value: 2.5 is in the column twice, not three times
    assert lab.trace_values({"x": [2.5, 2.5, 2.5], "y": [10.0, 20.0, 30.0]}, ds)["arrays"]["x"]["share"] == 0.6667
    derived = lab.trace_values({"x": [10.0, 20.0, 30.0], "y": [15.0, 50.0, 75.0]}, ds)
    assert derived["share"] == 0.5 and derived["arrays"]["y"] == {"column": None, "share": 0.0}
    made_up = lab.trace_values({"group_a": [0.1, 0.2, 0.3], "group_b": [5.1, 5.2, float("nan")]}, ds)
    assert made_up["share"] == 0.0
    lopsided = lab.trace_values({"group_a": [10.0, 20.0, 30.0, 40.0], "group_b": [7.7]}, ds)
    assert lopsided["share"] == 0.8 and lopsided["weakest"] == 0.0
    assert lab.trace_values(None, ds) == {"share": 0.0, "weakest": 0.0, "arrays": {}}


@requires_sandbox
def test_made_up_or_unread_results_are_not_supported(tmp_path):
    import llm
    w = run_arm.build_world("full", 1, 0, tmp_path, roster="families")
    asyncio.run(w.round0())
    a = w.agents[0]
    res = llm.LLMResult(data={}, tokens=0, latency_ms=0, model="mock")
    fake = ("from lab_runtime import report_corr\n"
            "x = [i + 0.123 for i in range(60)]\nreport_corr(x, [2 * v + 0.001 for v in x], '+', 0.9)\n")
    half = ("from lab_runtime import rows, report_corr\n"
            "d = rows('d1', ['sepallengthcm', 'petallengthcm'])\n"
            "y = [r[1] if i < 5 else r[1] * 3.3 + 0.017 for i, r in enumerate(d)]\n"
            "report_corr([r[0] for r in d], y, '+', 0.9)\n")
    real = ("from lab_runtime import rows, report_corr\n"
            "d = rows('d1', ['sepallengthcm', 'petallengthcm'])\n"
            "report_corr([r[0] for r in d], [r[1] for r in d], '+', 0.9)\n")
    # values copied out of a dataset the code never opened do not count either
    cells = [float(r["petallengthcm"]) for r in csv.DictReader(open(tmp_path / a.datasets[0]["file"], encoding="utf-8"))]
    unread = f"from lab_runtime import report_corr\nx = {cells}\nreport_corr(x, x, '+', 0.9)\n"
    for code in (fake, half, real, unread):
        w._run_study(a, {"code": code}, res, 1)
    ev = [e.payload for e in events.read(tmp_path / "events.jsonl") if e.type == "study_result"]
    assert all(p["ok"] and p["replicated"] for p in ev)
    made_up, derived, measured, copied = (p["evidence"] for p in ev)
    assert copied["read"] == [] and copied["traceable"] == 0.0 and not copied["supported"]
    assert made_up["read"] == [] and made_up["traceable"] == 0.0 and not made_up["supported"]
    assert derived["read"] == ["d1"] and derived["traceable"] > 0.5 and not derived["supported"]
    assert measured["traceable"] == 1.0 and measured["supported"]
    assert measured["trace"]["x"]["column"] == "d1.sepallengthcm"


def _daughter(name="onsager"):
    import agents
    from memory import LocalMemory
    a = agents.Agent(agents.AgentSpec(name=name, field="physics", family="physics", seed_queries=[]), LocalMemory(), {})
    a.meter["born"] = 0
    return a


def _study(a, i, ok=True, replicated=True, effect=0.3):
    import agents
    a.studies.append(agents.StudyRecord(study_id=f"s{i}", idea_id=f"i{i}", round=i, ok=ok, replicated=replicated,
                                        predicted=agents.Prediction(direction="+", effect_size=0.3),
                                        actual_effect=effect, actual_direction="+"))


def test_stuck_daughter_is_bored_and_sent_wandering():
    import boredom
    import policy
    a = _daughter()
    for i in range(3):  # the same idea three times, every study failing
        a._new_idea({"idea": "does the bacterial order parameter hesitate"}, "refine", i, [])
        _study(a, i, ok=False, replicated=False)
    comp = boredom.daughter_components(a, 4)
    assert comp["trigger"] == "stuck" and comp["frustration"] == 1.0 and comp["similarity"] > 0.9
    assert comp["B"] > 0.4  # failure no longer cancels repetition (the old formula gave 0.0 here)
    assert boredom.components(a)["B"] == 0.0
    assert policy.boredom_policy(a, comp["B"], None, threshold=0.99) == policy.Action.SNAP


def test_engagement_lowers_boredom_and_cooldown_keeps_her_at_the_bench():
    import boredom
    import policy
    a = _daughter("kaupp")
    for i in range(3):
        a._new_idea({"idea": "does the ball mill scream before the diffractometer"}, "refine", i, [])
    bored = boredom.daughter_components(a, 3)["B"]
    a.meter["fresh"] = 3  # she just loaded a new dataset
    fresh = boredom.daughter_components(a, 3)
    assert fresh["engagement"] == 1.0 and fresh["B"] < bored
    assert boredom.daughter_components(a, 5)["engagement"] == 0.0  # faded after two rounds
    a.meter["snap"] = 4
    assert boredom.daughter_components(a, 5)["trigger"] == "cooldown"
    assert policy.boredom_policy(a, 1.0, None, threshold=0.5) != policy.Action.SNAP


def test_triggers_and_temperament():
    import boredom
    a = _daughter("miller")
    assert boredom.daughter_components(a, 1)["trigger"] is None
    assert boredom.daughter_components(a, 2)["trigger"] == "no_data"
    assert boredom.daughter_components(a, 3)["trigger"] == "stall"
    b = _daughter("aschoff")
    for i in range(2):
        _study(b, i, effect=0.9)  # replicated and far from the predicted 0.3
    assert boredom.daughter_components(b, 2)["trigger"] == "satisfied"
    t1, t2 = boredom.temperament(0, "miller"), boredom.temperament(0, "aschoff")
    assert t1 == boredom.temperament(0, "miller") and t1 != t2
    assert all(abs(t1["weights"][k] - w) <= 0.1 for k, w in boredom.WEIGHTS.items()) and abs(t1["threshold"]) <= 0.1


def test_loading_two_leads_in_one_plan_keeps_their_ids(tmp_path):
    import sources
    w = run_arm.build_world("full", 1, 0, tmp_path, cfg=_cfg(max_datasets=3), roster="families")
    asyncio.run(w.round0())
    a = w.agents[0]
    a.leads = [{**sources.MOCK_LEAD, "id": f"lead{i}", "title": f"lead {i}"} for i in (1, 2, 3)]
    got = [w._do_step(a, {"tool": "load", "lead": d})["dataset"]["id"] for d in ("D1", "D2")]
    assert got == ["lead1", "lead2"]
    assert "error" in w._do_step(a, {"tool": "load", "lead": "D1"})  # already used


def test_unsafe_links_and_bad_cells_are_dropped(tmp_path, monkeypatch):
    import sources
    import trace
    assert "href" not in trace.link("javascript:alert(1)", "x") and "href" in trace.link("https://doi.org/10.1/x", "x")
    assert not sources._allowed("https://evil.example/x")
    try:
        sources._CheckedRedirects().redirect_request(None, None, 302, "", {}, "https://evil.example/x")
        raise AssertionError("redirect to a forbidden host was followed")
    except sources.ResearchError:
        pass
    (tmp_path / "spec.json").write_text(json.dumps({"datasets": {"d": {"file": str(tmp_path / "d.csv"), "columns": ["a", "b"]}}}))
    (tmp_path / "d.csv").write_text("a,b\n1,2\nnan,3\n4,inf\n5,6\n")
    monkeypatch.chdir(tmp_path)
    import importlib
    import lab_runtime
    assert importlib.reload(lab_runtime).rows("d", ["a", "b"]) == [(1.0, 2.0), (5.0, 6.0)]


def _leads_after_meeting(tmp_path, arm):
    w = run_arm.build_world(arm, None, 0, tmp_path / arm, cfg=_cfg(wander_prob=1.0), roster="families")
    asyncio.run(w.round0())
    w.cfg["research_steps"] = 0  # nobody finds data alone in round 1, so a lead can only come from a meeting
    donor = w.agents[0]
    donor.datasets = [{**donor.datasets[0], "id": "shared-x"}]
    for a in w.agents[1:]:
        a.datasets, a.leads = [], []
    asyncio.run(w.round(1))
    return [a.name for a in w.agents[1:] if any(l["id"] == "shared-x" for l in a.leads + a.datasets)]


def test_dataset_leads_pass_between_labs_only_when_exchange_is_on(tmp_path):
    assert len(_leads_after_meeting(tmp_path, "full")) == 1
    assert _leads_after_meeting(tmp_path, "no_exchange") == []


def test_exa_research_rotates_keys_and_dataset_search_mixes_providers(tmp_path, monkeypatch):
    import llm
    import sources
    bib = sources.Bibliography(tmp_path)
    monkeypatch.setenv("EXA_KEYS", "k1, k2")
    monkeypatch.delenv("EXA_API_KEY", raising=False)
    used = []

    def call():
        used.append(os.environ["EXA_API_KEY"])
        if used[-1] == "k1":
            raise RuntimeError("402 out of credit")

    bib._exa(call)  # k1 fails, k2 answers
    bib._exa(call)  # rotation continues: k1 fails again, k2 answers
    assert used == ["k1", "k2", "k1", "k2"]
    monkeypatch.setenv("EXA_KEYS", "k1")
    try:
        bib._exa(call)
        raise AssertionError("an exhausted only key must fail")
    except sources.ResearchError:
        pass

    lead = lambda i: {"id": i, "title": i, "url": "https://zenodo.org/x", "file_url": "https://zenodo.org/f.csv"}
    monkeypatch.setattr(llm, "MOCK", False)
    monkeypatch.setattr(sources, "_zenodo", lambda q, n: [lead(f"z{i}") for i in range(n)])
    monkeypatch.setattr(sources, "_huggingface", lambda q, n: [lead(f"h{i}") for i in range(n)])
    monkeypatch.setattr(sources, "_http", lambda *a, **k: (_ for _ in ()).throw(sources.ResearchError("offline")))
    first = [c["id"] for c in sources.find_datasets("coffee", 3)]
    assert first == ["z0", "h0", "z1"]
    again = [c["id"] for c in sources.find_datasets("coffee", 3, skip=first)]
    assert again == ["h1", "z2", "h2"]  # a repeated search still turns up new leads
    monkeypatch.setattr(llm, "MOCK", True)
    assert sources.find_datasets("iris", 3, skip={sources.MOCK_LEAD["id"]}) == []  # the mock lead is not offered twice


STEP = {"tool": "experiment", "question": "Do wet socks slow a walker?", "protocol": "Walk 20 m in wet and in dry socks.",
        "materials": "socks, water, stopwatch", "design": "two_group", "measure": "walk time", "compare": "wet vs dry",
        "n": 80, "refuted_if": "times do not differ"}


@requires_sandbox
def test_an_experiment_request_is_listed_and_rehearsed_but_is_never_evidence(tmp_path):
    import score
    w = run_arm.build_world("full", 1, 0, tmp_path, roster="families", cfg=_cfg(lab_after_rounds=0))
    asyncio.run(w.round0())
    a = w.agents[0]
    assert "error" in w._do_step(a, {"tool": "experiment", "question": "no protocol"})
    done = w._do_step(a, dict(STEP))
    exp = a.experiments[0]
    assert done["request"]["id"] == exp["id"] and exp["prediction"] == a.current_idea().prediction.model_dump()
    w.log.append(1, a.name, "experiment_request", done["request"])
    held = len(a.datasets)
    asyncio.run(w._bench([a], 1))
    res = [e.payload for e in events.read(tmp_path / "events.jsonl") if e.type == "experiment_result"]
    assert len(res) == 1 and res[0]["provenance"] == "simulated" and res[0]["supported"] is False
    assert res[0]["ok"] and res[0]["traceable"] == 1.0 and res[0]["needed_n"] > 0
    # placeholder numbers never become one of her datasets or one of her studies, and are rehearsed only once
    assert len(a.datasets) == held and not a.studies and exp["status"] == "simulated"
    asyncio.run(w._bench([a], 2))
    assert sum(e.type == "experiment_result" for e in events.read(tmp_path / "events.jsonl")) == 1
    rows = score.score_events(tmp_path / "events.jsonl")
    assert [r["kind"] for r in rows if r["study_id"] == exp["id"]] == ["proposal"]
    assert score.candidate([r for r in rows if r.get("kind") == "proposal"]) is None
    w._do_step(a, dict(STEP))
    assert "error" in w._do_step(a, dict(STEP))  # max_experiments


def test_real_returned_measurements_become_a_dataset_only_with_who_and_when(tmp_path):
    w = run_arm.build_world("full", 1, 0, tmp_path, roster="families", cfg=_cfg(bench="none", lab_after_rounds=0))
    asyncio.run(w.round0())
    a = w.agents[0]
    w._do_step(a, dict(STEP))
    exp, held = a.experiments[0], len(a.datasets)
    asyncio.run(w._bench([a], 1))
    assert exp["status"] == "requested" and len(a.datasets) == held  # bench: none only lists the request
    inbox = tmp_path / "lab_inbox"
    inbox.mkdir()
    rows = "".join(f"{'wet' if i % 2 else 'dry'},{10 + i % 7 + (2 if i % 2 else 0)}.5\n" for i in range(80))
    (inbox / f"{exp['id']}.csv").write_text("Socks,Walk time (s)\n" + rows, encoding="utf-8")
    asyncio.run(w._bench([a], 1))
    assert exp["status"] == "requested" and "performed_by" in exp["error"]  # no note saying who did it
    (inbox / f"{exp['id']}.json").write_text(json.dumps({"performed_by": "M. Lab", "performed_at": "2026-11-20",
                                                         "url": "javascript:alert(1)"}), encoding="utf-8")
    asyncio.run(w._bench([a], 2))
    ds = a.datasets[-1]
    assert exp["status"] == "returned" and ds["name"] == "x1" and ds["provenance"] == "returned" and ds["url"] == ""
    assert [c["name"] for c in ds["columns"]] == ["socks", "walk_time_s"] and ds["rows"] == 80
    res = [e.payload for e in events.read(tmp_path / "events.jsonl") if e.type == "experiment_result"]
    assert [("error" in p, p["provenance"]) for p in res] == [(True, "returned"), (False, "returned")]
    assert res[1]["performed_by"] == "M. Lab" and a.meter["progress"] == 2


def test_simulated_measurements_follow_the_prediction_and_sample_sizes():
    import bench
    import stats
    assert bench.needed_n("two_group", 0.5) == 126 and bench.needed_n("corr", 0.3) == 85
    assert bench.needed_n("corr", 0.0) is None
    req = {**bench.clean_request({**STEP, "n": 400}), "id": "a-x1", "prediction": {"direction": "-", "effect_size": 0.8}}
    out = Path(os.environ.get("TMPDIR", "/tmp")) / "bench_sim_test.csv"
    ds = bench.simulate(req, 0, out)
    assert ds["provenance"] == "simulated" and [c["name"] for c in ds["columns"]] == ["group", "walk_time"]
    cells = list(csv.DictReader(open(out, encoding="utf-8")))
    wet = [float(r["walk_time"]) for r in cells if r["group"] == "wet"]
    dry = [float(r["walk_time"]) for r in cells if r["group"] == "dry"]
    assert len(wet) == len(dry) == 200 and -1.1 < stats.two_group(wet, dry)[0] < -0.5
    assert bench.clean_request({**STEP, "n": "lots", "design": "magic"})["n"] == 60
    odd = bench.simulate({**req, "n": 61}, 0, out)
    assert odd["rows"] == 61


def test_a_salvaged_experiment_step_keeps_its_sample_size():
    import agents
    import bench
    raw = 'experiment{"name":"experiment", question":"Do wet socks slow a walker?", protocol":"Walk 20 m.", "n": 200}}'
    step = agents._steps({"_raw": raw})[0]
    assert step["tool"] == "experiment" and bench.clean_request(step)["n"] == 200


@requires_sandbox
def test_the_bench_only_takes_an_idea_that_survived_five_rounds(tmp_path):
    w = run_arm.build_world("full", 2, 0, tmp_path, roster="families")
    asyncio.run(w.round0())
    a, b = w.agents[0], w.agents[1]
    for x in (a, b):
        w._do_step(x, dict(STEP))
    assert a.experiments[0]["line"] == a.idea_line()[0] == a.ideas[0].idea_id
    a.refine(2)  # a refinement keeps the line alive
    b.propose(3, [])  # b dropped her idea for a new one, so her request's idea did not survive
    for x in (a, b):  # a checkpoint written before requests recorded their line resumes with it worked out
        st = x.to_state()
        del st["experiments"][0]["line"]
        x.load_state(st)
        assert x.experiments[0]["line"] == x.ideas[0].idea_id
    asyncio.run(w._bench([a, b], 4))
    assert [x.experiments[0]["status"] for x in (a, b)] == ["requested", "requested"]
    asyncio.run(w._bench([a, b], 5))
    assert [x.experiments[0]["status"] for x in (a, b)] == ["simulated", "requested"]
    a.propose(6, [])  # she moves on after her experiment got in: a later real return is still taken
    inbox = tmp_path / "lab_inbox"
    inbox.mkdir()
    for x in (a, b):
        rid = x.experiments[0]["id"]
        (inbox / f"{rid}.csv").write_text("group,value\n" + "".join(f"{g},{k}.5\n" for k in range(40) for g in "ab"))
        (inbox / f"{rid}.json").write_text('{"performed_by": "Bench Lab", "performed_at": "2026-11-14"}')
    asyncio.run(w._bench([a, b], 9))
    assert [x.experiments[0]["status"] for x in (a, b)] == ["returned", "requested"]
    done = [e for e in events.read(tmp_path / "events.jsonl") if e.type == "experiment_result"]
    assert [(e.agent, e.round, e.payload["provenance"]) for e in done] == [(a.name, 5, "simulated"), (a.name, 9, "returned")]


def test_sketches_tell_how_much_two_reported_arrays_share():
    import lab
    a = [1.5, 2.5, 2.5, 4.0, "x", None]
    assert lab.common(lab.sketch(a), lab.sketch([4.0, 2.5, 1.5, 2.5])) == 1.0  # order does not matter
    assert lab.common(lab.sketch(a), lab.sketch([1.5, 2.5, 4.0, 9.0])) == 0.6  # 3 of 5 distinct cells
    assert lab.common(lab.sketch(a), lab.sketch([7.0, 8.0])) == 0.0
    assert lab.common([], []) == 0.0
    big = [i * 0.37 for i in range(5000)]
    assert lab.common(lab.sketch(big), lab.sketch(big[::-1])) == 1.0
    assert lab.common(lab.sketch(big), lab.sketch(big[:1600])) < 0.6  # a subset is not the same measurements
    assert lab.common(lab.sketch(big), lab.sketch([v + 0.01 for v in big])) == 0.0


@requires_sandbox
def test_the_first_study_of_a_finding_keeps_it(tmp_path, monkeypatch):
    import llm
    import score
    w = run_arm.build_world("full", 2, 0, tmp_path, roster="families")
    asyncio.run(w.round0())
    a, b = w.agents
    assert a.datasets[0]["sha256"] == b.datasets[0]["sha256"]  # both labs loaded the same public file
    res = llm.LLMResult(data={}, tokens=0, latency_ms=0, model="mock")
    first = ("from lab_runtime import rows, report_corr\n"
             "d = rows('d1', ['sepallengthcm', 'petallengthcm'])\n"
             "report_corr([r[0] for r in d], [r[1] for r in d], '+', 0.9)\n")
    again = ("from lab_runtime import rows, report_corr\n"  # the same measurements, written differently
             "length, petal = zip(*rows('d1', ['petallengthcm', 'sepallengthcm']))\n"
             "report_corr(list(petal), list(length), '+', 0.8)\n")
    other = ("from lab_runtime import rows, report_corr\n"  # same dataset, a different question
             "d = rows('d1', ['sepallengthcm', 'petalwidthcm'])\n"
             "report_corr([r[0] for r in d], [r[1] for r in d], '+', 0.9)\n")
    n = sum(e.type == "study_result" for e in events.read(tmp_path / "events.jsonl"))
    for who, code, r in ((a, first, 1), (b, again, 2), (b, other, 2), (a, first, 3)):
        w._run_study(who, {"code": code}, res, r)
    ids = [e.payload["study_id"] for e in events.read(tmp_path / "events.jsonl") if e.type == "study_result"][n:]
    abstracts = {e.payload["study_id"]: e.payload["abstract"] for e in events.read(tmp_path / "events.jsonl")
                 if e.type == "study_result"}
    rows = {r["study_id"]: {**r, "abstract": abstracts[r["study_id"]]} for r in score.score_events(tmp_path / "events.jsonl")}
    assert all(rows[i]["supported"] for i in ids)
    assert [rows[i].get("preceded_by") for i in ids] == [None, ids[0], None, ids[0]]
    late = {**rows[ids[1]], "score": 10, "rejected": False}
    early = {**rows[ids[0]], "score": 1, "rejected": False}
    assert score.candidate([late, early])["study_id"] == ids[0]  # the later lab cannot take the nomination
    assert score.candidate([late]) is None

    # a write-up the committee rejected does not hold the finding against a later lab
    verdict = score.committee.score_study
    monkeypatch.setattr(score.committee, "score_study", lambda abstract, title, seed=0: {
        **verdict(abstract, title, seed=seed), "rejected": abstract == rows[ids[0]]["abstract"]})
    rows2 = {r["study_id"]: r for r in score.score_events(tmp_path / "events.jsonl")}
    assert [rows2[i].get("preceded_by") for i in ids] == [None, None, None, ids[1]]


def test_the_same_finding_is_the_same_values_from_the_same_file():
    import score
    f = [{"dataset": "abc", "column": "x", "sketch": ["1", "2"]}, {"dataset": "abc", "column": "y", "sketch": ["3"]}]
    assert score.same_finding(f, f[::-1])
    assert not score.same_finding(f, f[:1])
    assert not score.same_finding(f, [{**f[0], "dataset": "other"}, f[1]])  # same numbers, another file
    assert not score.same_finding(f, [f[0], {**f[1], "column": "z"}])  # two columns that hold the same values
    assert not score.same_finding([{**x, "dataset": None} for x in f], [{**x, "dataset": None} for x in f])
    assert not score.same_finding([], [])
    near = [{"dataset": "abc", "column": "x", "sketch": [str(i) for i in range(20)]},  # two groups that are nearly alike
            {"dataset": "abc", "column": "x", "sketch": [str(i) for i in range(1, 21)]}]
    one = [{"dataset": "abc", "column": "x", "sketch": [str(i) for i in range(1, 20)]}, near[1]]
    assert score.same_finding(near, one) and score.same_finding(near[::-1], one) and score.same_finding(one, near[::-1])


def test_a_meeting_tells_two_labs_what_they_have_in_common(tmp_path, monkeypatch):
    import agents
    w = run_arm.build_world("full", 2, 0, tmp_path, cfg=_cfg(wander_prob=1.0), roster="families")
    asyncio.run(w.round0())
    a, b = w.agents
    assert w._overlap(a, b) == {"datasets": [a.datasets[0]["title"]]}  # both loaded the same public file
    b.datasets = [{**b.datasets[0], "sha256": "another", "url": "https://example.org/other", "title": "Other"}]
    assert w._overlap(a, b) == {}  # different ideas, different data: nothing to say
    b.datasets = [{**b.datasets[0], "url": a.datasets[0]["url"]}]  # another file of the same deposit
    assert w._overlap(a, b) == {"datasets": ["Other"]}
    b.ideas[-1].embedding = list(a.ideas[-1].embedding)
    assert w._overlap(b, a) == {"idea_similarity": 1.0, "datasets": [a.datasets[0]["title"]]}

    told = []
    talk = agents.Agent.talk
    monkeypatch.setattr(agents.Agent, "talk", lambda self, other, field, history, overlap="":
                        told.append((self.name, overlap)) or talk(self, other, field, history, overlap))
    before = [(x.current_idea().idea_id, len(x.datasets)) for x in (a, b)]
    w.cfg["research_steps"] = 0
    asyncio.run(w.round(1))
    assert {n for n, _ in told} == {a.name, b.name}
    for name, note in told:  # each is told about the other; nothing tells her what to do about it
        assert "almost the same idea" in note and "both use the dataset" in note
        assert a.name in note and b.name in note and a.ideas[0].title in note
    talks = [e.payload for e in events.read(tmp_path / "events.jsonl") if e.type == "talk" and e.round == 1]
    assert talks[0]["overlap"]["idea_similarity"] == 1.0 and talks[0]["overlap"]["datasets"]
    assert all("overlap" not in t for t in talks[1:])
    for x in (a, b):
        assert any("At a chance meeting" in it.text for it in x.memory.items)
    assert [len(x.datasets) for x in (a, b)] == [n for _, n in before]  # nobody's data was taken away


def test_without_exchange_a_meeting_reveals_nothing(tmp_path):
    w = run_arm.build_world("no_exchange", 2, 0, tmp_path, cfg=_cfg(wander_prob=1.0), roster="families")
    asyncio.run(w.round0())
    assert not w.exchange
    w.cfg["research_steps"] = 0
    asyncio.run(w.round(1))
    talks = [e.payload for e in events.read(tmp_path / "events.jsonl") if e.type == "talk" and e.round == 1]
    assert talks and all("overlap" not in t for t in talks)


def test_a_mother_sees_every_departments_labs_when_she_founds_one(tmp_path, monkeypatch):
    import llm
    prompts = []
    chat = llm.chat_json
    monkeypatch.setattr(llm, "chat_json", lambda model, system, user, **kw:
                        prompts.append((kw["kind"], system, user)) or chat(model, system, user, **kw))
    w = run_arm.build_world("full", None, 0, tmp_path, cfg=_cfg(spawn_threshold=0.0), roster="families")
    asyncio.run(w.round0())
    founding = [u for k, _, u in prompts if k == "spawn"]
    assert len(founding) == 6 and "Labs the other departments already have" not in founding[0]  # nobody yet
    fields = {m.name: [w.by_name[d] for d in m.daughters] for m in w.mothers}
    last = founding[-1]  # physics, founding her second lab, sees biology's and chemistry's two each
    for dept in ("biology", "chemistry"):
        for lab_ in fields[dept]:
            assert f"- {dept}: {lab_.name} ({lab_.spec.field})" in last
    assert "a subfield of " in last and "of your choosing" in last  # the field is still hers to pick

    prompts.clear()
    asyncio.run(w._spawn(1, {a.name: 1.0 for a in w.agents}))
    bored = [u for k, _, u in prompts if k == "spawn"]
    assert len(bored) == 3
    for m, u in zip(w.mothers, bored):
        others = [x for x in w.mothers if x is not m]
        assert all(f"- {x.name}: {w.by_name[x.daughters[0]].name} (" in u for x in others)
        assert f"- {m.name}: " not in u  # her own labs are listed with their ideas, not here
