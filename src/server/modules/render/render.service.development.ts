import assert from 'node:assert'
import { PassThrough } from 'node:stream'

import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { ViteDevServer } from 'vite'

import { resolvePath } from 'server/common/helpers/paths.js'
import { VITE_DEV_SERVER_CONFIG } from 'server/config/vite-dev-server.config.js'
import { AssetCollectorService } from 'server/modules/asset-collector/asset-collector.service.js'
import { EntryModule, RenderService } from './render.service.js'

const INIT_ERROR_MSG = 'Vite dev server has not been initialized'

export class DevelopmentRenderService extends RenderService {
  viteDevServer?: ViteDevServer

  constructor(protected readonly assetCollectorService: AssetCollectorService) {
    super(assetCollectorService)
  }

  protected getEntryModule(path: string): Promise<EntryModule> {
    assert(this.viteDevServer, INIT_ERROR_MSG)
    return this.viteDevServer.ssrLoadModule(path) as Promise<EntryModule>
  }

  protected collectPreloadLinks(path: string): Array<Record<string, unknown>> {
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

  async renderApp(req: FastifyRequest, res: FastifyReply): Promise<PassThrough> {
    const entryMod = await this.getEntryModule('/src/client/entries/app.server.tsx')
    const prefetchLinks = this.collectPreloadLinks('src/client/entries/app.server.tsx')
    const entryRouteContext = { prefetchLinks }
    const bootstrapModules = ['/src/client/entries/app.client.tsx']
    return this.renderBase(req, res, { entryMod, entryRouteContext, bootstrapModules })
  }

  async renderError(req: FastifyRequest, res: FastifyReply): Promise<PassThrough> {
    const entryMod = await this.getEntryModule('/src/client/entries/error.server.tsx')
    const prefetchLinks = this.collectPreloadLinks('src/client/entries/error.server.tsx')
    const entryRouteContext = { prefetchLinks }
    const bootstrapModules = ['/src/client/entries/error.client.tsx']
    return this.renderBase(req, res, { entryMod, entryRouteContext, bootstrapModules })
  }
}
