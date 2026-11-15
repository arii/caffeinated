"""Real literature and real public datasets for daughter labs. Host side only: the study sandbox
has no network, so data is downloaded here and mounted read-only.

Literature goes through the team's autoresearch research.py (vendored as autoresearch_research.py):
Exa publication search (prior-art), reading one source for a question (extract), and one
research_log.jsonl per run with Q/S/E ids. OpenAlex, arXiv and PubMed hits are registered in the
same log, so every source an agent can cite has an S id and a URL that came from an API, never
from the model.

Datasets come from Zenodo (CSV files deposited with a DOI) and the Hugging Face hub (CSV datasets).
Only the hosts in HOSTS are contacted, responses are size-capped and cached on disk, and
RESEARCH_MAX_CALLS bounds the number of live requests. MOCK=1 never touches the network: it uses
canned papers and the bundled public Iris measurements (data/public/iris.csv).
"""
import contextlib
import csv
import hashlib
import io
import json
import math
import os
import re
import threading
import time
import xml.etree.ElementTree as ET
from itertools import zip_longest
from pathlib import Path
from types import SimpleNamespace
from urllib.error import HTTPError, URLError
from urllib.parse import quote, urlencode, urlsplit
from urllib.request import HTTPRedirectHandler, Request, build_opener

import autoresearch_research as ar
import llm

HERE = Path(__file__).parent
CACHE_DIR = Path(os.environ.get("RESEARCH_CACHE_DIR", HERE / "data" / "research_cache"))
MAX_CALLS = int(os.environ.get("RESEARCH_MAX_CALLS", "600") or 0)
UA = "ignobel-research/0.1 (https://github.com/arii/caffeinated)"
HOSTS = ("api.openalex.org", "export.arxiv.org", "eutils.ncbi.nlm.nih.gov", "zenodo.org", "huggingface.co",
         "rest.uniprot.org", "alphafold.ebi.ac.uk")
HOST_SUFFIXES = (".huggingface.co", ".hf.co")  # Hugging Face file CDN
LITERATURE = ("exa", "openalex", "arxiv", "pubmed")
MAX_FILE_BYTES = 8_000_000
MIN_FILE_BYTES = 1_500
MAX_ROWS, MAX_COLS, MIN_ROWS = 5000, 40, 30
PUBLIC_IRIS = HERE / "data" / "public" / "iris.csv"

_lock = threading.Lock()
_state = {"calls": 0, "last": {}}


class ResearchError(RuntimeError):
    """A tool call that did not work (network, budget, unusable data). Never fatal to a run."""


def _allowed(url: str) -> bool:
    parts = urlsplit(url)
    host = parts.hostname or ""
    return parts.scheme == "https" and (host in HOSTS or host.endswith(HOST_SUFFIXES))


class _CheckedRedirects(HTTPRedirectHandler):
    """Refuse a redirect to a host outside the allowlist before any request is sent to it."""

    def redirect_request(self, req, fp, code, msg, headers, newurl):
        if not _allowed(newurl):
            raise ResearchError(f"redirected to a host that is not allowed: {urlsplit(newurl).hostname}")
        return super().redirect_request(req, fp, code, msg, headers, newurl)


_opener = build_opener(_CheckedRedirects)


