import { ReactNode, StrictMode } from 'react'

import Links from 'client/modules/entry-route/links.js'
import LiveReload from 'client/modules/entry-route/live-reload.js'
import Meta from 'client/modules/entry-route/meta.js'
import Scripts from 'client/modules/entry-route/scripts.js'
import {
  EntryRouteContextType,
  EntryRouteProvider,
} from './modules/entry-route/entry-route.context.js'

interface DocumentOptions {
  entryRouteContext: EntryRouteContextType
  content: ReactNode
}

export function document({ entryRouteContext, content }: DocumentOptions) {
  return (
    <StrictMode>
      <EntryRouteProvider value={entryRouteContext}>
        <html lang="en">
          <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <Meta />
            <link rel="icon" type="image/svg+xml" href="/vite.svg" />
            <Links />
          </head>
          <body>
            {content}
            <LiveReload />
            <Scripts />
          </body>
        </html>
      </EntryRouteProvider>
    </StrictMode>
  )
}
