import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeStore } from './utils/store/ThemeStore.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeStore>
    <App />
  </ThemeStore>
  // <React.StrictMode>
  // </React.StrictMode>,
)
