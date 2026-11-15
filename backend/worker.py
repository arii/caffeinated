"""Instrument Ari's runner in a per-run clone. Research semantics stay upstream."""
import argparse
import json
import os
from pathlib import Path
import sys
import time


def main():
    parser = argparse.ArgumentParser(); parser.add_argument('--workspace', required=True); parser.add_argument('--out', required=True); parser.add_argument('--config', required=True)
    args = parser.parse_args(); workspace = Path(args.workspace); out = Path(args.out)
    config = json.loads(Path(args.config).read_text()); sys.path.insert(0, str(workspace))
    import swarm
    import llm
    from backend.ingest import agent
    start = time.monotonic(); calls = 0
    budget = int(os.environ.get('LAB_MAX_LLM_CALLS', '32'))
    deadline = int(os.environ.get('LAB_RUN_TIMEOUT', '1200'))
    def emit(kind, payload):
        with (out/'runtime.jsonl').open('a') as f: f.write(json.dumps({'type': kind, 'payload': payload})+'\n')
    for name in ['conductor', *swarm.AGENTS, 'critic']:
        emit('agent.updated', agent(name, name if name in {'conductor','critic'} else 'worker', 'working' if name == 'conductor' else 'idle'))
    assigned_roles = {}
    original_assignment = swarm.append_assignment
    def assignment(allocation, **kwargs):
        assigned_roles.update(allocation.get('roles', {}))
        return original_assignment(allocation, **kwargs)
    swarm.append_assignment = assignment
    original_call = llm.LLMClient.call
    def call(client, role, *, agent: str, round_num, values):
        nonlocal calls
        if (out/'stop.requested').exists(): raise RuntimeError('Run stopped by user')
        if calls >= budget or time.monotonic()-start > deadline: raise RuntimeError('Run budget reached')
        calls += 1
        from backend.ingest import agent as view
        short_role = 'scout' if 'SCOUT' in role.upper() else 'critic' if 'CRITIC' in role.upper() else 'worker'
        short_role = assigned_roles.get(agent, short_role) if short_role == 'worker' else short_role
        emit('agent.updated', view(agent, short_role, 'thinking'))
        result = original_call(client, role, agent=agent, round_num=round_num, values=values)
        emit('agent.updated', view(agent, short_role, 'reviewing'))
        return result
    llm.LLMClient.call = call
    options = ['--repo', str(workspace), '--out', str(out), '--arm', config['arm'], '--rounds', str(config['rounds']), '--seed', str(config['seed']), '--llm', 'fake' if config['mode']=='offline' else 'tinker', '--gpu', 'modal' if config['mode']=='tinker_modal' else 'fake', '--memory-backend', 'local', '--exa', 'off', '--no-push']
    if config.get('model'): options += ['--model', config['model']]
    return swarm.main(options)


if __name__ == '__main__':
    try: raise SystemExit(main())
    except Exception as error:
        # Never include exception text that may contain SDK credentials.
        print(f'Worker failed: {type(error).__name__}', file=sys.stderr); raise SystemExit(2)
