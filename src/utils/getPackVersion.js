// getPackVersion.js
export function getPackVersion(raw) {
  // Legacy
  if (raw.endsWith("-legacy")) return "Legacy"

  // Strip channel suffix: -alpha.1, -beta.2, -hotfix.1
  const base = raw.replace(/-(alpha|beta|hotfix)\.?(\d+)?$/i, "")
  const parts = base.split(".")

  const [major, minor = "0", patch = "0"] = parts

  // patch > 0 → v4.1.11
  if (patch !== "0") return `v${major}.${minor}.${patch}`

  // minor > 0 → v4.1
  if (minor !== "0") return `v${major}.${minor}`

  // major only → v4
  return `v${major}`
}
