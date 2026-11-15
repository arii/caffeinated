"""Post-run past.dev checks for a families run: who read whose data, the access boundary,
time travel, supersession, write-to-read time, tokens per read, and deletion.

PAST_API_KEY=... python pastdev_deck.py runs/full-s2   # writes pastdev_deck.json in the run dir
"""
import json
import statistics
import sys
import time
from datetime import datetime, timezone
from pathlib import Path

import memory


def _t(ts: str) -> float:
    return datetime.fromisoformat(ts.replace("Z", "+00:00")).timestamp()


def _tokens(text: str) -> int:
    return max(1, len(text) // 4)


def main(run_dir: str) -> int:
    out = Path(run_dir)
    tag = json.loads((out / "pastdev.json").read_text())["tag"]
    log = [json.loads(line) for line in (out / "pastdev_log.jsonl").open()]
    writes = [r for r in log if r["type"] == "write"]
    labs = sorted({r["lab"] for r in log if r["type"] == "identity"} - {"deck", "outsider"})
    run = memory.PastDevRun.__new__(memory.PastDevRun)  # API helpers only: no writer thread, no provisioning
    run.tag, run.key, run.log_path, run.authors = tag, memory.os.environ["PAST_API_KEY"], out / "pastdev_deck_log.jsonl", {}
    run.lock = memory.threading.Lock()
    for w in writes:
        run.authors[w["id"]] = w["identity"].removeprefix(f"fam-{tag}-")

    # who read whose data during the run
    recalls = [r for r in log if r["type"] == "recall"]
    cross = [r for r in recalls if set(r["authors"]) - {r["reader"], "?"}]
    settled = {r["id"]: _t(r["ts"]) for r in log if r["type"] == "settled" and r["status"] == "completed"}
    lag = sorted(settled[w["id"]] - _t(w["ts"]) for w in writes if w["id"] in settled and not w["superseding"])
    result = {
        "tag": tag, "labs": labs,
        "writes": len(writes), "writers": len({w["identity"] for w in writes}),
        "inbox_writes": sum(1 for w in writes if "-inbox-" in w["audience"]),
        "superseding_writes": sum(1 for w in writes if w["superseding"]),
        "recalls": len(recalls), "readers": len({r["reader"] for r in recalls}),
        "recalls_with_another_labs_data": len(cross),
        "cross_reads": sorted({(r["reader"], a) for r in cross for a in r["authors"] if a not in (r["reader"], "?")}),
        "recall_ms_p50": statistics.median(r["ms"] for r in recalls) if recalls else None,
        "write_to_readable_s": {"n": len(lag), "p50": lag[len(lag) // 2] if lag else None,
                                "p90": lag[int(len(lag) * 0.9)] if lag else None, "max": lag[-1] if lag else None},
        "write_errors": sum(1 for r in log if r["type"] == "write_error"),
    }

    # boundary: an outsider and a lab asking for another lab's private notes
    hyp = [w for w in writes if w["label"].startswith("hypothesis") and "-private-" in w["audience"]]
    probe = hyp[0] if hyp else writes[0]
    owner = run.authors[probe["id"]]
    stranger = next((lab for lab in labs if lab != owner and not any(
        ex for ex in result["cross_reads"] if ex == [lab, owner] or ex == (lab, owner))), None)
    text = json.loads(json.dumps(probe["label"]))
    query = f"{text} {owner} hypothesis status"
    owner_read = run.recall(owner, query, 5)
    outsider_read = run.recall("outsider", query, 5)
    stranger_read = run.recall(stranger, query, 5) if stranger else []
    result["boundary"] = {
        "query": query, "owner": owner, "stranger": stranger,
        "owner_sees_own": any(probe["id"] in r["sourceIds"] for r in owner_read),
        "outsider_lab_results": sum(1 for r in outsider_read if any(s.startswith(f"fam-{tag}-") for s in r["sourceIds"])),
        "stranger_sees_owner_private": any(probe["id"] in r["sourceIds"] for r in stranger_read),
    }

    # Time travel across individually dated status records and the stable current hypothesis.
    status_groups = {}
    prefix = f"fam-{tag}-"
    for write in writes:
        source_id = write["id"]
        stem, separator, number = source_id.removeprefix(prefix).rpartition("-status-")
        if separator and number.isdigit():
            status_groups.setdefault(stem, []).append(write)
    histories = [(idea_id, sorted(records, key=lambda w: int(w["id"].rsplit("-status-", 1)[1])))
                 for idea_id, records in status_groups.items() if len(records) >= 2]
    if histories:
        idea_id, history_writes = histories[0]
        lab = run.authors[history_writes[0]["id"]]
        status_ids = {w["id"] for w in history_writes}
        first_write = history_writes[0]
        first_id = first_write["id"]
        first_time = first_write.get("occurredAt") or first_write["ts"]
        occurred_to = datetime.fromtimestamp(_t(first_time) + 1, timezone.utc).isoformat().replace(
            "+00:00", "Z")
        history_query = f"status history of hypothesis {idea_id}"
        history = run.recall(lab, history_query, 20, sort="chronological")
        early = run.recall(lab, history_query, 20, occurred_to=occurred_to)
        current_id = f"{prefix}{idea_id}-hyp"
        current_query = f"current status of hypothesis {idea_id}"
        current = run.recall(lab, current_query, 5)

        def display(records, wanted):
            return [{"content": r["content"][:300], "occurredAt": r["occurredAt"],
                     "sourceIds": [sid for sid in r["sourceIds"] if sid in wanted],
                     "supersededAt": r["supersededAt"]}
                    for r in records if set(r["sourceIds"]) & wanted]

        early_statuses = display(early, status_ids)
        result["time_travel"] = {
            "lab": lab, "idea_id": idea_id,
            "history_query": history_query, "history_sort": "chronological",
            "history": display(history, status_ids),
            "occurred_to": occurred_to, "first_status_source_id": first_id,
            "early_status": early_statuses,
            "only_first_status": [sid for r in early_statuses for sid in r["sourceIds"]] == [first_id],
            "current_query": current_query, "current_status_source_id": current_id,
            "current_status": display(current, {current_id}),
        }

    # tokens: one read vs re-reading every note a lab can see
    per_read = [sum(_tokens(r["content"]) for r in run.recall(lab, "what have other labs found that I can use", 8))
                for lab in labs[:6]]
    events = [json.loads(line) for line in (out / "events.jsonl").open()]
    history = sum(_tokens(json.dumps(e["payload"])) for e in events if e["type"] in ("idea", "study_result", "share", "lesson"))
    result["tokens"] = {"per_read_mean": round(statistics.mean(per_read)) if per_read else None,
                        "notes_history": history}

    # deletion: drop one shared note and ask the receiver again
    share = next((w for w in writes if "-inbox-" in w["audience"]), None)
    if share:
        receiver = share["audience"].split("-inbox-")[-1]
        content = next((r["query"] for r in recalls if r["reader"] == receiver), "shared finding")
        q = f"{share['label']} {content}"[:300]
        before = [r for r in run.recall(receiver, q, 8) if share["id"] in r["sourceIds"]]
        memory._api("DELETE", f"/data-points/{memory.quote(share['id'])}", None, run.key)
        time.sleep(5)
        after = [r for r in run.recall(receiver, q, 8) if share["id"] in r["sourceIds"]]
        result["deletion"] = {"source_id": share["id"], "receiver": receiver, "query": q,
                              "hits_before": len(before), "hits_after": len(after),
                              "before": [r["content"][:300] for r in before]}

    (out / "pastdev_deck.json").write_text(json.dumps(result, indent=2, default=list))
    print(json.dumps({k: v for k, v in result.items() if k not in ("cross_reads", "time_travel", "deletion")}, indent=2))
    print("time_travel:", json.dumps(result.get("time_travel"), indent=1)[:1500])
    print("deletion:", json.dumps(result.get("deletion"), indent=1)[:800])
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1]))
