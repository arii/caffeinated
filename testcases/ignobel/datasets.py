"""Find real public CSV datasets on Zenodo and Hugging Face (ported from ignobel/sources.py).

Each hit carries a direct https file URL that external.py can download and the
first row of the file (its column names), so a lab can name exact columns in
its pre-registration.
"""

import csv
import io
import json
import re
import urllib.request
from itertools import zip_longest
from urllib.parse import quote, urlencode

import external
import prepare

MIN_FILE_BYTES = 2_000
UA = {"User-Agent": "caffeinated-ignobel/1"}
STOP = frozenset("and the for with from into that this are was were its new study data".split())


class _Redirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, req, fp, code, msg, headers, newurl):
        external.safe_url(newurl)
        return super().redirect_request(req, fp, code, msg, headers, newurl)


def _get(url, max_bytes=2_000_000):
    external.safe_url(url)
    request = urllib.request.Request(url, headers=UA)
    with urllib.request.build_opener(_Redirect).open(request, timeout=20) as response:
        return response.read(max_bytes)


def _json(url):
    return json.loads(_get(url).decode("utf-8"))


def words(query, k=6):
    picked = [w for w in re.findall(r"[a-z]{3,}", query.lower()) if w not in STOP]
    return " ".join(list(dict.fromkeys(picked))[:k])


def _fits(size):
    return MIN_FILE_BYTES <= int(size or 0) <= prepare.MAX_BYTES


def zenodo(query, n):
    url = "https://zenodo.org/api/records?" + urlencode(
        {"q": f"({words(query)}) AND filetype:csv", "type": "dataset", "access_right": "open", "size": n * 3}
    )
    out = []
    for hit in (_json(url).get("hits") or {}).get("hits", []):
        files = [
            f
            for f in hit.get("files", [])
            if str(f.get("key", "")).lower().endswith((".csv", ".tsv")) and _fits(f.get("size"))
        ]
        if not files:
            continue
        chosen = max(files, key=lambda f: f["size"])
        meta = hit.get("metadata", {})
        about = re.sub(r"<[^>]+>", " ", meta.get("description") or "")
        out.append(
            {
                "title": prepare.clean(meta.get("title"))[:120],
                "page": hit.get("doi_url") or f"https://zenodo.org/records/{hit['id']}",
                "license": (meta.get("license") or {}).get("id", ""),
                "about": prepare.clean(about)[:240],
                "url": f"https://zenodo.org/api/records/{hit['id']}/files/{quote(chosen['key'])}/content",
            }
        )
        if len(out) >= n:
            break
    return out


def huggingface(query, n):
    url = "https://huggingface.co/api/datasets?" + urlencode(
        {"search": words(query, 3), "filter": "format:csv", "sort": "downloads", "direction": -1, "limit": n * 2}
    )
    hits = _json(url)
    out = []
    for hit in hits if isinstance(hits, list) else []:
        info = _json(f"https://huggingface.co/api/datasets/{quote(hit['id'])}?blobs=true")
        files = [
            s
            for s in info.get("siblings", [])
            if s["rfilename"].lower().endswith(".csv") and _fits(s.get("size"))
        ]
        if not files or info.get("gated") or info.get("private"):
            continue
        chosen = max(files, key=lambda f: f["size"])
        card = info.get("cardData") or {}
        out.append(
            {
                "title": hit["id"],
                "page": f"https://huggingface.co/datasets/{hit['id']}",
                "license": str(card.get("license") or ""),
                "about": prepare.clean(info.get("description") or card.get("pretty_name") or "")[:240],
                "url": f"https://huggingface.co/datasets/{hit['id']}/resolve/main/{quote(chosen['rfilename'])}",
            }
        )
        if len(out) >= n:
            break
    return out


def columns(url):
    head = _get(url, max_bytes=20_000).decode("utf-8-sig", errors="replace")
    first = head.replace("\r", "\n").split("\n", 1)[0]
    delimiter = max(",;\t", key=first.count)
    return [prepare.clean(c)[:50] for c in next(csv.reader(io.StringIO(first), delimiter=delimiter))][:30]


def find(query, n=3, skip=()):
    """Up to n real datasets for query, alternating providers, each with its column names."""
    groups = []
    for provider in (zenodo, huggingface):
        try:
            groups.append(provider(query, n))
        except Exception:
            groups.append([])
    found = [hit for group in zip_longest(*groups) for hit in group if hit and hit["url"] not in skip]
    for hit in found[:n]:
        try:
            hit["columns"] = columns(hit["url"])
        except Exception:
            hit["columns"] = []
    return [hit for hit in found[:n] if hit["columns"]]
