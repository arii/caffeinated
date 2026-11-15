"""Editable analysis for the BixBench numeric task. The agent may change anything here.

Print one JSON object mapping question_id -> numeric answer. Questions are in
questions.json; each question's data is in data/<capsule>/, where the capsule is the
question_id prefix (bix-18-q2 -> data/bix-18/). Unanswered questions score as wrong.
"""

import json

import numpy as np
import pandas as pd
from scipy.stats import chi2_contingency

answers = {}

# Swarming summaries: use the genotype with maximum mean area for q1 and SEM for q4.
sw = pd.read_csv("data/bix-18/Swarm_1.csv")
area = sw.groupby("Genotype").Area.mean()
largest = area.idxmax()
answers["bix-18-q1"] = sw.loc[sw.Genotype == largest, "Circularity"].mean()
answers["bix-18-q2"] = round(area["Wildtype"], -3)
answers["bix-18-q3"] = (1 - area["ΔlasR"] / area["Wildtype"]) * 100
rhlr = sw.loc[sw.Genotype == "rhlR-", "Circularity"]
answers["bix-18-q4"] = rhlr.std(ddof=1) / np.sqrt(rhlr.count())
answers["bix-18-q5"] = area["ΔlasR"] / area["Wildtype"]

# Direct proteomic summaries for ENO1.
proteomics = pd.read_excel("data/bix-37/Proteomic_data.xlsx", sheet_name="Tumor vs Normal")
eno1 = proteomics.loc[proteomics["gene"].astype(str).str.upper() == "ENO1"].iloc[0]
answers["bix-37-q2"] = float(f"{float(eno1['Normal']):.3g}")
answers["bix-37-q3"] = eno1["adj.Pval"]
answers["bix-37-q4"] = round(float(eno1["log2FC"]), 2)

# Methylation/expression counts and their test of independence.
merip = pd.read_excel("data/bix-8/MeRIP_RNA_result.xlsx", sheet_name="Date Formatting")
m6a = merip["m6A"].astype(str).str.lower()
deg = merip["DEG"].astype(str).str.lower()
hyper = m6a.str.contains("hyper", regex=False) & ~m6a.str.contains("hypo", regex=False)
hypo = m6a.str.contains("hypo", regex=False)
up = deg.str.contains("up", regex=False) & ~deg.str.contains("no", regex=False)
answers["bix-8-q2"] = chi2_contingency(pd.crosstab(merip["m6A"], merip["DEG"]))[0]
answers["bix-8-q3"] = hyper.sum() / hypo.sum()
answers["bix-8-q6"] = hyper.sum()
answers["bix-8-q7"] = (hyper & up).sum()

# NeuN effect size, power, normality, and two-way ANOVA.
from scipy.stats import shapiro
from statsmodels.formula.api import ols
from statsmodels.stats.anova import anova_lm
from statsmodels.stats.power import TTestIndPower

neun = pd.read_csv("data/bix-19/NeuN_quantification.csv")
kd = neun.loc[neun["Hemispere"] == "KD", "NeuN"].astype(float)
ctrl = neun.loc[neun["Hemispere"] == "CTRL", "NeuN"].astype(float)
pooled_sd = np.sqrt(
    ((kd.count() - 1) * kd.var(ddof=1) + (ctrl.count() - 1) * ctrl.var(ddof=1))
    / (kd.count() + ctrl.count() - 2)
)
cohens_d = (kd.mean() - ctrl.mean()) / pooled_sd
answers["bix-19-q2"] = cohens_d
answers["bix-19-q1"] = np.ceil(
    TTestIndPower().solve_power(
        effect_size=abs(cohens_d), alpha=0.05, power=0.8,
        ratio=1.0, alternative="two-sided"
    )
)
answers["bix-19-q3"] = shapiro(kd).statistic
neun_model = ols("NeuN ~ C(Hemispere) * C(Sex)", data=neun).fit()
neun_anova = anova_lm(neun_model, typ=2)
answers["bix-19-q4"] = neun_anova.loc["C(Hemispere):C(Sex)", "F"]

