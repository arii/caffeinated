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
answers["bix-18-q1"] = sw[sw.Genotype == area.idxmax()].Circularity.mean()
answers["bix-18-q2"] = round(area["Wildtype"], -3)
answers["bix-18-q3"] = (1 - area["ΔlasR"] / area["Wildtype"]) * 100
answers["bix-18-q4"] = sw[sw.Genotype == "rhlR-"].Circularity.sem()
answers["bix-18-q5"] = area["ΔlasR"] / area["Wildtype"]

from scipy.stats import chi2_contingency

merip = pd.read_excel("data/bix-8/MeRIP_RNA_result.xlsx")
m6a = merip["m6A"].astype(str)
deg = merip["DEG"].astype(str)
hyper = m6a.str.contains("hyper", case=False, na=False)
hypo = m6a.str.contains("hypo", case=False, na=False)
increased = deg.str.contains("up", case=False, na=False)
contingency = pd.crosstab(m6a, deg)
answers["bix-8-q2"] = chi2_contingency(contingency)[0]
answers["bix-8-q3"] = hyper.sum() / hypo.sum()
answers["bix-8-q6"] = hyper.sum()
answers["bix-8-q7"] = (hyper & increased).sum()

import numpy as np
from scipy.stats import shapiro
from statsmodels.formula.api import ols
from statsmodels.stats.anova import anova_lm
from statsmodels.stats.power import TTestIndPower

neun = pd.read_csv("data/bix-19/NeuN_quantification.csv")
kd = neun.loc[neun["Hemispere"] == "KD", "NeuN"].astype(float)
ctrl = neun.loc[neun["Hemispere"] == "CTRL", "NeuN"].astype(float)
pooled_sd = np.sqrt(((len(kd) - 1) * kd.var(ddof=1) + (len(ctrl) - 1) * ctrl.var(ddof=1)) / (len(kd) + len(ctrl) - 2))
cohens_d = (kd.mean() - ctrl.mean()) / pooled_sd
required_n = TTestIndPower().solve_power(effect_size=abs(cohens_d), power=0.8, alpha=0.05, alternative="two-sided")
answers["bix-19-q1"] = np.ceil(required_n)
answers["bix-19-q2"] = cohens_d
answers["bix-19-q3"] = shapiro(kd).statistic
anova_table = anova_lm(ols("NeuN ~ C(Hemispere) * C(Sex)", data=neun).fit(), typ=2)
answers["bix-19-q4"] = anova_table.loc["C(Hemispere):C(Sex)", "F"]

print(json.dumps({k: float(v) for k, v in answers.items()}))
