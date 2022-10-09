import { ComplexStyleRule, styleVariants } from '@vanilla-extract/css'

import { pxToRem } from 'client/common/helpers/pxToRem'
import { dt } from 'client/common/styles/designTokens'
import { IconVariant } from './withIcon'

// State

export const iconStateStyles = styleVariants<Record<IconVariant, ComplexStyleRule>>({
  accent: { fill: dt.ref.palette.accentLight },
  active: {
    fill: 'url(#lg-accent-light)',
    '@media': { [dt.sys.media.prefersColorScheme.dark]: { fill: 'url(#lg-accent-dark)' } },
  },
  primary: { fill: dt.ref.palette.primary },
  secondary: { fill: dt.ref.palette.secondary },
  white: { fill: dt.sys.color.dark.primary },
})

// Sizes

export const iconSizeStyles = styleVariants(
  {
    sm: pxToRem(24),
    xl: pxToRem(112),
  },
  (size) => ({ width: size, height: size }),
)
