import { GlassCard, GlassButton, usePageTitle } from "ifamished-ui"

const steps = [
  {
    title: "Install Fabric Loader",
    desc: (
      <>
        Download and run the{" "}
        <a href="https://fabricmc.net/use/installer/" target="_blank" rel="noopener noreferrer">
          Fabric Installer
        </a>
        . Select your Minecraft version and click <strong>Install</strong>. The installer will
        create a new Fabric profile in your launcher automatically.
      </>
    ),
    tags: ["fabricmc.net/use/installer"],
  },
  {
    title: "Download OptiFine for Fabric",
    desc: (
      <>
        Go to the <strong>Download</strong> page and grab the JAR for your Minecraft version.
        Make sure the loader version matches what you installed in step 1.
      </>
    ),
    tags: ["Modrinth"],
  },
  {
    title: "Place the JAR in your mods folder",
    desc: (
      <>
        Open your Minecraft directory and place the downloaded <code>.jar</code> inside the{" "}
        <code>mods/</code> folder. On Windows this is{" "}
        <code>%AppData%\.minecraft\mods</code>. On macOS it is{" "}
        <code>~/Library/Application Support/minecraft/mods</code>.
      </>
    ),
    tags: ["%AppData%\\.minecraft\\mods"],
  },
  {
    title: "Launch the Fabric profile",
    desc: "Open your launcher, select the Fabric profile created in step 1, and hit Play. OptiFine for Fabric loads automatically with Minecraft.",
    tags: [],
  },
]

const troubleshooting = [
  "Game won't launch — check that the Fabric Loader version matches the mod's required version.",
  "Shaders not working — confirm Iris is present in the mods folder as a separate dependency.",
  "Connected textures missing — verify your resource pack is OptiFine-format compatible.",
  "Low FPS after installing — try removing other rendering mods that may conflict with Sodium.",
  "Crash on startup — check the crash log in .minecraft/crash-reports for the failing mod.",
]

export default function Install() {
  usePageTitle("OptiFine for Fabric | Install")

  return (
    <div className="page">
      <div className="page-header fade-in-up">
        <h1>Installation Guide</h1>
        <p>Get up and running in four steps. No prior modding experience required.</p>
      </div>

      {/* Steps */}
      <section className="section">
        <div className="install-steps-list fade-in-up">
          {steps.map(({ title, desc, tags }, i) => (
            <GlassCard key={title} className="install-step">
              <div className="install-step-number">{i + 1}</div>
              <div className="install-step-body">
                <h3>{title}</h3>
                <p>{desc}</p>
                {tags.length > 0 && (
                  <div className="project-stack" style={{ marginTop: "var(--space-1)" }}>
                    {tags.map((tag) => (
                      <span key={tag} className="tech-tag">{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="section">
        <div className="section-header">
          <h2>Troubleshooting</h2>
          <p>Common issues and how to fix them.</p>
        </div>

        <GlassCard className="fade-in-up">
          <ul className="project-list">
            {troubleshooting.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </GlassCard>
      </section>

      <div className="cta-section fade-in-up">
        <h2>Still stuck?</h2>
        <p>Ask in the Discord server or check the FAQ for more answers.</p>
        <div className="cta-actions">
          <GlassButton href="https://discord.com/users/iFamished" variant="primary">
            Join Discord
          </GlassButton>
          <GlassButton to="/faq" variant="ghost">FAQ</GlassButton>
        </div>
      </div>
    </div>
  )
}
