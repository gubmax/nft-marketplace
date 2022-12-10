import { PageTitle } from 'client/common/components/elements/PageTitle'
import { BasePageWrapper } from 'client/modules/app'
import { About } from 'client/modules/features/about'

const PAGE_TITLE = 'About'

export const head = () => `
<title>${PAGE_TITLE}</title>
`

export default function AboutRoute() {
  return (
    <BasePageWrapper>
      <PageTitle>{PAGE_TITLE}</PageTitle>
      <About />
    </BasePageWrapper>
  )
}
