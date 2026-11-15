"""Editable analysis for the BixBench numeric task. The agent may change anything here.

Print one JSON object mapping question_id -> numeric answer. Questions are in
questions.json; each question's data is in data/<capsule>/, where the capsule is the
question_id prefix (bix-18-q2 -> data/bix-18/). Unanswered questions score as wrong.
"""

import json

import pandas as pd
import numpy as np
from scipy import stats
from statsmodels.stats.power import TTestIndPower
import statsmodels.api as sm
import statsmodels.formula.api as smf

answers = {}
sw = pd.read_csv("data/bix-18/Swarm_1.csv")
groups = sw.groupby("Genotype")
area = groups.Area.mean()
largest_area_genotype = area.idxmax()
answers["bix-18-q1"] = groups.Circularity.mean()[largest_area_genotype]
answers["bix-18-q2"] = round(area["Wildtype"], -3)
answers["bix-18-q3"] = (1 - area["ΔlasR"] / area["Wildtype"]) * 100
rhlr_circularity = sw.loc[sw.Genotype == "rhlR-", "Circularity"].dropna()
answers["bix-18-q4"] = rhlr_circularity.std(ddof=1) / len(rhlr_circularity) ** 0.5
answers["bix-18-q5"] = area["ΔlasR"] / area["Wildtype"]

neun = pd.read_csv("data/bix-19/NeuN_quantification.csv")
kd = neun.loc[neun["Hemispere"] == "KD", "NeuN"].dropna().to_numpy(dtype=float)
ctrl = neun.loc[neun["Hemispere"] == "CTRL", "NeuN"].dropna().to_numpy(dtype=float)
n_kd, n_ctrl = len(kd), len(ctrl)
pooled_sd = np.sqrt(((n_kd - 1) * kd.var(ddof=1) + (n_ctrl - 1) * ctrl.var(ddof=1)) / (n_kd + n_ctrl - 2))
cohens_d = (kd.mean() - ctrl.mean()) / pooled_sd
answers["bix-19-q2"] = cohens_d
required_n = TTestIndPower().solve_power(effect_size=abs(cohens_d), alpha=0.05, power=0.8, ratio=1.0, alternative="two-sided")
answers["bix-19-q1"] = np.ceil(required_n)
answers["bix-19-q3"] = stats.shapiro(kd).statistic
anova_model = smf.ols("NeuN ~ C(Hemispere) * C(Sex)", data=neun).fit()
anova_table = sm.stats.anova_lm(anova_model, typ=2)
answers["bix-19-q4"] = anova_table.loc["C(Hemispere):C(Sex)", "F"]

swarm2 = pd.read_csv("data/bix-41/Swarm_2.csv")
control = swarm2.loc[swarm2["StrainNumber"].astype(str) == "1"]
strain98 = swarm2.loc[swarm2["StrainNumber"].astype(str) == "98"]
answers["bix-41-q3"] = strain98["Circularity"].mean() - control["Circularity"].mean()

cocultures = swarm2.loc[~swarm2["Ratio"].astype(str).isin(["1:0", "0:1"])].copy()

def dunnett_both(data, group_cols):
    grouped = list(data.groupby(group_cols, sort=False))
    area_samples = [group["Area"].dropna().to_numpy(dtype=float) for _, group in grouped]
    circularity_samples = [group["Circularity"].dropna().to_numpy(dtype=float) for _, group in grouped]
    area_p = stats.dunnett(*area_samples, control=control["Area"].dropna().to_numpy(dtype=float)).pvalue
    circularity_p = stats.dunnett(*circularity_samples, control=control["Circularity"].dropna().to_numpy(dtype=float)).pvalue
    return area_p, circularity_p

condition_area_p, condition_circularity_p = dunnett_both(cocultures, ["StrainNumber", "Ratio"])
answers["bix-41-q1"] = np.sum((condition_area_p >= 0.05) & (condition_circularity_p >= 0.05))
ratio_area_p, ratio_circularity_p = dunnett_both(cocultures, ["Ratio"])
answers["bix-41-q4"] = np.sum((ratio_area_p < 0.05) & (ratio_circularity_p < 0.05))

merip = pd.read_excel("data/bix-8/MeRIP_RNA_result.xlsx", sheet_name="Date Formatting")
methylation_status = merip["m6A"].astype(str)
expression_status = merip["DEG"].astype(str)
status_table = pd.crosstab(methylation_status, expression_status)
answers["bix-8-q2"] = stats.chi2_contingency(status_table).statistic
status_lower = methylation_status.str.lower()
expression_lower = expression_status.str.lower()
hypermethylated = status_lower.str.contains("hyper", regex=False)
hypomethylated = status_lower.str.contains("hypo", regex=False)
answers["bix-8-q3"] = hypermethylated.sum() / hypomethylated.sum()
answers["bix-8-q6"] = hypermethylated.sum()
increased_expression = expression_lower.str.contains("up", regex=False)
answers["bix-8-q7"] = (hypermethylated & increased_expression).sum()

print(json.dumps({k: float(v) for k, v in answers.items()}))
