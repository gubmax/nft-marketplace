import { ComplexStyleRule, style, styleVariants } from '@vanilla-extract/css'

import { dt } from 'client/common/styles/designTokens'
import { TooltipPositions } from './Tooltip'

export const wrapper = style({ position: 'relative' })

export const activator = style({})

export const tooltip = style([
  dt.comp.typography.body2,
  {
    background: dt.ref.palette.secondary,
    borderRadius: dt.sys.border.radius.s1,
    color: dt.sys.color.dark.primary,
    padding: `${dt.sys.space.s2} ${dt.sys.space.s3}`,
    pointerEvents: 'none',
    position: 'absolute',
    visibility: 'hidden',
    whiteSpace: 'nowrap',
    zIndex: 1,

    selectors: {
      [`${activator}:hover + &`]: { visibility: 'visible' },
    },
  },
])

const POSITION_VAL = `calc(100% + ${dt.sys.space.s2})`

export const tooltipVariants = styleVariants<Record<TooltipPositions, ComplexStyleRule>>({
  top: {
    bottom: POSITION_VAL,
    left: '50%',
    paddingBottom: dt.sys.space.s2,
    transform: 'translateX(-50%)',
  },
  right: {
    top: '50%',
    left: POSITION_VAL,
    paddingLeft: dt.sys.space.s2,
    transform: 'translateY(-50%)',
  },
  bottom: {
    top: POSITION_VAL,
    left: '50%',
    paddingTop: dt.sys.space.s2,
    transform: 'translateX(-50%)',
  },
  left: {
    top: '50%',
    right: POSITION_VAL,
    paddingRight: dt.sys.space.s2,
    transform: 'translateY(-50%)',
  },
})
