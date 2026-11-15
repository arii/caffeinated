"""Editable analysis for the BixBench numeric task. The agent may change anything here.

Print one JSON object mapping question_id -> numeric answer. Questions are in
questions.json; each question's data is in data/<capsule>/, where the capsule is the
question_id prefix (bix-18-q2 -> data/bix-18/). Unanswered questions score as wrong.
"""

import json

import pandas as pd
from scipy.stats import chi2_contingency

answers = {}
sw = pd.read_csv("data/bix-18/Swarm_1.csv")
area = sw.groupby("Genotype").Area.mean()
answers["bix-18-q2"] = round(area["Wildtype"], -3)
answers["bix-18-q3"] = (1 - area["ΔlasR"] / area["Wildtype"]) * 100
answers["bix-18-q4"] = sw[sw.Genotype == "rhlR-"].Circularity.sem()

me = pd.read_excel("data/bix-8/MeRIP_RNA_result.xlsx", sheet_name="Date Formatting")
m6a = me["m6A"].astype(str)
deg = me["DEG"].astype(str)
hyper = m6a.str.contains("hyper", case=False, na=False)
hypo = m6a.str.contains("hypo", case=False, na=False)
increased = deg.str.contains("up", case=False, na=False)
answers["bix-8-q2"] = chi2_contingency(pd.crosstab(m6a, deg))[0]
answers["bix-8-q3"] = hyper.sum() / hypo.sum()
answers["bix-8-q6"] = hyper.sum()
answers["bix-8-q7"] = (hyper & increased).sum()

print(json.dumps({k: float(v) for k, v in answers.items()}))
