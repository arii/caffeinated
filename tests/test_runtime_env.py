import tempfile
import unittest
from pathlib import Path

from runtime_env import load_local_env


class RuntimeEnvTests(unittest.TestCase):
    def load(self, content, env=None):
        target = {} if env is None else env
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory) / ".env"
            path.write_text(content)
            load_local_env(path, target)
        return target

    def test_loads_assignments_quotes_exports_and_comments(self):
        self.assertEqual(
            self.load(
                '# ignored\nKEY=abc=def\nexport MODEL="model #1" # note\nEMPTY=\nLABEL=two words # note\n'
            ),
            {"KEY": "abc=def", "MODEL": "model #1", "EMPTY": "", "LABEL": "two words"},
        )

    def test_explicit_environment_wins_including_empty_values(self):
        self.assertEqual(
            self.load("KEY=file\nMODEL=file\n", {"KEY": "shell", "MODEL": ""}),
            {"KEY": "shell", "MODEL": ""},
        )

    def test_missing_file_is_optional(self):
        target = {}
        with tempfile.TemporaryDirectory() as directory:
            load_local_env(Path(directory) / "absent", target)
        self.assertEqual(target, {})

    def test_shell_expressions_remain_literal(self):
        self.assertEqual(
            self.load("KEY=$(do-not-execute)\nOTHER=${KEY}\n"),
            {"KEY": "$(do-not-execute)", "OTHER": "${KEY}"},
        )

    def test_parse_errors_do_not_disclose_values(self):
        for content in ["BAD-KEY=secret-sentinel", 'KEY="secret-sentinel']:
            with self.subTest(content=content), self.assertRaises(ValueError) as caught:
                self.load(content)
            self.assertNotIn("secret-sentinel", str(caught.exception))

    def test_explicit_path_does_not_search_parent_directories(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            (root / ".env").write_text("KEY=parent")
            (root / "child").mkdir()
            target = {}
            load_local_env(root / "child" / ".env", target)
            self.assertEqual(target, {})
