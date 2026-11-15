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
answers["bix-18-q1"] = sw.loc[sw.Genotype == area.idxmax(), "Circularity"].mean()
rhlr = sw.loc[sw.Genotype == "rhlR-", "Circularity"]
answers["bix-18-q4"] = rhlr.std() / len(rhlr) ** 0.5
answers["bix-18-q5"] = area["ΔlasR"] / area["Wildtype"]

mr = pd.read_excel("data/bix-8/MeRIP_RNA_result.xlsx", sheet_name="Date Formatting")
answers["bix-8-q2"] = chi2_contingency(pd.crosstab(mr["m6A"], mr["DEG"]))[0]
hyper = (mr["m_pvalue"] < 0.05) & (mr["m_log2FC"] > 0)
hypo = (mr["m_pvalue"] < 0.05) & (mr["m_log2FC"] < 0)
increased = (mr["g_pvalue"] < 0.05) & (mr["g_log2FC"] > 0)
answers["bix-8-q3"] = hyper.sum() / hypo.sum()
answers["bix-8-q6"] = hyper.sum()
answers["bix-8-q7"] = (hyper & increased).sum()

neun = pd.read_csv("data/bix-19/NeuN_quantification.csv")
kd = neun.loc[neun["Hemispere"] == "KD", "NeuN"]
ctrl = neun.loc[neun["Hemispere"] == "CTRL", "NeuN"]
pooled_sd = (((len(kd) - 1) * kd.var(ddof=1) + (len(ctrl) - 1) * ctrl.var(ddof=1)) / (len(kd) + len(ctrl) - 2)) ** 0.5
cohens_d = (kd.mean() - ctrl.mean()) / pooled_sd
answers["bix-19-q2"] = cohens_d
from statsmodels.stats.power import TTestIndPower
answers["bix-19-q1"] = TTestIndPower().solve_power(effect_size=abs(cohens_d), power=0.8, alpha=0.05)
from scipy.stats import shapiro
answers["bix-19-q3"] = shapiro(kd).statistic
import statsmodels.api as sm
from statsmodels.formula.api import ols
anova_model = ols("NeuN ~ C(Hemispere) * C(Sex)", data=neun).fit()
anova_table = sm.stats.anova_lm(anova_model, typ=2)
answers["bix-19-q4"] = anova_table.loc["C(Hemispere):C(Sex)", "F"]

clinical = pd.read_excel("data/bix-51/data.xlsx", sheet_name="Sheet1")
clinical = clinical.dropna(subset=["Efficacy", "Age", "BMI", "Gender"]).copy()
clinical["response"] = (clinical["Efficacy"].astype(str).str.strip() == "PR").astype(int)

def fit_response(predictors):
    design = clinical[predictors].copy()
    if "Gender" in design:
        design["Gender"] = (design["Gender"].astype(str).str.strip() == "Male").astype(int)
    design = design.astype(float)
    design = sm.add_constant(design, has_constant="add")
    return sm.GLM(clinical["response"], design, family=sm.families.Binomial()).fit()

age_fit = fit_response(["Age"])
bmi_fit = fit_response(["BMI"])
combined_fit = fit_response(["Age", "BMI", "Gender"])
age65 = pd.DataFrame({"const": [1.0], "Age": [65.0]})
answers["bix-51-q1"] = age_fit.predict(age65).iloc[0]
answers["bix-51-q2"] = bmi_fit.aic
answers["bix-51-q3"] = combined_fit.pvalues["Age"]
answers["bix-51-q4"] = combined_fit.params["Age"]
answers["bix-51-q5"] = bmi_fit.pvalues["BMI"]
answers["bix-51-q6"] = age_fit.aic
answers["bix-51-q8"] = age_fit.params["Age"]

# Model swarming area as a function of the ΔrhlI fraction in mixed co-cultures.
import numpy as np
from patsy import dmatrix, build_design_matrices

swarm54 = pd.read_csv("data/bix-54/Swarm_2.csv")
def rhlI_frequency(ratio):
    parts = str(ratio).strip().split(":")
    if len(parts) != 2:
        return np.nan
    try:
        first, second = float(parts[0]), float(parts[1])
    except ValueError:
        return np.nan
    return first / (first + second) if first > 0 and second > 0 else np.nan

