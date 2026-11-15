"""Replay the daughter-lab run into past.dev and record what each lab can read.

Every lab is a past.dev identity. A hypothesis has one stable source id: the proposal is
superseded by the study result. Department audiences hold ideas, results and lessons; a
per-lab inbox audience holds what other labs shared with it. The deck identity sees
everything, the outsider identity sees nothing.

  python3 daughters_demo.py run                  # ingest, read, delete demo -> results.json
  python3 daughters_demo.py read perkin "What did other labs share with me?" [--tag T]
  python3 daughters_demo.py cleanup --tag T
"""

import argparse
import gzip
import json
import sys
import time
import uuid
from datetime import datetime, timedelta, timezone
from pathlib import Path
from urllib.parse import quote

HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(HERE.parents[1]))
import memory  # noqa: E402

EVENTS = HERE / "daughters_events.jsonl.gz"
RESULTS = HERE / "results.json"
START = datetime(2026, 11, 15, 19, 0, tzinfo=timezone.utc)
ROUND = timedelta(minutes=10)
MOTHERS = ("biology", "chemistry", "physics")


def iso(t):
    return t.isoformat().replace("+00:00", "Z")


def when(round_num, step):
    return START + ROUND * round_num + timedelta(seconds=step)


def round_end(round_num):
    return iso(START + ROUND * (round_num + 1) - timedelta(seconds=1))


def load():
    with gzip.open(EVENTS, "rt") as handle:
        events = [json.loads(line) for line in handle]
    labs = {}
    for e in events:
        if e["type"] == "spawn":
            labs[e["payload"]["daughter"]] = e["agent"]
    for e in events:
        name = e["agent"]
        if name not in labs and name not in MOTHERS:
            labs[name] = next(m for m in MOTHERS if name.startswith(m))
    return events, labs


def ident(tag, name):
    return f"dl-{tag}-{name}"


def records(events, labs, tag):
    """Time-ordered past.dev writes derived from the run's events."""
    ideas, predictions, latest, out = {}, {}, {}, []
    for e in events:
        if e["type"] == "prediction":
            predictions[e["payload"]["idea_id"]] = e["payload"]
    for step, e in enumerate(events):
        lab, p, r = e["agent"], e["payload"], e["round"]
        if lab not in labs:
            continue
        dept = labs[lab]
        base = {"identity": ident(tag, lab), "timestamp": iso(when(r, step))}
        if e["type"] == "idea" and p.get("kind") == "propose":
            ideas[p["idea_id"]] = {"lab": lab, "title": p["title"], "round": r}
            pred = predictions.get(p["idea_id"]) or {}
            out.append(
                {
                    **base,
                    "id": ident(tag, f"hyp-{p['idea_id']}"),
                    "audience": ident(tag, f"dept-{dept}"),
                    "label": f"hypothesis {p['idea_id']}: proposed",
                    "content": (
                        f"Hypothesis {p['idea_id']} from lab {lab} ({dept} department), "
                        f"round {r}: {p['title']}\nHypothesis: {p['hypothesis']}\n"
                        f"Predicted effect size: {pred.get('direction', '?')}"
                        f"{pred.get('effect_size', '?')}.\nStatus: proposed, not tested yet."
                    ),
                }
            )
            latest[lab] = f"proposed {p['idea_id']} ({p['title']}), not tested yet"
        elif e["type"] == "study_result" and p.get("idea_id") in ideas:
            s, idea = p.get("stats") or {}, ideas[p["idea_id"]]
            if not p.get("ok") or s.get("effect_size") is None:
                verdict = "the study could not run on the data"
            elif p.get("replicated"):
                verdict = "replicated"
            else:
                verdict = "did not replicate"
            status = (
                f"tested in round {r}: {verdict}. Predicted "
                f"{p['prediction'].get('direction')}{p['prediction'].get('effect_size')}, "
                f"observed {s.get('effect_size')}, p={s.get('p')}, n={s.get('n')}"
            )
            out.append(
                {
                    **base,
                    "id": ident(tag, f"hyp-{p['idea_id']}"),
                    "audience": ident(tag, f"dept-{dept}"),
                    "label": f"hypothesis {p['idea_id']}: {verdict}",
                    "content": (
                        f"Hypothesis {p['idea_id']} from lab {idea['lab']} ({dept} department): "
                        f"{idea['title']}\nStatus: {status}.\n{(p.get('abstract') or '')[:700]}"
                    ),
                }
            )
            latest[lab] = f"{p['idea_id']} ({idea['title']}) was {status}"
        elif e["type"] == "lesson":
            out.append(
                {
                    **base,
                    "id": ident(tag, f"lesson-{lab}-r{r}-{step}"),
                    "audience": ident(tag, f"dept-{dept}"),
                    "label": f"lesson from {lab}",
                    "content": f"Lesson from lab {lab} after round {r}: {p['text']}",
                }
            )
        elif e["type"] == "share" and lab in latest and p.get("receiver") in labs:
            receiver = p["receiver"]
            out.append(
                {
                    **base,
                    "id": ident(tag, f"share-{lab}-{receiver}-r{r}"),
                    "audience": ident(tag, f"inbox-{receiver}"),
                    "label": f"{lab} shared with {receiver}",
                    "content": (
                        f"Lab {lab} ({dept} department) shared with lab {receiver} in round {r}: "
                        f"{latest[lab]}."
                    ),
                }
            )
    return out


