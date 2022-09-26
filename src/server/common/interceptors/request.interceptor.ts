import fp from 'fastify-plugin'

import { LoggerService } from 'server/modules/logger/logger.service'

interface RequestInterceptorOptions {
  loggerService: LoggerService
}

export const requestInterceptor = fp<RequestInterceptorOptions>(async (server, options) => {
  const { logger } = options.loggerService

  server.addHook('onRequest', (req, res, next) => {
    logger.info(
      {
        reqId: String(req.id),
        req: {
          method: req.method,
          url: req.url,
        },
      },
      'Incoming request',
    )

    next()
  })

  server.addHook('preHandler', (req, res, next) => {
    void res.header('x-request-id', String(req.id))
    next()
  })

  server.addHook('onResponse', (req, res, next) => {
    logger.info(
      {
        reqId: String(req.id),
        res: {
          statusCode: res.raw.statusCode,
          method: req.method,
          url: req.raw.url,
          durationMs: res.getResponseTime(),
        },
      },
      'Request completed',
    )

    next()
  })

  return Promise.resolve()
})
