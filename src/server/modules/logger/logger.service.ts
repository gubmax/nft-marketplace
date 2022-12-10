import { FastifyBaseLogger } from 'fastify'
import pino from 'pino'
import pretty from 'pino-pretty'

import { ConfigService } from '../config/config.service'
import { levelPrettifier, messageFormat, timePrettifier } from './prettifier'

export class LoggerService {
  readonly logger: FastifyBaseLogger

  constructor(private readonly configService: ConfigService) {
    const { isProd, buildEnv } = configService.env

    const optionsOrStream = isProd
      ? { enabled: buildEnv !== 'prerender' }
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
  }
}
