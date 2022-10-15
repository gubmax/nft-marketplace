import { FastifyInstance } from 'fastify'

export function useNotFoundHandler(server: FastifyInstance) {
  server.setNotFoundHandler(async (req, res) => {
    void res.status(404).header('Content-Type', 'text/html').send('<div>NOT_FOUND</div>')
  })
}
