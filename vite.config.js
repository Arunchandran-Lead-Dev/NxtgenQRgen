import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(() => {
  const isGithubPagesBuild = process.env.GITHUB_ACTIONS === 'true'

  return {
    base: isGithubPagesBuild ? '/nxtgenqr/' : '/',
    plugins: [react()],
  }
})
