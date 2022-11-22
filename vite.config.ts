import react from '@vitejs/plugin-react'
import { defineConfig, splitVendorChunkPlugin } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

/**
 * @link https://vitejs.dev/config/
 */
export default defineConfig(({ ssrBuild, mode }) => {
  const plugins = [tsconfigPaths(), react(), splitVendorChunkPlugin()]

  const generateScopedName =
    mode === 'production' ? '[hash:base64:5]' : '[folder]__[local]-[hash:base64:5]'
  const css = { modules: { generateScopedName } }

  return ssrBuild
    ? {
        css,
        plugins,
        publicDir: false,
        build: {
          outDir: './dist/server',
          rollupOptions: { input: './src/client/entries/app.server' },
        },
      }
    : {
        css,
        plugins,
        publicDir: './src/client/public',
        build: {
          manifest: true,
          outDir: './dist/client',
          rollupOptions: { input: './src/client/entries/app.client' },
        },
      }
})
