import { memo } from 'react'

import { Marketplace } from 'client/modules/features/marketplace'
import { Head, Title } from 'client/modules/head'

function MarketplacePage() {
  return (
    <>
      <Head>
        <Title prefix="Marketplace" />
      </Head>
      <Marketplace />
    </>
  )
}

export default memo(MarketplacePage)
