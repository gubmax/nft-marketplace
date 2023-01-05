import { bootstrap } from './bootstrap.js'
import { ENV_CONFIG } from './config/env.config.js'

const { isTest, buildEnv } = ENV_CONFIG

// Bootstrap
if (!isTest && buildEnv !== 'prerender') {
	const { server, config } = await bootstrap()
	await server.listen(config)
}

// For tests
export default bootstrap
