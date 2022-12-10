import { IncomingMessage, Server, ServerResponse } from 'node:http'

import fastify, { FastifyInstance } from 'fastify'
import hyperid from 'hyperid'

import { useNotFoundHandler } from './common/handlers/notFound.handler'
import { useUncaughtErrorHandler } from './common/handlers/uncaughtError.handler'
import { resolvePath } from './common/helpers/paths'
import { useRequestLoggingHook } from './common/hooks/requestLogging.hook'
import { useRequestTimeoutHook } from './common/hooks/requestTimeout.hook'
import { AssetCollectorService } from './modules/assetCollector/assetCollector.service'
import { AsyncStorageService } from './modules/asyncStorage/asyncStorage.service'
import { useAuxiliaryController } from './modules/auxiliary/auxiliary.controller'
import { ConfigService } from './modules/config/config.service'
import { LoggerService } from './modules/logger/logger.service'
import { useRenderController } from './modules/render/render.controller'
import { RenderService } from './modules/render/render.service'
import { DevelopmentRenderService } from './modules/render/render.service.development'

export interface BootstrapResult {
  server: FastifyInstance
  config: { host: string; port: number }
}

export async function bootstrap(): Promise<BootstrapResult> {
  // Services

  const configService = new ConfigService()
  const { isProd } = configService.env

  const asyncStorageService = new AsyncStorageService()
  const loggerService = new LoggerService(configService)
  const assetCollectorService = new AssetCollectorService()
  const renderService = isProd
    ? new RenderService(assetCollectorService)
    : new DevelopmentRenderService(assetCollectorService)

  // Server Instance

  const uuid = hyperid()
  const server = fastify<Server, IncomingMessage, ServerResponse>({
    bodyLimit: 1048576, // 1MiB
    connectionTimeout: 60 * 1000, // 60s
    disableRequestLogging: true,
    logger: loggerService.logger,
    genReqId: () => uuid(),
  })

  if (isProd) {
    await server.register(import('@fastify/compress'))
    await server.register(import('@fastify/static'), {
      root: resolvePath('dist/client'),
      index: false,
    })
  } else {
    await server.register(import('@fastify/middie'))
  }

  // Initialization

  await renderService.init(server)

  // Handlers

  useNotFoundHandler(server, { configService, renderService })
  useUncaughtErrorHandler(server, { configService, loggerService, renderService })

  // Hooks

  useRequestLoggingHook(server, { asyncStorageService, loggerService, uuid })
  useRequestTimeoutHook(server, { loggerService })

  // Routes

  useAuxiliaryController(server, { configService, renderService })
  useRenderController(server, { configService, renderService })

  // Result

  const { host, port } = configService.env
  return { server, config: { host, port } }
}
