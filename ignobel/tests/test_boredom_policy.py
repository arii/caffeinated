import random

import pytest

import agents
import boredom
import meter_profile
import policy
from agents import Agent, Idea, Prediction, StudyRecord
from memory import LocalMemory
from policy import Action

PROF = meter_profile.agent_meter()
TH = PROF["thresholds"]


def _agent(name="quill"):
    spec = next(s for s in agents.load_specs() if s.name == name)
    return Agent(spec, LocalMemory(), {})


def _idea(a, text, direction="+", eff=0.5, run=False, novelty=None, method=""):
    import llm
    idea = Idea(idea_id=f"{a.name}-i{len(a.ideas) + 1}", round=0, kind="propose", title=text, text=text,
                method=method, prediction=Prediction(direction=direction, effect_size=eff), run=run,
                embedding=llm.embed([text])[0].tolist(), novelty=novelty)
    idea.descriptor = meter_profile.describe(idea, a.spec)
    a.ideas.append(idea)
    return idea


def _study(a, idea, ok=True, replicated=True, actual=0.5, direction="+", round=1):
    a.studies.append(StudyRecord(study_id=f"s{len(a.studies)}", idea_id=idea.idea_id, round=round, ok=ok,
                                 replicated=replicated, predicted=idea.prediction,
                                 actual_effect=actual if ok else None,
                                 actual_direction=direction if ok else None))


def _comp(B=0.0, frustration=0.0, stall=0.0, ext_familiar=1.0):
    return {"B": B, "frustration": frustration, "stall": stall, "ext_familiar": ext_familiar}


def test_empty_agent_scores_zero():
    assert boredom.score(_agent()) == 0.0


def test_identical_ideas_push_self_repeat_to_one():
    a = _agent()
    for _ in range(3):
        _idea(a, "same idea again")
    assert boredom.similarity(a) == pytest.approx(1.0)
    a.meter.update(base_mu=0.2, base_sd=0.2)
    assert boredom.self_repeat(a) == pytest.approx(1.0)
    assert boredom.components(a)["B"] == pytest.approx(PROF["weights"]["self_repeat"])


def test_self_repeat_is_relative_to_round0_baseline():
    """Similarity at the field's own baseline level is not repetition."""
    a = _agent()
    for _ in range(2):
        _idea(a, "same idea again")
    a.meter.update(base_mu=1.0, base_sd=0.1)
    assert boredom.self_repeat(a) == 0.0


def test_baseline_uses_library_items_only():
    from memory import Item
    a = _agent()
    _idea(a, "idea zero")
    a.memory.write(Item(id="l1", kind="library", text="coffee field study", source_agent="quill"))
    a.memory.write(Item(id="l2", kind="library", text="weekday nudges", source_agent="quill"))
    a.memory.write(Item(id="i1", kind="idea", text="idea zero", source_agent="quill"))
    boredom.set_baseline(a)
    assert a.meter["base_mu"] < 0.99 and a.meter["base_sd"] > 0


def test_unsurprise_counts_only_replicated_studies():
    a = _agent()
    i = _idea(a, "x", eff=0.5)
    _study(a, i, replicated=False, actual=0.5)
    assert boredom.unsurprise(a) == 0.0
    _study(a, i, replicated=True, actual=0.5)
    assert boredom.unsurprise(a) == pytest.approx(1.0)


def test_gap_direction_mismatch_is_total():
    p = Prediction(direction="+", effect_size=0.4)
    assert boredom.gap(p, 0.4, "-") == 1.0
    assert boredom.gap(p, 0.4, "+") == 0.0
    assert 0 < boredom.gap(p, 0.2, "+") < 1


# --- 1. external novelty (Exa) -------------------------------------------------------------
def test_ext_familiar_is_one_minus_exa_novelty_and_feeds_B():
    a = _agent()
    _idea(a, "an idea the literature already has", novelty=0.2)
    assert boredom.ext_familiar(a) == pytest.approx(0.8)
    assert boredom.components(a)["B"] == pytest.approx(PROF["weights"]["ext_familiar"] * 0.8, abs=1e-4)
    _idea(a, "a novel idea", novelty=1.0)
    assert boredom.ext_familiar(a) == 0.0


