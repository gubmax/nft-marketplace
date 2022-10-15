import { RouteObject } from 'react-router-dom'

import { PageRoutes } from 'client/common/constants'
import { AboutPage } from 'client/modules/pages/about'
import { HomePage } from 'client/modules/pages/home'
import { MarketplacePage } from 'client/modules/pages/marketplace'

export const routes: RouteObject[] = [
  { path: PageRoutes.HOME, element: <HomePage /> },
  { path: PageRoutes.ABOUT, element: <AboutPage /> },
  { path: PageRoutes.MARKETPLACE, element: <MarketplacePage /> },
]
