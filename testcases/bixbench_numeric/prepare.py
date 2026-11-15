"""Download 10 BixBench capsules and build questions.json plus the hidden answer keys.

Numeric questions only (range_verifier, or str_verifier whose answer parses as a number),
minus questions that name R/Bioconductor-only procedures (DESeq2, lfc shrinkage, enrichment).
Capsules whose data needs readers missing from the sandbox (.rds, .xls) or that ship ~90 files
were left out. Questions are split by a fixed hash into dev (graded during search) and
held-out (graded once after the run by final_eval). Data is cached in .cache/ (gitignored).
"""

import hashlib
import io
import json
import shutil
import urllib.request
import zipfile
from pathlib import Path

HERE = Path(__file__).resolve().parent
BASE = "https://huggingface.co/datasets/futurehouse/BixBench/resolve/main"
CAPSULES = {  # short_id -> (capsule uuid, data files inside CapsuleData-<uuid>/)
    "bix-8": (
        "48a6b469-9c9d-4bef-b5b4-f29b7d6fa046",
        ["MeRIP_RNA_result.xlsx", "Proteomic_data.xlsx"],
    ),
    "bix-10": (
        "fbe0e950-76f2-4eb7-a216-a2d377970922",
        ["TASK008_BCG-CORONA_DM.csv", "TASK008_BCG-CORONA_EX.csv", "TASK008_BCG-CORONA_AE.csv"],
    ),
    "bix-18": ("d59734d2-a3e0-462a-a5fd-c8ddc11392b8", ["Swarm_1.csv"]),
    "bix-19": ("8c64b1fa-fdcc-41e2-be8d-2f0c8d5faaa1", ["NeuN_quantification.csv"]),
    "bix-27": (
        "0f14ffa7-f02a-4d20-8142-dfc404195e56",
        ["ROSMAP_genexp_ad.csv", "ROSMAP_meta_ad.csv"],
    ),
    "bix-37": (
        "40cbef03-b5c3-4448-b00f-0ba2965dea9b",
        ["MeRIP_RNA_result.xlsx", "Proteomic_data.xlsx"],
    ),
    "bix-41": ("8b462015-86ab-434f-29e1-04dda1588031", ["Swarm_2.csv"]),
    "bix-51": ("93f63fb8-b56c-4ad1-8d3b-d651e2107423", ["data.xlsx"]),
    "bix-52": (
        "4dceea58-7d66-4576-bfc6-88c026d5b7a9",
        [
            "JD_AgeRelated_CpG_noMT_Final.csv",
            "ZF_AgeRelated_CpG_noMT_Final.csv",
            "JD_Chromosome_Length.csv",
            "ZF_Chromosome_Length.csv",
        ],
    ),
    "bix-54": ("9e52daf6-ca58-43e8-e732-fbac3459d295", ["Swarm_2.csv"]),
}
EXCLUDE = ("deseq", "lfc", "enrich", "gsea", "clusterprofiler", "edger", "limma")
HELDOUT_FRACTION = 0.3


def heldout(question_id):
    digest = hashlib.sha256(f"bixbench_numeric:{question_id}".encode()).digest()
    return int.from_bytes(digest[:8], "big") / 2**64 < HELDOUT_FRACTION


def fetch(name):
    cache = HERE / ".cache" / name
    if not cache.exists():
        cache.parent.mkdir(parents=True, exist_ok=True)
        with urllib.request.urlopen(f"{BASE}/{name}", timeout=120) as r:
            cache.write_bytes(r.read())
    return cache.read_bytes()


def parse_key(record):
    ideal = record["ideal"].strip()
    if record["eval_mode"] == "range_verifier":
        lo, hi = sorted(float(v) for v in ideal.strip("() ").split(","))
        return {"mode": "range", "lo": lo, "hi": hi}
    return {"mode": "exact", "value": float(ideal.split()[0])}


def numeric(record):
    if record["eval_mode"] == "range_verifier":
        return True
    if record["eval_mode"] != "str_verifier":
        return False
    try:
        float(record["ideal"].strip().split()[0])
    except (IndexError, ValueError):
        return False
    return True


def main():
    for sid, (uuid, names) in CAPSULES.items():
        (HERE / "data" / sid).mkdir(parents=True, exist_ok=True)
        with zipfile.ZipFile(io.BytesIO(fetch(f"CapsuleFolder-{uuid}.zip"))) as z:
            members = {Path(m).name.replace(" ", ""): m for m in z.namelist()}
            for name in names:
                with z.open(members[name]) as src, open(HERE / "data" / sid / name, "wb") as dst:
                    shutil.copyfileobj(src, dst)
    questions, dev, held = {}, {}, {}
    for line in fetch("BixBench.jsonl").decode().splitlines():
        r = json.loads(line)
        if r["short_id"] not in CAPSULES or not numeric(r):
            continue
        if any(word in r["question"].lower() for word in EXCLUDE):
            continue
        questions[r["question_id"]] = " ".join(r["question"].split())
        (held if heldout(r["question_id"]) else dev)[r["question_id"]] = parse_key(r)
    (HERE / "questions.json").write_text(json.dumps(questions, indent=0, ensure_ascii=False))
    (HERE / ".cache" / "answers.json").write_text(json.dumps(dev, indent=1))
    (HERE / ".cache" / "heldout_answers.json").write_text(json.dumps(held, indent=1))
    print(f"prepared {len(questions)} questions: {len(dev)} dev, {len(held)} held-out")


if __name__ == "__main__":
    main()
