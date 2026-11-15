{common}
Assignment: {assignment} (exploit = refine the current best with a focused change; divergent = a structurally different change, from a lead if one fits).
What memory says has been tried and what happened:
{recalled_results}
Untested leads from scouts:
{recalled_leads}
Claimed by other agents this round (do not duplicate):
{claims}
Current train.py (best commit {best_commit}):
```python
{train_py}
```
Propose exactly one change. Do not repeat an idea memory shows already failed unless you state why your variant differs. If you use a lead, set lead_id and copy its source ids.
Mechanism vocabulary (descriptor must use it; params.value = the new numeric value if you change one knob, else omit params): {vocab}
JSON: {"descriptor": {"mechanism": str, "method": str, "params": {"value": float}}, "idea": str (one line, <=80 chars), "rationale": str, "lead_id": str|null, "source_ids": [str], "predicted_delta": float, "edits": [{"old": str (exact unique substring of train.py), "new": str}]}
Suggested cells: {suggested_cells}
Gate reasons: {reasons}
Assigned cell (if not none, implement exactly this cell): {assigned_cell}
