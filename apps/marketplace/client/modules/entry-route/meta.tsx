import { useState } from 'react'

import { preloadRouteModel } from 'client/common/components/system/browser-router/models/preload-route.model.js'
import { useEffectOnce } from 'client/common/hooks/use-effect-once.js'
import { useEntryRouteContext } from 'client/modules/entry-route/entry-route.context.js'
import { HtmlMetaDescriptor } from './modules.js'

function Meta() {
	const { meta: entryRouteMeta } = useEntryRouteContext()
	const [meta, setMeta] = useState<HtmlMetaDescriptor>(entryRouteMeta)

	useEffectOnce(() => {
		const subscription = preloadRouteModel.preloadObs.subscribe(({ meta }) => setMeta(meta))
		return () => subscription.unsubscribe()
	})

	return (
		<>
			{Object.entries(meta).map(([name, value], index) => {
				if (name === 'title') return <title key={index}>{String(value)}</title>
				return <meta key={index} name={name} content={value} />
			})}
		</>
	)
}

export default Meta
