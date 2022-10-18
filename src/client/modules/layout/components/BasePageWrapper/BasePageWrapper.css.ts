import { style } from '@vanilla-extract/css'

import { pxToRem } from 'client/common/helpers/pxToRem'
import { SCREEN_SIZES } from 'client/common/styles/constants/screen'
import { dt } from 'client/common/styles/designTokens'

export const wrapper = style({
  position: 'relative',
  maxWidth: SCREEN_SIZES.desktop,
  padding: `${pxToRem(100)} ${dt.sys.space.s5} ${pxToRem(64)} ${dt.sys.space.s5}`,
})
