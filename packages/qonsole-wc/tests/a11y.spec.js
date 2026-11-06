import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'
import { inside, mount, stubEndpoint } from './helpers.js'

// WCAG 2.2 AA automated checks. axe finds only part of the WCAG failures
// (contrast, names, roles, target size…); keyboard behaviour is tested in
// keyboard.spec.js, and the rest needs a manual review

const WCAG_22_AA = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']

async function scan(page) {
  const { violations } = await new AxeBuilder({ page })
    .include('epi-qonsole')
    .withTags(WCAG_22_AA)
    .analyze()
  // Map to the rule and the elements, so a failure says what to fix
  return violations.map(({ id, help, nodes }) => ({
    id,
    help,
    targets: nodes.map((node) => node.target),
  }))
}

test('the initial view has no violations', async ({ page }) => {
  await mount(page)
  expect(await scan(page)).toEqual([])
})

test('a results table has no violations', async ({ page }) => {
  await stubEndpoint(
    page,
    '?class\t?label\n<http://www.w3.org/2002/07/owl#Thing>\t"Thing"@en\n',
    'text/tab-separated-values'
  )
  await mount(page)
  await inside(page, 'button.btn-run').click()
  await inside(page, '.results-table').waitFor()
  // Sorted, so the sort indicator is checked too
  await inside(page, '.results-table th').first().click()
  expect(await scan(page)).toEqual([])
})

test('a code result has no violations', async ({ page }) => {
  await stubEndpoint(
    page,
    '{"results":{"bindings":[]}}',
    'application/sparql-results+json'
  )
  await mount(page)
  await inside(page, '#qc-format').selectOption('json')
  await inside(page, 'button.btn-run').click()
  await inside(page, '.results-code').waitFor()
  expect(await scan(page)).toEqual([])
})

test('an error has no violations', async ({ page }) => {
  await page.route('https://example.org/sparql', (route) =>
    route.fulfill({ status: 400, body: 'Parse error' })
  )
  await mount(page)
  await inside(page, 'button.btn-run').click()
  await inside(page, '.results-error').waitFor()
  expect(await scan(page)).toEqual([])
})

test('the add prefix dialog has no violations', async ({ page }) => {
  await mount(page)
  await inside(page, '.btn-add-prefix').click()
  await inside(page, '.prefix-dialog').waitFor()
  expect(await scan(page)).toEqual([])
})

test('the skip control has no violations when shown', async ({ page }) => {
  await mount(page)
  await inside(page, '.qonsole__skip').focus()
  expect(await scan(page)).toEqual([])
})
