export function getPackVersion(raw) {
  if (raw.endsWith("-legacy")) return "Legacy"

  const base = raw.split("-")[0] // strip -alpha, -beta, etc.
  const [major, minor] = base.split(".")

  // collapse patch versions
  if (!minor) return `v${major}`
  return `v${major}.${minor}`
}
