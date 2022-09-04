import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

/**
 * @link https://vitejs.dev/config/
 */
export default defineConfig({
  build: { manifest: true },
  plugins: [react(), vanillaExtractPlugin()],
})
