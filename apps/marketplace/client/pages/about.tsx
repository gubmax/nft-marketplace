import { Button } from '@nft-marketplace/ui'

import PageTitle from 'client/common/components/elements/page/page-title.js'
import PageWrapper from 'client/common/components/elements/page/page-wrapper/page-wrapper.js'
import { MetaFunction } from 'client/modules/entry-route/modules.js'
import About from 'client/modules/features/about.js'

const PAGE_TITLE = 'About'

export const meta: MetaFunction = () => ({ title: PAGE_TITLE })

export default function AboutPage() {
	return (
		<PageWrapper>
			<PageTitle>{PAGE_TITLE}</PageTitle>
			<Button />
			<About />
		</PageWrapper>
	)
}
