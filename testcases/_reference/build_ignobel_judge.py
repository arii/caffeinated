"""Build the frozen Ig Nobel-likeness judge used by testcases/ignobel_mini/evaluate.py.

Positives: every Ig Nobel prize rationale on Wikipedia's "List of Ig Nobel Prize
winners" (pinned revision, CC BY-SA 4.0), plus the titles of the winning papers
cited there. Negatives: titles of ordinary English
research articles sampled from OpenAlex (CC0). The model is an L2-regularised
logistic regression on content-word unigrams, trained class-balanced. The corpus
snapshot is written to ignobel_judge_corpus.json and the weights to
../ignobel_mini/judge.json, so the judge is reproducible offline.

Developer-only (needs network and numpy):
    python3 testcases/_reference/build_ignobel_judge.py
Rebuild from the saved corpus without network:
    python3 testcases/_reference/build_ignobel_judge.py --offline
"""

import argparse
import json
import re
import sys
import urllib.parse
import urllib.request
from pathlib import Path

import numpy as np

HERE = Path(__file__).resolve().parent
TASK = HERE.parent / "ignobel_mini"
sys.path.insert(0, str(TASK))
from judge_text import tokens

CORPUS = HERE / "ignobel_judge_corpus.json"
WIKI_REVID = 1385733309
OPENALEX_SEEDS = range(1, 11)
MIN_DF = 2
L2 = 1.0


def fetch_json(url):
    request = urllib.request.Request(url, headers={"User-Agent": "caffeinated-autoresearch/1.0"})
    with urllib.request.urlopen(request, timeout=60) as response:
        return json.load(response)


def strip_wiki(text):
    text = re.sub(r"<ref[^>]*/>", "", text)
    text = re.sub(r"<ref[^>]*>.*?</ref>", "", text, flags=re.S)
    while re.search(r"\{\{[^{}]*\}\}", text):
        text = re.sub(r"\{\{[^{}]*\}\}", "", text)
    text = re.sub(r"\[\[(?:[^|\]]*\|)?([^\]]*)\]\]", r"\1", text)
    text = re.sub(r"\[https?://\S+ ([^\]]*)\]", r"\1", text)
    text = re.sub(r"'''?|<[^>]+>", "", text)
    return re.sub(r"\s+", " ", text).strip()


def cited_titles(text):
    return [
        strip_wiki(t).strip(" .")
        for t in re.findall(
            r"\{\{\s*cite journal[^{}]*?\|\s*title\s*=\s*([^|}]+)", text, flags=re.I
        )
    ]


def rationale(text):
    text = strip_wiki(text).strip().strip('"')
    reason = re.split(r"\bfor\b", text, maxsplit=1)
    return (reason[1] if len(reason) > 1 else text).strip().strip('"')


def ignobel_entries(section):
    """Yield (field, rationale wikitext, full wikitext) from bullet lists and wikitables."""
    for line in section.splitlines():
        entry = re.match(r"^\*\s*'''(.+?)'''\s*:?\s*(.+)$", line)
        if entry:
            yield entry.group(1), entry.group(2), entry.group(2)
    for row in re.split(r"\n\|-[^\n]*", section)[1:]:
        body = row.split("\n|}")[0]
        cells = [c for c in re.split(r"\n\|\s?", "\n" + body.strip()) if c.strip()]
        if len(cells) >= 3 and not cells[0].lstrip().startswith("!"):
            yield cells[0], cells[2], body


def ignobel_citations():
    url = (
        "https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=wikitext"
        f"&oldid={WIKI_REVID}"
    )
    wikitext = fetch_json(url)["parse"]["wikitext"]["*"]
    sections = re.split(r"^==\s*([^=]+?)\s*==\s*$", wikitext, flags=re.M)
    citations, papers = [], []
    for heading, body in zip(sections[1::2], sections[2::2]):
        if not re.fullmatch(r"\d{4}", heading):
            continue
        for field, reason, full in ignobel_entries(body):
            year, field = int(heading), strip_wiki(field)
            citations.append({"year": year, "field": field, "text": rationale(reason)})
            papers.extend({"year": year, "field": field, "text": t} for t in cited_titles(full))
    return citations, papers


def openalex_titles():
    titles = []
    for seed in OPENALEX_SEEDS:
        query = urllib.parse.urlencode(
            {
                "sample": 200,
                "seed": seed,
                "per-page": 200,
                "filter": "type:article,language:en",
                "select": "title",
            }
        )
        data = fetch_json(f"https://api.openalex.org/works?{query}")
        titles.extend(r["title"] for r in data["results"] if r.get("title"))
    return sorted(set(titles))


def train(positives, negatives):
    docs = [(tokens(text), 1) for text in positives] + [(tokens(text), 0) for text in negatives]
    df = {}
    for words, _ in docs:
        for word in set(words):
            df[word] = df.get(word, 0) + 1
    vocab = sorted(word for word, count in df.items() if count >= MIN_DF)
    index = {word: i for i, word in enumerate(vocab)}
    x = np.zeros((len(docs), len(vocab)))
    y = np.array([label for _, label in docs], dtype=float)
    for row, (words, _) in enumerate(docs):
        present = {index[w] for w in words if w in index}
        if present:
            x[row, list(present)] = 1.0 / np.sqrt(len(present))
    weight = np.where(y == 1, 0.5 / y.mean(), 0.5 / (1 - y.mean()))
    w, b = np.zeros(len(vocab)), 0.0
    for _ in range(3000):
        p = 1 / (1 + np.exp(-(x @ w + b)))
        g = (p - y) * weight
        w -= 0.5 * (x.T @ g / len(y) + L2 * w / len(y))
        b -= 0.5 * g.mean()
    p = 1 / (1 + np.exp(-(x @ w + b)))
    accuracy = float(((p > 0.5) == (y == 1)).mean())
    return (
        {word: round(float(value), 5) for word, value in zip(vocab, w) if abs(value) > 1e-4},
        round(float(b), 5),
        accuracy,
    )


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--offline", action="store_true")
    args = parser.parse_args()
    if args.offline:
        corpus = json.loads(CORPUS.read_text(encoding="utf-8"))
    else:
        corpus = {
            "sources": {
                "positives": f"https://en.wikipedia.org/w/index.php?title=List_of_Ig_Nobel_Prize_winners&oldid={WIKI_REVID} (CC BY-SA 4.0)",
                "negatives": f"OpenAlex works sample, type:article, language:en, seeds {list(OPENALEX_SEEDS)} (CC0)",
            },
            "negatives": openalex_titles(),
        }
        corpus["positives"], corpus["positive_papers"] = ignobel_citations()
        CORPUS.write_text(json.dumps(corpus, indent=1, ensure_ascii=False) + "\n", encoding="utf-8")
    positives = [c["text"] for c in corpus["positives"] + corpus["positive_papers"]]
    weights, bias, accuracy = train(positives, corpus["negatives"])
    judge = {
        "version": 1,
        "model": "class-balanced L2 logistic regression on content-word unigrams (l2-normalised presence)",
        "sources": corpus["sources"],
        "n_positives": len(positives),
        "n_negatives": len(corpus["negatives"]),
        "train_accuracy": round(accuracy, 4),
        "bias": bias,
        "weights": dict(sorted(weights.items())),
    }
    (TASK / "judge.json").write_text(
        json.dumps(judge, indent=0, ensure_ascii=False) + "\n", encoding="utf-8"
    )
    print(
        f"positives={len(positives)} negatives={len(corpus['negatives'])} vocab={len(weights)} train_acc={accuracy:.3f}"
    )


if __name__ == "__main__":
    main()
