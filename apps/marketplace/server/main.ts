import { bootstrap } from './bootstrap.js'
import { appConfig } from './config/app.config.js'

const { isTest, isPrerenderMode, env } = appConfig

// Bootstrap
if (!isTest && !isPrerenderMode) {
	const { server } = await bootstrap()
	await server.listen({ host: env.HOST, port: env.PORT })
}

// For tests
export default bootstrap
