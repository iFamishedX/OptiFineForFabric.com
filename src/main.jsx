import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

// Shared UI package styles
import "ifamished-ui/styles/globals.css"
import "ifamished-ui/styles/themes/aqua.css"
import "ifamished-ui/styles/components.css"

// Site-specific background styles
import "./styles/background.css"

import App from "./App.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
