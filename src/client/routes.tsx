import { RouteObject } from 'react-router-dom'

import { PageRoutes } from 'client/common/constants'
import { Page } from 'client/modules/layout/app'
import { AboutPage } from 'client/modules/pages/about'
import { CollectionPage } from 'client/modules/pages/collection'
import { HomePage } from 'client/modules/pages/home'
import { MarketplacePage } from 'client/modules/pages/marketplace'
import { NotFoundPage } from 'client/modules/pages/notFound'
import { SalesPage } from 'client/modules/pages/sales'
import { SchedulePage } from 'client/modules/pages/schedule'
import { ShowcasePage } from 'client/modules/pages/showcase'

export const ROUTES: RouteObject[] = [
  {
    path: PageRoutes.HOME,
    element: <Page />,
    children: [
      { path: '', element: <HomePage /> },
      { path: PageRoutes.ABOUT, element: <AboutPage /> },
      {
        path: PageRoutes.MARKETPLACE,
        element: <MarketplacePage />,
        children: [
          { path: '', element: <ShowcasePage /> },
          { path: PageRoutes.COLLECTION, element: <CollectionPage /> },
          { path: PageRoutes.SALES, element: <SalesPage /> },
          { path: PageRoutes.SCHEDULE, element: <SchedulePage /> },
        ],
      },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]
