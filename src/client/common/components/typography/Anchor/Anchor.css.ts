import { style } from '@vanilla-extract/css'

import { dt } from 'client/common/styles/designTokens'

export const link = style({
  color: 'inherit',
  borderBottomWidth: dt.sys.border.width.s1,
  borderStyle: 'dashed',
  borderColor: 'currentColor',
  borderRadius: dt.sys.border.radius.s1,
  transition: 'color 100ms ease-out, borderColor 100ms ease-out',

  ':focus': {
    color: dt.ref.palette.accent,
    borderColor: dt.ref.palette.accent,
  },
})
