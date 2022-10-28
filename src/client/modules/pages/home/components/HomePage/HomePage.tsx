import { memo } from 'react'

import { Discover } from 'client/modules/features/discover'
import { Head, Title } from 'client/modules/head'
import { BasePageWrapper } from 'client/modules/layout/components/BasePageWrapper'

function HomePage() {
  return (
    <>
      <Head>
        <Title />
      </Head>
      <BasePageWrapper>
        <Discover />
      </BasePageWrapper>
    </>
  )
}

export default memo(HomePage)
