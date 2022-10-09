import { ComplexStyleRule, style, styleVariants } from '@vanilla-extract/css'

import { pxToRem } from 'client/common/helpers/pxToRem'
import { dt } from 'client/common/styles/designTokens'
import { ButtonSize } from './Button'

export const wrapper = style({
  fontSize: dt.sys.fontSize.subtitle1,
  borderRadius: dt.sys.border.radius.s2,
})

export const loaderSizes = styleVariants<Record<ButtonSize, ComplexStyleRule>>({
  sm: {
    minWidth: pxToRem(100),
    height: pxToRem(32),
  },
  md: {
    minWidth: pxToRem(120),
    height: pxToRem(36),
  },
})

export const inner = style({
  borderRadius: dt.sys.border.radius.s2,
})
