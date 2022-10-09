import { memo } from 'react'

import { Tip } from 'client/common/components/surfaces/Tip'
import { useDocumentTitle } from 'client/common/hooks/useDocumentTitle'

function Home() {
  useDocumentTitle()

  return (
    <Tip>
      Edit <code>HomePage.tsx</code> and save to test HMR
    </Tip>
  )
}

export default memo(Home)
