import { GlassCard, GlassButton, usePageTitle } from "ifamished-ui"

const versions = [
  { version: "1.20.6", label: "Latest", link: "https://modrinth.com/project/optifine-for-fabric" },
  { version: "1.20.4", label: "Previous", link: "https://modrinth.com/project/optifine-for-fabric/version/older" },
]

export default function Download() {
  usePageTitle("OptiFine for Fabric | Download")

  return (
    <div className="page">
      <div className="page-header fade-in-up">
        <h1>Download</h1>
        <p>Choose your Minecraft version.</p>
      </div>

      <section className="section">
        <div className="download-grid stagger">
          {versions.map((v, i) => (
            <GlassCard
              key={v.version}
              className="download-card fade-in-up"
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <h3>{v.label}</h3>
              <p className="text-muted">Minecraft {v.version}</p>

              <GlassButton href={v.link} variant="primary" block>
                Modrinth
              </GlassButton>
            </GlassCard>
          ))}
        </div>
      </section>
    </div>
  )
}
