"""The ignobel meter end to end: Exa novelty on ideas, yoked control, descriptors and the shared meter."""
import asyncio
import collections
import json

import pytest

import agents
import events
import llm
import meter_adapter
import meter_profile
import run_arm


def _run(out, arm="full", rounds=8, seed=0, yoke_from=None):
    world = run_arm.build_world(arm, 4, seed, out, yoke_from=yoke_from)
    asyncio.run(world.run(rounds))
    return out / "events.jsonl"


@pytest.fixture(scope="module")
def full_runs(tmp_path_factory):
    root = tmp_path_factory.mktemp("meter")
    return {s: _run(root / f"full-s{s}", seed=s) for s in (0, 1)}


def _snaps_per_round(path):
    return collections.Counter(e.round for e in events.read(path) if e.type == "snap")


def test_ideas_carry_exa_novelty_and_B_uses_it(full_runs):
    evs = list(events.read(full_runs[0]))
    ideas = [e for e in evs if e.type == "idea"]
    assert ideas and all(0.0 <= e.payload["novelty"] <= 1.0 for e in ideas)
    bor = [e.payload for e in evs if e.type == "boredom"]
    assert {"B", "self_repeat", "ext_familiar", "unsurprise", "stall", "frustration", "regime", "action"} <= set(bor[0])
    w = meter_profile.agent_meter()["weights"]
    for p in bor:
        assert p["B"] == pytest.approx(min(1.0, sum(w[k] * p[k] for k in w)), abs=2e-3)


@pytest.mark.parametrize("seed", [0, 1])
def test_yoked_control_snaps_as_often_as_full(full_runs, tmp_path, seed):
    yoked = _run(tmp_path / f"yoked_random-s{seed}", arm="yoked_random", seed=seed, yoke_from=full_runs[seed])
    assert _snaps_per_round(yoked) == _snaps_per_round(full_runs[seed])
    assert sum(_snaps_per_round(yoked).values()) > 0
    regimes = {e.payload["regime"] for e in events.read(yoked) if e.type == "boredom"}
    assert regimes <= {"EXPLOIT", "YOKED_SNAP"}


def test_yoked_control_default_path_and_errors(full_runs, tmp_path):
    with pytest.raises(FileNotFoundError):
        run_arm.build_world("yoked_random", 4, 0, tmp_path / "yoked_random-s0")
    with pytest.raises(ValueError):
        run_arm.build_world("yoked_random", 4, 1, tmp_path / "y", yoke_from=full_runs[0])  # wrong seed
    w = run_arm.build_world("yoked_random", 4, 0, full_runs[0].parent.parent / "yoked_random-s0")
    assert w.yoke == dict(_snaps_per_round(full_runs[0]))


def test_breakout_idea_is_cross_field_and_uses_another_lab(full_runs):
    evs = list(events.read(full_runs[0]))
    br = [e for e in evs if e.type == "snap" and e.payload["kind"] == "breakout"]
    assert br, "seed 0 should reach PARADIGM_BREAKOUT in mock mode"
    agent = br[0].agent
    idea = next(e for e in evs if e.type == "idea" and e.agent == agent and e.round == br[0].round)
    assert idea.payload["cross_field"] and idea.payload["descriptor"]["method"] == meter_profile.CROSS_FIELD
    spec = next(s for s in agents.load_specs() if s.name == agent)
    assert idea.payload["method"] not in spec.methods
    assert any(e.type == "measurement_request" and e.payload.get("requester") == agent and e.agent != agent
               for e in evs if e.round > br[0].round)


def test_every_idea_descriptor_validates_against_profile(full_runs):
    meter = meter_profile.shared_meter()
    prof = meter.load_profile(meter_profile.DEFAULT_PROFILE)
    ideas = [e for e in events.read(full_runs[0]) if e.type == "idea"]
    for e in ideas:
        d = e.payload["descriptor"]
        assert set(d) == {"mechanism", "method", "params", "partner"}
        meter.validate_descriptor(prof, d)
    snap_ideas = [e for e in ideas if e.payload["kind"] == "propose" and e.round > 0]
    assert snap_ideas and all(e.payload["partner"] for e in snap_ideas)
    with pytest.raises(ValueError):
        meter.validate_descriptor(prof, {"mechanism": "astrology", "method": "none"})


def test_profile_vocab_covers_every_agent():
    prof = meter_profile.load()
    am = prof["agent_meter"]
    for spec in agents.load_specs():
        for inst in spec.instruments:
            assert all(inst.name in methods for methods in prof["vocab"].values()), inst.name
        for m in spec.methods:
            assert am["method_family"][m] in prof["vocab"], m
    assert set(am["family_keywords"]) <= set(prof["vocab"]) and am["default_family"] in prof["vocab"]
    assert set(am["weights"]) == {"self_repeat", "ext_familiar", "unsurprise", "stall"}


def test_shared_meter_runs_on_ignobel_events(full_runs, capsys):
    meter = meter_profile.shared_meter()
    prof = meter.load_profile(meter_profile.DEFAULT_PROFILE)
    led = meter_adapter.ledger(full_runs[0])
    studies = [e for e in events.read(full_runs[0]) if e.type == "study_result"]
    assert len(led) == len(studies) > 0
    assert {e["status"] for e in led} <= {"keep", "crash", "not_replicated"}
    trace = meter.fold(prof, led)
    assert len(trace) == len(led)
    st = meter.status(prof, led, "quill")
    assert st["regime"] in meter.REGIMES and 0.0 <= st["B"] <= 1.0
    g = meter.gate(prof, led, {"mechanism": "theoretical", "method": "cross-field", "params": {}})
    assert set(g) >= {"pass", "regime", "reasons"}
    assert meter_adapter.main([str(full_runs[0]), "status", "--agent", "ikeda"]) == 0
    assert json.loads(capsys.readouterr().out)["scope"] == "ikeda"


def test_meter_stays_private(tmp_path):
    """No meter value, component name or regime reaches any agent prompt."""
    out = tmp_path / "run"
    out.mkdir()
    llm.set_prompt_log(out / "prompts.jsonl")
    try:
        _run(out, rounds=8)
    finally:
        llm.set_prompt_log(None)
    for line in (out / "prompts.jsonl").read_text().splitlines():
        rec = json.loads(line)
        text = (rec.get("system", "") + rec["user"]).lower()
        for word in ("self_repeat", "ext_familiar", "unsurprise", "frustration", "regime", "jitter", "b="):
            assert word not in text, word
