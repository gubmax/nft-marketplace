import type { PrismaClient, User } from '@prisma/client'

export class UserRepository {
	constructor(private readonly prisma: PrismaClient) {}

	getUserById(id: string): Promise<User | null> {
		return this.prisma.user.findUnique({ where: { id } })
	}
}
