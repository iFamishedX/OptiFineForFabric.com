export function getPackVersion(raw) {
  if (raw.endsWith("-legacy")) return "Legacy"

  const base = raw.split("-")[0]
  const parts = base.split(".")

  // 1-part or 2-part version
  if (parts.length === 1) return `v${parts[0]}`
  if (parts.length === 2 && parts[1] === "0") return `v${parts[0]}`

  // 3-part version always shown
  return `v${parts.join(".")}`
}
