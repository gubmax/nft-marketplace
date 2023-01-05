import { hydrateRoot } from 'react-dom/client'

import BrowserRouter from 'client/common/components/system/browser-router/browser-router.js'
import { getJSONData } from 'client/common/helpers/get-json-data.js'
import { invariant } from 'client/common/helpers/invariant.js'
import { reportWebVitals } from 'client/common/utils/report-web-vitals.js'
import { document } from 'client/document.js'
import App from 'client/modules/app/app.js'
import type { EntryRouteContextType } from 'client/modules/entry-route/entry-route.context.js'
import 'client/common/styles/global.css'

const entryRouteContext = getJSONData<EntryRouteContextType>('__ENTRY_ROUTE_CONTEXT__')
invariant(entryRouteContext)

hydrateRoot(
	window.document,
	document({
		entryRouteContext,
		content: (
			<BrowserRouter>
				<App />
			</BrowserRouter>
		),
	}),
)

if (import.meta.env.PROD) {
	reportWebVitals(console.log)
}
