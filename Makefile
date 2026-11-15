PYTHON ?= python3.12
UV ?= uv

.PHONY: setup requirements check lint format format-check deadcode deps test

setup:
	PYTHON="$(PYTHON)" UV="$(UV)" sh scripts/setup.sh

requirements:
	$(UV) export --locked --extra tinker --no-dev --no-emit-project --no-hashes --emit-index-url --format requirements-txt -o requirements.txt
	$(UV) export --locked --all-extras --no-emit-project --no-hashes --emit-index-url --format requirements-txt -o requirements-dev.txt

check: lint format-check deadcode deps test

lint:
	$(PYTHON) -m ruff check .

format:
	$(PYTHON) -m ruff check --select I --fix .
	$(PYTHON) -m ruff format .

format-check:
	$(PYTHON) -m ruff format --check .

deadcode:
	$(PYTHON) -m vulture

deps:
	$(PYTHON) -m deptry .

test:
	EXA=off MEMORY_BACKEND=local $(PYTHON) -m unittest discover -s tests
	EXA=off MEMORY_BACKEND=local $(PYTHON) -m unittest discover -s boredom_meter/tests
