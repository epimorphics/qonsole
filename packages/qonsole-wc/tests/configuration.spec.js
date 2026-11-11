import { test, expect } from '@playwright/test'
import {
  ENDPOINT,
  inside,
  mount,
  queryText,
  stubEndpoint,
  SELECT_QUERY,
} from './helpers.js'

const URL_QUERY = 'SELECT ?s WHERE { ?s ?p ?o } LIMIT 1'

test.describe('endpoints', () => {
  const endpoints = {
    first: ENDPOINT,
    second: 'https://example.org/other/sparql',
  }

  test('selects the first endpoint', async ({ page }) => {
    await mount(page, { attributes: { endpoints } })
    await expect(inside(page, '#qc-endpoints')).toHaveValue(ENDPOINT)
  })

  test('selects the endpoint named "default", as v1 did', async ({ page }) => {
    await mount(page, {
      attributes: {
        endpoints: { other: endpoints.second, default: ENDPOINT },
      },
    })
    await expect(inside(page, '#qc-endpoints')).toHaveValue(ENDPOINT)
    await expect(inside(page, '#qc-endpoints option:checked')).toHaveText(
      'default'
    )
  })

  test('sends the query to the endpoint chosen', async ({ page }) => {
    await page.route(endpoints.second, (route) =>
      route.fulfill({ status: 200, contentType: 'text/plain', body: 'ok' })
    )
    await mount(page, { attributes: { endpoints } })
    await inside(page, '#qc-format').selectOption('text')
    await inside(page, '#qc-endpoints').selectOption({ label: 'second' })

    const request = page.waitForRequest(endpoints.second)
    await inside(page, 'button.btn-run').click()
    await request
  })

  test('cannot run a query without an endpoint', async ({ page }) => {
    await mount(page, { attributes: { endpoints: {} } })
    await expect(inside(page, 'button.btn-run')).toBeDisabled()
  })
})

test.describe('examples', () => {
  test('hides the example selector when there are no examples', async ({
    page,
  }) => {
    await mount(page, { attributes: { queries: [] }, expectQuery: false })
    await expect(inside(page, '#qc-examples')).toHaveCount(0)
    expect(await queryText(page)).toBe('')
  })

  // #15: in v1, an example with an empty query stopped the others loading
  test('loads examples after one with an empty query', async ({ page }) => {
    await mount(page, {
      attributes: {
        queries: [
          { name: 'Template', query: '' },
          { name: 'Other', query: 'Text' },
        ],
      },
      expectQuery: false,
    })
    await inside(page, '#qc-examples').selectOption({ label: 'Other' })
    await expect.poll(() => queryText(page)).toContain('Text')

    await inside(page, '#qc-examples').selectOption({ label: 'Template' })
    await expect.poll(() => queryText(page)).not.toContain('Text')
  })

  test('shows "Not found" for a queryURL that cannot be loaded', async ({
    page,
  }) => {
    await page.route('**/tests/missing.rq', (route) =>
      route.fulfill({ status: 404 })
    )
    await mount(page, {
      attributes: {
        queries: [{ name: 'Missing', queryURL: '/tests/missing.rq' }],
      },
    })
    expect(await queryText(page)).toContain('Not found: /tests/missing.rq')
  })

  test('falls back to defaults for invalid JSON in an attribute', async ({
    page,
  }) => {
    await mount(page, { attributes: { prefixes: '{not json' } })
    await expect(inside(page, 'ul.prefixes input')).toHaveCount(0)
    await expect(inside(page, '#qc-examples option')).toHaveCount(1)
  })
})

test.describe('heading-level', () => {
  const HEADINGS = ['Example queries', 'Prefixes', 'Query results']
  // Section headings only: the add prefix dialog's title is always an h4
  const headings = (page, tag) => inside(page, `${tag}.qonsole__heading`)

  test('uses h2 section headings by default', async ({ page }) => {
    await mount(page)
    await expect(headings(page, 'h2')).toHaveText(HEADINGS)
  })

  test('uses the level given', async ({ page }) => {
    await mount(page, { attributes: { 'heading-level': '4' } })
    await expect(headings(page, 'h4')).toHaveText(HEADINGS)
    await expect(headings(page, 'h2')).toHaveCount(0)
  })

  for (const level of ['0', '7', 'three']) {
    test(`falls back to h2 for "${level}"`, async ({ page }) => {
      await mount(page, { attributes: { 'heading-level': level } })
      await expect(headings(page, 'h2')).toHaveText(HEADINGS)
    })
  }
})

