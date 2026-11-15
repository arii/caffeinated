"""Trusted host-side intake of the real public dataset a pre-registration names.

The host fetches an https URL only if it is on an open-data host or appears in
this run's Exa research log, caps it at prepare.MAX_BYTES, freezes it in
.cache/raw (so a run always tests the same bytes), and stores the cleaned rows
plus a codebook entry (data/<id>.codebook.json, with the content sha256).
"""

import hashlib
import ipaddress
import json
import os
import socket
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


def dataset_id(url):
    return "x" + hashlib.sha256(url.split("#", 1)[0].encode()).hexdigest()[:10]


def cited(url, research_log=None):
    path = research_log or os.environ.get("TASK_RESEARCH_LOG")
    if not path or not Path(path).is_file():
        return False
    return url in Path(path).read_text(encoding="utf-8", errors="replace")


def safe_url(url):
    """Plain https to a public hostname; applied to the URL and every redirect."""
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
    if host == "localhost" or host.endswith((".local", ".internal", ".localhost")):
        raise ValueError("local hosts are not fetched")
    try:
        addresses = {info[4][0] for info in socket.getaddrinfo(host, 443, proto=socket.IPPROTO_TCP)}
    except OSError as error:
        raise ValueError(f"cannot resolve {host}") from error
    if any(not ipaddress.ip_address(a.split("%")[0]).is_global for a in addresses):
        raise ValueError(f"{host} resolves to a non-public address")
    return parts


def check_url(url, research_log=None):
    host = safe_url(url).hostname.lower()
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
    previous = prepare.HERE, prepare.URL_CHECK
    prepare.HERE, prepare.URL_CHECK = Path(task_dir), safe_url
    try:
        return name, _build(url, name, entry_path)
    finally:
        prepare.HERE, prepare.URL_CHECK = previous


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