# BCG vaccination, patient interaction, and ordinal COVID-19 severity.
from statsmodels.miscmodels.ordinal_model import OrderedModel

dm = pd.read_csv("data/bix-10/TASK008_BCG-CORONA_DM.csv")
ae = pd.read_csv("data/bix-10/TASK008_BCG-CORONA_AE.csv")
covid = ae.loc[
    ae["AEPT"].astype(str).str.strip().str.upper().eq("COVID-19")
    & ae["AESEV"].notna()
].copy()
covid = covid.merge(
    dm[["USUBJID", "patients_seen", "expect_interact"]], on="USUBJID", how="inner"
)
covid["severity"] = pd.to_numeric(covid["AESEV"], errors="coerce")
covid = covid.dropna(subset=["severity", "TRTGRP", "patients_seen", "expect_interact"])

# Treatment and expected interaction are binary; number of patients is categorical.
X = pd.DataFrame(index=covid.index)
X["BCG"] = covid["TRTGRP"].astype(str).str.strip().eq("BCG").astype(float)
X["expect_yes"] = covid["expect_interact"].astype(str).str.strip().str.lower().eq("yes").astype(float)
patient_dummies = pd.get_dummies(
    covid["patients_seen"].astype(str).str.strip(), prefix="patients", drop_first=True, dtype=float
)
X = pd.concat([X, patient_dummies], axis=1).astype(float)
ordered_fit = OrderedModel(covid["severity"], X, distr="logit").fit(disp=False)
interaction_or = float(np.exp(ordered_fit.params["expect_yes"]))
answers["bix-10-q1"] = float(np.exp(ordered_fit.params["BCG"]))
answers["bix-10-q2"] = interaction_or
answers["bix-10-q7"] = (1.0 - interaction_or) * 100.0

def severity_chisquare_pvalue(subset):
    table = pd.crosstab(subset["TRTGRP"], subset["AESEV"])
    return chi2_contingency(table)[1]

answers["bix-10-q4"] = severity_chisquare_pvalue(
    covid.loc[covid["expect_interact"].astype(str).str.strip().str.lower().eq("yes")]
)
answers["bix-10-q5"] = severity_chisquare_pvalue(
    covid.loc[covid["patients_seen"].astype(str).str.strip().eq(">100")]
)
answers["bix-10-q6"] = severity_chisquare_pvalue(
    covid.loc[covid["patients_seen"].astype(str).str.strip().eq("1-50")]
)

# Camrelizumab treatment response: PR versus all other efficacy categories.
import statsmodels.api as sm

clinical = pd.read_excel("data/bix-51/data.xlsx", sheet_name="Sheet1")
clinical["response_PR"] = clinical["Efficacy"].astype(str).str.strip().str.upper().eq("PR").astype(float)
clinical["Age"] = pd.to_numeric(clinical["Age"], errors="coerce")
clinical["BMI"] = pd.to_numeric(clinical["BMI"], errors="coerce")
clinical["Male"] = clinical["Gender"].astype(str).str.strip().str.lower().eq("male").astype(float)

def fit_response_logit(data, predictors):
    model_data = data.dropna(subset=predictors + ["response_PR"])
    design = sm.add_constant(model_data[predictors].astype(float), has_constant="add")
    return sm.Logit(model_data["response_PR"].astype(float), design).fit(disp=False, maxiter=200)

age_fit = fit_response_logit(clinical, ["Age"])
bmi_fit = fit_response_logit(clinical, ["BMI"])
combined_fit = fit_response_logit(clinical, ["BMI", "Age", "Male"])
answers["bix-51-q1"] = age_fit.predict([1.0, 65.0])[0]
answers["bix-51-q2"] = bmi_fit.aic
answers["bix-51-q3"] = combined_fit.pvalues["Age"]
answers["bix-51-q4"] = combined_fit.params["Age"]
answers["bix-51-q5"] = bmi_fit.pvalues["BMI"]
answers["bix-51-q6"] = age_fit.aic
answers["bix-51-q8"] = age_fit.params["Age"]

print(json.dumps({k: float(v) for k, v in answers.items()}))
