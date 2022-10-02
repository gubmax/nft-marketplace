import { memo } from 'react'

import { useDocumentTitle } from 'client/common/hooks/useDocumentTitle'
import { dt } from 'client/common/styles/designTokens'

function Home() {
  useDocumentTitle()

  return (
    <div className={dt.comp.surface}>
      <h1>Vite + React</h1>
      <div>
        <p>
          Edit <code>HomePage.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  )
}

export default memo(Home)
