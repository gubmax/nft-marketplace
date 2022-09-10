import { FastifyReply } from 'fastify'
import fp from 'fastify-plugin'

import { PageRoutes } from 'shared/routes'
import { RenderService } from './render.service'

interface RenderControllerOptions {
  renderService: RenderService
}

export const renderController = fp<RenderControllerOptions>(async (server, options) => {
  const { renderService } = options

  const sendHtml = (res: FastifyReply, html: string) =>
    res.status(200).headers({ 'Content-Type': 'text/html' }).send(html)

  server.get(PageRoutes.HOME, async (req, res) => {
    try {
      const html = await renderService.render({ url: req.url })
      sendHtml(res, html)
    } catch (error) {
      console.error(error)
      res.status(500).send(error.stack)
    }
  })

  server.get(PageRoutes.ABOUT, async (req, res) => {
    try {
      const html = await renderService.render({ url: req.url })
      sendHtml(res, html)
    } catch (error) {
      console.error(error)
      res.status(500).send(error.stack)
    }
  })
})
