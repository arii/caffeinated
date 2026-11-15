"""Run study code in a sandbox and serve measurement requests between labs.

Mock mode: a subprocess in a temp dir with a scrubbed environment.
Real mode: a Modal sandbox, 120s timeout, no network, no API keys.
"""
import json
import os
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

import llm

HERE = Path(__file__).parent
RUNTIME = HERE / "lab_runtime.py"
TIMEOUT_S = 120


def _read_column(dataset, column, where=None, offset=0, limit=None):
    import csv
    with open(dataset, newline="", encoding="utf-8") as f:
        rows = list(csv.DictReader(f))
    if where:
        rows = [r for r in rows if all(str(r.get(k)) == str(v) for k, v in where.items())]
    vals = []
    for r in rows:
        try:
            vals.append(float(r[column]))
        except (KeyError, TypeError, ValueError):
            continue
    vals = vals[offset:]
    return vals[:limit] if limit else vals


def dataset_path(agent) -> Path | None:
    if agent.spec.dataset is None:
        return None
    p = Path(agent.spec.dataset)
    return p if p.is_absolute() else HERE / p


def _parse(stdout: str) -> tuple[dict | None, int]:
    result, calls = None, 0
    for line in stdout.splitlines():
        if line.startswith("@@CALLS "):
            calls = int(line.split()[1])
        elif line.startswith("@@RESULT "):
            try:
                result = json.loads(line[len("@@RESULT "):])
            except json.JSONDecodeError:
                result = None
    return result, calls


def _run_subprocess(workdir: Path) -> tuple[str, str, int]:
    env = {"PATH": os.environ.get("PATH", ""), "PYTHONDONTWRITEBYTECODE": "1"}  # no keys leak in
    try:
        p = subprocess.run([sys.executable, "-E", "-s", "study.py"], cwd=workdir, env=env,
                           capture_output=True, text=True, timeout=TIMEOUT_S)
        return p.stdout, p.stderr, p.returncode
    except subprocess.TimeoutExpired as e:
        return (e.stdout or ""), (e.stderr or "") + "\ntimeout", 124


def _run_modal(workdir: Path) -> tuple[str, str, int]:
    # TODO(modal docs): verify Sandbox.create kwargs, add_local_dir, and stdout/stderr reads.
    import modal
    app = modal.App.lookup("ignobel-lab", create_if_missing=True)
    image = modal.Image.debian_slim(python_version="3.11").add_local_dir(str(workdir), remote_path="/work")
    sb = modal.Sandbox.create("python", "-E", "-s", "/work/study.py", image=image, app=app,
                              timeout=TIMEOUT_S, block_network=True, workdir="/work")
    sb.wait()
    return sb.stdout.read(), sb.stderr.read(), sb.returncode or 0


def _svg_plot(result: dict, path: Path) -> None:
    """A tiny dependency-free plot so every study has a picture."""
    w, h = 320, 200
    parts = [f'<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}">',
             f'<rect width="{w}" height="{h}" fill="white"/>']
    if result["kind"] == "two_group":
        means = [sum(g) / len(g) if g else 0 for g in (result["group_a"], result["group_b"])]
        top = max(abs(m) for m in means) or 1
        for i, m in enumerate(means):
            bh = 120 * abs(m) / top
            parts.append(f'<rect x="{80 + i * 120}" y="{160 - bh}" width="60" height="{bh}" fill="#4a7"/>')
            parts.append(f'<text x="{110 + i * 120}" y="180" text-anchor="middle" font-size="12">{"AB"[i]} {m:.2f}</text>')
    else:
        xs, ys = result["x"], result["y"]
        if xs and ys:
            xmin, xmax = min(xs), max(xs) or 1
            ymin, ymax = min(ys), max(ys) or 1
            for x, y in zip(xs, ys):
                px = 20 + 280 * (x - xmin) / ((xmax - xmin) or 1)
                py = 180 - 160 * (y - ymin) / ((ymax - ymin) or 1)
                parts.append(f'<circle cx="{px:.1f}" cy="{py:.1f}" r="2.5" fill="#47a"/>')
    parts.append("</svg>")
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text("\n".join(parts), encoding="utf-8")


def run_study(code: str, agent, measurements: list[list[float]] | None = None,
              plot_path: str | Path | None = None) -> dict:
    """Execute study code for `agent`. Returns {ok, stats, plot_path, stderr, calls}.

    `stats` is the raw @@RESULT dict (groups or x/y plus the agent's prediction);
    stats.check() turns it into a verdict. Instrument calls are charged to agent.budget_left.
    """
    ds = dataset_path(agent)
    spec = {"dataset": str(ds) if ds else None,
            "instruments": {i.name: i.column for i in agent.spec.instruments},
            "budget": agent.budget_left, "measurements": measurements or []}
    workdir = Path(tempfile.mkdtemp(prefix="study_"))
    try:
        (workdir / "spec.json").write_text(json.dumps(spec), encoding="utf-8")
        shutil.copy(RUNTIME, workdir / "lab_runtime.py")
        if ds is not None and not llm.MOCK:
            shutil.copy(ds, workdir / ds.name)  # the sandbox has no access to the host filesystem
            spec["dataset"] = f"/work/{ds.name}"
            (workdir / "spec.json").write_text(json.dumps(spec), encoding="utf-8")
        (workdir / "study.py").write_text(code, encoding="utf-8")
        stdout, stderr, rc = (_run_subprocess if llm.MOCK else _run_modal)(workdir)
    finally:
        shutil.rmtree(workdir, ignore_errors=True)
    result, calls = _parse(stdout)
    agent.budget_left = max(0, agent.budget_left - calls)
    ok = rc == 0 and result is not None
    out_plot = None
    if ok and plot_path:
        _svg_plot(result, Path(plot_path))
        out_plot = str(plot_path)
    if not ok and not stderr:
        stderr = "no @@RESULT line printed"
    return {"ok": ok, "stats": result, "plot_path": out_plot, "stderr": stderr[-2000:], "calls": calls}


def request_measurement(requester, owner, spec: dict) -> dict:
    """Owner runs one of its instruments for the requester, spending the owner's budget.

    spec = {instrument, args: {where, offset, limit}}. Returns the measurement_request payload
    (data included); the caller emits the event under the owner's name.
    """
    name = spec.get("instrument")
    inst = next((i for i in owner.spec.instruments if i.name == name), None)
    if inst is None:
        raise KeyError(f"{owner.name} has no instrument {name!r}")
    if owner.budget_left <= 0:
        raise RuntimeError(f"{owner.name} has no budget left this round")
    owner.budget_left -= 1
    args = spec.get("args") or {}
    data = _read_column(dataset_path(owner), inst.column, args.get("where"), int(args.get("offset", 0) or 0),
                        args.get("limit"))
    return {"requester": requester.name, "instrument": name, "args": args, "n": len(data),
            "budget_left": owner.budget_left, "data": data}
