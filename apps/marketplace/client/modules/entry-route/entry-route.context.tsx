import { createContext, LinkHTMLAttributes, ScriptHTMLAttributes, useContext } from 'react'

// import type { Manifest } from 'vite'
import { invariant } from 'client/common/helpers/invariant.js'
import { ChildrenProp } from 'client/common/typings/children-prop.js'
import { HtmlMetaDescriptor } from './modules.js'

export interface EntryRouteContextType {
	links: Array<LinkHTMLAttributes<HTMLLinkElement>>
	meta: HtmlMetaDescriptor
	scripts: Array<ScriptHTMLAttributes<HTMLScriptElement> & { content: string }>
	// routesManifest: any[]
}

const EntryRouteContext = createContext<EntryRouteContextType | null>(null)

export function useEntryRouteContext(): EntryRouteContextType {
	const context = useContext(EntryRouteContext)
	invariant(context)
	return context
}

export function EntryRouteProvider({ value, children }: { value: EntryRouteContextType } & ChildrenProp) {
	return <EntryRouteContext.Provider value={value}>{children}</EntryRouteContext.Provider>
}
