import { describe, it, expect } from 'vitest'
import { formatDuration } from '../../src/lib/formatDuration.js'

describe('formatDuration', () => {
  it.each([
    [0, '0 min 0.000 s'],
    [7, '0 min 0.007 s'],
    [1234, '0 min 1.234 s'],
    [59999, '0 min 59.999 s'],
    [61005, '1 min 1.005 s'],
    [3600000, '60 min 0.000 s'],
  ])('shows %d ms as "%s"', (ms, expected) => {
    expect(formatDuration(ms)).toBe(expected)
  })

  it('rounds to the nearest millisecond', () => {
    expect(formatDuration(1.6)).toBe('0 min 0.002 s')
  })
})
