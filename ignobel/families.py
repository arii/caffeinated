"""Mother agents and their daughter labs.

A mother is a department (biology, chemistry, physics). It does no research itself: it starts
the run with the daughter labs in families.yaml and, when its daughters' mean boredom reaches
`spawn_threshold`, spawns a new daughter in a subfield none of them covers. Each daughter is an
ordinary Agent with its own expertise, private dataset and boredom meter.
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
    def __init__(self, name: str, field: str, daughters: list[DaughterDef]):
        self.name, self.field = name, field
        self.initial = daughters
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

    def propose_daughter(self, round: int, daughters: list, seed: int, taken: set[str]):
        """One LLM call -> (DaughterDef, LLMResult). Falls back to a generic lab if the reply is unusable."""
        lines = []
        for d in daughters:
            recent = "; ".join(i.title for i in d.ideas[-3:]) or "no ideas yet"
            lines.append(f"- {d.name} ({d.spec.field}): recent ideas: {recent}")
        user = (
            f"Your daughter labs are bored; their ideas keep repeating:\n" + "\n".join(lines) + "\n"
            f"Start one new daughter lab in a subfield of {self.field} that none of them covers. "
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


def _to_daughter(data: dict, mother: Mother, taken: set[str]) -> DaughterDef:
    k = mother.spawned + 1
    name = re.sub(r"[^a-z0-9]+", "", str(data.get("name", "")).lower())[:20] or f"{mother.name}{k}"
    while name in taken:
        name = f"{name}{k}"
    cols = []
    for raw in data.get("instruments") or []:
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
    queries = [str(q) for q in (data.get("seed_queries") or []) if str(q).strip()][:3]
    field = str(data.get("field") or f"{mother.field} ({name})")
    return DaughterDef(name=name, field=field, seed_queries=queries or [f"funny {field} research"],
                       methods=[str(m) for m in (data.get("methods") or [])][:4], instruments=cols[:4])


def load(path: str | Path = HERE / "families.yaml") -> list[Mother]:
    with open(path, encoding="utf-8") as f:
        raw = yaml.safe_load(f)["mothers"]
    return [Mother(m["name"], m["field"], [DaughterDef(**d) for d in m["daughters"]]) for m in raw]


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


def initial_specs(mothers: list[Mother], data_dir: Path, run_seed: int, n: int | None = None) -> list[AgentSpec]:
    """Starting daughters, interleaved across mothers so --agents N keeps every department."""
    order = []
    for i in range(max(len(m.initial) for m in mothers)):
        order += [(m, m.initial[i]) for m in mothers if i < len(m.initial)]
    order = order[:n] if n else order
    specs = []
    for m, d in order:
        m.daughters.append(d.name)
        specs.append(to_spec(d, m, data_dir, run_seed))
    return specs
