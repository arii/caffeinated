"""Export static Pages recordings, rewriting notes and Ig Nobel metric copy for pre-committee runs."""

import gzip
import hashlib
import json
import shutil
import sys
from copy import deepcopy
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))
from backend.replay import RecordingCatalog  # noqa: E402

PRE_COMMITTEE_NOTE = (
    "Pre-committee run: loss 0 = passed preregistered gates, 1 = failed; not committee-judged."
)
PRE_COMMITTEE_IGNOBEL_METRIC_LABEL = "split-half consistency loss"
PRE_COMMITTEE_IGNOBEL_METRIC_DESCRIPTION = (
    "split-half consistency loss: 0 = the study passed its preregistered gates and "
    "split-half consistency, 1 = failed"
)
GATE_ONLY_LOSS_NAMES = ("replication loss", "interesting-finding loss")
DIRECT_COMMITTEE_FIELDS = ("score", "scores", "judges", "verdicts")
COMMITTEE_EVENT_TYPES = {
    "award.issued",
    "study.result",
    "study.replicated",
    "study.completed",
}


def _rows(value):
    if isinstance(value, list):
        return value
    return list(value.values()) if isinstance(value, dict) else []


def _has_fields(value, fields):
    return isinstance(value, dict) and any(value.get(key) is not None for key in fields)


def _has_committee_fields(value):
    return isinstance(value, dict) and bool(value)


def _has_direct_committee_fields(value):
    return _has_fields(value, DIRECT_COMMITTEE_FIELDS)


def _rewrite_committee_note_fields(value, note=PRE_COMMITTEE_NOTE):
    if isinstance(value, dict):
        for key, child in value.items():
            if key in {"proxy_note", "reference_note"} and isinstance(child, str):
                if "committee" in child.casefold():
                    value[key] = note
            else:
                _rewrite_committee_note_fields(child, note)
    elif isinstance(value, list):
        for child in value:
            _rewrite_committee_note_fields(child, note)


def _rewrite_committee_metric_descriptions(value, note=PRE_COMMITTEE_NOTE):
    if isinstance(value, dict):
        metric = value.get("metric")
        if (
            isinstance(metric, dict)
            and "committee" in str(metric.get("description") or "").casefold()
        ):
            metric["description"] = note
        for child in value.values():
            _rewrite_committee_metric_descriptions(child, note)
    elif isinstance(value, list):
        for child in value:
            _rewrite_committee_metric_descriptions(child, note)


def _rewrite_ignobel_metric_fields(value):
    if isinstance(value, dict):
        metric = value.get("metric")
        if isinstance(metric, dict):
            label = str(metric.get("label") or "").casefold()
            description = str(metric.get("description") or "").casefold()
            if (
                metric.get("name") == "replicated_findings"
                or any(name in label for name in GATE_ONLY_LOSS_NAMES)
                or "replicated and significant" in description
            ):
                metric["label"] = PRE_COMMITTEE_IGNOBEL_METRIC_LABEL
                metric["description"] = PRE_COMMITTEE_IGNOBEL_METRIC_DESCRIPTION
        for child in value.values():
            _rewrite_ignobel_metric_fields(child)
    elif isinstance(value, list):
        for child in value:
            _rewrite_ignobel_metric_fields(child)


def _rewrite_pre_committee_notes(manifest, note=PRE_COMMITTEE_NOTE):
    manifest["proxy_note"] = note
    _rewrite_committee_note_fields(manifest, note)
    _rewrite_ignobel_metric_fields(manifest)
    _rewrite_committee_metric_descriptions(manifest, note)


def _rewrite_gate_only_event_text(value):
    """Rename the loss in host-written text/message fields; recorded LLM calls stay verbatim."""
    if isinstance(value, dict):
        for key, child in value.items():
            if key in {"text", "message", "lastMessage"} and isinstance(child, str):
                for name in GATE_ONLY_LOSS_NAMES:
                    child = child.replace(name, PRE_COMMITTEE_IGNOBEL_METRIC_LABEL)
                value[key] = child
            elif key != "llm_calls":
                _rewrite_gate_only_event_text(child)
    elif isinstance(value, list):
        for child in value:
            _rewrite_gate_only_event_text(child)


def _post_run_awards(recording):
    return [
        event.get("payload") or {}
        for event in _rows(recording.get("events"))
        if isinstance(event, dict) and event.get("type") == "award.issued"
    ]


def post_run_committee_note(awards):
    """Proxy note for a gate-only run judged by the committee afterwards (scores.jsonl)."""
    models = sorted(
        {
            judge.get("model")
            for award in awards
            for judge in (award.get("judges") or {}).values()
            if isinstance(judge, dict) and judge.get("model")
        }
    )
    scores = [award["score"] for award in awards if isinstance(award.get("score"), (int, float))]
    best = f"; best score {max(scores):.1f} of 1" if scores else ""
    judged_by = f" ({' + '.join(models)})" if models else ""
    return (
        "Run losses are preregistered-gate only: 0 = passed, 1 = failed. After the run, the "
        f"Ig Nobel committee{judged_by} judged {len(awards)} confirmed finding(s){best}."
    )


