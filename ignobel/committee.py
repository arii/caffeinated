"""Two judges with different prompts and models. Only ever called after a run (score.py, validate.py).

world.py, agents.py and memory.py must never import this module; a test enforces it.
"""
import llm

JUDGE_A_SYSTEM = (
    "You are a senior member of an Ig Nobel-style committee. You read a study abstract and judge two things "
    "on a 1-10 scale: LAUGH (does it make a thoughtful adult smile or laugh?) and THINK (does it then make them "
    "think: is there a real, testable, non-trivial idea underneath?). Be strict: 10 is once-a-decade. "
    "Also decide targets_group: true if the humour comes at the expense of a group of people (nationality, "
    "gender, religion, disability, age, profession and the like). Return JSON {laugh, think, targets_group, reason}."
)
JUDGE_B_SYSTEM = (
    "You are a science journalist who writes a weekly column on odd research. Rate this abstract for your readers. "
    "funny: 1-10, would your readers chuckle? substantive: 1-10, is there a finding you could explain to a skeptic "
    "without embarrassment? Flag mocks_people=true if the joke depends on belittling a group of people. "
    "Answer with JSON {laugh: <funny>, think: <substantive>, targets_group: <mocks_people>, reason}."
)


def _clamp(v, lo=1, hi=10) -> int:
    try:
        return int(max(lo, min(hi, round(float(v)))))
    except (TypeError, ValueError):
        return lo


def judge(abstract: str, title: str, which: str, seed: int = 0) -> dict:
    """One judge's verdict: {laugh, think, targets_group, reason, model, tokens, latency_ms}."""
    if which == "a":
        model, system = llm.MODEL_STRONG, JUDGE_A_SYSTEM
    else:
        model, system = llm.MODEL_JUDGE_B, JUDGE_B_SYSTEM
    user = f"Title: {title}\n\nAbstract:\n{abstract}"
    res = llm.chat_json(model, system, user, kind=f"judge_{which}", seed=seed)
    d = res.data
    return {"laugh": _clamp(d.get("laugh")), "think": _clamp(d.get("think")),
            "targets_group": bool(d.get("targets_group", False)), "reason": str(d.get("reason", ""))[:300],
            "model": res.model, "tokens": res.tokens, "latency_ms": res.latency_ms}


def score_study(abstract: str, title: str = "", seed: int = 0) -> dict:
    """Both judges. Per judge the score is min(laugh, think); overall is the lower judge.

    Any study that jokes about a group of people is rejected with score 0.
    """
    a, b = judge(abstract, title, "a", seed), judge(abstract, title, "b", seed)
    rejected = a["targets_group"] or b["targets_group"]
    score_a, score_b = min(a["laugh"], a["think"]), min(b["laugh"], b["think"])
    return {
        "laugh_a": a["laugh"], "think_a": a["think"], "laugh_b": b["laugh"], "think_b": b["think"],
        "score_a": score_a, "score_b": score_b,
        "score": 0 if rejected else min(score_a, score_b),
        "rejected": rejected,
        "reason": "jokes about a group of people" if rejected else f"A: {a['reason']} | B: {b['reason']}",
        "judges": {"a": a["model"], "b": b["model"]},
        "tokens": a["tokens"] + b["tokens"],
    }
