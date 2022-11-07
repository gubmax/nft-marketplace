/**
 * Pre-render the app into static HTML.
 * run `pnpm prerender` and then `dist/client` can be served as a static site.
 */

import assert from 'node:assert'
import { writeFileSync } from 'node:fs'

import pc from 'picocolors'

import { resolvePath } from 'server/common/helpers/paths'
import { PAGES_CONFIG } from '../src/server/config/pages.config'
import { AssetCollectorService } from '../src/server/modules/assetCollector/assetCollector.service'
import { RenderService } from '../src/server/modules/render/render.service'

process.env.NODE_ENV = 'production'

console.log(`${pc.cyan('pre-render script')} ${pc.green('generating HTML files...')}`)

const assetCollectorService = new AssetCollectorService()
const renderService = new RenderService(assetCollectorService)

await renderService.init()

// Pre-render each app page...

const pages: typeof PAGES_CONFIG = { ...PAGES_CONFIG, '/*': { name: 'not-found' } }

for (const url in pages) {
  const pageConfig = pages[url]

  assert(pageConfig, `Page config for url "${url}" not found`)

  const html = await renderService.render({ url })

  const fileName = `${pageConfig.name}.html`
  writeFileSync(resolvePath(`dist/client/${fileName}`), html)

  console.log(`${pc.dim('dist/client/')}${pc.green(`${fileName}`)}`)
}
