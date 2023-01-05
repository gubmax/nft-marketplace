import { AnchorHTMLAttributes } from 'react'

import { OpenInNewIcon } from 'client/common/components/icons.js'
import { cn } from 'client/common/helpers/class-names.js'
import { RefProp } from 'client/common/typings/ref-prop.js'
import { StyledProps } from 'client/common/typings/styled-props.js'
import s from './anchor.module.css'

export type AnchorProps = StyledProps & RefProp<HTMLAnchorElement> & AnchorHTMLAttributes<HTMLAnchorElement>

function Anchor({ className, innerRef, children, ...rest }: AnchorProps) {
	return (
		<a className={cn(s.link, 'inline-flex items-center', className)} ref={innerRef} {...rest}>
			{children}
			<OpenInNewIcon className="ml-1" size="sm" />
		</a>
	)
}

export default Anchor
