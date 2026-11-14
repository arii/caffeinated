"""Map (agent, B, rng) -> action. No LLM calls here."""
import random
from enum import Enum


class Action(str, Enum):
    REFINE = "REFINE"
    SNAP = "SNAP"
    RUN_STUDY = "RUN_STUDY"


def _work(agent) -> Action:
    """Below threshold: run the current idea if it is unrun and affordable, else refine it."""
    can_run = agent.unrun_idea() is not None and (agent.budget_left > 0 or agent.spec.is_statistician)
    return Action.RUN_STUDY if can_run else Action.REFINE


def boredom_policy(agent, B: float, rng: random.Random, threshold: float = 0.7) -> Action:
    return Action.SNAP if B >= threshold else _work(agent)


def random_policy(agent, B: float, rng: random.Random, snap_prob: float = 0.3) -> Action:
    """Snaps with a fixed probability, ignoring B."""
    return Action.SNAP if rng.random() < snap_prob else _work(agent)


def never_policy(agent, B: float, rng: random.Random) -> Action:
    return _work(agent)


def regime(B: float, threshold: float) -> str:
    return "BOREDOM_SNAP" if B >= threshold else "EXPLOIT"


POLICIES = {"boredom": boredom_policy, "random": random_policy, "never": never_policy}
