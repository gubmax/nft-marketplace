import { memo } from 'react'
import { Link, useLocation, useRoutes } from 'react-router-dom'

import { routes } from './routes'
import './reset.css'

function App() {
  const location = useLocation()
  const routeEl = useRoutes(routes, location)
  
  return (
    <>
      <nav>
        <ul>
          {routes.map(({ name, path }) => {
            return (
              <li key={path}>
                <Link to={path}>{name}</Link>
              </li>
            )
          })}
        </ul>
      </nav>
      {routeEl}
    </>
  )
}

export default memo(App)
