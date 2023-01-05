import { memo } from 'react'

import { cn } from 'client/common/helpers/class-names.js'
import e from 'client/common/styles/elements.module.css'
import HelpSection from './help-section.js'
import PresentSection from './present-section/present-section.js'
import SectionTitle from './section-title.js'

function Discover() {
	return (
		<>
			<PresentSection className="mb-10" />
			<SectionTitle>Explore all possibilities of Acme</SectionTitle>
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
			<SectionTitle>Your trusted crypto exchange</SectionTitle>
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
			<HelpSection />
		</>
	)
}

export default memo(Discover)
