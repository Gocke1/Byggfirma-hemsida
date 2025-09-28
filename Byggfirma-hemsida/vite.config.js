import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

const repoBase = process.env.VITE_PUBLIC_BASE?.trim()

const computedBase = (() => {
  if (repoBase) {
    const normalized = repoBase.startsWith('/') ? repoBase : `/${repoBase}`
    return normalized.endsWith('/') ? normalized : `${normalized}/`
  }

  return '/'
})()

export default defineConfig({
  base: computedBase,
  plugins: [react(), tailwindcss()],
})
