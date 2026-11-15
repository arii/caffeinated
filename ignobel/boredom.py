"""The private boredom meter. components(agent, round) -> B in [0, 1] plus its parts.

self_repeat  = similarity of the newest idea to the agent's recent ideas (since its last snap),
               z-scored against its round-0 baseline (idea 0 vs its seeded library), so shared
               field vocabulary does not count as repetition
ext_familiar = 1 - Exa novelty score of the newest idea: the literature already has this
unsurprise   = 1 - normalised gap between predicted and actual effect, replicated studies only
stall        = min(1, rounds since last progress / patience); progress = a replicated study with
               gap >= progress_gap, or the first replicated result in a new descriptor cell
B = clip(sum of weights * the four terms, 0, 1)

frustration (share of recent studies that crashed or failed replication) is reported next to B
but is not part of it; policy.py gives it its own regime. Weights and windows come from the
profile (boredom_meter/profiles/ignobel.json, section agent_meter). The score is private to the
agent and is never placed in any prompt.
"""
import numpy as np

import llm
import meter_profile


def _cfg(cfg: dict | None) -> dict:
    return cfg or meter_profile.agent_meter()


def set_baseline(agent) -> None:
    """Record mean and sd of cosine(round-0 idea, library item). Call once after round 0."""
    ideas = [i for i in agent.ideas if i.embedding is not None]
    items = [it for it in getattr(agent.memory, "items", []) if it.embedding is not None and it.kind == "library"]
    if not ideas or not items:
        agent.meter.setdefault("base_mu", 0.0)
        agent.meter.setdefault("base_sd", 1.0)
        return
    e = np.array(ideas[0].embedding)
    sims = [llm.cosine(e, np.array(it.embedding)) for it in items]
    agent.meter["base_mu"] = float(np.mean(sims))
    agent.meter["base_sd"] = float(np.std(sims)) or 1.0


def similarity(agent, cfg: dict | None = None) -> float:
    """Mean cosine of the newest idea to the previous `window` ideas since the last snap."""
    window = int(_cfg(cfg)["window"])
    start = int(agent.meter.get("window_start", 0))
    ideas = [i for i in agent.ideas[start:] if i.embedding is not None]
    if len(ideas) < 2:
        return 0.0
    newest = np.array(ideas[-1].embedding)
    prev = ideas[-1 - window:-1]
    sims = [llm.cosine(newest, np.array(p.embedding)) for p in prev]
    return float(np.clip(np.mean(sims), 0.0, 1.0))


def self_repeat(agent, cfg: dict | None = None) -> float:
    c = _cfg(cfg)
    start = int(agent.meter.get("window_start", 0))
    if len([i for i in agent.ideas[start:] if i.embedding is not None]) < 2:
        return 0.0
    mu, sd = agent.meter.get("base_mu", 0.0), agent.meter.get("base_sd", 1.0) or 1.0
    z = (similarity(agent, c) - mu) / sd
    return float(np.clip(z / float(c["self_repeat_z_full"]), 0.0, 1.0))


def ext_familiar(agent) -> float:
    idea = agent.current_idea()
    if idea is None or idea.novelty is None:
        return 0.0
    return float(np.clip(1.0 - idea.novelty, 0.0, 1.0))


def gap(predicted, actual_effect: float | None, actual_direction: str | None) -> float:
    """Normalised distance between prediction and result, in [0, 1]. Wrong direction = 1."""
    if actual_effect is None or actual_direction is None:
        return 1.0
    if actual_direction != predicted.direction:
        return 1.0
    p, a = abs(predicted.effect_size), abs(actual_effect)
    denom = p + a
    return 0.0 if denom == 0 else float(min(abs(p - a) / denom, 1.0))


def unsurprise(agent, cfg: dict | None = None) -> float:
    passed = [s for s in agent.studies if s.replicated][-int(_cfg(cfg)["window"]):]
    if not passed:
        return 0.0
    vals = [1.0 - gap(s.predicted, s.actual_effect, s.actual_direction) for s in passed]
    return float(np.clip(np.mean(vals), 0.0, 1.0))


def frustration(agent, cfg: dict | None = None) -> float:
    """Share of the last `window` studies that crashed or failed replication. Not part of B."""
    recent = agent.studies[-int(_cfg(cfg)["window"]):]
    if not recent:
        return 0.0
    bad = sum(1 for s in recent if (not s.ok) or (not s.replicated))
    return bad / len(recent)


failure = frustration  # old name


def _cell(agent, study) -> tuple | None:
    idea = next((i for i in agent.ideas if i.idea_id == study.idea_id), None)
    if idea is None or not idea.descriptor:
        return None
    return idea.descriptor["mechanism"], idea.descriptor["method"]


def last_progress_round(agent, cfg: dict | None = None) -> int:
    """Round of the latest replicated study that surprised, or that opened a new descriptor cell."""
    min_gap = float(_cfg(cfg)["progress_gap"])
    last, cells = 0, set()
    for s in agent.studies:
        if not s.replicated:
            continue
        cell = _cell(agent, s)
        new_cell = cell is not None and cell not in cells
        if cell is not None:
            cells.add(cell)
        if new_cell or gap(s.predicted, s.actual_effect, s.actual_direction) >= min_gap:
            last = max(last, s.round)
    return last


def stall(agent, round: int, cfg: dict | None = None) -> float:
    c = _cfg(cfg)
    since = max(0, round - last_progress_round(agent, c))
    return float(min(1.0, since / float(c["patience"])))


def components(agent, round: int = 0, cfg: dict | None = None) -> dict:
    c = _cfg(cfg)
    terms = {"self_repeat": self_repeat(agent, c), "ext_familiar": ext_familiar(agent),
             "unsurprise": unsurprise(agent, c), "stall": stall(agent, round, c)}
    b = float(np.clip(sum(float(c["weights"][k]) * v for k, v in terms.items()), 0.0, 1.0))
    out = {"B": round_(b), "similarity": round_(similarity(agent, c))}
    out.update({k: round_(v) for k, v in terms.items()})
    out["frustration"] = round_(frustration(agent, c))
    return out


def round_(x: float) -> float:
    return round(float(x), 4)


def score(agent, round: int = 0, cfg: dict | None = None) -> float:
    return components(agent, round, cfg)["B"]
