"""The round loop. No judge is called here; nothing from committee/score is imported."""
import asyncio
import json
import os
import random
import re
from pathlib import Path

import numpy as np

import agents as agents_mod
import boredom
import events
import families as families_mod
import lab
import llm
import memory
import policy as policy_mod
import search
import seed as seed_mod
import sources
import stats
from agents import StudyRecord
from memory import Item
from policy import Action


class World:
    def __init__(self, arm: str, run_seed: int, specs: list, policy_fn, memory_backend: str,
                 exchange: bool, out_dir: str | Path, cfg: dict, mothers: list | None = None,
                 spawn: bool = False, founders: int | None = None):
        self.arm, self.seed, self.cfg = arm, run_seed, cfg
        self.out = Path(out_dir)
        self.out.mkdir(parents=True, exist_ok=True)
        self.log = events.EventLog(self.out / "events.jsonl", arm, run_seed)
        self.bib = sources.Bibliography(self.out)  # research_log.jsonl: every real source any agent found
        self.rng = random.Random(run_seed)
        self.policy = policy_fn
        self.exchange = exchange
        self.memory_backend = memory_backend
        self.shared = memory.SharedMemory() if memory_backend == "shared" else None
        self.agents = [self._make_agent(s) for s in specs]
        self.by_name = {a.name: a for a in self.agents}
        self.mothers = mothers or []
        self.spawn = spawn and bool(self.mothers)
        self.spawned_specs: list[dict] = []
        self.founders = founders
        self.round_done = -1

    def _make_agent(self, spec):
        return agents_mod.Agent(spec, memory.make_memory(self.memory_backend, spec.name, self.shared),
                                self.cfg, self.seed)

    def _add_agent(self, spec):
        a = self._make_agent(spec)
        self.agents.append(a)
        self.by_name[a.name] = a
        return a

    # ------------------------------------------------------------- state
    def save_state(self) -> None:
        st = {"round_done": self.round_done, "events_bytes": self.log.size(), "research_bytes": self.bib.size(),
              "rng": list(self.rng.getstate()[1]), "rng_gauss": self.rng.getstate()[2],
              "agents": {a.name: a.to_state() for a in self.agents},
              "spawned_specs": self.spawned_specs,
              "mothers": {m.name: m.to_state() for m in self.mothers}}
        if self.shared is not None:
            st["shared_memory"] = self.shared.to_state()
        else:
            st["memories"] = {a.name: a.memory.to_state() for a in self.agents}
        tmp = self.out / "state.json.tmp"
        tmp.write_text(json.dumps(st), encoding="utf-8")
        os.replace(tmp, self.out / "state.json")

    def load_state(self) -> bool:
        f = self.out / "state.json"
        if not f.exists():
            self.log.truncate(0)  # round 0 never finished; it will be replayed from scratch
            self.bib.truncate(0)
            return False
        st = json.loads(f.read_text(encoding="utf-8"))
        self.round_done = st["round_done"]
        if "events_bytes" in st:
            self.log.truncate(st["events_bytes"])
        self.bib.truncate(st.get("research_bytes", 0))
        self.rng.setstate((3, tuple(st["rng"]), st["rng_gauss"]))
        for raw in st.get("spawned_specs", []):
            if raw["name"] not in self.by_name:
                self._add_agent(agents_mod.AgentSpec(**raw))
            self.spawned_specs.append(raw)
        for m in self.mothers:
            if m.name in st.get("mothers", {}):
                m.load_state(st["mothers"][m.name])
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

    def _encounters(self, acting: list, wanderers: set[str]) -> list[tuple]:
        """Chance meetings. Each wanderer bumps into a random free colleague from any department;
        nobody is matched by field or distance, and nobody has two meetings in one round."""
        busy: set[str] = set()
        pairs = []
        order = [a for a in acting if a.name in wanderers]
        self.rng.shuffle(order)
        for a in order:
            if a.name in busy:
                continue
            free = [b for b in acting if b is not a and b.name not in busy]
            if not free:
                continue
            b = self.rng.choice(free)
            busy |= {a.name, b.name}
            pairs.append((a, b))
        return pairs

    def _converse(self, a, b) -> list[tuple]:
        history: list[str] = []
        turns = []
        for i in range(int(self.cfg.get("talk_turns", 3))):
            speaker, other = (a, b) if i % 2 == 0 else (b, a)
            text, res = speaker.talk(other.name, other.spec.field, history)
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
        real = [(d["name"], self.out / d["file"], [c["name"] for c in d["columns"]]) for d in a.datasets]
        out = lab.run_study(spec.get("code", ""), a, measurements, plot_path=self.out / plot_rel, datasets=real)
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
        a.meter["known"] = boredom.round_(1.0 - float(novelty.get("score", 1.0)))
        if rec.replicated:
            a.meter["progress"] = round
            if boredom.surprising(rec):
                a.meter["fresh"] = round
        a.memory.write(Item(id=f"{a.name}-{study_id}", kind="result" if verdict["replicated"] else "failure",
                            text=abstract or f"{study_id}: {verdict['reason']}", source_agent=a.name,
                            meta={"study_id": study_id, **info}))
        evidence = {}
        if a.spec.family:  # what this result rests on: real datasets (with DOI/URL) and sources the agent really has
            known = a.known_sources()
            trace = lab.trace_values(out["stats"] if out["ok"] else None, real)
            cited = dict.fromkeys((idea.citations if idea else []) + re.findall(r"S\d+", abstract))
            evidence = {"evidence": {
                "datasets": [{k: d[k] for k in ("name", "id", "title", "url", "license", "rows", "sha256")} for d in a.datasets],
                "citations": [known[c] for c in cited if c in known],
                "read": out["read"], "traceable": trace["share"], "trace": trace["arrays"],
                "supported": bool(out["ok"] and verdict["replicated"] and out["read"]
                                  and trace["weakest"] > float(self.cfg.get("traceable_share", 0.5)))}}
        self.log.append(round, a.name, "study_result", {
            **evidence,
            "study_id": study_id, "idea_id": rec.idea_id, "title": idea.title if idea else "",
            "ok": out["ok"], "replicated": verdict["replicated"], "stats": verdict,
            "prediction": idea.prediction.model_dump(), "abstract": abstract, "plot_path": out["plot_path"],
            "stderr": "" if out["ok"] else out["stderr"], "calls": out["calls"], "code": spec.get("code", "")[:4000],
            "measurements": len(measurements), "novelty": novelty,
        }, tokens=code_res.tokens + ares.tokens, latency_ms=code_res.latency_ms + ares.latency_ms)
        return f"study {study_id}: ok={out['ok']} replicated={verdict['replicated']} ({verdict['reason']})"

    # ---------------------------------------------------------- research
    async def _research(self, who: list, r: int) -> None:
        """Each daughter lab picks and runs its own research steps: search papers, read one, find or load
        a real public dataset. Nobody assigns the steps; the world only executes what each lab asked for."""
        who = [a for a in who if a.spec.family]
        if not who:
            return
        k = int(self.cfg.get("research_steps", 2))
        plans = await self._gather([(lambda a=a: a.plan_research(r, k)) for a in who])
        for a, (steps, res) in zip(who, plans):  # executed in agent order so S ids are reproducible
            tokens, latency = res.tokens, res.latency_ms
            for step in steps or [{"tool": "none"}]:
                done = self._do_step(a, step)
                if done.get("tool") == "load" and "error" not in done:
                    a.meter["fresh"] = a.meter["progress"] = r  # new real data is progress
                self.log.append(r, a.name, "research", done, tokens=tokens, latency_ms=latency)
                tokens = latency = 0
            # D ids stay fixed while one plan runs; used leads are dropped and the list trimmed only afterwards
            a.leads = [l for l in a.leads if not l.get("used")][-6:]

    def _do_step(self, a, step: dict) -> dict:
        tool = str(step.get("tool", "")).strip().lower()
        query = sources._clean(step.get("query"))[:200]
        try:
            if tool in sources.LITERATURE:
                recs = self.bib.search(a.name, tool, query, int(self.cfg.get("papers_per_search", 4)))
                for s in recs:
                    year = f" ({s['published'][:4]})" if s.get("published") else ""
                    a.memory.write(Item(id=f"{a.name}-{s['id']}", kind="library", source_agent=a.name,
                                        text=f"{s['title']}{year}. {' '.join(s.get('highlights') or [])[:500]}",
                                        meta={"url": s["url"], "sid": s["id"], "title": s["title"], "tool": tool}))
                return {"tool": tool, "query": query,
                        "results": [{"id": s["id"], "title": s["title"], "url": s["url"]} for s in recs]}
            if tool == "read":
                m = re.search(r"S\d+", str(step.get("source", "")))
                src = a.known_sources().get(m.group(0)) if m else None
                if src is None:
                    raise sources.ResearchError(f"{step.get('source')!r} is not a source this lab has")
                question = sources._clean(step.get("question"))[:300] or "What was measured, and what was the main result in numbers?"
                notes = self.bib.read(a.name, src["id"], question)
                n = sum(1 for it in a.memory.items if (it.meta or {}).get("read"))
                a.memory.write(Item(id=f"{a.name}-{src['id']}-read{n + 1}", kind="library", source_agent=a.name,
                                    text=f"Reading notes on {src['title']}: {notes}",
                                    meta={"url": src["url"], "sid": src["id"], "title": src["title"], "read": True}))
                return {"tool": "read", "source": src["id"], "url": src["url"], "question": question, "notes": notes[:800]}
            if tool == "datasets":
                have = {d["id"] for d in a.datasets} | {l["id"] for l in a.leads}
                new = sources.find_datasets(query, int(self.cfg.get("dataset_leads", 3)), skip=have)
                a.leads = a.leads + new
                return {"tool": "datasets", "query": query,
                        "results": [{"lead": f"D{a.leads.index(l) + 1}", "title": l["title"], "url": l["url"],
                                     "license": l.get("license", ""), "columns": l.get("preview", [])} for l in new]}
            if tool == "load":
                m = re.search(r"D(\d+)", str(step.get("lead", "")))
                i = int(m.group(1)) - 1 if m else -1
                if not 0 <= i < len(a.leads) or a.leads[i].get("used"):
                    raise sources.ResearchError(f"{step.get('lead')!r} is not one of this lab's dataset leads")
                if len(a.datasets) >= int(self.cfg.get("max_datasets", 2)):
                    raise sources.ResearchError("this lab already has its maximum number of datasets")
                lead = a.leads[i]
                lead["used"] = True  # an unusable lead is dropped too, so the lab does not retry it
                name = f"d{len(a.datasets) + 1}"
                rel = Path("data") / a.name / f"{name}.csv"
                ds = {"name": name, "file": str(rel), **sources.fetch_dataset(lead, self.out / rel)}
                a.datasets.append(ds)
                return {"tool": "load", "dataset": {**{k: ds[k] for k in ("name", "id", "title", "url", "license", "rows", "sha256")},
                                                    "columns": [c["name"] for c in ds["columns"]]}}
            raise sources.ResearchError(f"unknown tool {tool!r}")
        except (sources.ResearchError, ValueError, KeyError, TypeError, OSError) as e:  # a bad source never ends a run
            out = {"tool": tool or "none", "error": str(e)[:300]}
            if query:
                out["query"] = query
            return out

    # ------------------------------------------------------------ rounds
    async def _found(self) -> None:
        """Round 0 of a families run: the mothers talk, then each founds its first daughter labs."""
        history: list[str] = []
        names = [m.name for m in self.mothers]
        for i in range(int(self.cfg.get("mother_talk_rounds", 2))):
            for m in self.mothers:
                others = [x for x in names if x != m.name]
                text, res = m.talk(others, history, self.seed)
                history.append(f"{m.name}: {text}")
                self.log.append(0, m.name, "talk", {"partner": ", ".join(others), "turn": len(history),
                                                    "text": text}, tokens=res.tokens, latency_ms=res.latency_ms)
        k = int(self.cfg.get("initial_daughters", 2))
        cap = self.founders if self.founders is not None else k * len(self.mothers)
        taken = set(self.by_name)
        for _ in range(k):
            todo = self.mothers[:max(0, cap - len(self.agents))]
            if not todo:
                break
            defs = await self._gather([
                (lambda m=m: m.propose_daughter(0, [self.by_name[d] for d in m.daughters], self.seed, taken,
                                                meeting=history)) for m in todo])
            for m, (d, res) in zip(todo, defs):
                self._birth(m, d, res, 0, taken, {"reason": "founded"})

    def _birth(self, m, d, res, r: int, taken: set[str], info: dict):
        while d.name in taken:  # two mothers picked the same name this round
            d.name = f"{d.name}{m.name[:3]}"
        taken.add(d.name)
        spec = families_mod.to_spec(d, m)
        a = self._add_agent(spec)
        a.meter["born"] = r
        m.daughters.append(a.name)
        m.spawned += 1
        self.spawned_specs.append(spec.model_dump())
        self.log.append(r, m.name, "spawn", {"daughter": a.name, "field": spec.field, **info,
                                             "methods": spec.methods, "seed_queries": spec.seed_queries},
                        tokens=res.tokens, latency_ms=res.latency_ms)
        return a

    async def round0(self) -> None:
        if self.mothers and not self.agents:
            await self._found()
        seed_mod.seed_libraries(self.agents, self.log, self.cfg, bib=self.bib)
        for _ in range(int(self.cfg.get("first_research_passes", 2))):  # e.g. find a dataset, then load it
            await self._research(self.agents, 0)
        results = await self._gather([
            (lambda a=a: a.propose(0, a.memory.search(" ".join(a.spec.seed_queries), 5))) for a in self.agents])
        for a, (idea, res) in zip(self.agents, results):
            self._record_idea(a, idea, res, 0)

    async def round(self, r: int) -> None:
        threshold = float(self.cfg.get("boredom_threshold", 0.5))
        actions: dict[str, Action] = {}
        Bs = {}
        for a in self.agents:
            a.reset_budget()
            comp = boredom.daughter_components(a, r) if a.spec.family else boredom.components(a)
            act = self.policy(a, comp["B"], self.rng)
            actions[a.name] = act
            Bs[a] = comp["B"]
            self.log.append(r, a.name, "boredom", {**comp, "regime": policy_mod.regime(comp["B"], threshold),
                                                   "action": act.value})
        acting = [a for a in self.agents if a.name in actions]  # daughters born this round act next round
        if self.spawn:
            await self._spawn(r, {a.name: comp_B for a, comp_B in Bs.items()})
        snappers = [a for a in acting if actions[a.name] == Action.SNAP]
        p = float(self.cfg.get("wander_prob", 0.15))
        wanderers = {a.name for a in acting if actions[a.name] == Action.SNAP or self.rng.random() < p}
        pairs = self._encounters(acting, wanderers)
        partner_of = {}
        for x, y in pairs:
            partner_of[x.name], partner_of[y.name] = y.name, x.name

        for a in snappers:
            a.meter["snap"] = r  # one round back at the bench after wandering
        for x, y in pairs:
            for me, other in ((x, y), (y, x)):
                me.meter["fresh"] = r  # a chance meeting is something new
                if self.exchange and me.spec.family and not me.datasets:  # no data yet: ask what the colleague uses
                    have = {l["id"] for l in me.leads}
                    me.leads += [{"id": d["id"], "title": d["title"], "url": d["url"], "license": d.get("license", ""),
                                  "file_url": d["file_url"], "bytes": d.get("bytes", 0),
                                  "preview": [c["label"] for c in d["columns"]][:25]}
                                 for d in other.datasets if d["id"] not in have and "file_url" in d][:2]
        convs = await self._gather([(lambda p=p: self._converse(*p)) for p in pairs])
        for turns in convs:
            for speaker, other, i, text, res in turns:
                self.log.append(r, speaker.name, "talk", {"partner": other.name, "turn": i, "text": text},
                                tokens=res.tokens, latency_ms=res.latency_ms)
        if self.exchange:
            for x, y in pairs:
                self._share(x, y, r)
                self._share(y, x, r)

        await self._research(acting, r)

        found = {}
        for a in snappers:
            found[a.name] = search.obscure_source(self._topic(a))
            self.log.append(r, a.name, "snap", {"partner": partner_of.get(a.name), "source": found[a.name].model_dump()},
                            latency_ms=search.last_latency_ms())
        proposals = await self._gather([
            (lambda a=a: a.propose(r, a.memory.search(self._topic(a), 5), extra_source=found[a.name])) for a in snappers])
        for a, (idea, res) in zip(snappers, proposals):
            self._record_idea(a, idea, res, r)

        refiners = [a for a in acting if actions[a.name] == Action.REFINE]
        refined = await self._gather([(lambda a=a: a.refine(r)) for a in refiners])
        for a, (idea, res) in zip(refiners, refined):
            self._record_idea(a, idea, res, r)

        runners = [a for a in acting if actions[a.name] == Action.RUN_STUDY]
        peers = [{"agent": a.name, "instruments": [i.name for i in a.spec.instruments]} for a in self.agents]
        codes = await self._gather([(lambda a=a: a.write_study_code([p for p in peers if p["agent"] != a.name]))
                                    for a in runners])
        summaries = {a.name: f"action={actions[a.name].value}" for a in acting}
        for a, (spec, res) in zip(runners, codes):
            summaries[a.name] += "; " + self._run_study(a, spec, res, r)

        lessons = await self._gather([(lambda a=a: a.write_lesson(r, summaries[a.name])) for a in acting])
        for a, (text, res) in zip(acting, lessons):
            self.log.append(r, a.name, "lesson", {"text": text}, tokens=res.tokens, latency_ms=res.latency_ms)

    async def _spawn(self, r: int, B: dict[str, float]) -> None:
        """Each mother whose daughters' mean boredom reached spawn_threshold starts one new daughter lab."""
        threshold = float(self.cfg.get("spawn_threshold", 0.4))
        cooldown = int(self.cfg.get("spawn_cooldown", 2))
        cap = int(self.cfg.get("max_daughters", 5))
        ready = []
        for m in self.mothers:
            vals = [B[d] for d in m.daughters if d in B]
            field_B = float(np.mean(vals)) if vals else 0.0
            if vals and field_B >= threshold and len(m.daughters) < cap and r - m.last_spawn_round >= cooldown:
                ready.append((m, round(field_B, 4)))
        if not ready:
            return
        taken = set(self.by_name)
        defs = await self._gather([
            (lambda m=m: m.propose_daughter(r, [self.by_name[d] for d in m.daughters], self.seed, taken))
            for m, _ in ready])
        born = []
        for (m, field_B), (d, res) in zip(ready, defs):
            m.last_spawn_round = r
            born.append(self._birth(m, d, res, r, taken, {"reason": "bored", "field_B": field_B}))
        seed_mod.seed_libraries(born, self.log, self.cfg, round=r, bib=self.bib)
        for _ in range(int(self.cfg.get("first_research_passes", 2))):
            await self._research(born, r)
        results = await self._gather([
            (lambda a=a: a.propose(r, a.memory.search(" ".join(a.spec.seed_queries), 5))) for a in born])
        for a, (idea, res) in zip(born, results):
            self._record_idea(a, idea, res, r)

    async def run(self, rounds: int) -> None:
        if self.round_done < 0:
            await self.round0()
            self.round_done = 0
            self.save_state()
        for r in range(self.round_done + 1, rounds + 1):
            await self.round(r)
            self.round_done = r
            self.save_state()
