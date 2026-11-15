"""Download a real public CSV/TSV once, clean it, and split its rows in two.

Used by external.py for the datasets that pre-registrations name. Every row goes
to data/<id>.csv or .cache/replication/<id>.csv by a fixed hash of its row
number (the grader reads both; nothing here is shown to candidates). Columns
get short ids (v01, v02, ...) described by the returned codebook entry; free
text (> MAX_LEVELS distinct values), respondent ids and row numbers are dropped.
Relative paths resolve against FiveThirtyEight's data repo at a pinned commit.
"""

import csv
import hashlib
import io
import re
import tempfile
import urllib.request
from pathlib import Path

HERE = Path(__file__).resolve().parent
COMMIT = "4c1ff5e3aef1816ae04af63218015066e186c147"
BASE = f"https://raw.githubusercontent.com/fivethirtyeight/data/{COMMIT}"
MAX_LEVELS = 25
MAX_BYTES = 5_000_000
DROP = re.compile(
    r"^(RespondentID|StartDate|EndDate|page_id|name|urlslug|FIRST APPEARANCE|EPISODE|TITLE)$"
)
DEMOGRAPHIC = re.compile(
    r"^(Gender|Age|Household Income|Education|Location \(Census Region\)|US Region|"
    r"What is your gender\?|How much total combined money.*|How would you describe where you live\?|"
    r"Which of the following best describes your current occupation\?|"
    r"Which of the following best describes your current relationship status\?)$"
)


def clean(text):
    text = re.sub(r"<br\s*/?>", " ", str(text))
    text = re.sub(r"[^\x20-\x7e]", "", text)
    return re.sub(r"\s+", " ", text).strip()


URL_CHECK = None


class CheckedRedirect(urllib.request.HTTPRedirectHandler):
    """Re-validate every redirect target with URL_CHECK before following it."""

    def redirect_request(self, req, fp, code, msg, headers, newurl):
        if URL_CHECK is not None:
            URL_CHECK(newurl)
        return super().redirect_request(req, fp, code, msg, headers, newurl)


def atomic_write(path, data):
    """Write via a uniquely named temporary file, so concurrent writers never share one."""
    path = Path(path)
    path.parent.mkdir(parents=True, exist_ok=True)
    with tempfile.NamedTemporaryFile(
        "wb", dir=path.parent, prefix=f".{path.name}.", suffix=".tmp", delete=False
    ) as stream:
        stream.write(data.encode("utf-8") if isinstance(data, str) else data)
    Path(stream.name).replace(path)


def delimiter(first_line):
    """Tab or comma, whichever splits the header row (quotes respected) into more fields."""
    return max(",\t", key=lambda d: len(next(csv.reader([first_line], delimiter=d), [])))


def source_url(path):
    return path if path.startswith("https://") else f"{BASE}/{path}"


def fetch(path):
    url = source_url(path)
    name = (
        path.replace("/", "__")
        if url != path
        else "url_" + hashlib.sha256(url.encode()).hexdigest()[:16]
    )
    cache = HERE / ".cache" / "raw" / name
    if not cache.exists():
        cache.parent.mkdir(parents=True, exist_ok=True)
        request = urllib.request.Request(url, headers={"User-Agent": "caffeinated-ignobel/1"})
        if URL_CHECK is not None:
            URL_CHECK(url)
        with urllib.request.build_opener(CheckedRedirect).open(request, timeout=60) as response:
            raw = response.read(MAX_BYTES + 1)
        if len(raw) > MAX_BYTES:
            raise ValueError(f"{url} is larger than {MAX_BYTES} bytes")
        atomic_write(cache, raw)
    raw = cache.read_bytes()
    try:
        return raw.decode("utf-8")
    except UnicodeDecodeError:
        return raw.decode("cp1252", errors="replace")


