import { style } from '@vanilla-extract/css'

import { dt } from 'client/common/styles/designTokens'
import { join, pxToRem } from 'client/common/styles/helpers'

export const link = style([
  dt.comp.typography.h3,
  {
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    backgroundImage: dt.ref.gradients.primary,
    borderRadius: dt.sys.border.radius.s2,
    fontWeight: 700,
    lineHeight: pxToRem(32),
    padding: join(0, dt.sys.space.s2),
  },
])
