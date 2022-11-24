import { memo } from 'react'
import { useOutlet } from 'react-router-dom'

import { Footer } from './components/Footer'
import { Header } from './components/Header'
import s from './Page.module.css'

function Page() {
  const routeEl = useOutlet()

  return (
    <>
      <Header className={s.header} />
      <main className={s.wrapper}>{routeEl}</main>
      <Footer />
    </>
  )
}

export default memo(Page)
