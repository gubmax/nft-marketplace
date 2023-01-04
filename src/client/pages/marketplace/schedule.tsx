import PageTitle from 'client/common/components/elements/page/page-title.js'
import { MetaFunction } from 'client/modules/entry-route/modules.js'

const PAGE_TITLE = 'Schedule'

export const meta: MetaFunction = () => ({ title: PAGE_TITLE })

export default function SchedulePage() {
  return <PageTitle>{PAGE_TITLE}</PageTitle>
}
