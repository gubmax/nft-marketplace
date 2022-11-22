import { memo } from 'react'

import { cn } from 'client/common/helpers/classNames'
import { StyledProps } from 'client/common/typings'
import s from './Loader.module.css'

export type LoaderVariant = 'primary' | 'body'
export type LoaderSize = 'sm' | 'md'

const classNameByVariant: Record<LoaderVariant, string> = {
  primary: s.variant_primary,
  body: s.variant_body,
}

const classNameBySize: Record<LoaderSize, string> = {
  sm: s.size_sm,
  md: s.size_md,
}

export interface LoaderProps extends StyledProps {
  variant?: LoaderVariant
  size?: LoaderSize
}

function Loader({ variant = 'primary', size = 'md', className, style }: LoaderProps) {
  return (
    <span className={cn(s.loader, className)} style={style}>
      <span className={cn(s.spinner, classNameByVariant[variant], classNameBySize[size])} />
    </span>
  )
}

export default memo(Loader)
