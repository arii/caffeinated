import subprocess

import numpy as np
import pytest

import agents
import lab
import stats
from conftest import requires_sandbox
from memory import LocalMemory


def _agent(name):
    spec = next(s for s in agents.load_specs() if s.name == name)
    return agents.Agent(spec, LocalMemory(), {})


GOOD = """
from lab_runtime import instruments, instrument, report
names = instruments()
a = instrument(names[0])
b = instrument(names[1])
report(a, b, direction='+', effect_size=0.4)
"""


@requires_sandbox
def test_run_study_mock_ok_and_budget(tmp_path):
    a = _agent("quill")
    out = lab.run_study(GOOD, a, plot_path=tmp_path / "p.svg")
    assert out["ok"] and out["calls"] == 2 and a.budget_left == 4
    assert out["stats"]["kind"] == "two_group" and (tmp_path / "p.svg").exists()


@requires_sandbox
def test_run_study_budget_exceeded():
    a = _agent("quill")
    a.budget_left = 1
    out = lab.run_study(GOOD, a)
    assert not out["ok"] and "BudgetExceeded" in out["stderr"] and a.budget_left == 0


@requires_sandbox
def test_run_study_crash_reports_stderr():
    a = _agent("quill")
    out = lab.run_study("raise ValueError('boom')", a)
    assert not out["ok"] and "boom" in out["stderr"] and out["stats"] is None


@requires_sandbox
def test_run_study_timeout_with_output_is_a_failed_study(monkeypatch):
    monkeypatch.setattr(lab, "TIMEOUT_S", 5)
    a = _agent("quill")
    code = "import sys, time\nprint('@@CALLS 1', flush=True)\nprint('err', file=sys.stderr, flush=True)\ntime.sleep(60)"
    out = lab.run_study(code, a)
    assert not out["ok"] and out["calls"] == 1 and "timeout" in out["stderr"] and a.budget_left == 5
    left = subprocess.run(["docker", "ps", "-aq", "--filter", "name=ignobel-study-"], capture_output=True, text=True)
    assert left.stdout.strip() == ""


@requires_sandbox
def test_sandbox_cannot_read_host_files():
    host_file = lab.HERE / "agents.yaml"
    code = (f"from lab_runtime import report\ntry:\n    open({str(host_file)!r}).read()\nexcept OSError:\n"
            "    report([1,2,3],[4,5,6],'+',1)\nelse:\n    raise SystemExit('read a host file')")
    assert lab.run_study(code, _agent("quill"))["ok"]


@requires_sandbox
def test_sandbox_has_no_network():
    code = ("import socket\nfrom lab_runtime import report\ntry:\n"
            "    socket.create_connection(('1.1.1.1', 53), timeout=3)\nexcept OSError:\n"
            "    report([1,2,3],[4,5,6],'+',1)\nelse:\n    raise SystemExit('reached the network')")
    assert lab.run_study(code, _agent("quill"))["ok"]


@requires_sandbox
def test_study_exit_125_is_a_failed_study():
    out = lab.run_study("raise SystemExit(125)", _agent("quill"))
    assert not out["ok"] and out["stats"] is None


@requires_sandbox
def test_interrupted_study_container_is_removed(monkeypatch):
    real_run = lab.subprocess.run

    def run(cmd, *a, **kw):
        if cmd[1] == "start":
            raise KeyboardInterrupt
        return real_run(cmd, *a, **kw)

    monkeypatch.setattr(lab.subprocess, "run", run)
    with pytest.raises(KeyboardInterrupt):
        lab.run_study(GOOD, _agent("quill"))
    left = real_run(["docker", "ps", "-aq", "--filter", "name=ignobel-study-"], capture_output=True, text=True)
    assert left.stdout.strip() == ""


@requires_sandbox
def test_sandbox_start_failure_is_not_a_study(monkeypatch):
    real_run = lab.subprocess.run

    def run(cmd, *a, **kw):
        if cmd[1] == "create":
            cmd = [c if c != "python" else "/no/such/python" for c in cmd]
        return real_run(cmd, *a, **kw)

    monkeypatch.setattr(lab.subprocess, "run", run)
    with pytest.raises(lab.SandboxUnavailable):
        lab.run_study(GOOD, _agent("quill"))
    left = real_run(["docker", "ps", "-aq", "--filter", "name=ignobel-study-"], capture_output=True, text=True)
    assert left.stdout.strip() == ""


