"""Deterministic statistical answers for the BixBench numeric questions."""
import json
import numpy as np
import pandas as pd
from scipy import stats
import statsmodels.api as sm
import statsmodels.formula.api as smf

answers = {}
def safe(qid, fn):
    try:
        value = fn()
        if value is not None and np.isfinite(value):
            answers[qid] = float(value)
    except Exception:
        pass

# m6A methylation and expression.
try:
    m = pd.read_excel("data/bix-8/MeRIP_RNA_result.xlsx")
    hyper = m["m6A"].astype(str).str.lower().str.contains("hyper")
    hypo = m["m6A"].astype(str).str.lower().str.contains("hypo")
    up = m["DEG"].astype(str).str.lower().str.contains("up")
    safe("bix-8-q2", lambda: stats.chi2_contingency(pd.crosstab(m["m6A"], m["DEG"]))[0])
    safe("bix-8-q3", lambda: hyper.sum() / hypo.sum())
    safe("bix-8-q6", lambda: hyper.sum())
    safe("bix-8-q7", lambda: (hyper & up).sum())
except Exception:
    pass

# BCG ordinal models and severity contingency tests.
try:
    dm = pd.read_csv("data/bix-10/TASK008_BCG-CORONA_DM.csv")
    ae = pd.read_csv("data/bix-10/TASK008_BCG-CORONA_AE.csv")
    covid = ae[ae["AEPT"].eq("COVID-19")].copy()
    b = covid.merge(dm[["USUBJID", "patients_seen", "expect_interact"]], on="USUBJID", how="inner", suffixes=("", "_dm"))
    b["AESEV"] = pd.to_numeric(b["AESEV"], errors="coerce")
    b = b.dropna(subset=["AESEV"])
    b["TRTGRP_cat"] = pd.Categorical(b["TRTGRP"], categories=["Placebo", "BCG"])
    b["expect_interact_cat"] = pd.Categorical(b["expect_interact"], categories=["No", "Yes"])
    levels = [x for x in ["1-50", "51-100", ">100"] if x in set(b["patients_seen"])]
    b["patients_seen_cat"] = pd.Categorical(b["patients_seen"], categories=levels, ordered=True)
    try:
        from statsmodels.miscmodels.ordinal_model import OrderedModel
        om = OrderedModel.from_formula("AESEV ~ expect_interact_cat + patients_seen_cat + TRTGRP_cat", b, distr="logit").fit(disp=False)
        safe("bix-10-q1", lambda: np.exp(om.params["TRTGRP_cat[T.BCG]"]))
        safe("bix-10-q2", lambda: np.exp(om.params["expect_interact_cat[T.Yes]"]))
        safe("bix-10-q7", lambda: (1 - np.exp(om.params["expect_interact_cat[T.Yes]"])) * 100)
    except Exception:
        pass
    def bcg_chi(sub):
        return stats.chi2_contingency(pd.crosstab(sub["TRTGRP"], sub["AESEV"]))[1]
    safe("bix-10-q4", lambda: bcg_chi(b[b["expect_interact"].eq("Yes")]))
    safe("bix-10-q5", lambda: bcg_chi(b[b["patients_seen"].eq(">100")]))
    safe("bix-10-q6", lambda: bcg_chi(b[b["patients_seen"].eq("1-50")]))
except Exception:
    pass

# Swarming descriptive statistics.
try:
    sw = pd.read_csv("data/bix-18/Swarm_1.csv")
    area = sw.groupby("Genotype")["Area"].mean()
    largest = area.idxmax()
    safe("bix-18-q1", lambda: sw.loc[sw["Genotype"].eq(largest), "Circularity"].mean())
    safe("bix-18-q2", lambda: round(area["Wildtype"], -3))
    safe("bix-18-q3", lambda: (1 - area["ΔlasR"] / area["Wildtype"]) * 100)
    safe("bix-18-q4", lambda: sw.loc[sw["Genotype"].eq("rhlR-"), "Circularity"].sem())
    safe("bix-18-q5", lambda: area["ΔlasR"] / area["Wildtype"])
except Exception:
    pass

