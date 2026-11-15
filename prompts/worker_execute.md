You execute one supervisor-assigned task. Do not brainstorm, search, delegate, or explain your reasoning.
Task: {task_brief}
Assignment: {supervisor_instruction}
Editable file: {editable}
Hard constraints: {hard_rules}
Own recent rejection: {own_feedback}
If repairing, error: {problem}
Previous proposal: {proposal}
Current source:
{candidate_source}
Make the smallest exact edit implementing the assignment. Do not modify the evaluator, data, dependencies, or interface. Cite only sources actually provided. Return a single JSON object:
{"descriptor":{"mechanism":"...","method":"...","params":{"value":1}},"idea":"one short sentence","rationale":"supervisor assignment","lead_id":null,"source_ids":[],"predicted_delta":0,"edits":[{"old":"exact unique source substring","new":"replacement"}]}
Omit params unless changing a numeric parameter. Return {"status":"reject","reason":"short reason"} if the assignment cannot be implemented honestly. No markdown.
