import { memo } from 'react'

import { PageTitle } from 'client/common/components/elements/PageTitle'

const PAGE_TITLE = 'Collections'

function CollectionsRoute() {
  return <PageTitle>{PAGE_TITLE}</PageTitle>
}

export default memo(CollectionsRoute)
