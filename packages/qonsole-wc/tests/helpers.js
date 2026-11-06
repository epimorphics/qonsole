import { expect } from '@playwright/test'

export const ENDPOINT = 'https://example.org/sparql'

export const PREFIXES = {
  rdf: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
  rdfs: 'http://www.w3.org/2000/01/rdf-schema#',
  owl: 'http://www.w3.org/2002/07/owl#',
}

export const SELECT_QUERY = {
  name: 'All classes',
  query: 'SELECT ?class WHERE { ?class a owl:Class } LIMIT 10',
  prefixes: ['owl'],
}

/** Locate an element inside the <epi-qonsole> shadow root */
export function inside(page, selector) {
  return page.locator('epi-qonsole').locator(selector)
}

/** Text in the query editor, through the public API */
export function queryText(page) {
  return page.locator('epi-qonsole').evaluate((el) => el.currentQueryText())
}

/**
 * Open the blank test page and mount an <epi-qonsole> configured by
 * `attributes`, which are merged over a single endpoint, the PREFIXES and
 * SELECT_QUERY. Object values are serialised to JSON, as a host page would
 * write them. `search` is the page's query string, e.g. '?query=…'. Waits
 * for the editor to be filled, unless `expectQuery` is false.
 */
export async function mount(
  page,
  { attributes = {}, search = '', expectQuery = true } = {}
) {
  const attrs = {
    endpoints: { 'test endpoint': ENDPOINT },
    prefixes: PREFIXES,
    queries: [SELECT_QUERY],
    ...attributes,
  }
  await page.goto(`/tests/blank.html${search}`)
  await page.evaluate(async (attrs) => {
    await customElements.whenDefined('epi-qonsole')
    const el = document.createElement('epi-qonsole')
    for (const [name, value] of Object.entries(attrs)) {
      if (value === undefined) continue
      el.setAttribute(
        name,
        typeof value === 'string' ? value : JSON.stringify(value)
      )
    }
    document.querySelector('main').append(el)
  }, attrs)
  await inside(page, '.qonsole').waitFor()
  if (expectQuery) {
    // The editor is filled after the examples have loaded
    await expect(inside(page, '.cm-content')).not.toBeEmpty()
  }
}

/** Answer queries to ENDPOINT with `body`, recording each request */
export async function stubEndpoint(page, body, contentType = 'text/plain') {
  const requests = []
  await page.route(ENDPOINT, (route) => {
    requests.push(route.request())
    return route.fulfill({ status: 200, contentType, body })
  })
  return requests
}
