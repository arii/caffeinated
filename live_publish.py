"""Coalesced, best-effort publication after source logs are closed."""

import json
import sys
import threading
import time
from datetime import datetime, timedelta, timezone
from pathlib import Path

_listeners = {}
_listeners_lock = threading.Lock()
_log_lock = threading.Lock()


def append_records(path, records, timestamp_field="ts"):
    path = Path(path)
    path.parent.mkdir(parents=True, exist_ok=True)
    with _log_lock, path.open("a", encoding="utf-8") as stream:
        for record in records:
            record[timestamp_field] = (
                datetime.now(timezone.utc).isoformat(timespec="microseconds").replace("+00:00", "Z")
            )
            stream.write(json.dumps(record, sort_keys=True, ensure_ascii=False) + "\n")
    changed(path)


def watermark():
    with _log_lock:
        return (
            (datetime.now(timezone.utc) - timedelta(seconds=2))
            .isoformat(timespec="microseconds")
            .replace("+00:00", "Z")
        )


def watch(directory, callback):
    with _listeners_lock:
        _listeners[Path(directory).resolve()] = callback


def unwatch(directory):
    with _listeners_lock:
        _listeners.pop(Path(directory).resolve(), None)


def changed(path):
    with _listeners_lock:
        callback = _listeners.get(Path(path).resolve().parent)
    if callback:
        callback()


class Publisher:
    def __init__(self, callback, interval=3.0, settle=0.0, heartbeat=None, on_heartbeat=None):
        self.callback = callback
        self.heartbeat = heartbeat
        self.on_heartbeat = on_heartbeat if heartbeat else None
        self.last_beat = time.monotonic()
        self.interval = interval
        self.condition = threading.Condition()
        self.publish_lock = threading.Lock()
        self.dirty = False
        self.closed = False
        self.last = float("-inf")
        self.settle = settle
        self.settle_until = float("-inf")
        self.errors = []
        self.thread = threading.Thread(target=self._work, daemon=True)
        self.thread.start()

    def request(self):
        with self.condition:
            if not self.closed:
                self.dirty = True
                self.settle_until = time.monotonic() + self.settle
                self.condition.notify()

    def _call(self, **kwargs):
        try:
            self.callback(**kwargs)
        except Exception as error:
            # Keep publishing on later triggers, but never hide the failure.
            self.errors.append(f"{type(error).__name__}: {error}")
            print(
                f"live publish failed: {type(error).__name__}: {error}", file=sys.stderr, flush=True
            )
        finally:
            self.last = self.last_beat = time.monotonic()

    def _beat(self):
        with self.publish_lock:
            try:
                self.on_heartbeat()
            except Exception:
                pass
            finally:
                self.last_beat = time.monotonic()

    def _idle_wait(self):
        """Wait for work; True when a heartbeat is due instead."""
        while not self.closed and not self.dirty:
            if self.on_heartbeat is None:
                self.condition.wait()
                continue
            remaining = self.last_beat + self.heartbeat - time.monotonic()
            if remaining <= 0:
                return True
            self.condition.wait(remaining)
        return False

    def _work(self):
        while True:
            with self.condition:
                beat = self._idle_wait()
                if self.closed:
                    return
                if not beat:
                    delay = self.last + self.interval - time.monotonic()
                    if delay > 0:
                        self.condition.wait(delay)
                        continue
            if beat:
                self._beat()
                continue
            with self.publish_lock:
                with self.condition:
                    if self.closed or not self.dirty:
                        continue
                    if self.last + self.interval > time.monotonic():
                        continue
                    self.dirty = False
                self._call()
                with self.condition:
                    if time.monotonic() < self.settle_until:
                        self.dirty = True

    def flush(self, **kwargs):
        with self.publish_lock:
            with self.condition:
                self.dirty = False
            self._call(**kwargs)

    def close(self):
        with self.condition:
            self.closed = True
            self.condition.notify()
        self.thread.join()
