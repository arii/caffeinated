import json
from pathlib import Path
import tempfile
import time
import unittest
from fastapi.testclient import TestClient
from backend.app import create_app, Manager, RunConfig
from backend.store import Store
from backend.ingest import ingest
from unittest.mock import patch

class ServiceTests(unittest.TestCase):
    def setUp(self):
        self.capabilities=patch.object(Manager,'capabilities',return_value={'modes':[{'id':'tinker_modal','available':True}]})
        self.capabilities.start();self.addCleanup(self.capabilities.stop)

    def test_ingestion_deduplicates_partial_writes_and_preserves_results(self):
        with tempfile.TemporaryDirectory() as d:
            root=Path(d);store=Store(root/'db');store.create('r',RunConfig(mode='tinker_modal').model_dump(),'abc')
            path=root/'ledger.jsonl'
            line=json.dumps({'kind':'candidate','status':'keep','score':1.25,'agent':'worker-1','description':'measured'})
            path.write_text(line)
            ingest(store,'r',root);self.assertEqual(store.get('r')['lastSequence'],0)
            path.write_text(line+'\n');ingest(store,'r',root);ingest(store,'r',root)
            s=store.get('r');self.assertEqual(s['lastSequence'],1);self.assertEqual(s['value'],1.25)
            self.assertEqual(Store(root/'db').get('r'),s)
            self.assertEqual(store.events('r',1),[])

    def test_api_validation_single_run_stop_and_recovery(self):
        with tempfile.TemporaryDirectory() as d:
            with TestClient(create_app(d,runner=False)) as c:
                self.assertEqual(c.post('/api/runs',json={'mode':'tinker_modal','rounds':99}).status_code,422)
                self.assertEqual(c.post('/api/runs',json={'mode':'tinker_modal'},headers={'Origin':'https://external.example'}).status_code,403)
                r=c.post('/api/runs',json={'mode':'tinker_modal'});self.assertEqual(r.status_code,201);rid=r.json()['runId']
                self.assertEqual(c.post('/api/runs',json={'mode':'tinker_modal'}).status_code,409)
                self.assertEqual(c.get(f'/api/runs/{rid}/artifacts/not-allowed').status_code,404)
                self.assertEqual(c.get('/api/runs/missing').status_code,404)
                self.assertEqual(c.post(f'/api/runs/{rid}/stop').json()['status'],'stopping')
            with TestClient(create_app(d,runner=False)) as c:
                s=c.get(f'/api/runs/{rid}').json();self.assertEqual(s['status'],'interrupted')
                events=c.get(f'/api/runs/{rid}/events.json').json()
                self.assertEqual([e['sequence'] for e in events],list(range(1,len(events)+1)))
                self.assertEqual(c.get(f'/api/runs/{rid}/export').json()['snapshot'],s)

    def test_secret_redaction_and_artifact_containment(self):
        with tempfile.TemporaryDirectory() as d:
            m=Manager(d,runner=False);m.secrets=['private-secret-value'];r=m.start(RunConfig(mode='tinker_modal'));rid=r['runId']
            (m.out(rid)/'worker.log').write_text('private-secret-value')
            self.assertEqual(m.redact((m.out(rid)/'worker.log').read_text()),'[REDACTED]')
            self.assertEqual(m.artifacts(rid)[0]['id'],'worker.log')
            m.close()

    def test_fake_modes_are_rejected(self):
        with tempfile.TemporaryDirectory() as d, TestClient(create_app(d,runner=False)) as c:
            for mode in ['offline','tinker_protocol','tinker_cpu']:
                self.assertEqual(c.post('/api/runs',json={'mode':mode}).status_code,422)
            store=Store(Path(d)/'runs.sqlite3')
            store.create('retired',{'mode':'offline','rounds':1},'abc')
            store.create('removed-sample',{'mode':'recorded','task':'hadamard19','rounds':4},'')
            self.assertEqual(c.get('/api/runs/removed-sample').status_code,410)
            self.assertEqual(c.get('/api/runs/retired').status_code,410)
            self.assertEqual(c.get('/api/runs').json(),[])

    def test_cpu_grader_returns_measured_loss(self):
        from testcases import sandbox
        if not sandbox.docker_available():self.skipTest('Docker unavailable')
        task=Path(__file__).resolve().parents[2]/'testcases'/'hadamard19'
        result=sandbox.evaluate_task(task,(task/'construct.py').read_text())
        self.assertEqual(result['status'],'ok',result)
        self.assertAlmostEqual(result['loss'],.058514,places=5)

if __name__=='__main__':unittest.main()
