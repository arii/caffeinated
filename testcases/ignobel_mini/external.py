"""Trusted host-side intake of new public datasets that a study asks for.

A study lists real data URLs in a top-level ``EXTRA_DATA = [...]`` literal
(read with ``ast``; the candidate is never executed here). For each https URL
on an open-data host, or one that the swarm's own Exa research log cites, the
host downloads the file once, freezes it in .cache/raw, and splits it exactly
like the FiveThirtyEight surveys: data/<id>.csv (discovery, visible) plus
.cache/replication/<id>.csv (hidden). data/<id>.codebook.json describes it.
"""

import ast
import hashlib
import ipaddress
import json
import os
from pathlib import Path
from urllib.parse import urlsplit

import prepare

HERE = Path(__file__).resolve().parent
MAX_DATASETS = 3
MIN_ROWS = 60
OPEN_DATA_HOSTS = (
    "raw.githubusercontent.com",
    "gist.githubusercontent.com",
    "zenodo.org",
    "figshare.com",
    "ndownloader.figshare.com",
    "datadryad.org",
    "osf.io",
    "files.osf.io",
    "dataverse.harvard.edu",
    "data.gov",
    "vincentarelbundock.github.io",
    "cdc.gov",
    "census.gov",
    "data.cityofnewyork.us",
    "data.world",
)


def requested_urls(source):
    """URLs from a top-level EXTRA_DATA list literal; [] if absent or malformed."""
    try:
        tree = ast.parse(source)
    except SyntaxError:
        return []
    for node in tree.body:
        if (
            isinstance(node, ast.Assign)
            and any(isinstance(t, ast.Name) and t.id == "EXTRA_DATA" for t in node.targets)
        ):
            try:
                value = ast.literal_eval(node.value)
            except ValueError:
                return []
            if isinstance(value, (list, tuple)):
                urls = [v.strip() for v in value if isinstance(v, str) and v.strip()]
                return list(dict.fromkeys(urls))[:MAX_DATASETS]
    return []


def dataset_id(url):
    return "x" + hashlib.sha256(url.encode()).hexdigest()[:10]


def cited(url, research_log=None):
    path = research_log or os.environ.get("TASK_RESEARCH_LOG")
    if not path or not Path(path).is_file():
        return False
    return url in Path(path).read_text(encoding="utf-8", errors="replace")


def check_url(url, research_log=None):
    parts = urlsplit(url)
    host = (parts.hostname or "").lower()
    if parts.scheme != "https" or not host or parts.username or parts.port not in (None, 443):
        raise ValueError("only plain https URLs are fetched")
    try:
        ipaddress.ip_address(host)
    except ValueError:
        pass
    else:
        raise ValueError("IP-address hosts are not fetched")
    if host == "localhost" or host.endswith((".local", ".internal")):
        raise ValueError("local hosts are not fetched")
    open_host = any(host == h or host.endswith("." + h) for h in OPEN_DATA_HOSTS)
    if not open_host and not cited(url, research_log):
        raise ValueError("host is not an open-data host and the URL is not cited in the research log")


def ensure(url, task_dir=HERE, research_log=None):
    """Return (id, codebook entry) for url, downloading and splitting it on first use."""
    name = dataset_id(url)
    entry_path = Path(task_dir) / "data" / f"{name}.codebook.json"
    if entry_path.is_file() and (Path(task_dir) / ".cache" / "replication" / f"{name}.csv").is_file():
        return name, json.loads(entry_path.read_text(encoding="utf-8"))
    check_url(url, research_log)
    previous, prepare.HERE = prepare.HERE, Path(task_dir)
    try:
        return name, _build(url, name, entry_path)
    finally:
        prepare.HERE = previous


def _build(url, name, entry_path):
    path = urlsplit(url).path.lower()
    spec = {
        "title": f"{Path(urlsplit(url).path).stem} data ({urlsplit(url).hostname})",
        "files": [url],
        "license": "see source",
        "drop": r"(?i)^(rownames|x|id|index|row|obs|unnamed.*|.*[ _]id)$",
        "delimiter": "\t" if path.endswith((".tsv", ".tab")) else ",",
    }
    entry = prepare.build(name, spec)
    if entry["n_discovery"] < MIN_ROWS // 2 or len(entry["variables"]) < 2:
        raise ValueError(f"needs at least {MIN_ROWS} rows and 2 usable columns")
    raw = prepare.fetch(url).encode("utf-8", errors="replace")
    entry["sha256"] = hashlib.sha256(raw).hexdigest()
    temporary = entry_path.with_suffix(".tmp")
    temporary.write_text(json.dumps(entry, indent=1) + "\n", encoding="utf-8")
    temporary.replace(entry_path)
    return entry


def intake(source, task_dir=HERE, research_log=None):
    """Fetch every EXTRA_DATA URL; return ({id: entry}, [log lines])."""
    datasets, notes = {}, []
    for url in requested_urls(source):
        try:
            name, entry = ensure(url, task_dir, research_log)
        except Exception as error:  # network, parse, policy: skip this URL only
            notes.append(f"extra_data: {url} -> skipped ({type(error).__name__}: {error})")
            continue
        datasets[name] = entry
        notes.append(f"extra_data: {url} -> {name} ({entry['n_discovery']} discovery rows, {len(entry['variables'])} variables)")
    return datasets, notes
