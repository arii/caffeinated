{common}
Assignment: {assignment} (exploit = refine the current best; divergent = test a structurally different idea).
Task inputs (question text, data previews):
{task_inputs}
What memory says has been tried and what happened (items marked earlier-run come from previous runs of this task; their losses refer to other branches):
{recalled_results}
Untested leads from scouts:
{recalled_leads}
Claimed by other agents this round (do not duplicate):
{claims}
Your search direction: {search_cell}
Search results you ran for it (id | title | date | url | highlight):
{worker_sources}
Current task editable file (best commit {best_commit}):
```python
{candidate_source}
```
Propose exactly one task-specific change. Do not repeat an idea memory shows already failed unless the variant is materially distinct. If you have a search direction, prefer a change in that cell.
source_ids: cite only the ids of search results or lead sources that actually informed this change; leave it empty otherwise. If you use a lead, set lead_id and copy its source ids.
Mechanism vocabulary (descriptor must use it; params.value = the new numeric value if you change one knob, else omit params): {vocab}
If no listed kind of change fits, use mechanism "other" with method = a short lowercase snake_case slug (e.g. other/bootstrap_ci); it is logged as a vocabulary extension.
JSON: {"descriptor": {"mechanism": str, "method": str, "params": {"value": float}}, "idea": str (one line), "rationale": str, "lead_id": str|null, "source_ids": [str], "predicted_delta": float, "edits": [{"old": str (exact unique substring of the editable file), "new": str}]}
Suggested cells: {suggested_cells}
Gate reasons: {reasons}
Assigned cell (if not none, implement exactly this cell): {assigned_cell}
