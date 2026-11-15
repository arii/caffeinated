"""Export directory recordings exactly as the Lab server serves them, for the static Pages site."""

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


def _rewrite_committee_note_fields(value):
    if isinstance(value, dict):
        for key, child in value.items():
            if key in {"proxy_note", "reference_note"} and isinstance(child, str):
                if "committee" in child.casefold():
                    value[key] = PRE_COMMITTEE_NOTE
            else:
                _rewrite_committee_note_fields(child)
    elif isinstance(value, list):
        for child in value:
            _rewrite_committee_note_fields(child)


def _rewrite_committee_metric_descriptions(value):
    if isinstance(value, dict):
        metric = value.get("metric")
        if (
            isinstance(metric, dict)
            and "committee" in str(metric.get("description") or "").casefold()
        ):
            metric["description"] = PRE_COMMITTEE_NOTE
        for child in value.values():
            _rewrite_committee_metric_descriptions(child)
    elif isinstance(value, list):
        for child in value:
            _rewrite_committee_metric_descriptions(child)


def _rewrite_pre_committee_notes(manifest):
    manifest["proxy_note"] = PRE_COMMITTEE_NOTE
    _rewrite_committee_note_fields(manifest)
    _rewrite_committee_metric_descriptions(manifest)


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


def _is_pre_committee_ignobel(recording):
    if not _is_ignobel(recording):
        return False
    if any(
        event.get("type") == "award.issued"
        for event in _rows(recording.get("events"))
        if isinstance(event, dict)
    ):
        return False
    return not _has_committee_data(recording)


def export(viewer_dir, out_dir):
    out = Path(out_dir)
    out.mkdir(parents=True, exist_ok=True)
    catalog = RecordingCatalog(
        ROOT / "missing-sample-archive.zip", [Path(viewer_dir)], repo_root=None
    )
    items = []
    for manifest in catalog.list():
        rid = manifest["id"]
        recording = catalog.get(rid)
        for key in ("proxy_note", "metric"):
            if key not in manifest and key in recording["manifest"]:
                manifest[key] = recording["manifest"][key]
        # A published snapshot is never live, even if the run was still going when it was copied.
        for m in (manifest, recording["manifest"]):
            m.update(live=False, stale=False, sample=False)
            if m.get("status") in {"running", "live"}:
                m["status"] = "snapshot"
            if _is_pre_committee_ignobel(recording):
                _rewrite_pre_committee_notes(m)
        if _is_pre_committee_ignobel(recording):
            _rewrite_committee_note_fields(recording)
            _rewrite_committee_metric_descriptions(recording)
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
