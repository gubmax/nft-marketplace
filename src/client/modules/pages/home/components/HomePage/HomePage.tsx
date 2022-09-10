import { dt } from 'client/common/styles/designTokens'
import { memo } from 'react'

function Home() {
  return (
    <div className={dt.comp.surface}>
      <h1>Vite + React</h1>
      <div>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  )
}

export default memo(Home)
