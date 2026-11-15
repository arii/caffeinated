"""Reference analysis used only to confirm the mini benchmark is solvable. Do not expose to agents."""

import json
import sys
from pathlib import Path

import numpy as np
import pandas as pd
import statsmodels.api as sm
import statsmodels.formula.api as smf
from scipy import stats
from statsmodels.stats.power import TTestIndPower

D = Path(__file__).resolve().parent.parent / "bixbench_mini" / "data"
a = {}
sw = pd.read_csv(D / "Swarm_1.csv")
g = sw.groupby("Genotype")
top = g.Area.mean().idxmax()
a["bix-18-q1"] = g.Circularity.mean()[top]
wt = g.Area.mean()["Wildtype"]
las = g.Area.mean()["ΔlasR"]
a["bix-18-q2"] = round(wt, -3)
a["bix-18-q3"] = (1 - las / wt) * 100
a["bix-18-q4"] = stats.sem(sw[sw.Genotype == "rhlR-"].Circularity)
a["bix-18-q5"] = las / wt * 100

n = pd.read_csv(D / "NeuN_quantification.csv")
kd = n[n.Hemispere == "KD"].NeuN
ct = n[n.Hemispere == "CTRL"].NeuN
sp = np.sqrt(((len(kd) - 1) * kd.var() + (len(ct) - 1) * ct.var()) / (len(kd) + len(ct) - 2))
d = abs(kd.mean() - ct.mean()) / sp
size = int(np.ceil(TTestIndPower().solve_power(effect_size=d, power=0.8, alpha=0.05)))
a["bix-19-q1"] = size
a["bix-19-q2"] = d
a["bix-19-q3"] = stats.shapiro(kd).statistic
m = smf.ols("NeuN ~ C(Hemispere) * C(Sex)", data=n).fit()
a["bix-19-q4"] = sm.stats.anova_lm(m, typ=2).loc["C(Hemispere):C(Sex)", "F"]
a["bix-19-q5"] = size

x = pd.read_excel(D / "data.xlsx")
x = x[pd.to_numeric(x["Age"], errors="coerce").notna() & x["Efficacy"].notna()].copy()
x["Age"] = x["Age"].astype(float)
x["PR"] = (x["Efficacy"].astype(str).str.strip() == "PR").astype(int)
age = smf.logit("PR ~ Age", data=x).fit(disp=0)
bmi = smf.logit("PR ~ BMI", data=x).fit(disp=0)
full = smf.logit("PR ~ BMI + Age + C(Gender)", data=x).fit(disp=0)
a["bix-51-q1"] = float(age.predict(pd.DataFrame({"Age": [65]}))[0])
a["bix-51-q2"] = bmi.aic
a["bix-51-q3"] = full.pvalues["Age"]
a["bix-51-q4"] = full.params["Age"]
a["bix-51-q5"] = bmi.pvalues["BMI"]
a["bix-51-q6"] = age.aic
a["bix-51-q8"] = age.params["Age"]
json.dump({k: float(v) for k, v in a.items()}, sys.stdout, indent=1)
