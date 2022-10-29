import { style } from '@vanilla-extract/css'

import { join } from '../../helpers'
import { palette } from '../reference.css'
import { system } from '../system.css'

export const surface = style({
  padding: system.space.s4,
  background: palette.surface,
  border: join(system.border.width.s1, 'solid', palette.borderLight),
  borderRadius: system.border.radius.s2,
})