test.describe('allow-queries-from-u-r-l', () => {
  const allow = { 'allow-queries-from-u-r-l': 'true' }

  test('ignores the URL by default', async ({ page }) => {
    await mount(page, { search: `?query=${encodeURIComponent(URL_QUERY)}` })
    expect(await queryText(page)).toContain(SELECT_QUERY.query)
  })

  test('shows the ?query= query instead of the first example', async ({
    page,
  }) => {
    await mount(page, {
      attributes: allow,
      search: `?query=${encodeURIComponent(URL_QUERY)}`,
    })
    expect(await queryText(page)).toBe(URL_QUERY)
  })

  test('shows the ?q= query, as qonsole-rails did', async ({ page }) => {
    await mount(page, {
      attributes: allow,
      search: `?q=${encodeURIComponent(URL_QUERY)}`,
    })
    expect(await queryText(page)).toBe(URL_QUERY)
  })

  test('shows the session storage query for ?query=_localstore', async ({
    page,
  }) => {
    await page.addInitScript((query) => {
      window.sessionStorage.setItem('qonsole.query', query)
    }, URL_QUERY)
    await mount(page, { attributes: allow, search: '?query=_localstore' })
    expect(await queryText(page)).toBe(URL_QUERY)
  })

  test('shows the first example when the URL has no query', async ({
    page,
  }) => {
    await mount(page, { attributes: allow })
    expect(await queryText(page)).toContain(SELECT_QUERY.query)
  })
})

test.describe('service property', () => {
  test('runs the query through the service, not fetch', async ({ page }) => {
    const requests = await stubEndpoint(page, 'unused')
    await mount(page)
    await page.locator('epi-qonsole').evaluate((el) => {
      window.serviceCalls = []
      el.service = {
        execute(query, { url, format, success }) {
          window.serviceCalls.push({ query, url, format })
          success('?class\n<http://www.w3.org/2002/07/owl#Thing>\n')
        },
      }
    })
    await inside(page, 'button.btn-run').click()

    await expect(inside(page, '.results-table tbody tr')).toHaveCount(1)
    const calls = await page.evaluate(() => window.serviceCalls)
    expect(calls).toEqual([
      {
        query: await queryText(page),
        url: ENDPOINT,
        format: 'tsv',
      },
    ])
    expect(calls[0].query).toMatch(/^prefix owl: </)
    expect(requests).toHaveLength(0)
  })

  test("shows the service's error", async ({ page }) => {
    await mount(page)
    await page.locator('epi-qonsole').evaluate((el) => {
      el.service = {
        execute(query, { error }) {
          error(new Error('Unauthorised'))
        },
      }
    })
    await inside(page, 'button.btn-run').click()
    await expect(inside(page, '.results-error')).toHaveText('Unauthorised')
  })
})

// Configuration attributes are read once, when the element is mounted, as in
// qonsole v1; heading-level and the service property can change at any time
test.describe('changes after mount', () => {
  async function setAttributes(page, attrs) {
    await page.locator('epi-qonsole').evaluate((el, attrs) => {
      for (const [name, value] of Object.entries(attrs)) {
        el.setAttribute(name, value)
      }
    }, attrs)
  }

  test('ignores new endpoints, still selecting and using the first', async ({
    page,
  }) => {
    const requests = await stubEndpoint(page, 'ok')
    await mount(page)
    await setAttributes(page, {
      endpoints: '{"later": "https://later.example/sparql"}',
    })

    await expect(inside(page, '#qc-endpoints option')).toHaveText([
      'test endpoint',
    ])
    await expect(inside(page, '#qc-endpoints')).toHaveValue(ENDPOINT)
    await inside(page, '#qc-format').selectOption('text')
    await inside(page, 'button.btn-run').click()
    await expect(inside(page, '.results-code')).toBeVisible()
    expect(requests.map((r) => r.url())).toEqual([ENDPOINT])
  })

  test('ignores new prefixes and queries', async ({ page }) => {
    await mount(page)
    const before = await queryText(page)
    await setAttributes(page, {
      prefixes: '{"ex": "http://example.org/"}',
      queries: '[{"name": "Later", "query": "ASK {}"}]',
    })

    await expect(inside(page, 'ul.prefixes input')).toHaveCount(3)
    await expect(inside(page, '#qc-examples option')).toHaveText([
      SELECT_QUERY.name,
    ])
    expect(await queryText(page)).toBe(before)
  })

  test('applies a new heading-level', async ({ page }) => {
    await mount(page)
    await setAttributes(page, { 'heading-level': '3' })
    await expect(inside(page, 'h3.qonsole__heading')).toHaveCount(3)
  })
})