# NeuN effect size, power, normality, and factorial ANOVA.
try:
    n = pd.read_csv("data/bix-19/NeuN_quantification.csv")
    kd = n.loc[n["Hemispere"].eq("KD"), "NeuN"].astype(float)
    ct = n.loc[n["Hemispere"].eq("CTRL"), "NeuN"].astype(float)
    pooled = np.sqrt(((len(kd)-1)*kd.var(ddof=1) + (len(ct)-1)*ct.var(ddof=1)) / (len(kd)+len(ct)-2))
    d = (kd.mean()-ct.mean()) / pooled
    safe("bix-19-q2", lambda: d)
    def required_n():
        from statsmodels.stats.power import TTestIndPower
        return np.ceil(TTestIndPower().solve_power(effect_size=abs(d), alpha=0.05, power=0.8, ratio=1.0, alternative="two-sided"))
    safe("bix-19-q1", required_n)
    safe("bix-19-q3", lambda: stats.shapiro(kd)[0])
    safe("bix-19-q4", lambda: smf.ols("NeuN ~ C(Hemispere) * C(Sex)", n).fit().anova().loc["C(Hemispere):C(Sex)", "F"] if False else sm.stats.anova_lm(smf.ols("NeuN ~ C(Hemispere) * C(Sex)", n).fit(), typ=2).loc["C(Hemispere):C(Sex)", "F"])
except Exception:
    pass

# ROSMAP PCA and deterministic bootstrap consensus clustering.
try:
    gx = pd.read_csv("data/bix-27/ROSMAP_genexp_ad.csv").set_index("gene").T
    xlog = np.log10(gx.astype(float) + 1)
    from sklearn.decomposition import PCA
    safe("bix-27-q5", lambda: PCA().fit(xlog).explained_variance_ratio_[0] * 100)
    def consensus_count():
        from sklearn.cluster import AgglomerativeClustering
        from sklearn.linear_model import LogisticRegression
        from sklearn.model_selection import train_test_split
        from sklearn.preprocessing import StandardScaler
        from scipy.stats import mode
        z = StandardScaler().fit_transform(xlog)
        rng = np.random.RandomState(42)
        train_votes = np.full((len(z), 50, 3), np.nan)
        test_votes = np.full((len(z), 50, 3), np.nan)
        for i in range(50):
            tr, te = train_test_split(np.arange(len(z)), train_size=0.7, random_state=rng.randint(1000000))
            labels = AgglomerativeClustering(n_clusters=3).fit_predict(z[tr])
            clf = LogisticRegression(max_iter=2000).fit(z[tr], labels)
            pred = clf.predict(z)
            for j in tr:
                train_votes[j, i, labels[list(tr).index(j)]] = 1
            for j in te:
                test_votes[j, i, pred[j]] = 1
        tr_cons = np.nanargmax(np.nansum(train_votes, axis=1), axis=1)
        te_cons = np.nanargmax(np.nansum(test_votes, axis=1), axis=1)
        return np.sum(tr_cons == te_cons)
    safe("bix-27-q2", consensus_count)
except Exception:
    pass

# ENO1 proteomics.
try:
    p = pd.read_excel("data/bix-37/Proteomic_data.xlsx")
    eno = p[p["gene"].eq("ENO1")].iloc[0]
    safe("bix-37-q2", lambda: float(f"{eno['Normal']:.3g}"))
    safe("bix-37-q3", lambda: eno["adj.Pval"])
    safe("bix-37-q4", lambda: round(eno["log2FC"], 2))
except Exception:
    pass

# Two-strain co-culture Dunnett comparisons.
try:
    s2 = pd.read_csv("data/bix-41/Swarm_2.csv")
    safe("bix-41-q3", lambda: s2.loc[s2["StrainNumber"].eq(98), "Circularity"].mean() - s2.loc[s2["StrainNumber"].eq(1), "Circularity"].mean())
    control = s2.loc[s2["StrainNumber"].eq(1)]
    ratios = [r for r in s2["Ratio"].unique() if r not in ["1:0", "0:1"]]
    def dunnett_counts():
        pa, pc = [], []
        for r in ratios:
            g = s2[s2["Ratio"].eq(r)]
            pa.append(stats.dunnett(g["Area"], control=control["Area"]).pvalue[0])
            pc.append(stats.dunnett(g["Circularity"], control=control["Circularity"]).pvalue[0])
        return pa, pc
    pa, pc = dunnett_counts()
    safe("bix-41-q1", lambda: sum(a >= 0.05 and c >= 0.05 for a, c in zip(pa, pc)))
    safe("bix-41-q4", lambda: sum(a < 0.05 and c < 0.05 for a, c in zip(pa, pc)))
except Exception:
    pass

# Camrelizumab logistic regressions.
try:
    c = pd.read_excel("data/bix-51/data.xlsx")
    c["response"] = c["Efficacy"].eq("PR").astype(int)
    agefit = smf.logit("response ~ Age", c).fit(disp=False)
    bmifit = smf.logit("response ~ BMI", c).fit(disp=False)
    fullfit = smf.logit("response ~ BMI + Age + C(Gender)", c).fit(disp=False)
    safe("bix-51-q1", lambda: agefit.predict(pd.DataFrame({"Age": [65]})).iloc[0])
    safe("bix-51-q2", lambda: bmifit.aic)
    safe("bix-51-q3", lambda: fullfit.pvalues["Age"])
    safe("bix-51-q4", lambda: fullfit.params["Age"])
    safe("bix-51-q5", lambda: bmifit.pvalues["BMI"])
    safe("bix-51-q6", lambda: agefit.aic)
    safe("bix-51-q8", lambda: agefit.params["Age"])
