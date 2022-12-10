import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'

import { BrowserRouter } from 'client/common/components/system/BrowserRouter'
import { EntryRouteContextType } from 'client/common/context/entryRouteContext'
import { getJSONData } from 'client/common/helpers/getJSONData'
import invariant from 'client/common/helpers/invariant'
import { Document } from 'client/document'
import { App } from 'client/modules/app'
import { reportWebVitals } from 'client/modules/webVitals'
import 'client/common/styles/global.css'

const entryRouteContext = getJSONData<EntryRouteContextType>('__ENTRY_ROUTE_CONTEXT__')
invariant(entryRouteContext)

hydrateRoot(
  document,
  <StrictMode>
    <Document entryRouteContext={entryRouteContext}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Document>
  </StrictMode>,
)

if (import.meta.env.PROD) {
  reportWebVitals(console.log)
}
