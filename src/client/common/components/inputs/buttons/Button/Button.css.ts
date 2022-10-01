import { style } from '@vanilla-extract/css'

import { pxToRem } from 'client/common/helpers/pxToRem'
import { dt } from 'client/common/styles/designTokens'

export const wrapper = style({
  minWidth: pxToRem(140),
  fontSize: dt.sys.fontSize.subtitle1,
  borderRadius: dt.sys.border.radius.s2,
})

export const inner = style({
  borderRadius: dt.sys.border.radius.s2,
})
