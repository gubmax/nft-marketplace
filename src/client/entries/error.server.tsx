import { ReactNode } from 'react'

import { document } from 'client/document.js'
import Error from 'client/modules/features/error/error.js'
import 'client/common/styles/global.css'

export function render(): ReactNode {
  return document({
    entryRouteContext: { prefetchLinks: [] },
    content: <Error />,
  })
}
