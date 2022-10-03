import { ComplexStyleRule, style, styleVariants } from '@vanilla-extract/css'

import { pxToRem } from 'client/common/helpers/pxToRem'
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
    height: pxToRem(40),
    justifyContent: 'center',
    padding: `0 ${dt.sys.space.s3}`,
    width: '100%',
  },
])

export const buttonVariants = styleVariants<Record<ButtonVariant, ComplexStyleRule>>({
  outline: {
    border: `${dt.sys.border.width.s1} solid ${dt.ref.palette.accent}`,
    background: 'transparent',
    color: dt.ref.palette.accent,
  },
  primary: {
    border: 0,
    background: dt.ref.gradients.accent,
    color: dt.sys.color.dark.primary,
  },
})
