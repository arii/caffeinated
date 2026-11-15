"""Mother agents and their daughter labs.

A mother is a department (biology, chemistry, physics). It does no research itself. A run starts
with only the mothers: they talk, then each founds daughter labs in subfields it picks. When its
daughters' mean boredom reaches `spawn_threshold`, a mother founds another daughter in a subfield
none of them covers. Each daughter is an ordinary Agent with its own expertise, private dataset
and boredom meter.
"""
import csv
import hashlib
import json
import re
from pathlib import Path

import numpy as np
import yaml
from pydantic import BaseModel, Field, field_validator

import llm
from agents import GOAL, AgentSpec, Instrument

HERE = Path(__file__).parent
ROWS = 80


class Column(BaseModel):
    name: str
    description: str = ""
    mean: float = 0.0
    sd: float = 1.0
    depends_on: dict[str, float] = Field(default_factory=dict)

    @field_validator("name")
    @classmethod
    def _snake(cls, v: str) -> str:
        v = re.sub(r"[^a-z0-9_]+", "_", str(v).strip().lower()).strip("_")
        if not v:
            raise ValueError("empty column name")
        return v[:40]


class DaughterDef(BaseModel):
    name: str
    field: str
    seed_queries: list[str]
    methods: list[str] = Field(default_factory=list)
    instruments: list[Column]
    budget_per_round: int = 6


class Mother:
    def __init__(self, name: str, field: str):
        self.name, self.field = name, field
        self.daughters: list[str] = []  # names of living daughter agents
        self.spawned = 0
        self.last_spawn_round = -10**6

    def to_state(self) -> dict:
        return {"daughters": self.daughters, "spawned": self.spawned, "last_spawn_round": self.last_spawn_round}

    def load_state(self, st: dict) -> None:
        self.daughters = list(st["daughters"])
        self.spawned = int(st["spawned"])
        self.last_spawn_round = int(st["last_spawn_round"])

    def system_prompt(self) -> str:
        return (f"You head the {self.field} department of a research institute. {GOAL} "
                "You do no research yourself; you start new daughter labs, each a specialist "
                f"in one subfield of {self.field}.")

    def talk(self, others: list[str], history: list[str], seed: int):
        """One turn in the mothers' opening meeting. No agenda: whatever is on this mother's mind."""
        hist = "\n".join(history[-6:]) or "(nobody has spoken yet)"
        user = (f"You are meeting the heads of the {', '.join(others)} departments over coffee. "
                f"Nothing is on the agenda.\nSo far:\n{hist}\n"
                "Say what is on your mind in 2-3 sentences: something that puzzles you, something you "
                "would like to ask them, or a reply to what was said. Return JSON {text}.")
        res = llm.chat_json(llm.MODEL_CHEAP, self.system_prompt(), user, kind="talk", seed=seed,
                            mock_context={"topic": f"{self.field} and its neighbours"})
        return str(res.data.get("text", "")), res

    def propose_daughter(self, round: int, daughters: list, seed: int, taken: set[str],
                         meeting: list[str] | None = None):
        """One LLM call -> (DaughterDef, LLMResult). Falls back to a generic lab if the reply is unusable.

        With `meeting` (the opening conversation) this founds a lab; otherwise the daughters are bored."""
        lines = []
        for d in daughters:
            recent = "; ".join(i.title for i in d.ideas[-3:]) or "no ideas yet"
            lines.append(f"- {d.name} ({d.spec.field}): recent ideas: {recent}")
        labs = "\n".join(lines) or "- none yet"
        if meeting is not None:
            why = ("You just talked with the other department heads:\n" + "\n".join(meeting) + "\n"
                   f"Your daughter labs so far:\n{labs}\n"
                   f"Found one new daughter lab in a subfield of {self.field} of your choosing, "
                   "different from the labs you already have. ")
        else:
            why = (f"Your daughter labs are bored; their ideas keep repeating:\n{labs}\n"
                   f"Start one new daughter lab in a subfield of {self.field} that none of them covers. ")
        user = (
            why +
            "Return JSON with keys: name (one lowercase word, a scientist's surname), field, "
            "seed_queries (3 web search queries), methods (3-4), instruments (3-4 items). "
            "Instruments are what the lab can measure; each is {name (snake_case), description (with unit), "
            "mean, sd, depends_on: {earlier_instrument_name: correlation between -0.9 and 0.9}}. "
            "depends_on is hidden ground truth for the lab's private data; leave some instruments unrelated."
        )
        res = llm.chat_json(llm.MODEL_STRONG, self.system_prompt(), user, kind="spawn", seed=seed,
                            max_tokens=1500, mock_context={"field": self.field, "round": round,
                                                           "spawned": self.spawned})
        return _to_daughter(res.data, self, taken), res


