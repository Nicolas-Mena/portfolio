import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// In CI (GitHub Actions), GITHUB_REPOSITORY is "user/repo-name"
// This sets the correct base path for GitHub Pages automatically
const base = process.env.GITHUB_REPOSITORY
  ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/`
  : '/'

export default defineConfig({
  plugins: [react()],
  base,
})
