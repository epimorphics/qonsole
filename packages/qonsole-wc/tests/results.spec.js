import { test, expect } from '@playwright/test'
import { ENDPOINT, inside, mount, stubEndpoint } from './helpers.js'

const XSD = 'http://www.w3.org/2001/XMLSchema#'

const TSV = [
  '?class\t?label\t?count',
  `<http://www.w3.org/2002/07/owl#Thing>\t"Thing"@en\t"2"^^<${XSD}integer>`,
  `<http://example.org/Alpha>\t"Alpha"@en\t"10"^^<${XSD}integer>`,
  `<http://example.org/beta>\t"beta"@en\t"1"^^<${XSD}integer>`,
  '',
].join('\n')

async function run(page, format = 'tsv') {
  await inside(page, '#qc-format').selectOption(format)
  await inside(page, 'button.btn-run').click()
}

function column(page, index) {
  return inside(page, `.results-table tbody tr td:nth-child(${index})`)
}

test.describe('table', () => {
  test.beforeEach(async ({ page }) => {
    await stubEndpoint(page, TSV, 'text/tab-separated-values')
    await mount(page)
    await run(page)
    await inside(page, '.results-table').waitFor()
  })

  test('links URIs, shortened with the configured prefixes', async ({
    page,
  }) => {
    const link = column(page, 1).first().getByRole('link')
    await expect(link).toHaveText('owl:Thing')
    await expect(link).toHaveAttribute(
      'href',
      'http://www.w3.org/2002/07/owl#Thing'
    )
    await expect(link).toHaveAttribute('target', '_blank')
    await expect(link).toHaveAttribute('rel', 'noopener')
  })

  test('shows the full URI when no prefix matches', async ({ page }) => {
    await expect(column(page, 1).nth(1)).toHaveText('http://example.org/Alpha')
  })

  test('gives language-tagged literals their language as a tooltip', async ({
    page,
  }) => {
    const label = column(page, 2).first().locator('span')
    await expect(label).toHaveText('Thing')
    await expect(label).toHaveAttribute('title', 'Language: en')
  })

  test('gives typed literals their datatype as a tooltip', async ({ page }) => {
    const count = column(page, 3).first().locator('span')
    await expect(count).toHaveText('2')
    await expect(count).toHaveAttribute('title', /^Type: .*#integer/)
  })

  test('shows the result count and time', async ({ page }) => {
    await expect(inside(page, '.results-meta')).toHaveText(
      /^\s*3 results\s+in \d+ min \d+\.\d{3} s\s*$/
    )
  })

  test('sorts by a column, ascending then descending', async ({ page }) => {
    const header = inside(page, '.results-table th').nth(1)
    await expect(header).toHaveAttribute('aria-sort', 'none')

    await header.click()
    await expect(header).toHaveAttribute('aria-sort', 'ascending')
    await expect(column(page, 2)).toHaveText(['Alpha', 'beta', 'Thing'])

    await header.click()
    await expect(header).toHaveAttribute('aria-sort', 'descending')
    await expect(column(page, 2)).toHaveText(['Thing', 'beta', 'Alpha'])
  })

  test('sorts numbers numerically', async ({ page }) => {
    await inside(page, '.results-table th').nth(2).click()
    await expect(column(page, 3)).toHaveText(['1', '2', '10'])
  })
})

test.describe('empty table', () => {
  test('says the query returned no results', async ({ page }) => {
    await stubEndpoint(page, '?class\t?label\n', 'text/tab-separated-values')
    await mount(page)
    await run(page)
    await expect(inside(page, '.results-empty')).toHaveText(
      'Query did not return any results.'
    )
    await expect(inside(page, '.results-meta')).toContainText('0 results')
  })
})

test.describe('code formats', () => {
  test('shows XML in a read-only editor and counts the results', async ({
    page,
  }) => {
    const xml =
      '<?xml version="1.0"?>\n' +
      '<sparql xmlns="http://www.w3.org/2005/sparql-results#">' +
      '<head><variable name="s"/></head><results>' +
      '<result><binding name="s"><uri>http://e/a</uri></binding></result>' +
      '<result><binding name="s"><uri>http://e/b</uri></binding></result>' +
      '</results></sparql>'
    await stubEndpoint(page, xml, 'application/sparql-results+xml')
    await mount(page)
    await run(page, 'xml')

    const editor = inside(page, '.results-code .cm-content')
    await expect(editor).toContainText('<uri>http://e/a</uri>')
    // Focusable, so it can be scrolled by keyboard, but not editable
    await expect(editor).toHaveAttribute('aria-readonly', 'true')
    const before = await editor.textContent()
    await editor.click()
    await page.keyboard.type('typed')
    await expect(editor).toHaveText(before)
    await expect(inside(page, '.results-meta')).toContainText('2 results')
  })

  test('shows plain text', async ({ page }) => {
    await stubEndpoint(page, '<http://e/a> <http://e/p> "o" .')
    await mount(page)
    await run(page, 'text')
    await expect(inside(page, '.results-code .cm-content')).toContainText(
      '<http://e/a> <http://e/p> "o" .'
    )
    await expect(inside(page, '.results-meta')).toContainText('1 result')
  })
})

test.describe('while a query runs', () => {
  test('shows progress and disables the run button', async ({ page }) => {
    let respond
    const responded = new Promise((resolve) => (respond = resolve))
    await page.route(ENDPOINT, async (route) => {
      await responded
      await route.fulfill({
        status: 200,
        contentType: 'text/plain',
        body: 'ok',
      })
    })
    await mount(page)
    await run(page, 'text')

    const button = inside(page, 'button.btn-run')
    await expect(button).toBeDisabled()
    await expect(button).toHaveText('Running…')
    await expect(inside(page, '.results-loading')).toBeVisible()

    respond()
    await expect(button).toBeEnabled()
    await expect(button).toHaveText('Perform query')
    await expect(inside(page, '.results-loading')).toHaveCount(0)
  })
})

test.describe('errors', () => {
  test('shows the status when the error has no body', async ({ page }) => {
    await page.route(ENDPOINT, (route) => route.fulfill({ status: 503 }))
    await mount(page)
    await run(page)
    await expect(inside(page, '.results-error')).toContainText('503')
  })

  test('shows a network failure', async ({ page }) => {
    await page.route(ENDPOINT, (route) => route.abort('internetdisconnected'))
    await mount(page)
    await run(page)
    await expect(inside(page, '.results-error')).toBeVisible()
    await expect(inside(page, '.results-meta')).toContainText('0 results')
  })
})
