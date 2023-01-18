import assert from 'node:assert'
import { readFile } from 'node:fs/promises'
import { PassThrough } from 'node:stream'

import { ReactNode } from 'react'
import { renderToPipeableStream } from 'react-dom/server'
import { matchRoutes, RouteMatch } from 'react-router-dom'
import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import isbot from 'isbot'
import type { Manifest } from 'vite'

import { resolvePath } from 'server/common/helpers/paths.js'
import { AssetCollectorService } from 'server/modules/asset-collector/asset-collector.service.js'
import { Route } from '../../../plugins/generate-routes-manifest.js'

const ABORT_RENDER_DELAY = 5000

export interface EntryRouteContextType {
	links: Array<Record<string, unknown>>
	meta: Record<string, string>
	scripts: Array<Record<string, unknown>>
	// routesManifest: any[]
}

export interface RenderOptions {
	url: string
	entryRouteContext: EntryRouteContextType
}

export type RenderFn = (options: RenderOptions) => ReactNode

export interface EntryModule {
	render: RenderFn
}

export interface BaseRenderOpts {
	entryMod: EntryModule
	entryRouteContext: EntryRouteContextType
	bootstrapModules?: string[]
}

export class RenderService {
	#manifest?: Manifest
	routesManifest: Route[] = []

	constructor(protected readonly assetCollectorService: AssetCollectorService) {}

	protected loadModule<T>(path: string): Promise<T> {
		return import(resolvePath(path)) as Promise<T>
	}

	protected collectRouteAssets(
		entryContext: EntryRouteContextType,
		matches: Array<RouteMatch<string, Route>>,
		entryPath: string,
	) {
		assert(this.#manifest, 'Manifest not found')
		assert(this.routesManifest, 'Pages Manifest not found')

		// Common

		const commonAssets = this.assetCollectorService.collectByManifest(this.#manifest, entryPath)
		entryContext.links.push(...commonAssets.links)
		entryContext.scripts.push(...commonAssets.scripts)

		// Routes

		for (const match of matches) {
			const routeAssets = this.assetCollectorService.collectByManifest(this.#manifest, match.route.id)
			entryContext.links.push(...routeAssets.links)
			entryContext.scripts.push(...routeAssets.scripts)
		}
	}

	protected collectRouteMeta(entryContext: EntryRouteContextType, matches: Array<RouteMatch<string, Route>>) {
		// TODO: Add meta collecting via manifest
		return
	}

	protected createEntryRouteContext(entryPath: string, url: string): EntryRouteContextType {
		const entryContext: EntryRouteContextType = { links: [], scripts: [], meta: {} }
		const matches = matchRoutes<Route>(this.routesManifest, url) ?? []

		this.collectRouteAssets(entryContext, matches, entryPath)
		this.collectRouteMeta(entryContext, matches)

		return entryContext
	}

	// Public

	async init(server?: FastifyInstance): Promise<void>
	async init(): Promise<void> {
		this.#manifest = JSON.parse(await readFile(resolvePath('dist/client/manifest.json'), 'utf-8')) as Manifest

		this.routesManifest = JSON.parse(
			await readFile(resolvePath('dist/server/routes.manifest.json'), 'utf-8'),
		) as Route[]
	}

	protected renderBase(req: FastifyRequest, res: FastifyReply, opts: BaseRenderOpts): Promise<PassThrough> {
		const { entryMod, entryRouteContext, bootstrapModules } = opts

		// Inject entry context like script for client side
		entryRouteContext.scripts.push({
			id: '__ENTRY_ROUTE_CONTEXT__',
			type: 'application/json',
			content: JSON.stringify(entryRouteContext),
		})

		const node = entryMod.render({ url: req.url, entryRouteContext })

		const ua = typeof req.headers === 'object' ? req.headers['user-agent'] : null
		const callbackName = !ua || isbot(ua) ? 'onAllReady' : 'onShellReady'

		let didError = false
		return new Promise((resolve, reject) => {
			const stream = renderToPipeableStream(node, {
				bootstrapModules,
				[callbackName]() {
					const body = new PassThrough()
					if (didError) res.statusCode = 500
					void res.type('text/html')
					resolve(body)
					stream.pipe(body)
				},
				onShellError(err) {
					reject(err)
				},
				onError(err) {
					didError = true
					console.error(err)
				},
			})

			setTimeout(() => stream.abort(), ABORT_RENDER_DELAY)
		})
	}

	async renderApp(req: FastifyRequest, res: FastifyReply): Promise<PassThrough> {
		const entryMod = await this.loadModule<EntryModule>('dist/server/app.server.js')
		const entryRouteContext = this.createEntryRouteContext('client/entries/app.client.tsx', req.url)
		return this.renderBase(req, res, { entryMod, entryRouteContext })
	}

	async renderError(req: FastifyRequest, res: FastifyReply): Promise<PassThrough> {
		const entryMod = await this.loadModule<EntryModule>('dist/server/error.server.js')
		const entryRouteContext = this.createEntryRouteContext('client/entries/error.client.tsx', req.url)
		return this.renderBase(req, res, { entryMod, entryRouteContext })
	}
}
