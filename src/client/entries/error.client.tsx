import { hydrateRoot } from 'react-dom/client'

import { document } from 'client/document.js'
import Error from 'client/modules/features/error/error.js'
import 'client/common/styles/global.css'

hydrateRoot(
  window.document,
  document({
    entryRouteContext: { prefetchLinks: [] },
    content: <Error />,
  }),
)
