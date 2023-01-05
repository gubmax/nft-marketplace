import { ElementType, FC, MouseEventHandler } from 'react'

import { cn } from 'client/common/helpers/class-names.js'
import { AsProp } from 'client/common/typings/as-prop.js'
import { ChildrenProp } from 'client/common/typings/children-prop.js'
import { StyledProps } from 'client/common/typings/styled-props.js'
import s from './interactive-wrapper.module.css'

export type InteractiveWrapperProps = {
	active?: boolean
	onClick: MouseEventHandler<HTMLDivElement & HTMLLIElement>
} & ChildrenProp &
	StyledProps &
	AsProp<'div' | 'li' | 'a'>

const InteractiveWrapper: FC<InteractiveWrapperProps> = ({ as: asProp, active, children, className, ...rest }) => {
	const Tag = (asProp as ElementType | undefined) ?? 'div'

	return (
		<Tag className={cn(s.wrapper, active && s.active, className)} role="link" tabIndex={0} {...rest}>
			{children}
		</Tag>
	)
}

export default InteractiveWrapper
