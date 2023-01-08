import { IncomingMessage, Server, ServerResponse } from 'node:http'

import { fastify, FastifyInstance } from 'fastify'
import hyperid from 'hyperid'

import { useNotFoundHandler } from './common/handlers/not-found.handler.js'
import { useUncaughtErrorHandler } from './common/handlers/uncaught-error.handler.js'
import { resolvePath } from './common/helpers/paths.js'
import { useRequestLoggingHook } from './common/hooks/request-logging.hook.js'
import { useRequestTimeoutHook } from './common/hooks/request-timeout.hook.js'
import { AssetCollectorService } from './modules/asset-collector/asset-collector.service.js'
import { AsyncStorageService } from './modules/async-storage/async-storage.service.js'
import { useAuxiliaryController } from './modules/auxiliary/auxiliary.controller.js'
import { ConfigService } from './modules/config/config.service.js'
import { LoggerService } from './modules/logger/logger.service.js'
import { useRenderController } from './modules/render/render.controller.js'
import { DevelopmentRenderService } from './modules/render/render.service.development.js'
import { RenderService } from './modules/render/render.service.js'

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