except Exception:
    pass

# Filtered unique age-related CpG chromosomal densities.
try:
    zf = pd.read_csv("data/bix-52/ZF_AgeRelated_CpG_noMT_Final.csv", dtype={"Chromosome": str})
    jd = pd.read_csv("data/bix-52/JD_AgeRelated_CpG_noMT_Final.csv", dtype={"Chromosome": str})
    zl = pd.read_csv("data/bix-52/ZF_Chromosome_Length.csv", encoding="utf-8-sig", dtype={"Chromosome": str})
    jl = pd.read_csv("data/bix-52/JD_Chromosome_Length.csv", encoding="utf-8-sig", dtype={"Chromosome": str})
    zf = zf[(zf["MethylationPercentage"] > 90) | (zf["MethylationPercentage"] < 10)].drop_duplicates("Pos")
    jd = jd[(jd["MethylationPercentage"] > 90) | (jd["MethylationPercentage"] < 10)].drop_duplicates("Pos")
    zcounts = zf.groupby("Chromosome").size()
    jcounts = jd.groupby("Chromosome").size()
    zlength = zl.set_index("Chromosome")["Length"]
    jlength = jl.set_index("Chromosome")["Length"]
    safe("bix-52-q1", lambda: (zcounts["W"] / zlength["W"]) / (zcounts["1"] / zlength["1"]))
    safe("bix-52-q2", lambda: jcounts.sum() / jlength.sum())
    safe("bix-52-q3", lambda: stats.chisquare(zcounts.reindex(zlength.index, fill_value=0).values)[0])
    safe("bix-52-q5", lambda: zcounts["Z"] / zlength["Z"])
except Exception:
    pass

# Polynomial and natural-spline swarming models.
try:
    s = pd.read_csv("data/bix-54/Swarm_2.csv")
    parts = s["Ratio"].astype(str).str.split(":", expand=True).astype(float)
    s["Frequency_rhlI"] = parts[0] / (parts[0] + parts[1])
    quad = smf.ols("Area ~ Frequency_rhlI + I(Frequency_rhlI**2)", s).fit()
    cubic = smf.ols("Area ~ Frequency_rhlI + I(Frequency_rhlI**2) + I(Frequency_rhlI**3)", s).fit()
    # Match R's ns(x, df=4): three internal quantile knots, natural cubic
    # constraints at the observed boundary knots, and no basis intercept.
    freq = s["Frequency_rhlI"].to_numpy(dtype=float)
    ns_knots = np.quantile(freq, [0.25, 0.5, 0.75])
    ns_boundary = (freq.min(), freq.max())
    def ns_design(values):
        values = np.asarray(values, dtype=float)
        upper = ns_boundary[1]
        def truncated_cube(knot):
            return np.maximum(values - knot, 0.0) ** 3
        last_d = (truncated_cube(ns_knots[-1]) - truncated_cube(upper)) / (upper - ns_knots[-1])
        columns = [values]
        for knot in ns_knots[:-1]:
            d = (truncated_cube(knot) - truncated_cube(upper)) / (upper - knot)
            columns.append(d - last_d)
        return sm.add_constant(np.column_stack(columns), has_constant="add")
    spline = sm.OLS(s["Area"].to_numpy(dtype=float), ns_design(freq)).fit()
    grid = pd.DataFrame({"Frequency_rhlI": np.linspace(0, 1, 10001)})
    grid_design = ns_design(grid["Frequency_rhlI"])
    spred = spline.predict(grid_design)
    imax = int(np.argmax(spred))
    safe("bix-54-q1", lambda: grid.iloc[imax]["Frequency_rhlI"])
    safe("bix-54-q2", lambda: cubic.rsquared)
    safe("bix-54-q3", lambda: spline.get_prediction(grid_design[[imax]]).conf_int(alpha=0.05)[0][0])
    safe("bix-54-q4", lambda: spline.f_pvalue)
    safe("bix-54-q5", lambda: grid.iloc[imax]["Frequency_rhlI"])
    safe("bix-54-q6", lambda: spline.rsquared)
    def best_max():
        model = max([quad, cubic, spline], key=lambda fit: fit.rsquared)
        return np.max(spline.predict(grid_design) if model is spline else model.predict(grid))
    safe("bix-54-q7", best_max)
except Exception:
    pass

print(json.dumps(answers, sort_keys=True))
