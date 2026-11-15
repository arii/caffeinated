"""Export directory recordings exactly as the Lab server serves them, for the static Pages site."""

import gzip
import json
import shutil
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))
from backend.replay import RecordingCatalog  # noqa: E402


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
        payload = json.dumps(recording, separators=(",", ":")).encode()
        (out / f"{rid}.json.gz").write_bytes(gzip.compress(payload, compresslevel=9, mtime=0))
        artifacts = Path(viewer_dir) / rid / "artifacts"
        if artifacts.is_dir():
            shutil.copytree(artifacts, out / rid / "artifacts", dirs_exist_ok=True)
        items.append(manifest)
    (out / "index.json").write_text(json.dumps(items, separators=(",", ":")))
    return items


if __name__ == "__main__":
    print(f"exported {len(export(sys.argv[1], sys.argv[2]))} recording(s)")
