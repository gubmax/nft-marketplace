import { FastifyBaseLogger } from 'fastify'
import { DestinationStream, LoggerOptions, pino } from 'pino'
import pretty from 'pino-pretty'

import { ConfigService } from '../config/config.service.js'
import { levelPrettifier, messageFormat, timePrettifier } from './prettifier.js'

export class LoggerService {
	readonly logger: FastifyBaseLogger

	constructor(private readonly configService: ConfigService) {
		const { isProd, isPrerenderMode } = configService.app

		let optionsOrStream: LoggerOptions | DestinationStream

		if (isProd) {
			optionsOrStream = { enabled: !isPrerenderMode }
		} else {
			// @ts-expect-error: No correct import
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			optionsOrStream = pretty({
				colorize: false,
				hideObject: true,
				ignore: 'hostname,pid,name,caller',
				messageFormat,
				customPrettifiers: {
					time: timePrettifier,
					level: levelPrettifier,
				},
			})
		}

		this.logger = pino(optionsOrStream)
	}
}
