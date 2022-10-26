import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'

import { PAGES_CONFIG } from 'server/config/pages.config'
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
    try {
      if (configService.env.isProd) {
        const { name } = PAGES_CONFIG[route]
        return res.sendFile(`${name}.html`)
      }

      const html = await renderService.render({ url: req.url })

      return res.status(200).type('text/html').send(html)
    } catch (error) {
      console.error(error)
      return res.status(500).send(error)
    }
  }

  for (const route in PAGES_CONFIG) {
    server.get(route, async (req, res) => sendHtml(req, res, route))
  }
}
