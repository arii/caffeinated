"""Coalesced, best-effort publication after source logs are closed."""

import threading
import time
from pathlib import Path

_listeners = {}
_listeners_lock = threading.Lock()


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
    def __init__(self, callback, interval=3.0):
        self.callback = callback
        self.interval = interval
        self.condition = threading.Condition()
        self.publish_lock = threading.Lock()
        self.dirty = False
        self.closed = False
        self.last = float("-inf")
        self.thread = threading.Thread(target=self._work, daemon=True)
        self.thread.start()

    def request(self):
        with self.condition:
            if not self.closed:
                self.dirty = True
                self.condition.notify()

    def _call(self, **kwargs):
        try:
            self.callback(**kwargs)
        except Exception:
            pass
        finally:
            self.last = time.monotonic()

    def _work(self):
        while True:
            with self.condition:
                while not self.closed and not self.dirty:
                    self.condition.wait()
                if self.closed:
                    return
                delay = self.last + self.interval - time.monotonic()
                if delay > 0:
                    self.condition.wait(delay)
                    continue
            with self.publish_lock:
                with self.condition:
                    if self.closed or not self.dirty:
                        continue
                    if self.last + self.interval > time.monotonic():
                        continue
                    self.dirty = False
                self._call()

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
