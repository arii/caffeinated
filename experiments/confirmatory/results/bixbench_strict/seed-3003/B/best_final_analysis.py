"""Editable analysis for the BixBench numeric task. The agent may change anything here.

Print one JSON object mapping question_id -> numeric answer. Questions are in
questions.json; each question's data is in data/<capsule>/, where the capsule is the
question_id prefix (bix-18-q2 -> data/bix-18/). Unanswered questions score as wrong.
"""

import json

import pandas as pd

answers = {}
sw = pd.read_csv("data/bix-18/Swarm_1.csv")
area = sw.groupby("Genotype").Area.mean()
largest_area_genotype = area.idxmax()
answers["bix-18-q1"] = sw.loc[sw.Genotype == largest_area_genotype, "Circularity"].mean()
answers["bix-18-q2"] = round(area["Wildtype"], -3)
answers["bix-18-q3"] = (1 - area["ΔlasR"] / area["Wildtype"]) * 100
rhlr_circularity = sw.loc[sw.Genotype == "rhlR-", "Circularity"]
answers["bix-18-q4"] = rhlr_circularity.std(ddof=1) / len(rhlr_circularity) ** 0.5
answers["bix-18-q5"] = area["ΔlasR"] / area["Wildtype"]

from scipy.stats import chi2_contingency

merip = pd.read_excel("data/bix-8/MeRIP_RNA_result.xlsx")
contingency = pd.crosstab(merip["m6A"], merip["DEG"])
answers["bix-8-q2"] = chi2_contingency(contingency)[0]
methylation = merip["m6A"].astype(str)
expression = merip["DEG"].astype(str)
hyper = methylation.str.contains("hyper", case=False, na=False)
hypo = methylation.str.contains("hypo", case=False, na=False)
upregulated = expression.str.contains("up", case=False, na=False)
answers["bix-8-q3"] = hyper.sum() / hypo.sum()
answers["bix-8-q6"] = hyper.sum()
answers["bix-8-q7"] = (hyper & upregulated).sum()

print(json.dumps({k: float(v) for k, v in answers.items()}))
