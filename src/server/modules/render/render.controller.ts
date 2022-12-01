import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'

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

  async function sendHtml(req: FastifyRequest, res: FastifyReply, route: string) {
    if (configService.env.isProd) {
      const { name } = ROUTES[route]
      return res.sendFile(`${name}.html`)
    }

    const html = await renderService.renderPage({ url: req.url })
    return res.status(200).type('text/html').send(html)
  }

  for (const route in ROUTES) {
    server.get(route, async (req, res) => sendHtml(req, res, route))
  }
}
