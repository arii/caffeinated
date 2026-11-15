import random
from functools import partial

import pytest

import agents
import boredom
import policy
from agents import Agent, Idea, Prediction, StudyRecord
from memory import LocalMemory
from policy import Action


def _agent(name="quill"):
    spec = next(s for s in agents.load_specs() if s.name == name)
    return Agent(spec, LocalMemory(), {})


def _idea(a, text, direction="+", eff=0.5, run=False):
    import llm
    idea = Idea(idea_id=f"{a.name}-i{len(a.ideas) + 1}", round=0, kind="propose", title=text, text=text,
                prediction=Prediction(direction=direction, effect_size=eff), run=run,
                embedding=llm.embed([text])[0].tolist())
    a.ideas.append(idea)
    return idea


def _study(a, idea, ok=True, replicated=True, actual=0.5, direction="+"):
    a.studies.append(StudyRecord(study_id=f"s{len(a.studies)}", idea_id=idea.idea_id, round=1, ok=ok,
                                 replicated=replicated, predicted=idea.prediction,
                                 actual_effect=actual if ok else None,
                                 actual_direction=direction if ok else None))


def test_empty_agent_scores_zero():
    a = _agent()
    assert boredom.score(a) == 0.0


def test_identical_ideas_push_similarity_to_one():
    a = _agent()
    for _ in range(3):
        _idea(a, "same idea again")
    assert boredom.similarity(a) == pytest.approx(1.0)
    assert boredom.score(a) == pytest.approx(0.5)


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


def test_failure_share_and_clip():
    a = _agent()
    i = _idea(a, "x")
    for _ in range(4):
        _study(a, i, ok=False, replicated=False)
    _study(a, i, ok=True, replicated=False)
    assert boredom.failure(a) == 1.0
    assert boredom.score(a) == 0.0  # clipped at 0
    c = boredom.components(a)
    assert set(c) == {"B", "similarity", "unsurprise", "failure"}


def test_boredom_policy_threshold():
    a = _agent()
    rng = random.Random(0)
    assert policy.boredom_policy(a, 0.7, rng, threshold=0.7) == Action.SNAP
    assert policy.boredom_policy(a, 0.69, rng, threshold=0.7) == Action.REFINE  # no idea yet
    _idea(a, "fresh")
    assert policy.boredom_policy(a, 0.1, rng) == Action.RUN_STUDY
    a.ideas[-1].run = True
    assert policy.boredom_policy(a, 0.1, rng) == Action.REFINE


def test_run_needs_budget_unless_statistician():
    a = _agent()
    _idea(a, "fresh")
    a.budget_left = 0
    assert policy.never_policy(a, 0.0, random.Random(0)) == Action.REFINE
    v = _agent("volkov")
    _idea(v, "methods idea")
    assert policy.never_policy(v, 0.0, random.Random(0)) == Action.RUN_STUDY


def test_random_policy_ignores_B():
    a = _agent()
    always = partial(policy.random_policy, snap_prob=1.0)
    never = partial(policy.random_policy, snap_prob=0.0)
    assert always(a, 0.0, random.Random(1)) == Action.SNAP
    assert never(a, 1.0, random.Random(1)) == Action.REFINE
    rng = random.Random(42)
    snaps = sum(policy.random_policy(a, 0.0, rng, snap_prob=0.3) == Action.SNAP for _ in range(2000))
    assert 500 < snaps < 700


def test_never_policy_never_snaps():
    a = _agent()
    assert all(policy.never_policy(a, b / 10, random.Random(0)) != Action.SNAP for b in range(11))
