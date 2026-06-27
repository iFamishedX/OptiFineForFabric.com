export function getPackVersion(raw) {
  if (raw.endsWith("-legacy")) return "Legacy"

  const base = raw.split("-")[0]
  const parts = base.split(".")

  const [major, minor = "0", patch = "0"] = parts

  // patch > 0 → v4.1.11
  if (patch !== "0") return `v${major}.${minor}.${patch}`

  // patch = 0, minor > 0 → v4.1
  if (minor !== "0") return `v${major}.${minor}`

  // minor = 0 → v4
  return `v${major}`
}
