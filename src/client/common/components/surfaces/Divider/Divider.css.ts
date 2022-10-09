import { style } from '@vanilla-extract/css'

import { dt } from 'client/common/styles/designTokens'

export const divider = style({
  height: dt.sys.border.width.s1,
  background: dt.ref.palette.border,
  borderWidth: 0,
})
