# Team workflow

You are working alongside people and other agents. Preserve their changes.

- Before editing, check `git status`, your branch, and recent commits. Do not overwrite, discard, or commit someone else's work.
- Start each task on your own branch from an up-to-date `main` (for example, `agent/name/task`). Use a separate worktree when others may be working in the same checkout; never switch branches in someone else's checkout.
- Keep work focused. Coordinate overlapping changes with the people working on them. Avoid destructive resets, force pushes, and cleaning or stashing someone else's work.
- Test changes as appropriate, stage only your task's files, review the staged diff, and commit to your branch. Push the branch when sharing work.
- Merge to `main` only when a human explicitly asks or authorizes it. Before merging, update your view of `main`, check the changes and resolve conflicts carefully, preserving other contributors' work. Follow any repository-required checks or protections.
- At handoff, briefly report the branch, changes, checks, and any remaining issues. Never commit secrets.
