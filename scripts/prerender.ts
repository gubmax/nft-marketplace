/**
 * Pre-render the app into static HTML.
 * run `pnpm generate` and then `dist/static` can be served as a static site.
 */

import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const resolve = (p: string) => path.resolve(__dirname, p)

const template = readFileSync(resolve('../dist/static/index.html'), 'utf-8')
const { render } = await import('../dist/server/entry-server.js')

// Determine routes to pre-render from src/pages
const routesToPrerender = ['/', '/about']

;(async () => {
  // Pre-render each route...
  for (const url of routesToPrerender) {
    const appHtml = render({ url })

    const html = template.replace(`<!--app-html-->`, appHtml)

    const filePath = `../dist/static${url === '/' ? '/index' : url}.html`
    writeFileSync(resolve(filePath), html)
    console.log('pre-rendered:', filePath)
  }
})()