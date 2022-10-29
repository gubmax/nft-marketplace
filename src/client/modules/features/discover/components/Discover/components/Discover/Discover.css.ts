import { style } from '@vanilla-extract/css'

import { dt } from 'client/common/styles/designTokens'
import { join, pxToRem } from 'client/common/styles/helpers'

export const statistics = style({
  margin: join(pxToRem(64), 0),
})

export const diamond = style({
  marginTop: pxToRem(64),
  marginBottom: pxToRem(64),
})

export const header = style({
  fontSize: pxToRem(56),
  fontWeight: 700,
  textAlign: 'center',
})

export const subtitle = style([
  dt.comp.typography.h2,
  {
    textAlign: 'center',
    color: dt.ref.palette.secondary,
  },
])
