import { bootstrap } from './bootstrap'
import { ENV_CONFIG } from './config/env.config'

const { isTest, buildEnv } = ENV_CONFIG

// Bootstrap
if (!isTest && buildEnv !== 'prerender') {
  const { server, config } = await bootstrap()
  await server.listen(config)
}

// For tests
export default bootstrap
