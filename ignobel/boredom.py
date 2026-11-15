"""The private boredom meter. score(agent) -> B in [0, 1].

similarity = mean cosine similarity of the newest idea to the agent's last 5 ideas
unsurprise = 1 - normalised gap between predicted and actual effect, only for studies
             that passed the replication check
failure    = share of the last 5 studies that crashed or failed replication
B = clip(0.5*similarity + 0.5*unsurprise - 0.5*failure, 0, 1)

The score is private to the agent and is never placed in another agent's prompt.
"""
import numpy as np

import llm

WINDOW = 5


def similarity(agent) -> float:
    ideas = [i for i in agent.ideas if i.embedding is not None]
    if len(ideas) < 2:
        return 0.0
    newest = np.array(ideas[-1].embedding)
    prev = ideas[-1 - WINDOW:-1]
    sims = [llm.cosine(newest, np.array(p.embedding)) for p in prev]
    return float(np.clip(np.mean(sims), 0.0, 1.0))


def gap(predicted, actual_effect: float | None, actual_direction: str | None) -> float:
    """Normalised distance between prediction and result, in [0, 1]. Wrong direction = 1."""
    if actual_effect is None or actual_direction is None:
        return 1.0
    if actual_direction != predicted.direction:
        return 1.0
    p, a = abs(predicted.effect_size), abs(actual_effect)
    denom = p + a
    return 0.0 if denom == 0 else float(min(abs(p - a) / denom, 1.0))


def unsurprise(agent) -> float:
    passed = [s for s in agent.studies if s.replicated][-WINDOW:]
    if not passed:
        return 0.0
    vals = [1.0 - gap(s.predicted, s.actual_effect, s.actual_direction) for s in passed]
    return float(np.clip(np.mean(vals), 0.0, 1.0))


def failure(agent) -> float:
    recent = agent.studies[-WINDOW:]
    if not recent:
        return 0.0
    bad = sum(1 for s in recent if (not s.ok) or (not s.replicated))
    return bad / len(recent)


def components(agent) -> dict:
    sim, uns, fail = similarity(agent), unsurprise(agent), failure(agent)
    b = float(np.clip(0.5 * sim + 0.5 * uns - 0.5 * fail, 0.0, 1.0))
    return {"B": round(b, 4), "similarity": round(sim, 4), "unsurprise": round(uns, 4), "failure": round(fail, 4)}


def score(agent) -> float:
    return components(agent)["B"]
