"""Team logic placeholder. Enabled by config `teams_enabled`; nothing is built yet."""


def form_teams(agents, cfg):
    if not cfg.get("teams_enabled"):
        return [[a] for a in agents]
    raise NotImplementedError("team logic is out of scope for the scaffold")
