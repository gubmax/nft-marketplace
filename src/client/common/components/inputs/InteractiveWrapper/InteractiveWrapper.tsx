import { ElementType, FC, KeyboardEventHandler, MouseEventHandler } from 'react'

import { cn } from 'client/common/helpers/classNames'
import { AsProp, ChildrenProp, StyledProps } from 'client/common/typings'
import s from './InteractiveWrapper.module.css'

export type InteractiveWrapperProps = {
  active?: boolean
  onClick: MouseEventHandler<HTMLDivElement & HTMLLIElement>
  onKeyPress: KeyboardEventHandler<HTMLDivElement & HTMLLIElement>
} & ChildrenProp &
  StyledProps &
  AsProp<'div' | 'li'>

const InteractiveWrapper: FC<InteractiveWrapperProps> = ({
  as: asProp,
  active,
  children,
  className,
  ...rest
}) => {
  const Tag = (asProp as ElementType | undefined) ?? 'div'

  return (
    <Tag
      className={cn(s.wrapper, active && s.active, className)}
      role="link"
      tabIndex={0}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export default InteractiveWrapper
