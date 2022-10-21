import { style } from '@vanilla-extract/css'

import { pxToRem } from 'client/common/helpers/pxToRem'
import { dt } from 'client/common/styles/designTokens'

export const wrapper = style({
  position: 'relative',
  maxWidth: dt.sys.screen.desktop,
  padding: `${pxToRem(100)} ${dt.sys.space.s5} ${pxToRem(64)}`,
})
