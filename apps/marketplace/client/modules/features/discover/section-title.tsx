import { cn } from '@nft-marketplace/ui/helpers/class-names.js'

import { ChildrenProp } from 'client/common/typings/children-prop.js'
import e from '@nft-marketplace/ui/elements.module.css'

function SectionTitle({ children }: ChildrenProp) {
	return <h2 className={cn(e.typographyH1, 'mb-5')}>{children}</h2>
}

export default SectionTitle
