"""Names vulture reports as unused that are reached dynamically. One reason per entry."""

# ruff: noqa: B018
import http.server

import meter

http.server.BaseHTTPRequestHandler.do_GET  # tests' fake servers: dispatched by name from the HTTP method
http.server.BaseHTTPRequestHandler.do_POST  # tests' fake servers: dispatched by name from the HTTP method
http.server.BaseHTTPRequestHandler.do_PUT  # tests' fake servers: dispatched by name from the HTTP method
http.server.BaseHTTPRequestHandler.do_DELETE  # tests' fake servers: dispatched by name from the HTTP method
http.server.BaseHTTPRequestHandler.log_message  # tests' fake servers: override silences stdlib request logging
meter.REGIMES  # public regime enum of the shared boredom_meter package; no in-repo reader, kept for importers
