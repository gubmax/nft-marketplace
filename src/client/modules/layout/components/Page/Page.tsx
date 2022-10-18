import { memo } from 'react'
import { useLocation, useRoutes } from 'react-router-dom'

import { cn } from 'client/common/helpers/classNames'
import * as a from 'client/common/styles/atomic.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { routes } from './routes'
import * as s from './Page.css'

function Page() {
  const location = useLocation()
  const routeEl = useRoutes(routes, location)

  return (
    <>
      <Header className={s.header} />
      <main className={cn(s.wrapper, a.mxAuto)}>{routeEl}</main>
      <Footer />
    </>
  )
}

export default memo(Page)
