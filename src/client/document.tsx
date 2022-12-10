import { Links } from './common/components/entryRoute/Links'
import { LiveReload } from './common/components/entryRoute/LiveReload'
import { Meta } from './common/components/entryRoute/Meta'
import { Scripts } from './common/components/entryRoute/Scripts'
import { Title } from './common/components/entryRoute/Title'
import { EntryRouteContextType, EntryRouteProvider } from './common/context/entryRouteContext'
import { ChildrenProp } from './common/typings'

interface DocumentProps extends ChildrenProp {
  entryRouteContext: EntryRouteContextType
}

export function Document({ children, entryRouteContext }: DocumentProps) {
  return (
    <EntryRouteProvider value={entryRouteContext}>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <Meta />
          <Title />
          <link rel="icon" type="image/svg+xml" href="/vite.svg" />
          <Links />
        </head>
        <body>
          {children}
          <LiveReload />
          <Scripts />
        </body>
      </html>
    </EntryRouteProvider>
  )
}
