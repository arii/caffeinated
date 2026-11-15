"""Changing facts: can memory tell an agent what is *currently* true about a hypothesis?

Corpus: the 47 claims and 49 results of the real overnight Kimi ignobel run
(experiments/real-runs/ignobel). Each claim whose idea has a recorded outcome becomes a
hypothesis with two versions: "being tested" (when it was claimed) then its outcome
("confirmed", "refuted", "crashed", ...). Four memories are compared:

  local append-only    each version is its own record, lexical TF-IDF (main's local backend)
  local stable id      versions share one id, newest wins (this branch's local backend)
  past.dev append-only each version is its own data point (main's past.dev usage)
  past.dev stable id   versions share one id, so past.dev supersedes the old one (this branch)

Probe: "what is the current status of <idea>?" Scored on the first returned result that is
about the hypothesis: current (shows the outcome), stale (shows only "being tested") or miss.
Time-travel probe: the same question with queryTimestamp between the two versions should
return "being tested". past.dev data is isolated in a rule audience for this run and deleted
at the end.
"""

import gzip
import json
import re
import sys
import tempfile
import time
import uuid
from datetime import datetime, timedelta, timezone
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
import memory

HERE = Path(__file__).resolve().parent
RUN = HERE.parents[1] / "experiments" / "real-runs" / "ignobel" / "memory.jsonl.gz"
LIMIT = 5
OUTCOME = {"keep": "confirmed", "discard": "refuted", "crash": "crashed"}
REGIME = re.compile(r"^\s*\[(EXPLOIT|SNAP|BREAKOUT)\]\s*")


def iso(moment):
    return moment.strftime("%Y-%m-%dT%H:%M:%SZ")


def hypotheses():
    with gzip.open(RUN, "rt") as handle:
        records = [json.loads(line) for line in handle]
    results = []
    for rec in records:
        meta = rec.get("metadata") or {}
        if meta.get("type") != "result" or meta.get("status") not in OUTCOME:
            continue
        idea = next(
            (line[6:] for line in rec["content"].splitlines() if line.startswith("Idea: ")), ""
        )
        results.append((REGIME.sub("", idea).casefold(), meta))
    found, seen = [], set()
    for rec in records:
        if (rec.get("metadata") or {}).get("type") != "claim":
            continue
        idea = REGIME.sub("", json.loads(rec["content"]).get("idea") or "").strip()
        key = idea.casefold()[:50]
        if not idea or key in seen:
            continue
        outcome = next((meta for text, meta in results if key[:40] in text), None)
        if outcome:
            seen.add(key)
            loss = outcome.get("loss")
            found.append(
                {
                    "idea": idea,
                    "author": rec.get("author") or "worker",
                    "final": OUTCOME[outcome["status"]],
                    "detail": "" if loss is None else f", loss {float(loss):.4f}",
                }
            )
    return found


def versions(hyps, now):
    out = []
    for i, h in enumerate(hyps):
        hid = f"hyp-{uuid.uuid5(uuid.NAMESPACE_URL, h['idea']).hex[:12]}"
        for v, (status, start) in enumerate((("being tested", 3), (h["final"], 2))):
            detail = h["detail"] if v else ""
            out.append(
                {
                    "hyp": i,
                    "stable_id": hid,
                    "append_id": f"{hid}-v{v}",
                    "content": f"Hypothesis: {h['idea']}\nCurrent status: {status}{detail}",
                    "label": f"hypothesis status: {status}",
                    "timestamp": iso(now - timedelta(hours=start) + timedelta(seconds=i)),
                    "author": h["author"],
                }
            )
    return out


def verdict(results, ids, final):
    for item in results:
        if not {s.get("sourceId") for s in item.get("sources") or []} & ids:
            continue
        text = " ".join(
            [str(item.get("content") or "")]
            + [str(s.get("excerpt") or "") for s in item.get("sources") or []]
        ).casefold()
        if final in text:
            return "current"
        if "being tested" in text:
            return "stale"
        return "unclear"
    return "miss"


def tally(rows):
    n = len(rows)
    return {
        k: round(sum(r == k for r in rows) / n, 3) for k in ("current", "stale", "unclear", "miss")
    }


def query(h):
    return f"What is the current status of the hypothesis: {h['idea'][:160]}?"


