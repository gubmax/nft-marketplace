import { style } from '@vanilla-extract/css'

import { dt } from 'client/common/styles/designTokens'

export const wrapper = style({
  padding: dt.sys.space.s4,
  background: dt.ref.palette.accentDimm,
  color: dt.ref.palette.accentLight,
  border: `${dt.sys.border.width.s1} solid ${dt.ref.palette.accent}`,
  borderRadius: dt.sys.border.radius.s2,
})
