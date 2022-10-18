import { memo } from 'react'

import { Tip } from 'client/common/components/surfaces/Tip'

function Discover() {
  return (
    <>
      <Tip>
        Edit <code>HomePage.tsx</code> and save to test HMR
      </Tip>
    </>
  )
}

export default memo(Discover)
