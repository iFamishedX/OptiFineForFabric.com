import { GlassCard, usePageTitle } from "ifamished-ui"

export default function FAQ() {
  usePageTitle("OptiFine for Fabric | FAQ")

  return (
    <div className="page">
      <div className="page-header fade-in-up">
        <h1>FAQ</h1>
      </div>

      <section className="section">
        <GlassCard className="faq fade-in-up">
          <details>
            <summary>Is this an official OptiFine port?</summary>
            <p>No — this is a Fabric‑native alternative.</p>
          </details>

          <details>
            <summary>Does it support shaders?</summary>
            <p>Yes — via Iris.</p>
          </details>

          <details>
            <summary>Is it compatible with modpacks?</summary>
            <p>Yes — it’s lightweight and modular.</p>
          </details>
        </GlassCard>
      </section>
    </div>
  )
}
