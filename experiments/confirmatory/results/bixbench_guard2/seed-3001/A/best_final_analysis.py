"""Editable analysis for the BixBench numeric task. The agent may change anything here.

Print one JSON object mapping question_id -> numeric answer. Questions are in
questions.json; each question's data is in data/<capsule>/, where the capsule is the
question_id prefix (bix-18-q2 -> data/bix-18/). Unanswered questions score as wrong.
"""

import json
import warnings

import numpy as np
import pandas as pd
from scipy import stats

warnings.filterwarnings("ignore")
answers = {}


def answer(qid, function):
    try:
        value = function()
        if value is not None and np.isfinite(value):
            answers[qid] = float(value)
    except Exception:
        pass


# BCG-CORONA: one COVID-19 severity record per participant, merged with baseline.
def bcg_frame():
    dm = pd.read_csv("data/bix-10/TASK008_BCG-CORONA_DM.csv")
    ae = pd.read_csv("data/bix-10/TASK008_BCG-CORONA_AE.csv")
    ae = ae.loc[ae["AEPT"].astype(str).str.upper().eq("COVID-19")].copy()
    ae = ae.dropna(subset=["AESEV"]).drop_duplicates("USUBJID")
    return dm.merge(ae[["USUBJID", "AESEV"]], on="USUBJID", how="inner")


def bcg_ordered():
    from statsmodels.miscmodels.ordinal_model import OrderedModel
    d = bcg_frame()
    x = pd.DataFrame(index=d.index)
    x["BCG"] = d["TRTGRP"].eq("BCG").astype(float)
    x["expect_yes"] = d["expect_interact"].eq("Yes").astype(float)
    for category in sorted(d["patients_seen"].dropna().unique())[1:]:
        x["patients_" + str(category)] = d["patients_seen"].eq(category).astype(float)
    model = OrderedModel(d["AESEV"].astype(int), x, distr="logit").fit(disp=False)
    return model


def bcg_or(term):
    return np.exp(bcg_ordered().params[term])


def bcg_chisq(expect=None, patients=None):
    d = bcg_frame()
    if expect is not None:
        d = d.loc[d["expect_interact"].eq(expect)]
    if patients is not None:
        d = d.loc[d["patients_seen"].eq(patients)]
    return stats.chi2_contingency(pd.crosstab(d["TRTGRP"], d["AESEV"]), correction=False)[1]


answer("bix-10-q1", lambda: bcg_or("BCG"))
answer("bix-10-q2", lambda: bcg_or("expect_yes"))
answer("bix-10-q4", lambda: bcg_chisq(expect="Yes"))
answer("bix-10-q5", lambda: bcg_chisq(patients=">100"))
answer("bix-10-q6", lambda: bcg_chisq(patients="1-50"))
answer("bix-10-q7", lambda: (1 - bcg_or("expect_yes")) * 100)

# Swarming descriptive statistics.
sw1 = pd.read_csv("data/bix-18/Swarm_1.csv")
area18 = sw1.groupby("Genotype")["Area"].mean()
answer("bix-18-q1", lambda: sw1.loc[sw1["Genotype"].eq(area18.idxmax()), "Circularity"].mean())
answer("bix-18-q2", lambda: round(area18["Wildtype"], -3))
answer("bix-18-q3", lambda: (1 - area18["ΔlasR"] / area18["Wildtype"]) * 100)
answer("bix-18-q4", lambda: stats.sem(sw1.loc[sw1["Genotype"].eq("rhlR-"), "Circularity"].dropna()))
answer("bix-18-q5", lambda: area18["ΔlasR"] / area18["Wildtype"])

# NeuN effect size, power, normality, and factorial ANOVA.
neun = pd.read_csv("data/bix-19/NeuN_quantification.csv")
kd = neun.loc[neun["Hemispere"].eq("KD"), "NeuN"].dropna().to_numpy(float)
ctrl = neun.loc[neun["Hemispere"].eq("CTRL"), "NeuN"].dropna().to_numpy(float)

def neun_d():
    pooled = np.sqrt(((len(kd)-1)*kd.var(ddof=1) + (len(ctrl)-1)*ctrl.var(ddof=1)) / (len(kd)+len(ctrl)-2))
    return (kd.mean() - ctrl.mean()) / pooled


def neun_n():
    from statsmodels.stats.power import TTestIndPower
    return np.ceil(TTestIndPower().solve_power(effect_size=abs(neun_d()), alpha=0.05, power=0.8, alternative="two-sided"))


def neun_anova():
    import statsmodels.formula.api as smf
    from statsmodels.stats.anova import anova_lm
    fit = smf.ols("NeuN ~ C(Hemispere) * C(Sex)", data=neun).fit()
    return anova_lm(fit, typ=2).loc["C(Hemispere):C(Sex)", "F"]


answer("bix-19-q1", neun_n)
answer("bix-19-q2", neun_d)
answer("bix-19-q3", lambda: stats.shapiro(kd).statistic)
answer("bix-19-q4", neun_anova)

