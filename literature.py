#!/usr/bin/env python3
"""Keyless literature search (OpenAlex, arXiv, PubMed) for runs without Exa.

Used by swarm.py when Exa is off (`--exa off` or no EXA_API_KEY). Hits are written to
the run's research_log.jsonl in research.py's format (query records plus S<k> source
records), so ideas cite S ids and task evaluators verify them exactly as Exa sources.
Every source URL comes from an API response (a DOI link when the API reports one),
never from the model. Query records carry `disabled: true` (no Exa call: not counted
against EXA_MAX_CALLS or Exa cost) and `provider` names the API.

Only the hosts in HOSTS are contacted over https; responses are size-capped, cached
under <log dir>/literature_cache, spaced per host, and LITERATURE_MAX_CALLS bounds live
requests. A provider that fails is skipped; a search where all fail logs zero sources.
"""

import hashlib
import json
import os
import re
import threading
import time
import xml.etree.ElementTree as ET
from itertools import zip_longest
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.parse import urlencode, urlsplit
from urllib.request import HTTPRedirectHandler, Request, build_opener

import research

UA = "caffeinated-literature/1 (https://github.com/arii/caffeinated)"
HOSTS = ("api.openalex.org", "export.arxiv.org", "eutils.ncbi.nlm.nih.gov")
PROVIDERS = ("openalex", "arxiv", "pubmed")
MAX_BYTES = 2_000_000
TEXT_CHARS = 600
HOST_SPACING = 0.4  # NCBI allows 3 requests/s without a key
ATOM = {"a": "http://www.w3.org/2005/Atom", "arxiv": "http://arxiv.org/schemas/atom"}

_lock = threading.Lock()
_state = {"calls": 0, "last": {}}


class LiteratureError(RuntimeError):
    """A provider call that did not work (network, budget, bad payload). Never fatal."""


def _allowed(url):
    parts = urlsplit(url)
    return parts.scheme == "https" and parts.hostname in HOSTS


class _CheckedRedirects(HTTPRedirectHandler):
    def redirect_request(self, req, fp, code, msg, headers, newurl):
        if not _allowed(newurl):
            raise LiteratureError(f"redirect to a host that is not allowed: {newurl}")
        return super().redirect_request(req, fp, code, msg, headers, newurl)


def max_calls():
    value = os.environ.get("LITERATURE_MAX_CALLS", "200")
    try:
        return max(int(value), 0)
    except ValueError as error:
        raise ValueError("LITERATURE_MAX_CALLS must be a non-negative integer") from error


def fetch(url, cache_dir):
    """GET with host allowlist, disk cache, size cap, per-host spacing and a call budget."""
    if not _allowed(url):
        raise LiteratureError(f"host not allowed: {urlsplit(url).hostname}")
    cached = Path(cache_dir) / (hashlib.sha256(url.encode()).hexdigest()[:24] + ".bin")
    if cached.exists():
        return cached.read_bytes()
    host = urlsplit(url).hostname
    with _lock:
        if _state["calls"] >= max_calls():
            raise LiteratureError(f"LITERATURE_MAX_CALLS={max_calls()} reached")
        _state["calls"] += 1
        wait = _state["last"].get(host, 0) + HOST_SPACING - time.monotonic()
        _state["last"][host] = time.monotonic() + max(wait, 0)
    if wait > 0:
        time.sleep(wait)
    request = Request(url, headers={"User-Agent": UA, "Accept": "*/*"})
    try:
        with build_opener(_CheckedRedirects).open(request, timeout=30) as response:
            body = response.read(MAX_BYTES + 1)
    except HTTPError as error:
        raise LiteratureError(f"HTTP {error.code} from {host}") from error
    except (URLError, TimeoutError, OSError) as error:
        raise LiteratureError(f"{host} unreachable: {error}") from error
    if len(body) > MAX_BYTES:
        raise LiteratureError(f"response from {host} is larger than {MAX_BYTES} bytes")
    cached.parent.mkdir(parents=True, exist_ok=True)
    cached.write_bytes(body)
    return body


def _json(url, cache_dir):
    try:
        return json.loads(fetch(url, cache_dir).decode("utf-8", errors="replace"))
    except json.JSONDecodeError as error:
        raise LiteratureError(f"{urlsplit(url).hostname} returned invalid JSON") from error


