import { FastifyInstance } from 'fastify'

import { LoggerService } from 'server/modules/logger/logger.service.js'

interface RequestTimeoutHookOptions {
	loggerService: LoggerService
}

export function useRequestTimeoutHook(server: FastifyInstance, options: RequestTimeoutHookOptions): void {
	const { logger } = options.loggerService

	server.addHook('onTimeout', (req, res, done) => {
		const payload = { url: req.url }
		logger.error(payload, 'Request timeout')

		done()
	})
}
