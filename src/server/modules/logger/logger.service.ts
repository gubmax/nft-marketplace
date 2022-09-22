import { FastifyBaseLogger, FastifyLoggerOptions } from 'fastify'
import pino from 'pino'
import pretty from 'pino-pretty'

import { ConfigService } from '../config/config.service'
import { levelPrettifier, messageFormat, timePrettifier } from './prettifier'

export class LoggerService {
  readonly logger: FastifyBaseLogger
  readonly options: FastifyLoggerOptions

  constructor(private readonly configService: ConfigService) {
    const optionsOrStream = configService.env.isProd
      ? undefined
      : pretty({
          colorize: false,
          hideObject: true,
          ignore: 'hostname,pid,name,caller',
          messageFormat,
          customPrettifiers: {
            time: timePrettifier,
            level: levelPrettifier,
          },
        })

    this.logger = pino(optionsOrStream)

    this.options = {
      stream: optionsOrStream,
      serializers: {
        res(res) {
          return {
            statusCode: res.statusCode,
            method: res.request.method,
            url: res.request.url,
          }
        },
      },
    }
  }
}
