import { style } from '@vanilla-extract/css'

import { dt } from 'client/common/styles/designTokens'
import { join, negative, pxToRem } from 'client/common/styles/helpers'

export const header = style({
  background: dt.ref.palette.surface,
  borderBottom: join(dt.sys.border.width.s1, 'solid', dt.ref.palette.borderLight),
})

export const wrapper = style({
  minWidth: dt.sys.screen.tablet,
  maxWidth: dt.sys.screen.desktop,
  height: pxToRem(56),
  padding: join(0, dt.sys.space.s5),
})

export const logo = style({
  marginLeft: negative(dt.sys.space.s2),
})

export const link = style([
  dt.comp.typography.subtitle1,
  {
    padding: join(0, dt.sys.space.s3),
    lineHeight: pxToRem(32),
    borderRadius: dt.sys.border.radius.s2,

    ':active': { color: dt.ref.palette.accent },
  },
])