def _http(url: str, max_bytes: int = 2_000_000, first_bytes: int | None = None) -> bytes:
    """GET with allowlist, disk cache, size cap, per-host spacing and a global call budget."""
    if not _allowed(url):
        raise ResearchError(f"host not allowed: {urlsplit(url).hostname}")
    f = CACHE_DIR / "http" / (hashlib.sha256(f"{url}|{first_bytes}".encode()).hexdigest()[:24] + ".bin")
    if f.exists():
        return f.read_bytes()
    host = urlsplit(url).hostname
    with _lock:
        if MAX_CALLS and _state["calls"] >= MAX_CALLS:
            raise ResearchError(f"RESEARCH_MAX_CALLS={MAX_CALLS} reached")
        _state["calls"] += 1
        wait = _state["last"].get(host, 0) + 0.4 - time.monotonic()  # NCBI allows 3 requests/s without a key
        _state["last"][host] = time.monotonic() + max(wait, 0)
    if wait > 0:
        time.sleep(wait)
    headers = {"User-Agent": UA, "Accept": "*/*"}
    if first_bytes:
        headers["Range"] = f"bytes=0-{first_bytes - 1}"
    try:
        with _opener.open(Request(url, headers=headers), timeout=30) as resp:
            if not _allowed(resp.geturl()):
                raise ResearchError(f"redirected to a host that is not allowed: {urlsplit(resp.geturl()).hostname}")
            body = resp.read((first_bytes or max_bytes) + 1)
    except HTTPError as e:
        raise ResearchError(f"HTTP {e.code} from {host}") from e
    except (URLError, TimeoutError, OSError) as e:
        raise ResearchError(f"{host} unreachable: {e}") from e
    if first_bytes:
        body = body[:first_bytes]
    elif len(body) > max_bytes:
        raise ResearchError(f"response from {host} is larger than {max_bytes} bytes")
    f.parent.mkdir(parents=True, exist_ok=True)
    f.write_bytes(body)
    return body


def _json(url: str, **kw):
    try:
        return json.loads(_http(url, **kw).decode("utf-8", errors="replace"))
    except json.JSONDecodeError as e:
        raise ResearchError(f"{urlsplit(url).hostname} returned invalid JSON") from e


def _uniprot_records(query: str) -> list[dict]:
    if re.fullmatch(r"[A-Z][0-9][A-Z0-9]{3}[0-9](?:[A-Z0-9]{3}[0-9])?", query.upper()):
        return [{"primaryAccession": query.upper()}]
    params = {"query": query, "fields": "accession,protein_name,organism_name,gene_names",
              "size": 3, "format": "json"}
    records = _json("https://rest.uniprot.org/uniprotkb/search?" + urlencode(params)).get("results") or []
    if not records:
        raise ResearchError(f"UniProt found no proteins for {query!r}")
    return records


def _alphafold_model(query: str) -> dict:
    errors = []
    for record in _uniprot_records(query):
        accession = str(record.get("primaryAccession") or record.get("accession") or "").upper()
        if not accession:
            continue
        try:
            predictions = _json(f"https://alphafold.ebi.ac.uk/api/prediction/{quote(accession)}")
        except ResearchError as e:
            errors.append(str(e))
            continue
        if isinstance(predictions, dict):
            predictions = [predictions]
        if predictions:
            return next((p for p in predictions if p.get("uniprotAccession") == accession), predictions[0])
    details = f": {'; '.join(errors)}" if errors else ""
    raise ResearchError(f"AlphaFold DB has no prediction for {query!r}{details}")


def _mock_alphafold_model(query: str) -> dict:
    return {
        "entryId": "AF-P69905-F1",
        "uniprotAccession": "P69905",
        "uniprotDescription": "Hemoglobin subunit alpha",
        "organismScientificName": "Homo sapiens",
        "sequence": "M" * 142,
        "globalMetricName": "pLDDT",
        "globalMetricValue": 98.06,
        "pdbUrl": "https://alphafold.ebi.ac.uk/mock/AF-P69905-F1-model.pdb",
        "plddtDocUrl": "https://alphafold.ebi.ac.uk/mock/AF-P69905-F1-confidence.json",
        "modelCreatedDate": "2025-08-01T00:00:00Z",
    }


