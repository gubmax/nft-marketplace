import { cn } from 'client/common/helpers/class-names.js'
import { ChildrenProp } from 'client/common/typings/children-prop.js'
import { StyledProps } from 'client/common/typings/styled-props.js'
import s from './page-wrapper.module.css'

type BasePageWrapperProps = ChildrenProp & StyledProps

function PageWrapper({ className, style, children }: BasePageWrapperProps) {
	return (
		<div className={cn(s.wrapper, 'mx-auto', className)} style={style}>
			{children}
		</div>
	)
}

export default PageWrapper
