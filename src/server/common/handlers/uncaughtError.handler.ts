import { FastifyInstance } from 'fastify'

import { LoggerService } from 'server/modules/logger/logger.service'

interface UncaughtErrorHandlerOptions {
  loggerService: LoggerService
}

export function useUncaughtErrorHandler(
  server: FastifyInstance,
  options: UncaughtErrorHandlerOptions,
): void {
  const { logger } = options.loggerService

  server.setErrorHandler((error, req, res) => {
    logger.error(error, 'Uncaught error')
    void res.status(500).type('text/html').send('<div>UNCAUGHT_ERROR</div>')
  })
}
