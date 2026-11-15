"""Score partial (402-stopped) arms at a matched budget using only rounds completed before the cutoff.

Run from the repo root: python experiments/confirmatory/truncated.py (writes /tmp/truncated.json)."""

import json
import re
import subprocess
import sys
from pathlib import Path

sys.path.insert(0, "testcases/bixbench_numeric")
import evaluate as ev

R = Path("results")
LLMF = re.compile(r"^round (\d+): \S+ LLM call failed", re.M)


def best_through(arm_dir, last_round):
    run = arm_dir / "run"
    best = None
    for line in (run / "ledger.jsonl").read_text().splitlines():
        e = json.loads(line)
        kept = e.get("kind") == "candidate" and e.get("status") == "keep"
        if kept and e["round"] <= last_round and (best is None or e["score"] < best["score"]):
            best = e
    if best is None:
        first = (run / "results.tsv").read_text().splitlines()[1]
        c, loss = first.split("\t")[:2]
        best = {"commit": c, "score": float(loss), "round": 0}
    return best


def lost(arm_dir, last_round):
    n = 0
    for f in ("stderr.log", "stderr.resume.log"):
        p = arm_dir / f
        if p.exists():
            n += sum(int(r) <= last_round for r in LLMF.findall(p.read_text(errors="replace")))
    return n


def ck(d):
    return json.loads((d / "run/resume_checkpoint.json").read_text())["round"]


out = {"hadamard29": {}, "bixbench_guard2": {}}
H = {
    2001: ("conf-hadamard29-r2", "conf-hadamard29-r2"),
    2002: ("conf-hadamard29-r2", "conf-hadamard29-r2-s2002B"),
    2003: ("conf-hadamard29-r2-s2003-fresh",) * 2,
}
for seed, (da, db) in H.items():
    a = R / da / f"hadamard29/seed-{seed}/A"
    b = R / db / f"hadamard29/seed-{seed}/B"
    common = min(ck(a), ck(b))
    row = {"common_round": common, "clean_rounds": {"A": ck(a), "B": ck(b)}}
    for arm, d in (("A", a), ("B", b)):
        row[arm] = {
            "loss_at_common": best_through(d, common)["score"],
            "loss_at_clean": best_through(d, ck(d))["score"],
            "lost_slots_in_common": lost(d, common),
        }
    out["hadamard29"][seed] = row
    print("H", seed, json.dumps(row))
qtext = (Path("testcases/bixbench_numeric") / "questions.json").read_text()
held = json.loads(Path("testcases/bixbench_numeric/.cache/heldout_answers.json").read_text())
for seed in (3001, 3002, 3003):
    dirs = {
        arm: R / f"conf-bixbench-numeric-guard2/bixbench_numeric/seed-{seed}/{arm}" for arm in "ABS"
    }
    budget = min(4 * ck(dirs["A"]), 4 * ck(dirs["B"]), ck(dirs["S"]))
    row = {"candidate_budget": budget, "clean_rounds": {k: ck(v) for k, v in dirs.items()}}
    for arm, d in dirs.items():
        rnd = budget if arm == "S" else budget // 4
        b = best_through(d, rnd)
        src = subprocess.run(
            [
                "git",
                "-C",
                str(d / "repo"),
                "show",
                f"{b['commit']}:testcases/bixbench_numeric/analysis.py",
            ],
            capture_output=True,
            text=True,
        ).stdout
        g = ev.evaluate_source(src, answers_file=".cache/heldout_answers.json")
        u = ev.evaluate_source(src, answers_file=".cache/heldout_answers.json", literal_guard=False)
        row[arm] = {
            "round": rnd,
            "dev_loss": b["score"],
            "heldout_acc": g["score"],
            "heldout_status": g["status"],
            "heldout_unguarded_acc": u["score"],
            "held_literals": ev.answer_literal_qids(src, held, qtext),
            "lost_slots": lost(d, rnd),
        }
    out["bixbench_guard2"][seed] = row
    print("G", seed, json.dumps(row))
Path("/tmp/truncated.json").write_text(json.dumps(out, indent=1))
