import pc from 'picocolors'

import { bootstrap } from './bootstrap'
import { ENV_CONFIG } from './config/env.config'

const { isTest, isProd, host, port } = ENV_CONFIG

// Bootstrap
if (!isTest) {
  const { server } = await bootstrap()

  server.listen({ port }, () => {
    if (!isProd) {
      console.log(pc.green(`You can now view app in the browser at ${host}:${port}`))
    }
  })
}

// For tests
export default bootstrap
