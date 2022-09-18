import { FastifyReply, FastifyRequest } from 'fastify'
import fp from 'fastify-plugin'

import { PageRoutes } from 'server/common/constants'
import { PAGES_CONFIG } from 'server/config/pages.config'
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

      return res.status(200).headers({ 'Content-Type': 'text/html' }).send(html)
    } catch (error) {
      console.error(error)
      return res.status(500).send(error)
    }
  }

  server.get(PageRoutes.HOME, async (req, res) => {
    return sendHtml(req, res, PageRoutes.HOME)
  })

  server.get(PageRoutes.ABOUT, async (req, res) => {
    return sendHtml(req, res, PageRoutes.ABOUT)
  })

  return Promise.resolve()
})
