"""Mother agents and their daughter labs.

A mother is a department (biology, chemistry, physics). It does no research itself. A run starts
with only the mothers: they talk, then each founds daughter labs in subfields it picks. When its
daughters' mean boredom reaches `spawn_threshold`, a mother founds another daughter in a subfield
none of them covers. Each daughter is an ordinary Agent with its own expertise and boredom meter.
A mother never hands a daughter data: daughters find real papers and real public datasets
themselves (sources.py).
"""
import re
from pathlib import Path

import yaml
from pydantic import BaseModel, Field

import llm
from agents import GOAL, AgentSpec

HERE = Path(__file__).parent


class DaughterDef(BaseModel):
    name: str
    field: str
    seed_queries: list[str]
    methods: list[str] = Field(default_factory=list)


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
            "seed_queries (3 literature search queries on real phenomena in that subfield), methods (3-4 "
            "real methods of that subfield). The lab will work only from published papers and public datasets."
        )
        res = llm.chat_json(llm.MODEL_STRONG, self.system_prompt(), user, kind="spawn", seed=seed,
                            max_tokens=900, mock_context={"field": self.field, "round": round,
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
    queries = [str(q) for q in _items(data.get("seed_queries")) if str(q).strip()][:3]
    field = str(data.get("field") or f"{mother.field} ({name})")
    return DaughterDef(name=name, field=field, seed_queries=queries or [f"funny {field} research"],
                       methods=[str(m) for m in _items(data.get("methods"))][:4])


def load(path: str | Path = HERE / "families.yaml") -> list[Mother]:
    with open(path, encoding="utf-8") as f:
        raw = yaml.safe_load(f)["mothers"]
    return [Mother(m["name"], m["field"]) for m in raw]


def to_spec(d: DaughterDef, mother: Mother) -> AgentSpec:
    return AgentSpec(name=d.name, field=d.field, family=mother.name, seed_queries=d.seed_queries, methods=d.methods)
