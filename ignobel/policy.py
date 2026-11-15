"""Map an agent's private meter to a regime and an action. No LLM calls here.

Regimes (thresholds from the profile's agent_meter section):
  CONVERGED          last 2 studies replicated with a small gap and the idea is novel to the
                     literature: replicate once more, then hold. Sticky.
  FRUSTRATED         frustration >= frustrated: design review with the statistician, then run.
  PARADIGM_BREAKOUT  cooldown_rounds after a snap, if stall is still >= breakout_stall.
  BOREDOM_SNAP       B >= snap + the agent's jitter for snap_rounds consecutive rounds.
  EXPLOIT            otherwise, and during the cooldown_rounds after a snap or breakout.
"""
import random
from enum import Enum

import boredom
import meter_profile


class Action(str, Enum):
    REFINE = "REFINE"
    SNAP = "SNAP"
    RUN_STUDY = "RUN_STUDY"
    BREAKOUT = "BREAKOUT"
    REVIEW = "REVIEW"
    REPLICATE = "REPLICATE"
    HOLD = "HOLD"


EXPLORE = (Action.SNAP, Action.BREAKOUT)


def _th(cfg: dict | None = None) -> dict:
    return (cfg or meter_profile.agent_meter())["thresholds"]


def default_threshold() -> float:
    return float(_th()["snap"])


def jitter(run_seed: int, name: str, cfg: dict | None = None) -> float:
    """Per-agent threshold offset in [-jitter, +jitter], reproducible from (run seed, agent name)."""
    amp = float(_th(cfg)["jitter"])
    return round(random.Random(f"ignobel-jitter:{run_seed}:{name}").uniform(-amp, amp), 4)


def _work(agent) -> Action:
    """Run the current idea if it is unrun and affordable, else refine it."""
    can_run = agent.unrun_idea() is not None and (agent.budget_left > 0 or agent.spec.is_statistician)
    return Action.RUN_STUDY if can_run else Action.REFINE


def converged(agent, comp: dict, cfg: dict | None = None) -> bool:
    th = _th(cfg)
    cur = agent.current_idea()
    if cur is None or not any(s.idea_id == cur.idea_id for s in agent.studies):
        return False  # the newest idea must be tested before the agent can hold
    last = agent.studies[-2:]
    if len(last) < 2 or not all(s.replicated for s in last):
        return False
    if any(boredom.gap(s.predicted, s.actual_effect, s.actual_direction) > float(th["converged_gap"]) for s in last):
        return False
    return comp["ext_familiar"] <= float(th["converged_ext_familiar"])


def decide(agent, comp: dict, round: int, cfg: dict | None = None, threshold: float | None = None) -> tuple[str, Action]:
    """Advance the agent's private meter state by one round and return (regime, action)."""
    th = _th(cfg)
    st = agent.meter
    if st.get("converged") or converged(agent, comp, cfg):
        if not st.get("converged"):
            st["converged"] = True
            return "CONVERGED", Action.REPLICATE
        return "CONVERGED", Action.HOLD

    if comp["frustration"] >= float(th["frustrated"]):
        st["above"] = 0
        if st.get("reviewed_at_study") != len(agent.studies):
            st["reviewed_at_study"] = len(agent.studies)
            return "FRUSTRATED", Action.REVIEW
        return "FRUSTRATED", _work(agent)

    last = st.get("last_explore_round")
    cooldown = int(th["cooldown_rounds"])
    if st.get("breakout_pending") and round - last >= cooldown:
        del st["breakout_pending"]
        if comp["stall"] >= float(th["breakout_stall"]):
            on_explore(agent, round)
            return "PARADIGM_BREAKOUT", Action.BREAKOUT
    if last is not None and round - last <= cooldown:
        st["above"] = 0
        return "EXPLOIT", _work(agent)

    snap_at = (float(th["snap"]) if threshold is None else threshold) + float(st.get("jitter", 0.0))
    st["above"] = st.get("above", 0) + 1 if comp["B"] >= snap_at else 0
    if st["above"] >= int(th["snap_rounds"]):
        on_explore(agent, round)
        st["breakout_pending"] = True
        return "BOREDOM_SNAP", Action.SNAP
    return "EXPLOIT", _work(agent)


def on_explore(agent, round: int) -> None:
    """After a snap or breakout: start the cooldown and reset the similarity window."""
    agent.meter["last_explore_round"] = round
    agent.meter["above"] = 0
    agent.meter["window_start"] = len(agent.ideas)


def boredom_policy(agent, comp: dict, round: int, rng: random.Random, threshold: float | None = None) -> tuple[str, Action]:
    return decide(agent, comp, round, threshold=threshold)


def never_policy(agent, comp: dict, round: int, rng: random.Random) -> tuple[str, Action]:
    return "EXPLOIT", _work(agent)


def yoked_snappers(names: list[str], count: int, rng: random.Random) -> set[str]:
    """Pick `count` agents uniformly at random to snap this round (the yoked control)."""
    return set(rng.sample(sorted(names), min(count, len(names))))


POLICIES = {"boredom": boredom_policy, "never": never_policy}
