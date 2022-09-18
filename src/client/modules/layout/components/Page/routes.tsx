import { RouteObject } from 'react-router-dom'

import { PageRoutes } from 'client/common/constants'
import { AboutPage } from 'client/modules/pages/about'
import { HomePage } from 'client/modules/pages/home'

interface Route extends RouteObject {
  path: string
  name: string
}

export const routes: Route[] = [
  { path: PageRoutes.HOME, name: 'home', element: <HomePage /> },
  { path: PageRoutes.ABOUT, name: 'about', element: <AboutPage /> },
]
