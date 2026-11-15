{common}
Assignment: {assignment} (exploit = refine the current best; divergent = test a structurally different idea).
What memory says has been tried and what happened:
{recalled_results}
Untested leads from scouts:
{recalled_leads}
Claimed by other agents this round (do not duplicate):
{claims}
Current task editable file (best commit {best_commit}):
```python
{candidate_source}
```
Propose exactly one task-specific change. Do not repeat an idea memory shows already failed unless the variant is materially distinct. If you use a lead, set lead_id and copy its source ids.
Mechanism vocabulary (descriptor must use it; params.value = the new numeric value if you change one knob, else omit params): {vocab}
JSON: {"descriptor": {"mechanism": str, "method": str, "params": {"value": float}}, "idea": str (one line), "rationale": str, "lead_id": str|null, "source_ids": [str], "predicted_delta": float, "edits": [{"old": str (exact unique substring of the editable file), "new": str}]}
Suggested cells: {suggested_cells}
Gate reasons: {reasons}
Assigned cell (if not none, implement exactly this cell): {assigned_cell}
