"""Append-only JSONL event log. One line per action, fixed field set."""
import json
from pathlib import Path
from typing import Iterator

from pydantic import BaseModel, field_validator

EVENT_TYPES = {
    "seed", "idea", "prediction", "boredom", "snap", "talk", "share",
    "measurement_request", "study_result", "lesson",
}


class Event(BaseModel):
    round: int
    arm: str
    seed: int
    agent: str
    type: str
    payload: dict
    tokens: int = 0
    latency_ms: int = 0

    @field_validator("type")
    @classmethod
    def _known_type(cls, v: str) -> str:
        if v not in EVENT_TYPES:
            raise ValueError(f"unknown event type {v!r}; allowed: {sorted(EVENT_TYPES)}")
        return v


class EventLog:
    """Writes events to `path`. Call append() with the Event fields."""

    def __init__(self, path: str | Path, arm: str, seed: int):
        self.path = Path(path)
        self.arm = arm
        self.seed = seed
        self.path.parent.mkdir(parents=True, exist_ok=True)
        self.count = 0

    def append(self, round: int, agent: str, type: str, payload: dict,
               tokens: int = 0, latency_ms: int = 0) -> Event:
        ev = Event(round=round, arm=self.arm, seed=self.seed, agent=agent, type=type,
                   payload=payload, tokens=tokens, latency_ms=latency_ms)
        with open(self.path, "a", encoding="utf-8") as f:
            f.write(json.dumps(ev.model_dump(), sort_keys=True) + "\n")
        self.count += 1
        return ev

    def size(self) -> int:
        """Bytes written so far; save this with a checkpoint and pass it to truncate() on resume."""
        return self.path.stat().st_size if self.path.exists() else 0

    def truncate(self, size: int) -> None:
        """Drop events written after a checkpoint (e.g. by a round that crashed)."""
        if self.path.exists() and self.path.stat().st_size > size:
            with open(self.path, "r+b") as f:
                f.truncate(size)


def read(path: str | Path) -> Iterator[Event]:
    """Yield events from a JSONL file."""
    with open(path, encoding="utf-8") as f:
        for line in f:
            if line.strip():
                yield Event(**json.loads(line))
