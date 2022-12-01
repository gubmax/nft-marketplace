import { createReadStream } from 'node:fs'

import { FastifyInstance } from 'fastify'

import { ConfigService } from 'server/modules/config/config.service'
import { LoggerService } from 'server/modules/logger/logger.service'
import { RenderService } from 'server/modules/render/render.service'
import { resolvePath } from '../helpers/paths'

interface UncaughtErrorHandlerOptions {
  configService: ConfigService
  loggerService: LoggerService
  renderService: RenderService
}

export function useUncaughtErrorHandler(
  server: FastifyInstance,
  options: UncaughtErrorHandlerOptions,
): void {
  const { configService, loggerService, renderService } = options
  const { logger } = loggerService

  server.setErrorHandler(async (error, req, res) => {
    logger.error(error, 'Uncaught error')

    const payload = configService.env.isProd
      ? createReadStream(resolvePath('dist/client/error.html'), 'utf-8')
      : await renderService.renderError()

    return res.status(500).type('text/html').send(payload)
  })
}
