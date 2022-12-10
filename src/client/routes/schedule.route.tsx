import { memo } from 'react'

import { PageTitle } from 'client/common/components/elements/PageTitle'

const PAGE_TITLE = 'Schedule'

function ScheduleRoute() {
  return <PageTitle>{PAGE_TITLE}</PageTitle>
}

export default memo(ScheduleRoute)
