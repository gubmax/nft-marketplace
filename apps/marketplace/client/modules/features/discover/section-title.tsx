import { cn } from 'client/common/helpers/class-names.js'
import e from 'client/common/styles/elements.module.css'
import { ChildrenProp } from 'client/common/typings/children-prop.js'

function SectionTitle({ children }: ChildrenProp) {
	return <h2 className={cn(e.typographyH1, 'mb-5')}>{children}</h2>
}

export default SectionTitle