def _alphafold_hit_and_lead(model: dict) -> tuple[dict, dict]:
    accession = str(model.get("uniprotAccession") or "")
    entry = str(model.get("entryId") or model.get("modelEntityId") or f"AF-{accession}-F1")
    confidence_url = str(model.get("plddtDocUrl") or "")
    pdb_url = str(model.get("pdbUrl") or "")
    if not accession or not confidence_url or not pdb_url or not _allowed(confidence_url) or not _allowed(pdb_url):
        raise ResearchError("AlphaFold prediction is missing a valid confidence or PDB URL")
    sequence = model.get("sequence") or model.get("uniprotSequence") or ""
    length = len(sequence) or max(0, int(model.get("sequenceEnd") or 0) - int(model.get("sequenceStart") or 1) + 1)
    metric_name = str(model.get("globalMetricName") or "pLDDT").casefold()
    mean = (model.get("globalMetricValue", model.get("globalMeanPlddt", "unknown"))
            if metric_name == "plddt" else model.get("globalMeanPlddt", "unknown"))
    protein = _clean(model.get("uniprotDescription") or model.get("proteinName") or f"protein {accession}")
    organism = _clean(model.get("organismScientificName") or "unknown organism")
    title = f"AlphaFold model {entry}: {protein} ({organism})"
    entry_url = f"https://alphafold.ebi.ac.uk/entry/{quote(entry)}"
    summary = f"Sequence length: {length} residues. Global mean pLDDT: {mean}. PDB model: {pdb_url}."
    hit = {"title": title, "url": entry_url,
           "published": str(model.get("modelCreatedDate") or "")[:10], "text": summary}
    lead = {
        "id": f"alphafold:{accession}:{confidence_url}",
        "title": f"{title} per-residue confidence (pLDDT)",
        "url": entry_url,
        "license": "CC BY 4.0",
        "bytes": 0,
        "about": summary,
        "file_url": confidence_url,
        "format": "alphafold_confidence_json",
        "preview": ["residue_number", "plddt", "confidence_category"],
    }
    return hit, lead


def _confidence_category(plddt: float) -> str:
    if plddt < 50:
        return "very_low"
    if plddt < 70:
        return "low"
    if plddt < 90:
        return "confident"
    return "very_high"


def _confidence_csv(data: dict | list) -> bytes:
    if isinstance(data, dict):
        residues = data.get("residueNumber") or data.get("residue_number")
        scores = data.get("confidenceScore") or data.get("plddt")
    elif isinstance(data, list):
        residues = [row.get("residueNumber", row.get("residue_number")) for row in data if isinstance(row, dict)]
        scores = [row.get("confidenceScore", row.get("plddt")) for row in data if isinstance(row, dict)]
    else:
        residues, scores = [], []
    if not isinstance(residues, list) or not isinstance(scores, list) or not residues or len(residues) != len(scores):
        raise ResearchError("AlphaFold confidence data has an unsupported shape")
    out = io.StringIO()
    writer = csv.writer(out)
    writer.writerow(("residue_number", "plddt", "confidence_category"))
    for residue, score in zip(residues, scores):
        value = _num(str(score))
        if value is not None:
            writer.writerow((residue, value, _confidence_category(value)))
    return out.getvalue().encode("utf-8")


def _clean(text) -> str:
    return re.sub(r"\s+", " ", str(text or "")).strip()


def _words(query: str, k: int = 8) -> str:
    return " ".join(re.findall(r"[A-Za-z0-9]+", query)[:k])


# ------------------------------------------------------------- literature
def _openalex(query: str, n: int) -> list[dict]:
    params = {"search": query, "per-page": n,
              "select": "id,title,publication_year,doi,cited_by_count,abstract_inverted_index"}
    if os.environ.get("OPENALEX_API_KEY"):
        params["api_key"] = os.environ["OPENALEX_API_KEY"]
    out = []
    for w in _json("https://api.openalex.org/works?" + urlencode(params)).get("results", []):
        inv = w.get("abstract_inverted_index") or {}
        pos = sorted((p, word) for word, ps in inv.items() for p in ps)
        out.append({"title": _clean(w.get("title")), "url": w.get("doi") or w.get("id") or "",
                    "published": str(w.get("publication_year") or ""),
                    "text": _clean(" ".join(word for _, word in pos))[:600]})
    return out


def _arxiv(query: str, n: int) -> list[dict]:
    url = "https://export.arxiv.org/api/query?" + urlencode({"search_query": f"all:{_words(query)}", "max_results": n})
    ns = {"a": "http://www.w3.org/2005/Atom"}
    try:
        root = ET.fromstring(_http(url))
    except ET.ParseError as e:
        raise ResearchError("arXiv returned invalid XML") from e
    return [{"title": _clean(e.findtext("a:title", "", ns)), "url": _clean(e.findtext("a:id", "", ns)),
             "published": _clean(e.findtext("a:published", "", ns))[:10],
             "text": _clean(e.findtext("a:summary", "", ns))[:600]} for e in root.findall("a:entry", ns)]


