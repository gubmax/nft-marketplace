import { useInsertionEffect } from 'react'

const TITLE_DEFAULT = 'NFT Platform'

export const useDocumentTitle = (title?: string): void => {
  useInsertionEffect(() => {
    const currTitle = title?.length ? `${title} · ${TITLE_DEFAULT}` : TITLE_DEFAULT
    document.title = currTitle
  }, [])
}
