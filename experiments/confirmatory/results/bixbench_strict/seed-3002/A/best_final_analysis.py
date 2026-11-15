"""Editable analysis for the BixBench numeric task. The agent may change anything here.

Print one JSON object mapping question_id -> numeric answer. Questions are in
questions.json; each question's data is in data/<capsule>/, where the capsule is the
question_id prefix (bix-18-q2 -> data/bix-18/). Unanswered questions score as wrong.
"""

import json

import pandas as pd

answers = {}
sw = pd.read_csv("data/bix-18/Swarm_1.csv")
groups = sw.groupby("Genotype")
area = groups.Area.mean()
answers["bix-18-q1"] = groups.Circularity.mean()[area.idxmax()]
answers["bix-18-q2"] = round(area["Wildtype"], -3)
answers["bix-18-q3"] = (1 - area["ΔlasR"] / area["Wildtype"]) * 100
answers["bix-18-q4"] = sw[sw.Genotype == "rhlR-"].Circularity.sem()
answers["bix-18-q5"] = area["ΔlasR"] / area["Wildtype"]

from scipy.stats import chi2_contingency

me = pd.read_excel("data/bix-8/MeRIP_RNA_result.xlsx")
contingency = pd.crosstab(me["m6A"], me["DEG"])
answers["bix-8-q2"] = chi2_contingency(contingency, correction=False)[0]
m6a = me["m6A"].astype(str).str.lower()
combined = me["m6A_DEG"].astype(str).str.lower()
hyper = m6a.str.contains("hyper", regex=False)
hypo = m6a.str.contains("hypo", regex=False)
answers["bix-8-q3"] = hyper.sum() / hypo.sum()
answers["bix-8-q6"] = hyper.sum()
answers["bix-8-q7"] = (combined.str.contains("hyper", regex=False) & combined.str.contains("up", regex=False)).sum()

from scipy.stats import chisquare


def filtered_unique_cpgs(frame):
    methylation = pd.to_numeric(frame["MethylationPercentage"], errors="coerce")
    filtered = frame.loc[(methylation > 90) | (methylation < 10)].copy()
    filtered["Chromosome"] = filtered["Chromosome"].astype(str)
    return filtered.drop_duplicates("Pos")


def chromosome_densities(sites, length_file):
    lengths = pd.read_csv(length_file, encoding="utf-8-sig", dtype={"Chromosome": str})
    lengths = lengths.set_index("Chromosome")["Length"].astype(float)
    counts = sites.groupby("Chromosome").size()
    return counts, counts / lengths


zf_sites = filtered_unique_cpgs(pd.read_csv("data/bix-52/ZF_AgeRelated_CpG_noMT_Final.csv"))
jd_sites = filtered_unique_cpgs(pd.read_csv("data/bix-52/JD_AgeRelated_CpG_noMT_Final.csv"))
zf_counts, zf_density = chromosome_densities(zf_sites, "data/bix-52/ZF_Chromosome_Length.csv")
jd_counts, jd_density = chromosome_densities(jd_sites, "data/bix-52/JD_Chromosome_Length.csv")
answers["bix-52-q1"] = zf_density["W"] / zf_density["1"]
answers["bix-52-q2"] = jd_density.mean()
answers["bix-52-q3"] = chisquare(zf_counts.to_numpy())[0]
answers["bix-52-q5"] = zf_density["Z"]

print(json.dumps({k: float(v) for k, v in answers.items()}))
