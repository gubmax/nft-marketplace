import { memo, StrictMode } from 'react'

import { CommonSvg } from '../CommonSvg'
import { Page } from '../Page'

function App() {
  return (
    <StrictMode>
      <Page />
      <CommonSvg />
    </StrictMode>
  )
}

export default memo(App)