def _pubmed(query: str, n: int) -> list[dict]:
    base = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/"
    ids = _json(base + "esearch.fcgi?" + urlencode({"db": "pubmed", "term": query, "retmode": "json", "retmax": n,
                                                    "sort": "relevance"})).get("esearchresult", {}).get("idlist", [])
    if not ids:
        return []
    try:
        root = ET.fromstring(_http(base + "efetch.fcgi?" + urlencode({"db": "pubmed", "id": ",".join(ids),
                                                                      "retmode": "xml"})))
    except ET.ParseError as e:
        raise ResearchError("PubMed returned invalid XML") from e
    out = []
    for art in root.findall(".//PubmedArticle"):
        pmid = art.findtext(".//PMID", "")
        abstract = " ".join("".join(t.itertext()) for t in art.findall(".//Abstract/AbstractText"))
        out.append({"title": _clean("".join(art.find(".//ArticleTitle").itertext()) if art.find(".//ArticleTitle") is not None else ""),
                    "url": f"https://pubmed.ncbi.nlm.nih.gov/{pmid}/", "published": art.findtext(".//PubDate/Year", ""),
                    "text": _clean(abstract)[:600]})
    return out


def _mock_papers(tool: str, query: str, n: int) -> list[dict]:
    h = hashlib.sha256(f"{tool}|{query}".encode()).hexdigest()[:12]
    return [{"title": f"Mock {tool} paper {i} on {query}", "url": f"https://example.org/mock/{tool}/{h}/{i}",
             "published": "2020", "text": f"Mock abstract {i} about {query}."} for i in range(n)]


