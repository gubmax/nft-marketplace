import { ComplexStyleRule, style, styleVariants } from '@vanilla-extract/css'

import { dt } from 'client/common/styles/designTokens'
import { join } from 'client/common/styles/helpers'
import { ButtonVariant } from './ButtonBase'

export const wrapper = style({
  display: 'inline-block',
})

export const tag = style([
  {
    all: 'inherit',
    alignItems: 'center',
    borderRadius: 'inherit',
    cursor: 'pointer',
    display: 'flex',
    fontFamily: 'inherit',
    fontSize: dt.sys.fontSize.body1,
    fontWeight: 500,
    justifyContent: 'center',
    width: '100%',
  },
])

export const base = style({
  transition: 'background 100ms ease-out, boxShadow 100ms ease-out',

  ':hover': {
    background: dt.ref.palette.surface,
    boxShadow: join('inset', 0, 0, 0, dt.sys.border.width.s1, dt.ref.palette.border),
  },

  ':active': {
    background: dt.ref.palette.accentDimm,
    boxShadow: join('inset', 0, 0, 0, dt.sys.border.width.s1, dt.ref.palette.accentDimm),
  },
})

export const buttonVariants = styleVariants<Record<ButtonVariant, ComplexStyleRule>>({
  contained: {
    border: 0,
    background: dt.ref.gradients.accent,
    color: dt.sys.color.dark.primary,
    boxShadow: join('inset', 0, 0, 0, dt.sys.border.width.s1, dt.ref.palette.accent),
  },
  containedLight: {
    border: 0,
    background: dt.sys.color.light.bg,
    color: dt.sys.color.light.primary,

    ':focus-visible': { outlineColor: dt.sys.color.dark.primary },
  },
  outline: {
    border: join(dt.sys.border.width.s1, 'solid', dt.ref.palette.accentLight),
    background: 'transparent',
    color: dt.ref.palette.accentLight,
    transition: 'background 100ms ease-out',

    ':active': { background: dt.ref.palette.accentDimm },
  },
  outlineLight: {
    border: join(dt.sys.border.width.s1, 'solid', dt.sys.color.dark.primary),
    background: 'transparent',
    color: dt.sys.color.dark.primary,

    ':focus-visible': { outlineColor: dt.sys.color.dark.primary },
  },
})
