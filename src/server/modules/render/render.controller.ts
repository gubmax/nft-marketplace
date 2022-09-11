import { FastifyReply, FastifyRequest } from 'fastify'
import fp from 'fastify-plugin'
import { PAGES_CONFIG } from 'server/config/pages.config'

import { PageRoutes } from 'shared/routes'
import { ConfigService } from '../config/config.service'
import { RenderService } from './render.service'

interface RenderControllerOptions {
  configService: ConfigService
  renderService: RenderService
}

export const renderController = fp<RenderControllerOptions>(async (server, options) => {
  const { configService, renderService } = options

  async function sendHtml(req: FastifyRequest, res: FastifyReply, route: PageRoutes) {
    try {
      if (configService.isProd) {
        const { name } = PAGES_CONFIG[route]
        return res.sendFile(`${name}.html`)
      }

      const html = await renderService.render({ url: req.url })

      res.status(200).headers({ 'Content-Type': 'text/html' }).send(html)
    } catch (error) {
      console.error(error)
      res.status(500).send(error.stack)
    }
  }

  server.get(PageRoutes.HOME, async (req, res) => {
    return sendHtml(req, res, PageRoutes.HOME)
  })

  server.get(PageRoutes.ABOUT, async (req, res) => {
    return sendHtml(req, res, PageRoutes.ABOUT)
  })
})
