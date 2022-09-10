import { style } from '@vanilla-extract/css'

import { palette } from './palette.css'
import { system } from './system.css'

export const surface = style({
  padding: system.space.lg,
  background: palette.surface,
  borderRadius: system.border.radius.md,
})
