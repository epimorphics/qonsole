// Query time as qonsole v1 showed it, e.g. "0 min 1.234 s"
export function formatDuration(elapsedMs) {
  const totalMs = Math.round(elapsedMs)
  const ms = totalMs % 1000
  const s = Math.floor(totalMs / 1000) % 60
  const m = Math.floor(totalMs / 60000)
  return `${m} min ${s}.${String(ms).padStart(3, '0')} s`
}
