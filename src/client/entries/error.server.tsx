import { ReactNode, StrictMode } from 'react'

import { Document } from 'client/document'
import { Error } from 'client/modules/features/error'
import 'client/common/styles/global.css'

export function render(): ReactNode {
  return (
    <StrictMode>
      <Document entryRouteContext={{ prefetchLinks: [] }}>
        <Error />
      </Document>
    </StrictMode>
  )
}
