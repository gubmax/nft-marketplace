import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'

import { Document } from 'client/document'
import { Error } from 'client/modules/features/error'
import 'client/common/styles/global.css'

hydrateRoot(
  document,
  <StrictMode>
    <Document entryRouteContext={{ prefetchLinks: [] }}>
      <Error />
    </Document>
  </StrictMode>,
)
