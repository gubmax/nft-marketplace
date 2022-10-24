import { ComplexStyleRule, style, styleVariants } from '@vanilla-extract/css'

import { dt } from 'client/common/styles/designTokens'
import { join, pxToRem } from 'client/common/styles/helpers'
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
  padding: join(0, dt.sys.space.s3),
})
