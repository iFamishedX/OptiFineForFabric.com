import { GlassCard, usePageTitle } from "ifamished-ui"

const features = [
  "Sodium‑powered performance improvements",
  "Connected textures & visual enhancements",
  "Shader support via Iris",
  "Lightweight and modular",
  "Compatible with most Fabric modpacks",
]

export default function Features() {
  usePageTitle("OptiFine for Fabric | Features")

  return (
    <div className="page">
      <div className="page-header fade-in-up">
        <h1>Features</h1>
        <p>Everything included in the OptiFine for Fabric experience.</p>
      </div>

      <section className="section">
        <div className="features-grid stagger">
          {features.map((f) => (
            <GlassCard key={f} className="feature-card">
              <p>{f}</p>
            </GlassCard>
          ))}
        </div>
      </section>
    </div>
  )
}
