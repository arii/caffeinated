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

# Swarming descriptive statistics.
sw = pd.read_csv("data/bix-18/Swarm_1.csv")
area = sw.groupby("Genotype").Area.mean()
largest_area_genotype = area.idxmax()
answers["bix-18-q1"] = sw.loc[sw.Genotype == largest_area_genotype, "Circularity"].mean()
answers["bix-18-q2"] = round(area["Wildtype"], -3)
answers["bix-18-q3"] = (1 - area["ΔlasR"] / area["Wildtype"]) * 100
rhlr_circ = sw.loc[sw.Genotype == "rhlR-", "Circularity"]
answers["bix-18-q4"] = rhlr_circ.std(ddof=1) / np.sqrt(rhlr_circ.count())
answers["bix-18-q5"] = area["ΔlasR"] / area["Wildtype"]

# MeRIP/RNA categories and their contingency table.
merip = pd.read_excel("data/bix-8/MeRIP_RNA_result.xlsx")
contingency = pd.crosstab(merip["m6A"], merip["DEG"])
answers["bix-8-q2"] = chi2_contingency(contingency)[0]
methyl_status = merip["m6A"].astype(str)
hyper = methyl_status.str.contains("hyper", case=False, regex=False)
hypo = methyl_status.str.contains("hypo", case=False, regex=False)
answers["bix-8-q3"] = hyper.sum() / hypo.sum()
answers["bix-8-q6"] = hyper.sum()
deg_status = merip["DEG"].astype(str)
increased = deg_status.str.contains("up", case=False, regex=False) & ~deg_status.str.contains("no", case=False, regex=False)
answers["bix-8-q7"] = (hyper & increased).sum()

# Direct proteomic lookups for ENO1.
proteomics = pd.read_excel("data/bix-37/Proteomic_data.xlsx")
eno1 = proteomics.loc[proteomics["gene"].eq("ENO1")].iloc[0]
answers["bix-37-q2"] = float(f"{eno1['Normal']:.3g}")
answers["bix-37-q3"] = eno1["adj.Pval"]
answers["bix-37-q4"] = round(eno1["log2FC"], 2)

# Camrelizumab response logistic regressions (PR versus all other responses).
from scipy.stats import norm

clinical = pd.read_excel("data/bix-51/data.xlsx")

def fit_logistic(predictors):
    columns = ["Efficacy", "Age", "BMI", "Gender"]
    dat = clinical[columns].dropna().copy()
    y = dat["Efficacy"].eq("PR").astype(float).to_numpy()
    design = [np.ones(len(dat))]
    for predictor in predictors:
        if predictor == "Gender":
            design.append(dat["Gender"].eq("Male").astype(float).to_numpy())
        else:
            design.append(dat[predictor].astype(float).to_numpy())
    X = np.column_stack(design)
    beta = np.zeros(X.shape[1])
    for _ in range(100):
        eta = np.clip(X @ beta, -35, 35)
        prob = 1 / (1 + np.exp(-eta))
        weights = np.maximum(prob * (1 - prob), 1e-12)
        information = X.T @ (X * weights[:, None])
        step = np.linalg.solve(information, X.T @ (y - prob))
        beta += step
        if np.max(np.abs(step)) < 1e-10:
            break
    eta = np.clip(X @ beta, -35, 35)
    prob = 1 / (1 + np.exp(-eta))
    weights = np.maximum(prob * (1 - prob), 1e-12)
    covariance = np.linalg.inv(X.T @ (X * weights[:, None]))
    loglik = float(np.sum(y * eta - np.logaddexp(0, eta)))
    zscores = beta / np.sqrt(np.diag(covariance))
    pvalues = 2 * norm.sf(np.abs(zscores))
    aic = -2 * loglik + 2 * X.shape[1]
    return beta, pvalues, aic

age_beta, age_p, age_aic = fit_logistic(["Age"])
bmi_beta, bmi_p, bmi_aic = fit_logistic(["BMI"])
combined_beta, combined_p, combined_aic = fit_logistic(["BMI", "Age", "Gender"])
age65_eta = age_beta[0] + age_beta[1] * 65
answers["bix-51-q1"] = 1 / (1 + np.exp(-age65_eta))
answers["bix-51-q2"] = bmi_aic
answers["bix-51-q3"] = combined_p[2]
answers["bix-51-q4"] = combined_beta[2]
answers["bix-51-q5"] = bmi_p[1]
answers["bix-51-q6"] = age_aic
answers["bix-51-q8"] = age_beta[1]

print(json.dumps({k: float(v) for k, v in answers.items()}))
