import { useEffect, useState } from "react"
import {
  GlassCard,
  GlassButton,
  usePageTitle,
  Icon,
  Dropdown,
  Searchbar
} from "ifamished-ui"

// -----------------------------
// PACK VERSION PARSER (FINAL)
// -----------------------------
function getPackVersion(raw) {
  // Legacy rule
  if (raw.endsWith("-legacy")) {
    return "Legacy"
  }

  // Remove channel suffix
  const base = raw.split("-")[0] // e.g. "4.1.11"

  const parts = base.split(".")
  const major = parts[0]
  const minor = parts[1]

  // If minor missing OR "0", drop it
  if (!minor || minor === "0") {
    return `v${major}`
  }

  return `v${major}.${minor}`
}

export default function Download() {
  usePageTitle("OptiFine for Fabric | Download")

  const [versions, setVersions] = useState([])
  const [filtered, setFiltered] = useState([])

  const [releaseType, setReleaseType] = useState("All")
  const [mcVersion, setMcVersion] = useState("All")
  const [packVersion, setPackVersion] = useState("All")
  const [search, setSearch] = useState("")

  const [mcVersions, setMcVersions] = useState([])
  const [packVersions, setPackVersions] = useState([])

  // -----------------------------
  // LOAD DATA
  // -----------------------------
  useEffect(() => {
    async function load() {
      const res = await fetch(
        "https://api.modrinth.com/v2/project/optifine-for-fabric/version"
      )
      const data = await res.json()

      // Sort newest → oldest
      data.sort(
        (a, b) => new Date(b.date_published) - new Date(a.date_published)
      )

      setVersions(data)
      setFiltered(data)

      // -----------------------------
      // Build MC version list
      // -----------------------------
      const mc = new Set()
      data.forEach(v => v.game_versions.forEach(g => mc.add(g)))
      setMcVersions(["All", ...Array.from(mc).sort().reverse()])

      // -----------------------------
      // Build Pack Version list
      // -----------------------------
      const pv = new Set()
      data.forEach(v => pv.add(getPackVersion(v.version_number)))

      let pvList = Array.from(pv)

      // Remove Legacy temporarily
      const legacyIndex = pvList.indexOf("Legacy")
      if (legacyIndex !== -1) pvList.splice(legacyIndex, 1)

      // Sort pack versions descending by major/minor
      pvList.sort((a, b) => {
        if (a === "Legacy") return 1
        if (b === "Legacy") return -1

        const pa = a.replace("v", "").split(".").map(Number)
        const pb = b.replace("v", "").split(".").map(Number)

        // Compare major
        if (pa[0] !== pb[0]) return pb[0] - pa[0]

        // Compare minor
        return (pb[1] || 0) - (pa[1] || 0)
      })

      // Add Legacy at bottom
      if (legacyIndex !== -1) pvList.push("Legacy")

      setPackVersions(["All", ...pvList])
    }

    load()
  }, [])

  // -----------------------------
  // FILTERING
  // -----------------------------
  useEffect(() => {
    let out = versions

    // Release type filter
    if (releaseType !== "All") {
      out = out.filter(v => v.version_type === releaseType.toLowerCase())
    }

    // MC version filter
    if (mcVersion !== "All") {
      out = out.filter(v => v.game_versions.includes(mcVersion))
    }

    // Pack Version filter
    if (packVersion !== "All") {
      if (packVersion === "Legacy") {
        // Legacy rule
        out = out.filter(v => v.version_number.endsWith("-legacy"))
      } else {
        // Remove "v"
        const pv = packVersion.replace("v", "")
        const [pvMajor, pvMinor] = pv.split(".")

        out = out.filter(v => {
          const base = v.version_number.split("-")[0] // remove channel
          const parts = base.split(".")
          const major = parts[0]
          const minor = parts[1] || "0"

          // vX → match all X.*
          if (!pvMinor) {
            return major === pvMajor
          }

          // vX.Y → match all X.Y.*
          return major === pvMajor && minor === pvMinor
        })
      }
    }

    // Search filter (raw version + name + type)
    if (search.trim() !== "") {
      const s = search.toLowerCase()
      out = out.filter(v =>
        v.name.toLowerCase().includes(s) ||
        v.version_number.toLowerCase().includes(s) ||
        v.version_type.toLowerCase().includes(s)
      )
    }

    setFiltered(out)
  }, [releaseType, mcVersion, packVersion, search, versions])

  // -----------------------------
  // RENDER
  // -----------------------------
  return (
    <div className="page">
      <div className="page-header fade-in-up">
        <h1>Download</h1>
        <p>Choose the release that matches your Minecraft version.</p>
      </div>

      {/* Search */}
      <Searchbar value={search} onChange={setSearch} />

      {/* Filters */}
      <section className="section fade-in-up">
        <div
          className="download-filters"
          style={{
            justifyContent: "center",
            marginBottom: "var(--space-4)"
          }}
        >
          <Dropdown
            label="Release Type"
            value={releaseType}
            onChange={setReleaseType}
            options={["All", "release", "beta", "alpha"]}
          />

          <Dropdown
            label="Minecraft Version"
            value={mcVersion}
            onChange={setMcVersion}
            options={mcVersions}
          />

          <Dropdown
            label="Pack Version"
            value={packVersion}
            onChange={setPackVersion}
            options={packVersions}
          />
        </div>
      </section>

      {/* Versions */}
      <section className="section">
        {filtered.length === 0 ? (
          <div className="no-results fade-in-up">
            <p>No versions match your filters.</p>
            <GlassButton
              variant="ghost"
              onClick={() => {
                setReleaseType("All")
                setMcVersion("All")
                setPackVersion("All")
                setSearch("")
              }}
            >
              Reset Filters
            </GlassButton>
          </div>
        ) : (
          <div className="download-grid stagger">
            {filtered.map(v => (
              <GlassCard key={v.id} className="download-card">
                <div className="download-card-top">
                  <div
                    className={`version-badge version-badge--${v.version_type}`}
                  >
                    <span className="version-badge-dot" />
                    {v.version_type}
                  </div>

                  <span className="download-mc-label">Minecraft</span>
                  <span className="download-version">
                    {getPackVersion(v.version_number)}
                  </span>

                  <p className="download-desc">{v.name}</p>
                </div>

                <div className="download-actions">
                  <GlassButton
                    href={`https://modrinth.com/mod/optifine-for-fabric/version/${v.version_number}`}
                    variant="primary"
                    block
                  >
                    <Icon name="download" size={15} />
                    Download
                  </GlassButton>
                </div>
              </GlassCard>
            ))}
          </div>
        )}
      </section>

      <div className="cta-section fade-in-up">
        <h2>Need help?</h2>
        <p>Check the installation guide or ask in the Discord community.</p>
        <div className="cta-actions">
          <GlassButton to="/install">
            <Icon name="tool" size={16} />
            Installation Guide
          </GlassButton>
          <GlassButton to="/faq" variant="ghost">
            FAQ
          </GlassButton>
        </div>
      </div>
    </div>
  )
}
