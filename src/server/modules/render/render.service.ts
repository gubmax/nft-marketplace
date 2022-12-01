import assert from 'node:assert'
import { readFileSync } from 'node:fs'

import { FastifyInstance } from 'fastify'
import type { Manifest } from 'vite'

import { resolvePath } from 'server/common/helpers/paths'
import { HeadExtractor } from 'server/common/utils/headExtractor'
import { generateTemplate } from 'server/template'
import { AssetCollectorService } from '../assetCollector/assetCollector.service'

interface RenderOptions {
  url: string
  headExtractor: HeadExtractor
}

export type RenderPageFn = (options: RenderOptions) => Promise<string>
export type RenderErrorFn = () => Promise<string>

export class RenderService {
  manifest?: Manifest

  constructor(protected readonly assetCollectorService: AssetCollectorService) {}

  protected getEntryModule<T>(path: string): Promise<{ render: T }> {
    return import(resolvePath(path)) as Promise<{ render: T }>
  }

  protected collectPreloadLinks(path: string): string {
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

  async renderPage({ url }: { url: string }): Promise<string> {
    const entryMod = await this.getEntryModule<RenderPageFn>('dist/server/app.server.js')
    const preloadLinks = this.collectPreloadLinks('src/client/entries/app.client.tsx')

    const headExtractor = new HeadExtractor()
    const appHtml = await entryMod.render({ url, headExtractor })
    const headTags = headExtractor.renderStatic()

    return generateTemplate({ head: `${headTags}${preloadLinks}`, appHtml })
  }

  async renderError(): Promise<string> {
    const entryMod = await this.getEntryModule<RenderErrorFn>('dist/server/error.server.js')
    const preloadLinks = this.collectPreloadLinks('src/client/entries/error.client.tsx')

    const appHtml = await entryMod.render()

    return generateTemplate({ head: preloadLinks, appHtml })
  }
}
