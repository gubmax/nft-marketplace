/**
 * Pre-render the app into static HTML.
 * run `pnpm prerender` and then `dist/client` can be served as a static site.
 */

import assert from 'node:assert'
import { writeFileSync } from 'node:fs'

import pc from 'picocolors'

import { resolvePath } from 'server/common/helpers/paths'
import { AssetCollectorService } from 'server/modules/assetCollector/assetCollector.service'
import { RenderService } from 'server/modules/render/render.service'
import { ROUTES } from 'server/routes'

process.env.NODE_ENV = 'production'

console.log(`${pc.cyan('pre-render script')} ${pc.green('generating HTML files...')}`)

const assetCollectorService = new AssetCollectorService()
const renderService = new RenderService(assetCollectorService)

await renderService.init()

function writePageFile(name: string, html: string) {
  const fileName = `${name}.html`
  writeFileSync(resolvePath(`dist/client/${fileName}`), html)
  console.log(`${pc.dim('dist/client/')}${pc.green(`${fileName}`)}`)
}

// Pre-render app pages

const pages: typeof ROUTES = { ...ROUTES, '/*': { name: 'not-found' } }

for (const url in pages) {
  const pageConfig = pages[url]
  assert(pageConfig, `Page config for url "${url}" not found`)

  const html = await renderService.renderPage({ url })
  writePageFile(pageConfig.name, html)
}

// Pre-render error page

const html = await renderService.renderError()
writePageFile('error', html)
