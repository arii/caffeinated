"""Editable analysis for the BixBench numeric task. The agent may change anything here.

Print one JSON object mapping question_id -> numeric answer. Questions are in
questions.json; each question's data is in data/<capsule>/, where the capsule is the
question_id prefix (bix-18-q2 -> data/bix-18/). Unanswered questions score as wrong.
"""

import json

import pandas as pd

answers = {}
sw = pd.read_csv("data/bix-18/Swarm_1.csv")
grouped = sw.groupby("Genotype")
area = grouped.Area.mean()
circularity = grouped.Circularity.mean()
answers["bix-18-q1"] = circularity.loc[area.idxmax()]
answers["bix-18-q2"] = round(area["Wildtype"], -3)
answers["bix-18-q3"] = (1 - area["ΔlasR"] / area["Wildtype"]) * 100
rhlr = sw.loc[sw.Genotype == "rhlR-", "Circularity"].dropna()
answers["bix-18-q4"] = rhlr.std(ddof=1) / len(rhlr) ** 0.5
answers["bix-18-q5"] = area["ΔlasR"] / area["Wildtype"]

from scipy.stats import chi2_contingency

merip = pd.read_excel("data/bix-8/MeRIP_RNA_result.xlsx", sheet_name="Date Formatting")
methylation = merip["m6A"].astype(str).str.lower()
expression = merip["DEG"].astype(str).str.lower()
hyper = methylation.str.contains("hyper", regex=False)
hypo = methylation.str.contains("hypo", regex=False)
increased = expression.str.contains("up", regex=False)
contingency = pd.crosstab(merip["m6A"], merip["DEG"])
answers["bix-8-q2"] = chi2_contingency(contingency)[0]
answers["bix-8-q3"] = hyper.sum() / hypo.sum()
answers["bix-8-q6"] = hyper.sum()
answers["bix-8-q7"] = (hyper & increased).sum()

from scipy.stats import chisquare


def load_cpg_sites(path):
    frame = pd.read_csv(path)
    frame["Chromosome"] = frame["Chromosome"].astype(str).str.strip()
    extreme = (frame["MethylationPercentage"] > 90) | (frame["MethylationPercentage"] < 10)
    return frame.loc[extreme].drop_duplicates(subset=["Pos"])


def load_chromosome_lengths(path):
    lengths = pd.read_csv(path, encoding="utf-8-sig")
    lengths["Chromosome"] = lengths["Chromosome"].astype(str).str.strip()
    return lengths.set_index("Chromosome")["Length"]


def unique_site_densities(sites, lengths):
    counts = sites.groupby("Chromosome").size()
    return counts, counts / lengths.reindex(counts.index)


zf_sites = load_cpg_sites("data/bix-52/ZF_AgeRelated_CpG_noMT_Final.csv")
jd_sites = load_cpg_sites("data/bix-52/JD_AgeRelated_CpG_noMT_Final.csv")
zf_counts, zf_density = unique_site_densities(
    zf_sites, load_chromosome_lengths("data/bix-52/ZF_Chromosome_Length.csv")
)
_, jd_density = unique_site_densities(
    jd_sites, load_chromosome_lengths("data/bix-52/JD_Chromosome_Length.csv")
)
answers["bix-52-q1"] = zf_density["W"] / zf_density["1"]
answers["bix-52-q2"] = jd_density.mean()
answers["bix-52-q3"] = chisquare(zf_counts.to_numpy())[0]
answers["bix-52-q5"] = zf_density["Z"]

print(json.dumps({k: float(v) for k, v in answers.items()}))
