import { FastifyInstance } from 'fastify'

import { ConfigService } from 'server/modules/config/config.service.js'
import { RenderService } from 'server/modules/render/render.service.js'

interface AuxiliaryControllerOptions {
	configService: ConfigService
	renderService: RenderService
}

export function useAuxiliaryController(server: FastifyInstance, options: AuxiliaryControllerOptions): void {
	const { configService, renderService } = options
	const { isProd, isPrerenderMode } = configService.app

	server.get('/health', async (req, res) => res.status(200).send())

	if (isProd && !isPrerenderMode) return

	server.get('/not-found', async (req, res) => renderService.renderApp(req, res))
	server.get('/error', async (req, res) => renderService.renderError(req, res))
}
