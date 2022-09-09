import fastify, { FastifyInstance } from 'fastify'
import { Server, IncomingMessage, ServerResponse } from 'http';

import { AssetCollectorService } from './modules/assetCollector/assetCollector.service'
import { ConfigService } from './modules/config/config.service'
import { renderController } from './modules/render/render.controller'
import { RenderService } from './modules/render/render.service'

export async function bootstrap({ isProd }: { isProd: boolean }): Promise<{ server: FastifyInstance }> {
  const server = fastify<Server, IncomingMessage, ServerResponse>()

  const configService = new ConfigService({ isProd })
  const assetCollectorService = new AssetCollectorService()
  const renderService = new RenderService(configService, assetCollectorService)

  // Initialization

  await renderService.init(server)

  // Routes

  server.register(renderController, { renderService })

  return { server }
}
