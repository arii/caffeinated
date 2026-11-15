"""Agent definitions and the six one-call LLM methods.

Nothing here reads another agent's boredom score or any judge output.
"""
from pathlib import Path
from typing import Literal

import yaml
from pydantic import BaseModel, Field

import llm

HERE = Path(__file__).parent
GOAL = "Your goal is research that makes people laugh, then think."


class Instrument(BaseModel):
    name: str
    column: str
    description: str = ""


class Prediction(BaseModel):
    direction: Literal["+", "-"]
    effect_size: float


class Idea(BaseModel):
    idea_id: str
    round: int
    kind: Literal["propose", "refine"]
    title: str
    text: str
    hypothesis: str = ""
    method: str = ""
    prediction: Prediction
    source_urls: list[str] = Field(default_factory=list)
    run: bool = False
    embedding: list[float] | None = None


class StudyRecord(BaseModel):
    study_id: str
    idea_id: str
    round: int
    ok: bool                      # code ran and produced a result
    replicated: bool              # passed stats.check
    predicted: Prediction
    actual_effect: float | None = None
    actual_direction: str | None = None
    abstract: str = ""


class AgentSpec(BaseModel):
    name: str
    field: str
    family: str | None = None  # mother department, when the roster is families.yaml
    seed_queries: list[str]
    dataset: str | None = None
    instruments: list[Instrument] = Field(default_factory=list)
    methods: list[str] = Field(default_factory=list)
    budget_per_round: int = 0

    @property
    def is_statistician(self) -> bool:
        return self.dataset is None


def load_specs(path: str | Path = HERE / "agents.yaml", n: int | None = None) -> list[AgentSpec]:
    with open(path, encoding="utf-8") as f:
        raw = yaml.safe_load(f)["agents"]
    specs = [AgentSpec(**a) for a in raw]
    return specs[:n] if n else specs


def _parse_prediction(d: dict, fallback_seed: int) -> Prediction:
    p = d.get("prediction") or {}
    direction = "+" if str(p.get("direction", "+")).strip().startswith("+") else "-"
    try:
        eff = abs(float(p.get("effect_size", 0.3)))
    except (TypeError, ValueError):
        eff = 0.3
    return Prediction(direction=direction, effect_size=round(eff, 3))


