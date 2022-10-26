/**
 * Pre-render the app into static HTML.
 * run `pnpm generate` and then `dist/static` can be served as a static site.
 */

import assert from 'node:assert'
import { readFileSync, writeFileSync } from 'node:fs'

import pc from 'picocolors'
import { Manifest } from 'vite'

import { PAGES_CONFIG } from '../src/server/config/pages.config'
import { AssetCollectorService } from '../src/server/modules/assetCollector/assetCollector.service'
import { RenderFn } from '../src/server/modules/render/render.service'

process.env.NODE_ENV = 'production'

console.log(`${pc.cyan('pre-render script')} ${pc.green('generating HTML files...')}`)

const read = (path: string) => readFileSync(new URL(path, import.meta.url), 'utf-8')
const write = (path: string, data: string) => writeFileSync(new URL(path, import.meta.url), data)

const template = read('../dist/client/src/client/index.html')
const manifest = JSON.parse(read('../dist/client/manifest.json')) as Manifest

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const { render } = (await import('../dist/server/server.entry.js')) as { render: RenderFn }

const pages: typeof PAGES_CONFIG = { ...PAGES_CONFIG, '*': { name: 'not-found' } }

// Pre-render each app page...
for (const url in pages) {
  const pageConfig = pages[url]

  assert(pageConfig, `Page config for url "${url}" not found`)

  const appHtml = await render({ url })

  const assetCollectorService = new AssetCollectorService()
  const preloadLinks = assetCollectorService.collectPreloadLinksByManifest(
    manifest,
    'src/client/index.html',
  )

  const html = template
    .replace('<!--preload-links-->', preloadLinks)
    .replace('<!--app-html-->', appHtml)

  const fileName = `${pageConfig.name}.html`
  write(`../dist/client/${fileName}`, html)

  console.log(`${pc.dim('dist/client/')}${pc.green(`${fileName}`)}`)
}
