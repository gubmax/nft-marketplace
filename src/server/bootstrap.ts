import { IncomingMessage, Server, ServerResponse } from 'node:http'

import fastify, { FastifyInstance } from 'fastify'

import { AssetCollectorService } from './modules/assetCollector/assetCollector.service'
import { ConfigService } from './modules/config/config.service'
import { renderController } from './modules/render/render.controller'
import { RenderService } from './modules/render/render.service'

export async function bootstrap(): Promise<{ server: FastifyInstance }> {
  const server = fastify<Server, IncomingMessage, ServerResponse>()

  const configService = new ConfigService()
  const assetCollectorService = new AssetCollectorService()
  const renderService = new RenderService(configService, assetCollectorService)

  // Initialization

  await renderService.init(server)

  // Routes

  await server.register(renderController, { configService, renderService })

  return { server }
}
