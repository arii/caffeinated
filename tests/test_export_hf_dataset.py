import gzip
import hashlib
import io
import json
import tempfile
import unittest
import zipfile
from pathlib import Path

from scripts import export_hf_dataset


class ExportHfDatasetTest(unittest.TestCase):
    def test_export_writes_tables_card_and_checksums(self):
        with tempfile.TemporaryDirectory() as tmp:
            out = Path(tmp) / "ds"
            counts = export_hf_dataset.export(out, "cc-by-4.0")
            self.assertEqual(counts["igjudge"], 60)
            self.assertEqual(counts["confirmatory_heldout"], 18)
            for name, rows in counts.items():
                lines = (out / "data" / f"{name}.jsonl").read_text().splitlines()
                self.assertEqual(len(lines), rows)
                json.loads(lines[0])
            card = (out / "README.md").read_text()
            self.assertIn("license: cc-by-4.0", card)
            self.assertIn("config_name: candidates", card)
            sums = (out / "checksums.sha256").read_text().splitlines()
            digest, name = sums[0].split("  ", 1)
            self.assertEqual(hashlib.sha256((out / name).read_bytes()).hexdigest(), digest)
            self.assertTrue((out / "raw/experiments/real-runs/hadamard19/results.tsv").exists())

    def test_secret_pattern_matches_api_keys(self):
        self.assertTrue(export_hf_dataset.SECRET.search(b"key=past_sk_abcdefgh123"))
        self.assertFalse(export_hf_dataset.SECRET.search(b"sk-short"))

    def test_secret_scan_reads_zip_and_gzip_entries(self):
        buffer = io.BytesIO()
        with zipfile.ZipFile(buffer, "w", zipfile.ZIP_DEFLATED) as archive:
            archive.writestr("log.jsonl.gz", gzip.compress(b"key=past_sk_abcdefgh123" * 50))
        with tempfile.TemporaryDirectory() as tmp:
            path = Path(tmp) / "replay.zip"
            path.write_bytes(buffer.getvalue())
            self.assertTrue(export_hf_dataset.has_secret(path))


if __name__ == "__main__":
    unittest.main()
