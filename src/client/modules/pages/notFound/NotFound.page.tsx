import { memo } from 'react'

import { Head, Title } from 'client/modules/head'
import { NotFound } from 'client/modules/layout/notFound'

function NotFoundPage() {
  return (
    <>
      <Head>
        <Title prefix="Page Not Found" />
      </Head>
      <NotFound />
    </>
  )
}

export default memo(NotFoundPage)
