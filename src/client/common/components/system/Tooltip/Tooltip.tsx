import { ReactNode } from 'react'

import { cn } from 'client/common/helpers/classNames'
import { StyledProps } from 'client/common/typings'
import * as s from './Tooltip.css'

export type TooltipPositions = 'top' | 'right' | 'bottom' | 'left'

export interface TooltipProps extends StyledProps {
  position?: TooltipPositions
  children(activationClassName: string): ReactNode
  content: ReactNode
}

const Tooltip = ({ children, className, content, position = 'top', style }: TooltipProps) => {
  return (
    <div className={cn(s.wrapper, className)} style={style}>
      {children(s.activator)}
      <div className={cn(s.tooltip, s.tooltipVariants[position])}>{content}</div>
    </div>
  )
}

export default Tooltip
