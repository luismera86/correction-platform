import './index.css'

import App from './App'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeConfig } from './config/theme.config'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
     <ThemeConfig>
      <App />
    </ThemeConfig>
  </React.StrictMode>
)
