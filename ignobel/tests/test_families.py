import asyncio
import csv
import filecmp
from pathlib import Path

import numpy as np

import events
import families
import run_arm
from conftest import requires_sandbox


def _cfg(**over):
    import config
    return {**config.load(), **over}


def test_dataset_follows_recipe_and_is_deterministic(tmp_path):
    cols = [families.Column(name="x", mean=10, sd=2),
            families.Column(name="y", mean=0, sd=1, depends_on={"x": 0.8}),
            families.Column(name="z", mean=5, sd=1, depends_on={"nope": 0.9})]
    families.make_dataset(cols, tmp_path / "a.csv", "s", rows=400)
    families.make_dataset(cols, tmp_path / "b.csv", "s", rows=400)
    assert filecmp.cmp(tmp_path / "a.csv", tmp_path / "b.csv", shallow=False)
    rows = list(csv.DictReader(open(tmp_path / "a.csv")))
    x, y, z = (np.array([float(r[k]) for r in rows]) for k in "xyz")
    assert abs(x.mean() - 10) < 0.5 and np.corrcoef(x, y)[0, 1] > 0.6 and abs(np.corrcoef(x, z)[0, 1]) < 0.2


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
    assert all(Path(a.spec.dataset).exists() and a.spec.instruments and a.ideas for a in w.agents)


def test_agents_caps_founded_daughters(tmp_path):
    w = run_arm.build_world("full", 4, 0, tmp_path, roster="families")
    asyncio.run(w.round0())
    assert [a.spec.family for a in w.agents] == ["biology", "chemistry", "physics", "biology"]


def test_unusable_spawn_reply_falls_back_to_a_working_lab():
    m = families.load()[0]
    d = families._to_daughter({"name": "Watson!", "instruments": [{"name": ""}, "junk"]}, m, {"watson"})
    assert d.name != "watson" and len(d.instruments) >= 2 and d.seed_queries
    d = families._to_daughter({"instruments": 3, "seed_queries": 7, "methods": 1.5, "name": 2}, m, set())
    assert len(d.instruments) == 3 and d.seed_queries and d.methods == []
    assert families._to_daughter(["not", "a", "dict"], m, set()).instruments


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
    assert len({a.spec.dataset for a in w.agents}) == 6


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
