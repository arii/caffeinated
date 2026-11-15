"""The ignobel meter profile (boredom_meter/profiles/ignobel.json) and idea descriptors.

All meter weights and thresholds live in the profile JSON. The descriptor puts every idea
in the shared Boredom Meter's mechanism space so boredom_meter/meter.py can read ignobel runs.
"""
import json
import sys
from functools import lru_cache
from pathlib import Path

HERE = Path(__file__).parent
METER_DIR = HERE.parent / "boredom_meter"
DEFAULT_PROFILE = METER_DIR / "profiles" / "ignobel.json"
CROSS_FIELD = "cross-field"
NO_INSTRUMENT = "none"


@lru_cache(maxsize=None)
def _load(path: str) -> dict:
    with open(path, encoding="utf-8") as f:
        return json.load(f)


def load(path: str | Path | None = None) -> dict:
    """The full profile dict (cached; treat as read-only)."""
    return _load(str(Path(path) if path else DEFAULT_PROFILE))


def agent_meter(path: str | Path | None = None) -> dict:
    """The per-agent private meter section: window, patience, weights, thresholds, method families."""
    return load(path)["agent_meter"]


def shared_meter():
    """Import boredom_meter/meter.py (the shared fold/status/gate implementation)."""
    if str(METER_DIR) not in sys.path:
        sys.path.insert(0, str(METER_DIR))
    import meter
    return meter


def method_family(text: str, spec, prof: dict | None = None) -> str:
    """Map an idea's method text to a mechanism family from the profile vocabulary."""
    am = (prof or load())["agent_meter"]
    low = (text or "").lower()
    hits = [(low.find(m.lower()), fam) for m, fam in am["method_family"].items() if m.lower() in low]
    if hits:
        return min(hits)[1]
    for fam, words in am["family_keywords"].items():
        if any(w in low for w in words):
            return fam
    for m in spec.methods:
        if m in am["method_family"]:
            return am["method_family"][m]
    return am["default_family"]


def primary_instrument(text: str, spec) -> str:
    low = (text or "").lower()
    for inst in spec.instruments:
        if inst.name.lower() in low or inst.name.replace("_", " ").lower() in low:
            return inst.name
    return spec.instruments[0].name if spec.instruments else NO_INSTRUMENT


def describe(idea, spec, prof: dict | None = None) -> dict:
    """{mechanism, method, params, partner} for one idea; validates against the shared profile."""
    method_text = " ".join([idea.method or "", idea.text or ""])
    d = {"mechanism": method_family(idea.method or idea.text, spec, prof),
         "method": CROSS_FIELD if idea.cross_field else primary_instrument(method_text, spec),
         "params": {}, "partner": idea.partner}
    return d
