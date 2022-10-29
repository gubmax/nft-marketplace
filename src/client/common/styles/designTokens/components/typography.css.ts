import { style } from '@vanilla-extract/css'

import { gradients } from '../reference.css'
import { system } from '../system.css'

const heading = style({
  display: 'block',
  lineHeight: 1,
})

export const h1 = style([
  heading,
  {
    fontSize: system.fontSize.h1,
    fontWeight: 500,
    letterSpacing: 0.25,
  },
])

export const h2 = style([
  heading,
  {
    fontSize: system.fontSize.h2,
    fontWeight: 500,
    letterSpacing: 0,
  },
])

export const h3 = style([
  heading,
  {
    fontSize: system.fontSize.h3,
    letterSpacing: 0.15,
  },
])

export const subtitle1 = style([
  heading,
  {
    fontSize: system.fontSize.subtitle1,
    lineHeight: 1.5,
  },
])

export const body1 = style([
  heading,
  {
    fontSize: system.fontSize.body1,
  },
])

export const body2 = style([
  heading,
  {
    fontSize: system.fontSize.body2,
  },
])

export const p = style([
  heading,
  {
    fontSize: system.fontSize.body1,
    lineHeight: 1.5,
  },
])

export const highlight = style({
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  backgroundImage: gradients.primary,
})
