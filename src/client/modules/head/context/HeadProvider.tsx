import { createContext, ReactElement } from 'react'

import { ChildrenProp } from 'client/common/typings'

export interface HeadExtractor {
  getHead(): string
  addServerTag(el: ReactElement | ReactElement[]): void
}

export interface HeadProviderProps extends ChildrenProp {
  extractor?: HeadExtractor
}

export const HeadContext = createContext<HeadExtractor | null>(null)

export function HeadProvider({ extractor, children }: HeadProviderProps) {
  return <HeadContext.Provider value={extractor ?? null}>{children}</HeadContext.Provider>
}
