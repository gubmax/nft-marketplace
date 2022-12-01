import react from '@vitejs/plugin-react'
import { CSSOptions, defineConfig, splitVendorChunkPlugin } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

/**
 * @link https://vitejs.dev/config/
 */
export default defineConfig(({ ssrBuild, mode }) => {
  const plugins = [tsconfigPaths(), react(), splitVendorChunkPlugin()]

  const css: CSSOptions = {
    modules: {
      localsConvention: 'camelCaseOnly',
      generateScopedName:
        mode === 'production' ? '[hash:base64:5]' : '[folder]__[local]-[hash:base64:5]',
    },
  }

  return ssrBuild
    ? {
        css,
        plugins,
        publicDir: false,
        build: {
          outDir: './dist/server',
          rollupOptions: {
            input: ['./src/client/entries/app.server', './src/client/entries/error.server'],
          },
        },
      }
    : {
        css,
        plugins,
        publicDir: './src/client/public',
        build: {
          manifest: true,
          outDir: './dist/client',
          rollupOptions: {
            input: ['./src/client/entries/app.client', './src/client/entries/error.client'],
          },
        },
      }
})
