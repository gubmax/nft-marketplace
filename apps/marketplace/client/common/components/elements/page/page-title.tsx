import { cn } from '@nft-marketplace/ui'

import { ChildrenProp } from 'client/common/typings/children-prop.js'
import e from '@nft-marketplace/ui/elements.module.css'

function PageTitle({ children }: ChildrenProp<string>) {
	return <h1 className={cn(e.typographyH1, 'mb-4')}>{children}</h1>
}

export default PageTitle