# --- 2. stagnation ------------------------------------------------------------------------------
def test_stall_grows_without_progress_and_resets_on_surprise():
    a = _agent()
    pat = PROF["patience"]
    assert boredom.stall(a, 1) == pytest.approx(1 / pat)
    assert boredom.stall(a, pat + 2) == 1.0
    i = _idea(a, "x", eff=0.5)
    _study(a, i, replicated=True, actual=0.5, round=2)          # first result in a new cell = progress
    assert boredom.last_progress_round(a) == 2
    _study(a, i, replicated=True, actual=0.5, round=3)          # same cell, unsurprising: no progress
    assert boredom.last_progress_round(a) == 2
    _study(a, i, replicated=False, actual=0.1, round=4)         # not replicated: never progress
    assert boredom.last_progress_round(a) == 2
    _study(a, i, replicated=True, actual=0.5, direction="-", round=5)  # surprising (gap 1)
    assert boredom.last_progress_round(a) == 5
    assert boredom.stall(a, 5) == 0.0


# --- 3. frustration out of B --------------------------------------------------------------------
def test_frustration_does_not_lower_B():
    calm, failing = _agent(), _agent()
    for a in (calm, failing):
        a.meter.update(base_mu=0.2, base_sd=0.2)
        for _ in range(3):
            _idea(a, "same idea again", novelty=0.3)
    i = failing.ideas[-1]
    for _ in range(4):
        _study(failing, i, ok=False, replicated=False, round=1)
    c_calm, c_fail = boredom.components(calm, 3), boredom.components(failing, 3)
    assert c_fail["frustration"] == 1.0 and c_calm["frustration"] == 0.0
    assert c_fail["B"] >= c_calm["B"] > 0.5
    assert "failure" not in c_fail


def test_frustrated_regime_reviews_then_runs():
    a = _agent()
    i = _idea(a, "x")
    for _ in range(3):
        _study(a, i, ok=False, replicated=False)
    _idea(a, "x, redesigned")
    assert policy.decide(a, _comp(B=0.9, frustration=1.0), 3) == ("FRUSTRATED", Action.REVIEW)
    assert policy.decide(a, _comp(B=0.9, frustration=1.0), 4) == ("FRUSTRATED", Action.RUN_STUDY)
    _study(a, a.ideas[-1], ok=False, replicated=False)
    assert policy.decide(a, _comp(B=0.9, frustration=1.0), 5) == ("FRUSTRATED", Action.REVIEW)


# --- 4. regimes, hysteresis, cooldown, jitter ---------------------------------------------------
def test_snap_needs_consecutive_rounds_above_threshold():
    a = _agent()
    _idea(a, "fresh")
    hi, lo = _comp(B=0.95), _comp(B=0.1)
    assert TH["snap_rounds"] == 2
    assert policy.decide(a, hi, 1) == ("EXPLOIT", Action.RUN_STUDY)
    assert policy.decide(a, lo, 2) == ("EXPLOIT", Action.RUN_STUDY)   # dip resets the count
    assert policy.decide(a, hi, 3)[0] == "EXPLOIT"
    assert policy.decide(a, hi, 4) == ("BOREDOM_SNAP", Action.SNAP)


def test_cooldown_blocks_snaps_and_resets_similarity_window():
    a = _agent()
    for _ in range(3):
        _idea(a, "same idea again")
    hi = _comp(B=1.0, stall=0.0)
    policy.decide(a, hi, 1)
    assert policy.decide(a, hi, 2) == ("BOREDOM_SNAP", Action.SNAP)
    assert a.meter["window_start"] == 3
    _idea(a, "same idea again")
    assert boredom.similarity(a) == 0.0          # only ideas since the snap count
    cool = TH["cooldown_rounds"]
    for r in range(3, 3 + cool):
        assert policy.decide(a, hi, r)[0] == "EXPLOIT"
    policy.decide(a, hi, 3 + cool)
    assert policy.decide(a, hi, 4 + cool) == ("BOREDOM_SNAP", Action.SNAP)


