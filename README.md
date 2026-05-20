# Qonsole v2 — SPARQL query web component

[![CI](https://github.com/epimorphics/qonsole/actions/workflows/ci.yml/badge.svg)](https://github.com/epimorphics/qonsole/actions/workflows/ci.yml)

A framework-agnostic Web Component for running SPARQL queries against RDF endpoints. Drop it into any web page with a single script tag — no framework required.

> **v2 note:** This is a full rewrite of the original jQuery/RequireJS widget as a Vue 3 SFC compiled to a native Web Component (`<epi-qonsole>`). The legacy source lives in the git history prior to this release.

---

## Usage

```html
<script type="module" src="https://unpkg.com/@epimorphics/qonsole/dist/qonsole.js"></script>

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
