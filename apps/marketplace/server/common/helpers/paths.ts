import { resolve } from 'node:path'

export function resolvePath(path: string) {
	return resolve(process.cwd(), path)
}
