import { style } from '@vanilla-extract/css'

import { dt } from 'client/common/styles/designTokens'
import { join, pxToRem } from 'client/common/styles/helpers'

export const wrapper = style({
  display: 'flex',
  alignItems: 'center',
  height: pxToRem(40),
  padding: join(0, dt.sys.space.s2),
  whiteSpace: 'nowrap',
  color: dt.ref.palette.secondary,
  fontWeight: 500,
  transition: 'background 100ms ease-out, boxShadow 100ms ease-out',

  ':hover': {
    background: dt.ref.palette.surface,
    boxShadow: join('inset', 0, 0, 0, dt.sys.border.width.s1, dt.ref.palette.borderLight),
  },

  ':active': {
    background: dt.ref.palette.accentDimm,
    boxShadow: join('inset', 0, 0, 0, dt.sys.border.width.s1, dt.ref.palette.accentDimm),
  },
})

export const wrapperActive = style({
  background: dt.ref.palette.surface,
  boxShadow: join('inset', 0, 0, 0, dt.sys.border.width.s1, dt.ref.palette.borderLight),
  color: dt.ref.palette.primary,
})
