import { style } from '@vanilla-extract/css'

import { pxToRem } from 'client/common/helpers/pxToRem'
import { dt } from 'client/common/styles/designTokens'

export const rounded = style({
  width: pxToRem(40),
  minWidth: pxToRem(40),
})

export const inner = style({
  borderRadius: dt.sys.border.radius.s2,
})
