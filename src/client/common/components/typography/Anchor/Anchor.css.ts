import { style } from '@vanilla-extract/css'

import { dt } from 'client/common/styles/designTokens'

export const link = style({
  color: dt.ref.palette.secondary,
  borderBottomWidth: dt.sys.border.width.md,
  borderStyle: 'dashed',
  borderColor: 'inherit',
  transition: 'color 100ms ease-out, borderColor 100ms ease-out',

  ':focus': {
    color: dt.ref.palette.accent,
    borderColor: dt.ref.palette.accent,
  },
})
