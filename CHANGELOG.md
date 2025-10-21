# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

* Automated integration tests in CI, including browser setup and failure
  artefact retention.
* Local development server exposing a same-origin SPARQL proxy with configurable
  TLS and request method behaviour.
* Make targets to install/build assets, run a server, execute tests, and capture
  dependency audit reports.
* Headless browser integration tests using Capybara, with an option to target a
  custom page URL and prefer a local proxy.
* CSS/editor enhancements, including code-folding visuals and panel/result
  layout refinements.
* Accessibility improvements with better labelling on selects.

### Changed

* Demo page now references minified/relative assets and uses secure external
  endpoints and links.
* Front-end build pipeline updated to copy/minify assets and prefer minified
  vendor scripts/styles.
* Editor initialisation enables automatic refresh to avoid stale rendering.
* Test harness starts/stops a local server automatically and relies on a modern
  WebDriver stack.
* Documentation reworked to describe the local server, proxy usage, CI parity,
  and end-to-end testing flow.

### Fixed

* Buttons explicitly typed to avoid accidental form submission.
* Integration tests made more robust with explicit waits and result assertions.

### Security

* Dependency upgrades across build, lint, and test tooling to address known
  vulnerabilities.
* Audit task added; reports are timestamped and ignored from version control by
  default.

---

## Version 0.3.0

* Fix bug with handling of comments in prefix section of query
* Add eslint profile and ensure that all of the code meets airbnb-es5

## Version 0.1.3

* Use bower and grunt to install dependencies in Qonsole project

## Version 0.1.2

* added bower file to enable installation of Qonsole using bower

## Version 0.1.1

* Fix for issue #11 adding empty prefix
* Fix for issue #12 adding only use active prefixes to abreviate query results in table view
* Fix for issue #13 clicable URIs in table view
* Fix for issue #14 XML rendering broken

## Version 0.1.0 June 2014

* Fix off-by-one error in table counts ([issue #10](https://github.com/epimorphics/qonsole/issues/10))
* Fix ambiguous warning in JQuery DataTables when no matching results ([issue #6](https://github.com/epimorphics/qonsole/issues/6))
* Disable submit button while a query is ongoing ([issue #9](https://github.com/epimorphics/qonsole/issues/9)
