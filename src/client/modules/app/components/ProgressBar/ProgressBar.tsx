import { memo, useState } from 'react'
import { delay, filter, tap } from 'rxjs'

import { cn } from 'client/common/helpers/classNames'
import { useEffectOnce } from 'client/common/hooks/useEffectOnce'
import { useEnhancedEffect } from 'client/common/hooks/useEnhancedEffect'
import { useSubscription } from 'client/common/hooks/useSubscription'
import { preloadRoutesModel } from 'client/modules/preloadRoutes'
import { QueryStatuses } from 'client/modules/query'
import { LOADING_TRANSITION_DELAY } from './ProgressBar.constants'
import s from './ProgressBar.module.css'

function ProgressBar() {
  const [prehydrationLoading, setPrehydrationLoading] = useState(true)
  const { status } = useSubscription(preloadRoutesModel.query$)

  useEnhancedEffect(() => {
    const subscriprion = preloadRoutesModel.query$
      .pipe(
        filter((state) => state.status === QueryStatuses.SUCCESS),
        delay(LOADING_TRANSITION_DELAY),
        tap(() => preloadRoutesModel.reset()),
      )
      .subscribe()

    return () => subscriprion.unsubscribe()
  }, [])

  useEffectOnce(() => setPrehydrationLoading(false))

  return (
    <div
      className={cn(
        s.wrapper,
        (prehydrationLoading || status === QueryStatuses.LOADING) && s.loading,
        ((!prehydrationLoading && status === QueryStatuses.IDLE) ||
          status === QueryStatuses.SUCCESS) &&
          s.loadingEnd,
      )}
    />
  )
}

export default memo(ProgressBar)
