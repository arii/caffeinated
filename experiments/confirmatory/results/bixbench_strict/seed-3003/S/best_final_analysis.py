"""Editable analysis for the BixBench numeric task. The agent may change anything here.

Print one JSON object mapping question_id -> numeric answer. Questions are in
questions.json; each question's data is in data/<capsule>/, where the capsule is the
question_id prefix (bix-18-q2 -> data/bix-18/). Unanswered questions score as wrong.
"""

import json

import pandas as pd

answers = {}

# Swarming summaries: identify the largest-area genotype from the data itself.
sw = pd.read_csv("data/bix-18/Swarm_1.csv")
groups = sw.groupby("Genotype")
area = groups.Area.mean()
largest_area_genotype = area.idxmax()
rhlr_circularity = sw.loc[sw.Genotype == "rhlR-", "Circularity"]
answers["bix-18-q1"] = groups.Circularity.mean()[largest_area_genotype]
answers["bix-18-q2"] = round(area["Wildtype"], -3)
answers["bix-18-q3"] = (1 - area["ΔlasR"] / area["Wildtype"]) * 100
answers["bix-18-q4"] = rhlr_circularity.std(ddof=1) / len(rhlr_circularity) ** 0.5
answers["bix-18-q5"] = area["ΔlasR"] / area["Wildtype"]

# ENO1's reported normal level, adjusted p-value, and tumor/normal log2FC.
proteomics = pd.read_excel("data/bix-37/Proteomic_data.xlsx", sheet_name="Tumor vs Normal")
eno1 = proteomics.loc[proteomics["gene"] == "ENO1"].iloc[0]
answers["bix-37-q2"] = float(f"{eno1['Normal']:.3g}")
answers["bix-37-q3"] = eno1["adj.Pval"]
answers["bix-37-q4"] = round(eno1["log2FC"], 2)

# MeRIP-seq category summaries and independence statistic.
merip = pd.read_excel("data/bix-8/MeRIP_RNA_result.xlsx", sheet_name="Date Formatting")
m6a_status = merip["m6A"].astype(str)
hypermethylated = m6a_status.str.contains("hyper", case=False, na=False)
hypomethylated = m6a_status.str.contains("hypo", case=False, na=False)
answers["bix-8-q3"] = hypermethylated.sum() / hypomethylated.sum()
answers["bix-8-q6"] = hypermethylated.sum()
combined_status = merip["m6A_DEG"].astype(str)
answers["bix-8-q7"] = (
    combined_status.str.contains("hyper", case=False, na=False)
    & combined_status.str.contains("up", case=False, na=False)
).sum()
contingency = pd.crosstab(merip["m6A"], merip["DEG"])
observed = contingency.to_numpy(dtype=float)
expected = (
    contingency.sum(axis=1).to_numpy(dtype=float)[:, None]
    * contingency.sum(axis=0).to_numpy(dtype=float)[None, :]
    / observed.sum()
)
answers["bix-8-q2"] = (((observed - expected) ** 2) / expected).sum()

# Treatment-response logistic regressions, with PR as the outcome and female as reference.
import math
import numpy as np

response_data = pd.read_excel("data/bix-51/data.xlsx", sheet_name="Sheet1")

def fit_response_logistic(predictors):
    model_data = response_data[["Efficacy"] + predictors].dropna()
    y = (model_data["Efficacy"] == "PR").astype(float).to_numpy()
    columns = [np.ones(len(model_data))]
    for predictor in predictors:
        if predictor == "Gender":
            columns.append((model_data[predictor] == "Male").astype(float).to_numpy())
        else:
            columns.append(pd.to_numeric(model_data[predictor]).to_numpy(dtype=float))
    X = np.column_stack(columns)
    beta = np.zeros(X.shape[1])
    for _ in range(100):
        eta = np.clip(X @ beta, -35, 35)
        mu = 1 / (1 + np.exp(-eta))
        weights = np.maximum(mu * (1 - mu), 1e-9)
        information = X.T @ (X * weights[:, None])
        step = np.linalg.solve(information, X.T @ (y - mu))
        beta += step
        if np.max(np.abs(step)) < 1e-10:
            break
    eta = X @ beta
    mu = 1 / (1 + np.exp(-np.clip(eta, -35, 35)))
    weights = np.maximum(mu * (1 - mu), 1e-9)
    covariance = np.linalg.inv(X.T @ (X * weights[:, None]))
    standard_errors = np.sqrt(np.diag(covariance))
    z_scores = beta / standard_errors
    p_values = np.array([math.erfc(abs(z) / math.sqrt(2)) for z in z_scores])
    log_likelihood = float(np.sum(y * eta - np.logaddexp(0, eta)))
    aic = 2 * X.shape[1] - 2 * log_likelihood
    return beta, p_values, aic

age_fit = fit_response_logistic(["Age"])
bmi_fit = fit_response_logistic(["BMI"])
combined_fit = fit_response_logistic(["Age", "BMI", "Gender"])
age_65_log_odds = age_fit[0][0] + age_fit[0][1] * 65
answers["bix-51-q1"] = 1 / (1 + math.exp(-age_65_log_odds))
answers["bix-51-q2"] = bmi_fit[2]
answers["bix-51-q3"] = combined_fit[1][1]
answers["bix-51-q4"] = combined_fit[0][1]
answers["bix-51-q5"] = bmi_fit[1][1]
answers["bix-51-q6"] = age_fit[2]
answers["bix-51-q8"] = age_fit[0][1]

print(json.dumps({k: float(v) for k, v in answers.items()}))
