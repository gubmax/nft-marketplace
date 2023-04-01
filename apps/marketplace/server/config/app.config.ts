import * as dotenv from 'dotenv'
import { cleanEnv, num, str } from 'envalid'

dotenv.config({ path: '.env' })
dotenv.config({ path: '.env.local', override: true })

const env = cleanEnv(process.env, {
	APP_ENV: str({
		choices: ['development', 'test', 'production', 'staging'],
		default: process.env.NODE_ENV ?? 'development',
	}),
	BUILD_ENV: str({
		choices: ['prerendering', 'production'],
		default: 'production',
	}),
	HOST: str(),
	PORT: num(),
})

export const appConfig = {
	env: {
		...env,
		isDev: env.APP_ENV === 'development',
		isTest: env.APP_ENV === 'test',
		isProd: env.APP_ENV === 'production',
		isStaging: env.APP_ENV === 'staging',
		isPrerendering: env.BUILD_ENV === 'prerendering',
	},
}