def test_no_sandbox_means_no_study(monkeypatch):
    monkeypatch.setattr(lab.shutil, "which", lambda _: None)
    with pytest.raises(lab.SandboxUnavailable):
        lab.run_study(GOOD, _agent("quill"))


@requires_sandbox
def test_sandbox_env_has_no_keys(monkeypatch):
    monkeypatch.setenv("OPENAI_API_KEY", "sk-secret")
    a = _agent("quill")
    code = "import os\nfrom lab_runtime import report\nassert 'OPENAI_API_KEY' not in os.environ\nreport([1,2,3],[4,5,6],'+',1)"
    assert lab.run_study(code, a)["ok"]


@requires_sandbox
def test_request_measurement_charges_owner_and_feeds_statistician():
    v, q = _agent("volkov"), _agent("quill")
    m1 = lab.request_measurement(v, q, {"instrument": "cups_per_hour", "args": {}})
    m2 = lab.request_measurement(v, q, {"instrument": "task_minutes", "args": {"limit": 40}})
    assert q.budget_left == 4 and m1["n"] == 80 and m2["n"] == 40 and m1["requester"] == "volkov"
    with pytest.raises(KeyError):
        lab.request_measurement(v, q, {"instrument": "nope"})
    code = "from lab_runtime import measurement, report_corr\nx=measurement(0)\ny=measurement(1)\nm=min(len(x),len(y))\nreport_corr(x[:m],y[:m],'-',0.3)"
    out = lab.run_study(code, v, measurements=[m1["data"], m2["data"]])
    assert out["ok"] and out["stats"]["kind"] == "corr" and out["calls"] == 0


def test_check_strong_effect_replicates():
    rng = np.random.default_rng(0)
    res = {"kind": "two_group", "group_a": list(rng.normal(2, 1, 40)), "group_b": list(rng.normal(0, 1, 40))}
    v = stats.check(res, n_studies_on_dataset=1)
    assert v["replicated"] and v["direction"] == "+" and v["effect_size"] > 1


def test_check_noise_fails_and_alpha_divides():
    rng = np.random.default_rng(1)
    res = {"kind": "two_group", "group_a": list(rng.normal(0, 1, 40)), "group_b": list(rng.normal(0, 1, 40))}
    v = stats.check(res, n_studies_on_dataset=4)
    assert not v["replicated"] and v["alpha_eff"] == pytest.approx(0.0125)
    assert stats.check(None, 1)["reason"] == "no result"


def test_check_too_small():
    v = stats.check({"kind": "corr", "x": [1, 2, 3], "y": [1, 2, 3]}, 1)
    assert not v["replicated"] and "too few" in v["reason"]


class _FakeStream:
    def __init__(self, text):
        self.text = text

    def read(self):
        return self.text


def _fake_modal(monkeypatch, timeout=False, returncode=0):
    import sys
    import types
    calls = {"terminated": False}

    class Sandbox:
        stdout, stderr = _FakeStream("out"), _FakeStream("err")

        @classmethod
        def create(cls, *args, **kw):
            calls["create"] = (args, kw)
            return cls()

        def wait(self):
            if timeout:
                raise SandboxTimeoutError()

        @property
        def returncode(self):
            return returncode

        def terminate(self):
            calls["terminated"] = True

    class SandboxTimeoutError(TimeoutError):
        pass

    image = types.SimpleNamespace(add_local_dir=lambda *a, **k: "image")
    modal = types.SimpleNamespace(
        App=types.SimpleNamespace(lookup=lambda *a, **k: "app"),
        Image=types.SimpleNamespace(debian_slim=lambda **k: image),
        Sandbox=Sandbox)
    exc = types.SimpleNamespace(SandboxTimeoutError=SandboxTimeoutError)
    monkeypatch.setitem(sys.modules, "modal", modal)
    monkeypatch.setitem(sys.modules, "modal.exception", exc)
    return calls


def test_modal_sandbox_has_no_network_and_is_terminated(monkeypatch, tmp_path):
    calls = _fake_modal(monkeypatch, returncode=3)
    assert lab._run_modal(tmp_path) == ("out", "err", 3)
    assert calls["create"][1]["block_network"] is True and calls["terminated"]


def test_modal_timeout_is_a_failed_study(monkeypatch, tmp_path):
    calls = _fake_modal(monkeypatch, timeout=True)
    out, err, rc = lab._run_modal(tmp_path)
    assert rc == 124 and err.endswith("timeout") and calls["terminated"]
