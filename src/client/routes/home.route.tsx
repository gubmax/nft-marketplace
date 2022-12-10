import { memo } from 'react'

import { BasePageWrapper } from 'client/modules/app'
import { Discover } from 'client/modules/features/discover'

function HomeRoute() {
  return (
    <BasePageWrapper>
      <Discover />
    </BasePageWrapper>
  )
}

export default memo(HomeRoute)
