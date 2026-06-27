import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { GlassButton, Icon, usePageTitle } from "ifamished-ui"
import ReactMarkdown from "react-markdown"

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

  const mc = data.game_versions[0]
  const type = data.version_type.charAt(0).toUpperCase() + data.version_type.slice(1)

  // Extract pack version (v5, v4.1, etc.)
  const base = data.version_number.split("-")[0]
  const [major, minor] = base.split(".")
  const packVersion = minor ? `v${major}.${minor}` : `v${major}`

  return (
    <div className="page version-page fade-in-up">

      {/* Title */}
      <h1 className="version-title">
        OptiFine for Fabric {packVersion}
      </h1>

      {/* Tags */}
      <div className="version-tags">
        <span>[Minecraft {mc}]</span>
        <span>[{type}]</span>
      </div>

      {/* Actions */}
      <div className="version-actions">
        <GlassButton
          variant="primary"
          href={`modrinth://version/${data.id}`}
        >
          <Icon name="modrinth" size={16} />
          Open in Modrinth App
        </GlassButton>

        <GlassButton
          variant="ghost"
          href={file.url}
        >
          <Icon name="download" size={16} />
          Raw Download
        </GlassButton>
      </div>

      {/* Changelog */}
      <section className="version-changelog">
        <h2>Changelog</h2>
        <ReactMarkdown className="markdown-body">
          {data.changelog || "_No changelog provided._"}
        </ReactMarkdown>
      </section>
    </div>
  )
}