class Agent:
    """One scientist with a private lab and a private memory."""

    def __init__(self, spec: AgentSpec, memory, cfg: dict, run_seed: int = 0):
        self.spec = spec
        self.memory = memory
        self.cfg = cfg
        self.run_seed = run_seed
        self.ideas: list[Idea] = []
        self.studies: list[StudyRecord] = []
        self.lessons: str = ""
        self.budget_left: int = spec.budget_per_round

    # ------------------------------------------------------------ helpers
    @property
    def name(self) -> str:
        return self.spec.name

    def current_idea(self) -> Idea | None:
        return self.ideas[-1] if self.ideas else None

    def unrun_idea(self) -> Idea | None:
        idea = self.current_idea()
        return idea if idea and not idea.run else None

    def reset_budget(self) -> None:
        self.budget_left = self.spec.budget_per_round

    def _mock_ctx(self, **extra) -> dict:
        ctx = {"noun": f"{self.spec.field} measurements",
               "method": self.spec.methods[0] if self.spec.methods else "regression",
               "instruments": [i.name for i in self.spec.instruments]}
        ctx.update(extra)
        return ctx

    def system_prompt(self) -> str:
        lines = [
            f"You are {self.name}, an expert in {self.spec.field} running a private lab.",
            GOAL,
        ]
        if self.spec.family:
            lines.insert(1, f"Your lab belongs to the {self.spec.family} department.")
        if self.cfg.get("tell_prize", True):
            lines.append("A prize exists for work like this; a committee reads every study afterwards.")
        if self.spec.instruments:
            inst = "; ".join(f"{i.name} ({i.description})" for i in self.spec.instruments)
            lines.append(f"Your dataset is private. Instruments: {inst}.")
        else:
            lines.append("You have no dataset of your own. Your expertise is methods; "
                         "you request measurements from other labs.")
        lines.append("Standard methods in your field: " + ", ".join(self.spec.methods) + ".")
        if self.lessons:
            lines.append("Your private lessons so far: " + self.lessons)
        lines.append("Always answer with a single JSON object.")
        return "\n".join(lines)

    def _call(self, kind: str, user: str, model: str = llm.MODEL_CHEAP, max_tokens: int = 900,
              **ctx) -> llm.LLMResult:
        return llm.chat_json(model, self.system_prompt(), user, kind=kind, seed=self.run_seed,
                             max_tokens=max_tokens, mock_context=self._mock_ctx(**ctx))

    def _new_idea(self, data: dict, kind: str, round: int, source_urls: list[str]) -> Idea:
        text = str(data.get("idea") or data.get("title") or "untitled idea")
        idea = Idea(
            idea_id=f"{self.name}-i{len(self.ideas) + 1}", round=round, kind=kind,
            title=str(data.get("title") or text[:60]), text=text,
            hypothesis=str(data.get("hypothesis", "")), method=str(data.get("method", "")),
            prediction=_parse_prediction(data, self.run_seed), source_urls=source_urls,
        )
        idea.embedding = llm.embed([idea.text])[0].tolist()
        self.ideas.append(idea)
        return idea

    # -------------------------------------------------------- LLM methods
    def propose(self, round: int, library: list, extra_source=None) -> tuple[Idea, llm.LLMResult]:
        """Propose a new study from the agent's library (and an optional fresh source)."""
        items = list(library)
        urls = []
        for it in items:
            url = (it.meta or {}).get("url")
            if url:
                urls.append(url)
        lines = [f"- {it.text[:200]}" for it in items[:8]]
        if extra_source is not None:
            lines.append(f"- NEW SOURCE: {extra_source.title} {extra_source.url} {extra_source.snippet[:200]}")
            urls.append(extra_source.url)
        user = ("Propose one new study. Return JSON with keys: title, idea, hypothesis, method, "
                "prediction {direction: '+' or '-', effect_size: number (Cohen's d or r)}.\n"
                "Relevant notes from your library:\n" + "\n".join(lines))
        res = self._call("propose", user)
        return self._new_idea(res.data, "propose", round, urls), res

    def refine(self, round: int) -> tuple[Idea, llm.LLMResult]:
        """Refine the current idea into a sharper, more testable version."""
        cur = self.current_idea()
        prior = cur.text if cur else "no prior idea"
        last = [s for s in self.studies if cur and s.idea_id == cur.idea_id]
        outcome = ""
        if last:
            s = last[-1]
            outcome = (f"\nLast study on it: ok={s.ok}, replicated={s.replicated}, "
                       f"actual effect={s.actual_effect} ({s.actual_direction}).")
        user = (f"Refine this idea into a better, still funny-then-thoughtful study: {prior}{outcome}\n"
                "Return JSON with keys: title, idea, hypothesis, method, prediction {direction, effect_size}.")
        res = self._call("refine", user)
        urls = cur.source_urls if cur else []
        return self._new_idea(res.data, "refine", round, urls), res

    def talk(self, other: str, other_field: str, history: list[str], topic: str) -> tuple[str, llm.LLMResult]:
        """One conversational turn with another scientist."""
        hist = "\n".join(history[-4:]) or "(start of conversation)"
        user = (f"You are talking with {other}, an expert in {other_field}, about: {topic}.\n"
                f"Conversation so far:\n{hist}\nReply in 2-3 sentences. Return JSON {{text}}.")
        res = self._call("talk", user, topic=topic)
        return str(res.data.get("text", "")), res

    def write_study_code(self, peers: list[dict]) -> tuple[dict, llm.LLMResult]:
        """Return {code, requests}. Code runs in a sandbox using lab_runtime only."""
        idea = self.current_idea()
        peer_lines = "\n".join(f"- {p['agent']}: {', '.join(p['instruments'])}" for p in peers if p["instruments"])
        if self.spec.instruments:
            api = ("from lab_runtime import instruments, instrument, report, report_corr\n"
                   "instrument(name, where=None, offset=0, limit=None) -> list[float]; each call costs 1 budget.\n"
                   f"Budget this round: {self.budget_left}.\n"
                   "Finish with report(group_a, group_b, direction, effect_size) or report_corr(x, y, direction, effect_size).")
            req = "requests must be []."
        else:
            api = ("from lab_runtime import measurement, report, report_corr\n"
                   "measurement(i) -> list[float] is the i-th request's data.\n"
                   "Finish with report(group_a, group_b, direction, effect_size) or report_corr(x, y, direction, effect_size).")
            req = ("requests is a list of {owner, instrument, args} measurements you need from other labs:\n"
                   + peer_lines)
        user = (f"Write Python for this study: {idea.text if idea else 'no idea yet'}\n"
                f"Prediction: {idea.prediction.model_dump() if idea else {}}\n{api}\n"
                "Only lab_runtime and the standard library are available. No network.\n"
                f"Return JSON {{code: string, requests: list}}. {req}")
        res = self._call("study_code", user, model=llm.MODEL_STRONG, max_tokens=2500, peers=peers)
        code = str(res.data.get("code", ""))
        requests = res.data.get("requests") or []
        return {"code": code, "requests": requests if isinstance(requests, list) else []}, res

    def write_abstract(self, study: dict) -> tuple[str, llm.LLMResult]:
        """Write the abstract the committee will read later."""
        idea = self.current_idea()
        user = (f"Write a 4-6 sentence abstract for this study.\nIdea: {idea.text if idea else ''}\n"
                f"Result: {study}\nReturn JSON {{abstract}}.")
        res = self._call("abstract", user, ok=study.get("replicated", False), n=study.get("n"))
        return str(res.data.get("abstract", "")), res

    def write_lesson(self, round: int, summary: str) -> tuple[str, llm.LLMResult]:
        """Rewrite the short private lessons note."""
        user = (f"Round {round} is over. What happened: {summary}\nPrevious lessons: {self.lessons or 'none'}\n"
                "Rewrite your private lessons note in at most 3 sentences. Return JSON {lesson}.")
        res = self._call("lesson", user)
        self.lessons = str(res.data.get("lesson", self.lessons))
        return self.lessons, res

    # --------------------------------------------------------------- state
    def to_state(self) -> dict:
        return {"ideas": [i.model_dump() for i in self.ideas],
                "studies": [s.model_dump() for s in self.studies],
                "lessons": self.lessons, "budget_left": self.budget_left}

    def load_state(self, st: dict) -> None:
        self.ideas = [Idea(**i) for i in st["ideas"]]
        self.studies = [StudyRecord(**s) for s in st["studies"]]
        self.lessons = st["lessons"]
        self.budget_left = st["budget_left"]
