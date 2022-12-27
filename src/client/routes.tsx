import { ReactNode } from 'react'
import { RouteObject } from 'react-router-dom'
import { routes as routesManifest } from 'virtual:routes-manifest'

import { dynamic, DynamicComponentType, DynamicModule } from './common/hocs/dynamic.js'
import Layout from './modules/app/layout/layout.js'
import NotFoundPage from './not-found.js'

// Pages by folder structure

const modules = import.meta.glob<DynamicModule>('/src/client/pages/**/*.tsx')

export type CustomRouteObject = RouteObject & {
  element: ReactNode | DynamicComponentType
  children?: CustomRouteObject[]
}

function enhanceRoutes(arr: CustomRouteObject[]): void {
  for (const route of arr) {
    if (route.id) {
      const DynamicPage = dynamic(modules[`/${route.id}`])
      route.element = <DynamicPage />
    }
    if (route.children) enhanceRoutes(route.children)
  }
}

const customRoutes = routesManifest as CustomRouteObject[]
enhanceRoutes(customRoutes)

// All routes

export const routes: CustomRouteObject[] = [
  {
    element: <Layout />,
    children: [...customRoutes, { path: '*', element: <NotFoundPage /> }],
  },
]
