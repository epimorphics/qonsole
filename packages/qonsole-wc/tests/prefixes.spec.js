import { test, expect } from '@playwright/test'
import { inside, mount, queryText, PREFIXES, SELECT_QUERY } from './helpers.js'

const SKOS = 'http://www.w3.org/2004/02/skos/core#'

function checkbox(page, name) {
  return inside(page, `input[data-prefix="${name}"]`)
}

test.describe('prefix checkboxes', () => {
  test.beforeEach(async ({ page }) => {
    await mount(page, {
      attributes: {
        queries: [
          SELECT_QUERY,
          {
            name: 'Declares its own prefix',
            query: `prefix rdf: <${PREFIXES.rdf}>\nSELECT ?s WHERE { ?s a rdf:Property }`,
          },
        ],
      },
    })
  })

  test('re-checking a prefix adds its declaration back', async ({ page }) => {
    await checkbox(page, 'owl').uncheck()
    expect(await queryText(page)).not.toContain('prefix owl:')

    await checkbox(page, 'owl').check()
    expect(await queryText(page)).toMatch(/^prefix owl: <.*owl#>$/m)
  })

  test('checking a prefix adds its declaration', async ({ page }) => {
    await checkbox(page, 'rdf').check()
    expect(await queryText(page)).toContain(`prefix rdf: <${PREFIXES.rdf}>`)
  })

  test('checks the prefixes an example declares', async ({ page }) => {
    await inside(page, '#qc-examples').selectOption('Declares its own prefix')
    await expect(checkbox(page, 'rdf')).toBeChecked()
    await expect(checkbox(page, 'owl')).not.toBeChecked()
    await expect(checkbox(page, 'rdfs')).not.toBeChecked()
  })
})

test.describe('add prefix dialog', () => {
  const dialog = (page) => inside(page, '.prefix-dialog')
  const prefixInput = (page) => inside(page, '#qc-input-prefix')
  const uriInput = (page) => inside(page, '#qc-input-uri')
  const lookupButton = (page) =>
    dialog(page).getByRole('button', { name: /^Lookup/ })
  const addButton = (page) =>
    dialog(page).getByRole('button', { name: 'Add prefix' })

  async function stubPrefixCC(page, prefix, response) {
    await page.route(`https://prefix.cc/${prefix}.file.json`, (route) =>
      route.fulfill(response)
    )
  }

  test.beforeEach(async ({ page }) => {
    await mount(page)
    await inside(page, '.btn-add-prefix').click()
    await expect(dialog(page)).toBeVisible()
  })

  test('cannot look up or add until a prefix is typed', async ({ page }) => {
    await expect(lookupButton(page)).toBeDisabled()
    await expect(addButton(page)).toBeDisabled()

    await prefixInput(page).fill('skos')
    await expect(lookupButton(page)).toHaveText("Lookup 'skos' on prefix.cc")
    await expect(lookupButton(page)).toBeEnabled()
    await expect(addButton(page)).toBeEnabled()
  })

  test('adds a prefix found on prefix.cc', async ({ page }) => {
    await stubPrefixCC(page, 'skos', { json: { skos: SKOS } })
    await prefixInput(page).fill('skos')
    await lookupButton(page).click()
    await expect(uriInput(page)).toHaveValue(SKOS)

    await addButton(page).click()
    await expect(dialog(page)).toBeHidden()
    await expect(checkbox(page, 'skos')).toBeChecked()
    expect(await queryText(page)).toContain(`prefix skos: <${SKOS}>`)
  })

  test('adds a prefix with a URI typed in', async ({ page }) => {
    await prefixInput(page).fill(' ex ')
    await uriInput(page).fill(' http://example.org/ ')
    await addButton(page).click()

    await expect(checkbox(page, 'ex')).toBeChecked()
    expect(await queryText(page)).toContain('prefix ex: <http://example.org/>')
  })

  test('keeps the other prefixes as they were when adding one', async ({
    page,
  }) => {
    // The example checks owl only
    await prefixInput(page).fill('ex')
    await uriInput(page).fill('http://example.org/')
    await addButton(page).click()

    await expect(checkbox(page, 'owl')).toBeChecked()
    await expect(checkbox(page, 'rdf')).not.toBeChecked()
    await expect(checkbox(page, 'rdfs')).not.toBeChecked()
    const text = await queryText(page)
    expect(text).toMatch(/^prefix owl: <.*>\nprefix ex: <.*>\n/)
    expect(text).toContain(SELECT_QUERY.query)
  })

  test('says when prefix.cc has no match', async ({ page }) => {
    await stubPrefixCC(page, 'nope', { json: {} })
    await prefixInput(page).fill('nope')
    await lookupButton(page).click()
    await expect(inside(page, '.lookup-error')).toHaveText(
      "No match found for 'nope'"
    )
    await expect(uriInput(page)).toHaveValue('')
  })

  test('says when the prefix.cc lookup fails', async ({ page }) => {
    await stubPrefixCC(page, 'skos', { status: 500 })
    await prefixInput(page).fill('skos')
    await lookupButton(page).click()
    await expect(inside(page, '.lookup-error')).toHaveText(
      "Lookup failed for 'skos'"
    )
  })

  test('cancel closes the dialog without adding', async ({ page }) => {
    await prefixInput(page).fill('ex')
    await dialog(page).getByRole('button', { name: 'Cancel' }).click()
    await expect(dialog(page)).toBeHidden()
    await expect(checkbox(page, 'ex')).toHaveCount(0)
  })

  test('Escape closes the dialog, which opens empty again', async ({
    page,
  }) => {
    await prefixInput(page).fill('ex')
    await page.keyboard.press('Escape')
    await expect(dialog(page)).toBeHidden()

    await inside(page, '.btn-add-prefix').click()
    await expect(dialog(page)).toBeVisible()
    await expect(prefixInput(page)).toHaveValue('')
  })
})
