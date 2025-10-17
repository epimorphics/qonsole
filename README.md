# Qonsole - a simple console for running SPARQL queries

[![Qonsole Integration Tests](https://github.com/epimorphics/qonsole/actions/workflows/integration-tests.yml/badge.svg)](https://github.com/epimorphics/qonsole/actions/workflows/integration-tests.yml)

**_Warning: While this project has not yet been replaced and should continue to
receive required bug fixes and any minor feature requests, future development of
qonsole will be done as part of the
[qonsole-sfc](https://github.com/epimorphics/qonsole-sfc) project.
(2022-07-04)_**

For more information about this project visit [the
wiki](https://github.com/epimorphics/qonsole/wiki).

---

## Make targets at a glance

| Target            | What it does                                                |
|-------------------|-------------------------------------------------------------|
| `make assets`     | Install Node/Bower deps and build static assets via grunt   |
| `make bundles`    | Install Ruby gems via Bundler                               |
| `make install`    | Install Node and Bower dependencies only                    |
| `make server`     | Start the local Rack server (serves demo + `/sparql` proxy) |
| `make tests`      | Run the integration tests end-to-end (starts server)        |

Common env vars:

- `PORT` — Port for the local server (default 8080)
- `QONSOLE_TEST_PAGE` — Override test target page URL
- `SPARQL_ENDPOINT` — Upstream endpoint for the `/sparql` proxy
- `PROXY_DEBUG=1` — Enable minimal proxy request/response logging

Examples:

```sh
# Serve on a different port
PORT=9090 make server

# Point the proxy at a different SPARQL endpoint
SPARQL_ENDPOINT="https://example.org/sparql" make server

# Run tests against a custom page (e.g. non-default port)
QONSOLE_TEST_PAGE="http://localhost:9090/demo-vertical.html" make tests
```

## Developer Notes

Optional: If you plan to run `grunt` directly, you can install Grunt's
command-line interface (CLI) globally. If you use the Make targets
documented below (`make assets`), a local Grunt will be used via npm,
so a global install isn't required.

```sh
npm install -g grunt-cli
```

This will put the `grunt` command in your system path, allowing it to be run
from any directory.[^1]

>[!Note]
> Installing grunt-cli does not install the Grunt task runner! The job
> of the Grunt CLI is simple: run the version of Grunt which has been installed
> next to a Gruntfile. This allows multiple versions of Grunt to be installed on
> the same machine simultaneously.

[^1]: You may need to use sudo (for OSX, *nix, BSD etc) or run your
command shell as Administrator (for Windows) to do this.

## 🧪 Testing

This repository includes two types of UI tests under `test/`:

- `test/integration/` — Minitest + Capybara tests that drive the demo
  page in a real browser.
- `test/selenium/` — Legacy Selenium IDE test suite (`.test` HTML files)
  runnable with the Selenium IDE browser extension.

For more detail on the test structure, expectations, and tips, see
`test/README.md`.

### What gets tested

- The demo UI loads and renders key elements.
- Running the default query renders a results table with data.
- Describe queries default to text output (no error banner is displayed).

### Prerequisites

- Ruby and Bundler
- Google Chrome (for headless browser tests)
- Node and npm (for `make assets`)

### 1) Install dependencies

```sh
make bundles
```

### 2) Build assets (first run or after changes)

The demo page relies on built static assets (bower vendored files and
copies via grunt).
Build them with the Makefile target:

```sh
make assets
```

Note: The CI workflow also runs `make assets` before executing the
integration tests, so mirroring this step locally reduces surprises.

### 3) Run the integration tests

You can run the end-to-end flow with a single task that starts the server,
runs the test, then shuts the server down:

```sh
make tests
```

If you already have the site served elsewhere, you can point the test at a
custom URL:

```sh
QONSOLE_TEST_PAGE="http://localhost:8080/demo-vertical.html" make tests
```

> [!TIP]
> The integration tests now use headless Chrome via Selenium
> (`:selenium_chrome_headless`) for better compatibility on modern systems.

## Local server and SPARQL proxy (config.ru)

We include a tiny Rack application (`config.ru`) used for local development and
testing. It serves the static demo files and exposes a same-origin SPARQL proxy
at `/sparql` to avoid CORS when issuing queries from the demo page.

Key behaviors and environment variables:

- SPARQL_ENDPOINT: URL of the upstream SPARQL HTTP endpoint. Default:
  `https://environment.data.gov.uk/sparql/bwq/query`.
- RACK_ENV: When set to `development`, the proxy prefers POST for requests to
  improve compatibility during local runs. Otherwise, it uses GET unless the
  encoded URL would be too long, in which case it falls back to POST.
- PROXY_ALWAYS_POST: Set to `1` to force the proxy to use POST regardless of
  environment.
- PROXY_INSECURE: Set to `1` to disable TLS verification (for local use only).
  Prefer configuring a proper trust store for real deployments.
- PROXY_CA_FILE / PROXY_CA_PATH: Optional CA bundle file/directory to extend
  the system trust for TLS verification.
- PROXY_DEBUG: Set to `1` to enable minimal request/response logging from the
  proxy to STDOUT.

The demo page (`demo-vertical.html`) adds a "local proxy" endpoint option when
served from `localhost` so you can select `/sparql` in the UI. You can run the
server with:

```sh
make server
```

Or:

```sh
bundle exec rake serve
```

Visit <http://localhost:8080/demo-vertical.html>

Alternatively, you can serve the directory with any static server.

### Running the Selenium IDE suite (optional)

The legacy Selenium IDE tests live in `test/selenium/` and are referenced by `test/selenium/qonsole.suite`.

1. Install the Selenium IDE browser extension.
2. Open the `qonsole.suite` file in Selenium IDE.
3. Ensure the base URL points to a hosted instance (e.g. `http://localhost:8080/`).
4. Run the suite.
