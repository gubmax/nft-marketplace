import { memo, MouseEvent, useCallback } from 'react'
import { useLocation, useNavigate, useRoutes } from 'react-router-dom'

import { A } from 'client/common/components/typography/Anchor'
import { cn } from 'client/common/helpers/classNames'
import * as a from 'client/common/styles/atomic.css'
import { routes } from './routes'

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
    <div className={a.p4}>
      <nav>
        <ul className={cn(a.flex, a.gap3, a.mb4)}>
          {routes.map(({ name, path }) => (
            <li key={path}>
              <A href={path} onClick={goTo(path)}>
                {name}
              </A>
            </li>
          ))}
        </ul>
      </nav>
      {routeEl}
    </div>
  )
}

export default memo(Page)
