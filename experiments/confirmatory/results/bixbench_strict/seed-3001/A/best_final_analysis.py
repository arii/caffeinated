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
circularity = sw.groupby("Genotype").Circularity.mean()
answers["bix-18-q1"] = circularity[area.idxmax()]
answers["bix-18-q2"] = round(area["Wildtype"], -3)
answers["bix-18-q3"] = (1 - area["ΔlasR"] / area["Wildtype"]) * 100
answers["bix-18-q4"] = sw.loc[sw.Genotype == "rhlR-", "Circularity"].sem()
answers["bix-18-q5"] = area["ΔlasR"] / area["Wildtype"]

rip = pd.read_excel("data/bix-8/MeRIP_RNA_result.xlsx")
m6a = rip["m6A"].astype(str)
deg = rip["DEG"].astype(str)
hyper = m6a.str.contains("hyper", case=False, na=False)
hypo = m6a.str.contains("hypo", case=False, na=False)
up = deg.str.contains("up", case=False, na=False)
from scipy.stats import chi2_contingency
answers["bix-8-q2"] = chi2_contingency(pd.crosstab(m6a, deg))[0]
answers["bix-8-q3"] = hyper.sum() / hypo.sum()
answers["bix-8-q6"] = hyper.sum()
answers["bix-8-q7"] = (hyper & up).sum()

import numpy as np
from scipy.optimize import minimize
from scipy.special import expit
from scipy.stats import norm

clinical = pd.read_excel("data/bix-51/data.xlsx")

def fit_logistic(predictors):
    cols = predictors + ["Efficacy"]
    frame = clinical[cols].dropna().copy()
    y = (frame["Efficacy"].astype(str).str.strip() == "PR").astype(float).to_numpy()
    x = frame[predictors].astype(float).to_numpy()
    design = np.column_stack([np.ones(len(x)), x])
    def objective(beta):
        eta = design @ beta
        return np.logaddexp(0.0, eta).sum() - y @ eta
    fit = minimize(objective, np.zeros(design.shape[1]), method="BFGS")
    beta = fit.x
    eta = design @ beta
    loglike = (y * eta - np.logaddexp(0.0, eta)).sum()
    weights = expit(eta) * expit(-eta)
    covariance = np.linalg.pinv(design.T @ (design * weights[:, None]))
    se = np.sqrt(np.diag(covariance))
    pvalues = 2 * norm.sf(np.abs(beta / se))
    aic = 2 * design.shape[1] - 2 * loglike
    return beta, pvalues, aic

clinical["GenderBinary"] = (clinical["Gender"].astype(str).str.strip().str.lower() == "male").astype(float)
age_beta, age_p, age_aic = fit_logistic(["Age"])
bmi_beta, bmi_p, bmi_aic = fit_logistic(["BMI"])
combined_beta, combined_p, combined_aic = fit_logistic(["BMI", "Age", "GenderBinary"])
answers["bix-51-q1"] = expit(age_beta[0] + age_beta[1] * 65)
answers["bix-51-q2"] = bmi_aic
answers["bix-51-q3"] = combined_p[2]
answers["bix-51-q4"] = combined_beta[2]
answers["bix-51-q5"] = bmi_p[1]
answers["bix-51-q6"] = age_aic
answers["bix-51-q8"] = age_beta[1]

print(json.dumps({k: float(v) for k, v in answers.items()}))
