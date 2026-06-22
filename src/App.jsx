import { Routes, Route, Navigate } from "react-router-dom"
import { Navbar, Footer } from "ifamished-ui"

import Home from "./pages/Home"
import Download from "./pages/Download"
import Features from "./pages/Features"
import Install from "./pages/Install"
import FAQ from "./pages/FAQ"

export default function App() {
  return (
    <>
      <Navbar />
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
      <Footer />
    </>
  )
}
