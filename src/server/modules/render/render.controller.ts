import { createReadStream } from 'node:fs'

import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'

import { resolvePath } from 'server/common/helpers/paths'
import { ROUTES } from 'server/routes'
import { ConfigService } from '../config/config.service'
import { RenderService } from './render.service'

interface RenderControllerOptions {
  configService: ConfigService
  renderService: RenderService
}

export function useRenderController(
  server: FastifyInstance,
  options: RenderControllerOptions,
): void {
  const { configService, renderService } = options
  const { isProd, buildEnv } = configService.env

  async function sendHtml(req: FastifyRequest, res: FastifyReply, route: string) {
    if (isProd && buildEnv !== 'prerender') {
      const { name } = ROUTES[route]
      const stream = createReadStream(resolvePath(`dist/client/${name}.html`), 'utf-8')
      return res.status(200).type('text/html').send(stream)
    }

    return renderService.renderApp(req, res)
  }

  for (const route in ROUTES) {
    server.get(route, async (req, res) => sendHtml(req, res, route))
  }
}
