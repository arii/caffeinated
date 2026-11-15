"""Agent definitions and the one-call LLM methods.

Nothing here reads another agent's boredom score or any judge output.
"""
import json
import re
from pathlib import Path
from typing import Literal

import yaml
from pydantic import BaseModel, Field

import llm
import sources

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
    citations: list[str] = Field(default_factory=list)  # S ids from the run's research_log.jsonl
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
    if not isinstance(p, dict):
        p = {}
    direction = "+" if str(p.get("direction", "+")).strip().startswith("+") else "-"
    try:
        eff = abs(float(p.get("effect_size", 0.3)))
    except (TypeError, ValueError):
        eff = 0.3
    return Prediction(direction=direction, effect_size=round(eff, 3))


STEP_NAMES = ("exa", "openalex", "arxiv", "pubmed", "alphafold", "datasets", "read", "load")


def _idea_fields(data: dict) -> dict:
    """Flatten common response envelopes and normalize idea-field variants."""
    if not isinstance(data, dict):
        return {}
    fields, current = {}, data
    while isinstance(current, dict):
        fields = {**fields, **current}
        nested = next((current.get(key) for key in
                       ("study", "idea", "proposal", "result", "data", "response", "output")
                       if isinstance(current.get(key), dict)), None)
        if nested is None and len(current) == 1:
            nested = next(iter(current.values()))
            if not isinstance(nested, dict):
                break
        if not isinstance(nested, dict):
            break
        current = nested

    aliases = {
        "title": ("title", "idea_title", "study_title"),
        "idea": ("idea", "idea_text", "study_idea", "research_question", "question", "text", "description"),
        "hypothesis": ("hypothesis", "hypothesis_text", "null_hypothesis"),
    }
    for target, names in aliases.items():
        if isinstance(fields.get(target), str) and fields[target].strip():
            continue
        for name in names:
            value = fields.get(name)
            if isinstance(value, str) and value.strip():
                fields[target] = value
                break
    return fields


def _idea_text(value) -> str:
    text = " ".join(str(value or "").split())
    return "" if text.casefold() in {"untitled", "untitled idea", "none", "n/a"} else text


def _steps(data: dict) -> list[dict]:
    """Research steps from a plan reply, as [{tool, query | source, question | lead}].

    Some models answer in their own function-call syntax instead of JSON, e.g.
    datasets{"name":"datasets", query":"..."}}read{... source":"S4", question":"..."}}; those are salvaged."""
    steps = data.get("steps")
    if isinstance(steps, list):
        out = []
        for s in steps:
            if isinstance(s, dict):
                out.append({**s, "tool": str(s.get("do") or s.get("tool") or s.get("name") or "")})
        return out
    raw = str(data.get("_raw", ""))
    cuts = [m for m in re.finditer(r"\b(" + "|".join(STEP_NAMES) + r")\s*\{", raw)]
    out = []
    for i, m in enumerate(cuts):
        chunk = raw[m.end():cuts[i + 1].start() if i + 1 < len(cuts) else len(raw)]
        step = {"tool": m.group(1)}
        for key in ("query", "source", "question", "lead"):
            v = re.search(key + r'"?\s*:\s*"((?:[^"\\]|\\.)*)"', chunk)
            if v:
                step[key] = v.group(1)
        out.append(step)
    return out


