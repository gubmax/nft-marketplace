import { IncomingMessage, Server, ServerResponse } from 'node:http'

import fastify from 'fastify'
import hyperid from 'hyperid'

import { useAllRequestsInterceptor } from './common/interceptors/allRequests.interceptor'
import { AssetCollectorService } from './modules/assetCollector/assetCollector.service'
import { AsyncStorageService } from './modules/asyncStorage/asyncStorage.service'
import { ConfigService } from './modules/config/config.service'
import { LoggerService } from './modules/logger/logger.service'
import { useRenderController } from './modules/render/render.controller'
import { RenderService } from './modules/render/render.service'

export async function bootstrap(): Promise<void> {
  const uuid = hyperid()

  // Services

  const configService = new ConfigService()
  const asyncStorageService = new AsyncStorageService()
  const loggerService = new LoggerService(configService)
  const assetCollectorService = new AssetCollectorService()
  const renderService = new RenderService(configService, assetCollectorService)

  // Server Instance

  const server = fastify<Server, IncomingMessage, ServerResponse>({
    bodyLimit: 1048576,
    logger: loggerService.logger,
    disableRequestLogging: true,
    genReqId: () => uuid(),
  })

  if (configService.env.isProd) {
    await server.register(import('@fastify/compress'))
    await server.register(import('@fastify/static'), {
      root: new URL('../client', import.meta.url).pathname,
      index: false,
    })
  } else {
    await server.register(import('@fastify/middie'))
  }

  // Initialization

  await renderService.init(server)

  // Routes

  useRenderController(server, { configService, renderService })

  // Request Interceptors

  useAllRequestsInterceptor(server, { asyncStorageService, loggerService, uuid })

  // Listen

  const { host, port } = configService.env
  await server.listen({ host, port })
}
