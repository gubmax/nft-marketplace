import assert from 'node:assert'
import { PassThrough } from 'node:stream'

import { matchRoutes, RouteMatch } from 'react-router-dom'
import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { ViteDevServer } from 'vite'

import { resolvePath } from 'server/common/helpers/paths.js'
import { VITE_DEV_SERVER_CONFIG } from 'server/config/vite-dev-server.config.js'
import { AssetCollectorService } from 'server/modules/asset-collector/asset-collector.service.js'
import { Route } from '../../../plugins/generateRoutesManifest.js'
import { EntryModule, EntryRouteContextType, RenderService } from './render.service.js'

const INIT_ERROR_MSG = 'Vite dev server has not been initialized'

export class DevelopmentRenderService extends RenderService {
	viteDevServer?: ViteDevServer

	constructor(protected readonly assetCollectorService: AssetCollectorService) {
		super(assetCollectorService)
	}

	protected loadModule<T>(path: string): Promise<T> {
		assert(this.viteDevServer, INIT_ERROR_MSG)
		return this.viteDevServer.ssrLoadModule(path) as Promise<T>
	}

	private getMetaByModuleId(id: string): (() => unknown) | undefined {
		assert(this.viteDevServer, INIT_ERROR_MSG)

		const mod = this.viteDevServer.moduleGraph.getModuleById(resolvePath(id))
		const meta = mod?.ssrModule?.meta as (() => unknown) | undefined
		return meta
	}

	protected collectRouteAssets(
		entryContext: EntryRouteContextType,
		matches: Array<RouteMatch<string, Route>>,
		entryPath: string,
	) {
		assert(this.viteDevServer, INIT_ERROR_MSG)

		const mod = this.viteDevServer.moduleGraph.getModuleById(resolvePath(entryPath))
		const commonAssets = this.assetCollectorService.collectByModule(mod)

		entryContext.links.push(...commonAssets.links)
	}

	protected collectRouteMeta(entryContext: EntryRouteContextType, matches: Array<RouteMatch<string, Route>>) {
		assert(this.viteDevServer, INIT_ERROR_MSG)

		if (matches.length) {
			for (const match of matches) {
				const meta = this.getMetaByModuleId(match.route.id)
				if (meta) Object.assign(entryContext.meta, meta())
			}
		} else {
			const meta = this.getMetaByModuleId('client/not-found.tsx')
			if (meta) Object.assign(entryContext.meta, meta())
		}
	}

	protected createEntryRouteContext(entryPath: string, url: string): EntryRouteContextType {
		const entryContext: EntryRouteContextType = { links: [], scripts: [], meta: {} }
		const matches = matchRoutes<Route>(this.routesManifest, url) ?? []

		this.collectRouteAssets(entryContext, matches, entryPath)
		this.collectRouteMeta(entryContext, matches)

		return entryContext
	}

	// Public

	async init(server: FastifyInstance): Promise<void> {
		const vite = await import('vite')
		this.viteDevServer = await vite.createServer(VITE_DEV_SERVER_CONFIG)
		server.use(this.viteDevServer.middlewares)

		const { routes = [] } = await this.loadModule<{ routes: Route[] }>('virtual:routes-manifest')
		this.routesManifest = routes
	}

	async renderApp(req: FastifyRequest, res: FastifyReply): Promise<PassThrough> {
		const entryMod = await this.loadModule<EntryModule>('/client/entries/app.server.tsx')
		const entryRouteContext = this.createEntryRouteContext('client/entries/app.client.tsx', req.url)
		const bootstrapModules = ['/@vite/client', '/client/entries/app.client.tsx']
		return this.renderBase(req, res, { entryMod, entryRouteContext, bootstrapModules })
	}

	async renderError(req: FastifyRequest, res: FastifyReply): Promise<PassThrough> {
		const entryMod = await this.loadModule<EntryModule>('/client/entries/error.server.tsx')
		const entryRouteContext = this.createEntryRouteContext('client/entries/error.client.tsx', req.url)
		const bootstrapModules = ['/@vite/client', '/client/entries/error.client.tsx']
		return this.renderBase(req, res, { entryMod, entryRouteContext, bootstrapModules })
	}
}
