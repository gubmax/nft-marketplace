import { style } from '@vanilla-extract/css'

import { dt } from 'client/common/styles/designTokens'
import { pxToRem } from 'client/common/styles/helpers'

export const wrapper = style({
  height: '100vh',
  padding: dt.sys.space.s3,
  textAlign: 'center',
  overflow: 'hidden',
})

export const bgText = style([
  dt.comp.typography.highlight,
  {
    fontSize: '20vw',
    marginBottom: pxToRem(64),
    position: 'relative',
    transform: 'rotate(4deg)',
    fontWeight: 700,
    zIndex: -1,
  },
])

export const highlight = style({
  position: 'absolute',
  width: '40vw',
  height: pxToRem(40),
  background: dt.ref.palette.accentLight,
  filter: `blur(${pxToRem(80)})`,
  zIndex: -1,

  '@media': {
    [dt.sys.media.prefersColorScheme.dark]: {
      background: dt.ref.gradients.primary,
      height: pxToRem(100),
      filter: `blur(${pxToRem(140)})`,
    },
  },
})

export const description = style([
  dt.comp.typography.h3,
  {
    textAlign: 'center',
    color: dt.ref.palette.secondary,
  },
])
