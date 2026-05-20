import { test, expect } from '@playwright/test'

const FIXTURE = '/tests/fixture.html'

// TSV response for a SELECT query
const TSV_RESPONSE = '?class\t?label\n' +
  '<http://www.w3.org/2002/07/owl#Thing>\t"Thing"@en\n' +
  '<http://www.w3.org/2002/07/owl#Class>\t"Class"@en\n'

// Locate an element inside the <epi-qonsole> shadow root
function inside(page, selector) {
  return page.locator('epi-qonsole').locator(selector)
}

test.describe('initial render', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(FIXTURE)
    await inside(page, '.qonsole').waitFor()
  })

  test('renders the editor', async ({ page }) => {
    await expect(inside(page, '.cm-editor')).toBeVisible()
  })

  test('populates the examples dropdown', async ({ page }) => {
    const options = inside(page, 'select#qc-examples option')
    await expect(options).toHaveCount(3)
    await expect(options.first()).toHaveText('All classes')
  })

  test('renders prefix checkboxes', async ({ page }) => {
    const checkboxes = inside(page, 'ul.prefixes input[type="checkbox"]')
    await expect(checkboxes).toHaveCount(3)
  })

  test('checks only the prefixes specified for the first example', async ({ page }) => {
    const owl = inside(page, 'input[data-prefix="owl"]')
    const rdfs = inside(page, 'input[data-prefix="rdfs"]')
    const rdf = inside(page, 'input[data-prefix="rdf"]')
    await expect(owl).toBeChecked()
    await expect(rdfs).toBeChecked()
    await expect(rdf).not.toBeChecked()
  })

  test('shows the endpoint in the selector', async ({ page }) => {
    await expect(inside(page, 'select#qc-endpoints')).toContainText('test endpoint')
  })

  test('loads the first example query into the editor', async ({ page }) => {
    const editorText = await page.locator('epi-qonsole').evaluate(
      el => el.currentQueryText()
    )
    expect(editorText).toContain('owl:Class')
  })
})

test.describe('example selection', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(FIXTURE)
    await inside(page, '.qonsole').waitFor()
  })

  test('switching example updates the editor content', async ({ page }) => {
    await inside(page, 'select#qc-examples').selectOption('Describe resource')
    const editorText = await page.locator('epi-qonsole').evaluate(
      el => el.currentQueryText()
    )
    expect(editorText).toContain('DESCRIBE')
  })

  test('loads a remote queryURL example', async ({ page }) => {
    await inside(page, 'select#qc-examples').selectOption('Remote query')
    const editorText = await page.locator('epi-qonsole').evaluate(
      el => el.currentQueryText()
    )
    expect(editorText).toContain('SELECT')
  })
})

test.describe('query execution — table result', () => {
  test.beforeEach(async ({ page }) => {
    await page.route('https://example.org/sparql', route =>
      route.fulfill({
        status: 200,
        contentType: 'text/tab-separated-values',
        body: TSV_RESPONSE,
      })
    )
    await page.goto(FIXTURE)
    await inside(page, '.qonsole').waitFor()
    await inside(page, 'button.btn-run').click()
    await inside(page, '.results-table').waitFor()
  })

  test('renders a table with the correct headers', async ({ page }) => {
    const headers = inside(page, '.results-table th')
    await expect(headers).toHaveCount(2)
    await expect(headers.first()).toContainText('class')
  })

  test('renders data rows', async ({ page }) => {
    const rows = inside(page, '.results-table tbody tr')
    await expect(rows).toHaveCount(2)
  })

  test('displays execution time and result count', async ({ page }) => {
    await expect(inside(page, '.results-meta')).toContainText('2 results')
  })

  test('clicking a column header sorts the table', async ({ page }) => {
    await inside(page, '.results-table th').first().click()
    await expect(inside(page, '.results-table th').first()).toContainText('▲')
  })
})

test.describe('query execution — JSON result', () => {
  test.beforeEach(async ({ page }) => {
    const jsonBody = JSON.stringify({
      results: { bindings: [{ s: { value: 'http://example.org/a' } }] },
    })
    await page.route('https://example.org/sparql', route =>
      route.fulfill({
        status: 200,
        contentType: 'application/sparql-results+json',
        body: jsonBody,
      })
    )
    await page.goto(FIXTURE)
    await inside(page, '.qonsole').waitFor()
    await inside(page, 'select#qc-format').selectOption('json')
    await inside(page, 'button.btn-run').click()
    await inside(page, '.results-code').waitFor()
  })

  test('renders JSON in a code editor', async ({ page }) => {
    await expect(inside(page, '.results-code .cm-editor')).toBeVisible()
  })

  test('displays result count of 1', async ({ page }) => {
    await expect(inside(page, '.results-meta')).toContainText('1 result')
  })
})

test.describe('query execution — DESCRIBE auto-switches format', () => {
  test('switches format from table to text for a DESCRIBE query', async ({ page }) => {
    await page.route('https://example.org/sparql', route =>
      route.fulfill({
        status: 200,
        contentType: 'text/plain',
        body: 'some rdf triples here',
      })
    )
    await page.goto(FIXTURE)
    await inside(page, '.qonsole').waitFor()

    // Select the Describe example and ensure format starts as table
    await inside(page, 'select#qc-examples').selectOption('Describe resource')
    await inside(page, 'select#qc-format').selectOption('tsv')
    await inside(page, 'button.btn-run').click()

    // Format should have been switched to text automatically
    await expect(inside(page, 'select#qc-format')).toHaveValue('text')
    await inside(page, '.results-code').waitFor()
  })
})

test.describe('query execution — error handling', () => {
  test('displays an error message on a failed request', async ({ page }) => {
    await page.route('https://example.org/sparql', route =>
      route.fulfill({ status: 500, body: 'Internal Server Error' })
    )
    await page.goto(FIXTURE)
    await inside(page, '.qonsole').waitFor()
    await inside(page, 'button.btn-run').click()
    await expect(inside(page, '.results-error')).toBeVisible()
    await expect(inside(page, '.results-error')).toContainText('Internal Server Error')
  })
})

test.describe('prefix management', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(FIXTURE)
    await inside(page, '.qonsole').waitFor()
  })

  test('toggling a prefix updates the query text', async ({ page }) => {
    const owlCheckbox = inside(page, 'input[data-prefix="owl"]')
    await owlCheckbox.uncheck()
    const editorText = await page.locator('epi-qonsole').evaluate(
      el => el.currentQueryText()
    )
    expect(editorText).not.toMatch(/^prefix owl:/m)
  })

  test('opening the add prefix dialog shows the modal', async ({ page }) => {
    await inside(page, '.btn-add-prefix').click()
    await expect(inside(page, '.prefix-dialog')).toBeVisible()
  })
})

test.describe('public API', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(FIXTURE)
    await inside(page, '.qonsole').waitFor()
  })

  test('currentQueryText returns the editor content', async ({ page }) => {
    const text = await page.locator('epi-qonsole').evaluate(el => el.currentQueryText())
    expect(typeof text).toBe('string')
    expect(text.length).toBeGreaterThan(0)
  })

  test('setCurrentQueryText updates the editor', async ({ page }) => {
    await page.locator('epi-qonsole').evaluate(
      el => el.setCurrentQueryText('SELECT * WHERE { ?s ?p ?o }')
    )
    const text = await page.locator('epi-qonsole').evaluate(el => el.currentQueryText())
    expect(text).toBe('SELECT * WHERE { ?s ?p ?o }')
  })
})
