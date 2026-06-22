import { GlassCard, GlassButton, usePageTitle } from "ifamished-ui"

export default function Home() {
  usePageTitle("OptiFine for Fabric | Home")

  return (
    <div className="page">
      <section className="section">
        <GlassCard variant="hero" className="hero fade-in-up">
          <h1 className="hero-name">
            <span className="gradient-text">OptiFine for Fabric</span>
          </h1>

          <p className="hero-subtitle">
            A modern, Fabric‑native alternative to OptiFine — performance, visuals, and shaders.
          </p>

          <div className="hero-actions">
            <GlassButton to="/download" variant="primary">Download</GlassButton>
            <GlassButton to="/features">Features</GlassButton>
            <GlassButton to="/install" variant="ghost">Install</GlassButton>
          </div>
        </GlassCard>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>What is OptiFine for Fabric?</h2>
          <p>A lightweight, modern re‑imagining of OptiFine — built for Fabric.</p>
        </div>

        <div className="overview-grid stagger">
          <GlassCard className="overview-card">
            <h3>Performance</h3>
            <p>Powered by Sodium, Lithium, and modern Fabric optimizations.</p>
          </GlassCard>

          <GlassCard className="overview-card">
            <h3>Visual Enhancements</h3>
            <p>Connected textures, better skies, and visual polish.</p>
          </GlassCard>

          <GlassCard className="overview-card">
            <h3>Shader Support</h3>
            <p>Full Iris integration for shader packs.</p>
          </GlassCard>

          <GlassCard className="overview-card">
            <h3>Modpack Friendly</h3>
            <p>Lightweight, modular, and compatible with most Fabric setups.</p>
          </GlassCard>
        </div>
      </section>
    </div>
  )
}
