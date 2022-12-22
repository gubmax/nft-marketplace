import { createContext, useContext } from 'react'

// import type { Manifest } from 'vite'
import { invariant } from 'client/common/helpers/invariant.js'
import { ChildrenProp } from 'client/common/typings/children-prop.js'

export interface EntryRouteContextType {
  prefetchLinks: Array<Record<string, string>>
  // matches: any[]
  // routeModules: any[]
  // manifest: Manifest
}

const EntryRouteContext = createContext<EntryRouteContextType | null>(null)

export function useEntryRouteContext(): EntryRouteContextType {
  const context = useContext(EntryRouteContext)
  invariant(context)
  return context
}

export function EntryRouteProvider({
  value,
  children,
}: { value: EntryRouteContextType } & ChildrenProp) {
  return <EntryRouteContext.Provider value={value}>{children}</EntryRouteContext.Provider>
}