import { GlassCard, GlassButton, usePageTitle, Icon } from "ifamished-ui"

const steps = [
  {
    icon: "tool",
    title: "Install Fabric Loader",
    body: (
      <>
        Download and run the{" "}
        <a href="https://fabricmc.net/use/installer/" target="_blank" rel="noopener noreferrer">
          Fabric Installer
        </a>
        . Select your Minecraft version and click <strong>Install</strong>. The installer
        creates a new Fabric profile in your launcher automatically.
      </>
    ),
    tags: ["fabricmc.net/use/installer"],
  },
  {
    icon: "download",
    title: "Download OptiFine for Fabric",
    body: (
      <>
        Head to the <strong>Download</strong> page and grab the{" "}
        <span className="code-inline">.jar</span> for your Minecraft version. Confirm
        the required loader version matches what you installed in step 1.
      </>
    ),
    tags: ["Modrinth"],
  },
  {
    icon: "folder",
    title: "Place the JAR in your mods folder",
    body: (
      <>
        Open your Minecraft directory and drop the{" "}
        <span className="code-inline">.jar</span> inside the{" "}
        <span className="code-inline">mods/</span> folder.{" "}
        Windows: <span className="code-inline">%AppData%\.minecraft\mods</span>{" "}
        — macOS:{" "}
        <span className="code-inline">~/Library/Application Support/minecraft/mods</span>
      </>
    ),
    tags: [],
  },
  {
    icon: "play",
    title: "Launch the Fabric profile",
    body: "Open your launcher, select the Fabric profile created in step 1, and hit Play. OptiFine for Fabric loads automatically alongside Minecraft.",
    tags: [],
  },
]

const troubleshooting = [
  {
    heading: "Game won't launch",
    detail: "Verify the Fabric Loader version in your launcher matches the version required by the mod.",
  },
  {
    heading: "Shaders not working",
    detail: "Confirm Iris is present as a separate .jar in your mods folder — it is not bundled.",
  },
  {
    heading: "Connected textures missing",
    detail: "Your resource pack must use OptiFine-format CTM files. Not all packs support this.",
  },
  {
    heading: "Lower FPS after installing",
    detail: "Remove any other rendering mods (OptiFine .jar, Canvas, etc.) that may conflict with Sodium.",
  },
  {
    heading: "Crash on startup",
    detail: "Check .minecraft/crash-reports/ and look for the failing mod in the stack trace.",
  },
]

export default function Install() {
  usePageTitle("OptiFine for Fabric | Install")

  return (
    <div className="page">
      <div className="page-header fade-in-up">
        <h1>Installation Guide</h1>
        <p>Get up and running in four steps. No prior modding experience required.</p>
      </div>

      {/* Timeline steps */}
      <section className="section">
        <div className="install-timeline stagger">
          {steps.map(({ icon, title, body, tags }, i) => (
            <GlassCard key={title} className="install-step">
              <div className="install-step-number">
                <Icon name={icon} size={18} strokeWidth={1.75} />
              </div>

              <div className="install-step-body">
                <h3>{title}</h3>
                <p>{body}</p>

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
          <div className="section-label">Common issues</div>
          <h2>Troubleshooting</h2>
          <p>Quick fixes for the most frequent problems.</p>
        </div>

        <GlassCard className="fade-in-up">
          <ul className="trouble-list">
            {troubleshooting.map(({ heading, detail }) => (
              <li key={heading} className="trouble-item">
                <span className="trouble-icon">
                  <Icon name="warning" size={18} strokeWidth={1.75} />
                </span>
                <p>
                  <strong>{heading}</strong> — {detail}
                </p>
              </li>
            ))}
          </ul>
        </GlassCard>
      </section>

      <div className="cta-section fade-in-up">
        <h2>Still stuck?</h2>
        <p>Ask in the Discord server or browse the FAQ for more answers.</p>
        <div className="cta-actions">
          <GlassButton href="https://discord.com/users/iFamished" variant="primary">
            <Icon name="discord" size={16} />
            Join Discord
          </GlassButton>
          <GlassButton to="/faq" variant="ghost">FAQ</GlassButton>
        </div>
      </div>
    </div>
  )
}
