"""past.dev vs local lexical memory: retrieval accuracy, latency and cost on real swarm memories.

Corpus: every memory record written by four real Kimi swarm runs (ignobel, bixbench_mini v2,
playworld_mini, hadamard19). Probes: 40 sampled claim records, each with a paraphrased colleague
question frozen in probes.json. Kimi paraphrasing failed (Tinker HTTP 402), so the 40 questions were
hand-written by the lead agent; see README.md for the bias this introduces.
A probe is a hit when the target record is among the returned sources.
"""

import json
import os
import random
import statistics
import sys
import time
import urllib.request
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
import memory

HERE = Path(__file__).resolve().parent
RUNS = ["out-ignobel", "out-bixbench_mini-v2", "out-playworld_mini", "out-hadamard19"]
ROOT = Path(os.environ.get("MEMCMP_RUNS_ROOT", "/home/ubuntu/longruns2"))
AUDIENCE, READER = "bench-memcmp", "bench-memcmp-reader"
LIMIT = 8


def corpus():
    records = []
    for run in RUNS:
        for line in (ROOT / run / "memory.jsonl").read_text().splitlines():
            rec = json.loads(line)
            rec["bench_id"] = f"memcmp-{run}-{rec['sourceId']}".replace("/", "_")
            records.append(rec)
    return records


def claim_idea(rec):
    if (rec.get("metadata") or {}).get("type") != "claim":
        return None
    try:
        body = json.loads(rec["content"])
    except (TypeError, ValueError):
        return None
    idea, why = body.get("idea"), body.get("rationale")
    return f"{idea} -- {why}" if idea and why else None


def make_probes(records):
    path = HERE / "probes.json"
    if path.exists():
        return json.loads(path.read_text())
    claims = [(r["bench_id"], claim_idea(r)) for r in records if claim_idea(r)]
    seen, unique = set(), []
    for bid, text in claims:
        if text[:60] not in seen:
            seen.add(text[:60])
            unique.append((bid, text))
    picked = random.Random(0).sample(unique, 40)
    prompt = (
        "For each numbered research note below, write ONE short question a colleague might ask "
        "to find that note later. Paraphrase: do not copy distinctive words, numbers or dataset "
        'names verbatim. Return JSON only: {"questions": ["...", ...]} with exactly '
        f"{len(picked)} strings in order.\n\n"
        + "\n".join(f"{i + 1}. {text[:600]}" for i, (_, text) in enumerate(picked))
    )
    import os

    req = urllib.request.Request(
        "https://tinker.thinkingmachines.dev/services/tinker-prod/oai/api/v1/chat/completions",
        data=json.dumps(
            {
                "model": "moonshotai/Kimi-K3.1-Pro:peft:262144",
                "messages": [{"role": "user", "content": prompt}],
                "max_tokens": 8192,
                "temperature": 0,
            }
        ).encode(),
        headers={
            "Authorization": f"Bearer {os.environ['TINKER_API_KEY_BACKUP']}",
            "Content-Type": "application/json",
            "User-Agent": "caffeinated-swarm",
        },
    )
    with urllib.request.urlopen(req, timeout=600) as resp:
        content = json.loads(resp.read())["choices"][0]["message"]["content"]
    questions = json.loads(content[content.index("{") : content.rindex("}") + 1])["questions"]
    assert len(questions) == len(picked), (len(questions), len(picked))
    probes = [
        {"target": bid, "note": text, "query": q} for (bid, text), q in zip(picked, questions)
    ]
    path.write_text(json.dumps(probes, indent=1))
    return probes


def score(ranked_ids, target):
    if target in ranked_ids:
        return 1 / (ranked_ids.index(target) + 1), ranked_ids.index(target) == 0, True
    return 0.0, False, False


def summarize(name, rows, extra):
    lat = sorted(r["latency_ms"] for r in rows)
    return {
        "backend": name,
        "n_probes": len(rows),
        "hit@1": sum(r["hit1"] for r in rows) / len(rows),
        f"hit@{LIMIT}": sum(r["hitk"] for r in rows) / len(rows),
        "mrr": statistics.mean(r["rr"] for r in rows),
        "recall_latency_ms_p50": statistics.median(lat),
        "recall_latency_ms_p95": lat[int(0.95 * (len(lat) - 1))],
        "mean_evidence_tokens": statistics.mean(r["tokens"] for r in rows),
        **extra,
    }


