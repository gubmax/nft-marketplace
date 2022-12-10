import { useRef, useState } from 'react'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import { useEffectOnce } from 'client/common/hooks/useEffectOnce'
import { useEnhancedEffect } from 'client/common/hooks/useEnhancedEffect'
import { ChildrenProp } from 'client/common/typings'
import { preloadRoutesModel } from 'client/modules/preloadRoutes'

function BrowserRouter({ children }: ChildrenProp) {
  const { current: history } = useRef(createBrowserHistory({ window }))
  const [{ location }, setHistory] = useState({
    action: history.action,
    location: history.location,
  })

  useEnhancedEffect(() => {
    const unsubscribe = history.listen((update) => {
      if (update.location.pathname !== location.pathname) preloadRoutesModel.preload(update)
    })
    return () => unsubscribe()
  }, [history, location.pathname])

  useEffectOnce(() => {
    const unsubscribe = preloadRoutesModel.subscribe((update) => {
      if (!update) return
      setHistory(update)
      window.scrollTo(0, 0)
    })
    return () => unsubscribe()
  })

  return (
    <Router location={location} navigator={history}>
      {children}
    </Router>
  )
}

export default BrowserRouter
