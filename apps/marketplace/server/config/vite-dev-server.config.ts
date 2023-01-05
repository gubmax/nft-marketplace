import { InlineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export const VITE_DEV_SERVER_CONFIG: InlineConfig = {
	plugins: [tsconfigPaths()],
	appType: 'custom',
	server: { middlewareMode: true },
	build: { minify: false },
}
