import { useEffect, useState } from "react"
import { GlassCard, GlassButton, usePageTitle, Icon } from "ifamished-ui"

export default function Download() {
  usePageTitle("OptiFine for Fabric | Download")

  const [versions, setVersions] = useState([])
  const [filtered, setFiltered] = useState([])

  // Filters
  const [releaseType, setReleaseType] = useState("all")
  const [mcVersion, setMcVersion] = useState("all")
  const [loader, setLoader] = useState("all")

  // Unique filter values
  const [mcVersions, setMcVersions] = useState([])
  const [loaders, setLoaders] = useState([])

  // Fetch Modrinth versions
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

      // Extract unique MC versions
      const mc = new Set()
      data.forEach(v => v.game_versions.forEach(g => mc.add(g)))
      setMcVersions(["all", ...Array.from(mc).sort().reverse()])

      // Extract unique loaders
      const ld = new Set()
      data.forEach(v => v.loaders.forEach(l => ld.add(l)))
      setLoaders(["all", ...Array.from(ld)])
    }

    load()
  }, [])

  // Apply filters
  useEffect(() => {
    let out = versions

    if (releaseType !== "all") {
      out = out.filter(v => v.version_type === releaseType)
    }

    if (mcVersion !== "all") {
      out = out.filter(v => v.game_versions.includes(mcVersion))
    }

    if (loader !== "all") {
      out = out.filter(v => v.loaders.includes(loader))
    }

    setFiltered(out)
  }, [releaseType, mcVersion, loader, versions])

  return (
    <div className="page">
      <div className="page-header fade-in-up">
        <h1>Download</h1>
        <p>
          Choose the release that matches your Minecraft version. All releases
          are fetched live from Modrinth.
        </p>
      </div>

      {/* Filters */}
      <section className="section fade-in-up">
        <div className="tech-tag-list" style={{ justifyContent: "center", marginBottom: "var(--space-3)" }}>
          {/* Release type */}
          <span
            className={`tech-tag ${releaseType === "all" ? "active" : ""}`}
            onClick={() => setReleaseType("all")}
          >
            All
          </span>
          <span
            className={`tech-tag ${releaseType === "release" ? "active" : ""}`}
            onClick={() => setReleaseType("release")}
          >
            Release
          </span>
          <span
            className={`tech-tag ${releaseType === "beta" ? "active" : ""}`}
            onClick={() => setReleaseType("beta")}
          >
            Beta
          </span>
          <span
            className={`tech-tag ${releaseType === "alpha" ? "active" : ""}`}
            onClick={() => setReleaseType("alpha")}
          >
            Alpha
          </span>
        </div>

        {/* MC Version Filter */}
        <div className="tech-tag-list" style={{ justifyContent: "center", marginBottom: "var(--space-3)" }}>
          {mcVersions.map(v => (
            <span
              key={v}
              className={`tech-tag ${mcVersion === v ? "active" : ""}`}
              onClick={() => setMcVersion(v)}
            >
              {v === "all" ? "All Versions" : v}
            </span>
          ))}
        </div>

        {/* Loader Filter */}
        <div className="tech-tag-list" style={{ justifyContent: "center", marginBottom: "var(--space-4)" }}>
          {loaders.map(l => (
            <span
              key={l}
              className={`tech-tag ${loader === l ? "active" : ""}`}
              onClick={() => setLoader(l)}
            >
              {l === "all" ? "All Loaders" : l}
            </span>
          ))}
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

                <div className="tech-tag-list" style={{ justifyContent: "center" }}>
                  {v.loaders.map(loader => (
                    <span key={loader} className="tech-tag">
                      {loader}
                    </span>
                  ))}
                </div>
              </div>

              <div className="download-actions">
                <GlassButton href={v.files[0]?.url} variant="primary" block>
                  <Icon name="download" size={15} />
                  Download on Modrinth
                </GlassButton>
                <GlassButton to="/install" variant="ghost" block>
                  <Icon name="tool" size={15} />
                  Installation Guide
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
