import { ReactNode } from 'react'

import { document } from 'client/document.js'
import { EntryRouteContextType } from 'client/modules/entry-route/entry-route.context.js'
import Error from 'client/modules/features/error/error.js'
import '@nft-marketplace/ui/globals.css'
import 'virtual:uno.css'

export interface ErrorRenderOptions {
	entryRouteContext: EntryRouteContextType
}

export function render({ entryRouteContext }: ErrorRenderOptions): ReactNode {
	return document({
		entryRouteContext,
		content: <Error />,
	})
}
