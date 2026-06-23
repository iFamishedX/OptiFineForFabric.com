import { GlassCard, GlassButton, usePageTitle } from "ifamished-ui"

const features = [
  {
    icon: "⚡",
    title: "Sodium Rendering Engine",
    desc: "Replaces the vanilla chunk rendering pipeline with a highly optimised modern implementation. Expect 2–5× FPS improvements on most hardware.",
  },
  {
    icon: "🔋",
    title: "Lithium Game Logic",
    desc: "Rewrites physics, mob AI, chunk scheduling, and more — speeding up server-side tick rates without changing gameplay.",
  },
  {
    icon: "⭐",
    title: "Starlight Lighting",
    desc: "Complete rewrite of Minecraft's lighting engine. Eliminates light-update lag and drastically speeds up chunk loading.",
  },
  {
    icon: "✨",
    title: "Iris Shader Support",
    desc: "Full support for OptiFine shader packs via Iris. Switch shaders in-game without restarting — even with Sodium running.",
  },
  {
    icon: "🎨",
    title: "Connected Textures",
    desc: "Continuity brings connected textures and emissive rendering. Glass panes connect, leaves blend, and custom resource packs shine.",
  },
  {
    icon: "🔭",
    title: "Zoom",
    desc: "Smooth, configurable zoom via Zoomify — bound to a key, adjustable scroll sensitivity, and no clunky FOV snapping.",
  },
  {
    icon: "💡",
    title: "Dynamic Lighting",
    desc: "Held torches and glowing items light up the world around you in real time — no shader required.",
  },
  {
    icon: "🧩",
    title: "Modpack Compatible",
    desc: "Every mod is independently removable. Use what you need, skip what you don't. Almost zero hard conflicts with common Fabric mods.",
  },
]

const vanillaLimits = [
  "Software renderer, no hardware optimisations",
  "Slow lighting engine, heavy chunk-load lag",
  "No shader support",
  "No connected textures",
  "No zoom",
  "No dynamic lighting",
]

const fabricAdvantages = [
  "Hardware-accelerated rendering via Sodium",
  "Rebuilt lighting engine — near-instant chunk loads",
  "Iris shader support — compatible with OptiFine packs",
  "Connected textures + emissive rendering via Continuity",
  "Configurable zoom with smooth interpolation",
  "Real-time dynamic lighting for held items",
]

export default function Features() {
  usePageTitle("OptiFine for Fabric | Features")

  return (
    <div className="page">
      <div className="page-header fade-in-up">
        <h1>Features</h1>
        <p>Everything included in the OptiFine for Fabric experience — and why each piece matters.</p>
      </div>

      {/* Feature cards */}
      <section className="section">
        <div className="features-grid stagger">
          {features.map(({ icon, title, desc }) => (
            <GlassCard key={title} className="feature-card">
              <span className="feature-icon">{icon}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Comparison */}
      <section className="section">
        <div className="section-header">
          <h2>Vanilla vs OptiFine for Fabric</h2>
          <p>A side-by-side look at what changes when you switch.</p>
        </div>

        <div className="compare-grid stagger">
          <GlassCard className="compare-card">
            <h3>Vanilla Minecraft</h3>
            <ul className="project-list">
              {vanillaLimits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard className="compare-card">
            <h3>
              <span className="gradient-text">OptiFine for Fabric</span>
            </h3>
            <ul className="project-list">
              {fabricAdvantages.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </section>

      <div className="cta-section fade-in-up">
        <h2>Convinced?</h2>
        <p>Download the latest release and see the difference for yourself.</p>
        <div className="cta-actions">
          <GlassButton to="/download" variant="primary">Download</GlassButton>
          <GlassButton to="/faq" variant="ghost">FAQ</GlassButton>
        </div>
      </div>
    </div>
  )
}