def _xml(url, cache_dir):
    try:
        return ET.fromstring(fetch(url, cache_dir))
    except ET.ParseError as error:
        raise LiteratureError(f"{urlsplit(url).hostname} returned invalid XML") from error


def clean(text):
    return re.sub(r"\s+", " ", str(text or "")).strip()


STOP = frozenset(
    [
        "about",
        "and",
        "are",
        "but",
        "can",
        "did",
        "does",
        "for",
        "from",
        "has",
        "have",
        "how",
        "into",
        "its",
        "not",
        "of",
        "the",
        "than",
        "that",
        "this",
        "was",
        "were",
        "what",
        "when",
        "which",
        "who",
        "why",
        "with",
    ]
)


def words(query, k=4):
    return [w for w in re.findall(r"[A-Za-z0-9]{3,}", query) if w.lower() not in STOP][:k]


def doi_url(doi):
    doi = clean(doi)
    if not doi:
        return ""
    return doi if doi.lower().startswith("https://doi.org/") else f"https://doi.org/{doi}"


def year(since):
    match = re.match(r"\d{4}", str(since or ""))
    return int(match.group(0)) if match else None


def openalex(query, n, cache_dir, since=None):
    params = {
        "search": query,
        "per-page": n,
        "select": "id,title,publication_year,doi,abstract_inverted_index",
    }
    if year(since):
        params["filter"] = f"from_publication_date:{year(since)}-01-01"
    if os.environ.get("OPENALEX_API_KEY"):
        params["api_key"] = os.environ["OPENALEX_API_KEY"]
    hits = []
    for work in _json("https://api.openalex.org/works?" + urlencode(params), cache_dir).get(
        "results", []
    ):
        index = work.get("abstract_inverted_index") or {}
        abstract = " ".join(
            word for _, word in sorted((p, word) for word, ps in index.items() for p in ps)
        )
        hits.append(
            {
                "title": clean(work.get("title")),
                "url": doi_url(work.get("doi")) or clean(work.get("id")),
                "published": str(work.get("publication_year") or ""),
                "text": clean(abstract)[:TEXT_CHARS],
            }
        )
    return hits


def arxiv(query, n, cache_dir, since=None):
    terms = words(query, 3)
    entries = []
    # arXiv ANDs every term; drop the last one once if that is too strict.
    for k in (3, 2)[: max(len(terms) - 1, 1)]:
        url = "https://export.arxiv.org/api/query?" + urlencode(
            {"search_query": " AND ".join(f"all:{w}" for w in terms[:k]), "max_results": n}
        )
        entries = _xml(url, cache_dir).findall("a:entry", ATOM)
        if entries:
            break
    hits = []
    for entry in entries:
        published = clean(entry.findtext("a:published", "", ATOM))[:10]
        if year(since) and year(published) and year(published) < year(since):
            continue
        abs_url = clean(entry.findtext("a:id", "", ATOM)).replace("http://", "https://", 1)
        hits.append(
            {
                "title": clean(entry.findtext("a:title", "", ATOM)),
                "url": doi_url(entry.findtext("arxiv:doi", "", ATOM)) or abs_url,
                "published": published,
                "text": clean(entry.findtext("a:summary", "", ATOM))[:TEXT_CHARS],
            }
        )
    return hits


def pubmed(query, n, cache_dir, since=None):
    base = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/"
    params = {"db": "pubmed", "term": query, "retmode": "json", "retmax": n, "sort": "relevance"}
    if year(since):
        params.update({"datetype": "pdat", "mindate": str(year(since)), "maxdate": "3000"})
    ids = (
        _json(base + "esearch.fcgi?" + urlencode(params), cache_dir)
        .get("esearchresult", {})
        .get("idlist", [])
    )
    if not ids:
        return []
    root = _xml(
        base + "efetch.fcgi?" + urlencode({"db": "pubmed", "id": ",".join(ids), "retmode": "xml"}),
        cache_dir,
    )
    hits = []
    for article in root.findall(".//PubmedArticle"):
        pmid = article.findtext(".//MedlineCitation/PMID", "")
        title = article.find(".//ArticleTitle")
        doi = next(
            (
                node.text
                for node in article.findall(".//PubmedData/ArticleIdList/ArticleId")
                if node.get("IdType") == "doi" and node.text
            ),
            "",
        )
        abstract = " ".join(
            "".join(t.itertext()) for t in article.findall(".//Abstract/AbstractText")
        )
        hits.append(
            {
                "title": clean("".join(title.itertext()) if title is not None else ""),
                "url": doi_url(doi) or f"https://pubmed.ncbi.nlm.nih.gov/{pmid}/",
                "published": clean(article.findtext(".//PubDate/Year", "")),
                "text": clean(abstract)[:TEXT_CHARS],
            }
        )
    return hits