class Bibliography:
    """One run's research_log.jsonl in the autoresearch research.py format. Thread-safe."""

    def __init__(self, out_dir: str | Path):
        self.path = Path(out_dir) / "research_log.jsonl"
        self.exa_cache = Path(os.environ.get("EXA_CACHE_DIR", HERE / "data" / "seed_cache")) / "autoresearch"
        self._lock = threading.Lock()
        self._key_idx = 0

    def size(self) -> int:
        return self.path.stat().st_size if self.path.exists() else 0

    def truncate(self, size: int) -> None:
        if self.path.exists() and self.path.stat().st_size > size:
            with open(self.path, "r+b") as f:
                f.truncate(size)

    def _args(self, agent: str, **kw) -> SimpleNamespace:
        return SimpleNamespace(agent=agent, regime=None, log=str(self.path), cache_dir=str(self.exa_cache),
                               replay=False, category="publication", since=None, **kw)

    def _register(self, agent: str, tool: str, query: str, hits: list[dict]) -> list[dict]:
        """Append one query record and its sources, giving each source the next S id."""
        records = ar.read_log(self.path)
        qid = ar.query_id_for(records)
        first = ar.next_id(records, "source", ar.SOURCE_ID_RE)
        sources = [{"type": "source", "id": f"S{first + i}", "ts": ar.timestamp(), "query_id": qid, "agent": agent,
                    "query": query, "url": h["url"], "title": h["title"], "published": h.get("published") or None,
                    "highlights": [h["text"]] if h.get("text") else []} for i, h in enumerate(hits) if h.get("url")]
        q = ar.append_query_record(self._args(agent), records, qid, "search", query, tool, len(sources), None, 0)
        q["disabled"] = True  # not an Exa call: research.py's EXA_MAX_CALLS check skips records with this flag
        ar.append_records(self.path, [q, *sources])
        return sources

    def add(self, agent: str, tool: str, query: str, hits: list[dict]) -> list[dict]:
        with self._lock:
            return self._register(agent, tool, query, hits)

    def _exa(self, call) -> None:
        """Run one research.py Exa command. research.py reads EXA_API_KEY only, so with a comma-separated
        EXA_KEYS (as search.py accepts) each call takes the next key, and a failed call tries the others."""
        keys = [k.strip() for k in os.environ.get("EXA_KEYS", "").split(",") if k.strip()]
        for attempt in range(max(1, len(keys))):
            if keys:
                os.environ["EXA_API_KEY"] = keys[self._key_idx % len(keys)]
                self._key_idx += 1
            try:
                return call()
            except (ValueError, ar.BudgetExceeded) as e:
                raise ResearchError(f"Exa: {e}") from e
            except RuntimeError as e:
                if attempt + 1 >= max(1, len(keys)):
                    raise ResearchError(f"Exa: {e}") from e

    def search(self, agent: str, tool: str, query: str, n: int = 4) -> list[dict]:
        """Literature search with `tool` (exa, openalex, arxiv, pubmed) -> source records with S ids."""
        query = _clean(query)[:300]
        if tool not in LITERATURE or not query:
            raise ResearchError(f"unknown literature tool {tool!r}" if query else "empty query")
        if llm.MOCK:
            return self.add(agent, tool, query, _mock_papers(tool, query, n))
        if tool == "exa":
            with self._lock, contextlib.redirect_stdout(io.StringIO()):
                before = len(ar.read_log(self.path))
                self._exa(lambda: ar.run_prior_art(self._args(agent, command="prior-art", query=query, n=n)))
                return [r for r in ar.read_log(self.path)[before:] if r.get("type") == "source"]
        hits = {"openalex": _openalex, "arxiv": _arxiv, "pubmed": _pubmed}[tool](query, n)
        return self.add(agent, tool, query, hits)

    def alphafold(self, agent: str, query: str) -> tuple[list[dict], dict]:
        """Resolve a protein name or UniProt accession to an AlphaFold source and pLDDT lead."""
        query = _clean(query)[:200]
        if not query:
            raise ResearchError("empty query")
        model = _mock_alphafold_model(query) if llm.MOCK else _alphafold_model(query)
        hit, lead = _alphafold_hit_and_lead(model)
        return self.add(agent, "alphafold", query, [hit]), lead

    def get(self, sid: str) -> dict | None:
        for r in ar.read_log(self.path):
            if r.get("type") == "source" and r.get("id") == sid:
                return r
        return None

    def read(self, agent: str, sid: str, question: str) -> str:
        """Read one source for `question` (autoresearch `extract`: Exa /contents with a summary)."""
        src = self.get(sid)
        if src is None:
            raise ResearchError(f"unknown source {sid}")
        if llm.MOCK:
            return f"Mock reading of {src['title']}: the reported effect was modest. ({question[:80]})"
        with self._lock, contextlib.redirect_stdout(io.StringIO()) as out:
            self._exa(lambda: ar.run_extract(self._args(agent, command="extract", source=sid, question=question)))
            return _clean(out.getvalue())[:1500]


# --------------------------------------------------------------- datasets
def _snake(name: str, taken: set[str]) -> str:
    s = re.sub(r"[^a-z0-9]+", "_", str(name).strip().lower()).strip("_")[:40] or "col"
    if s[0].isdigit():
        s = "c_" + s
    base, k = s, 2
    while s in taken:
        s, k = f"{base}_{k}", k + 1
    taken.add(s)
    return s


def _table(raw: bytes) -> tuple[list[str], list[list[str]]]:
    text = raw.decode("utf-8-sig", errors="replace").replace("\r\n", "\n").replace("\r", "\n")
    delim = max(",;\t|", key=lambda d: text[:4000].split("\n", 1)[0].count(d))
    try:
        rows = [r for r in csv.reader(io.StringIO(text), delimiter=delim) if any(c.strip() for c in r)]
    except csv.Error as e:
        raise ResearchError(f"file is not a readable table: {e}") from e
    if len(rows) < 2:
        raise ResearchError("file has no data rows")
    return rows[0], rows[1:]


def _num(x: str) -> float | None:
    try:
        v = float(x)
    except (TypeError, ValueError):
        return None
    return v if math.isfinite(v) else None


