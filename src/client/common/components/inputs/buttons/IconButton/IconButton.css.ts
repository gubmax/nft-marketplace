import { style } from '@vanilla-extract/css'

import { dt } from 'client/common/styles/designTokens'
import { pxToRem } from 'client/common/styles/helpers'

export const rounded = style({
  borderRadius: dt.sys.border.radius.s2,
  width: pxToRem(36),
  minWidth: pxToRem(36),
})

export const inner = style({
  height: pxToRem(36),
  padding: 0,
})
