#!/usr/bin/env python3
"""Read an ignobel events.jsonl as a shared Boredom Meter ledger (boredom_meter/meter.py).

One ledger attempt per study_result: the descriptor of the idea it tested, status crash /
not_replicated / keep, and score = prediction-vs-result gap for replicated studies.

  python meter_adapter.py runs/full-s0/events.jsonl status [--agent quill]
  python meter_adapter.py runs/full-s0/events.jsonl gate --descriptor '{"mechanism": ..., "method": ...}'
"""
import argparse
import json
from pathlib import Path

import boredom
import events
import meter_profile
from agents import Prediction


def ledger(path: str | Path) -> list[dict]:
    descriptors, out = {}, []
    for e in events.read(path):
        if e.type == "idea" and e.payload.get("descriptor"):
            descriptors[e.payload["idea_id"]] = e.payload["descriptor"]
        elif e.type == "study_result" and e.payload.get("idea_id") in descriptors:
            p = e.payload
            st = p.get("stats") or {}
            status = "crash" if not p["ok"] else ("keep" if p["replicated"] else "not_replicated")
            score = None
            if status == "keep":
                score = round(boredom.gap(Prediction(**p["prediction"]), st.get("effect_size"), st.get("direction")), 6)
            out.append({"seq": len(out) + 1, "agent": e.agent, "round": e.round, "status": status, "score": score,
                        "descriptor": descriptors[p["idea_id"]], "study_id": p["study_id"]})
    return out


def main(argv=None) -> int:
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("events")
    p.add_argument("cmd", choices=["status", "fold", "gate", "suggest", "ledger"])
    p.add_argument("--agent")
    p.add_argument("--descriptor", help="gate: JSON descriptor of the candidate")
    p.add_argument("--profile", default=str(meter_profile.DEFAULT_PROFILE))
    args = p.parse_args(argv)
    meter = meter_profile.shared_meter()
    prof = meter.load_profile(args.profile)
    led = ledger(args.events)
    if args.cmd == "ledger":
        out = led
    elif args.cmd == "status":
        out = meter.status(prof, led, args.agent)
    elif args.cmd == "fold":
        out = meter.fold(prof, led, args.agent)
    elif args.cmd == "suggest":
        out = meter.suggest(prof, led)
    else:
        out = meter.gate(prof, led, json.loads(args.descriptor), args.agent)
    print(json.dumps(out, indent=1))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
