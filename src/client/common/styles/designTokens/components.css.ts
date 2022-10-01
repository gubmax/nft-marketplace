import { style } from '@vanilla-extract/css'

import { palette } from './reference.css'
import { system } from './system.css'

export const surface = style({
  padding: system.space.s4,
  background: palette.surface,
  border: `${system.border.width.s1} solid ${palette.border}`,
  borderRadius: system.border.radius.s2,
})
