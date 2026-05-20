# Qonsole v2 — SPARQL query web component

[![CI](https://github.com/epimorphics/qonsole/actions/workflows/ci.yml/badge.svg)](https://github.com/epimorphics/qonsole/actions/workflows/ci.yml)

A framework-agnostic Web Component for running SPARQL queries against RDF endpoints. Drop it into any web page — no framework required.

> **v2 note:** This is a full rewrite of the original jQuery/RequireJS widget as a Vue 3 SFC compiled to a native Web Component (`<epi-qonsole>`). The legacy source lives in the git history prior to this release.

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
| `service` | Object (JS property) | Custom SPARQL service object implementing `.execute(query, options)`. |

### Public API

```js
const el = document.querySelector('epi-qonsole')

el.currentQueryText()          // → string: current editor content
el.setCurrentQueryText('...')  // set editor content programmatically
```

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

**v2** — set as a JavaScript property on the element:

```js
document.querySelector('epi-qonsole').service = myCustomService
```

The service interface is unchanged: `execute(query, { url, format, success, error })`.

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