def profile(header: list[str], rows: list[list[str]]) -> tuple[list[dict], list[list[str]]]:
    """Keep numeric and small categorical columns. Returns (column descriptions, cleaned rows)."""
    taken: set[str] = set()
    cols, keep = [], []
    for j, name in enumerate(header[:200]):
        vals = [r[j].strip() if j < len(r) else "" for r in rows]
        filled = [v for v in vals if v != ""]
        if len(filled) < MIN_ROWS:
            continue
        nums = [x for x in map(_num, filled) if x is not None]
        distinct = sorted(set(filled))
        if len(nums) >= 0.8 * len(filled) and len(set(nums)) > 1:
            col = {"kind": "numeric", "n": len(nums), "min": round(min(nums), 4), "max": round(max(nums), 4),
                   "mean": round(sum(nums) / len(nums), 4)}
            if len(set(nums)) <= 6:
                col["values"] = sorted(set(nums))
        elif 2 <= len(distinct) <= 20:
            counts = sorted(((filled.count(v), v) for v in distinct), key=lambda t: (-t[0], t[1]))
            col = {"kind": "categorical", "n": len(filled), "values": [v[:40] for _, v in counts[:8]]}
        else:
            continue
        cols.append({"name": _snake(name, taken), "label": _clean(name)[:60], **col})
        keep.append(j)
        if len(cols) >= MAX_COLS:
            break
    if sum(c["kind"] == "numeric" for c in cols) < 1 or len(cols) < 2:
        raise ResearchError("fewer than two usable columns (need numbers to analyse)")
    return cols, [[r[j].strip() if j < len(r) else "" for j in keep] for r in rows]


def _zenodo(query: str, n: int) -> list[dict]:
    q = f"({_words(query)}) AND filetype:csv"
    d = _json("https://zenodo.org/api/records?" + urlencode({"q": q, "type": "dataset", "access_right": "open",
                                                             "size": n * 3}))
    out = []
    for h in (d.get("hits") or {}).get("hits", []):
        files = [f for f in h.get("files", []) if str(f.get("key", "")).lower().endswith((".csv", ".tsv"))
                 and MIN_FILE_BYTES <= int(f.get("size") or 0) <= MAX_FILE_BYTES]
        if not files:
            continue
        f = max(files, key=lambda x: x["size"])
        m = h.get("metadata", {})
        out.append({"id": f"zenodo:{h['id']}:{f['key']}", "title": _clean(m.get("title"))[:120],
                    "url": h.get("doi_url") or f"https://zenodo.org/records/{h['id']}",
                    "license": (m.get("license") or {}).get("id", ""), "bytes": int(f["size"]),
                    "about": _clean(re.sub(r"<[^>]+>", " ", m.get("description") or ""))[:300],
                    "file_url": f"https://zenodo.org/api/records/{h['id']}/files/{quote(f['key'])}/content"})
        if len(out) >= n:
            break
    return out


def _huggingface(query: str, n: int) -> list[dict]:
    hits = _json("https://huggingface.co/api/datasets?" + urlencode({"search": _words(query, 3), "filter": "format:csv",
                                                                     "sort": "downloads", "direction": -1, "limit": n * 2}))
    out = []
    for h in hits if isinstance(hits, list) else []:
        info = _json(f"https://huggingface.co/api/datasets/{quote(h['id'])}?blobs=true")
        files = [s for s in info.get("siblings", []) if s["rfilename"].lower().endswith(".csv")
                 and MIN_FILE_BYTES <= int(s.get("size") or 0) <= MAX_FILE_BYTES]
        if not files or info.get("gated") or info.get("private"):
            continue
        f = max(files, key=lambda x: x["size"])
        card = info.get("cardData") or {}
        lic = card.get("license") or ""
        out.append({"id": f"hf:{h['id']}:{f['rfilename']}", "title": h["id"], "license": lic if isinstance(lic, str) else str(lic),
                    "url": f"https://huggingface.co/datasets/{h['id']}", "bytes": int(f["size"]),
                    "about": _clean(info.get("description") or card.get("pretty_name") or "")[:300],
                    "file_url": f"https://huggingface.co/datasets/{h['id']}/resolve/main/{quote(f['rfilename'])}"})
        if len(out) >= n:
            break
    return out


