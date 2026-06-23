import { GlassCard, GlassButton, usePageTitle } from "ifamished-ui"

const highlights = [
  {
    icon: "⚡",
    title: "Performance",
    desc: "Powered by Sodium, Lithium, and Starlight — massive FPS gains over vanilla.",
  },
  {
    icon: "🎨",
    title: "Visual Enhancements",
    desc: "Connected textures, custom skies, zoom, and dynamic lighting out of the box.",
  },
  {
    icon: "✨",
    title: "Shader Support",
    desc: "Full Iris integration. Drop in any OptiFine-compatible shader pack and go.",
  },
  {
    icon: "🧩",
    title: "Modpack Friendly",
    desc: "Lightweight and modular — slots into almost any Fabric modpack without conflict.",
  },
]

const techTags = ["Fabric", "Sodium", "Iris", "Lithium", "Starlight", "Indium"]

export default function Home() {
  usePageTitle("OptiFine for Fabric")

  return (
    <div className="page">
      {/* Hero */}
      <section className="section">
        <GlassCard variant="hero" className="hero fade-in-up">
          <h1 className="hero-name">
            <span className="gradient-text">OptiFine for Fabric</span>
          </h1>

          <p className="hero-subtitle">
            The modern, Fabric-native replacement for OptiFine — faster rendering,
            beautiful shaders, and zero compromises.
          </p>

          <div className="project-stack" style={{ justifyContent: "center", marginBottom: "var(--space-4)" }}>
            {techTags.map((tag) => (
              <span key={tag} className="tech-tag">{tag}</span>
            ))}
          </div>

          <div className="hero-actions">
            <GlassButton to="/download" variant="primary">Download</GlassButton>
            <GlassButton to="/features">Features</GlassButton>
            <GlassButton to="/install" variant="ghost">Install Guide</GlassButton>
          </div>
        </GlassCard>
      </section>

      {/* Overview */}
      <section className="section">
        <div className="section-header">
          <h2>What is OptiFine for Fabric?</h2>
          <p>
            A curated collection of the best Fabric performance and visual mods,
            pre-configured to work together — giving you everything OptiFine offered
            and more.
          </p>
        </div>

        <div className="overview-grid stagger">
          {highlights.map(({ icon, title, desc }) => (
            <GlassCard key={title} className="overview-card">
              <span className="overview-icon">{icon}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="cta-section fade-in-up">
        <h2>Ready to get started?</h2>
        <p>Download the latest release and follow the installation guide — you'll be up and running in minutes.</p>
        <div className="cta-actions">
          <GlassButton to="/download" variant="primary">Get the Latest Release</GlassButton>
          <GlassButton to="/install" variant="ghost">Installation Guide</GlassButton>
        </div>
      </div>
    </div>
  )
}
