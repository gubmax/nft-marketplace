import { User } from '@prisma/client'
import { FastifyInstance, RouteGenericInterface } from 'fastify'

import { UserRepository } from './user.repository.js'

interface UserIdRoute extends RouteGenericInterface {
	Params: { id: string }
}

export function useUserController(server: FastifyInstance, userRepository: UserRepository): void {
	server.get<UserIdRoute>('/user/:id', async (req, res): Promise<User> => {
		const { id } = req.params
		const user = await userRepository.getUserById(id)
		if (user) return res.status(200).send(user)
		else return res.status(404).send({ message: `User "${id}" not found`, error: 'Not Found', statusCode: 404 })
	})
}
