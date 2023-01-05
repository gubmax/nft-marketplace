import { IncomingMessage, Server, ServerResponse } from 'node:http'

import { fastify, FastifyInstance } from 'fastify'
import hyperid from 'hyperid'

import { useAuxiliaryController } from './module/auxiliary/auxiliary.controller.js'

export interface BootstrapResult {
	server: FastifyInstance
}

export function bootstrap(): BootstrapResult {
	// Server Instance

	const uuid = hyperid()
	const server = fastify<Server, IncomingMessage, ServerResponse>({
		bodyLimit: 1048576, // 1MiB
		connectionTimeout: 60 * 1000, // 60s
		genReqId: () => uuid(),
	})

	// Routes

	useAuxiliaryController(server)

	// Result

	return { server }
}
