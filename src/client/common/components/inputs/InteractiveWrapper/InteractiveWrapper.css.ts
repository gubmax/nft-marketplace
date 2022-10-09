import { style } from '@vanilla-extract/css'

import { dt } from 'client/common/styles/designTokens'

export const wrapper = style([
  {
    cursor: 'pointer',
    borderRadius: dt.sys.border.radius.s2,
  },
])

export const active = style({
  background: dt.ref.palette.accentLight,
})
