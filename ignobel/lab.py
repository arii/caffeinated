"""Run study code in a sandbox and serve measurement requests between labs.

Study code is written by agents and never runs on the host. Both modes: 120s timeout,
no network, no API keys, only the study's own files (and dataset copy) visible.
Mock mode: a local Docker container (read-only, no capabilities). Real mode: a Modal sandbox.
"""
import json
import os
import shutil
import subprocess
import tempfile
import uuid
from pathlib import Path

import llm

HERE = Path(__file__).parent
RUNTIME = HERE / "lab_runtime.py"
TIMEOUT_S = 120
SANDBOX_IMAGE = os.environ.get("IGNOBEL_SANDBOX_IMAGE", "python:3.11-slim")  # mock mode: stdlib is enough
SCI_IMAGE = "caffeinated-testcases:py311-v1"  # real mode: numpy, pandas, scipy (sandbox/Dockerfile,
SCI_PACKAGES = ("numpy==2.2.6", "pandas==2.2.3", "scipy==1.15.3")  # the autoresearch testcases image)
_built: set[str] = set()


def _image(docker: str) -> str:
    """Image for study containers. Real runs use the scientific image, built once from sandbox/Dockerfile."""
    if llm.MOCK or os.environ.get("IGNOBEL_SANDBOX_IMAGE"):
        return SANDBOX_IMAGE
    if SCI_IMAGE not in _built:
        if subprocess.run([docker, "image", "inspect", SCI_IMAGE], capture_output=True).returncode != 0:
            b = subprocess.run([docker, "build", "-t", SCI_IMAGE, str(HERE / "sandbox")], capture_output=True, text=True)
            if b.returncode != 0:
                raise SandboxUnavailable(f"could not build {SCI_IMAGE}: {b.stderr.strip()[-300:]}")
        _built.add(SCI_IMAGE)
    return SCI_IMAGE


def _sandbox() -> str:
    """IGNOBEL_SANDBOX=docker|modal; default Docker in mock mode, Modal in real mode."""
    choice = os.environ.get("IGNOBEL_SANDBOX") or ("docker" if llm.MOCK else "modal")
    if choice not in ("docker", "modal"):
        raise SandboxUnavailable(f"IGNOBEL_SANDBOX must be docker or modal, not {choice!r}")
    return choice


class SandboxUnavailable(RuntimeError):
    """No sandbox to run study code in; studies are never run on the host instead."""


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


def _run_docker(workdir: Path) -> tuple[str, str, int]:
    docker = shutil.which("docker")
    if docker is None:
        raise SandboxUnavailable("studies run in Docker, but `docker` is not on PATH")
    name = f"ignobel-study-{uuid.uuid4().hex[:12]}"
    create = [docker, "create", "--name", name,
              "--network", "none", "--read-only", "--tmpfs", "/tmp:size=16m",
              "--cap-drop", "ALL", "--security-opt", "no-new-privileges",
              "--memory", "512m", "--cpus", "1", "--pids-limit", "64",
              "--user", f"{os.getuid()}:{os.getgid()}",
              "-e", "PYTHONDONTWRITEBYTECODE=1", "-e", "OPENBLAS_NUM_THREADS=1", "-e", "OMP_NUM_THREADS=1",
              "-v", f"{workdir}:/work:ro", "-w", "/work",
              _image(docker), "python", "-E", "-s", "study.py"]
    c = subprocess.run(create, capture_output=True, text=True)
    if c.returncode != 0:  # docker failed before any study code ran (daemon down, bad image)
        raise SandboxUnavailable(f"docker could not create the sandbox: {c.stderr.strip()}")
    try:  # `start -a` exits with the study's own status
        p = subprocess.run([docker, "start", "-a", name], capture_output=True, text=True, timeout=TIMEOUT_S)
        err = subprocess.run([docker, "inspect", "--format", "{{.State.Error}}", name],
                             capture_output=True, text=True).stdout.strip()
    except subprocess.TimeoutExpired as e:
        return _text(e.stdout), _text(e.stderr) + "\ntimeout", 124
    finally:  # also on Ctrl-C: the container outlives the docker client otherwise
        _remove(docker, name)
    if err:  # the runtime failed to start the container, so no study code ran
        raise SandboxUnavailable(f"docker could not start the sandbox: {err}")
    return p.stdout, p.stderr, p.returncode


def _remove(docker: str, name: str) -> None:
    subprocess.run([docker, "rm", "-f", name], capture_output=True)


def _text(out: str | bytes | None) -> str:
    """TimeoutExpired carries bytes even with text=True."""
    if isinstance(out, bytes):
        return out.decode("utf-8", errors="replace")
    return out or ""


def _run_modal(workdir: Path) -> tuple[str, str, int]:
    import modal
    from modal.exception import SandboxTimeoutError
    app = modal.App.lookup("ignobel-lab", create_if_missing=True)
    image = (modal.Image.debian_slim(python_version="3.11").pip_install(*SCI_PACKAGES)
             .add_local_dir(str(workdir), remote_path="/work"))
    sb = modal.Sandbox.create("python", "-E", "-s", "/work/study.py", image=image, app=app,
                              timeout=TIMEOUT_S, block_network=True, workdir="/work")
    try:
        try:
            sb.wait()
        except SandboxTimeoutError:
            return sb.stdout.read(), sb.stderr.read() + "\ntimeout", 124
        rc = sb.returncode
        return sb.stdout.read(), sb.stderr.read(), 1 if rc is None else rc
    finally:  # also on Ctrl-C: don't leave a sandbox running (and billing) on Modal
        sb.terminate()


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
              plot_path: str | Path | None = None, datasets: list[tuple] | None = None) -> dict:
    """Execute study code for `agent`. Returns {ok, stats, plot_path, stderr, calls}.

    `stats` is the raw @@RESULT dict (groups or x/y plus the agent's prediction);
    stats.check() turns it into a verdict. Instrument calls are charged to agent.budget_left.
    `datasets` is [(name, csv path, [columns])]: real datasets the agent loaded, copied in read-only.
    """
    ds = dataset_path(agent)
    spec = {"dataset": str(ds) if ds else None,
            "instruments": {i.name: i.column for i in agent.spec.instruments},
            "budget": agent.budget_left, "measurements": measurements or []}
    workdir = Path(tempfile.mkdtemp(prefix="study_"))
    try:
        (workdir / "spec.json").write_text(json.dumps(spec), encoding="utf-8")
        shutil.copy(RUNTIME, workdir / "lab_runtime.py")
        if ds is not None:
            shutil.copy(ds, workdir / ds.name)  # the sandbox has no access to the host filesystem
            spec["dataset"] = f"/work/{ds.name}"
            (workdir / "spec.json").write_text(json.dumps(spec), encoding="utf-8")
        spec["datasets"] = {}
        for name, src, columns in datasets or []:
            shutil.copy(src, workdir / f"{name}.csv")
            spec["datasets"][name] = {"file": f"/work/{name}.csv", "columns": columns}
        (workdir / "spec.json").write_text(json.dumps(spec), encoding="utf-8")
        (workdir / "study.py").write_text(code, encoding="utf-8")
        stdout, stderr, rc = (_run_docker if _sandbox() == "docker" else _run_modal)(workdir)
    finally:
        shutil.rmtree(workdir, ignore_errors=True)
    result, calls = _parse(stdout)
    stderr = stderr.replace(str(workdir), "<sandbox>")  # keep temp paths out of the event log
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
