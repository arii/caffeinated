#!/usr/bin/env python3
"""Replay an autoresearch results.tsv through the meter using a keyword classifier."""
import csv, json, re, sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).parent))
import meter

RULES = [
    (r"baseline", "baseline", "none"),
    (r"batch", "batch", "total_batch"),
    (r"warmdown", "lr_schedule", "warmdown"),
    (r"warmup", "lr_schedule", "warmup"),
    (r"final lr|end warmdown|% of peak", "lr_schedule", "final_lr"),
    (r"matrix lr|muon", "optimizer", "matrix_lr"),
    (r"unembedding|lm_head", "optimizer", "unembed_lr"),
    (r"embedding lr", "optimizer", "embed_lr"),
    (r"beta", "optimizer", "adam_beta"),
    (r"weight decay", "optimizer", "weight_decay"),
    (r"depth|layers", "architecture", "depth"),
    (r"aspect|dim \d", "architecture", "width"),
    (r"head dim", "architecture", "head_dim"),
    (r"window", "attention", "window"),
    (r"softcap", "attention", "softcap"),
]
NUM = re.compile(r"(?:2\*\*)?(\d+(?:\.\d+)?)")


def classify(desc):
    d = desc.lower()
    for pat, mech, method in RULES:
        if re.search(pat, d):
            nums = NUM.findall(d.split("->")[-1])
            params = {"value": max(float(nums[-1]), 0.0001)} if nums else {}
            return {"mechanism": mech, "method": method, "params": params}
    raise ValueError(f"unclassified: {desc}")


def ledger_from_tsv(path, agent="agent-0"):
    rows = list(csv.DictReader(open(path), delimiter="\t"))
    return [{"seq": i, "agent": agent, "descriptor": classify(row["description"]),
             "status": row["status"], "score": float(row["val_bpb"]), "note": row["description"]}
            for i, row in enumerate(rows, 1)]


if __name__ == "__main__":
    profile = meter.load_profile(Path(__file__).parent / "profiles/autoresearch_llm.json")
    events = ledger_from_tsv(sys.argv[1])
    for t, e in zip(meter.fold(profile, events), events):
        print(f"{t['seq']:>3} B={t['B']:.3f} {t['regime']:<17} nov={t['novelty']:.2f} stag={t['stagnation']:.2f} "
              f"ovl={t['overload']:.2f} div={t['diversity']:.2f} stall={t['frontier_stall']:>2} {e['status']:<7} {e['note']}")