def test_breakout_when_stall_persists_after_a_snap():
    a = _agent()
    _idea(a, "fresh")
    hi = _comp(B=1.0, stall=1.0)
    policy.decide(a, hi, 1)
    assert policy.decide(a, hi, 2)[1] == Action.SNAP
    assert policy.decide(a, hi, 3)[0] == "EXPLOIT"
    assert policy.decide(a, hi, 2 + TH["cooldown_rounds"]) == ("PARADIGM_BREAKOUT", Action.BREAKOUT)
    b = _agent()
    _idea(b, "fresh")
    policy.decide(b, hi, 1)
    policy.decide(b, hi, 2)
    assert policy.decide(b, _comp(B=1.0, stall=0.0), 2 + TH["cooldown_rounds"])[0] == "EXPLOIT"


def test_converged_replicates_once_then_holds():
    a = _agent()
    i = _idea(a, "x", eff=0.5)
    _study(a, i, actual=0.5)
    _study(a, i, actual=0.52)
    novel = _comp(B=0.9, ext_familiar=0.1)
    assert policy.decide(a, novel, 3) == ("CONVERGED", Action.REPLICATE)
    assert policy.decide(a, novel, 4) == ("CONVERGED", Action.HOLD)
    b = _agent()
    j = _idea(b, "x", eff=0.5)
    _study(b, j, actual=0.5)
    _study(b, j, actual=0.5)
    assert policy.decide(b, _comp(B=0.1, ext_familiar=0.9), 3)[0] != "CONVERGED"   # literature has it


def test_jitter_reproducible_by_seed():
    amp = TH["jitter"]
    vals = {(s, n): policy.jitter(s, n) for s in range(3) for n in ("quill", "oyelaran", "ikeda", "volkov")}
    assert vals == {(s, n): policy.jitter(s, n) for s in range(3) for n in ("quill", "oyelaran", "ikeda", "volkov")}
    assert all(-amp <= v <= amp for v in vals.values())
    assert len(set(vals.values())) > 6


def test_jitter_shifts_the_threshold():
    a = _agent()
    _idea(a, "fresh")
    a.meter["jitter"] = 0.05
    b = _comp(B=TH["snap"] + 0.02)
    policy.decide(a, b, 1)
    assert policy.decide(a, b, 2)[0] == "EXPLOIT"
    a.meter.update(jitter=-0.05, above=0)
    policy.decide(a, b, 3)
    assert policy.decide(a, b, 4)[0] == "BOREDOM_SNAP"


def test_threshold_default_comes_from_profile():
    """Was 0.7 in policy.py and tests but 0.5 in config.yaml; the profile is now the only source."""
    import config
    assert policy.default_threshold() == TH["snap"] == 0.5
    assert "boredom_threshold" not in config.load()


# --- policy plumbing ------------------------------------------------------------------------------
def test_run_needs_budget_unless_statistician():
    a = _agent()
    _idea(a, "fresh")
    a.budget_left = 0
    assert policy.never_policy(a, _comp(), 1, random.Random(0)) == ("EXPLOIT", Action.REFINE)
    v = _agent("volkov")
    _idea(v, "methods idea")
    assert policy.never_policy(v, _comp(), 1, random.Random(0)) == ("EXPLOIT", Action.RUN_STUDY)


def test_never_policy_never_snaps():
    a = _agent()
    assert all(policy.never_policy(a, _comp(B=b / 10), 1, random.Random(0))[1] != Action.SNAP for b in range(11))


def test_yoked_snappers_picks_exact_count():
    names = ["quill", "oyelaran", "ikeda", "volkov"]
    for k in range(5):
        assert len(policy.yoked_snappers(names, k, random.Random(k))) == k
    assert policy.yoked_snappers(names, 2, random.Random(7)) == policy.yoked_snappers(names, 2, random.Random(7))
