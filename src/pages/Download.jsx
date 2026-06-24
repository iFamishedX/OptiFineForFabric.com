import { useEffect, useState } from "react"
import { GlassCard, GlassButton, usePageTitle, Icon, Dropdown } from "ifamished-ui"

export default function Download() {
  usePageTitle("OptiFine for Fabric | Download")

  const [versions, setVersions] = useState([])
  const [filtered, setFiltered] = useState([])

  const [releaseType, setReleaseType] = useState("All")
  const [mcVersion, setMcVersion] = useState("All")

  const [mcVersions, setMcVersions] = useState([])

  useEffect(() => {
    async function load() {
      const res = await fetch(
        "https://api.modrinth.com/v2/project/optifine-for-fabric/version"
      )
      const data = await res.json()

      data.sort(
        (a, b) => new Date(b.date_published) - new Date(a.date_published)
      )

      setVersions(data)
      setFiltered(data)

      const mc = new Set()
      data.forEach(v => v.game_versions.forEach(g => mc.add(g)))
      setMcVersions(["All", ...Array.from(mc).sort().reverse()])
    }

    load()
  }, [])

  useEffect(() => {
    let out = versions

    if (releaseType !== "All") {
      out = out.filter(v => v.version_type === releaseType.toLowerCase())
    }

    if (mcVersion !== "All") {
      out = out.filter(v => v.game_versions.includes(mcVersion))
    }

    setFiltered(out)
  }, [releaseType, mcVersion, versions])

  return (
    <div className="page">
      <div className="page-header fade-in-up">
        <h1>Download</h1>
        <p>Choose the release that matches your Minecraft version.</p>
      </div>

      {/* Filters */}
      <section className="section fade-in-up">
        <div className="tech-tag-list" style={{ justifyContent: "center", marginBottom: "var(--space-4)" }}>
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
        </div>
      </section>

      {/* Versions */}
      <section className="section">
        <div className="download-grid stagger">
          {filtered.map(v => (
            <GlassCard key={v.id} className="download-card">
              <div className="download-card-top">
                <div className="icon-badge">
                  <Icon name="cube" size={22} strokeWidth={1.75} />
                </div>

                <div className={`version-badge version-badge--${v.version_type}`}>
                  <span className="version-badge-dot" />
                  {v.version_type}
                </div>

                <span className="download-mc-label">Minecraft</span>
                <span className="download-version">{v.version_number}</span>

                <p className="download-desc">{v.name}</p>
              </div>

              <div className="download-actions">
                <GlassButton href={v.files[0]?.url} variant="primary" block>
                  <Icon name="download" size={15} />
                  Download on Modrinth
                </GlassButton>
              </div>
            </GlassCard>
          ))}
        </div>
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
