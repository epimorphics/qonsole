import { test, expect } from '@playwright/test'
import { inside, mount, queryText } from './helpers.js'

// Keyboard behaviour of the query editor, matching qonsole v1: Tab indents,
// and Escape, Shift+Tab or the skip control get out of the editor, so it is
// not a keyboard trap (WCAG 2.1.2)

function editor(page) {
  return inside(page, '.qonsole').getByRole('textbox', { name: 'SPARQL query' })
}

const skip = (page) => inside(page, '.qonsole__skip')
const endpoint = (page) => inside(page, '#qc-endpoints')

test.beforeEach(async ({ page }) => {
  await mount(page)
})

test('describes how to leave the editor', async ({ page }) => {
  await expect(editor(page)).toHaveAccessibleDescription(
    /Press Escape to leave the editor, or Shift and Tab to go back/
  )
})

test('Tab indents rather than leaving the editor', async ({ page }) => {
  await editor(page).click()
  await page.keyboard.press('ControlOrMeta+End')
  await page.keyboard.press('Tab')

  expect(await queryText(page)).toMatch(/\t$/)
  await expect(editor(page)).toBeFocused()
})

test('Escape moves focus to the endpoint selector', async ({ page }) => {
  await editor(page).click()
  await page.keyboard.press('Escape')
  await expect(endpoint(page)).toBeFocused()
})

test('Shift+Tab moves focus back to the skip control', async ({ page }) => {
  await editor(page).click()
  await page.keyboard.press('Shift+Tab')
  await expect(skip(page)).toBeFocused()
})

test('the skip control shows on focus and jumps to the endpoint selector', async ({
  page,
}) => {
  const clipPath = () =>
    skip(page).evaluate((el) => getComputedStyle(el).clipPath)
  expect(await clipPath()).toBe('inset(50%)')

  await skip(page).focus()
  expect(await clipPath()).toBe('none')
  await expect(skip(page)).toHaveText(
    'Skip SPARQL editor (go to endpoint selection)'
  )

  await page.keyboard.press('Enter')
  await expect(endpoint(page)).toBeFocused()
})

test('Tab from the skip control enters the editor', async ({ page }) => {
  await skip(page).focus()
  await page.keyboard.press('Tab')
  await expect(editor(page)).toBeFocused()
})
