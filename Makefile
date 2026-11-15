PYTHON ?= python3.12
UV ?= uv

.PHONY: setup requirements

setup:
	PYTHON="$(PYTHON)" UV="$(UV)" sh scripts/setup.sh

requirements:
	$(UV) export --locked --extra tinker --no-dev --no-emit-project --no-hashes --format requirements-txt -o requirements.txt
	$(UV) export --locked --all-extras --no-emit-project --no-hashes --format requirements-txt -o requirements-dev.txt
