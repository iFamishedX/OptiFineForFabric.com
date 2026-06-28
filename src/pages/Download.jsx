import { useEffect, useState } from "react"
import { GlassCard, usePageTitle, Dropdown, Searchbar } from "ifamished-ui"
import { useNavigate } from "react-router-dom"
import { getPackVersion } from "../utils/getPackVersion"

export default function Download() {
  usePageTitle("OptiFine for Fabric | Download")

  const [versions, setVersions] = useState([])
  const [filtered, setFiltered] = useState([])

  const [releaseType, setReleaseType] = useState("All")
  const [mcVersion, setMcVersion] = useState("All")
  const [packVersion, setPackVersion] = useState("All")
  const [search, setSearch] = useState("")

  const [mcVersions, setMcVersions] = useState([])
  const [packVersions, setPackVersions] = useState([])

  const navigate = useNavigate()

  // Load versions
  useEffect(() => {
    async function load() {
      const res = await fetch(
        "https://api.modrinth.com/v2/project/optifine-for-fabric/version"
      )
      const data = await res.json()

      data.sort((a, b) => new Date(b.date_published) - new Date(a.date_published))

      setVersions(data)
      setFiltered(data)

      // Minecraft versions
      const mc = new Set()
      data.forEach(v => v.game_versions.forEach(g => mc.add(g)))
      setMcVersions(["All", ...Array.from(mc).sort().reverse()])

      // Pack versions (collapsed, no patches)
      const pv = new Set()

      data.forEach(v => {
        const pvRaw = getPackVersion(v.version_number)

        if (pvRaw === "Legacy") return

        const parts = pvRaw.replace("v", "").split(".")
        if (parts.length === 3) return // exclude patch versions

        pv.add(pvRaw)
      })

      let pvList = Array.from(pv)

      // Sort: v5, v4.1, v4, v3, v2.2, v2.1, v2, v1.1, v1
      pvList.sort((a, b) => {
        const pa = a.replace("v", "").split(".").map(Number)
        const pb = b.replace("v", "").split(".").map(Number)

        if (pa[0] !== pb[0]) return pb[0] - pa[0]
        return (pb[1] || 0) - (pa[1] || 0)
      })

      pvList.push("Legacy")

      setPackVersions(["All", ...pvList])
    }

    load()
  }, [])

  // Filtering + stagger fix
  useEffect(() => {
    let out = versions

    if (releaseType !== "All") {
      out = out.filter(v => v.version_type === releaseType.toLowerCase())
    }

    if (mcVersion !== "All") {
      out = out.filter(v => v.game_versions.includes(mcVersion))
    }

    if (packVersion !== "All") {
      if (packVersion === "Legacy") {
        out = out.filter(v => v.version_number.endsWith("-legacy"))
      } else {
        out = out.filter(v => getPackVersion(v.version_number) === packVersion)
      }
    }

    if (search.trim() !== "") {
      const s = search.toLowerCase()
      out = out.filter(v =>
        v.name.toLowerCase().includes(s) ||
        v.version_number.toLowerCase().includes(s) ||
        v.version_type.toLowerCase().includes(s)
      )
    }

    setFiltered(out)

    requestAnimationFrame(() => {
      document.dispatchEvent(new Event("ifamished-ui-reveal"))
    })

  }, [releaseType, mcVersion, packVersion, search, versions])

  return (
    <div className="page">
      <div className="page-header fade-in-up">
        <h1>Download</h1>
        <p>Choose the release that matches your Minecraft version.</p>
      </div>

      <Searchbar value={search} onChange={setSearch} />

      <section className="section fade-in-up">
        <div className="download-filters">
          <Dropdown
            label="Release Type"
            value={releaseType}
            onChange={setReleaseType}
            options={["All", "release", "beta", "alpha"]}
          />

          <Dropdown
            label="Minecraft Version"
            value={mcVersion}
            onChange={setMcVersion}
            options={mcVersions}
          />

          <Dropdown
            label="Pack Version"
            value={packVersion}
            onChange={setPackVersion}
            options={packVersions}
          />
        </div>
      </section>

      <section className="section">
        <div
          className="download-grid stagger"
          key={filtered.length + releaseType + mcVersion + packVersion + search}
        >
          {filtered.map((v, i) => {
            const channelNum = v.version_number.match(/-(alpha|beta|hotfix)\.?(\d+)?$/i)?.[2] || ""
            const channelLabel = channelNum ? `${v.version_type.toUpperCase()} ${channelNum}` : v.version_type.toUpperCase()

            return (
              <GlassCard
                key={v.id}
                className="download-card"
                onClick={() => navigate(`/download/${v.version_number}`)}
                style={{ "--i": i, cursor: "pointer" }}
              >
                <div className="download-card-top">
                  <div className={`version-badge version-badge--${v.version_type}`}>
                    <span className="version-badge-dot" />
                    {channelLabel}
                  </div>

                  <span className="download-mc-label">
                    Minecraft {v.game_versions[0]}
                  </span>

                  <span className="download-version">
                    {getPackVersion(v.version_number)}
                  </span>

                  <p className="download-desc">
                    OptiFine for Fabric<br />
                    • {getPackVersion(v.version_number)} • {v.game_versions[0]} • {channelLabel} •
                  </p>
                </div>
              </GlassCard>
            )
          })}
        </div>
      </section>
    </div>
  )
}
