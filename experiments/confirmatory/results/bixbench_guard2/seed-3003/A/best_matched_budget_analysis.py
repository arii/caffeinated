"""Editable analysis for the BixBench numeric task. The agent may change anything here.

Print one JSON object mapping question_id -> numeric answer. Questions are in
questions.json; each question's data is in data/<capsule>/, where the capsule is the
question_id prefix (bix-18-q2 -> data/bix-18/). Unanswered questions score as wrong.
"""

import json

import numpy as np
import pandas as pd
from scipy.stats import shapiro
from statsmodels.formula.api import ols
from statsmodels.stats.anova import anova_lm
from statsmodels.stats.power import TTestIndPower

answers = {}
sw = pd.read_csv("data/bix-18/Swarm_1.csv")
area = sw.groupby("Genotype").Area.mean()
largest_area_genotype = area.idxmax()
answers["bix-18-q1"] = sw.loc[sw.Genotype == largest_area_genotype, "Circularity"].mean()
answers["bix-18-q2"] = round(area["Wildtype"], -3)
answers["bix-18-q5"] = area["ΔlasR"] / area["Wildtype"]
answers["bix-18-q3"] = (1 - area["ΔlasR"] / area["Wildtype"]) * 100
answers["bix-18-q4"] = sw[sw.Genotype == "rhlR-"].Circularity.sem()

neun = pd.read_csv("data/bix-19/NeuN_quantification.csv")
kd = neun.loc[neun["Hemispere"] == "KD", "NeuN"]
ctrl = neun.loc[neun["Hemispere"] == "CTRL", "NeuN"]
pooled_sd = np.sqrt(((len(kd) - 1) * kd.var(ddof=1) + (len(ctrl) - 1) * ctrl.var(ddof=1)) / (len(kd) + len(ctrl) - 2))
cohens_d = (kd.mean() - ctrl.mean()) / pooled_sd
answers["bix-19-q2"] = cohens_d
answers["bix-19-q1"] = np.ceil(TTestIndPower().solve_power(effect_size=abs(cohens_d), alpha=0.05, power=0.8, alternative="two-sided"))
answers["bix-19-q3"] = shapiro(kd).statistic
anova_table = anova_lm(ols("NeuN ~ C(Hemispere) * C(Sex)", data=neun).fit(), typ=2)
answers["bix-19-q4"] = anova_table.loc["C(Hemispere):C(Sex)", "F"]

merip = pd.read_excel("data/bix-8/MeRIP_RNA_result.xlsx", sheet_name="Date Formatting")
from scipy.stats import chi2_contingency
methylation_expression_table = pd.crosstab(merip["m6A"], merip["DEG"])
answers["bix-8-q2"] = chi2_contingency(methylation_expression_table)[0]
hyper = merip["m6A"].astype(str).str.contains("hyper", case=False, na=False)
hypo = merip["m6A"].astype(str).str.contains("hypo", case=False, na=False)
increased_expression = merip["DEG"].astype(str).str.contains("up", case=False, na=False)
answers["bix-8-q3"] = hyper.sum() / hypo.sum()
answers["bix-8-q6"] = hyper.sum()
answers["bix-8-q7"] = (hyper & increased_expression).sum()

print(json.dumps({k: float(v) for k, v in answers.items()}))
