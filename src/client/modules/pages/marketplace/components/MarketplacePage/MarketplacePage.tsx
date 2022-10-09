import { memo } from 'react'

import { useDocumentTitle } from 'client/common/hooks/useDocumentTitle'
import { Marketplace } from 'client/modules/marketplace'

const PAGE_TITLE = 'Marketplace'

function MarketplacePage() {
  useDocumentTitle(PAGE_TITLE)

  return <Marketplace />
}

export default memo(MarketplacePage)