def run_local(records, probes):
    mirror = HERE / "local_mirror.jsonl"
    with mirror.open("w") as out:
        for rec in records:
            out.write(json.dumps({**rec, "sourceId": rec["bench_id"]}) + "\n")
    rows = []
    for p in probes:
        t = time.monotonic()
        results, tokens = memory.local_recall_results(p["query"], LIMIT, None, mirror)
        ms = (time.monotonic() - t) * 1000
        ids = [s["sourceId"] for r in results for s in r["sources"]]
        rr, h1, hk = score(ids, p["target"])
        rows.append({"latency_ms": ms, "rr": rr, "hit1": h1, "hitk": hk, "tokens": tokens})
    return summarize("local (lexical TF-IDF over mirror)", rows, {"api_calls": 0})


def run_pastdev(records, probes):
    key = memory.api_key_for_arm(None)
    if not key:
        raise SystemExit("BLOCKER: PAST_API_KEY missing")
    calls = 0
    memory.api_request(
        "PUT", f"/audiences/{AUDIENCE}", {"kind": "fixed", "identities": [READER]}, api_key=key
    )
    calls += 1
    state_path = HERE / "pastdev_ingested.json"
    ingested = json.loads(state_path.read_text()) if state_path.exists() else {}
    ingest_ms, pending = [], []
    for rec in records:
        if rec["bench_id"] in ingested:
            continue
        payload = {
            "id": rec["bench_id"],
            "content": rec["content"],
            "label": rec.get("label", ""),
            "timestamp": rec.get("timestamp"),
            "metadata": rec.get("metadata") or {},
            "identity": rec.get("author") or "unknown",
            "audience": AUDIENCE,
        }
        t = time.monotonic()
        resp = memory.api_request("POST", "/ingest", payload, api_key=key)
        calls += 1
        ingest_ms.append((time.monotonic() - t) * 1000)
        ingested[rec["bench_id"]] = resp.get("sourceId") or rec["bench_id"]
        if resp.get("status") != "completed" and resp.get("ingestionId"):
            pending.append(resp["ingestionId"])
        state_path.write_text(json.dumps(ingested))
    t0 = time.monotonic()
    for ing in pending:
        while True:
            r = memory.api_request("GET", f"/ingest/{ing}", api_key=key)
            calls += 1
            if r.get("status") == "completed":
                break
            if r.get("status") == "failed":
                raise SystemExit(f"ingestion failed: {r}")
            time.sleep(2)
    settle_s = time.monotonic() - t0
    to_bench = {v: k for k, v in ingested.items()}
    rows = []
    for p in probes:
        t = time.monotonic()
        resp = memory.api_request(
            "POST",
            "/recall",
            {"query": p["query"], "identity": READER, "limit": LIMIT},
            api_key=key,
        )
        calls += 1
        ms = (time.monotonic() - t) * 1000
        ids = []
        for result in resp.get("results", []):
            for s in result.get("sources", []):
                sid = s.get("sourceId")
                ids.append(to_bench.get(sid, sid))
        rr, h1, hk = score(ids, p["target"])
        rows.append(
            {
                "latency_ms": ms,
                "rr": rr,
                "hit1": h1,
                "hitk": hk,
                "tokens": resp.get("usedEvidenceTokens", 0),
            }
        )
    extra = {
        "api_calls": calls,
        "ingest_latency_ms_p50": statistics.median(ingest_ms) if ingest_ms else None,
        "ingest_settle_s": round(settle_s, 1),
    }
    return summarize("past.dev /recall", rows, extra)


if __name__ == "__main__":
    recs = corpus()
    probes = make_probes(recs)
    out = {"corpus_records": len(recs), "probes": len(probes), "results": []}
    out["results"].append(run_local(recs, probes))
    out["results"].append(run_pastdev(recs, probes))
    (HERE / "results.json").write_text(json.dumps(out, indent=1))
    print(json.dumps(out, indent=1))
