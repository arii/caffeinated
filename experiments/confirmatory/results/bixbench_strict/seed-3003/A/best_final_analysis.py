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
circularity = groups.Circularity.mean()
largest_area_genotype = area.idxmax()
answers["bix-18-q1"] = circularity[largest_area_genotype]
answers["bix-18-q2"] = round(area["Wildtype"], -3)
answers["bix-18-q3"] = (1 - area["ΔlasR"] / area["Wildtype"]) * 100
rhlr = sw.loc[sw.Genotype == "rhlR-", "Circularity"]
answers["bix-18-q4"] = rhlr.std() / len(rhlr) ** 0.5
answers["bix-18-q5"] = area["ΔlasR"] / area["Wildtype"]

from scipy.stats import chi2_contingency

merip = pd.read_excel("data/bix-8/MeRIP_RNA_result.xlsx", sheet_name="Date Formatting")
methylation = merip["m6A"].astype(str).str.lower()
expression = merip["DEG"].astype(str).str.lower()
hyper = methylation.str.contains("hyper", regex=False)
hypo = methylation.str.contains("hypo", regex=False)
increased = expression.str.contains("up", regex=False) & ~expression.str.contains("no", regex=False)
contingency = pd.crosstab(merip["m6A"], merip["DEG"])
answers["bix-8-q2"] = chi2_contingency(contingency)[0]
answers["bix-8-q3"] = hyper.sum() / hypo.sum()
answers["bix-8-q6"] = hyper.sum()
answers["bix-8-q7"] = (hyper & increased).sum()

print(json.dumps({k: float(v) for k, v in answers.items()}))
