import { Routes, Route, Navigate } from "react-router-dom"
import { Navbar, Footer } from "ifamished-ui"

import Home from "./pages/Home"
import Download from "./pages/Download"
import Features from "./pages/Features"
import Install from "./pages/Install"
import FAQ from "./pages/FAQ"

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/download", label: "Download" },
  { to: "/features", label: "Features" },
  { to: "/install", label: "Install" },
  { to: "/faq", label: "FAQ" },
]

const socials = [
  { label: "GitHub", href: "https://github.com/iFamishedX/optifine-for-fabric" },
  { label: "Modrinth", href: "https://modrinth.com/project/optifine-for-fabric" },
  { label: "Discord", href: "https://discord.com/users/iFamished" },
]

export default function App() {
  return (
    <>
      <Navbar
        brand="OptiFine for Fabric"
        brandDotColor="#38bdf8"
        navItems={navItems}
      />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/download" element={<Download />} />
          <Route path="/features" element={<Features />} />
          <Route path="/install" element={<Install />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>

      <Footer
        brand="OptiFine for Fabric"
        socials={socials}
        footerNote={`© ${new Date().getFullYear()} OptiFine for Fabric. Not affiliated with Mojang or OptiFine.`}
      />
    </>
  )
}
