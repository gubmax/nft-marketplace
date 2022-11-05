import { style } from '@vanilla-extract/css'

import { dt } from 'client/common/styles/designTokens'
import { join, negative, pxToRem } from 'client/common/styles/helpers'

export const header = style([
  dt.comp.glass,
  {
    borderBottom: join(dt.sys.border.width.s1, 'solid', dt.ref.palette.borderLight),
  },
])

export const wrapper = style({
  height: pxToRem(56),
  minWidth: dt.sys.screen.tablet,
  maxWidth: dt.sys.screen.desktop,
  padding: join(0, dt.sys.space.s5),
})

export const logo = style({
  marginLeft: negative(dt.sys.space.s2),
})

export const link = style([
  dt.comp.typography.subtitle1,
  {
    padding: join(0, dt.sys.space.s3),
    lineHeight: pxToRem(36),
    borderRadius: dt.sys.border.radius.s2,
    transition: 'color 100ms ease-out, background 100ms ease-out, boxShadow 100ms ease-out',

    ':hover': {
      background: dt.ref.palette.surface,
      boxShadow: join('inset', 0, 0, 0, dt.sys.border.width.s1, dt.ref.palette.borderLight),
    },

    ':active': {
      background: dt.ref.palette.accentDimm,
      boxShadow: join('inset', 0, 0, 0, dt.sys.border.width.s1, dt.ref.palette.accentDimm),
    },
  },
])
