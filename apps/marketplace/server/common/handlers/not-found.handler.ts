import { createReadStream } from 'node:fs'

import { FastifyInstance } from 'fastify'

import { ConfigService } from 'server/modules/config/config.service.js'
import { RenderService } from 'server/modules/render/render.service.js'
import { resolvePath } from '../helpers/paths.js'

interface NotFoundHandlerOptions {
	configService: ConfigService
	renderService: RenderService
}

export function useNotFoundHandler(server: FastifyInstance, options: NotFoundHandlerOptions) {
	const { configService, renderService } = options
	const { isProd, isPrerenderMode } = configService.app

	server.setNotFoundHandler(async (req, res) => {
		if (isProd && !isPrerenderMode) {
			const stream = createReadStream(resolvePath('dist/client/not-found.html'), 'utf-8')
			return res.status(404).type('text/html').send(stream)
		}

		res.statusCode = 404
		return renderService.renderApp(req, res)
	})
}
