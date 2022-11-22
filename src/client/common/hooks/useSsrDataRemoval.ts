import { useEffect } from 'react'

export function useSsrDataRemoval(): void {
  useEffect(() => {
    const ssrTags = document.head.querySelectorAll('[data-ssr=""]')
    for (const tag of ssrTags) document.head.removeChild(tag)
  }, [])
}
