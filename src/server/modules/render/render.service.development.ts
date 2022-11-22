import assert from 'node:assert'

import { FastifyInstance } from 'fastify'
import { ViteDevServer } from 'vite'

import { resolvePath } from 'server/common/helpers/paths'
import { HeadExtractor } from 'server/common/utils/headExtractor'
import { VITE_DEV_SERVER_CONFIG } from 'server/config/viteDevServer.config'
import { getAppTemplate } from 'server/templates/app.template'
import { AssetCollectorService } from '../assetCollector/assetCollector.service'
import { RenderFn, RenderService } from './render.service'

export class DevelopmentRenderService extends RenderService {
  viteDevServer?: ViteDevServer

  constructor(protected readonly assetCollectorService: AssetCollectorService) {
    super(assetCollectorService)
  }

  async init(server: FastifyInstance): Promise<void> {
    const vite = await import('vite')
    this.viteDevServer = await vite.createServer(VITE_DEV_SERVER_CONFIG)
    server.use(this.viteDevServer.middlewares)
  }

  async render({ url }: { url: string }): Promise<string> {
    try {
      assert(this.viteDevServer, 'Vite dev server has not been initialized')

      const entryMod = (await this.viteDevServer.ssrLoadModule(
        '/src/client/entries/app.server.tsx',
      )) as { render: RenderFn }

      // Collect preload links
      const id = resolvePath('src/client/entries/app.server.tsx')
      const mod = this.viteDevServer.moduleGraph.getModuleById(id)
      const preloadLinks = this.assetCollectorService.collectPreloadLinksByModule(mod)

      const headExtractor = new HeadExtractor()
      const appHtml = await entryMod.render({ url, headExtractor })
      const headTags = headExtractor.renderStatic()

      const html = getAppTemplate({
        head: `${headTags}${preloadLinks}`,
        appHtml,
        body: '<script type="module" src="/src/client/entries/app.client.tsx"></script>',
      })

      return this.viteDevServer.transformIndexHtml(url, html)
    } catch (error) {
      if (error instanceof Error) {
        this.viteDevServer?.ssrFixStacktrace(error)
      }

      throw error
    }
  }
}
