import { ReactNode } from 'react'
import { RouteObject } from 'react-router-dom'
import { routes as clientRoutes } from 'virtual:routes-manifest'

import { dynamic, DynamicComponentType, DynamicModule } from './common/hocs/dynamic.js'
import Layout from './modules/app/layout/layout.js'
import NotFoundPage from './not-found.js'

// Pages by folder structure

const modules = import.meta.glob<DynamicModule>('/src/client/pages/**/*.tsx')

export type CustomRouteObject = RouteObject & {
  element: ReactNode | DynamicComponentType
}

function enhanceRoutes(routeArr: Route[]): void {
  for (const route of routeArr) {
    const DynamicPage = dynamic(modules[`/${route.id}`])
    ;(route as CustomRouteObject).element = <DynamicPage />
    enhanceRoutes(route.children)
  }
}

enhanceRoutes(clientRoutes)

// All routes

export const routes = [
  {
    element: <Layout />,
    children: [...clientRoutes, { path: '*', element: <NotFoundPage /> }],
  },
]
