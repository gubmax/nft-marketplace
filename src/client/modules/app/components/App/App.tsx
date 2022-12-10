import { memo } from 'react'
import { useRoutes } from 'react-router-dom'

import { CLIENT_ROUTES } from 'client/clientRoutes'
import { CommonSvg } from '../CommonSvg'
import { ProgressBar } from '../ProgressBar'

function App() {
  const route = useRoutes(CLIENT_ROUTES)

  return (
    <>
      <ProgressBar />
      {route}
      <CommonSvg />
    </>
  )
}

export default memo(App)