def run_local(hyps, vers, stable, between):
    with tempfile.TemporaryDirectory() as directory:
        mirror = Path(directory) / "memory.jsonl"
        with mirror.open("w") as out:
            for v in vers:
                sid = v["stable_id"] if stable else v["append_id"]
                out.write(
                    json.dumps(
                        {**v, "id": sid, "sourceId": sid, "metadata": {"type": "hypothesis"}}
                    )
                    + "\n"
                )
        now_rows, then_rows = [], []
        for i, h in enumerate(hyps):
            ids = {v["stable_id"] if stable else v["append_id"] for v in vers if v["hyp"] == i}
            res, _ = memory.local_recall_results(query(h), LIMIT, None, mirror)
            now_rows.append(verdict(res, ids, h["final"]))
            res, _ = memory.local_recall_results(
                query(h), LIMIT, memory.timestamp_value(between), mirror
            )
            then_rows.append(verdict(res, ids, "being tested"))
    return now_rows, then_rows


def run_pastdev(hyps, vers, stable, between, tag, key):
    reader, audience = f"bench-upd-reader-{tag}", f"bench-upd-{tag}"
    memory.api_request("PUT", f"/identities/{reader}", {"traits": {"bench": tag}}, api_key=key)
    memory.api_request(
        "PUT",
        f"/audiences/{audience}",
        {"kind": "rule", "name": audience, "rule": memory._trait_rule({"bench": tag})},
        api_key=key,
    )
    pending, written = [], []
    ingest_ms = []
    for v in vers:
        sid = v["stable_id"] if stable else v["append_id"]
        sid = f"{sid}-{tag}"
        t = time.monotonic()
        resp = memory.api_request(
            "POST",
            "/ingest",
            {
                "id": sid,
                "content": v["content"],
                "label": v["label"],
                "timestamp": v["timestamp"],
                "identity": v["author"],
                "audience": audience,
                "metadata": {"type": "hypothesis"},
            },
            api_key=key,
        )
        ingest_ms.append((time.monotonic() - t) * 1000)
        written.append(sid)
        if resp.get("ingestionId"):
            pending.append(resp["ingestionId"])
        if stable and v is not vers[-1]:
            # a status update arrives after the earlier one settled, as in a real run
            memory.wait_for_ingestion(resp, True, api_key=key)
    for ingestion in pending:
        memory.wait_for_ingestion(
            {"status": "processing", "ingestionId": ingestion}, True, api_key=key
        )
    now_rows, then_rows, recall_ms = [], [], []
    for i, h in enumerate(hyps):
        ids = {
            f"{v['stable_id'] if stable else v['append_id']}-{tag}" for v in vers if v["hyp"] == i
        }
        for when, rows in ((None, now_rows), (between, then_rows)):
            body = {"query": query(h), "identity": reader, "limit": LIMIT}
            if when:
                body["queryTimestamp"] = when
            t = time.monotonic()
            resp = memory.api_request("POST", "/recall", body, api_key=key)
            recall_ms.append((time.monotonic() - t) * 1000)
            res = memory.normalize_pastdev_results(resp, HERE / "none.jsonl")
            rows.append(verdict(res, ids, h["final"] if when is None else "being tested"))
    memory.delete_data_points(sorted(set(written)), api_key=key)
    memory.api_request("DELETE", f"/audiences/{audience}", api_key=key)
    memory.api_request("DELETE", f"/identities/{reader}", api_key=key)
    recall_ms.sort()
    return now_rows, then_rows, {"recall_ms_p50": round(recall_ms[len(recall_ms) // 2])}


def main():
    key = memory.api_key_for_arm(None)
    hyps = hypotheses()
    now = datetime.now(timezone.utc).replace(microsecond=0)
    vers = versions(hyps, now)
    between = iso(now - timedelta(hours=2, minutes=30))
    tag = uuid.uuid4().hex[:8]
    report = {"n_hypotheses": len(hyps), "limit": LIMIT, "arms": {}}
    arms = [("local append-only", "local", False), ("local stable id", "local", True)]
    if key:
        arms += [
            ("past.dev append-only", "pastdev", False),
            ("past.dev stable id", "pastdev", True),
        ]
    for name, backend, stable in arms:
        extra = {}
        if backend == "local":
            now_rows, then_rows = run_local(hyps, vers, stable, between)
        else:
            now_rows, then_rows, extra = run_pastdev(
                hyps, vers, stable, between, f"{tag}{int(stable)}", key
            )
        report["arms"][name] = {"now": tally(now_rows), "as_of_between": tally(then_rows), **extra}
        print(name, json.dumps(report["arms"][name]), flush=True)
    (HERE / "results.json").write_text(json.dumps(report, indent=1) + "\n")


if __name__ == "__main__":
    main()
