export function getPackVersion(raw) {
  if (raw.endsWith("-legacy")) return "Legacy"

  const base = raw.split("-")[0]
  const parts = base.split(".")

  const major = parts[0]
  const minor = parts[1] || "0"
  const patch = parts[2] || "0"

  // If patch > 0 → keep full version
  if (patch !== "0") return `v${major}.${minor}.${patch}`

  // If patch = 0 and minor > 0 → v4.1
  if (minor !== "0") return `v${major}.${minor}`

  // If minor = 0 → v4
  return `v${major}`
}
