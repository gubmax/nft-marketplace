/**
 * Pre-render the app into static HTML.
 * run `pnpm prerender` and then `dist/client` can be served as a static site.
 */
import fs from 'node:fs'
import { dirname } from 'node:path'

import pc from 'picocolors'

import { type Route } from 'plugins/generate-routes-manifest.js'
import { type bootstrap } from 'server/bootstrap.js'
import { resolvePath } from 'server/common/helpers/paths.js'

process.env.NODE_ENV = 'production'
process.env.BUILD_ENV = 'prerender'

const PATH_ROUTES_MANIFEST = 'dist/server/routes.manifest.json'

console.log(`${pc.cyan('pre-render script')} ${pc.green('creating HTML files for static routes...')}`)

// @ts-expect-error: Production js without declaration file
const module = (await import('../dist/server/main.js')) as { default: typeof bootstrap }
const { server } = await module.default()

function writePageFile(path: string, html: string) {
	const pathWithFilename = `${path}.html`
	const pagePath = resolvePath(`dist/client/${pathWithFilename}`)

	fs.mkdirSync(dirname(pagePath), { recursive: true })
	fs.writeFileSync(pagePath, html)

	console.log(`${pc.dim('dist/client/')}${pc.green(pathWithFilename)}`)
}

// Pre-render app pages

async function prerenderPages(routes: Route[]) {
	for (const route of routes) {
		if (!route.static) continue

		const res = await server.inject(route.path)
		writePageFile(`pages${route.path}`, res.body)

		if (route.children.length) await prerenderPages(route.children)
	}
}

const routesManifest = JSON.parse(fs.readFileSync(resolvePath(PATH_ROUTES_MANIFEST), 'utf-8')) as Route[]
await prerenderPages(routesManifest)

// Pre-render Not Found page

const notFoundRes = await server.inject('/not-found')
writePageFile('not-found', notFoundRes.body)

// Pre-render Error page

const errorRes = await server.inject('/error')
writePageFile('error', errorRes.body)
