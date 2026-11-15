"""The round loop. No judge is called here; nothing from committee/score is imported."""
import asyncio
import json
import os
import random
from pathlib import Path

import numpy as np

import agents as agents_mod
import boredom
import events
import lab
import llm
import memory
import policy as policy_mod
import search
import seed as seed_mod
import stats
from agents import StudyRecord
from memory import Item
from policy import Action


class World:
    def __init__(self, arm: str, run_seed: int, specs: list, policy_fn, memory_backend: str,
                 exchange: bool, out_dir: str | Path, cfg: dict):
        self.arm, self.seed, self.cfg = arm, run_seed, cfg
        self.out = Path(out_dir)
        self.out.mkdir(parents=True, exist_ok=True)
        self.log = events.EventLog(self.out / "events.jsonl", arm, run_seed)
        self.rng = random.Random(run_seed)
        self.policy = policy_fn
        self.exchange = exchange
        self.memory_backend = memory_backend
        self.shared = memory.SharedMemory() if memory_backend == "shared" else None
        self.agents = [agents_mod.Agent(s, memory.make_memory(memory_backend, s.name, self.shared), cfg, run_seed)
                       for s in specs]
        self.by_name = {a.name: a for a in self.agents}
        self.round_done = -1

    # ------------------------------------------------------------- state
    def save_state(self) -> None:
        """Checkpoint after a completed round. Records how many bytes of events.jsonl belong to it
        and writes atomically, so a crash mid-round or mid-save cannot corrupt the checkpoint."""
        st = {"round_done": self.round_done, "rng": list(self.rng.getstate()[1]), "rng_gauss": self.rng.getstate()[2],
              "events_bytes": self.log.path.stat().st_size if self.log.path.exists() else 0,
              "agents": {a.name: a.to_state() for a in self.agents}}
        if self.shared is not None:
            st["shared_memory"] = self.shared.to_state()
        else:
            st["memories"] = {a.name: a.memory.to_state() for a in self.agents}
        tmp = self.out / "state.json.tmp"
        tmp.write_text(json.dumps(st), encoding="utf-8")
        os.replace(tmp, self.out / "state.json")

    def load_state(self) -> bool:
        """Restore the last checkpoint and drop any events a half-finished round wrote after it."""
        f = self.out / "state.json"
        if not f.exists():
            return False
        st = json.loads(f.read_text(encoding="utf-8"))
        self.round_done = st["round_done"]
        keep = st.get("events_bytes")
        if keep is not None and self.log.path.exists() and self.log.path.stat().st_size > keep:
            with open(self.log.path, "r+b") as fh:
                fh.truncate(keep)
        self.rng.setstate((3, tuple(st["rng"]), st["rng_gauss"]))
        for a in self.agents:
            a.load_state(st["agents"][a.name])
        if self.shared is not None:
            self.shared.load_state(st["shared_memory"])
        else:
            for a in self.agents:
                a.memory.load_state(st["memories"][a.name])
        return True

    # ----------------------------------------------------------- helpers
    async def _gather(self, fns):
        return await asyncio.gather(*[asyncio.to_thread(f) for f in fns])

    def _topic(self, a) -> str:
        idea = a.current_idea()
        return idea.title if idea else a.spec.field

    def _record_idea(self, a, idea, res, round: int) -> None:
        a.memory.write(Item(id=f"{a.name}-{idea.idea_id}", kind="idea", text=idea.text, source_agent=a.name,
                            meta={"round": round, "urls": idea.source_urls}, embedding=idea.embedding))
        a.memory.write(Item(id=f"{a.name}-{idea.idea_id}-pred", kind="prediction", source_agent=a.name,
                            text=f"Prediction for {idea.title}: {idea.prediction.direction} {idea.prediction.effect_size}",
                            meta={"idea_id": idea.idea_id}))
        self.log.append(round, a.name, "idea", {"idea_id": idea.idea_id, "kind": idea.kind, "title": idea.title,
                                                "text": idea.text, "hypothesis": idea.hypothesis,
                                                "method": idea.method, "source_urls": idea.source_urls},
                        tokens=res.tokens, latency_ms=res.latency_ms)
        self.log.append(round, a.name, "prediction", {"idea_id": idea.idea_id, **idea.prediction.model_dump()})

    def _pair(self, snappers: list) -> list[tuple]:
        """Greedy pairing by greatest distance between library centroids; an odd one out gets the
        farthest non-snapper as a conversation partner."""
        cents = {a.name: a.memory.centroid() for a in self.agents}
        dist = lambda x, y: 1.0 - llm.cosine(cents[x.name], cents[y.name])
        pool = list(snappers)
        pairs = []
        while len(pool) >= 2:
            best = max(((dist(x, y), x.name, y.name) for i, x in enumerate(pool) for y in pool[i + 1:]),
                       key=lambda t: (t[0], t[1], t[2]))
            x, y = self.by_name[best[1]], self.by_name[best[2]]
            pairs.append((x, y))
            pool = [p for p in pool if p not in (x, y)]
        if pool:
            others = [a for a in self.agents if a not in snappers]
            if others:
                partner = max(others, key=lambda o: (dist(pool[0], o), o.name))
                pairs.append((pool[0], partner))
        return pairs

    def _converse(self, a, b) -> list[tuple]:
        topic = f"{self._topic(a)} / {self._topic(b)}"
        history: list[str] = []
        turns = []
        for i in range(int(self.cfg.get("talk_turns", 3))):
            speaker, other = (a, b) if i % 2 == 0 else (b, a)
            text, res = speaker.talk(other.name, other.spec.field, history, topic)
            history.append(f"{speaker.name}: {text}")
            turns.append((speaker, other, i + 1, text, res))
        return turns

    def _share(self, sender, receiver, round: int) -> None:
        out = memory.share(sender.name, sender.memory, receiver.name, receiver.memory, self._topic(receiver),
                           int(self.cfg.get("max_share_items", 3)), float(self.cfg.get("keep_similarity", 0.95)))
        self.log.append(round, sender.name, "share", {"receiver": receiver.name, **out})

    def _run_study(self, a, spec: dict, code_res, round: int) -> str:
        idea = a.current_idea()
        measurements = []
        for req in (spec.get("requests") or [])[:3]:
            owner = self.by_name.get(str(req.get("owner", "")))
            if owner is None or owner is a:
                continue
            try:
                m = lab.request_measurement(a, owner, req)
                measurements.append(m.pop("data"))
                self.log.append(round, owner.name, "measurement_request", m)
            except (KeyError, RuntimeError) as e:
                self.log.append(round, owner.name, "measurement_request",
                                {"requester": a.name, "instrument": req.get("instrument"), "error": str(e)})
        study_id = f"{a.name}-r{round}-s{len(a.studies) + 1}"
        plot_rel = Path("plots") / f"{study_id}.svg"  # relative to the run dir so same seed => same file
        out = lab.run_study(spec.get("code", ""), a, measurements, plot_path=self.out / plot_rel)
        if out["plot_path"]:
            out["plot_path"] = str(plot_rel)
        verdict = stats.check(out["stats"] if out["ok"] else None, len(a.studies) + 1, float(self.cfg.get("alpha", 0.05)), seed=self.seed)
        if idea is not None:
            idea.run = True
        info = {"ok": out["ok"], "replicated": verdict["replicated"], "effect_size": verdict["effect_size"],
                "direction": verdict["direction"], "p": verdict["p"], "n": verdict["n"], "reason": verdict["reason"]}
        abstract, ares = a.write_abstract(info)
        novelty = search.novelty_check(idea.text if idea else a.spec.field)
        rec = StudyRecord(study_id=study_id, idea_id=idea.idea_id if idea else "", round=round, ok=out["ok"],
                          replicated=verdict["replicated"], predicted=idea.prediction,
                          actual_effect=verdict["effect_size"], actual_direction=verdict["direction"], abstract=abstract)
        a.studies.append(rec)
        a.memory.write(Item(id=f"{a.name}-{study_id}", kind="result" if verdict["replicated"] else "failure",
                            text=abstract or f"{study_id}: {verdict['reason']}", source_agent=a.name,
                            meta={"study_id": study_id, **info}))
        self.log.append(round, a.name, "study_result", {
            "study_id": study_id, "idea_id": rec.idea_id, "title": idea.title if idea else "",
            "ok": out["ok"], "replicated": verdict["replicated"], "stats": verdict,
            "prediction": idea.prediction.model_dump(), "abstract": abstract, "plot_path": out["plot_path"],
            "stderr": "" if out["ok"] else out["stderr"], "calls": out["calls"], "code": spec.get("code", "")[:4000],
            "measurements": len(measurements), "novelty": novelty,
        }, tokens=code_res.tokens + ares.tokens, latency_ms=code_res.latency_ms + ares.latency_ms)
        return f"study {study_id}: ok={out['ok']} replicated={verdict['replicated']} ({verdict['reason']})"

    # ------------------------------------------------------------ rounds
    async def round0(self) -> None:
        seed_mod.seed_libraries(self.agents, self.log, self.cfg)
        results = await self._gather([
            (lambda a=a: a.propose(0, a.memory.search(" ".join(a.spec.seed_queries), 5))) for a in self.agents])
        for a, (idea, res) in zip(self.agents, results):
            self._record_idea(a, idea, res, 0)

    async def round(self, r: int) -> None:
        threshold = float(self.cfg.get("boredom_threshold", 0.5))
        actions: dict[str, Action] = {}
        for a in self.agents:
            a.reset_budget()
            comp = boredom.components(a)
            act = self.policy(a, comp["B"], self.rng)
            actions[a.name] = act
            self.log.append(r, a.name, "boredom", {**comp, "regime": policy_mod.regime(comp["B"], threshold),
                                                   "action": act.value})
        snappers = [a for a in self.agents if actions[a.name] == Action.SNAP]
        pairs = self._pair(snappers)
        partner_of = {}
        for x, y in pairs:
            partner_of[x.name], partner_of[y.name] = y.name, x.name

        convs = await self._gather([(lambda p=p: self._converse(*p)) for p in pairs])
        for turns in convs:
            for speaker, other, i, text, res in turns:
                self.log.append(r, speaker.name, "talk", {"partner": other.name, "turn": i, "text": text},
                                tokens=res.tokens, latency_ms=res.latency_ms)
        if self.exchange:
            for x, y in pairs:
                self._share(x, y, r)
                self._share(y, x, r)

        sources = {}
        for a in snappers:
            sources[a.name] = search.obscure_source(self._topic(a))
            self.log.append(r, a.name, "snap", {"partner": partner_of.get(a.name), "source": sources[a.name].model_dump()},
                            latency_ms=search.last_latency_ms())
        proposals = await self._gather([
            (lambda a=a: a.propose(r, a.memory.search(self._topic(a), 5), extra_source=sources[a.name])) for a in snappers])
        for a, (idea, res) in zip(snappers, proposals):
            self._record_idea(a, idea, res, r)

        refiners = [a for a in self.agents if actions[a.name] == Action.REFINE]
        refined = await self._gather([(lambda a=a: a.refine(r)) for a in refiners])
        for a, (idea, res) in zip(refiners, refined):
            self._record_idea(a, idea, res, r)

        runners = [a for a in self.agents if actions[a.name] == Action.RUN_STUDY]
        peers = [{"agent": a.name, "instruments": [i.name for i in a.spec.instruments]} for a in self.agents]
        codes = await self._gather([(lambda a=a: a.write_study_code([p for p in peers if p["agent"] != a.name]))
                                    for a in runners])
        summaries = {a.name: f"action={actions[a.name].value}" for a in self.agents}
        for a, (spec, res) in zip(runners, codes):
            summaries[a.name] += "; " + self._run_study(a, spec, res, r)

        lessons = await self._gather([(lambda a=a: a.write_lesson(r, summaries[a.name])) for a in self.agents])
        for a, (text, res) in zip(self.agents, lessons):
            self.log.append(r, a.name, "lesson", {"text": text}, tokens=res.tokens, latency_ms=res.latency_ms)

    async def run(self, rounds: int) -> None:
        if self.round_done < 0:
            await self.round0()
            self.round_done = 0
            self.save_state()
        for r in range(self.round_done + 1, rounds + 1):
            await self.round(r)
            self.round_done = r
            self.save_state()
