import assert from 'node:assert'
import { readFileSync } from 'node:fs'
import { PassThrough } from 'node:stream'

import { ReactNode } from 'react'
import { renderToPipeableStream } from 'react-dom/server'
import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import isbot from 'isbot'
import type { Manifest } from 'vite'

import { resolvePath } from 'server/common/helpers/paths.js'
import { AssetCollectorService } from 'server/modules/asset-collector/asset-collector.service.js'

const ABORT_RENDER_DELAY = 5000

export interface EntryRouteContextType {
  prefetchLinks: Array<Record<string, unknown>>
  // matches: any[]
  // routeModules: any[]
  // manifest: Manifest
}

export interface RenderOptions {
  url: string
  entryRouteContext: EntryRouteContextType
}

export type RenderFn = (options: RenderOptions) => ReactNode

export interface EntryModule {
  render: RenderFn
}

export interface BaseRenderOpts {
  entryMod: EntryModule
  entryRouteContext: EntryRouteContextType
  bootstrapModules?: string[]
}

export class RenderService {
  manifest?: Manifest

  constructor(protected readonly assetCollectorService: AssetCollectorService) {}

  protected getEntryModule(path: string): Promise<EntryModule> {
    return import(resolvePath(path)) as Promise<EntryModule>
  }

  protected collectPreloadLinks(path: string): Array<Record<string, unknown>> {
    assert(this.manifest, 'Manifest not found')
    return this.assetCollectorService.collectPreloadLinksByManifest(this.manifest, path)
  }

  // Public

  async init(server?: FastifyInstance): Promise<void>
  async init(): Promise<void> {
    this.manifest = JSON.parse(
      readFileSync(resolvePath('dist/client/manifest.json'), 'utf-8'),
    ) as Manifest

    return Promise.resolve()
  }

  protected renderBase(
    req: FastifyRequest,
    res: FastifyReply,
    opts: BaseRenderOpts,
  ): Promise<PassThrough> {
    const { entryMod, entryRouteContext, bootstrapModules } = opts

    // Inject entry context like script for client side
    entryRouteContext.prefetchLinks.push({
      id: '__ENTRY_ROUTE_CONTEXT__',
      type: 'application/json',
      content: JSON.stringify(entryRouteContext),
    })

    const node = entryMod.render({ url: req.url, entryRouteContext })

    const ua = typeof req.headers === 'object' ? req.headers['user-agent'] : null
    const callbackName = !ua || isbot(ua) ? 'onAllReady' : 'onShellReady'

    let didError = false
    return new Promise((resolve, reject) => {
      const stream = renderToPipeableStream(node, {
        bootstrapModules,
        [callbackName]() {
          const body = new PassThrough()
          void res.status(didError ? 500 : 200).type('text/html')
          resolve(body)
          stream.pipe(body)
        },
        onShellError(err) {
          reject(err)
        },
        onError(err) {
          didError = true
          console.error(err)
        },
      })

      setTimeout(() => stream.abort(), ABORT_RENDER_DELAY)
    })
  }

  async renderApp(req: FastifyRequest, res: FastifyReply): Promise<PassThrough> {
    const entryMod = await this.getEntryModule('dist/server/app.server.js')
    const prefetchLinks = this.collectPreloadLinks('src/client/entries/app.client.tsx')
    const entryRouteContext = { prefetchLinks }
    return this.renderBase(req, res, { entryMod, entryRouteContext })
  }

  async renderError(req: FastifyRequest, res: FastifyReply): Promise<PassThrough> {
    const entryMod = await this.getEntryModule('dist/server/error.server.js')
    const prefetchLinks = this.collectPreloadLinks('src/client/entries/error.client.tsx')
    const entryRouteContext = { prefetchLinks }
    return this.renderBase(req, res, { entryMod, entryRouteContext })
  }
}