# ROSMAP expression: samples are columns in the source matrix.
def expression_matrix():
    raw = pd.read_csv("data/bix-27/ROSMAP_genexp_ad.csv").set_index("gene")
    return np.log10(raw.T.astype(float) + 1)


def rosmap_pc1():
    from sklearn.decomposition import PCA
    return PCA().fit(expression_matrix()).explained_variance_ratio_[0] * 100


def rosmap_consensus():
    from sklearn.cluster import AgglomerativeClustering
    from sklearn.linear_model import LogisticRegression
    from sklearn.model_selection import train_test_split
    x = expression_matrix()
    labels = AgglomerativeClustering(n_clusters=3).fit_predict(x)
    predictions = [[] for _ in range(len(x))]
    for seed in range(50):
        train, test = train_test_split(np.arange(len(x)), test_size=0.30, random_state=seed, stratify=labels)
        train_labels = AgglomerativeClustering(n_clusters=3).fit_predict(x.iloc[train])
        classifier = LogisticRegression(max_iter=2000).fit(x.iloc[train], train_labels)
        for i, label in zip(train, train_labels):
            predictions[i].append(label)
        for i, label in zip(test, classifier.predict(x.iloc[test])):
            predictions[i].append(label)
    stable = 0
    for observed in predictions:
        if observed:
            counts = np.bincount(observed, minlength=3)
            stable += counts.max() == len(observed)
    return stable


answer("bix-27-q2", rosmap_consensus)
answer("bix-27-q5", rosmap_pc1)

# Direct proteomic lookups.
def eno1(column):
    proteomics = pd.read_excel("data/bix-37/Proteomic_data.xlsx", sheet_name="Tumor vs Normal")
    return proteomics.loc[proteomics["gene"].eq("ENO1"), column].iloc[0]


answer("bix-37-q2", lambda: float(f"{eno1('Normal'):.3g}"))
answer("bix-37-q3", lambda: eno1("adj.Pval"))
answer("bix-37-q4", lambda: round(eno1("log2FC"), 2))

# Dunnett comparisons of every two-strain co-culture with pure Strain 1.
sw2 = pd.read_csv("data/bix-41/Swarm_2.csv")
sw2["StrainNumber"] = sw2["StrainNumber"].astype(str)
control41 = sw2.loc[sw2["StrainNumber"].eq("1")]
co41 = sw2.loc[~sw2["StrainNumber"].isin(["1", "98"])]

def dunnett_results():
    groups = list(co41.groupby(["StrainNumber", "Ratio"]))
    pvalues = {}
    for measure in ["Area", "Circularity"]:
        samples = [group[measure].dropna() for _, group in groups]
        test = stats.dunnett(*samples, control=control41[measure].dropna())
        for (key, _), pvalue in zip(groups, np.asarray(test.pvalue).ravel()):
            pvalues.setdefault(key, []).append(float(pvalue))
    return [(strain, ratio, pvals) for (strain, ratio), pvals in pvalues.items()]


answer("bix-41-q1", lambda: sum(p[0] >= 0.05 and p[1] >= 0.05 for _, _, p in dunnett_results()))
answer("bix-41-q3", lambda: sw2.loc[sw2["StrainNumber"].eq("98"), "Circularity"].mean() - control41["Circularity"].mean())
answer("bix-41-q4", lambda: len({ratio for _, ratio, p in dunnett_results() if p[0] < 0.05 and p[1] < 0.05}))

# Camrelizumab response logistic regressions.
clinical = pd.read_excel("data/bix-51/data.xlsx")
clinical["response"] = clinical["Efficacy"].eq("PR").astype(int)
clinical["male"] = clinical["Gender"].eq("Male").astype(int)

def clinical_fit(predictors):
    import statsmodels.api as sm
    x = sm.add_constant(clinical[predictors].astype(float), has_constant="add")
    return sm.Logit(clinical["response"], x).fit(disp=False)


answer("bix-51-q1", lambda: clinical_fit(["Age"]).predict([1, 65])[0])
answer("bix-51-q2", lambda: clinical_fit(["BMI"]).aic)
answer("bix-51-q3", lambda: clinical_fit(["BMI", "Age", "male"]).pvalues["Age"])
answer("bix-51-q4", lambda: clinical_fit(["BMI", "Age", "male"]).params["Age"])
answer("bix-51-q5", lambda: clinical_fit(["BMI"]).pvalues["BMI"])
answer("bix-51-q6", lambda: clinical_fit(["Age"]).aic)
answer("bix-51-q8", lambda: clinical_fit(["Age"]).params["Age"])

# Unique filtered age-related CpG sites and chromosome-length densities.
def cpg_density(species):
    cpg = pd.read_csv(f"data/bix-52/{species}_AgeRelated_CpG_noMT_Final.csv")
    lengths = pd.read_csv(f"data/bix-52/{species}_Chromosome_Length.csv", encoding="utf-8-sig")
    cpg = cpg.loc[(cpg["MethylationPercentage"] > 90) | (cpg["MethylationPercentage"] < 10)]
    unique = cpg.drop_duplicates("Pos")
    counts = unique.groupby(unique["Chromosome"].astype(str)).size()
    lengths["Chromosome"] = lengths["Chromosome"].astype(str)
    lengths = lengths.set_index("Chromosome")["Length"]
    return counts, counts / lengths.reindex(counts.index)


