import { GlassCard, GlassButton, usePageTitle, Icon } from "ifamished-ui"

const steps = [
  {
    icon: "download",
    title: "Install the Modrinth App",
    body: (
      <>
        Download the{" "}
        <a
          href="https://modrinth.com/app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Modrinth App
        </a>{" "}
        for Windows, macOS, or Linux. Run the installer and sign in (optional).
        The app automatically manages your Minecraft instances and modpacks.
      </>
    ),
    tags: ["modrinth.com/app"],
  },
  {
    icon: "folder",
    title: "Create or select an instance",
    body: (
      <>
        In the Modrinth App, click <strong>+ New Instance</strong> or choose an
        existing one. Select your Minecraft version and loader —{" "}
        <strong>Fabric</strong> is required for OptiFine for Fabric.
      </>
    ),
    tags: ["Fabric Loader"],
  },
  {
    icon: "download",
    title: "Add OptiFine for Fabric to the instance",
    body: (
      <>
        Open your instance, go to the <strong>Mods</strong> tab, and click{" "}
        <strong>Add Mod</strong>. Search for{" "}
        <strong>OptiFine for Fabric</strong> and install the version matching
        your Minecraft + Fabric Loader version.
      </>
    ),
    tags: ["Modrinth"],
  },
  {
    icon: "play",
    title: "Launch the instance",
    body: (
      <>
        Click <strong>Play</strong> inside the Modrinth App. The app handles all
        mod loading automatically — no manual file management required.
      </>
    ),
    tags: [],
  },
]

const troubleshooting = [
  {
    heading: "Mod not appearing in search",
    detail:
      "Ensure your instance is set to Fabric and the correct Minecraft version.",
  },
  {
    heading: "Shaders not working",
    detail:
      "Install Iris from the Mods tab — OptiFine for Fabric does not bundle shader support.",
  },
  {
    heading: "Connected textures missing",
    detail:
      "Your resource pack must include OptiFine-format CTM files. Not all packs support this.",
  },
  {
    heading: "Lower FPS after installing",
    detail:
      "Remove conflicting rendering mods (OptiFine .jar, Canvas, etc.) that override Sodium.",
  },
  {
    heading: "Game crashes on launch",
    detail:
      "Open the instance logs in the Modrinth App and check for a failing mod in the stack trace.",
  },
]

export default function Install() {
  usePageTitle("OptiFine for Fabric | Install")

  return (
    <div className="page">
      <div className="page-header fade-in-up">
        <h1>Installation Guide</h1>
        <p>Install OptiFine for Fabric using the Modrinth App — the easiest method.</p>
      </div>

      {/* Timeline steps */}
      <section className="section">
        <div className="install-timeline stagger">
          {steps.map(({ icon, title, body, tags }) => (
            <GlassCard key={title} className="install-step">
              <div className="install-step-number">
                <Icon name={icon} size={18} strokeWidth={1.75} />
              </div>

              <div className="install-step-body">
                <h3>{title}</h3>
                <p>{body}</p>

                {tags.length > 0 && (
                  <div
                    className="project-stack"
                    style={{ marginTop: "var(--space-1)" }}
                  >
                    {tags.map((tag) => (
                      <span key={tag} className="tech-tag">
                        {tag}
                      </span>
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
          <GlassButton
            href="https://discord.com/users/iFamished"
            variant="primary"
          >
            <Icon name="discord" size={16} />
            Join Discord
          </GlassButton>
          <GlassButton to="/faq" variant="ghost">
            FAQ
          </GlassButton>
        </div>
      </div>
    </div>
  )
}