MOCK_LEAD = {"id": "hf:scikit-learn/iris:Iris.csv", "title": "Iris flower measurements (Fisher, 1936)",
             "url": "https://huggingface.co/datasets/scikit-learn/iris", "license": "cc0-1.0", "bytes": 5107,
             "about": "150 flowers of three iris species; sepal and petal length and width in cm.",
             "file_url": "https://huggingface.co/datasets/scikit-learn/iris/resolve/main/Iris.csv"}


def _mock_confidence_data() -> dict:
    scores = [round(40 + (i * 37 % 60), 2) for i in range(1, 143)]
    return {"residueNumber": list(range(1, len(scores) + 1)), "confidenceScore": scores}


def find_datasets(query: str, n: int = 3, skip=()) -> list[dict]:
    """Up to `n` candidate real datasets for `query` that are not in `skip` (ids the lab already has),
    alternating between providers, each with a preview of its column names."""
    query = _clean(query)[:200]
    if not query:
        raise ResearchError("empty query")
    if llm.MOCK:
        lead = {**MOCK_LEAD, "preview": ["Id", "SepalLengthCm", "SepalWidthCm", "PetalLengthCm", "PetalWidthCm", "Species"]}
        return [] if lead["id"] in set(skip) else [lead]
    hits, errors = [], []
    for fn in (_zenodo, _huggingface):
        try:
            hits.append(fn(query, n))
        except ResearchError as e:
            errors.append(str(e))
    if not any(hits) and errors:
        raise ResearchError("; ".join(errors))
    mixed = [c for group in zip_longest(*hits) for c in group if c]
    found = [c for c in mixed if c["id"] not in set(skip)][:n]
    for c in found:
        try:
            head = _http(c["file_url"], first_bytes=20_000)
            c["preview"] = [_clean(x)[:40] for x in _table(head + b"\n")[0]][:25]
        except ResearchError:
            c["preview"] = []
    return found


def fetch_dataset(lead: dict, dest: Path) -> dict:
    """Download a lead's CSV, keep the analysable columns, write it to `dest`. Returns the dataset record."""
    if llm.MOCK:
        raw = (_confidence_csv(_mock_confidence_data()) if lead.get("format") == "alphafold_confidence_json"
               else PUBLIC_IRIS.read_bytes())
    else:
        if lead.get("bytes", 0) > MAX_FILE_BYTES:
            raise ResearchError("file too large")
        if lead.get("format") == "alphafold_confidence_json":
            raw = _confidence_csv(_json(lead["file_url"]))
        else:
            raw = _http(lead["file_url"], max_bytes=MAX_FILE_BYTES)
    header, rows = _table(raw)
    truncated = len(rows) > MAX_ROWS
    cols, clean = profile(header, rows[:MAX_ROWS])
    if len(clean) < MIN_ROWS:
        raise ResearchError(f"only {len(clean)} rows; need at least {MIN_ROWS}")
    dest.parent.mkdir(parents=True, exist_ok=True)
    with open(dest, "w", newline="", encoding="utf-8") as f:
        w = csv.writer(f)
        w.writerow([c["name"] for c in cols])
        w.writerows(clean)
    return {"id": lead["id"], "title": lead["title"], "url": lead["url"], "license": lead.get("license", ""),
            "file_url": lead["file_url"], "bytes": lead.get("bytes", 0), "rows": len(clean), "truncated": truncated, "columns": cols,
            "sha256": hashlib.sha256(dest.read_bytes()).hexdigest()[:16]}


def describe(ds: dict, k: int = 20) -> str:
    """One prompt line per column of an attached dataset."""
    lines = [f"dataset '{ds['name']}': {ds['title']} ({ds['rows']} rows, {ds['url']})"]
    for c in ds["columns"][:k]:
        if c["kind"] == "numeric":
            extra = f"number, {c['min']}..{c['max']}, mean {c['mean']}"
            if c.get("values"):
                extra += f", values {c['values']}"
        else:
            extra = "category: " + ", ".join(map(repr, c["values"]))
        lines.append(f"  - {c['name']} ({c['label']}): {extra}")
    return "\n".join(lines)
