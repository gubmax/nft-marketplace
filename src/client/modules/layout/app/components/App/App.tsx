import { memo, StrictMode } from 'react'

import { useSsrDataRemoval } from 'client/common/hooks/useSsrDataRemoval'
import { CommonSvg } from '../CommonSvg'
import { Page } from '../Page'

function App() {
  useSsrDataRemoval()

  return (
    <StrictMode>
      <Page />
      <CommonSvg />
    </StrictMode>
  )
}

export default memo(App)
