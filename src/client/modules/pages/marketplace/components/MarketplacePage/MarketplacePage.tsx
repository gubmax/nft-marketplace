import { memo } from 'react'

import { useDocumentTitle } from 'client/common/hooks/useDocumentTitle'
import { Marketplace } from 'client/modules/features/marketplace'
import { BasePageWrapper } from 'client/modules/layout/components/BasePageWrapper'

const PAGE_TITLE = 'Marketplace'

function MarketplacePage() {
  useDocumentTitle(PAGE_TITLE)

  return (
    <BasePageWrapper>
      <Marketplace />
    </BasePageWrapper>
  )
}

export default memo(MarketplacePage)
