import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

const rawBase = import.meta.env.BASE_URL ?? '/'
const normalizedBase = rawBase.endsWith('/') && rawBase !== '/' ? rawBase.slice(0, -1) : rawBase
const routerBase = normalizedBase === '/' ? undefined : normalizedBase

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={routerBase}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
