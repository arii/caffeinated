"""Build a standalone interactive knowledge graph of what a recorded swarm run's agents did.

usage: python scripts/knowledge_graph.py docs/recordings/<run>.json.gz docs/knowledge-graph.html
"""

import gzip
import json
import sys
from collections import defaultdict
from pathlib import Path
from urllib.parse import urlparse

TEMPLATE = Path(__file__).with_name("knowledge_graph.html")


def host(url):
    return urlparse(url or "").netloc or url or "unknown"


def study_status(study, judged):
    if study.get("rejected"):
        return "rejected"
    if study.get("confirmed"):
        return "confirmed"
    if study.get("p") is not None:
        return "not significant"
    return judged.get("gate") or "pending"


def build(recording):
    manifest, entities = recording["manifest"], recording.get("entities") or {}
    judge = recording.get("igjudge") or {}
    ideas = {i["study_id"]: i for i in judge.get("ideas") or []}
    ranks = {row["study_id"]: row["rank"] for row in judge.get("leaderboard") or []}
    agents = {a["agent_id"]: a for a in manifest.get("agents") or []}
    nodes, edges = {}, []

    def node(node_id, kind, label, **detail):
        nodes.setdefault(node_id, {"id": node_id, "kind": kind, "label": label, **detail})

    for agent_id, agent in agents.items():
        node(agent_id, "agent", agent.get("display_name") or agent_id, role=agent.get("type"))

    journey = defaultdict(list)
    counts = defaultdict(lambda: defaultdict(int))
    kinds = {
        "agent.assigned": "role",
        "boredom.measured": "boredom",
        "hypothesis.proposed": "hypothesis",
        "study.registered": "registered",
        "study.result": "result",
        "gate.checked": "gate",
        "diary.written": "diary",
        "award.issued": "award",
        "study.replicated": "replicated",
        "verdict.issued": "verdict",
        "round.started": "round",
    }
    for event in recording.get("events") or []:
        agent_id, kind = event.get("agent_id"), kinds.get(event.get("type"))
        if event.get("type") == "message.sent":
            target = (event.get("payload") or {}).get("to_agent_id")
            if agent_id in agents and target in agents:
                counts[(agent_id, target)]["messages"] += 1
        if kind and agent_id in agents:
            journey[agent_id].append(
                {
                    "round": event.get("round"),
                    "tick": event.get("tick"),
                    "kind": kind,
                    "text": (event.get("message") or "")[:400],
                }
            )
    for (source, target), c in counts.items():
        edges.append(
            {
                "source": source,
                "target": target,
                "kind": "directed",
                "label": f"{c['messages']} assignments/messages",
            }
        )

    for study in entities.get("studies") or []:
        sid, judged = study["id"], ideas.get(study["id"], {})
        dataset = study.get("dataset") or {}
        node(
            sid,
            "study",
            study.get("question") or study.get("hypothesis") or sid,
            status=study_status(study, judged),
            round=study.get("round"),
            hypothesis=study.get("hypothesis"),
            mechanism=study.get("mechanism"),
            field=study.get("field"),
            rho=study.get("rho"),
            p=study.get("p"),
            n=study.get("n"),
            outcome=study.get("outcome") or study.get("rejected"),
            committee=judged.get("committee"),
            score=judged.get("total"),
            rank=ranks.get(sid),
            winner=judge.get("winner") == sid,
            baseline=judged.get("baseline", False),
            verdict=judged.get("verdict"),
            var_x=dataset.get("x"),
            var_y=dataset.get("y"),
        )
        if study.get("agent_id") in agents:
            edges.append({"source": study["agent_id"], "target": sid, "kind": "proposed"})
        if dataset.get("url"):
            did = "dataset:" + (study.get("dataset_id") or dataset["url"])
            node(
                did,
                "dataset",
                host(dataset["url"]) + " · " + Path(urlparse(dataset["url"]).path).name,
                url=dataset["url"],
            )
            edges.append({"source": sid, "target": did, "kind": "tested on"})
        for url in study.get("citations") or []:
            node("cite:" + url, "citation", host(url) + urlparse(url).path[:40], url=url)
            edges.append({"source": sid, "target": "cite:" + url, "kind": "cites"})
        for work in judged.get("prior_work") or []:
            if work.get("url"):
                node(
                    "cite:" + work["url"],
                    "prior work",
                    work.get("title") or work["url"],
                    url=work["url"],
                )
                edges.append(
                    {"source": sid, "target": "cite:" + work["url"], "kind": "prior work (Exa)"}
                )
    for event in recording.get("events") or []:
        study_id = (event.get("refs") or {}).get("study_id")
        if event.get("type") == "study.replicated" and study_id in nodes:
            edges.append({"source": event["agent_id"], "target": study_id, "kind": "replicated"})

    studies = [n for n in nodes.values() if n["kind"] == "study"]
    summary = {
        "title": manifest.get("title"),
        "run": manifest.get("run_id"),
        "rounds": (manifest.get("time") or {}).get("rounds"),
        "model": (manifest.get("provenance") or {}).get("llm"),
        "studies": len(studies),
        "confirmed": sum(n["status"] == "confirmed" for n in studies),
        "hypotheses": len(entities.get("hypotheses") or []),
        "searches": len(entities.get("questions") or []),
        "sources": len(entities.get("sources") or []),
        "memories": len(entities.get("memory") or []),
        "llm_calls": len(entities.get("llm_calls") or []),
        "winner": nodes.get(judge.get("winner"), {}).get("label"),
    }
    return {"summary": summary, "nodes": list(nodes.values()), "edges": edges, "journey": journey}


def main(argv):
    source, target = Path(argv[1]), Path(argv[2])
    opener = gzip.open if source.suffix == ".gz" else open
    with opener(source, "rt", encoding="utf-8") as stream:
        graph = build(json.load(stream))
    data = json.dumps(graph, separators=(",", ":")).replace("<", "\\u003c")
    target.write_text(
        TEMPLATE.read_text(encoding="utf-8").replace("__GRAPH__", data), encoding="utf-8"
    )
    print(f"{len(graph['nodes'])} nodes, {len(graph['edges'])} edges -> {target}")


if __name__ == "__main__":
    main(sys.argv)
