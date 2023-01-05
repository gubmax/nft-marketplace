import { createReadStream } from 'node:fs'

import { FastifyInstance } from 'fastify'

import { ConfigService } from 'server/modules/config/config.service.js'
import { LoggerService } from 'server/modules/logger/logger.service.js'
import { RenderService } from 'server/modules/render/render.service.js'
import { resolvePath } from '../helpers/paths.js'

interface UncaughtErrorHandlerOptions {
	configService: ConfigService
	loggerService: LoggerService
	renderService: RenderService
}

export function useUncaughtErrorHandler(server: FastifyInstance, options: UncaughtErrorHandlerOptions): void {
	const { configService, loggerService, renderService } = options
	const { isProd, buildEnv } = configService.env
	const { logger } = loggerService

	server.setErrorHandler(async (error, req, res) => {
		logger.error(error, 'Uncaught error')

		if (isProd && buildEnv !== 'prerender') {
			const stream = createReadStream(resolvePath('dist/client/error.html'), 'utf-8')
			return res.status(500).type('text/html').send(stream)
		}

		res.statusCode = 500
		return renderService.renderError(req, res)
	})
}
