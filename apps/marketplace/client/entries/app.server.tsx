import { ReactNode } from 'react'
import { StaticRouter } from 'react-router-dom/server.js'

import { document } from 'client/document.js'
import App from 'client/modules/app/app.js'
import { EntryRouteContextType } from 'client/modules/entry-route/entry-route.context.js'
import '@nft-marketplace/ui/src/styles/globals.css'

export interface AppRenderOptions {
	url: string
	entryRouteContext: EntryRouteContextType
}

export function render({ url, entryRouteContext }: AppRenderOptions): ReactNode {
	return document({
		entryRouteContext,
		content: (
			<StaticRouter location={url}>
				<App />
			</StaticRouter>
		),
	})
}
