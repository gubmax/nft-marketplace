import { createReadStream } from 'node:fs'

import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'

import { resolvePath } from 'server/common/helpers/paths.js'
import { ConfigService } from 'server/modules/config/config.service.js'
import { Route } from '../../../plugins/generate-routes-manifest.js'
import { RenderService } from './render.service.js'

interface RenderControllerOptions {
	configService: ConfigService
	renderService: RenderService
}

export function useRenderController(server: FastifyInstance, options: RenderControllerOptions): void {
	const { configService, renderService } = options
	const { isProd, buildEnv } = configService.env

	async function sendHtml(req: FastifyRequest, res: FastifyReply, route: Route) {
		if (route.static && isProd && buildEnv !== 'prerender') {
			const stream = createReadStream(resolvePath(`dist/client/pages${route.path}.html`), 'utf-8')
			return res.status(200).type('text/html').send(stream)
		}

		return renderService.renderApp(req, res)
	}

	function setRouteHandlers(routes: Route[]) {
		for (const route of routes) {
			server.get(route.path, async (req, res) => sendHtml(req, res, route))
			if (route.children.length) setRouteHandlers(route.children)
		}
	}

	setRouteHandlers(renderService.routesManifest)
}
