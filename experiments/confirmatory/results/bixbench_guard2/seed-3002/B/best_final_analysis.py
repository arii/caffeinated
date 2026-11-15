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
answers["bix-18-q4"] = rhlr_circularity.std() / len(rhlr_circularity) ** 0.5
answers["bix-18-q5"] = area["ΔlasR"] / area["Wildtype"]

# NeuN effect size, power, normality, and two-way ANOVA.
import numpy as np
from scipy import stats
from statsmodels.stats.power import TTestIndPower
import statsmodels.formula.api as smf
from statsmodels.stats.anova import anova_lm

neun = pd.read_csv("data/bix-19/NeuN_quantification.csv")
kd = neun.loc[neun["Hemispere"] == "KD", "NeuN"].astype(float)
ctrl = neun.loc[neun["Hemispere"] == "CTRL", "NeuN"].astype(float)
pooled_sd = np.sqrt(((len(kd) - 1) * kd.var(ddof=1) + (len(ctrl) - 1) * ctrl.var(ddof=1)) / (len(kd) + len(ctrl) - 2))
cohens_d = (kd.mean() - ctrl.mean()) / pooled_sd
answers["bix-19-q2"] = cohens_d
answers["bix-19-q1"] = np.ceil(TTestIndPower().solve_power(effect_size=abs(cohens_d), power=0.8, alpha=0.05, ratio=1.0, alternative="two-sided"))
answers["bix-19-q3"] = stats.shapiro(kd).statistic
model = smf.ols("NeuN ~ C(Hemispere) * C(Sex)", data=neun).fit()
anova_table = anova_lm(model, typ=2)
answers["bix-19-q4"] = anova_table.loc["C(Hemispere):C(Sex)", "F"]

# Direct table extraction and categorical summaries for MeRIP-seq and proteomics.
merip = pd.read_excel("data/bix-8/MeRIP_RNA_result.xlsx")
hypermethylated = merip["m6A"].astype(str).str.contains("hyper", case=False, na=False)
hypomethylated = merip["m6A"].astype(str).str.contains("hypo", case=False, na=False)
increased_expression = merip["DEG"].astype(str).str.contains("up", case=False, na=False)
answers["bix-8-q2"] = stats.chi2_contingency(pd.crosstab(merip["m6A"], merip["DEG"]))[0]
answers["bix-8-q3"] = hypermethylated.sum() / hypomethylated.sum()
answers["bix-8-q6"] = hypermethylated.sum()
answers["bix-8-q7"] = (hypermethylated & increased_expression).sum()

proteomics = pd.read_excel("data/bix-37/Proteomic_data.xlsx", sheet_name="Tumor vs Normal")
eno1 = proteomics.loc[proteomics["gene"].eq("ENO1")].iloc[0]
answers["bix-37-q2"] = float(f"{eno1['Normal']:.3g}")
answers["bix-37-q3"] = eno1["adj.Pval"]
answers["bix-37-q4"] = round(eno1["log2FC"], 2)

print(json.dumps({k: float(v) for k, v in answers.items()}))
