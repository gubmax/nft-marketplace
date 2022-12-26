import { ElementType, ReactElement } from 'react'
import { matchRoutes, RouteMatch } from 'react-router-dom'
import { Update } from 'history'
import { from, map, of, Subject, switchMap, tap } from 'rxjs'

import { DynamicComponentType } from 'client/common/hocs/dynamic.js'
import { QueryModel } from 'client/modules/query/query.model.js'
import { CustomRouteObject, routes } from 'client/routes.js'

type LoaderFunction = () => Promise<{ default: ElementType }>

class PreloadRouteModel extends QueryModel<void[] | void> {
  #loadedModules = new WeakSet<LoaderFunction>()
  updateSubject = new Subject<Update>()

  preloadObs = this.updateSubject.pipe(
    // Reset query state
    tap(() => this.reset()),
    // Preload chunk
    switchMap((update) => {
      const loaders: LoaderFunction[] = []
      const matchedRoutes = matchRoutes<CustomRouteObject>(routes, update.location)

      if (matchedRoutes === null) return of(update)

      const match = (routes: Array<RouteMatch<string, CustomRouteObject>>) => {
        for (const routeObj of routes) {
          const elWithLoader = routeObj.route.element as ReactElement<unknown, DynamicComponentType>

          if (typeof elWithLoader === 'object' && 'loader' in elWithLoader.type) {
            const { loader } = elWithLoader.type
            if (!this.#loadedModules.has(loader)) loaders.push(loader)
          }
        }
      }

      match(matchedRoutes)

      if (!loaders.length) return of(update)

      const loaderPromises = loaders.map(async (loader) => {
        await loader()
        this.#loadedModules.add(loader)
      })

      const queryPromise = this.run(() => Promise.all(loaderPromises))

      return from(queryPromise).pipe(map(() => update))
    }),
  )
}

export const preloadRouteModel = new PreloadRouteModel()
