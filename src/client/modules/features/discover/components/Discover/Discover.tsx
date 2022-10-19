import { memo } from 'react'

import { Tip } from 'client/common/components/surfaces/Tip'
import * as a from 'client/common/styles/atomic.css'
import { AuthBanner } from '../AuthBanner'

function Discover() {
  return (
    <>
      <AuthBanner className={a.mb5} />
      <Tip>
        Edit <code>HomePage.tsx</code> and save to test HMR
      </Tip>
    </>
  )
}

export default memo(Discover)
