import { memo } from 'react'
import { useLocation, useOutlet } from 'react-router-dom'

import { useEnhancedEffect } from 'client/common/hooks/useEnhancedEffect'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import s from './Page.module.css'

function Page() {
  const routeEl = useOutlet()
  const { pathname } = useLocation()

  useEnhancedEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <Header className={s.header} />
      <main className={s.wrapper}>{routeEl}</main>
      <Footer />
    </>
  )
}

export default memo(Page)
