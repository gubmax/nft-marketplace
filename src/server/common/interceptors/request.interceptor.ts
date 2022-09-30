import fp from 'fastify-plugin'

import { AsyncStorageService } from 'server/modules/asyncStorage/asyncStorage.service'
import { LoggerService } from 'server/modules/logger/logger.service'

interface RequestInterceptorOptions {
  asyncStorageService: AsyncStorageService
  loggerService: LoggerService
  uuid(): string
}

export const requestInterceptor = fp<RequestInterceptorOptions>(async (server, options) => {
  const { storage } = options.asyncStorageService
  const { logger } = options.loggerService

  server.addHook('onRequest', (req, res, next) => {
    const store = new Map<string, unknown>()
    const reqId = String(req.id)
    const traceIdHeader = req.headers['x-trace-id']

    store.set('reqId', reqId)
    store.set('traceId', typeof traceIdHeader === 'string' ? traceIdHeader : options.uuid())

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

    storage.run(store, () => next())
  })

  server.addHook('onSend', async (req, res) => {
    const store = storage.getStore()
    const reqId = store?.get('reqId')

    logger.info(
      {
        reqId,
        res: {
          statusCode: res.raw.statusCode,
          method: req.method,
          url: req.raw.url,
          durationMs: res.getResponseTime(),
        },
      },
      'Request completed',
    )

    void res.header('x-request-id', reqId)
  })

  return Promise.resolve()
})