SEARCHES = {"openalex": openalex, "arxiv": arxiv, "pubmed": pubmed}


def search(query, n, cache_dir, since=None):
    """Up to n hits interleaved across providers, deduplicated by URL; plus per-provider status."""
    groups, status = [], {}
    for name in PROVIDERS:
        try:
            groups.append([(name, hit) for hit in SEARCHES[name](query, n, cache_dir, since)])
            status[name] = len(groups[-1])
        except LiteratureError as error:
            status[name] = str(error)
    hits, seen = [], set()
    for name, hit in (item for group in zip_longest(*groups) for item in group if item):
        key = hit["url"].lower() if hit["url"].startswith("https://doi.org/") else hit["url"]
        if hit["url"] and hit["title"] and key not in seen:
            seen.add(key)
            hits.append({**hit, "provider": name})
    return hits[:n], status


def cache_dir_for(args):
    return Path(args.log).parent / "literature_cache"


def purpose_of(args):
    return {"prior-art": "prior-art", "extract": "extract"}.get(args.command, args.command)


def run_search(args):
    """prior-art, scout and worker-search: paper hits for args.query. Code scouting needs Exa."""
    if args.n < 1:
        raise ValueError("--n must be at least 1")
    records = research.read_log(args.log)
    query_id = research.query_id_for(records)
    query = clean(args.query)[:300]
    started = time.monotonic()
    if getattr(args, "kind", None) == "code" or not query:
        hits, status = [], {"skipped": "code search needs Exa" if query else "empty query"}
    else:
        hits, status = search(query, args.n, cache_dir_for(args), getattr(args, "since", None))
    first = research.next_id(records, "source", research.SOURCE_ID_RE)
    sources = [
        {
            "type": "source",
            "id": f"S{first + index}",
            "ts": research.timestamp(),
            "query_id": query_id,
            "agent": args.agent,
            "query": query,
            "url": hit["url"],
            "title": hit["title"],
            "published": hit["published"] or None,
            "highlights": [hit["text"]] if hit["text"] else [],
            "provider": hit["provider"],
        }
        for index, hit in enumerate(hits)
    ]
    extra = {"disabled": True, "provider": "keyless", "providers": status}
    if getattr(args, "cell", None):
        extra["cell"] = args.cell
    record = research.append_query_record(
        args,
        records,
        query_id,
        purpose_of(args),
        query,
        "keyless",
        len(sources),
        0,
        int((time.monotonic() - started) * 1000),
        **extra,
    )
    research.append_records(args.log, [record, *sources])
    return 0


def run_extract(args):
    """Read one source: its API abstract (keyless runs have no full-text reader)."""
    records = research.read_log(args.log)
    source = research.source_by_id(records, args.source)
    question = args.question or research.DEFAULT_EXTRACT_QUESTION
    query_id = research.query_id_for(records)
    abstract = " ".join(source.get("highlights") or [])
    record = research.append_query_record(
        args,
        records,
        query_id,
        "extract",
        question,
        "keyless",
        1,
        0,
        0,
        disabled=True,
        provider="keyless",
    )
    rows = [record]
    if abstract:
        rows.append(
            {
                "type": "extract",
                "id": f"E{research.next_id(records, 'extract', research.EXTRACT_ID_RE)}",
                "source_id": args.source,
                "query_id": query_id,
                "ts": research.timestamp(),
                "agent": args.agent,
                "summary": f"Abstract ({source.get('provider', 'keyless')}): {abstract}",
                "cost": 0,
                "latency_ms": 0,
            }
        )
    research.append_records(args.log, rows)
    return 0


RUNNERS = {
    "prior-art": run_search,
    "scout": run_search,
    "worker-search": run_search,
    "extract": run_extract,
}
