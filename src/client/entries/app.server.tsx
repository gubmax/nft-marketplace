import { ReactNode, StrictMode } from 'react'
import { StaticRouter } from 'react-router-dom/server'

import { EntryRouteContextType } from 'client/common/context/entryRouteContext'
import { Document } from 'client/document'
import { App } from 'client/modules/app'
import 'client/common/styles/global.css'

export interface AppRenderOptions {
  url: string
  entryRouteContext: EntryRouteContextType
}

export function render({ url, entryRouteContext }: AppRenderOptions): ReactNode {
  return (
    <StrictMode>
      <Document entryRouteContext={entryRouteContext}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </Document>
    </StrictMode>
  )
}
