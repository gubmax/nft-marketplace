import { memo, StrictMode } from 'react'

import { Page } from '../Page'

function App() {
  return (
    <StrictMode>
      <Page />
    </StrictMode>
  )
}

export default memo(App)
