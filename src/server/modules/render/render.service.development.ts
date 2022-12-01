import assert from 'node:assert'

import { FastifyInstance } from 'fastify'
import { ViteDevServer } from 'vite'

import { resolvePath } from 'server/common/helpers/paths'
import { HeadExtractor } from 'server/common/utils/headExtractor'
import { VITE_DEV_SERVER_CONFIG } from 'server/config/viteDevServer.config'
import { generateTemplate } from 'server/template'
import { AssetCollectorService } from '../assetCollector/assetCollector.service'
import { RenderErrorFn, RenderPageFn, RenderService } from './render.service'

const INIT_ERROR_MSG = 'Vite dev server has not been initialized'

export class DevelopmentRenderService extends RenderService {
  viteDevServer?: ViteDevServer

  constructor(protected readonly assetCollectorService: AssetCollectorService) {
    super(assetCollectorService)
  }

  protected getEntryModule<T>(path: string): Promise<{ render: T }> {
    assert(this.viteDevServer, INIT_ERROR_MSG)
    return this.viteDevServer.ssrLoadModule(path) as Promise<{ render: T }>
  }

  protected collectPreloadLinks(path: string): string {
    assert(this.viteDevServer, INIT_ERROR_MSG)
    const id = resolvePath(path)
    const mod = this.viteDevServer.moduleGraph.getModuleById(id)
    return this.assetCollectorService.collectPreloadLinksByModule(mod)
  }

  // Public

  async init(server: FastifyInstance): Promise<void> {
    const vite = await import('vite')
    this.viteDevServer = await vite.createServer(VITE_DEV_SERVER_CONFIG)
    server.use(this.viteDevServer.middlewares)
  }

  async renderPage({ url }: { url: string }): Promise<string> {
    try {
      assert(this.viteDevServer, INIT_ERROR_MSG)

      const entryMod = await this.getEntryModule<RenderPageFn>('/src/client/entries/app.server.tsx')
      const preloadLinks = this.collectPreloadLinks('src/client/entries/app.server.tsx')

      const headExtractor = new HeadExtractor()
      const appHtml = await entryMod.render({ url, headExtractor })
      const headTags = headExtractor.renderStatic()

      const html = generateTemplate({
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

  async renderError(): Promise<string> {
    assert(this.viteDevServer, INIT_ERROR_MSG)

    const entryMod = await this.getEntryModule<RenderErrorFn>(
      '/src/client/entries/error.server.tsx',
    )
    const preloadLinks = this.collectPreloadLinks('src/client/entries/error.server.tsx')

    const appHtml = await entryMod.render()

    const html = generateTemplate({
      head: preloadLinks,
      appHtml,
      body: '<script type="module" src="/src/client/entries/error.client.tsx"></script>',
    })

    return this.viteDevServer.transformIndexHtml('', html)
  }
}
