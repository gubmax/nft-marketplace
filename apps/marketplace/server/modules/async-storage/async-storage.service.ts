import { AsyncLocalStorage } from 'node:async_hooks'

export class AsyncStorageService {
	storage = new AsyncLocalStorage<Map<string, unknown>>()
}
