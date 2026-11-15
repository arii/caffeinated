from copy import deepcopy
from pathlib import Path
import tempfile
import os
from unittest.mock import patch
import unittest
from fastapi.testclient import TestClient
from backend.app import create_app
from backend.replay import build_recording, RecordingCatalog

ROOT=Path(__file__).resolve().parents[2]
class ReplayTests(unittest.TestCase):
    def setUp(self):
        environment=patch.dict(os.environ,{'LAB_RECORDINGS_ZIP':str(ROOT/'data/replays/swarm-viewer-sample-runs.zip')})
        environment.start();self.addCleanup(environment.stop)

    def test_all_four_archive_recordings_and_no_lookahead(self):
        c=RecordingCatalog(ROOT/'data/replays/swarm-viewer-sample-runs.zip')
        self.assertEqual(len(c.list()),4)
        for manifest in c.list():
            names=[a['display_name'] for a in manifest['agents'] if a['type'] not in {'baseline','world'}]
            self.assertEqual(len(names),len(set(names)))
            for name in (a['display_name'] for a in manifest['agents'] if a['type'] not in {'baseline','world'} and not a.get('named')):self.assertRegex(name,r'^[BCP][1-9][0-9]*$')
            self.assertTrue(all(a.get('original_display_name') for a in manifest['agents']))
        for m in c.list():
            b=c.get(m['id']);frames=b['frames'];initial=frames[0]['snapshot'];final=frames[-1]['snapshot']
            self.assertEqual(initial['results'],[]);self.assertEqual(initial['findings'],[])
            self.assertTrue(all(a['boredom'] is None for a in initial['agents']))
            self.assertEqual(final['status'],'completed')
            self.assertEqual([f['tick'] for f in frames[1:]],[e['tick'] for e in b['events']])
            for frame in frames:
                self.assertTrue(all(r['tick']<=frame['tick'] for r in frame['snapshot']['results']))
                for a in frame['snapshot']['agents']:
                    if 'boredomDetail' in a:self.assertLessEqual(a['boredomDetail']['measured_tick'],frame['tick'])
            # Reconstruct an earlier prefix from scratch: must match a seek frame.
            count=min(32,len(b['events'])-1)
            prefix_manifest=deepcopy(c.manifests[m['id']]);prefix_manifest['status']='running'
            prefix=build_recording(prefix_manifest,b['events'][:count],b['entities'])['frames'][-1]['snapshot']
            expected=frames[count]['snapshot']
            for key in ['results','findings','value','reference','boredom','regime']:
                self.assertEqual(prefix[key],expected[key],(m['title'],key))
    def test_confirmed_best_does_not_use_final_entity_verdict_early(self):
        m={'schema':'swarm-viewer/v1','run_id':'r','title':'test','metric':{'name':'loss','unit':'','direction':'minimize'},'swarm':'autoresearch','agents':[{'agent_id':'worker','label':'Worker','type':'worker'}]}
        def event(tick,kind,payload,refs={}):return {'run_id':'r','event_id':str(tick),'tick':tick,'round':1,'type':kind,'payload':payload,'refs':refs,'agent_id':'worker'}
        events=[event(0,'experiment.finished',{'metric_value':1,'status':'keep'},{'experiment_id':'base'}),event(1,'experiment.finished',{'metric_value':.5,'status':'keep'},{'experiment_id':'candidate'}),event(2,'verdict.issued',{'accepted':True},{'experiment_id':'candidate'})]
        entities={'experiments':[{'id':'base','kind':'baseline'},{'id':'candidate','kind':'candidate','verdict':{'accepted':True}}]}
        frames=build_recording(m,events,entities)['frames']
        self.assertEqual(frames[2]['snapshot']['value'],1)
        self.assertEqual(frames[3]['snapshot']['value'],.5)
        self.assertEqual(frames[1]['snapshot']['results'][0]['value'],1)
    def test_ignobel_sample_is_a_swarm_task_recording_with_real_sources(self):
        c=RecordingCatalog(ROOT/'data/replays/swarm-viewer-sample-runs.zip')
        self.assertEqual({m['swarm'] for m in c.list()},{'autoresearch'})
        b=next(c.get(m['id']) for m in c.list() if m['title'].startswith('Ig Nobel'))
        self.assertIn('ignobel',b['manifest']['provenance']['command'])
        self.assertEqual(b['frames'][-1]['snapshot']['metric']['direction'],'minimize')
        self.assertTrue(b['manifest']['sample']);self.assertEqual(b['manifest']['description'],'Recorded research · no live model calls')
        urls=[s['url'] for s in b['entities']['sources']]
        self.assertTrue(urls);self.assertTrue(all(u.startswith('https://') and 'example.org' not in u for u in urls))
    def test_backend_team_can_select_a_bundle_without_replacing_sample_data(self):
        with tempfile.TemporaryDirectory() as d:
            archive=Path(d)/'backend-export.zip'
            archive.write_bytes((ROOT/'data/replays/swarm-viewer-sample-runs.zip').read_bytes())
            with patch.dict(os.environ,{'LAB_RECORDINGS_ZIP':str(archive)}),TestClient(create_app(Path(d)/'state',runner=False)) as c:
                rows=c.get('/api/recordings').json()
                self.assertEqual(len(rows),4)
                self.assertEqual(c.get('/api/recordings/'+rows[0]['id']).status_code,200)
                self.assertFalse(c.get('/api/health').json()['executionEnabled'])

    def test_read_only_api_serves_recordings_with_cache_and_rejects_execution(self):
        with tempfile.TemporaryDirectory() as d,TestClient(create_app(d,runner=False)) as c:
            rows=c.get('/api/recordings').json();self.assertEqual(len(rows),4)
            path='/api/recordings/'+rows[0]['id'];r=c.get(path)
            self.assertEqual(r.status_code,200);self.assertIn('frames',r.json())
            self.assertEqual(c.get(path,headers={'If-None-Match':r.headers['etag']}).status_code,304)
            self.assertEqual(c.get('/api/recordings/missing').status_code,404)
            self.assertEqual(c.post('/api/runs',json={'mode':'tinker_modal'}).status_code,409)
            self.assertFalse(c.get('/api/health').json()['executionEnabled'])

if __name__=='__main__':unittest.main()
