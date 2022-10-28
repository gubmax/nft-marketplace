import { ReactElement, useContext, useState } from 'react'
import { createPortal } from 'react-dom'

import { isBrowser } from 'client/common/helpers/environment'
import { useEnhancedEffect } from 'client/common/hooks/useEnhancedEffect'
import { ChildrenProp } from 'client/common/typings'
import { HeadContext } from '../../context/HeadProvider'

type HeadProps = ChildrenProp<ReactElement | ReactElement[]>

function Head({ children }: HeadProps) {
  const extractor = useContext(HeadContext)
  const [mounted, setMounted] = useState(false)

  useEnhancedEffect(() => setMounted(true), [])

  if (!isBrowser) {
    extractor?.addServerTag(children)
    return null
  }

  return mounted ? createPortal(children, document.head) : null
}

export default Head
