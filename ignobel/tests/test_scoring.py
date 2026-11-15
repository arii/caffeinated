"""Committee, scoring, validation, and the rule that no judge output ever reaches an agent prompt."""
import ast
import asyncio
import json
from pathlib import Path

import committee
import run_arm
import score
import validate
import llm

ROOT = Path(__file__).resolve().parents[1]
RUN_SIDE = ["world.py", "agents.py", "memory.py", "boredom.py", "policy.py", "lab.py", "search.py", "seed.py", "run_arm.py"]
JUDGE_SIDE = {"committee", "score", "validate"}


def _imports(path: Path) -> set[str]:
    tree = ast.parse(path.read_text(encoding="utf-8"))
    names = set()
    for node in ast.walk(tree):
        if isinstance(node, ast.Import):
            names |= {a.name.split(".")[0] for a in node.names}
        elif isinstance(node, ast.ImportFrom) and node.module:
            names.add(node.module.split(".")[0])
    return names


def test_run_side_never_imports_judges():
    for f in RUN_SIDE:
        assert not (_imports(ROOT / f) & JUDGE_SIDE), f"{f} imports a judge module"


def test_score_study_shape_and_min_rule():
    v = committee.score_study("We dropped toast 400 times.", "Toast")
    assert set(v) >= {"laugh_a", "think_a", "laugh_b", "think_b", "score", "rejected", "reason"}
    if not v["rejected"]:
        assert v["score"] == min(v["laugh_a"], v["think_a"], v["laugh_b"], v["think_b"])
    else:
        assert v["score"] == 0


def test_group_joke_is_rejected(monkeypatch):
    def fake(abstract, title, which, seed=0):
        return {"laugh": 9, "think": 9, "targets_group": which == "b", "reason": "", "model": "m", "tokens": 1, "latency_ms": 0}
    monkeypatch.setattr(committee, "judge", fake)
    v = committee.score_study("x")
    assert v["rejected"] and v["score"] == 0


def test_score_py_writes_scores_jsonl(tmp_path):
    out = tmp_path / "run"
    world = run_arm.build_world("full", 4, 0, out, roster="flat")
    asyncio.run(world.run(2))
    rows = score.score_events(out / "events.jsonl")
    lines = (out / "scores.jsonl").read_text().splitlines()
    assert rows and len(lines) == len(rows)
    r = json.loads(lines[0])
    assert {"study_id", "round", "agent", "score", "rejected"} <= set(r)


def test_judge_output_never_in_agent_prompts(tmp_path):
    """Plant a canary in a judge verdict, run the world with a prompt log, assert the canary never appears."""
    canary = "CANARY-JUDGE-7f3a9"
    out = tmp_path / "run"
    out.mkdir()
    (out / "scores.jsonl").write_text(json.dumps({"study_id": "x", "score": 9, "reason": canary}) + "\n")
    llm.set_prompt_log(out / "prompts.jsonl")
    try:
        world = run_arm.build_world("full", 4, 0, out, roster="flat")
        asyncio.run(world.run(3))
    finally:
        llm.set_prompt_log(None)
    prompts = (out / "prompts.jsonl").read_text()
    assert canary not in prompts
    for word in ("laugh", "committee", "judge"):
        for line in prompts.splitlines():
            rec = json.loads(line)
            assert word not in rec["user"].lower(), f"{word!r} leaked into an agent prompt"


def test_validate_runs_on_bundled_csvs():
    rep = validate.validate(ROOT / "data" / "winners.csv", ROOT / "data" / "controls.csv")
    assert rep["n_pairs"] == 3
    assert set(rep["summary"]) == {"a", "b", "combined"}
    assert set(rep["summary"]["a"]) == {"<=2018", "2019-2025", "2026"}
    assert validate.bucket(2018) == "<=2018" and validate.bucket(2019) == "2019-2025" and validate.bucket(2026) == "2026"
