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


def test_initial_daughters_interleave_mothers(tmp_path):
    mothers = families.load()
    specs = families.initial_specs(mothers, tmp_path, 0, n=3)
    assert [s.family for s in specs] == ["biology", "chemistry", "physics"]
    assert all(Path(s.dataset).exists() and s.instruments for s in specs)
    assert mothers[0].daughters == [specs[0].name]


def test_unusable_spawn_reply_falls_back_to_a_working_lab():
    m = families.load()[0]
    d = families._to_daughter({"name": "Watson!", "instruments": [{"name": ""}, "junk"]}, m, {"watson"})
    assert d.name != "watson" and len(d.instruments) >= 2 and d.seed_queries


def test_pairing_prefers_other_departments(tmp_path):
    w = run_arm.build_world("full", 6, 0, tmp_path, roster="families")
    by = {a.spec.family: [x for x in w.agents if x.spec.family == a.spec.family] for a in w.agents}
    pairs = w._pair(by["biology"][:2] + by["chemistry"][:2])
    assert all(x.spec.family != y.spec.family for x, y in pairs)


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
    spawns = [e for e in evs if e.type == "spawn"]
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
    assert not [e for e in events.read(tmp_path / "events.jsonl") if e.type == "spawn"]
