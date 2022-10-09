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
  outline: {
    border: `${dt.sys.border.width.s1} solid ${dt.ref.palette.accentLight}`,
    background: 'transparent',
    color: dt.ref.palette.accentLight,
  },
  primary: {
    border: 0,
    background: dt.ref.gradients.accent,
    color: dt.sys.color.dark.primary,
  },
})