def _items(x) -> list:
    return x if isinstance(x, list) else []


def _to_daughter(data: dict, mother: Mother, taken: set[str]) -> DaughterDef:
    data = data if isinstance(data, dict) else {}
    k = mother.spawned + 1
    name = re.sub(r"[^a-z0-9]+", "", str(data.get("name", "")).lower())[:20] or f"{mother.name}{k}"
    while name in taken:
        name = f"{name}{k}"
    cols = []
    for raw in _items(data.get("instruments")):
        try:
            c = Column(**raw) if isinstance(raw, dict) else None
        except (TypeError, ValueError):
            c = None
        if c is not None and c.name not in {x.name for x in cols}:
            cols.append(c)
    if len(cols) < 2:
        cols = [Column(name="treatment", description="strength of the manipulation", mean=1, sd=0.5),
                Column(name="response", description="measured response", mean=10, sd=3,
                       depends_on={"treatment": 0.3}),
                Column(name="nuisance", description="an unrelated reading", mean=0, sd=1)]
    queries = [str(q) for q in _items(data.get("seed_queries")) if str(q).strip()][:3]
    field = str(data.get("field") or f"{mother.field} ({name})")
    return DaughterDef(name=name, field=field, seed_queries=queries or [f"funny {field} research"],
                       methods=[str(m) for m in _items(data.get("methods"))][:4], instruments=cols[:4])


def load(path: str | Path = HERE / "families.yaml") -> list[Mother]:
    with open(path, encoding="utf-8") as f:
        raw = yaml.safe_load(f)["mothers"]
    return [Mother(m["name"], m["field"]) for m in raw]


def make_dataset(cols: list[Column], path: Path, seed_text: str, rows: int = ROWS) -> None:
    """Write the daughter's private CSV. Same columns and seed_text give the same file."""
    rng = np.random.default_rng(int(hashlib.sha256(seed_text.encode()).hexdigest()[:8], 16))
    z: dict[str, np.ndarray] = {}
    out: dict[str, np.ndarray] = {}
    for c in cols:
        coefs = {p: float(np.clip(w, -0.9, 0.9)) for p, w in c.depends_on.items() if p in z}
        ss = sum(w * w for w in coefs.values())
        if ss > 0.81:  # keep the explained share below 81% so there is always noise
            scale = (0.81 / ss) ** 0.5
            coefs = {p: w * scale for p, w in coefs.items()}
            ss = 0.81
        zc = sum((w * z[p] for p, w in coefs.items()), np.zeros(rows)) + (1 - ss) ** 0.5 * rng.standard_normal(rows)
        z[c.name] = zc
        out[c.name] = np.round(c.mean + abs(c.sd) * zc, 4)
    path.parent.mkdir(parents=True, exist_ok=True)
    with open(path, "w", newline="", encoding="utf-8") as f:
        w = csv.writer(f)
        w.writerow([c.name for c in cols])
        for i in range(rows):
            w.writerow([out[c.name][i] for c in cols])


def to_spec(d: DaughterDef, mother: Mother, data_dir: Path, run_seed: int) -> AgentSpec:
    path = Path(data_dir) / f"{d.name}.csv"
    make_dataset(d.instruments, path, f"{run_seed}:{mother.name}:{d.name}:{json.dumps(d.model_dump(), sort_keys=True)}")
    return AgentSpec(name=d.name, field=d.field, family=mother.name, seed_queries=d.seed_queries,
                     dataset=str(path.resolve()), methods=d.methods, budget_per_round=d.budget_per_round,
                     instruments=[Instrument(name=c.name, column=c.name, description=c.description)
                                  for c in d.instruments])
