import { memo, useCallback, MouseEvent } from 'react'
import { useLocation, useRoutes, useNavigate } from 'react-router-dom'

import { A } from 'client/common/components/typography/Anchor'
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
    [navigate]
  )

  return (
    <div className={s.wrapper}>
      <nav>
        <ul className={s.links}>
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
