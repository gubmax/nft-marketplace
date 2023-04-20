import { cn } from '@nft-marketplace/ui'

import Diamond from 'client/common/components/elements/diamond/diamond.js'
import PageWrapper from 'client/common/components/elements/page/page-wrapper/page-wrapper.js'
import { MetaFunction } from 'client/modules/entry-route/modules.js'
import e from '@nft-marketplace/ui/elements.module.css'

export const meta: MetaFunction = () => ({ title: 'Gaming' })

export default function GamingPage() {
	return (
		<PageWrapper>
			<div className="mb-10 flex flex-col items-center">
				<h1 className={cn(e.typographyH1, 'mb-10')}>Gaming NFT / IGO (Initial Game Offering)</h1>
				<Diamond />
			</div>
			<h2 className={cn(e.typographyH1, 'mb-5')}>What is IGO?</h2>
			<p className={cn(e.typographyP, 'mb-10')}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum placerat tortor, eget volutpat tortor
				imperdiet sed. Aliquam non vehicula mi. Integer et purus viverra magna fringilla malesuada. Aenean cursus nisl
				arcu, ac commodo neque vulputate ut. Nam luctus lorem at tincidunt lobortis. Phasellus non eleifend elit. Nunc
				eleifend venenatis aliquam. Ut libero tellus, viverra a ligula et, ultrices ultricies sem. Phasellus commodo
				nunc non augue pharetra, vel interdum dolor sagittis. Phasellus ac elit leo. Etiam nec est id quam elementum
				consequat. Mauris et justo auctor, scelerisque turpis viverra, egestas nunc. Nam sit amet lorem volutpat,
				ullamcorper libero at, iaculis diam. Fusce ultrices est nulla, vel pulvinar ex rhoncus vehicula. Aliquam enim
				sapien, pellentesque nec nisi eu, semper gravida nibh. Duis tellus justo, rutrum nec augue eget, dignissim
				condimentum nunc.
			</p>
			<h2 className={cn(e.typographyH1, 'mb-5')}>IGO Games</h2>
			<p className={cn(e.typographyP, 'mb-10')}>
				Sed fermentum sem in est maximus, vel fringilla erat convallis. Curabitur eu hendrerit augue. Aenean pulvinar
				sem eget purus rhoncus pellentesque. Cras convallis leo ligula, quis auctor orci semper sit amet. Donec mauris
				magna, pharetra sit amet feugiat ut, eleifend non lectus. Nullam iaculis suscipit scelerisque. Quisque vehicula
				arcu mi, a blandit nisl egestas id. Pellentesque dapibus lacinia nisi, nec maximus orci convallis eu. Cras
				elementum quam varius sem tincidunt ultricies. Maecenas finibus aliquam ante, sit amet mattis orci bibendum non.
				Donec vel felis in dui accumsan fringilla vel sit amet eros. Pellentesque nulla odio, consectetur eget commodo
				eget, condimentum sed elit. Sed mauris tellus, ultricies placerat semper quis, semper non mauris. Vestibulum
				malesuada justo sapien, et ullamcorper augue facilisis tincidunt. Interdum et malesuada fames ac ante ipsum
				primis in faucibus. Donec fringilla pretium purus id scelerisque.
			</p>
		</PageWrapper>
	)
}
