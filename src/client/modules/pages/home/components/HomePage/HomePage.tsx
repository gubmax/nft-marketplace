import { memo } from 'react'

import { useDocumentTitle } from 'client/common/hooks/useDocumentTitle'
import { Discover } from 'client/modules/features/discover'
import { BasePageWrapper } from 'client/modules/layout/components/BasePageWrapper'

function Home() {
  useDocumentTitle()

  return (
    <BasePageWrapper>
      <Discover />
    </BasePageWrapper>
  )
}

export default memo(Home)
