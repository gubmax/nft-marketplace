/**
 * Pre-render the app into static HTML.
 * run `pnpm generate` and then `dist/static` can be served as a static site.
 */

import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { Manifest } from 'vite';

import { AssetCollectorService } from '../src/server/modules/assetCollector/assetCollector.service'

process.env.NODE_ENV = 'production'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const resolve = (p: string): string => path.resolve(__dirname, p)

const template = readFileSync(resolve('../dist/client/src/client/index.html'), 'utf-8')
const { render } = await import('../dist/server/server.entry.js')

// Determine routes to pre-render from src/pages
const routesToPrerender = ['/', '/about']

// Pre-render each route...
for (const url of routesToPrerender) {
  const appHtml = render({ url })

  const manifest = JSON.parse(
    readFileSync(resolve('../dist/client/manifest.json'), 'utf-8')
  ) as Manifest;

  const assetCollectorService = new AssetCollectorService()

  const preloadLinks = assetCollectorService.collectPreloadLinksByManifest(
    manifest,
    'src/client/index.html'
  )

  const html = template
    .replace('<!--preload-links-->', preloadLinks)
    .replace(`<!--app-html-->`, appHtml)

  const filePath = `../dist/client${url === '/' ? '/index' : url}.html`
  writeFileSync(resolve(filePath), html)
  console.log('pre-rendered:', filePath)
}
