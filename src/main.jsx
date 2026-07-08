import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

// Shared UI package styles
import "ifamished-ui/styles/index.css"
import "ifamished-ui/styles/themes/premium/galaxy.css"
// Dream

// Site-specific styles
import "./styles/background.css"
import "./styles/overrides.css"

import App from "./App.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
