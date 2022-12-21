import { ReactNode } from 'react'
import { RouteObject } from 'react-router-dom'

import { PageRoutes } from 'client/common/constants.js'
import { dynamic, DynamicComponentType } from 'client/common/hocs/dynamic.js'
import { Layout } from 'client/modules/app/layout/layout.js'
import NotFoundPage from './routes/not-found.route.js'

const DynamicHomePage = dynamic(() => import('client/routes/home.route.js'))
const DynamicAboutPage = dynamic(() => import('client/routes/about.route.js'))
const DynamicMarketplacePage = dynamic(() => import('client/routes/marketplace.route.js'))
const DynamicShowcasePage = dynamic(() => import('client/routes/showcase.route.js'))
const DynamicCollectionPage = dynamic(() => import('client/routes/collection.route.js'))
const DynamicSalesPage = dynamic(() => import('client/routes/sales.route.js'))
const DynamicSchedulePage = dynamic(() => import('client/routes/schedule.route.js'))
const DynamicGamingPage = dynamic(() => import('client/routes/gaming.route.js'))

export type CustomRouteObject = RouteObject & {
  element: ReactNode | DynamicComponentType
}

export const CLIENT_ROUTES: CustomRouteObject[] = [
  {
    path: PageRoutes.HOME,
    element: <Layout />,
    children: [
      { path: '', element: <DynamicHomePage /> },
      { path: PageRoutes.ABOUT, element: <DynamicAboutPage /> },
      {
        path: PageRoutes.MARKETPLACE,
        element: <DynamicMarketplacePage />,
        children: [
          { path: '', element: <DynamicShowcasePage /> },
          { path: PageRoutes.COLLECTION, element: <DynamicCollectionPage /> },
          { path: PageRoutes.SALES, element: <DynamicSalesPage /> },
          { path: PageRoutes.SCHEDULE, element: <DynamicSchedulePage /> },
        ],
      },
      { path: PageRoutes.GAMING, element: <DynamicGamingPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]
