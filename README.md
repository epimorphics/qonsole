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

## Developer Notes

In order to get started, you'll want to install Grunt's command line interface
(CLI) globally.[^1]

```sh
npm install -g grunt-cli
```

This will put the grunt command in your system path, allowing it to be run from
any directory.

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
- Node is only needed for general development, not for running the Ruby
  integration test.

### 1) Install dependencies

```sh
bundle install
```

### 2) Serve the project locally

We ship a tiny Rack app and tasks to serve the static demo locally:

```sh
# From the project root
bundle exec rake serve
# Visit http://localhost:8080/demo-vertical.html
```

Alternatively, you can serve the directory with any static server.

### 3) Run the integration test

You can run the end-to-end flow with a single task that starts the server,
runs the test, then shuts the server down:

```sh
bundle exec rake test_integration
```

If you already have the site served elsewhere, you can point the test at a
custom URL:

```sh
QONSOLE_TEST_PAGE="http://localhost:8080/demo-vertical.html" bundle exec ruby test/integration/qonsole-test.rb
```

> [!TIP]
> The integration tests now use headless Chrome via Selenium
> (`:selenium_chrome_headless`) for better compatibility on modern systems.

### Running the Selenium IDE suite (optional)

The legacy Selenium IDE tests live in `test/selenium/` and are referenced by `test/selenium/qonsole.suite`.

1. Install the Selenium IDE browser extension.
2. Open the `qonsole.suite` file in Selenium IDE.
3. Ensure the base URL points to a hosted instance (e.g. `http://localhost:8080/`).
4. Run the suite.
