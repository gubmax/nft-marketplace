import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

/**
 * @link https://vitejs.dev/config/
 */
export default defineConfig({
  plugins: [tsconfigPaths({ projects: ['tsconfig.node.json'] })],
  build: { minify: false },
  server: { hmr: false },
  clearScreen: false,
  optimizeDeps: {
    disabled: true,
    entries: [],
  }
})