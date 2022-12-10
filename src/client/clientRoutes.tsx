import { ReactNode } from 'react'
import { RouteObject } from 'react-router-dom'

import { PageRoutes } from 'client/common/constants'
import { Layout } from 'client/modules/app/components/Layout'
import { dynamic, DynamicComponentType } from './modules/dynamic'
import NotFoundPage from './routes/notFound.route'

const DynamicHomePage = dynamic(() => import('client/routes/home.route'))
const DynamicAboutPage = dynamic(() => import('client/routes/about.route'))
const DynamicMarketplacePage = dynamic(() => import('client/routes/marketplace.route'))
const DynamicShowcasePage = dynamic(() => import('client/routes/showcase.route'))
const DynamicCollectionPage = dynamic(() => import('client/routes/collection.route'))
const DynamicSalesPage = dynamic(() => import('client/routes/sales.route'))
const DynamicSchedulePage = dynamic(() => import('client/routes/schedule.route'))

export type CustomRouteObject = Pick<RouteObject, 'path' | 'element' | 'children'> & {
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
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]
