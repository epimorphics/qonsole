# Qonsole v2 — SPARQL query web component

[![CI](https://github.com/epimorphics/qonsole/actions/workflows/ci.yml/badge.svg)](https://github.com/epimorphics/qonsole/actions/workflows/ci.yml)

A framework-agnostic Web Component for running SPARQL queries against RDF endpoints. Drop it into any web page — no framework required.

> **v2 note:** This is a full rewrite of the original jQuery/RequireJS widget as a Vue 3 SFC compiled to a native Web Component (`<epi-qonsole>`). The legacy source lives in the git history prior to this release.

---

## Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Props](#props)
  - [Public API](#public-api)
  - [Custom SPARQL service](#custom-sparql-service)
- [Result formats](#result-formats)
- [Styling](#styling)
  - [CSS custom properties](#css-custom-properties)
  - [CodeMirror editor](#codemirror-editor)
- [Migrating from v1 to v2](#migrating-from-v1-to-v2)
  - [Installation](#installation-1)
  - [Configuration](#configuration)
  - [HTML structure](#html-structure)
  - [Public API](#public-api-1)
  - [Custom SPARQL service](#custom-sparql-service)
  - [Removed public API](#removed-public-api)
  - [Removed configuration options](#removed-configuration-options)
  - [Output format changes](#output-format-changes)
  - [Styling](#styling)
  - [Dependencies you can remove](#dependencies-you-can-remove)
- [Development](#development)
- [Releasing](#releasing)
- [License](#license)

---

## Installation

The package is published to the [GitHub Package Registry](https://npm.pkg.github.com)
and requires a GitHub token to install. Add the following to your `.npmrc` or
`.yarnrc.yml`:

```
# .npmrc
@epimorphics:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

Then install:

```sh
yarn add @epimorphics/qonsole
# or
npm install @epimorphics/qonsole
```

> **CDN / script tag usage** is not yet available — the GitHub Package Registry
> requires authentication and is not indexed by public CDNs such as unpkg or
> jsDelivr. Direct script tag support is planned for a future release when the
> package is published to the public npm registry.

---

## Usage

Import the package once in your application entry point to register the custom element:

```js
import '@epimorphics/qonsole'
```

Then use the element in your HTML:

```html
<epi-qonsole
  endpoints='{"default": "https://your-endpoint/sparql"}'
  prefixes='{
    "rdf":  "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
    "rdfs": "http://www.w3.org/2000/01/rdf-schema#"
  }'
  queries='[
    {
      "name": "All classes",
      "query": "SELECT ?class WHERE { ?class a rdfs:Class } LIMIT 10"
    }
  ]'
></epi-qonsole>
```

### Props

| Prop | Type | Description |
|------|------|-------------|
| `endpoints` | JSON string | Object mapping endpoint names to URLs. The first entry is selected by default. |
| `prefixes` | JSON string | Object mapping prefix short-names to URIs. All are checked on by default. |
| `queries` | JSON string | Array of `{ name, query }` or `{ name, queryURL }` objects. |
| `allow-queries-from-u-r-l` | `"true"` / `"false"` | When `"true"`, reads an initial query from the `?query=` URL parameter. |
| `service` | Object (JS property) | Custom SPARQL service — see [Custom SPARQL service](#custom-sparql-service). |

### Public API

```js
const el = document.querySelector('epi-qonsole')

el.currentQueryText()          // → string: current editor content
el.setCurrentQueryText('...')  // set editor content programmatically
```

### Custom SPARQL service

By default qonsole POSTs queries directly to the configured endpoint URL. You
can replace this with your own service object — useful for adding authentication
headers, proxying through a backend, or mocking responses in tests.

Assign the service as a JavaScript property (not an HTML attribute) after the
element is defined:

```js
document.querySelector('epi-qonsole').service = myService
```

The service must implement a single `execute` method:

```js
const myService = {
  /**
   * @param {string} query      - The SPARQL query string (with prefix declarations)
   * @param {object} options
   * @param {string} options.url    - The selected endpoint URL
   * @param {string} options.format - 'tsv' | 'json' | 'xml' | 'text'
   * @param {function} options.success - Call with the raw response string on success
   * @param {function} options.error   - Call with an Error (or string) on failure
   */
  execute(query, { url, format, success, error }) {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Bearer ' + getToken(),
      },
      body: new URLSearchParams({ query, output: format }),
    })
      .then(res => res.text())
      .then(success)
      .catch(error)
  },
}
```

The `success` callback must receive the raw response body as a string — qonsole
handles parsing and rendering from there. The `error` callback receives anything
thrown or an `Error` instance; the message is displayed in the results panel.

---

## Result formats

| Format | Rendering |
|--------|-----------|
| table | Sortable HTML table (TSV from endpoint) |
| plain text | Read-only CodeMirror editor |
| JSON | Read-only CodeMirror editor with JSON highlighting |
| XML | Read-only CodeMirror editor with XML highlighting |

DESCRIBE and CONSTRUCT queries automatically switch away from table format.

---

## Styling

The component is shadow-DOM encapsulated, so global stylesheets do not apply
inside it. Appearance is controlled via CSS custom properties set on the
`epi-qonsole` host element.

### CSS custom properties

| Property | Default | Description |
|----------|---------|-------------|
| `--qonsole-color` | `#333` | Base text colour |
| `--qonsole-font-family` | `sans-serif` | Font family for all UI text |
| `--qonsole-font-size` | `14px` | Base font size |
| `--qonsole-accent-color` | `#5cb85c` | Run button and primary button background |
| `--qonsole-accent-text-color` | `#fff` | Text colour on accent-coloured buttons |
| `--qonsole-border-color` | `#ccc` | Border colour for inputs, selects, and the editor |
| `--qonsole-border-radius` | `3px` | Border radius applied consistently across controls |
| `--qonsole-muted-color` | `#555` | Colour for secondary text (result count, loading state) |
| `--qonsole-error-color` | `#c00` | Error message text colour |
| `--qonsole-error-bg` | `#fff0f0` | Error message background |
| `--qonsole-table-header-bg` | `#f0f0f0` | Results table header background |
| `--qonsole-table-border-color` | `#ddd` | Results table cell border colour |
| `--qonsole-table-stripe-bg` | `#fafafa` | Results table alternating row background |

### Example — dark theme

```css
epi-qonsole {
  --qonsole-color: #e0e0e0;
  --qonsole-font-family: 'Inter', sans-serif;
  --qonsole-accent-color: #7c6af5;
  --qonsole-accent-text-color: #fff;
  --qonsole-border-color: #444;
  --qonsole-muted-color: #aaa;
  --qonsole-error-color: #ff6b6b;
  --qonsole-error-bg: #2a1a1a;
  --qonsole-table-header-bg: #2a2a2a;
  --qonsole-table-border-color: #444;
  --qonsole-table-stripe-bg: #1e1e1e;
}
```

### Example — brand colours

```css
epi-qonsole {
  --qonsole-accent-color: #0057b8;
  --qonsole-border-radius: 6px;
  --qonsole-font-family: 'Roboto', sans-serif;
}
```

### CodeMirror editor

The editor uses [CodeMirror 6](https://codemirror.net/), which ships with its
own theme system. The default theme is used. CodeMirror's built-in themes or
community themes can be applied by passing a `theme` extension — this is not
currently exposed as a prop, but can be done by providing a custom SPARQL service
wrapper if needed. This is an area planned for future improvement.

---

## Migrating from v1 to v2

### Installation

**v1** — assets copied manually or via Bower; initialised with RequireJS:

```html
<script src="lib/js/require.js"></script>
<script>
  require(['js/config'], function () {
    require(['jquery', 'js/app/qonsole', 'bootstrap'], function ($, qonsole) {
      $(function () { qonsole.init(qonfig) })
    })
  })
</script>
```

**v2** — install the npm package and import once to register the element:

```js
import '@epimorphics/qonsole'
```

### Configuration

**v1** — JavaScript object passed to `qonsole.init()`:

```js
const qonfig = {
  endpoints: { default: 'https://example.org/sparql' },
  prefixes:  { rdf: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#' },
  queries:   [{ name: 'All classes', query: 'SELECT ...' }],
  allowQueriesFromURL: true,
}
qonsole.init(qonfig)
```

**v2** — attributes on the custom element (JSON strings):

```html
<epi-qonsole
  endpoints='{"default": "https://example.org/sparql"}'
  prefixes='{"rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#"}'
  queries='[{"name": "All classes", "query": "SELECT ..."}]'
  allow-queries-from-u-r-l="true"
></epi-qonsole>
```

### HTML structure

**v1** — the host page had to provide specific DOM elements by `id` and class
(`#query-edit-cm`, `#examples`, `ul.prefixes`, `#endpoints`, `#results`, etc.)
plus Bootstrap modal markup for the add-prefix dialog.

**v2** — no host markup required beyond the `<epi-qonsole>` tag. All internal
structure is encapsulated in the shadow DOM.

### Public API

**v1:**
```js
qonsole.currentQueryText()
qonsole.setCurrentQueryText('SELECT ...')
```

**v2:**
```js
const el = document.querySelector('epi-qonsole')
el.currentQueryText()
el.setCurrentQueryText('SELECT ...')
```

### Custom SPARQL service

**v1** — passed as `config.service` to `qonsole.init()`.

**v2** — set as a JavaScript property on the element after registration:

```js
document.querySelector('epi-qonsole').service = myCustomService
```

The `execute(query, { url, format, success, error })` interface is unchanged. See
[Custom SPARQL service](#custom-sparql-service) for the full contract.

### Removed public API

The following v1 methods and getters are **not available** in v2. The web
component intentionally encapsulates its internal state rather than exposing it
for external manipulation.

| v1 method | Notes |
|-----------|-------|
| `qonsole.config()` | Returns the parsed config object. No equivalent — pass config via element attributes instead. |
| `qonsole.sparqlService()` | Returns the service instance. Use the `service` property setter to supply a custom service. |
| `qonsole.queryEditor()` | Returns the CodeMirror instance. No equivalent — the editor is private to the shadow DOM. |
| `qonsole.selectedFormat()` / `setSelectedFormat()` | Format getter/setter. No equivalent in v2. |
| `qonsole.namedExample(name)` | Looks up an example by name. No equivalent — examples are driven by the `queries` prop. |

### Removed configuration options

| v1 `qonfig` key | Notes |
|-----------------|-------|
| `configURL` | v1 could load its config object from a remote URL. v2 requires config to be passed as element attributes or properties directly. |
| `service.execute` callback style | The custom service interface (`success`/`error` callbacks) is preserved for backwards compatibility but may be removed in a future version. |

### Output format changes

- **CSV format removed.** v1 supported `csv` as an output format. v2 supports `tsv`, `json`, `xml`, and `text`. TSV is a strict superset of what CSV was used for here.
- **Format auto-switch behaviour.** v1 auto-switched DESCRIBE/CONSTRUCT queries from TSV to plain text. v2 preserves this behaviour, but the switch now also applies when the query body is preceded by comments or blank lines.

### Styling

v1 relied on Bootstrap for all UI chrome (panels, modals, buttons, dropdowns).
v2 bundles its own styles inside the shadow DOM. If you were overriding Bootstrap
classes to restyle the widget (e.g. `.panel-heading`, `.btn-custom1`), those
selectors no longer apply.

Global stylesheets do **not** pierce the shadow DOM. Theming via CSS custom
properties is planned for a future release.

### Dependencies you can remove

If your project was loading any of the following as part of the qonsole
integration, they are no longer required:

- jQuery
- RequireJS
- Bootstrap (unless used elsewhere in your project)
- Lodash / Underscore
- CodeMirror v5 (AMD)
- jquery.spin
- jQuery DataTables

---

## Development

The source lives in `packages/qonsole-wc/`. This repo uses Yarn Berry workspaces with `nodeLinker: pnpm`.

```sh
# Install dependencies (run from repo root)
yarn install

# Start dev server
yarn workspace @epimorphics/qonsole dev

# Build distributable
yarn workspace @epimorphics/qonsole build
```

Open `packages/qonsole-wc/dev/index.html` in the Vite dev server to test against a live DBpedia endpoint.

---

## Releasing

Releases are published to the [GitHub Package Registry](https://npm.pkg.github.com) as `@epimorphics/qonsole` automatically when a GitHub Release is created.

### Process

1. **Bump the version** in `packages/qonsole-wc/package.json` following [Semantic Versioning](https://semver.org):
   - `patch` — bug fixes
   - `minor` — new features, backwards-compatible
   - `major` — breaking changes

2. **Update `CHANGELOG.md`** — move items from `[Unreleased]` into a new dated section, e.g. `## [2.1.0] - 2026-05-20`.

3. **Commit and push** to `main`:
   ```sh
   git add packages/qonsole-wc/package.json CHANGELOG.md
   git commit -m "chore: release v2.1.0"
   git push
   ```

4. **Create a GitHub Release** tagged `v<version>` (e.g. `v2.1.0`):
   - Go to **Releases → Draft a new release** on GitHub
   - Set the tag to `v2.1.0` targeting `main`
   - Copy the relevant `CHANGELOG.md` section as the release notes
   - Click **Publish release**

5. The **Release workflow** fires automatically, builds the package, and publishes it to the GitHub Package Registry. No additional secrets are needed — it uses the built-in `GITHUB_TOKEN`.

### CI

Every push to `main` and every pull request runs the **CI workflow**, which checks linting, formatting, and that the build succeeds.

---

## License

Apache 2.0 © [Epimorphics Ltd](https://www.epimorphics.com)
