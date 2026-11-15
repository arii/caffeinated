import asyncio
import filecmp
import json
from pathlib import Path

import pytest

import events
import run_arm


def _run(tmp_path, arm="full", rounds=4, seed=0, agents=4, resume=False, out=None):
    out = Path(out or tmp_path / f"{arm}-{seed}")
    world = run_arm.build_world(arm, agents, seed, out)
    if resume:
        assert world.load_state()
    asyncio.run(world.run(rounds))
    return out / "events.jsonl"


def test_full_arm_emits_every_event_type(tmp_path):
    path = _run(tmp_path, rounds=4)
    types = {e.type for e in events.read(path)}
    assert types == events.EVENT_TYPES, f"missing {events.EVENT_TYPES - types}"


def test_same_seed_same_file(tmp_path):
    a = _run(tmp_path, out=tmp_path / "a")
    b = _run(tmp_path, out=tmp_path / "b")
    assert filecmp.cmp(a, b, shallow=False)


def test_different_seed_different_file(tmp_path):
    a = _run(tmp_path, arm="random_snap", seed=0, out=tmp_path / "a")
    b = _run(tmp_path, arm="random_snap", seed=1, out=tmp_path / "b")
    assert not filecmp.cmp(a, b, shallow=False)


def test_resume_matches_uninterrupted_run(tmp_path):
    full = _run(tmp_path, rounds=3, out=tmp_path / "full")
    part = _run(tmp_path, rounds=1, out=tmp_path / "part")
    _run(tmp_path, rounds=3, resume=True, out=tmp_path / "part")
    assert filecmp.cmp(full, part, shallow=False)


@pytest.mark.parametrize("arm", ["random_snap", "single", "shared_memory", "no_exchange"])
def test_other_arms_run(tmp_path, arm):
    path = _run(tmp_path, arm=arm, rounds=2)
    evs = list(events.read(path))
    assert evs and all(e.arm == arm for e in evs)
    if arm == "single":
        assert {e.agent for e in evs} == {"quill"}
    if arm in ("shared_memory", "no_exchange", "single"):
        assert not any(e.type == "share" for e in evs)


def test_every_event_has_fixed_keys_and_search_events_have_urls(tmp_path):
    path = _run(tmp_path, rounds=3)
    for line in path.read_text().splitlines():
        d = json.loads(line)
        assert set(d) == {"round", "arm", "seed", "agent", "type", "payload", "tokens", "latency_ms"}
        if d["type"] == "seed":
            assert all(s["url"] for s in d["payload"]["sources"])
        if d["type"] == "snap":
            assert d["payload"]["source"]["url"]
        if d["type"] == "study_result":
            assert d["payload"]["novelty"]["sources"] and d["payload"]["novelty"]["sources"][0]["url"]


def test_resume_drops_events_from_a_half_finished_round(tmp_path):
    """A crash after some round-2 events were logged must not leave duplicates after --resume."""
    full = _run(tmp_path, rounds=3, out=tmp_path / "full")
    part = _run(tmp_path, rounds=1, out=tmp_path / "part")
    with open(part, "a") as f:  # pretend round 2 got this far and then died
        f.write(json.dumps({"round": 2, "arm": "full", "seed": 0, "agent": "quill", "type": "boredom",
                            "payload": {"B": 0.0}, "tokens": 0, "latency_ms": 0}) + "\n")
    _run(tmp_path, rounds=3, resume=True, out=tmp_path / "part")
    assert filecmp.cmp(full, part, shallow=False)
    assert not (tmp_path / "part" / "state.json.tmp").exists()
