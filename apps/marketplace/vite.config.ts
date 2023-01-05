import react from '@vitejs/plugin-react'
import { CSSOptions, defineConfig, splitVendorChunkPlugin } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

import { generateRoutesManifest } from './plugins/generateRoutesManifest.js'

/**
 * @link https://vitejs.dev/config/
 */
export default defineConfig(({ ssrBuild, mode }) => {
	const plugins = [tsconfigPaths({ root: '.' }), react(), splitVendorChunkPlugin(), generateRoutesManifest()]

	const css: CSSOptions = {
		modules: {
			localsConvention: 'camelCaseOnly',
			generateScopedName: mode === 'production' ? '[hash:base64:5]' : '[folder]__[local]-[hash:base64:5]',
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
						input: ['./client/entries/app.server', './client/entries/error.server'],
					},
				},
		  }
		: {
				css,
				plugins,
				publicDir: './client/public',
				build: {
					manifest: true,
					outDir: './dist/client',
					rollupOptions: {
						input: ['./client/entries/app.client', './client/entries/error.client'],
					},
				},
		  }
})
