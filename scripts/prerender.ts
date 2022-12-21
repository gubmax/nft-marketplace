/**
 * Pre-render the app into static HTML.
 * run `pnpm prerender` and then `dist/client` can be served as a static site.
 */
import assert from 'node:assert'
import { writeFileSync } from 'node:fs'

import pc from 'picocolors'

import type { bootstrap } from 'server/bootstrap.js'
import { resolvePath } from 'server/common/helpers/paths.js'
import { ROUTES } from 'server/routes.js'

process.env.NODE_ENV = 'production'
process.env.BUILD_ENV = 'prerender'

console.log(`${pc.cyan('pre-render script')} ${pc.green('generating HTML files...')}`)

// @ts-expect-error: Production js without declaration file
const module = (await import('../dist/server')) as { default: typeof bootstrap }
const { server } = await module.default()

function writePageFile(name: string, html: string) {
  const fileName = `${name}.html`
  writeFileSync(resolvePath(`dist/client/${fileName}`), html)
  console.log(`${pc.dim('dist/client/')}${pc.green(`${fileName}`)}`)
}

// Pre-render app pages

for (const url in ROUTES) {
  const pageConfig = ROUTES[url]
  assert(pageConfig, `Page config for url "${url}" not found`)

  const res = await server.inject(url)
  writePageFile(pageConfig.name, res.body)
}

// Pre-render Not Found page

const notFoundRes = await server.inject('/not-found')
writePageFile('not-found', notFoundRes.body)

// Pre-render Error page

const errorRes = await server.inject('/error')
writePageFile('error', errorRes.body)

process.exit(0)
