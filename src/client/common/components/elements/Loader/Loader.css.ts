import { ComplexStyleRule, keyframes, style, styleVariants } from '@vanilla-extract/css'

import { dt } from 'client/common/styles/designTokens'
import { join, pxToRem } from 'client/common/styles/helpers'
import { LoaderSize, LoaderVariant } from './Loader'

const spin = keyframes({
  from: { transform: 'rotate(0deg)' },
  to: { transform: 'rotate(360deg)' },
})

export const spinner = style({
  boxSizing: 'border-box',
  margin: 'auto',
  borderStyle: 'solid',
  borderColor: join('transparent', dt.ref.palette.accentLight),
  borderRadius: '50%',
  animation: join(spin, '0.65s', 'infinite', 'linear'),
})

export const loader = style({
  display: 'flex',
  transform: 'translateZ(0)',
  borderRadius: '50%',
})

export const loaderVariants = styleVariants<Record<LoaderVariant, ComplexStyleRule>>({
  accent: {},
  light: {
    borderRightColor: dt.sys.color.dark.primary,
    borderLeftColor: dt.sys.color.dark.primary,
  },
})

export const loaderSizes = styleVariants<Record<LoaderSize, ComplexStyleRule>>({
  sm: {
    width: pxToRem(20),
    height: pxToRem(20),
    borderWidth: pxToRem(2),
  },
  md: {
    width: pxToRem(44),
    height: pxToRem(44),
    borderWidth: pxToRem(3),
  },
})
