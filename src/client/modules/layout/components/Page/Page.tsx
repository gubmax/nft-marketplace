import { memo, MouseEvent, useCallback } from 'react'
import { useLocation, useNavigate, useRoutes } from 'react-router-dom'

import { A } from 'client/common/components/typography/Anchor'
import { cn } from 'client/common/helpers/classNames'
import * as a from 'client/common/styles/atomic.css'
import { Logo } from './components/Logo'
import { routes } from './routes'
import * as s from './Page.css'

function Page() {
  const location = useLocation()
  const navigate = useNavigate()
  const routeEl = useRoutes(routes, location)

  const goTo = useCallback(
    (path: string) => (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault()
      navigate(path)
    },
    [navigate],
  )

  return (
    <>
      <nav className={cn(s.header, a.flex, a.itemsCenter, a.gap4)}>
        {routes.map(({ name, path }) => (
          <A key={path} href={path} onClick={goTo(path)}>
            {name}
          </A>
        ))}
      </nav>
      <div className={s.wrapper}>
        <aside className={s.aside}>
          <div className={cn(s.logoWrapper, a.flex, a.itemsCenter, a.justifyCenter, a.gap1)}>
            <Logo />
          </div>
        </aside>
        <main className={s.main}>{routeEl}</main>
      </div>
      <footer className={s.footer}></footer>
    </>
  )
}

export default memo(Page)