answer("bix-52-q1", lambda: cpg_density("ZF")[1]["W"] / cpg_density("ZF")[1]["1"])
answer("bix-52-q2", lambda: cpg_density("JD")[1].mean())
answer("bix-52-q3", lambda: stats.chisquare(cpg_density("ZF")[0].to_numpy()).statistic)
answer("bix-52-q5", lambda: cpg_density("ZF")[1]["Z"])

# Frequency-response models for Delta-rhlI:Delta-lasI co-cultures.
def frequency_data():
    d = sw2.loc[sw2["StrainNumber"].str.contains("287", regex=False)].copy()
    parts = d["Ratio"].astype(str).str.split(":", expand=True).astype(float)
    d["frequency"] = parts[0] / parts.sum(axis=1)
    return d[["frequency", "Area"]].dropna()


def spline_fits():
    import statsmodels.api as sm
    from patsy import dmatrix
    d = frequency_data()
    x = d["frequency"].to_numpy()
    y = d["Area"].to_numpy()
    quadratic = sm.OLS(y, sm.add_constant(np.column_stack([x, x**2]))).fit()
    cubic = sm.OLS(y, sm.add_constant(np.column_stack([x, x**2, x**3]))).fit()
    internal = np.quantile(x, [0.25, 0.50, 0.75])
    knots = np.concatenate(([x.min()], internal, [x.max()]))

    def ns_basis(values):
        values = np.asarray(values, dtype=float)

        def truncated(k):
            return (np.maximum(values - knots[k], 0) ** 3 - np.maximum(values - knots[-1], 0) ** 3) / (knots[-1] - knots[k])

        columns = [values]
        for k in range(1, len(knots) - 1):
            columns.append(truncated(k) - truncated(len(knots) - 2))
        return np.column_stack(columns)

    spline = sm.OLS(y, ns_basis(x)).fit()
    grid = np.linspace(x.min(), x.max(), 10001)
    prediction = spline.get_prediction(ns_basis(grid)).summary_frame(alpha=0.05)
    peak = int(np.argmax(prediction["mean"].to_numpy()))
    return d, quadratic, cubic, spline, grid, prediction, peak


answer("bix-54-q1", lambda: spline_fits()[4][spline_fits()[6]])
answer("bix-54-q2", lambda: spline_fits()[2].rsquared)
answer("bix-54-q3", lambda: spline_fits()[5]["mean_ci_lower"].iloc[spline_fits()[6]])
answer("bix-54-q4", lambda: spline_fits()[3].f_pvalue)
answer("bix-54-q5", lambda: spline_fits()[4][spline_fits()[6]])
answer("bix-54-q6", lambda: spline_fits()[3].rsquared)

def best_peak_area():
    d, quadratic, cubic, spline, grid, prediction, peak = spline_fits()
    x = d["frequency"].to_numpy()
    candidates = []
    for model, columns in [(quadratic, [grid, grid**2]), (cubic, [grid, grid**2, grid**3])]:
        import statsmodels.api as sm
        values = model.predict(sm.add_constant(np.column_stack(columns), has_constant="add"))
        candidates.append((model.rsquared, np.max(values)))
    candidates.append((spline.rsquared, prediction["mean"].iloc[peak]))
    return max(candidates, key=lambda item: item[0])[1]


answer("bix-54-q7", best_peak_area)

# MeRIP-seq categorical counts and independence test.
merip = pd.read_excel("data/bix-8/MeRIP_RNA_result.xlsx", sheet_name="Date Formatting")

def merip_hyper():
    return merip["m6A"].astype(str).str.contains("hyper", case=False) & ~merip["m6A"].astype(str).str.contains("no sig", case=False)


def merip_hypo():
    return merip["m6A"].astype(str).str.contains("hypo", case=False) & ~merip["m6A"].astype(str).str.contains("no sig", case=False)


def merip_chisq():
    significant = merip.loc[merip_hyper() | merip_hypo()].copy()
    significant = significant.loc[~significant["DEG"].astype(str).str.contains("no", case=False)]
    return stats.chi2_contingency(pd.crosstab(significant["m6A"], significant["DEG"]), correction=False)[0]


def hyper_up():
    increased = merip["DEG"].astype(str).str.contains("up", case=False) & ~merip["DEG"].astype(str).str.contains("no", case=False)
    return (merip_hyper() & increased).sum()


answer("bix-8-q2", merip_chisq)
answer("bix-8-q3", lambda: merip_hyper().sum() / merip_hypo().sum())
answer("bix-8-q6", lambda: merip_hyper().sum())
answer("bix-8-q7", hyper_up)

print(json.dumps(answers, allow_nan=False))
