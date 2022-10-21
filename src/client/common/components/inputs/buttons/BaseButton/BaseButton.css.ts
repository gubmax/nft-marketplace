import { ComplexStyleRule, style, styleVariants } from '@vanilla-extract/css'

import { dt } from 'client/common/styles/designTokens'
import { ButtonVariant } from './BaseButton'

export const wrapper = style({
  display: 'inline-block',
})

export const tag = style([
  {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'flex',
    fontFamily: 'inherit',
    fontSize: dt.sys.fontSize.body1,
    fontWeight: 500,
    justifyContent: 'center',
    padding: `0 ${dt.sys.space.s3}`,
    width: '100%',
  },
])

export const buttonVariants = styleVariants<Record<ButtonVariant, ComplexStyleRule>>({
  primary: {
    border: 0,
    background: dt.ref.gradients.accent,
    color: dt.sys.color.dark.primary,
  },
  primaryLight: {
    border: 0,
    background: dt.sys.color.light.bg,
    color: dt.sys.color.light.primary,
  },
  outline: {
    border: `${dt.sys.border.width.s1} solid ${dt.ref.palette.accentLight}`,
    background: 'transparent',
    color: dt.ref.palette.accentLight,
  },
  outlineLight: {
    border: `${dt.sys.border.width.s1} solid ${dt.sys.color.dark.primary}`,
    background: 'transparent',
    color: dt.sys.color.dark.primary,
  },
})
