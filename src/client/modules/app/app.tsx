import { memo } from 'react'
import { useRoutes } from 'react-router-dom'

import { CLIENT_ROUTES } from 'client/client-routes.js'
import CommonSvg from './common-svg/common-svg.js'
import ProgressBar from './progress-bar/progress-bar.js'

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
