import { memo, useState } from 'react'
import { delay, filter, tap } from 'rxjs'

import { preloadRouteModel } from 'client/common/components/system/browser-router/models/preload-route.model.js'
import { cn } from 'client/common/helpers/class-names.js'
import { useEffectOnce } from 'client/common/hooks/use-effect-once.js'
import { useEnhancedEffect } from 'client/common/hooks/use-enhanced-effect.js'
import { useSubscription } from 'client/common/hooks/use-subscription.js'
import { QueryStatuses } from 'client/modules/query/query.model.js'
import s from './progress-bar.module.css'

const LOADING_TRANSITION_DELAY = 500

function ProgressBar() {
	const [prehydrationLoading, setPrehydrationLoading] = useState(true)
	const { status } = useSubscription(preloadRouteModel.queryObs)

	useEnhancedEffect(() => {
		const subscriprion = preloadRouteModel.queryObs
			.pipe(
				filter((state) => state.status === QueryStatuses.SUCCESS),
				delay(LOADING_TRANSITION_DELAY),
				tap(() => preloadRouteModel.reset()),
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
				((!prehydrationLoading && status === QueryStatuses.IDLE) || status === QueryStatuses.SUCCESS) && s.loadingEnd,
			)}
		/>
	)
}

export default memo(ProgressBar)
