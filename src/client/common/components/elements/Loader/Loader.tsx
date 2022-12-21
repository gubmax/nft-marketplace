import { memo } from 'react'

import { cn } from 'client/common/helpers/class-names.js'
import { StyledProps } from 'client/common/typings/styled-props.js'
import s from './loader.module.css'

export type LoaderVariant = 'primary' | 'body'
export type LoaderSize = 'sm' | 'md'

const classNameByVariant: Record<LoaderVariant, string> = {
  primary: s.variantPrimary,
  body: s.variantBody,
}

const classNameBySize: Record<LoaderSize, string> = {
  sm: s.sizeSm,
  md: s.sizeMd,
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
