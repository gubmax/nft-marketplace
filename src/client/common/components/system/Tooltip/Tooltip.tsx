import { ReactNode } from 'react'

import { cn } from 'client/common/helpers/classNames'
import e from 'client/common/styles/elements.module.css'
import { StyledProps } from 'client/common/typings'
import s from './Tooltip.module.css'

export type TooltipPositions = 'top' | 'right' | 'bottom' | 'left'

export interface TooltipProps extends StyledProps {
  position?: TooltipPositions
  children(activationClassName: string): ReactNode
  content: ReactNode
}

const classNameVariantByPosition: Record<TooltipPositions, string> = {
  top: s.variant_top,
  right: s.variant_right,
  bottom: s.variant_bottom,
  left: s.variant_left,
}

const Tooltip = ({ children, className, content, position = 'top', style }: TooltipProps) => {
  return (
    <div className={cn(s.wrapper, className)} style={style}>
      {children(s.activator)}
      <div className={cn(s.tooltip, classNameVariantByPosition[position], e.typography_subtitle)}>
        {content}
      </div>
    </div>
  )
}

export default Tooltip
