import json
import os
from pathlib import Path
import tempfile
import unittest
from unittest.mock import patch
import zipfile

from fastapi.testclient import TestClient

from backend.app import create_app
from backend.replay import RecordingCatalog


class DirectoryReplayTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.root = Path(self.temp.name)

    def run_dir(self, relative='viewer/run-1', status='running'):
        path = self.root / relative
        path.mkdir(parents=True)
        manifest = {'schema': 'swarm-viewer/v1', 'run_id': path.name,
                    'title': path.name, 'status': status, 'agents': [],
                    'metric': {'name': 'loss', 'unit': '', 'direction': 'minimize'}}
        (path / 'manifest.json').write_text(json.dumps(manifest))
        event = {'run_id': path.name, 'event_id': 'event-0', 'tick': 0,
                 'type': 'round.started', 'payload': {}, 'refs': {}}
        (path / 'events.ndjson').write_text(json.dumps(event) + '\n')
        return path

    def test_real_layout_parent_scan_cache_updates_and_new_runs(self):
        path = self.run_dir('outs/one/viewer/run-1')
        catalog = RecordingCatalog(self.root / 'absent.zip', [self.root])
        first = catalog.get('run-1')
        self.assertIs(first, catalog.get('run-1'))
        (path / 'events.ndjson').write_text((path / 'events.ndjson').read_text() + '{')
        updated = catalog.get('run-1')
        self.assertNotEqual(first['manifest']['contentVersion'], updated['manifest']['contentVersion'])
        self.assertEqual(len(updated['events']), 1)
        self.run_dir('outs/two/viewer/run-2')
        self.assertEqual(len(catalog.list()), 2)
        (path / 'manifest.json').unlink()
        self.assertEqual(len(catalog.list()), 1)

    def test_multiple_dirs_zip_merge_and_directory_wins(self):
        path = self.run_dir(status='finished')
        archive = self.root / 'sample.zip'
        with zipfile.ZipFile(archive, 'w') as bundle:
            for file in path.iterdir():
                bundle.write(file, 'runs/run-1/' + file.name)
        self.run_dir('second/runs/run-2')
        catalog = RecordingCatalog(archive, [self.root / 'viewer', self.root / 'second'])
        self.assertEqual(len(catalog.list()), 2)
        self.assertIn('-v3', catalog.get('run-1')['manifest']['contentVersion'])
        self.assertEqual(catalog.get('run-1')['frames'][-1]['snapshot']['status'], 'completed')

    def test_live_partial_entities_bad_manifest_and_api_refresh(self):
        path = self.run_dir()
        (path / 'entities').mkdir()
        (path / 'entities/experiments.json').write_text('[')
        bad = self.run_dir('viewer/bad')
        (bad / 'manifest.json').write_text('{')
        env = {'LAB_RECORDINGS_ZIP': str(self.root / 'missing.zip'),
               'LAB_RECORDINGS_DIRS': str(self.root / 'viewer')}
        with patch.dict(os.environ, env), TestClient(create_app(self.root / 'state', runner=False)) as client:
            rows = client.get('/api/recordings').json()
            self.assertEqual(len(rows), 1)
            data = client.get('/api/recordings/run-1').json()
            self.assertTrue(data['manifest']['live'])
            self.assertEqual(data['frames'][-1]['snapshot']['status'], 'running')
            self.assertLess(data['frames'][-1]['snapshot']['progress'], 1)
            self.run_dir('viewer/run-2')
            self.assertEqual(len(client.get('/api/recordings').json()), 2)
            self.assertEqual(client.get('/api/recordings/bad').status_code, 404)

    def test_explicit_directory_order_overrides_default_duplicate_ids(self):
        default = self.run_dir('experiments/default/viewer/run-1')
        first = self.run_dir('z-explicit/run-1')
        last = self.run_dir('a-explicit/run-1')
        for path in (default, first, last):
            manifest = json.loads((path / 'manifest.json').read_text())
            manifest['title'] = str(path)
            (path / 'manifest.json').write_text(json.dumps(manifest))
        catalog = RecordingCatalog(self.root / 'none', [first.parent, last.parent], repo_root=self.root)
        self.assertEqual(catalog.get('run-1')['manifest']['title'], str(last))
        catalog = RecordingCatalog(self.root / 'none', [last.parent, default.parent, first.parent], repo_root=self.root)
        self.assertEqual(catalog.get('run-1')['manifest']['title'], str(first))
        catalog = RecordingCatalog(self.root / 'none', [first.parent, default.parent], repo_root=self.root)
        self.assertEqual(catalog.get('run-1')['manifest']['title'], str(default))

    def test_path_safety_and_size_cap(self):
        safe = self.run_dir()
        self.run_dir('viewer/bad_id')
        mismatch = self.run_dir('viewer/mismatch')
        (mismatch / 'manifest.json').write_text((safe / 'manifest.json').read_text())
        (self.root / 'viewer/escape').symlink_to(safe, target_is_directory=True)
        linked = self.run_dir('viewer/linked')
        (linked / 'outside.json').symlink_to(safe / 'manifest.json')
        large = self.run_dir('viewer/large')
        with (large / 'huge').open('wb') as stream:
            stream.truncate(50_000_001)
        catalog = RecordingCatalog(self.root / 'none', [self.root / 'viewer'])
        self.assertEqual([m['id'] for m in catalog.list()], ['run-1'])
        with self.assertRaises(KeyError):
            catalog.get('../run-1')

    def test_empty_catalog_and_empty_live_run(self):
        catalog = RecordingCatalog(self.root / 'none', [self.root / 'viewer'])
        self.assertEqual(catalog.list(), [])
        with self.assertRaises(KeyError):
            catalog.get('absent')
        path = self.run_dir()
        (path / 'events.ndjson').unlink()
        recording = catalog.get('run-1')
        self.assertEqual(recording['events'], [])
        self.assertTrue(recording['manifest']['live'])
        self.assertEqual(len(recording['frames']), 1)
        (path / 'entities').mkdir()
        (path / 'entities/experiments.json').write_text('[null]')
        self.assertEqual(catalog.list(), [])

    def test_default_repo_discovery_new_arm_after_startup_and_provenance(self):
        env = {'LAB_RECORDINGS_ZIP': str(self.root / 'missing.zip'), 'LAB_RECORDINGS_DIRS': ''}
        with patch('backend.app.ROOT', self.root), patch.dict(os.environ, env), TestClient(create_app(self.root / 'state', runner=False)) as client:
            self.assertEqual(client.get('/api/recordings').json(), [])
            path = self.run_dir('.swarm_worktrees/B/conductor/experiments/swarm_B/viewer/run-1')
            manifest = json.loads((path / 'manifest.json').read_text())
            manifest['provenance'] = {'llm': 'a-model', 'command': ['swarm.py', '--llm', 'tinker']}
            (path / 'manifest.json').write_text(json.dumps(manifest))
            rows = client.get('/api/recordings').json()
            self.assertEqual([m['id'] for m in rows], ['run-1'])
            self.assertTrue(rows[0]['live'])
            self.assertFalse(rows[0]['sample'])
            self.assertEqual(rows[0]['description'], 'Live swarm run · tinker model calls')
            manifest.update(status='finished', provenance={'llm': 'fake'})
            (path / 'manifest.json').write_text(json.dumps(manifest))
            self.run_dir('experiments/direct/viewer/run-2')
            self.run_dir('.swarm_worktrees/A/conductor/experiments/swarm_A/viewer/run-3')
            self.assertEqual(len(client.get('/api/recordings').json()), 3)
            self.assertEqual(client.get('/api/recordings/run-1').json()['manifest']['description'], 'Swarm run · fake LLM')
