import { bootstrap } from './bootstrap'
import { ENV_CONFIG } from './config/env.config'

const { isTest } = ENV_CONFIG

// Bootstrap
if (!isTest) {
  void bootstrap()
}

// For tests
export default bootstrap
