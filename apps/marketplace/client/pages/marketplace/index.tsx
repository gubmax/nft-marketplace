import Tip from 'client/common/components/surfaces/tip/tip.js'
import { MetaFunction } from 'client/modules/entry-route/modules.js'
import AuthBanner from 'client/modules/features/marketplace/auth-banner/auth-banner.js'

export const meta: MetaFunction = () => ({ title: 'Marketplace' })

export default function ShowcasePage() {
	return (
		<>
			<AuthBanner className="mb-5" />
			<Tip>Edit some page and save to test HMR</Tip>
		</>
	)
}
