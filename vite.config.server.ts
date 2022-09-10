import { InlineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths'

const config: InlineConfig = {
  plugins: [tsconfigPaths()],
  appType: 'custom',
  server: { middlewareMode: true },
  build: { minify: false },
}

export default config