def read_table(path, spec):
    rows = list(csv.reader(io.StringIO(fetch(path)), delimiter=spec.get("delimiter", ",")))
    header, rows = rows[0], rows[1:]
    sub = None
    if rows and "Response" in rows[0]:
        sub, rows = rows[0], rows[1:]
    columns, last = [], None
    for index, name in enumerate(header):
        name = clean(spec.get("rename", {}).get(name, name))
        unnamed = name.startswith("Unnamed") or not name
        if not unnamed:
            last = name
        option = clean(sub[index]) if sub else ""
        if option in ("Response", ""):
            option = ""
        label = spec.get("labels", {}).get(name, name)
        if unnamed:
            label = f"{last} - {option}" if option else last
        elif option:
            label = f"{name} - {option}"
        group = last if (sub and option) or unnamed else name
        if not sub and " - " in name and "select all that apply" in name.lower():
            group = name.split(" - ")[0]
        columns.append(
            {"source": name, "label": spec.get("label_prefix", "") + label, "group": group}
        )
    return columns, rows


def load(spec):
    tables = []
    for path in spec["files"]:
        columns, rows = read_table(path, spec)
        if "source_column" in spec:
            columns.append(
                {
                    "source": spec["source_column"],
                    "label": "Publisher wiki",
                    "group": "Publisher wiki",
                }
            )
            publisher = "Marvel" if "marvel" in path else "DC"
            rows = [row + [publisher] for row in rows]
        tables.append((columns, rows))
    names = [c["source"] for c in tables[0][0]]
    merged = []
    for columns, rows in tables:
        if [c["source"] for c in columns] == names:
            merged.extend(rows)
            continue
        position = {c["source"]: i for i, c in enumerate(columns)}
        merged.extend(
            [
                row[position[n]] if position.get(n) is not None and position[n] < len(row) else ""
                for n in names
            ]
            for row in rows
        )
    return tables[0][0], merged


def build(name, spec):
    columns, rows = load(spec)
    keep, variables = [], {}
    groups = {}
    for index, column in enumerate(columns):
        if DROP.match(column["source"]) or re.match(spec.get("drop", r"(?!)"), column["source"]):
            continue
        fill = spec.get("fill", {}).get(column["source"])
        values = [clean(row[index]) if index < len(row) else "" for row in rows]
        if fill:
            values = [v or fill for v in values]
        present = [v for v in values if v]
        if not present:
            continue
        numeric = all(re.fullmatch(r"-?\d+(\.\d+)?", v) for v in present)
        distinct = sorted(set(present))
        if not numeric and len(distinct) > MAX_LEVELS:
            continue
        if column["source"].endswith("Other (please specify)") and len(distinct) > 2:
            continue
        groups.setdefault(column["group"], []).append(len(keep))
        keep.append((index, column, values, numeric, distinct))
    table = []
    for position, (_index, column, values, numeric, distinct) in enumerate(keep):
        vid = f"v{position + 1:02d}"
        members = groups[column["group"]]
        checkbox = len(members) > 1 or "select all that apply" in column["group"].lower()
        if checkbox and not numeric and len(distinct) == 1:
            if len(members) > 1:
                answered = [any(keep[m][2][r] for m in members) for r in range(len(rows))]
            else:
                neighbours = [
                    keep[i][2] for i in (position - 1, position + 1) if 0 <= i < len(keep)
                ]
                answered = [any(n[r] for n in neighbours) for r in range(len(rows))]
            values = [v or ("(not selected)" if answered[r] else "") for r, v in enumerate(values)]
            distinct = sorted({v for v in values if v})
        variables[vid] = {
            "label": column["label"],
            "group": column["group"],
            "kind": "numeric" if numeric else "categorical",
            "demographic": bool(DEMOGRAPHIC.match(column["source"])),
        }
        if not numeric:
            variables[vid]["levels"] = distinct
        table.append(values)
    discovery, replication = [], []
    for r in range(len(rows)):
        record = [table[c][r] for c in range(len(table))]
        if not any(record):
            continue
        bucket = int(hashlib.sha256(f"{name}:{r}".encode()).hexdigest(), 16) % 2
        (discovery if bucket == 0 else replication).append(record)
    header = list(variables)
    for path, part in (
        (HERE / "data" / f"{name}.csv", discovery),
        (HERE / ".cache" / "replication" / f"{name}.csv", replication),
    ):
        stream = io.StringIO(newline="")
        writer = csv.writer(stream)
        writer.writerow(header)
        writer.writerows(part)
        atomic_write(path, stream.getvalue())
    return {
        "title": spec["title"],
        "source": [source_url(p) for p in spec["files"]],
        "license": spec.get("license", "CC BY 4.0"),
        "file": f"data/{name}.csv",
        "n_discovery": len(discovery),
        "variables": variables,
    }
