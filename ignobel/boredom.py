"""The private boredom meter. score(agent) -> B in [0, 1].

similarity = mean cosine similarity of the newest idea to the agent's last 5 ideas
unsurprise = 1 - normalised gap between predicted and actual effect, only for studies
             that passed the replication check
failure    = share of the last 5 studies that crashed or failed replication
B = clip(0.5*similarity + 0.5*unsurprise - 0.5*failure, 0, 1)

The score is private to the agent and is never placed in another agent's prompt.

Daughter labs (families roster) use daughter_components() instead:

  B = clip(w_R*R + w_S*S + w_U*U + w_K*K - w_E*E, 0, 1)      base weights .35 .25 .20 .20 .30
  R repetition  similarity of the newest idea to her earlier ones, above her own round-0 baseline
  S stall       rounds since progress (a replicated result or a newly loaded dataset) / PATIENCE
  U unsurprise  as above
  K known       1 - novelty of her last studied idea against the literature
  E engagement  1 right after something fresh (a surprising replicated result, a new dataset, a
                chance meeting), fading to 0 over two rounds. The only term that lowers boredom.

Failure is not in B. It is reported as frustration and feeds the stuck trigger. Each daughter's
weights and threshold are shifted by up to +-0.1 (fixed by run seed and name), so labs differ in
temperament. Triggers override B (policy.boredom_policy): cooldown and satisfied keep her at the
bench; stuck, stall and no_data send her wandering.
"""
import hashlib

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


WEIGHTS = {"R": 0.35, "S": 0.25, "U": 0.20, "K": 0.20, "E": 0.30}
PATIENCE = 3        # rounds without progress before stall is 1 and the stall trigger fires
SURPRISE_GAP = 0.3  # a replicated result this far from its prediction counts as fresh


def temperament(run_seed: int, name: str) -> dict:
    """Per-daughter shifts in [-0.1, 0.1] for each weight and for the snap threshold."""
    def shift(key: str) -> float:
        h = int(hashlib.sha256(f"{run_seed}|{name}|{key}".encode()).hexdigest()[:8], 16)
        return round(h / 0xFFFFFFFF * 0.2 - 0.1, 4)
    return {"weights": {k: round(w + shift(k), 4) for k, w in WEIGHTS.items()}, "threshold": shift("threshold")}


def surprising(study) -> bool:
    return bool(study.replicated) and gap(study.predicted, study.actual_effect, study.actual_direction) >= SURPRISE_GAP


def daughter_components(agent, r: int) -> dict:
    m = agent.meter
    if "weights" not in m:
        m.update(temperament(agent.run_seed, agent.name))
    w = m["weights"]
    sim = similarity(agent)
    if "base" not in m and agent.ideas and agent.ideas[0].embedding is not None:
        first = np.array(agent.ideas[0].embedding)  # how close an idea normally sits to her own library
        embs = [np.array(it.embedding) for it in getattr(agent.memory, "items", [])
                if it.kind == "library" and it.embedding is not None]
        m["base"] = round_(np.clip(np.mean([llm.cosine(first, e) for e in embs]), 0.0, 0.9)) if embs else 0.0
    base = m.get("base", 0.0)
    born = m.get("born", 0)
    R = float(np.clip((sim - base) / (1.0 - base), 0.0, 1.0)) if len(agent.ideas) >= 2 else 0.0
    S = float(np.clip((r - m.get("progress", born)) / PATIENCE, 0.0, 1.0))
    U = unsurprise(agent)
    K = float(m.get("known", 0.0))
    E = float(np.clip(1.0 - (r - m["fresh"]) / 2.0, 0.0, 1.0)) if "fresh" in m else 0.0
    b = float(np.clip(w["R"] * R + w["S"] * S + w["U"] * U + w["K"] * K - w["E"] * E, 0.0, 1.0))
    last3 = agent.studies[-3:]
    failed = sum(1 for s in last3 if not s.ok or not s.replicated)
    trigger = None
    if m.get("snap") == r - 1:
        trigger = "cooldown"
    elif len(agent.studies) >= 2 and all(surprising(s) for s in agent.studies[-2:]):
        trigger = "satisfied"
    elif sim >= 0.8 and failed >= 2:
        trigger = "stuck"
    elif r - m.get("progress", born) >= PATIENCE:
        trigger = "stall"
    elif not agent.datasets and r - born >= 2:
        trigger = "no_data"
    m["trigger"] = trigger
    return {"B": round_(b), "similarity": round_(sim), "repetition": round_(R), "stall": round_(S),
            "unsurprise": round_(U), "known": round_(K), "engagement": round_(E),
            "frustration": round_(failed / len(last3)) if last3 else 0.0, "failure": failure(agent),
            "threshold_shift": m["threshold"], "trigger": trigger}


def round_(x: float) -> float:
    return round(float(x), 4)


def score(agent) -> float:
    return components(agent)["B"]
