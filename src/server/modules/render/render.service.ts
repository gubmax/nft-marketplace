import assert from 'node:assert'
import { readFileSync } from 'node:fs'

import { FastifyInstance } from 'fastify'
import { Manifest, ViteDevServer } from 'vite'

import { HeadExtractor } from 'server/common/utils/headExtractor'
import { PAGES_CONFIG } from 'server/config/pages.config'
import { VITE_DEV_SERVER_CONFIG } from 'server/config/viteDevServer.config'
import { AssetCollectorService } from '../assetCollector/assetCollector.service'
import { ConfigService } from '../config/config.service'

interface RenderOptions {
  url: string
  headExtractor: HeadExtractor
}

export type RenderFn = (options: RenderOptions) => Promise<string>

export class RenderService {
  viteDevServer?: ViteDevServer
  manifest?: Manifest

  constructor(
    private readonly configService: ConfigService,
    private readonly assetCollectorService: AssetCollectorService,
  ) {}

  async init(server: FastifyInstance) {
    if (this.configService.env.isProd) {
      this.manifest = JSON.parse(
        readFileSync(new URL('../client/manifest.json', import.meta.url), 'utf-8'),
      ) as Manifest
    } else {
      const vite = await import('vite')
      this.viteDevServer = await vite.createServer(VITE_DEV_SERVER_CONFIG)
      server.use(this.viteDevServer.middlewares)
    }
  }

  // Public

  async render({ url }: { url: string }): Promise<string> {
    const { isProd } = this.configService.env
    let preloadLinks: string

    try {
      let template: string
      let render: RenderFn

      if (isProd) {
        assert(this.manifest, 'Manifest not found')

        const name = PAGES_CONFIG[url].name
        template = readFileSync(new URL(`../client/${name}.html`, import.meta.url), 'utf-8')

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
        template = readFileSync(new URL('../../../client/index.html', import.meta.url), 'utf-8')
        template = await this.viteDevServer.transformIndexHtml(url, template)
        const entryMod = (await this.viteDevServer.ssrLoadModule(
          '/src/client/server.entry.tsx',
        )) as { render: RenderFn }
        render = entryMod.render

        // Collect preload links
        const id = new URL('../../../client/server.entry.tsx', import.meta.url).pathname
        const mod = this.viteDevServer.moduleGraph.getModuleById(id)
        preloadLinks = this.assetCollectorService.collectPreloadLinksByModule(mod)
      }

      const headExtractor = new HeadExtractor()
      const appHtml = await render({ url, headExtractor })
      const headTags = headExtractor.renderStatic()

      const html = template
        .replace('<!--head-->', `${headTags}${preloadLinks}`)
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
