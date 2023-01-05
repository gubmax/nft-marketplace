import { FastifyInstance } from 'fastify'

export function useAuxiliaryController(server: FastifyInstance): void {
	server.get('/health', async (req, res) => res.status(200).send())
}
