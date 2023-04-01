import * as dotenv from 'dotenv'
import { cleanEnv, num, str } from 'envalid'

dotenv.config({ path: '.env' })
dotenv.config({ path: '.env.local', override: true })

const env = cleanEnv(process.env, {
	APP_ENV: str({
		choices: ['development', 'test', 'production', 'staging'],
		default: process.env.NODE_ENV ?? 'development',
	}),
	HOST: str(),
	PORT: num(),
})

export const appConfig = { env }
