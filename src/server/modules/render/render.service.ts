import assert from 'node:assert'
import { readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { FastifyInstance } from 'fastify'
import { Manifest, ViteDevServer } from 'vite'

import { PAGES_CONFIG } from 'server/config/pages.config'
import { VITE_DEV_SERVER_CONFIG } from 'server/config/viteDevServer.config'
import { AssetCollectorService } from '../assetCollector/assetCollector.service'
import { ConfigService } from '../config/config.service'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const resolve = (p: string): string => path.resolve(__dirname, p)

interface RenderOptions {
  url: string
}

export type RenderFn = (options: RenderOptions) => Promise<string>

export class RenderService {
  configService: ConfigService
  assetCollectorService: AssetCollectorService
  viteDevServer?: ViteDevServer
  manifest?: Manifest

  constructor(configService: ConfigService, assetCollectorService: AssetCollectorService) {
    this.configService = configService
    this.assetCollectorService = assetCollectorService
  }

  async init(server: FastifyInstance) {
    if (this.configService.env.isProd) {
      await server.register(import('@fastify/compress'))
      await server.register(import('@fastify/static'), {
        root: resolve('../client'),
        index: false,
      })

      this.manifest = JSON.parse(
        readFileSync(resolve('../client/manifest.json'), 'utf-8'),
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
    const { isProd } = this.configService.env
    let preloadLinks: string

    try {
      let template: string
      let render: RenderFn

      if (isProd) {
        assert(this.manifest, 'Manifest not found')

        const name = PAGES_CONFIG[url].name

        template = readFileSync(resolve(`../client/${name}.html`), 'utf-8')
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const entryMod = (await import('./server.entry.js')) as { render: RenderFn }
        render = entryMod.render

        // Collect preload links
        preloadLinks = this.assetCollectorService.collectPreloadLinksByManifest(
          this.manifest,
          'src/client/index.html',
        )
      } else {
        assert(this.viteDevServer, 'Vite dev server has not been initialized')

        // Always read fresh template in dev
        template = readFileSync(resolve('../../../client/index.html'), 'utf-8')
        template = await this.viteDevServer.transformIndexHtml(url, template)
        const entryMod = (await this.viteDevServer.ssrLoadModule(
          '/src/client/server.entry.tsx',
        )) as { render: RenderFn }
        render = entryMod.render

        // Collect preload links
        const mod = this.viteDevServer.moduleGraph.getModuleById(
          resolve('../../../client/server.entry.tsx'),
        )
        preloadLinks = this.assetCollectorService.collectPreloadLinksByModule(mod)
      }

      const appHtml = await render({ url })
      const html = template
        .replace('<!--preload-links-->', preloadLinks)
        .replace('<!--app-html-->', appHtml)

      return html
    } catch (error: unknown) {
      if (!isProd && error instanceof Error) {
        this.viteDevServer?.ssrFixStacktrace(error)
      }

      throw error
    }
  }
}
