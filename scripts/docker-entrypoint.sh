#!/bin/sh
# Entry point of the reproduction image (see REPRODUCE.md). The first argument picks a mode;
# anything else runs as a command.
set -eu

sandbox_image=caffeinated-testcases:py311-v2

need_docker() {
    if ! docker info > /dev/null 2>&1; then
        echo "error: no Docker daemon. Mount the host socket and the sandbox directory:" >&2
        echo "  -v /var/run/docker.sock:/var/run/docker.sock -v $TMPDIR:$TMPDIR" >&2
        exit 2
    fi
    if ! docker image inspect "$sandbox_image" > /dev/null 2>&1; then
        echo "building sandbox image $sandbox_image" >&2
        docker build -q -t "$sandbox_image" -f testcases/Dockerfile testcases > /dev/null
    fi
}

mode=${1:-verify}
[ "$#" -gt 0 ] && shift
case "$mode" in
    verify)
        exec python scripts/verify_results.py "$@" ;;
    regrade)
        need_docker
        exec python scripts/verify_results.py --regrade "$@" ;;
    check)
        need_docker
        make check PYTHON=python
        exec python -m unittest discover -s backend/tests ;;
    test-js)
        npm test
        exec npm run build ;;
    lab)
        python -m uvicorn backend.app:create_app --factory --host 127.0.0.1 --port 8765 &
        exec node node_modules/vite/bin/vite.js --host 0.0.0.0 ;;
    swarm)
        need_docker
        exec python swarm.py "$@" ;;
    export-dataset)
        exec python scripts/export_hf_dataset.py "$@" ;;
    *)
        exec "$mode" "$@" ;;
esac
