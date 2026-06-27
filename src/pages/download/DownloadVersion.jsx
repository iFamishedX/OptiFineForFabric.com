import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { GlassCard, GlassButton, Icon, usePageTitle } from "ifamished-ui"

export default function DownloadVersion() {
  const { version } = useParams()
  const [data, setData] = useState(null)

  usePageTitle(`Download ${version}`)

  useEffect(() => {
    async function load() {
      const res = await fetch(
        `https://api.modrinth.com/v2/project/optifine-for-fabric/version/${version}`
      )
      const json = await res.json()
      setData(json)
    }
    load()
  }, [version])

  if (!data) return <p>Loading…</p>

  const file = data.files.find(f => f.primary) || data.files[0]

  return (
    <div className="page fade-in-up">
      <h1>{data.name}</h1>
      <p className="version-subtitle">
        Minecraft {data.game_versions.join(", ")} • {data.version_type}
      </p>

      <GlassCard className="version-card">
        <h2>Changelog</h2>
        <pre className="changelog">{data.changelog}</pre>

        <div className="version-links">
          <GlassButton
            href={file.url}
            variant="primary"
          >
            <Icon name="download" size={16} />
            Raw Download
          </GlassButton>

          <GlassButton
            href={`modrinth://version/${data.id}`}
            variant="ghost"
          >
            <Icon name="modrinth" size={16} />
            Open in Modrinth App
          </GlassButton>
        </div>
      </GlassCard>
    </div>
  )
}
