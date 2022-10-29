import { memo } from 'react'

import { Tip } from 'client/common/components/surfaces/Tip'
import * as a from 'client/common/styles/atomic.css'
import { AuthBanner } from 'client/modules/features/marketplace/components/AuthBanner'

function ShowcasePage() {
  return (
    <>
      <AuthBanner className={a.mb5} />
      <Tip>Edit some page and save to test HMR</Tip>
    </>
  )
}

export default memo(ShowcasePage)
