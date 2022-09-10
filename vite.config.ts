import { defineConfig, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import tsconfigPaths from 'vite-tsconfig-paths'

/**
 * @link https://vitejs.dev/config/
 */
export default defineConfig(({ ssrBuild }) => {
  const plugins = [
    tsconfigPaths(),
    react(),
    vanillaExtractPlugin(),
    splitVendorChunkPlugin(),
  ]

  return ssrBuild
    ? {
        plugins,
        publicDir: false,
        build: {
          outDir: './dist/server',
          rollupOptions: { input: './src/client/server.entry' },
        },
      }
    : {
        plugins,
        publicDir: './src/client/public',
        build: {
          manifest: true,
          outDir: './dist/client',
          rollupOptions: { input: './src/client/index.html' },
        },
      }
})
