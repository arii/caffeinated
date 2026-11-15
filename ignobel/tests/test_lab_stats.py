import numpy as np
import pytest

import agents
import lab
import stats
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


def test_run_study_mock_ok_and_budget(tmp_path):
    a = _agent("quill")
    out = lab.run_study(GOOD, a, plot_path=tmp_path / "p.svg")
    assert out["ok"] and out["calls"] == 2 and a.budget_left == 4
    assert out["stats"]["kind"] == "two_group" and (tmp_path / "p.svg").exists()


def test_run_study_budget_exceeded():
    a = _agent("quill")
    a.budget_left = 1
    out = lab.run_study(GOOD, a)
    assert not out["ok"] and "BudgetExceeded" in out["stderr"] and a.budget_left == 0


def test_run_study_crash_reports_stderr():
    a = _agent("quill")
    out = lab.run_study("raise ValueError('boom')", a)
    assert not out["ok"] and "boom" in out["stderr"] and out["stats"] is None


def test_sandbox_env_has_no_keys(monkeypatch):
    monkeypatch.setenv("OPENAI_API_KEY", "sk-secret")
    a = _agent("quill")
    code = "import os\nfrom lab_runtime import report\nassert 'OPENAI_API_KEY' not in os.environ\nreport([1,2,3],[4,5,6],'+',1)"
    assert lab.run_study(code, a)["ok"]


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


def test_timeout_with_partial_output_is_a_failed_study(monkeypatch):
    """TimeoutExpired hands back bytes even in text mode; the study must fail cleanly, not crash the run."""
    monkeypatch.setattr(lab, "TIMEOUT_S", 1)
    a = _agent("quill")
    code = ("import sys, time\nfrom lab_runtime import instruments, instrument\n"
            "instrument(instruments()[0])\nsys.stderr.write('still going\\n'); sys.stderr.flush()\n"
            "time.sleep(30)\n")
    out = lab.run_study(code, a)
    assert not out["ok"] and out["stats"] is None
    assert out["calls"] == 1 and a.budget_left == 5
    assert "timeout" in out["stderr"] and "still going" in out["stderr"]
