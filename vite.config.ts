import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// m1atta.github.io is a USER/ORG Pages site (repo name = m1atta.github.io),
// so it is served from the domain root -> base stays "/".
// If you ever rename this to a PROJECT Pages repo (e.g. "portfolio"),
// change base to "/portfolio/".
export default defineConfig({
  plugins: [react()],
  base: '/',
})
