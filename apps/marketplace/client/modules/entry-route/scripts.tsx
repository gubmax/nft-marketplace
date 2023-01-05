import { useEntryRouteContext } from 'client/modules/entry-route/entry-route.context.js'

function Scripts() {
	const { scripts } = useEntryRouteContext()

	return (
		<>
			{scripts.map(({ content, ...rest }, index) => {
				if (rest.type === 'application/json')
					return <script key={index} {...rest} dangerouslySetInnerHTML={{ __html: content }} />
				return <script key={index} {...rest} />
			})}
		</>
	)
}

export default Scripts
