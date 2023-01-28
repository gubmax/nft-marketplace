import { dirname } from 'path'
import { fileURLToPath } from 'url'

import { createContainer, Lifetime } from 'awilix'
import { LoadModulesOptions } from 'awilix/lib/load-modules.js'
import type { FastifyInstance } from 'fastify'

export { RESOLVER } from 'awilix'

export interface Container {
	server: FastifyInstance
}

/**
 * ## Dependency Injection Container
 * @docs https://github.com/jeffijoe/awilix
 */
export const container = createContainer<Container>({ injectionMode: 'CLASSIC' })

export const DEFAULT_LOAD_MODULES_OPTS: LoadModulesOptions<true> = {
	cwd: dirname(fileURLToPath(import.meta.url)),
	formatName: 'camelCase',
	resolverOptions: { lifetime: Lifetime.SINGLETON },
	esModules: true,
}
