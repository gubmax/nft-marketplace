import { IncomingMessage, Server, ServerResponse } from 'node:http'

import fastify from 'fastify'
import hyperid from 'hyperid'

import { requestInterceptor } from './common/interceptors/request.interceptor'
import { AssetCollectorService } from './modules/assetCollector/assetCollector.service'
import { AsyncStorageService } from './modules/asyncStorage/asyncStorage.service'
import { ConfigService } from './modules/config/config.service'
import { LoggerService } from './modules/logger/logger.service'
import { renderController } from './modules/render/render.controller'
import { RenderService } from './modules/render/render.service'

export async function bootstrap(): Promise<void> {
  const uuid = hyperid()

  const configService = new ConfigService()
  const asyncStorageService = new AsyncStorageService()
  const loggerService = new LoggerService(configService)
  const assetCollectorService = new AssetCollectorService()
  const renderService = new RenderService(configService, assetCollectorService)

  const server = fastify<Server, IncomingMessage, ServerResponse>({
    bodyLimit: 1048576,
    logger: loggerService.logger,
    disableRequestLogging: true,
    genReqId: () => uuid(),
  })

  // Initialization

  await renderService.init(server)

  // Routes

  await server.register(renderController, { configService, renderService })

  // Interceptors

  await server.register(requestInterceptor, { asyncStorageService, loggerService, uuid })

  // Listen

  const { host, port } = configService.env
  await server.listen({ host, port })
}
