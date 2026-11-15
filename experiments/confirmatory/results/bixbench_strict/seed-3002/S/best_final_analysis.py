"""Editable analysis for the BixBench numeric task. The agent may change anything here.

Print one JSON object mapping question_id -> numeric answer. Questions are in
questions.json; each question's data is in data/<capsule>/, where the capsule is the
question_id prefix (bix-18-q2 -> data/bix-18/). Unanswered questions score as wrong.
"""

import json

import pandas as pd

import numpy as np
from scipy.stats import chi2_contingency

answers = {}

# Swarming summaries: use the genotype with greatest mean area for q1 and
# sample standard error (rather than standard deviation) for q4.
sw = pd.read_csv("data/bix-18/Swarm_1.csv")
area = sw.groupby("Genotype").Area.mean()
answers["bix-18-q1"] = sw.loc[sw.Genotype == area.idxmax(), "Circularity"].mean()
answers["bix-18-q2"] = round(area["Wildtype"], -3)
answers["bix-18-q3"] = (1 - area["ΔlasR"] / area["Wildtype"]) * 100
rhlr = sw.loc[sw.Genotype == "rhlR-", "Circularity"]
answers["bix-18-q4"] = rhlr.std(ddof=1) / np.sqrt(rhlr.count())
answers["bix-18-q5"] = area["ΔlasR"] / area["Wildtype"]

# MeRIP/RNA categories are already supplied by the capsule.  Test the two
# annotated status variables directly and derive the requested set counts.
merip = pd.read_excel("data/bix-8/MeRIP_RNA_result.xlsx")
contingency = pd.crosstab(merip["m6A"], merip["DEG"])
answers["bix-8-q2"] = chi2_contingency(contingency)[0]
hyper = merip["m6A"].astype(str).str.contains("hyper", case=False, na=False)
hypo = merip["m6A"].astype(str).str.contains("hypo", case=False, na=False)
answers["bix-8-q3"] = hyper.sum() / hypo.sum()
answers["bix-8-q6"] = hyper.sum()
joint = merip["m6A_DEG"].astype(str)
answers["bix-8-q7"] = (joint.str.contains("hyper", case=False, na=False) & joint.str.contains("up", case=False, na=False)).sum()

# ENO1's proteomic summaries are precomputed in the comparison table.
proteomics = pd.read_excel("data/bix-37/Proteomic_data.xlsx", sheet_name="Tumor vs Normal")
eno1 = proteomics.loc[proteomics["gene"].eq("ENO1")].iloc[0]
answers["bix-37-q2"] = float(f"{eno1['Normal']:.3g}")
answers["bix-37-q3"] = eno1["adj.Pval"]
answers["bix-37-q4"] = round(eno1["log2FC"], 2)

print(json.dumps({k: float(v) for k, v in answers.items()}))
