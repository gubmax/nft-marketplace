import { style } from '@vanilla-extract/css'

import { dt } from 'client/common/styles/designTokens'

export const title = style([
  dt.comp.typography.body2,
  {
    display: 'block',
    color: dt.ref.palette.secondary,
    fontWeight: 500,
    textTransform: 'uppercase',
  },
])
