# Reproduction image: the swarm, its checks, the Lab viewer and every committed run artifact.
# Base images are pinned by digest; Python and npm packages come from requirements-dev.txt
# (exported from uv.lock) and package-lock.json. See REPRODUCE.md.
FROM node:22.21.1-bookworm-slim@sha256:25b3eb23a00590b7499f2a2ce939322727fcce1b15fdd69754fcd09536a3ae2c AS node
FROM docker:28.5.2-cli@sha256:625d9431a9f54c5a2bc90f24f0e1c3d55b1349fd857dd85035f98c2c9acbdd4d AS docker
FROM ghcr.io/astral-sh/uv:0.9.9@sha256:f6e3549ed287fee0ddde2460a2a74a2d74366f84b04aaa34c1f19fec40da8652 AS uv

FROM python:3.12.12-slim-bookworm@sha256:593bd06efe90efa80dc4eee3948be7c0fde4134606dd40d8dd8dbcade98e669c

RUN apt-get update \
    && apt-get install -y --no-install-recommends ca-certificates git make \
    && rm -rf /var/lib/apt/lists/* \
    && git config --system --add safe.directory '*' \
    && mkdir -p /tmp/caffeinated-sandbox

COPY --from=uv /uv /usr/local/bin/uv
COPY --from=docker /usr/local/bin/docker /usr/local/bin/docker
COPY --from=node /usr/local/bin/node /usr/local/bin/node
COPY --from=node /usr/local/lib/node_modules /usr/local/lib/node_modules
RUN ln -s ../lib/node_modules/npm/bin/npm-cli.js /usr/local/bin/npm \
    && ln -s ../lib/node_modules/npm/bin/npx-cli.js /usr/local/bin/npx

WORKDIR /workspace/caffeinated
ENV UV_PYTHON_DOWNLOADS=never \
    PATH=/workspace/caffeinated/.venv/bin:$PATH \
    PYTHONDONTWRITEBYTECODE=1 \
    TMPDIR=/tmp/caffeinated-sandbox

COPY requirements-dev.txt ./
RUN uv venv --python /usr/local/bin/python3.12 .venv \
    && uv pip install --python .venv/bin/python --no-cache -r requirements-dev.txt \
    && uv pip check --python .venv/bin/python

COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund && npm cache clean --force

COPY . .
RUN mkdir -p "$TMPDIR" \
    && python scripts/verify_results.py > /dev/null

EXPOSE 5175
ENTRYPOINT ["sh", "scripts/docker-entrypoint.sh"]
CMD ["verify"]
