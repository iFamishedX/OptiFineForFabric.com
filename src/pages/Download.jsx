import { GlassCard, GlassButton, usePageTitle } from "ifamished-ui"

const versions = [
  {
    version: "1.21.4",
    label: "Latest",
    desc: "The most recent stable release. Recommended for all players.",
    loader: "Fabric 0.16+",
    link: "https://modrinth.com/project/optifine-for-fabric",
  },
  {
    version: "1.21.1",
    label: "Stable",
    desc: "Long-term support release — ideal for modpack authors.",
    loader: "Fabric 0.15+",
    link: "https://modrinth.com/project/optifine-for-fabric",
  },
  {
    version: "1.20.6",
    label: "Previous",
    desc: "Previous stable release, still receiving critical fixes.",
    loader: "Fabric 0.15+",
    link: "https://modrinth.com/project/optifine-for-fabric",
  },
  {
    version: "1.20.4",
    label: "Legacy",
    desc: "Older release kept for modpack compatibility.",
    loader: "Fabric 0.14+",
    link: "https://modrinth.com/project/optifine-for-fabric",
  },
]

const labelStyles = {
  Latest:   { background: "rgba(34,211,238,0.15)",  border: "rgba(34,211,238,0.4)",  color: "var(--neon-cyan)" },
  Stable:   { background: "rgba(74,222,128,0.12)",  border: "rgba(74,222,128,0.35)", color: "#4ade80" },
  Previous: { background: "rgba(250,204,21,0.12)",  border: "rgba(250,204,21,0.3)",  color: "#facc15" },
  Legacy:   { background: "rgba(148,163,184,0.1)",  border: "rgba(148,163,184,0.25)", color: "var(--text-muted)" },
}

export default function Download() {
  usePageTitle("OptiFine for Fabric | Download")

  return (
    <div className="page">
      <div className="page-header fade-in-up">
        <h1>Download</h1>
        <p>Choose the release that matches your Minecraft version. All releases are available on Modrinth.</p>
      </div>

      <section className="section">
        <div className="download-grid stagger">
          {versions.map((v) => {
            const style = labelStyles[v.label] ?? labelStyles.Legacy
            return (
              <GlassCard key={v.version} className="download-card">
                <div className="download-header">
                  <span className="download-version">MC {v.version}</span>
                  <span
                    className="tech-tag"
                    style={{
                      background: style.background,
                      borderColor: style.border,
                      color: style.color,
                    }}
                  >
                    {v.label}
                  </span>
                </div>

                <p className="download-desc">{v.desc}</p>

                <div className="project-stack" style={{ justifyContent: "center" }}>
                  <span className="tech-tag">{v.loader}</span>
                </div>

                <div className="download-actions">
                  <GlassButton href={v.link} variant="primary" block>
                    Download on Modrinth
                  </GlassButton>
                  <GlassButton to="/install" variant="ghost" block>
                    Installation Guide
                  </GlassButton>
                </div>
              </GlassCard>
            )
          })}
        </div>
      </section>

      <div className="cta-section fade-in-up">
        <h2>Need help?</h2>
        <p>Check the installation guide or ask in the Discord community.</p>
        <div className="cta-actions">
          <GlassButton to="/install">Installation Guide</GlassButton>
          <GlassButton to="/faq" variant="ghost">FAQ</GlassButton>
        </div>
      </div>
    </div>
  )
}
