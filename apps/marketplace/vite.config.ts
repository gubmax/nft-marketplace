import react from '@vitejs/plugin-react'
import unocss from 'unocss/vite'
import { CSSOptions, defineConfig, splitVendorChunkPlugin, UserConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

import { generateRoutesManifest } from './plugins/generate-routes-manifest.js'

/**
 * @link https://vitejs.dev/config/
 */
export default defineConfig(({ ssrBuild, mode }) => {
	const plugins = [
		tsconfigPaths({ root: '.' }),
		// @ts-expect-error: No correct import
		react(),
		// @ts-expect-error: No correct import
		unocss({ mode: 'global' }),
		splitVendorChunkPlugin(),
		generateRoutesManifest(),
	]

	const css: CSSOptions = {
		modules: {
			localsConvention: 'camelCaseOnly',
			generateScopedName: mode === 'production' ? '[hash:base64:5]' : '[folder]__[local]-[hash:base64:5]',
		},
	}

	const ssrConfig: UserConfig = {
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

	const spaConfig: UserConfig = {
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

	return ssrBuild ? ssrConfig : spaConfig
})
