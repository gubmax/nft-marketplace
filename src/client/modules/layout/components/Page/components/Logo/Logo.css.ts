import { style } from '@vanilla-extract/css'

import { dt } from 'client/common/styles/designTokens'

export const link = style([
  dt.comp.typography.h3,
  {
    padding: dt.sys.space.s2,
    borderRadius: dt.sys.border.radius.s2,
  },
])

export const highlight = style({
  fontWeight: 700,
  backgroundImage: dt.ref.gradients.primary,
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
})
