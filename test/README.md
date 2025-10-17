# Qonsole Tests

This folder contains automated tests for the Qonsole demo UI.

## Structure

- `integration/` – Ruby integration tests using Minitest + Capybara + Selenium.
- `selenium/` – Legacy Selenium IDE suite (`.test` HTML files) runnable via
  the Selenium IDE browser extension.

## Integration tests

The integration tests drive `demo-vertical.html` in a headless Chrome browser.
They use Capybara's Selenium driver and expect the demo page to be served
locally (by default at `http://localhost:8080/demo-vertical.html`). You can
change the target with the `QONSOLE_TEST_PAGE` environment variable.

### Setup

- Serve the repository root (we provide a Rack server and rake task):
  - `bundle exec rake serve` (visit `http://localhost:8080/demo-vertical.html`)
- Or run the end-to-end task that starts a server and runs tests:
  - `bundle exec rake test_integration`

### Tests and expectations

- `integration/qonsole-test.rb`
  - "has a title"
    - Navigates to the demo page and asserts an `<h1>` is present. This
      verifies the page renders the header area correctly.
  - "runs the default query"
    - Navigates to the demo page.
    - Asserts the results container initially only contains the header
      (`#results h2`).
    - Clicks the "perform query" button.
    - Waits (up to 15s) for any results content under `#results` (e.g. a table,
      `pre`, etc.) to appear, verifying that a query was executed and results
      were rendered.
  - "defaults to text output when running a describe query"
    - Loads the page and injects JavaScript to set a DESCRIBE query via the
      application module (`js/app/qonsole`).
    - Clicks "perform query".
    - Asserts that no error banner (`#results .text-danger`) is displayed,
      which implies the request succeeded and the default output for DESCRIBE
      is text.

## Selenium IDE tests (optional)

The `selenium/` directory contains an HTML suite (`qonsole.suite`) and a number
of `.test` case files recorded for Selenium IDE. To run them:

1. Install the Selenium IDE browser extension.
2. Open `test/selenium/qonsole.suite` in Selenium IDE.
3. Set the base URL to the location where you are serving this repo (e.g.
   `http://localhost:8080/`).
4. Run the suite.

## Notes

- The integration tests use the `:selenium_chrome_headless` driver.
- You can override the target page with `QONSOLE_TEST_PAGE`:

  ```bash
  QONSOLE_TEST_PAGE="http://localhost:8080/demo-vertical.html" \
    bundle exec ruby test/integration/qonsole-test.rb
  ```

- The Rack server and tasks are defined in `config.ru` and `Rakefile`.
