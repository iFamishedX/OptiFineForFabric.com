import { GlassCard, usePageTitle } from "ifamished-ui"

export default function Install() {
  usePageTitle("OptiFine for Fabric | Install")

  return (
    <div className="page">
      <div className="page-header fade-in-up">
        <h1>Installation</h1>
        <p>Three simple steps to get started.</p>
      </div>

      <section className="section">
        <GlassCard className="fade-in-up">
          <ol className="install-steps">
            <li><strong>1.</strong> Install Fabric Loader.</li>
            <li><strong>2.</strong> Download the OptiFine for Fabric JAR.</li>
            <li><strong>3.</strong> Place it in your <code>mods</code> folder.</li>
          </ol>
        </GlassCard>
      </section>
    </div>
  )
}
