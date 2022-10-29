import { keyframes, style } from '@vanilla-extract/css'

import { dt } from 'client/common/styles/designTokens'
import { join, pxToRem } from 'client/common/styles/helpers'

const ANIMATION_DURATION = 4000

export const container = style({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  position: 'relative',
  width: pxToRem(100),
  perspective: pxToRem(400),
  perspectiveOrigin: '50% 40%',
})

export const pyramid = style({
  position: 'relative',
  width: pxToRem(100),
  height: pxToRem(200),
})

const spin = keyframes({
  '0%': { transform: 'rotateY(0deg) rotateX(30deg)', borderBottomColor: '#7a90f0' },
  // borderBottomColor: 'lighten($color, 5%)',
  '25%': { transform: 'rotateY(90deg) rotateX(30deg)', borderBottomColor: '#4c69eb', opacity: 1 },
  // borderBottomColor: 'darken($color, 5%)',
  '25.1%': { opacity: 0 },
  '50%': { transform: 'rotateY(180deg) rotateX(30deg)', borderBottomColor: '#3e5eea' },
  // borderBottomColor: 'darken($color, 12%)',
  '74.9%': { opacity: 0 },
  '75%': { transform: 'rotateY(270deg) rotateX(30deg)', borderBottomColor: '#3e5eea', opacity: 1 },
  // borderBottomColor: 'darken($color, 15%)',
  '100%': { transform: 'rotateY(360deg) rotateX(30deg)', borderBottomColor: '#7a90f0' },
  // borderBottomColor: 'lighten($color, 5%)',
})

const spinBottom = keyframes({
  '0%': {
    transform: 'rotateZ(-180deg) rotateY(0deg) rotateX(30deg)',
    borderBottomColor: '#7a90f0',
  },
  // borderBottomColor: 'lighten($color, 5%)',
  '25%': {
    transform: 'rotateZ(-180deg) rotateY(90deg) rotateX(30deg)',
    borderBottomColor: '#4c69eb',
    opacity: 1,
  },
  // borderBottomColor: 'darken($color, 5%)',
  '25.1%': { opacity: 0 },
  '50%': {
    transform: 'rotateZ(-180deg) rotateY(180deg) rotateX(30deg)',
    borderBottomColor: '#3e5eea',
  },
  // borderBottomColor: 'darken($color, 12%)',
  '74.9%': { opacity: 0 },
  '75%': {
    transform: 'rotateZ(-180deg) rotateY(270deg) rotateX(30deg)',
    borderBottomColor: '#3e5eea',
    opacity: 1,
  },
  // borderBottomColor: 'darken($color, 15%)',
  '100%': {
    transform: 'rotateZ(-180deg) rotateY(360deg) rotateX(30deg)',
    borderBottomColor: '#7a90f0',
  },
  // borderBottomColor: 'lighten($color, 5%)',
})

export const side = style({
  position: 'absolute',
  left: 0,
  width: 0,
  height: 0,
  borderLeft: join(pxToRem(58), 'solid', 'transparent'),
  borderRight: join(pxToRem(58), 'solid', 'transparent'),
  borderBottom: join(pxToRem(110), 'solid', '#647dee'),
  transformOrigin: '50% 0',
})

export const sideTop = style([
  side,
  {
    top: 0,
    animation: join(spin, `${ANIMATION_DURATION}ms`, 'infinite', 'linear'),
  },
])

export const sideBottom = style([
  side,
  {
    bottom: '-50%',
    animation: join(spinBottom, `${ANIMATION_DURATION}ms`, 'infinite', 'linear', 'reverse'),
  },
])

export const left = style({ animationDelay: `${-Math.floor(ANIMATION_DURATION * 0.75)}ms` })
export const back = style({ animationDelay: `${-Math.floor(ANIMATION_DURATION / 2)}ms` })
export const right = style({ animationDelay: `${-Math.floor(ANIMATION_DURATION / 4)}ms` })

export const highlight = style({
  position: 'absolute',
  width: '100%',
  height: '100%',
  background: dt.ref.gradients.accent,
  transform: 'rotate(45deg)',
  filter: `blur(${pxToRem(50)})`,

  '@media': {
    [dt.sys.media.prefersColorScheme.dark]: {
      width: '150%',
      height: '150%',
      filter: `blur(${pxToRem(150)})`,
    },
  },
})
