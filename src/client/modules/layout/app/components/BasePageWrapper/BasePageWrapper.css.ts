import { style } from '@vanilla-extract/css'

import { dt } from 'client/common/styles/designTokens'
import { join, pxToRem } from 'client/common/styles/helpers'

export const wrapper = style({
  position: 'relative',
  maxWidth: dt.sys.screen.desktop,
  padding: join(pxToRem(100), dt.sys.space.s5, pxToRem(64)),
})
