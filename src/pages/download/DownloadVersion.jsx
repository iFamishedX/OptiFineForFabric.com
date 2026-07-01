import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { GlassButton, Icon, usePageTitle, MarkdownRenderer } from "ifamished-ui"
import { getPackVersion } from "../../utils/getPackVersion"

export default function DownloadVersion() {
  const { version } = useParams()
  const decodedVersion = decodeURIComponent(version)

  const [data, setData] = useState(null)

  const Spacer = <div style={{display: "block", height: 0, overflow: "hidden", borderTop: "0.0000001vh solid transparent"}} />

  usePageTitle(`Download ${decodedVersion}`)

  useEffect(() => {
    async function load() {
      const res = await fetch(
        `https://api.modrinth.com/v2/project/optifine-for-fabric/version/${decodedVersion}`
      )
      const json = await res.json()
      setData(json)
    }
    load()
  }, [decodedVersion])

  // -----------------------------
  // Deep-link detection logic
  // -----------------------------
  function tryOpenModrinth(versionId) {
    const deepLink = `modrinth://version/${versionId}`
    const fallbackUrl = `https://modrinth.com/version/${versionId}`

    let appOpened = false

    const onVisibility = () => {
      if (document.visibilityState === "hidden") {
        appOpened = true
      }
    }

    document.addEventListener("visibilitychange", onVisibility)

    const start = Date.now()
    window.location.href = deepLink

    setTimeout(() => {
      document.removeEventListener("visibilitychange", onVisibility)

      // If the browser never lost focus → app didn't open
      if (!appOpened) {
        window.location.href = fallbackUrl
      }
    }, 800)
  }

  if (!data) {
    return (
      <div className="page version-page fade-in-up">
        <p>Loading…</p>
      </div>
    )
  }

  const mc = data.game_versions[0]
  const packVersion = getPackVersion(data.version_number)

  const match = data.version_number.match(/-(alpha|beta|hotfix)\.?(\d+)?$/i)
  const channelType = match ? match[1] : data.version_type
  const channelNum = match ? match[2] : ""
  const channelLabel = channelNum
    ? `${channelType.charAt(0).toUpperCase() + channelType.slice(1)} ${channelNum}`
    : channelType.charAt(0).toUpperCase() + channelType.slice(1)

  return (
    <div className="page version-page fade-in-up">
      {Spacer}

      <h1 className="version-title">
        OptiFine for Fabric {packVersion}
      </h1>

      <div className="tech-tag-list">
        <span className="tech-tag">Minecraft {mc}</span>
        <span className="tech-tag">{channelLabel}</span>
      </div>

      <div className="version-actions">
        <GlassButton
          variant="primary"
          onClick={() => tryOpenModrinth(data.id)}
        >
          <Icon name="modrinth" size={16} />
          Open in Modrinth App
        </GlassButton>

        <GlassButton
          variant="ghost"
          href={`https://modrinth.com/modpack/optifine-for-fabric/version/${data.version_number}`}
        >
          <Icon name="download" size={16} />
          Direct Download
        </GlassButton>
      </div>

      <section className="version-changelog">
        <h2>Changelog</h2>

        <MarkdownRenderer
          text={data.changelog || "_No changelog provided._"}
        />
      </section>
    </div>
  )
}
