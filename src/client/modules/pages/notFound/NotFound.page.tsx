import { memo } from 'react'

import { NotFound } from 'client/modules/features/notFound'
import { Head, Title } from 'client/modules/head'

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