def _note(it) -> str:
    sid = (it.meta or {}).get("sid")
    return f"- [{sid}] {it.text[:300]}" if sid else f"- {it.text[:200]}"


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
        self.datasets: list[dict] = []  # real public datasets this lab loaded (sources.fetch_dataset)
        self.leads: list[dict] = []     # dataset candidates it found but has not loaded; D1, D2, ...
        self.meter: dict = {}           # private boredom-meter state (boredom.daughter_components)

    # ------------------------------------------------------------ helpers
    @property
    def name(self) -> str:
        return self.spec.name

    def current_idea(self) -> Idea | None:
        return self.ideas[-1] if self.ideas else None

    def unrun_idea(self) -> Idea | None:
        idea = self.current_idea()
        return idea if idea and not idea.run else None

    def can_run(self) -> bool:
        """A daughter lab needs a real dataset to analyse; a flat-roster lab needs budget."""
        if self.spec.family:
            return bool(self.datasets)
        return self.budget_left > 0 or self.spec.is_statistician

    def known_sources(self) -> dict[str, dict]:
        """{S id: {url, title}} for every source in this agent's memory, oldest first."""
        out = {}
        for it in getattr(self.memory, "items", []):
            sid = (it.meta or {}).get("sid")
            if sid:
                out.setdefault(sid, {"id": sid, "url": it.meta.get("url", ""), "title": it.meta.get("title", "")})
        return out

    def reset_budget(self) -> None:
        self.budget_left = self.spec.budget_per_round

    def _mock_ctx(self, **extra) -> dict:
        ctx = {"noun": f"{self.spec.field} measurements",
               "method": self.spec.methods[0] if self.spec.methods else "regression",
               "instruments": [i.name for i in self.spec.instruments],
               "sources": list(self.known_sources())[-3:],
               "datasets": [{"name": d["name"], "numeric": [c["name"] for c in d["columns"] if c["kind"] == "numeric"]}
                            for d in self.datasets]}
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
        if self.spec.family:
            lines.append("You do real research only: published papers and real public datasets. Never invent "
                         "data, results or citations. Cite sources by their S id, like [S12].")
            if self.datasets:
                lines.append("Real datasets you have loaded:\n" + "\n".join(sources.describe(d) for d in self.datasets))
            else:
                lines.append("You have not loaded a dataset yet.")
        elif self.spec.instruments:
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
        data = _idea_fields(data)
        idea_number = len(self.ideas) + 1
        idea_text = _idea_text(data.get("idea"))
        title = _idea_text(data.get("title"))
        hypothesis = _idea_text(data.get("hypothesis"))
        title = title or idea_text[:60] or hypothesis[:60] or f"{self.name} idea {idea_number}"
        text = idea_text or title
        known = self.known_sources()
        cited = [c for c in dict.fromkeys(re.findall(r"S\d+", json.dumps(data.get("citations") or []))) if c in known]
        if cited:  # only sources this agent really has; their URLs came from an API, not from the model
            source_urls = [known[c]["url"] for c in cited]
        idea = Idea(
            citations=cited,
            idea_id=f"{self.name}-i{idea_number}", round=round, kind=kind,
            title=title, text=text,
            hypothesis=hypothesis, method=str(data.get("method", "")),
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
        lines = [_note(it) for it in items[:8]]
        if extra_source is not None:
            lines.append(f"- NEW SOURCE: {extra_source.title} {extra_source.url} {extra_source.snippet[:200]}")
            urls.append(extra_source.url)
        user = ("Propose one new study. Return JSON with keys: title, idea, hypothesis, method, "
                "prediction {direction: '+' or '-', effect_size: number (Cohen's d or r)}" + self._real_rules() + ".\n"
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
                "Return JSON with keys: title, idea, hypothesis, method, prediction {direction, effect_size}"
                + self._real_rules() + ".")
        if self.spec.family:
            user += "\nNotes from your library:\n" + "\n".join(_note(it) for it in self.memory.search(prior, 6))
        res = self._call("refine", user)
        urls = cur.source_urls if cur else []
        return self._new_idea(res.data, "refine", round, urls), res

    def _real_rules(self) -> str:
        """Extra instructions for daughter labs, which work from real sources and real data only."""
        if not self.spec.family:
            return ""
        data = ("The study must be a question your loaded dataset can answer with one comparison of two groups "
                "or one correlation, using its real columns" if self.datasets else
                "You have no dataset yet, so say which real public data would test it")
        return (", citations (S ids of the notes it builds on).\n"
                f"Build on the real findings in your notes; do not invent any. {data}")

    def plan_research(self, round: int, max_steps: int = 2) -> tuple[list[dict], llm.LLMResult]:
        """The agent chooses its own next research steps. Returns ([step dicts], LLMResult)."""
        idea = self.current_idea()
        known = list(self.known_sources().values())[-8:]
        srcs = "\n".join(f"- {s['id']}: {s['title'][:90]}" for s in known) or "- none yet"
        leads = "\n".join(f"- D{i + 1}: {l['title'][:80]} | columns: {', '.join(l.get('preview') or ['?'])[:200]} | {l['url']}"
                          for i, l in enumerate(self.leads)) or "- none"
        user = (f"Decide your own next research steps (at most {max_steps}). Nobody assigns you a topic.\n"
                f"Current idea: {idea.title if idea else 'none yet'}\n"
                f"Sources you already have:\n{srcs}\n"
                f"Dataset leads you found but have not loaded:\n{leads}\n"
                f"Datasets loaded: {', '.join(d['name'] for d in self.datasets) or 'none'}\n"
                "Each step is one JSON object with a \"do\" field:\n"
                '- {"do": "exa"} or "openalex", "arxiv", "pubmed", with "query": search published papers\n'
                '- {"do": "alphafold", "query": "..."}: predicted protein structure and per-residue confidence from AlphaFold DB\n'
                '- {"do": "read", "source": "S12", "question": "..."}: read one source for a specific fact or number\n'
                '- {"do": "datasets", "query": "..."}: look for a real public dataset (Zenodo, Hugging Face); '
                "short queries of 2-4 plain words work best\n"
                '- {"do": "load", "lead": "D1"}: load a dataset lead so you can analyse it\n'
                + ("Your dataset searches have not worked so far: try different, simpler words, or load a lead "
                   "a colleague gave you.\n" if self.meter.get("trigger") == "no_data" else "") +
                "You need a loaded dataset before you can run a study. Reply with plain JSON text only, exactly "
                'in this shape: {"steps": [{"do": "openalex", "query": "..."}, {"do": "load", "lead": "D1"}], "why": "..."}')
        res = self._call("research_plan", user, round=round, leads=len(self.leads),
                         sources=[s["id"] for s in known], queries=self.spec.seed_queries)
        return _steps(res.data)[:max_steps], res

    def talk(self, other: str, other_field: str, history: list[str]) -> tuple[str, llm.LLMResult]:
        """One turn of a chance conversation. No topic is set; it goes wherever it goes."""
        hist = "\n".join(history[-4:]) or "(you have just bumped into each other)"
        idea = self.current_idea()
        doing = idea.title if idea else "nothing in particular yet"
        user = (f"You bumped into {other}, an expert in {other_field}, at the coffee machine. "
                f"You are currently working on: {doing}.\nConversation so far:\n{hist}\n"
                "Reply in 2-3 sentences. Talk about whatever comes up: your work, theirs, or something "
                "neither of you planned. Return JSON {text}.")
        res = self._call("talk", user, topic=doing)
        return str(res.data.get("text", "")), res

    def write_study_code(self, peers: list[dict]) -> tuple[dict, llm.LLMResult]:
        """Return {code, requests}. Code runs in a sandbox using lab_runtime only."""
        idea = self.current_idea()
        peer_lines = "\n".join(f"- {p['agent']}: {', '.join(p['instruments'])}" for p in peers if p["instruments"])
        if self.spec.family:
            api = ("from lab_runtime import datasets, rows, path, report, report_corr\n"
                   "rows(dataset, [column, ...], where=None) -> list of tuples of floats, one per data row in which "
                   "every listed column is a number; where={'column': value} first keeps rows whose column equals "
                   "value (a category or a number). Example: x, y = zip(*rows('d1', ['dose', 'response'])).\n"
                   "path(dataset) -> the CSV file, if you prefer pandas. numpy, scipy and pandas are installed.\n"
                   "Use only the real columns listed in your datasets; never simulate or make up data.\n"
                   "Finish with exactly one report(group_a, group_b, direction, effect_size) (two lists of numbers) "
                   "or report_corr(x, y, direction, effect_size) (two lists of equal length).")
            req = "requests must be []."
        elif self.spec.instruments:
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
                + ("No network.\n" if self.spec.family else
                   "Only lab_runtime and the standard library are available. No network.\n") +
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
        if self.spec.family:
            cites = ", ".join(f"[{c}]" for c in idea.citations) if idea and idea.citations else "none"
            user += ("\nReport only what this result on real data shows, including when it did not hold up. "
                     f"Name the dataset. Sources you may cite: {cites}.")
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
                "lessons": self.lessons, "budget_left": self.budget_left,
                "datasets": self.datasets, "leads": self.leads, "meter": self.meter}

    def load_state(self, st: dict) -> None:
        self.ideas = [Idea(**i) for i in st["ideas"]]
        self.studies = [StudyRecord(**s) for s in st["studies"]]
        self.lessons = st["lessons"]
        self.budget_left = st["budget_left"]
        self.datasets = st.get("datasets", [])
        self.leads = st.get("leads", [])
        self.meter = st.get("meter", {})
