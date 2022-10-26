import { createReadStream } from 'node:fs'

import { FastifyInstance } from 'fastify'

import { ConfigService } from 'server/modules/config/config.service'
import { RenderService } from 'server/modules/render/render.service'

interface NotFoundHandlerOptions {
  configService: ConfigService
  renderService: RenderService
}

export function useNotFoundHandler(server: FastifyInstance, options: NotFoundHandlerOptions) {
  const { configService, renderService } = options

  server.setNotFoundHandler(async (req, res) => {
    const payload = configService.env.isProd
      ? createReadStream(new URL('../client/not-found.html', import.meta.url), 'utf-8')
      : await renderService.render({ url: req.url })

    return res.status(404).type('text/html').send(payload)
  })
}
