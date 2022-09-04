import { memo } from 'react'

function Home() {
  return (
    <>
      <h1>Vite + React</h1>
      <div>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default memo(Home)
