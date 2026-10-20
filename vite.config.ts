import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Relative base so the build works at a domain root or a GitHub Pages sub-path.
// Bind to IPv4 loopback: Node resolves "localhost" to ::1 only, which browsers
// resolving localhost to 127.0.0.1 can't reach (ERR_CONNECTION_REFUSED).
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
  server: { host: '127.0.0.1' },
  preview: { host: '127.0.0.1' },
})
