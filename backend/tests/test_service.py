import json
from pathlib import Path
import tempfile
import time
import unittest
from fastapi.testclient import TestClient
from backend.app import create_app, Manager, RunConfig
from backend.store import Store
from backend.ingest import ingest

class ServiceTests(unittest.TestCase):
    def test_ingestion_deduplicates_partial_writes_and_preserves_results(self):
        with tempfile.TemporaryDirectory() as d:
            root=Path(d);store=Store(root/'db');store.create('r',RunConfig(mode='offline').model_dump(),'abc')
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
                self.assertEqual(c.post('/api/runs',json={'mode':'offline','rounds':99}).status_code,422)
                self.assertEqual(c.post('/api/runs',json={'mode':'offline'},headers={'Origin':'https://external.example'}).status_code,403)
                r=c.post('/api/runs',json={'mode':'offline'});self.assertEqual(r.status_code,201);rid=r.json()['runId']
                self.assertEqual(c.post('/api/runs',json={'mode':'offline'}).status_code,409)
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
            m=Manager(d,runner=False);m.secrets=['private-secret-value'];r=m.start(RunConfig(mode='offline'));rid=r['runId']
            (m.out(rid)/'worker.log').write_text('private-secret-value')
            self.assertEqual(m.redact((m.out(rid)/'worker.log').read_text()),'[REDACTED]')
            self.assertEqual(m.artifacts(rid)[0]['id'],'worker.log')
            m.close()

    def test_real_offline_swarm_reaches_terminal_state(self):
        with tempfile.TemporaryDirectory() as d:
            m=Manager(d);r=m.start(RunConfig(mode='offline'));rid=r['runId']
            try:
                until=time.monotonic()+40
                while time.monotonic()<until:
                    s=m.store.get(rid)
                    if s['status'] not in {'queued','starting','running','stopping'}:break
                    time.sleep(.2)
                self.assertEqual(s['status'],'completed',s.get('error'))
                self.assertEqual(len(s['agents']),6);self.assertGreater(len(s['results']),0)
                for a in s['agents']:
                    spectrum=a['boredomSpectrum']
                    self.assertAlmostEqual(spectrum['position']*100,a['boredom'])
                    self.assertRegex(spectrum['color'],r'^#[0-9a-f]{6}$')
                ledger=m.out(rid)/'ledger.jsonl';complete=ledger.read_text();ledger.write_text(complete+'{"partial":')
                ingest(m.store,rid,m.out(rid));ledger.write_text(complete)
                self.assertEqual(s['provenance']['gpu'],'fake');self.assertEqual(s['metric']['unit'],'synthetic')
                before=s['lastSequence'];ingest(m.store,rid,m.out(rid));self.assertEqual(m.store.get(rid)['lastSequence'],before)
            finally:m.close()

if __name__=='__main__':unittest.main()
