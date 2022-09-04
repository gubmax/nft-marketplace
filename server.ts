import { readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import fastify, { FastifyReply, FastifyRequest } from 'fastify'
import { Manifest, ViteDevServer } from 'vite'

import { collectPreloadLinksByManifest, collectPreloadLinksByModule } from './collectPreloadLinks'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const resolve = (p: string): string => path.resolve(__dirname, p)

type RenderFn = ({ url }: { url: string }) => string

async function createServer(
  root = process.cwd(),
  isProd = process.env.NODE_ENV === 'production',
) {

  const indexProd = isProd
    ? readFileSync(resolve('client/index.html'), 'utf-8')
    : ''

  const server = fastify()

  let manifest: Manifest
  let viteDevServer: ViteDevServer
  let preloadLinks: string

  if (isProd) {
    await server.register(import('@fastify/compress'))
    await server.register(import('@fastify/static'), {
      root: resolve('client'),
      index: false,
    })

    manifest = JSON.parse(readFileSync(resolve('client/manifest.json'), 'utf-8')) as Manifest
  } else {
    const vite = await import('vite')
    viteDevServer = await vite.createServer({
      root,
      appType: 'custom',
      server: { middlewareMode: true },
    })

    await server.register(import('@fastify/middie'))
    server.use(viteDevServer.middlewares)
  }

  async function renderHandler(req: FastifyRequest, res: FastifyReply): Promise<void> {
    try {
      const url = req.url
      let template: string
      let render: RenderFn

      if (isProd) {
        template = indexProd
        // @ts-ignore
        render = (await import('./server/entry-server.js')).render

        // Collect preload links
        preloadLinks = collectPreloadLinksByManifest(manifest, resolve('/src/entry-server.tsx'))
      } else {
        // Always read fresh template in dev
        template = readFileSync(resolve('index.html'), 'utf-8')
        template = await viteDevServer.transformIndexHtml(url, template)
        render = (await viteDevServer.ssrLoadModule('/src/entry-server.tsx')).render

        // Collect preload links
        const mod = await viteDevServer.moduleGraph.getModuleByUrl(resolve('/src/entry-server.tsx'))
        preloadLinks = collectPreloadLinksByModule(mod)
      }

      const appHtml = render({ url })
      const html = template
        .replace('<!--preload-links-->', preloadLinks)
        .replace(`<!--app-html-->`, appHtml)

      res.status(200).headers({ 'Content-Type': 'text/html' }).send(html)
    } catch (e) {
      !isProd && viteDevServer.ssrFixStacktrace(e)
      console.log(e.stack)
      res.status(500).send(e.stack)
    }
  }

  server.get('/', renderHandler)
  server.get('/about', renderHandler)

  return { server, vite: viteDevServer }
}

createServer().then(({ server }) =>
  server.listen({ port: 5000 }, () => {
    console.log('http://localhost:5000')
  })
)