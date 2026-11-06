import { test, expect } from '@playwright/test'
import { ENDPOINT, inside, mount, stubEndpoint } from './helpers.js'

// The CSS shadow parts in the README are public API: host pages style them
// with ::part(), so renaming or removing one is a breaking change

function part(page, name) {
  return inside(page, `[part~="${name}"]`)
}

async function expectParts(page, names) {
  for (const name of names) {
    await expect(part(page, name), `part "${name}"`).not.toHaveCount(0)
  }
}

test('exposes the parts of the initial view', async ({ page }) => {
  await mount(page)
  await expectParts(page, [
    'container',
    'section',
    'heading',
    'label',
    'select',
    'prefix-list',
    'prefix',
    'add-prefix-button',
    'editor-description',
    'skip-link',
    'editor',
    'controls',
    'run-button',
    'results',
  ])
})

test('the results section is also a section', async ({ page }) => {
  await mount(page)
  await expect(part(page, 'results')).toHaveAttribute('part', /\bsection\b/)
})

test('exposes the parts of a results table', async ({ page }) => {
  await stubEndpoint(page, '?s\n<http://e/a>\n', 'text/tab-separated-values')
  await mount(page)
  await inside(page, 'button.btn-run').click()
  await expectParts(page, [
    'results-meta',
    'results-table',
    'table-header',
    'table-cell',
  ])
})

test('exposes the parts of a code result', async ({ page }) => {
  await stubEndpoint(page, 'some text')
  await mount(page)
  await inside(page, '#qc-format').selectOption('text')
  await inside(page, 'button.btn-run').click()
  await expectParts(page, ['results-meta', 'results-editor'])
})

test('exposes the error part', async ({ page }) => {
  await page.route(ENDPOINT, (route) => route.fulfill({ status: 500 }))
  await mount(page)
  await inside(page, 'button.btn-run').click()
  await expectParts(page, ['error'])
})

test('exposes the loading part while a query runs', async ({ page }) => {
  // Never answer, so the query stays running
  await page.route(ENDPOINT, () => {})
  await mount(page)
  await inside(page, 'button.btn-run').click()
  await expectParts(page, ['results-loading'])
})
