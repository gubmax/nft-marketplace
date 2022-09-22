import { IncomingMessage, Server, ServerResponse } from 'node:http'

import fastify from 'fastify'

import { AssetCollectorService } from './modules/assetCollector/assetCollector.service'
import { ConfigService } from './modules/config/config.service'
import { LoggerService } from './modules/logger/logger.service'
import { renderController } from './modules/render/render.controller'
import { RenderService } from './modules/render/render.service'

export async function bootstrap(): Promise<void> {
  const configService = new ConfigService()
  const loggerService = new LoggerService(configService)
  const assetCollectorService = new AssetCollectorService()
  const renderService = new RenderService(configService, assetCollectorService)

  const server = fastify<Server, IncomingMessage, ServerResponse>({
    logger: loggerService.options,
  })

  // Initialization

  await renderService.init(server)

  // Routes

  await server.register(renderController, { configService, renderService })

  // Listen

  const { host, port } = configService.env
  await server.listen({ host, port })
}
