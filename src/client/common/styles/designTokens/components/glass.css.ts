import { style } from '@vanilla-extract/css'

import { pxToRem } from '../../helpers'
import { palette } from '../reference.css'

export const glass = style({
  background: palette.glass,
  backdropFilter: `blur(${pxToRem(12)})`,
})
