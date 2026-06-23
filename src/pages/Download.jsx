import { GlassCard, GlassButton, usePageTitle } from "ifamished-ui"
import Icon from "../components/Icon"

const versions = [
  {
    version: "1.21.4",
    badge: "latest",
    badgeLabel: "Latest",
    desc: "The most recent stable release. Recommended for all players starting fresh.",
    loader: "Fabric 0.16+",
    link: "https://modrinth.com/project/optifine-for-fabric",
  },
  {
    version: "1.21.1",
    badge: "stable",
    badgeLabel: "Stable",
    desc: "Long-term support release — ideal for modpack authors and server operators.",
    loader: "Fabric 0.15+",
    link: "https://modrinth.com/project/optifine-for-fabric",
  },
  {
    version: "1.20.6",
    badge: "previous",
    badgeLabel: "Previous",
    desc: "Previous stable release, still receiving critical fixes.",
    loader: "Fabric 0.15+",
    link: "https://modrinth.com/project/optifine-for-fabric",
  },
  {
    version: "1.20.4",
    badge: "legacy",
    badgeLabel: "Legacy",
    desc: "Older release kept available for modpack compatibility. No active updates.",
    loader: "Fabric 0.14+",
    link: "https://modrinth.com/project/optifine-for-fabric",
  },
]

export default function Download() {
  usePageTitle("OptiFine for Fabric | Download")

  return (
    <div className="page">
      <div className="page-header fade-in-up">
        <h1>Download</h1>
        <p>Choose the release that matches your Minecraft version. All releases are hosted on Modrinth.</p>
      </div>

      <section className="section">
        <div className="download-grid stagger">
          {versions.map((v) => (
            <GlassCard key={v.version} className="download-card">
              <div className="download-card-top">
                <div className="icon-badge">
                  <Icon name="cube" size={22} strokeWidth={1.75} />
                </div>

                <div className={`version-badge version-badge--${v.badge}`}>
                  <span className="version-badge-dot" />
                  {v.badgeLabel}
                </div>

                <span className="download-mc-label">Minecraft</span>
                <span className="download-version">{v.version}</span>

                <p className="download-desc">{v.desc}</p>

                <div className="project-stack" style={{ justifyContent: "center" }}>
                  <span className="tech-tag">{v.loader}</span>
                </div>
              </div>

              <div className="download-actions">
                <GlassButton href={v.link} variant="primary" block>
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
          <GlassButton to="/faq" variant="ghost">FAQ</GlassButton>
        </div>
      </div>
    </div>
  )
}
