/**
 * Pre-render the app into static HTML.
 * run `pnpm generate` and then `dist/static` can be served as a static site.
 */

import assert from 'node:assert';
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { Manifest } from 'vite';
import pc from 'picocolors'

import { PAGES_CONFIG } from '../src/server/config/pages.config'
import { AssetCollectorService } from '../src/server/modules/assetCollector/assetCollector.service'

process.env.NODE_ENV = 'production'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const resolve = (p: string): string => path.resolve(__dirname, p)

// Start pre-render

console.log(`${pc.cyan('pre-render script')} ${pc.green('generating HTML files...')}`)

const prerenderedHtml: string[] = []

const template = readFileSync(resolve('../dist/client/src/client/index.html'), 'utf-8')
const { render } = await import('../dist/server/server.entry.js')

const manifest = JSON.parse(
  readFileSync(resolve('../dist/client/manifest.json'), 'utf-8')
) as Manifest;

// Pre-render each app page...
for (const url in PAGES_CONFIG) {
  const pageConfig = PAGES_CONFIG[url]

  assert(pageConfig, `Page config for url "${url}" not found`)

  const appHtml = render({ url })

  const assetCollectorService = new AssetCollectorService()
  const preloadLinks = assetCollectorService.collectPreloadLinksByManifest(
    manifest,
    'src/client/index.html'
  )

  const html = template
    .replace('<!--preload-links-->', preloadLinks)
    .replace(`<!--app-html-->`, appHtml)

  const fileName = `${pageConfig.name}.html`
  const filePath = `../dist/client/${fileName}`
  writeFileSync(resolve(filePath), html)

  prerenderedHtml.push(fileName)

  console.log(`${pc.dim('dist/client/')}${pc.green(`${fileName}`)}`)
}
