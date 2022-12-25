import { memo } from 'react'
import { useOutlet } from 'react-router-dom'

import { Footer } from './footer/footer.js'
import { Header } from './header/header.js'
import s from './layout.module.css'

function Layout() {
  const routeEl = useOutlet()

  return (
    <>
      <Header className={s.header} />
      <main className={s.wrapper}>{routeEl}</main>
      <Footer />
    </>
  )
}

export default memo(Layout)