def setup(tag, labs, key):
    names = list(labs) + list(MOTHERS) + ["deck", "outsider"]
    for name in names:
        traits = {"run": tag, "lab": name, "department": labs.get(name, name)}
        memory.api_request(
            "PUT", f"/identities/{quote(ident(tag, name))}", {"traits": traits}, api_key=key
        )
    for dept in MOTHERS:
        members = [ident(tag, n) for n, d in labs.items() if d == dept]
        members += [ident(tag, dept), ident(tag, "deck")]
        slug = ident(tag, f"dept-{dept}")
        memory.api_request(
            "PUT",
            f"/audiences/{quote(slug)}",
            {"kind": "fixed", "name": slug, "identities": members},
            api_key=key,
        )
    for lab in labs:
        slug = ident(tag, f"inbox-{lab}")
        memory.api_request(
            "PUT",
            f"/audiences/{quote(slug)}",
            {"kind": "fixed", "name": slug, "identities": [ident(tag, lab), ident(tag, "deck")]},
            api_key=key,
        )


def ingest(recs, key):
    pending = {}
    for rec in recs:
        if rec["id"] in pending:  # a status update waits for the version it supersedes
            memory.wait_for_ingestion(pending.pop(rec["id"]), True, api_key=key)
        resp = memory.api_request("POST", "/ingest", {**rec, "metadata": {}}, api_key=key)
        pending[rec["id"]] = resp
    for resp in pending.values():
        memory.wait_for_ingestion(resp, True, api_key=key)


def recall(tag, lab, query, key, at=None, limit=6):
    body = {"query": query, "identity": ident(tag, lab), "limit": limit}
    if at:
        body["queryTimestamp"] = at
    started = time.monotonic()
    resp = memory.api_request("POST", "/recall", body, api_key=key)
    results = []
    for r in resp.get("results") or []:
        results.append(
            {
                "content": r.get("content"),
                "occurredAt": r.get("occurredAt"),
                "supersededAt": (r.get("artifact") or {}).get("supersededAt"),
                "kind": (r.get("artifact") or {}).get("kind"),
                "sources": [
                    {
                        "sourceId": s.get("sourceId"),
                        "label": s.get("label"),
                        "excerpts": (s.get("excerpts") or [])[:2],
                    }
                    for s in r.get("sources") or []
                ],
            }
        )
    return {
        "reader": lab,
        "query": query,
        "queryTimestamp": at,
        "ms": round((time.monotonic() - started) * 1000),
        "results": results,
    }


def reads(tag, events, labs, recs, key):
    out = {"timeTravel": [], "rounds": [], "boundary": [], "delete": {}}
    studied = {e["payload"]["idea_id"]: e for e in events if e["type"] == "study_result"}
    ideas = {
        e["payload"]["idea_id"]: e
        for e in events
        if e["type"] == "idea" and e["payload"].get("kind") == "propose"
    }
    for idea_id, study in studied.items():
        if idea_id not in ideas:
            continue
        lab, title = ideas[idea_id]["agent"], ideas[idea_id]["payload"]["title"]
        q = f"What is the current status of hypothesis {idea_id} ({title})?"
        before = (
            round_end(ideas[idea_id]["round"]) if study["round"] > ideas[idea_id]["round"] else None
        )
        out["timeTravel"].append(
            {
                "idea": idea_id,
                "lab": lab,
                "before": recall(tag, "deck", q, key, before) if before else None,
                "now": recall(tag, "deck", q, key),
            }
        )
    rounds = max(e["round"] for e in events)
    for r in range(rounds + 1):
        out["rounds"].append(
            recall(
                tag,
                "deck",
                "Which hypotheses have the labs tested, and what did they find?",
                key,
                round_end(r),
                limit=10,
            )
        )
    shares = [rec for rec in recs if "-share-" in rec["id"]]
    share = next((rec for rec in shares if "tested in round" in rec["content"]), shares[0])
    sender, receiver = share["label"].split(" shared with ")
    q = "What have other labs shared with me, and what did they find?"
    other = next(n for n, d in labs.items() if d == labs[receiver] and n != receiver)
    for reader in (receiver, other, "outsider"):
        out["boundary"].append(recall(tag, reader, q, key))
    out["shareSource"] = {"id": share["id"], "sender": sender, "receiver": receiver}
    memory.delete_data_points([share["id"]], api_key=key)
    time.sleep(3)
    out["delete"] = {"deleted": share["id"], "after": recall(tag, receiver, q, key)}
    return out


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("command", choices=["run", "read", "cleanup"])
    parser.add_argument("reader", nargs="?")
    parser.add_argument("query", nargs="?")
    parser.add_argument("--tag")
    parser.add_argument("--at")
    args = parser.parse_args()
    key = memory.api_key_for_arm(None)
    if not key:
        raise SystemExit("PAST_API_KEY is required")
    events, labs = load()
    if args.command == "read":
        tag = args.tag or json.loads(RESULTS.read_text())["tag"]
        print(json.dumps(recall(tag, args.reader, args.query, key, args.at), indent=1))
        return
    if args.command == "cleanup":
        recs = records(events, labs, args.tag)
        memory.delete_data_points(sorted({r["id"] for r in recs}), api_key=key)
        return
    tag = args.tag or uuid.uuid4().hex[:6]
    recs = records(events, labs, tag)
    print(f"tag {tag}: {len(labs)} labs, {len(recs)} writes", flush=True)
    setup(tag, labs, key)
    started = time.monotonic()
    ingest(recs, key)
    print(f"ingested in {time.monotonic() - started:.0f}s", flush=True)
    out = reads(tag, events, labs, recs, key)
    report = {
        "tag": tag,
        "labs": labs,
        "writes": [
            {k: r[k] for k in ("id", "identity", "audience", "timestamp", "label")} for r in recs
        ],
        **out,
    }
    RESULTS.write_text(json.dumps(report, indent=1) + "\n")
    print(f"wrote {RESULTS}")


if __name__ == "__main__":
    main()
