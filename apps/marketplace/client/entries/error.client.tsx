import { hydrateRoot } from 'react-dom/client'

import { getJSONData } from 'client/common/helpers/get-json-data.js'
import { invariant } from 'client/common/helpers/invariant.js'
import { document } from 'client/document.js'
import { EntryRouteContextType } from 'client/modules/entry-route/entry-route.context.js'
import Error from 'client/modules/features/error/error.js'
import 'client/common/styles/global.css'

const entryRouteContext = getJSONData<EntryRouteContextType>('__ENTRY_ROUTE_CONTEXT__')
invariant(entryRouteContext)

hydrateRoot(
	window.document,
	document({
		entryRouteContext,
		content: <Error />,
	}),
)
