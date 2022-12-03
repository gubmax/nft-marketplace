import { memo } from 'react'

import { BasePageWrapper } from 'client/modules/app'
import { Discover } from 'client/modules/features/discover'
import { Head, Title } from 'client/modules/head'

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
