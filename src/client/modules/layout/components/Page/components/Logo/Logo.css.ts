import { style } from '@vanilla-extract/css'

import { dt } from 'client/common/styles/designTokens'

export const highlight = style({
  fontWeight: 700,
  backgroundImage: dt.ref.gradients.primary,
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
})
