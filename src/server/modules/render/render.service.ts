import assert from 'node:assert'
import { readFileSync } from 'node:fs'

import { FastifyInstance } from 'fastify'
import type { Manifest } from 'vite'

import { resolvePath } from 'server/common/helpers/paths'
import { HeadExtractor } from 'server/common/utils/headExtractor'
import { getAppTemplate } from 'server/templates/app.template'
import { AssetCollectorService } from '../assetCollector/assetCollector.service'

interface RenderOptions {
  url: string
  headExtractor: HeadExtractor
}

export type RenderFn = (options: RenderOptions) => Promise<string>

export class RenderService {
  manifest?: Manifest

  constructor(protected readonly assetCollectorService: AssetCollectorService) {}

  async init(server?: FastifyInstance): Promise<void> {
    this.manifest = JSON.parse(
      readFileSync(resolvePath('dist/client/manifest.json'), 'utf-8'),
    ) as Manifest

    return Promise.resolve()
  }

  async render({ url }: { url: string }): Promise<string> {
    assert(this.manifest, 'Manifest not found')

    const entryMod = (await import(resolvePath('dist/server/app.server.js'))) as {
      render: RenderFn
    }

    // Collect preload links
    const preloadLinks = this.assetCollectorService.collectPreloadLinksByManifest(
      this.manifest,
      'src/client/entries/app.client.tsx',
    )

    const headExtractor = new HeadExtractor()
    const appHtml = await entryMod.render({ url, headExtractor })
    const headTags = headExtractor.renderStatic()

    return getAppTemplate({ head: `${headTags}${preloadLinks}`, appHtml })
  }
}
