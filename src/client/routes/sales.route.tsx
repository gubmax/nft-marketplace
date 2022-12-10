import { memo } from 'react'

import { PageTitle } from 'client/common/components/elements/PageTitle'

const PAGE_TITLE = 'Sales'

function SalesRoute() {
  return <PageTitle>{PAGE_TITLE}</PageTitle>
}

export default memo(SalesRoute)
