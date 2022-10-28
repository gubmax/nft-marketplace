import { createContext, ReactElement } from 'react'

import { useEnhancedEffect } from 'client/common/hooks/useEnhancedEffect'
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
  useEnhancedEffect(() => {
    const ssrTags = document.head.querySelectorAll('[data-head=""]')

    for (const tag of ssrTags) {
      document.head.removeChild(tag)
    }
  }, [])

  return <HeadContext.Provider value={extractor ?? null}>{children}</HeadContext.Provider>
}
