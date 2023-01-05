import PageWrapper from 'client/common/components/elements/page/page-wrapper/page-wrapper.js'
import { MetaFunction } from 'client/modules/entry-route/modules.js'
import Discover from 'client/modules/features/discover/discover.js'

export const meta: MetaFunction = () => ({ title: 'Acme' })

export default function HomePage() {
	return (
		<PageWrapper>
			<Discover />
		</PageWrapper>
	)
}
