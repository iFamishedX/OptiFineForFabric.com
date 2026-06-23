import { Navbar, Footer } from "ifamished-ui"

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
        {/* routes */}
      </div>

      <Footer
        brand="OptiFine for Fabric"
        socials={socials}
        footerNote={`© ${new Date().getFullYear()} OptiFine for Fabric. Not affiliated with Mojang or OptiFine.`}
      />
    </>
  )
}
