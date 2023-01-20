import * as dotenv from 'dotenv'
import { cleanEnv, num, str } from 'envalid'

dotenv.config({ path: '.env' })
dotenv.config({ path: '.env.local', override: true })

const env = cleanEnv(process.env, {
	MODE: str({ choices: ['development', 'test', 'production', 'staging'], default: 'development' }),
	HOST: str(),
	PORT: num(),
})

export const appConfig = {
	env,
	isProd: env.MODE === 'production',
	isTest: env.MODE === 'test' || !!process.env.VITE_TEST_BUILD,
}
