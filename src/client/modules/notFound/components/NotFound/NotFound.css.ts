import { style } from '@vanilla-extract/css'

import { dt } from 'client/common/styles/designTokens'

export const wrapper = style({
  height: '100vh',
  padding: dt.sys.space.s3,
  textAlign: 'center',
  overflow: 'hidden',
})

export const bgText = style({
  position: 'absolute',
  top: '50%',
  fontSize: '45vw',
  fontWeight: 900,
  color: dt.ref.palette.borderLight,
  zIndex: -1,
  transform: 'rotate(4deg) translateY(-50%)',

  '@media': {
    [dt.sys.media.maxWidth.tablet]: {
      position: 'unset',
      transform: 'rotate(4deg)',
    },
  },
})

export const title = style([
  dt.comp.typography.h1,
  {
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    backgroundImage: dt.ref.gradients.primary,
    display: 'block',
    fontWeight: 700,
  },
])
