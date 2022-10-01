import { memo } from 'react'

import { cn } from 'client/common/helpers/classNames'
import { StyledProps } from 'client/common/typings'
import * as s from './Loader.css'

export type LoaderVariant = 'primary' | 'light'
export type LoaderSize = 'sm' | 'md'

export interface LoaderProps extends StyledProps {
  variant?: LoaderVariant
  size?: LoaderSize
}

function Loader({ variant = 'primary', size = 'md', className, style }: LoaderProps) {
  return (
    <span className={cn(s.loader, className)} style={style}>
      <span className={cn(s.spinner, s.loaderVariants[variant], s.loaderSizes[size])} />
    </span>
  )
}

export default memo(Loader)
