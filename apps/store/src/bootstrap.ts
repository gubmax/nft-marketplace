import { IncomingMessage, Server, ServerResponse } from 'node:http'

import { PrismaClient } from '@prisma/client'
import { fastify, FastifyInstance } from 'fastify'
import hyperid from 'hyperid'

import { useAuxiliaryController } from './module/auxiliary/auxiliary.controller.js'
import { useUserController } from './module/user/user.controller.js'
import { UserRepository } from './module/user/user.repository.js'

export interface BootstrapResult {
	server: FastifyInstance
}

export function bootstrap(): BootstrapResult {
	// Repositories

	const prisma = new PrismaClient()
	const userRepository = new UserRepository(prisma)

	// Server Instance

	const uuid = hyperid()
	const server = fastify<Server, IncomingMessage, ServerResponse>({
		bodyLimit: 1048576, // 1MiB
		connectionTimeout: 60 * 1000, // 60s
		genReqId: () => uuid(),
	})

	// Routes

	useAuxiliaryController(server)
	useUserController(server, userRepository)

	// Result

	return { server }
}
