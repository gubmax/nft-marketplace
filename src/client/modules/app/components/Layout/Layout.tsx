import { useOutlet } from 'react-router-dom'

import { Footer } from './components/Footer'
import { Header } from './components/Header'
import s from './Layout.module.css'

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

export default Layout
