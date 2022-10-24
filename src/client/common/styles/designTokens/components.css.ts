import { style, styleVariants } from '@vanilla-extract/css'

import { join } from '../helpers'
import { palette } from './reference.css'
import { system } from './system.css'

export const surface = style({
  padding: system.space.s4,
  background: palette.surface,
  border: join(system.border.width.s1, 'solid', palette.borderLight),
  borderRadius: system.border.radius.s2,
})

// Typography

const heading = style({
  display: 'block',
  lineHeight: 1,
})

export const typography = styleVariants({
  h1: [
    heading,
    {
      fontSize: system.fontSize.h1,
      fontWeight: 500,
      letterSpacing: 0.25,
    },
  ],
  h2: [
    heading,
    {
      fontSize: system.fontSize.h2,
      fontWeight: 500,
      letterSpacing: 0,
    },
  ],
  h3: [
    heading,
    {
      fontSize: system.fontSize.h3,
      letterSpacing: 0.15,
    },
  ],
  subtitle1: {
    fontSize: system.fontSize.subtitle1,
    lineHeight: 1.5,
  },
  body1: {
    fontSize: system.fontSize.body1,
  },
  body2: {
    fontSize: system.fontSize.body2,
  },
})