def _is_ignobel(recording):
    manifest = recording.get("manifest") or {}
    title = str(manifest.get("title") or "").casefold()
    metric = manifest.get("metric") or {}
    description = str(metric.get("description") or "").casefold()
    if "ig nobel" in title or metric.get("name") == "replicated_findings":
        return True
    if "replicated and significant" in description:
        return True
    provenance = manifest.get("provenance") or {}
    command = provenance.get("command") or []
    parts = command.split() if isinstance(command, str) else list(command)
    if manifest.get("task") == "ignobel":
        return True
    return any(
        part == "--task" and parts[index + 1] == "ignobel" for index, part in enumerate(parts[:-1])
    )


def _has_committee_data(recording):
    for study in _rows((recording.get("entities") or {}).get("studies")):
        if not isinstance(study, dict):
            continue
        graded = study.get("graded")
        result = study.get("result")
        if (
            _has_committee_fields(study.get("committee"))
            or _has_direct_committee_fields(graded)
            or _has_committee_fields(graded.get("committee") if isinstance(graded, dict) else None)
            or _has_committee_fields(result.get("committee") if isinstance(result, dict) else None)
        ):
            return True
    for event in _rows(recording.get("events")):
        if not isinstance(event, dict) or event.get("type") not in COMMITTEE_EVENT_TYPES:
            continue
        payload = event.get("payload") or {}
        if not isinstance(payload, dict):
            continue
        if any(_has_committee_fields(payload.get(key)) for key in ("committee", "award")):
            return True
        if _has_direct_committee_fields(payload):
            return True
    return False


def _is_gate_only_ignobel(recording):
    """Ig Nobel run whose in-run losses had no committee score (post-run awards don't count)."""
    if not _is_ignobel(recording):
        return False
    in_run = {
        **recording,
        "entities": {
            **(recording.get("entities") or {}),
            "studies": [
                {key: value for key, value in study.items() if key != "committee"}
                for study in _rows((recording.get("entities") or {}).get("studies"))
                if isinstance(study, dict)
            ],
        },
        "events": [
            event
            for event in _rows(recording.get("events"))
            if isinstance(event, dict) and event.get("type") != "award.issued"
        ],
    }
    return not _has_committee_data(in_run)


def _attach_igjudge(recording, rid, igjudge_dir):
    path = Path(igjudge_dir) / f"{rid}.json"
    if path.is_file():
        recording["igjudge"] = json.loads(path.read_text(encoding="utf-8"))


def export(viewer_dir, out_dir, igjudge_dir=None):
    """IgJudge final-pass results in <viewer_dir>/../igjudge/<run-id>.json ride along with the recording."""
    igjudge_dir = Path(viewer_dir).parent / "igjudge" if igjudge_dir is None else igjudge_dir
    out = Path(out_dir)
    out.mkdir(parents=True, exist_ok=True)
    catalog = RecordingCatalog(
        ROOT / "missing-sample-archive.zip", [Path(viewer_dir)], repo_root=None
    )
    items = []
    for manifest in catalog.list():
        rid = manifest["id"]
        recording = catalog.get(rid)
        _attach_igjudge(recording, rid, igjudge_dir)
        for key in ("proxy_note", "metric"):
            if key not in manifest and key in recording["manifest"]:
                manifest[key] = recording["manifest"][key]
        # A published snapshot is never live, even if the run was still going when it was copied.
        gate_only = _is_gate_only_ignobel(recording)
        awards = _post_run_awards(recording)
        note = post_run_committee_note(awards) if awards else PRE_COMMITTEE_NOTE
        for m in (manifest, recording["manifest"]):
            m.update(live=False, stale=False, sample=False)
            if m.get("status") in {"running", "live"}:
                m["status"] = "snapshot"
            if gate_only:
                _rewrite_pre_committee_notes(m, note)
        if gate_only:
            _rewrite_committee_note_fields(recording, note)
            _rewrite_ignobel_metric_fields(recording)
            _rewrite_committee_metric_descriptions(recording, note)
            _rewrite_gate_only_event_text(recording)
        content = deepcopy(recording)
        for key in ("contentVersion", "lastUpdateTs", "staleAfterSeconds"):
            content["manifest"].pop(key, None)
        version = (
            hashlib.sha256(
                json.dumps(content, sort_keys=True, separators=(",", ":")).encode()
            ).hexdigest()[:16]
            + "-v4"
        )
        for m in (manifest, recording["manifest"]):
            m["contentVersion"] = version
        payload = json.dumps(recording, sort_keys=True, separators=(",", ":")).encode()
        with (
            (out / f"{rid}.json.gz").open("wb") as stream,
            gzip.GzipFile(
                filename="", mode="wb", fileobj=stream, compresslevel=9, mtime=0
            ) as archive,
        ):
            archive.write(payload)
        artifacts = Path(viewer_dir) / rid / "artifacts"
        if artifacts.is_dir():
            shutil.copytree(artifacts, out / rid / "artifacts", dirs_exist_ok=True)
        items.append(manifest)
    (out / "index.json").write_text(
        json.dumps(items, sort_keys=True, separators=(",", ":")), encoding="utf-8"
    )
    return items


if __name__ == "__main__":
    print(f"exported {len(export(sys.argv[1], sys.argv[2]))} recording(s)")
