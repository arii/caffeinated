import argparse
import os

import uvicorn


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--data", default=os.environ.get("VIEWER_DATA", "lab/data/runs"))
    parser.add_argument("--port", type=int, default=8000)
    args = parser.parse_args()
    os.environ["VIEWER_DATA"] = args.data
    uvicorn.run("viewer.app:app", host="127.0.0.1", port=args.port)


if __name__ == "__main__":
    main()
