"""Editable analysis for the BixBench mini task. The agent may change anything here.

Print one JSON object mapping question_id -> numeric answer. Questions are in
questions.json; raw data is in data/. Unanswered questions score as wrong.
"""

import json

import pandas as pd

answers = {}
sw = pd.read_csv("data/Swarm_1.csv")
area = sw.groupby("Genotype").Area.mean()
answers["bix-18-q2"] = round(area["Wildtype"], -3)
answers["bix-18-q3"] = (1 - area["ΔlasR"] / area["Wildtype"]) * 100
answers["bix-18-q4"] = sw[sw.Genotype == "rhlR-"].Circularity.std()

# Unanswered questions, one TODO line each (remove the line when you answer it):
# TODO bix-18-q1
# TODO bix-18-q5
# TODO bix-19 (NeuN: effect size, normality, power, interaction)
# TODO bix-51 (logistic regressions on data.xlsx)

print(json.dumps({k: float(v) for k, v in answers.items()}))
