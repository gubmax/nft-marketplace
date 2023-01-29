import { FastifyInstance } from 'fastify'

import type ConfigService from 'server/modules/config/config.service.js'
import type { RenderService } from 'server/modules/render/render.service.production.js'

export default (server: FastifyInstance, configService: ConfigService, renderService: RenderService): void => {
	const { isProd, isPrerenderMode } = configService.app

	server.get('/health', async (req, res) => res.status(200).send())

	if (isProd && !isPrerenderMode) return

	server.get('/not-found', async (req, res) => renderService.renderApp(req, res))
	server.get('/error', async (req, res) => renderService.renderError(req, res))
}