swarm54["Frequency_rhlI"] = swarm54["Ratio"].map(rhlI_frequency)
coculture = swarm54.dropna(subset=["Frequency_rhlI", "Area"])
x = coculture["Frequency_rhlI"].to_numpy(dtype=float)
y = coculture["Area"].to_numpy(dtype=float)
grid = np.linspace(0.0, 1.0, 10001)

poly_designs = {}
poly_fits = {}
poly_predictions = {}
for degree in (2, 3):
    X = np.column_stack([x ** power for power in range(degree + 1)])
    Xgrid = np.column_stack([grid ** power for power in range(degree + 1)])
    fit = sm.OLS(y, X).fit()
    poly_designs[degree] = X
    poly_fits[degree] = fit
    poly_predictions[degree] = fit.predict(Xgrid)
answers["bix-54-q2"] = poly_fits[3].rsquared

spline_matrix = dmatrix("cr(x, df=4)", {"x": x}, return_type="dataframe")
spline_fit = sm.OLS(y, spline_matrix).fit()
spline_grid = build_design_matrices([spline_matrix.design_info], {"x": grid})[0]
spline_prediction = spline_fit.get_prediction(spline_grid)
spline_mean = np.asarray(spline_prediction.predicted_mean)
peak_index = int(np.argmax(spline_mean))
answers["bix-54-q1"] = grid[peak_index]
answers["bix-54-q5"] = grid[peak_index]
answers["bix-54-q3"] = spline_prediction.conf_int(alpha=0.05)[peak_index, 0]
answers["bix-54-q4"] = spline_fit.f_pvalue
answers["bix-54-q6"] = spline_fit.rsquared

candidate_predictions = {2: poly_predictions[2], 3: poly_predictions[3], 4: spline_mean}
candidate_r2 = {2: poly_fits[2].rsquared, 3: poly_fits[3].rsquared, 4: spline_fit.rsquared}
best_model = max(candidate_r2, key=candidate_r2.get)
answers["bix-54-q7"] = np.max(candidate_predictions[best_model])

# COVID-19 severity models and treatment-association tests.
from statsmodels.miscmodels.ordinal_model import OrderedModel

dm10 = pd.read_csv("data/bix-10/TASK008_BCG-CORONA_DM.csv")
ae10 = pd.read_csv("data/bix-10/TASK008_BCG-CORONA_AE.csv")
covid10 = ae10.loc[ae10["AEPT"].astype(str).str.strip() == "COVID-19"].copy()
covid10 = covid10.merge(
    dm10[["USUBJID", "patients_seen", "expect_interact"]],
    on="USUBJID", how="inner", validate="many_to_one"
)
covid10["AESEV"] = pd.to_numeric(covid10["AESEV"], errors="coerce")
covid10["TRTGRP_cat"] = (covid10["TRTGRP"].astype(str).str.strip() == "BCG").astype(int)
covid10["expect_interact_cat"] = (covid10["expect_interact"].astype(str).str.strip() == "Yes").astype(int)
patient_levels = {"1-50": 1, "51-100": 2, ">100": 3}
covid10["patients_seen_cat"] = covid10["patients_seen"].astype(str).str.strip().map(patient_levels)
model10 = covid10.dropna(subset=["AESEV", "TRTGRP_cat", "expect_interact_cat", "patients_seen_cat"])
severity_predictors = model10[["TRTGRP_cat", "expect_interact_cat", "patients_seen_cat"]].astype(float)
severity_fit = OrderedModel(model10["AESEV"], severity_predictors, distr="logit").fit(disp=False)
answers["bix-10-q1"] = np.exp(severity_fit.params["TRTGRP_cat"])
interaction_or = np.exp(severity_fit.params["expect_interact_cat"])
answers["bix-10-q2"] = interaction_or
answers["bix-10-q7"] = (1.0 - interaction_or) * 100.0

def severity_chisquare_pvalue(frame):
    table = pd.crosstab(frame["TRTGRP"], frame["AESEV"])
    return chi2_contingency(table)[1]

answers["bix-10-q4"] = severity_chisquare_pvalue(model10.loc[model10["expect_interact_cat"] == 1])
answers["bix-10-q5"] = severity_chisquare_pvalue(model10.loc[model10["patients_seen"].astype(str).str.strip() == ">100"])
answers["bix-10-q6"] = severity_chisquare_pvalue(model10.loc[model10["patients_seen"].astype(str).str.strip() == "1-50"])

print(json.dumps({k: float(v) for k, v in answers.items()}))
