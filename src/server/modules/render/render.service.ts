import { createReadStream, readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { FastifyInstance } from 'fastify'
import { Manifest, ViteDevServer } from 'vite'

import { PAGES_CONFIG } from 'server/config/pages.config'
import { VITE_DEV_SERVER_CONFIG } from 'server/config/viteDevServer.config'
import { ConfigService } from '../config/config.service'
import { AssetCollectorService } from '../assetCollector/assetCollector.service'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const resolve = (p: string): string => path.resolve(__dirname, p)

interface RenderOptions {
  url: string
}

type RenderFn = (options: RenderOptions) => Promise<string>

export class RenderService {
  configService: ConfigService
  assetCollectorService: AssetCollectorService
  viteDevServer: ViteDevServer
  manifest: Manifest

  constructor(
    configService: ConfigService,
    assetCollectorService: AssetCollectorService
  ) {
    this.configService = configService
    this.assetCollectorService = assetCollectorService
  }

  async init(server: FastifyInstance) {
    if (this.configService.isProd) {
      await server.register(import('@fastify/compress'))
      await server.register(import('@fastify/static'), {
        root: resolve('../client'),
        index: false,
      })

      this.manifest = JSON.parse(
        readFileSync(resolve('../client/manifest.json'), 'utf-8')
      ) as Manifest
    } else {
      const vite = await import('vite')
      this.viteDevServer = await vite.createServer(VITE_DEV_SERVER_CONFIG)

      await server.register(import('@fastify/middie'))
      server.use(this.viteDevServer.middlewares)
    }
  }

  // Public

  async render({ url }: RenderOptions): Promise<string> {
    const { isProd } = this.configService
    let preloadLinks: string

    try {
      let template: string
      let render: RenderFn

      if (isProd) {
        template = readFileSync(resolve(`../client/${PAGES_CONFIG[url].name}.html`), 'utf-8')
        // @ts-ignore
        render = (await import('./server.entry.js')).render

        // Collect preload links
        preloadLinks =
          this.assetCollectorService.collectPreloadLinksByManifest(
            this.manifest,
            'src/client/index.html'
          )
      } else {
        // Always read fresh template in dev
        template = readFileSync(resolve('../../../client/index.html'), 'utf-8')
        template = await this.viteDevServer.transformIndexHtml(url, template)
        render = (
          await this.viteDevServer.ssrLoadModule('/src/client/server.entry.tsx')
        ).render

        // Collect preload links
        const mod = this.viteDevServer.moduleGraph.getModuleById(
          resolve('../../../client/server.entry.tsx')
        )
        preloadLinks =
          this.assetCollectorService.collectPreloadLinksByModule(mod)
      }

      const appHtml = await render({ url })
      const html = template
        .replace('<!--preload-links-->', preloadLinks)
        .replace(`<!--app-html-->`, appHtml)

      return html
    } catch (error) {
      !isProd && this.viteDevServer.ssrFixStacktrace(error)
      throw error
    }
  }
}