import { memo } from 'react'

import { PageTitle } from 'client/common/components/elements/PageTitle'
import { BasePageWrapper } from 'client/modules/app'
import { About } from 'client/modules/features/about'
import { Head, Title } from 'client/modules/head'

const PAGE_TITLE = 'About'

function AboutPage() {
  return (
    <>
      <Head>
        <Title prefix={PAGE_TITLE} />
      </Head>
      <BasePageWrapper>
        <PageTitle>{PAGE_TITLE}</PageTitle>
        <About />
      </BasePageWrapper>
    </>
  )
}

export default memo(AboutPage)
