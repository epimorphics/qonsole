# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

---

## [2.0.0] - 2026-05-20

Complete rewrite as a Vue 3 SFC compiled to a native Web Component. See the
[migration guide](#migrating-from-v1-to-v2) below for upgrade instructions.

### Added

- `<epi-qonsole>` custom element — drop-in for any web page, no framework required.
- ESM and UMD build outputs via Vite, published as `@epimorphics/qonsole`.
- Shadow DOM encapsulation — component styles no longer leak into the host page.
- CSS custom property API (`--qonsole-accent-color`, `--qonsole-color`) for host-page theming.
- Sortable result table (replaces jQuery DataTables).
- Native `<dialog>` for the add-prefix modal (no Bootstrap dependency).
- CodeMirror 6 editor with SPARQL, JSON, and XML syntax highlighting.
- Proper shadow DOM style injection for CodeMirror via the `root` option.
- Yarn Berry workspace setup with `nodeLinker: pnpm` and pinned `yarnPath`.
- CI workflow (lint, format check, build) on every push and pull request.
- Release workflow publishing to the GitHub Package Registry on GitHub Release.
- oxlint and oxfmt for code quality.

### Changed

- Integration pattern changed from `qonsole.init(config)` to the `<epi-qonsole>`
  custom element with JSON-string props — see migration guide.
- `endpoints`, `prefixes`, and `queries` are now element attributes (JSON strings)
  rather than a JavaScript configuration object.
- SPARQL requests now use the Fetch API with `Content-Type: application/x-www-form-urlencoded`.
- Result table is a plain `<table>` with client-side sort; DataTables is removed.
- CodeMirror upgraded from v5 (AMD) to v6 (ESM).
- Build toolchain replaced: Vite replaces Grunt; Yarn Berry replaces npm/Bower.

### Removed

- jQuery, RequireJS, Bootstrap, Lodash, sprintf.js, jquery.spin dependencies.
- Ruby development server (`config.ru`, Rack, Puma) and proxy.
- Capybara/Selenium integration test suite.
- Grunt build tooling and Bower dependency management.
- Demo HTML pages (`demo-vertical.html`, `examples/`).
- `Makefile` and all Make targets.

---

## [1.0.0] - 2024 (v1 final state)

This version represents the final state of the original jQuery/RequireJS widget
before the v2 rewrite. The source is preserved in git history prior to commit
`897bca3d`.

### Features at v1 final state

- `qonsole.init(config)` initialisation API via RequireJS AMD module.
- CodeMirror 5 editor with SPARQL syntax highlighting and code folding.
- Prefix checkbox list with add-prefix modal and prefix.cc lookup.
- Example query dropdown with support for remote `queryURL` loading.
- Multiple SPARQL endpoint selector.
- Result format selector: table (TSV via jQuery DataTables), JSON, XML, plain text.
- Auto format switch for DESCRIBE/CONSTRUCT queries.
- URI shortening to QNames in table results; clickable HTTP URIs.
- Query execution timing and result count display.
- `allowQueriesFromURL` option to read initial query from `?query=` URL parameter.
- Custom SPARQL service injection via `config.service`.
- Public API: `currentQueryText()` and `setCurrentQueryText()`.
- Headless browser integration tests (Capybara + Selenium + Chrome).
- CI workflow running integration tests on push and pull requests.
- Local Rack/Puma development server with SPARQL proxy.

### Notable v1 history

- **0.3.0** — Fix for comments in prefix section of query; eslint (airbnb-es5) added.
- **0.1.3** — Bower and Grunt introduced for dependency management.
- **0.1.2** — Bower file added.
- **0.1.1** — Fixes for empty prefix, active-prefix abbreviation in table view,
  clickable URIs, and XML rendering.
- **0.1.0** (June 2014) — Initial public release: off-by-one fix in table counts,
  DataTables empty-result message, submit button disabled during query execution.

---

> For upgrade instructions, see the [migration guide](README.md#migrating-from-v1-to-v2) in the README.
