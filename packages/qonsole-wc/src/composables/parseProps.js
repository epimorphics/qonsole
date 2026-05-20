export function parseJsonProp(raw, fallback = {}) {
  if (raw === null || raw === undefined || raw === '') return fallback
  if (typeof raw === 'object') return raw
  try { return JSON.parse(raw) } catch { return fallback }
}
