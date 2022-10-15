import { FastifyInstance } from 'fastify'

export function useUncaughtErrorHandler(server: FastifyInstance): void {
  server.setErrorHandler((error, req, res) => {
    void res.status(500).header('Content-Type', 'text/html').send('<div>UNCAUGHT_ERROR</div>')
  })
}
