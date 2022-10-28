import { memo } from 'react'
import { useLocation, useRoutes } from 'react-router-dom'

import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { ROUTES } from './routes'
import * as s from './Page.css'

function Page() {
  const location = useLocation()
  const routeEl = useRoutes(ROUTES, location)

  return (
    <>
      <Header className={s.header} />
      <main className={s.wrapper}>{routeEl}</main>
      <Footer />
    </>
  )
}

export default memo(Page)
